import React from 'react'
import {connect} from 'react-redux'
import TextInput from '../components/TextInput'
import {name,email,password} from '../store/actions/UserActions'
import '../css/Sign.css'
import {__createUser} from '../services/UserServices'

const mapStateToProps =({user})=>{
    return{
        user
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
        setName:(value)=>dispatch(name(value)),
        setEmail:(value)=>dispatch(email(value)),
        setPassword:(value)=>dispatch(password(value))
    }

}
const SignUp=(props)=>{
    const{name,email,password}=props.user
    console.log(props)

    const handleChangeN=(e)=>{
        props.setName(e.target.value)
    }

    const handleChangeE=(e)=>{
        props.setEmail(e.target.value)
    }

    const handleChangeP=(e)=>{
        props.setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const formData = {
                name,
                email,
                password
            }
          const res = await __createUser(formData)
          props.setName('')
          props.setPassword('')
          props.setEmail('')
        //   props.history.push('/login')
        } catch (error) {
          console.log(error)
        }
      } 

    return  (
        <div className='signup'>
            <br/>
            <form className='form flex-col box' onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
                <p>Name</p>
                <TextInput
                    placeholder="What's Your Name"
                    type='name'
                    name='name'
                    value={name}
                    onChange={handleChangeN}
                />

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
               
                <button className='button'>SignUp</button>
            </form>
        </div>
    
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)