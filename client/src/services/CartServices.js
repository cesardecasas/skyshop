import ApiClient from './ApiClient'

export const __getItems=async(id)=>{
    try {
        const res = await ApiClient.get(`/cart/${id}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const __removeItem=async(id)=>{
    try {
        const res = await ApiClient.delete(`/cart/${id}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const __addItem=async(userId,productId)=>{
    try {
        const res = await ApiClient.post(`/cart/${userId}/${productId}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}