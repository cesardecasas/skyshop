import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import '../css/Home.css'
import {change} from '../store/actions/UploadActions'
import TextInput from '../components/TextInput'
import '../css/Upload.css'
import {__addProduct} from '../services/ProductServices'


const mapStateToProps =({uploadState,user})=>{
    return{
        uploadState,
        user
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
        changeValue:(name,value)=>dispatch(change(name,value))
    }
}

const UploadProduct =(props)=>{
    const{name,descrption,stock,price} = props.uploadState
    

   const handleChange=(e)=>{
       if(e.target.name === 'price' || e.target.name === 'stock'){
           props.changeValue(e.target.name,parseInt(e.target.value))
           return
       }else if(e.target.name === 'image'){
        props.changeValue(e.target.name,e.target.files[0])
        return
       }
       props.changeValue(e.target.name,e.target.value)
   }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
            const formData = new FormData()
            Object.keys(props.uploadState).forEach((k) => formData.append(k, props.uploadState[k]))
            const person = await __addProduct(props.user.currentUser.id,formData)
        } catch (error) {
            console.log(error)
        }
        
        
    }

    return(
        <div className='main'>
            <br/>
            <form className='upload' onSubmit={handleSubmit}>
                <h4>Product Name</h4>
            <TextInput
                        placeholder='description'
                        type='text'
                        name='name'
                        value={name}
                        onChange={handleChange}
                        className="form-control me-2 space"
                    />
                <h4>Product Description</h4>
            <TextInput
                        placeholder='Description'
                        type='text'
                        name='description'
                        value={descrption}
                        onChange={handleChange}
                        className="form-control me-2 space"
                    />
            <h4>Image</h4>
            <input 
                type='file' 
                placeholder='Upload Image' 
                name='image' 
                onChange={handleChange}
                className='name file'
            />
            <h4>Stock</h4>
            <input 
                type='number' 
                placeholder='Stock' 
                name='stock'
                value={stock}
                onChange={handleChange}
                className='name'
            />
            <h4>Product Price</h4>
            <input 
                type='number' 
                placeholder='Price(whole numbers)' 
                name='price'
                value={price}
                onChange={handleChange}
                className='name'
            />
            <button>Post Product</button>
            </form>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadProduct)