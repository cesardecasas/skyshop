import React from 'react';
import ReactDOM from 'react-dom';
import { loadStripe } from '@stripe/stripe-js';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51I6QY0CGQq3POs28QxKpCpJROwKJpzzT29ELO3nWIfcyUVjwsi75byLziqawsSy8G6sxOymjDp3KbZfx87FafL2U00iNNRL1DT');

function CheckOut() {
  return (
    <button role="link">
      Checkout
    </button>
  );
}

export default CheckOut