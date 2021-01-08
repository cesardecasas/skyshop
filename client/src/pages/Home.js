import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import {getRandom} from '../store/actions/HomeActions'
import '../css/Home.css'
import {__checkOut} from '../services/CheckOutService'


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
    

    const populate=()=>{
        props.fetchProducts()
        
    }

    const handleClick = async (event) => {
        __checkOut()
      };

      console.log('home', props)
    useEffect(()=>{
        populate()
    },[])

    return(
        <div>
            {props.user.currentUser ? <h2>Welcome back, {props.user.currentUser.name}</h2>:<p>For a better experience, sing in</p>}
            <div className='products'>
                {props.homeState.items ? props.homeState.items.map((item, index)=>{
                    
                return(    
                <div className="card" style={{width: '18rem'}} key={index}>
                    <img src={item.image} className="card-img-top" style={{width: '18rem', height:'12rem'}} alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <h5 className="card-text">${item.price}</h5>
                        <p className="card-text">{item.description}</p>
                        <button>Add to Cart</button>
                    </div>
                </div>)
                })
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