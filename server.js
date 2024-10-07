const express = require('express');
const Stripe = require('stripe');
const cors = require('cors');

const app = express();
const stripe = Stripe('your-secret-key-from-stripe');

app.use(cors());
app.use(express.json());

app.post('/create-payment-intent', async (req, res) => {
  try {
    const { paymentMethodId, amount } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'usd',
      payment_method: paymentMethodId,
      confirm: true,
    });

    res.send({ paymentIntent });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
