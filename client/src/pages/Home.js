import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import {getRandom} from '../store/actions/HomeActions'
import '../css/Home.css'

const mapStateToProps =({homeState,user})=>{
    return{
        homeState,
        user
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
        fetchProducts:()=>dispatch(getRandom())
    }
}

const Home =(props)=>{
    console.log(props)

    const populate=()=>{
        props.fetchProducts()
        console.log(props.homeState)
    }

    useEffect(()=>{
        populate()
    },[])

    return(
        <div>
            {props.user.currentUser ? <h2>Welcome back, {props.user.currentUser.name}</h2>:<p>For a better expereince sing in</p>}
            <div className='products'>
                {props.homeState.items ? props.homeState.items.map((item, index)=>(
                <div className="card" style={{width: '18rem'}} key={index}>
                    <img src={item.image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.description}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                ))
                :
                <div class="spinner-grow text-info" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                }
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)