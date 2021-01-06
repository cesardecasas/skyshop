import React, { useEffect } from 'react'
import {connect} from 'react-redux'




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

    const populate=()=>{
        props.fetchProducts()
        
    }

    

    useEffect(()=>{
        populate()
    },[])

    return(
        <div>
            <h1>hello</h1>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)