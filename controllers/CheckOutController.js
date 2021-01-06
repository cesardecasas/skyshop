const Stripe = require('stripe');
const stripe = Stripe('sk_test_51I6QY0CGQq3POs28c9OyxoGfiIphNCzRoTsApov1cWrclSOsU5Ekdu6elHfv1XUJEcKutRq6QU7WLPp0U89OHaQv00iM9xxyTd');

const checkOutSession = async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'T-shirt',
            },
            unit_amount: 2000,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:3000/checkout',
      cancel_url: 'https://example.com/cancel',
    });
  
    res.json({ id: session.id });
  }


module.exports = {
    checkOutSession
}