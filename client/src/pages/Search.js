import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import '../css/Search.css'
import {__addItem} from '../services/CartServices'
import {getItem} from '../store/actions/HomeActions'



const mapStateToProps =({homeState,user})=>{
    return{
        homeState,
        user
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
        selectItem:(value)=>dispatch(getItem(value))
        
    }
}

const Search =(props)=>{
    
    const {searchItems} = props.homeState
    
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
        
    },[])

    return(
        <div className='main'>
            {searchItems ? searchItems.map((item,index)=>{
                
            return<div className='item'>
                    <div className="card mb-3" style={{width:'640px', height: '185px'}} key={index}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={item.image} alt="..." style={{width:'200px', height: '180px'}}/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                <h5 className="card-title productName" onClick={()=>productDetail(item.id)}>{item.name}</h5>
                                <p className="card-text">{item.description}</p>
                                <p className="card-text">${item.price}</p>
                                <button onClick={()=>handleClick(item.id)}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </div> 
            }):
            <div>
                ...Loading
            </div>
            }
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)