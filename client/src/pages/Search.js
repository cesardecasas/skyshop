import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import '../css/Search.css'



const mapStateToProps =({homeState})=>{
    return{
        homeState
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
        
    }
}

const Search =(props)=>{
    
    const {searchItems} = props.homeState
    

    

    useEffect(()=>{
        
    },[])

    return(
        <div className='main'>
            {searchItems ? searchItems.map((item,index)=>{
                console.log(item.description.length)
            return<div className='item'>
                    <div class="card mb-3" style={{width:'640px', height: '185px'}} key={index}>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={item.image} alt="..." style={{width:'200px', height: '180px'}}/>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                <h5 class="card-title">{item.name}</h5>
                                <p class="card-text">{item.description}</p>
                                <p class="card-text">${item.price}</p>
                                <button>Add to Cart</button>
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