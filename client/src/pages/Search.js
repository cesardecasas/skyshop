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
    console.log(props)
    const {searchItems} = props.homeState
    

    

    useEffect(()=>{
        
    },[])

    return(
        <div className='main'>
            {searchItems ? searchItems.map((item,index)=>{

            return<div className='item'>
                    <div class="card mb-3" style={{width:'640px', height: '155px'}} key={index}>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={item.image} alt="..." style={{width:'200px', height: '150px'}}/>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                <h5 class="card-title">{item.name}</h5>
                                <p class="card-text">{item.description}</p>
                                <p class="card-text"><small class="text-muted">{item.price}</small></p>
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