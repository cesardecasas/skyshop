const Stripe = require('stripe');
const stripe = Stripe('sk_test_51I6QY0CGQq3POs28c9OyxoGfiIphNCzRoTsApov1cWrclSOsU5Ekdu6elHfv1XUJEcKutRq6QU7WLPp0U89OHaQv00iM9xxyTd');

const checkOutSession = async (req, res) => {
    const {line_items} =req.body
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: line_items,
      mode: 'payment',
      success_url: 'http://localhost:3000/checkout',
      cancel_url: 'http://localhost:3000',
    });
  
    res.json({ id: session.id });
  }


module.exports = {
    checkOutSession
}