import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import {getRandom, getItem} from '../store/actions/HomeActions'
import '../css/Home.css'
import {__addItem} from '../services/CartServices'



const mapStateToProps =({homeState,user})=>{
    return{
        homeState,
        user
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
        fetchProducts:()=>dispatch(getRandom()),
        selectItem:(value)=>dispatch(getItem(value))
    }
}

const Home =(props)=>{
    const populate=()=>{
        props.fetchProducts()
        
    }

    const handleClick = async (itemId) => {
        if(props.user.currentUser){
            __addItem(props.user.currentUser.id,itemId)
        }else{
            props.history.push('/login')
        }
      };
    
    const productDetail = async(id)=>{
        try {
            await props.selectItem(id)
            props.history.push('/detail')
        } catch (error) {
            console.log(error)
        }
    }

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
                        <h5 className="card-title productName" onClick={()=>productDetail(item.id)}>{item.name}</h5>
                        <h5 className="card-text">${item.price}</h5>
                        <p className="card-text">{item.description}</p>
                        <button onClick={()=>handleClick(item.id)}>Add to Cart</button>
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