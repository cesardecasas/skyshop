import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import '../css/Cart.css'
import {getItems} from '../store/actions/CartActions'
import {__checkOut} from '../services/CheckOutService'
import {__removeItem} from '../services/CartServices'

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
    const session = ()=>{
        if(!props.user.currentUser){
            props.history.push('/login')
        }else{
            props.populate(props.user.currentUser.id)
        }
    }

    const remove =async(id)=>{
        try {
            await __removeItem(id)
            await props.populate(props.user.currentUser.id)
        } catch (error) {
            console.log(error)
        }
    }

    let  total = 0

    const handleCheckOut=async()=>{
        
        __checkOut(cartItems)
    }
    useEffect(()=>{
        session()
    },[])
    return  (
        <div className='main'>
            
                {cartItems ? cartItems.map((item,index)=>{
                    const {image,name,description,price,id} = item.Products[0]
                    total +=price

            return <div className='item' key={index}>
            <div className="card mb-3" style={{width:'640px', height: '185px'}} >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={image} alt="..." style={{width:'200px', height: '180px'}}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text">${price}</p>
                        <button onClick={()=>remove(id)}>Remove Item</button>
                        </div>
                    </div>
                </div>
            </div>
    </div> 
                }) : <h3>You have no items in your cart</h3>}
            {cartItems ?
            <div className='checkout'>
                <h3>Your Total is</h3>
                <h4>${total}</h4>
                <button onClick={()=>handleCheckOut()}>Checkout</button>
            </div>:
            <h1></h1>
            }
        </div>
    )
        
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)