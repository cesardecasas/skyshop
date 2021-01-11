import React,{ useEffect} from 'react'
import {Switch,Route} from 'react-router-dom'
import Home from '../pages/Home'
import {__CheckSession} from '../services/UserServices'
import {connect} from 'react-redux'
import {auth, user} from '../store/actions/UserActions'
import Layout from './Layout'
import SignUp from '../pages/SignUp'
import LogIn from '../pages/LogIn'
import CheckOut from '../pages/CheckOut'
import Search from '../pages/Search'
import ProtectedRoute from './ProtectedRoute'
import UploadProduct from '../pages/UploadProduct' 
import Cart from '../pages/Cart'
import Product from '../pages/Product'


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

    const verifyTokenValid = async () => {
        const token = localStorage.getItem('token')
        
        if (token) {
          try {
            const session = await __CheckSession()
            
            props.setAuthenticated(true)
            props.setCurrentUser(session.user)
            localStorage.setItem('user',JSON.stringify(session.user));
            
            
            
          } catch (error) {
            console.log(error);
            props.setCurrentUser(null)
            props.setAuthenticated(false)
            localStorage.clear()
            
          }
        }
      }
    
     

      useEffect(()=>{
        verifyTokenValid()
        },[props.user.authenticated])

    return(
        <div>
            
            <Switch>
                <Layout>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/signup' component={SignUp}/>
                    <Route path='/login' component={LogIn}/>
                    <Route path='/checkout' component={CheckOut}/>
                    <Route path='/search' component={Search}/>
                    <Route path='/upload' component={UploadProduct}/>
                    <Route path='/cart' component={Cart}/>
                    <Route path='/detail' component={Product}/>
                </Layout>
            </Switch>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Router)