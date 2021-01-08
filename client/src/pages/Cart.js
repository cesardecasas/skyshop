import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import '../css/Cart.css'
import {getItems} from '../store/actions/CartActions'

const mapStateToProps =({cart, user})=>{
    return{
        cart,
        user
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
        populate:(value)=>dispatch(getItems(value))
        
    }
}


const Cart = (props)=>{
    
    const {cartItems} = props.cart

    
    useEffect(()=>{
        props.populate(props.user.currentUser.id)
    },[])
    return  (
        <div className='main'>
            
                {cartItems ? cartItems.map((item,index)=>{
                    const {image,name,description,price} = item.Products[0]
            return <div className='item'>
            <div className="card mb-3" style={{width:'640px', height: '185px'}} key={index}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={image} alt="..." style={{width:'200px', height: '180px'}}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text">${price}</p>
                        <button>Remove Item</button>
                        </div>
                    </div>
                </div>
            </div>
    </div> 
                }) : <h3>You have no items in your cart</h3>}
            <div className='checkout'>

            </div>
        </div>
    )
        
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)