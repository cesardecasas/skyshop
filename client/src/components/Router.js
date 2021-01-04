import React,{useState, useEffect} from 'react'
import {Switch,Route} from 'react-router-dom'
import Home from '../pages/Home'
import {__CheckSession} from '../services/UserServices'
import {connect} from 'react-redux'
import {auth, user} from '../store/actions/UserActions'


const mapStateToProps =({user})=>{
    return{
        user
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
        setAuthenticated:(value)=>dispatch(auth(value)),
        setCurrentUser:(value)=>dispatch(user(value))
    }
}

const Router =(props)=>{


    let a=()=> props.history.push('/home')
    let b=()=> props.history.push('/')

    const verifyTokenValid = async () => {
        const token = localStorage.getItem('token')
        
        if (token) {
          try {
            const session = await __CheckSession()
            
            props.setAuthenticated(true)
            props.setCurrentUser(session.user)
            localStorage.setItem('user',JSON.stringify(session.user));
            console.log(session.user);
            a()
            
          } catch (error) {
            console.log(error);
            props.setCurrentUser(null)
            props.setAuthenticated(false)
            localStorage.clear()
            b()
          }
        }
      }
    
     const toggleAuthenticated = (value, user, done) => {
       props.setAuthenticated(value)
       props.currentUser(user)
       
      }

      useEffect(()=>{
        verifyTokenValid()
        console.log(props.history)
        },[props.user.authenticated])

    return(
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Router)