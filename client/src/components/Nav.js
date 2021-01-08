import React from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import {auth, user} from '../store/actions/UserActions'
import {search, getSearched} from '../store/actions/HomeActions'
import {Search, LogOut, ShoppingCart} from 'react-feather'
import '../css/Nav.css'
import TextInput from './TextInput'


const mapStateToProps =({user, homeState})=>{
    return{
        user,
        homeState
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
        setAuthenticated:(value)=>dispatch(auth(value)),
        setCurrentUser:(value)=>dispatch(user(value)),
        searchValue:(name,value)=>dispatch(search(name,value)),
        getSearch:(value)=>dispatch(getSearched(value))
    }
}


const Nav = (props)=>{
    const {search} = props.homeState
    const history = useHistory()

    const handleChange=(e)=>{
        props.searchValue(e.target.name,e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        props.getSearch(search)
        history.push('/search')
    }

    const click=(e)=>{
       history.push(e.target.value)
    }
    
    return props.user.authenticated && props.user.currentUser  ? (
        <header >

            

            <nav className='navbar navbar-light'>

                <NavLink className="btn btn-outline-primary" exact to='/' >
                    Home
                </NavLink >
                <form className="d-flex" onSubmit={handleSubmit}>
                    <TextInput
                        placeholder='Search'
                        type='text'
                        name='search'
                        value={search}
                        onChange={handleChange}
                        className="form-control me-2"
                    />
                        
                        <button className="btn btn-outline-success" type="submit"><Search color='black' size={20}/></button>
                        
                </form>
                <select name="products" id="products" onClick={click}>
                    <option value="/upload" onClick={click}>My Products</option>
                    <option value="saab">Upload Product</option>
                </select>
                <NavLink className="btn btn-outline-primary" to='/cart' >
                    <ShoppingCart/>
                </NavLink >
                <NavLink className="btn btn-outline-primary" onClick={() => {
                    localStorage.clear()
                    props.setAuthenticated(false)
                    props.setCurrentUser(null)
                }} 
                    exact to='/'>
                        <LogOut/>
                </NavLink>
              
            </nav>
        </header>
    ) : (
        <header>

            <nav className='navbar navbar-light'>
                <NavLink className="btn btn-outline-primary" exact to='/' >
                     Home
                </NavLink>
                <form className="d-flex" onSubmit={handleSubmit}>
                <TextInput
                        placeholder='Search'
                        type='text'
                        name='search'
                        value={search}
                        onChange={handleChange}
                        className="form-control me-2"
                    />
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