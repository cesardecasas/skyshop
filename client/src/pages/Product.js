import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import {__addItem} from '../services/CartServices'
import '../css/Product.css'


const mapStateToProps =({homeState,user})=>{
    return{
        homeState,
        user
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
    }
}

const Product=(props)=>{
    

    const handleClick = async (itemId) => {
        if(props.user.currentUser){
            __addItem(props.user.currentUser.id,itemId)
        }else{
            props.history.push('/login')
        }
      };
    
    

    useEffect(()=>{
        
    },[])

    return(
        <div>
            <div className='body'>
                <br/>
                {props.homeState.item ? props.homeState.item.map((item, index)=>{
                    
                return(
                    <div className='detail'>
                        <div className='show'>
                            <img src={item.image} alt='product' className='product'/> 
                        </div>
                        <div className='information'>
                            <h3>{item.name}</h3>
                            <br/>
                            <p>{item.description}</p>
                            <br/>
                            <p>Stock remaining: {item.stock}</p>
                            <br/>
                            <h4>${item.price}</h4>
                            <br/>
                            <button onClick={()=>handleClick(item.id)}>Add to Cart</button>
                        </div>
                    </div>
                )
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

export default connect(mapStateToProps, mapDispatchToProps)(Product)