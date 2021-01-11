import ApiClient from './ApiClient'
import { loadStripe } from '@stripe/stripe-js';


export const __checkOut=async(items)=>{
    try {
      const stripePromise = loadStripe('pk_test_51I6QY0CGQq3POs28QxKpCpJROwKJpzzT29ELO3nWIfcyUVjwsi75byLziqawsSy8G6sxOymjDp3KbZfx87FafL2U00iNNRL1DT');
      
        const stripe = await stripePromise;
    
        // Call your backend to create the Checkout Session
        
        let line_items = []
        
        if(items[0].Products){
          let products = items.map(item=>item.Products[0])
        products.forEach(product=>line_items.push({
          price_data: {
            currency: 'usd',
            product_data: {
              name: product.name,
            },
            unit_amount: product.price,
          },
          quantity: 1,
        }))
        }else{
          let products = items
        products.forEach(product=>line_items.push({
          price_data: {
            currency: 'usd',
            product_data: {
              name: product.name,
            },
            unit_amount: product.price,
          },
          quantity: 1,
        }))
        }
        

        const res = await ApiClient.post('/checkout/session',{line_items})
        console.log(res)
        const session = res.data
    
        // When the customer clicks on the button, redirect them to Checkout.
        const result = await stripe.redirectToCheckout({
          sessionId: session.id
        });
        
    
        if (result.error) {
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer
          // using `result.error.message`.
          console.log(result.error)
        }
    } catch (error) {
      console.log(error)
        return error
    }
}
