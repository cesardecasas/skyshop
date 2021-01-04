import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {auth, user} from '../store/actions/UserActions'
import {Search} from 'react-feather'
import '../css/Nav.css'

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


const Nav = (props)=>{



    return props.user.authenticated && props.user.currentUser  ? (
        <header >

            

            <nav className='navbar navbar-light'>

                <NavLink className="btn btn-outline-primary" to='/home' >
                    Home
                </NavLink >
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit"><Search color='black' size={20}/></button>
                </form>
                <NavLink className="btn btn-outline-primary" onClick={() => {
                    localStorage.clear()
                    props.setAuthenticated(false)
                }} 
                    exact to='/'>
                        Sign Out
                </NavLink>
              
            </nav>
        </header>
    ) : (
        <header>

            <nav className='navbar navbar-light'>
                <NavLink className="btn btn-outline-primary" exact to='/' >
                     Home
                </NavLink>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit"><Search color='black' size={20}/></button>
                </form>
                <NavLink className="btn btn-outline-primary" exact to='/signup'>
                    Sign Up
                </NavLink>
                <NavLink className="btn btn-outline-primary" exact to='/login'>
                    Log In
                </NavLink>
            </nav>
        </header>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)