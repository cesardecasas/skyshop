import ApiClient from './ApiClient'


  export const  __CheckSession = async()=>{
    try {
      const res = await ApiClient.get('/user/session')
      return res.data
    } catch (error) {
      throw error
    }
  }

  


  export const __createUser =async(formData)=>{
    try {
      const res = await ApiClient.post('/user/register', formData)
      return res.data
    } catch (error) {
      throw error 
    }
  }

  export const __LoginUser = async (userData) => {
    try {
      const res = await ApiClient.post('/user/login', userData)
      localStorage.setItem('token', res.data.token)
      return res.data
    } catch (error) {
      throw error
    }
  }