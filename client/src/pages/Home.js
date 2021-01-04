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

const Home =(props)=>{


    return(
        <div>
            <h1>Hello World</h1>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)