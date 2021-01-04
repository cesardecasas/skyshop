import React from 'react'
import {connect} from 'react-redux'
import TextInput from '../components/TextInput'
import {email,password, error,user,auth} from '../store/actions/UserActions'
import '../css/Sign.css'
import {__LoginUser} from '../services/UserServices'
import {XCircle} from 'react-feather'

const mapStateToProps =({user})=>{
    return{
        user
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
        setEmail:(value)=>dispatch(email(value)),
        setPassword:(value)=>dispatch(password(value)),
        setFormError:(value)=>dispatch(error(value)),
        setAuthenticated:(value)=>dispatch(auth(value)),
        setCurrentUser:(value)=>dispatch(user(value))
    }

}
const LogIn=(props)=>{
    const{email,password, error}=props.user
    console.log(props)

    

    const handleChangeE=(e)=>{
        props.setEmail(e.target.value)
    }

    const handleChangeP=(e)=>{
        props.setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const userInf={email, password}
            
            const loginData = await __LoginUser(userInf)          
            props.setAuthenticated(true)
            props.setCurrentUser(loginData.user)
            props.history.push('/')
          
          
          return
        } catch (error) {
          props.setFormError(true)
        }
      } 

    return  (
        <div className='signup'>
            <br/>
            <form className='form flex-col box' onSubmit={handleSubmit}>
            <h2>Log In</h2>
            {error ? <p className='alert alert-danger'><XCircle/>Invalid credentials</p>:<p></p>}
                <p>Email</p>
                <TextInput
                    placeholder='Your Email'
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChangeE}
                />
                
                <p>Password</p>
                <TextInput
                    placeholder='Your Password'
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChangeP}
                />
               
                <button className='button'>Log In</button>
            </form>
        </div>
    
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)