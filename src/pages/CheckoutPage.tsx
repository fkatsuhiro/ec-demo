import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export function CheckoutPage() {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useCart();

  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [error, setError] = useState('');

  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validCard = import.meta.env.VITE_CREDIT_CARD_NUMBER;
    const validExpiry = import.meta.env.VITE_CREDIT_CARD_EXPIRY;
    const validCvv = import.meta.env.VITE_CREDIT_CARD_CVV;

    const normalizedCard = cardNumber.replace(/\s/g, '');
    const validNormalized = validCard.replace(/['\s]/g, '');

    if (
      normalizedCard === validNormalized &&
      expiry === validExpiry.replace(/'/g, '') &&
      cvv === validCvv.replace(/'/g, '')
    ) {
      clearCart();
      navigate('/order-complete');
    } else {
      setError('Payment declined. Please check your card details.');
    }
  };

  const formatCardNumber = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 16);
    return digits.replace(/(.{4})/g, '$1 ').trim();
  };

  const formatExpiry = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 4);
    if (digits.length >= 3) {
      return `${digits.slice(0, 2)}/${digits.slice(2)}`;
    }
    return digits;
  };

  return (
    <div className="checkout">
      <div className="checkout__inner">
        <button className="checkout__back" onClick={() => navigate('/cart')}>
          ← Back to Cart
        </button>

        <h1 className="checkout__title">CHECKOUT</h1>

        <div className="checkout__layout">
          <form className="checkout__form" onSubmit={handleSubmit}>
            <p className="checkout__section-label">PAYMENT DETAILS</p>

            <div className="checkout__field">
              <label className="checkout__label">Card Number</label>
              <input
                className="checkout__input"
                type="text"
                placeholder="4111 1111 1111 1111"
                value={cardNumber}
                onChange={e => {
                  setCardNumber(formatCardNumber(e.target.value));
                  setError('');
                }}
                required
              />
            </div>

            <div className="checkout__field-row">
              <div className="checkout__field">
                <label className="checkout__label">Expiry</label>
                <input
                  className="checkout__input"
                  type="text"
                  placeholder="MM/YY"
                  value={expiry}
                  onChange={e => {
                    setExpiry(formatExpiry(e.target.value));
                    setError('');
                  }}
                  required
                />
              </div>
              <div className="checkout__field">
                <label className="checkout__label">CVV</label>
                <input
                  className="checkout__input"
                  type="text"
                  placeholder="123"
                  value={cvv}
                  maxLength={4}
                  onChange={e => {
                    setCvv(e.target.value.replace(/\D/g, ''));
                    setError('');
                  }}
                  required
                />
              </div>
            </div>

            {error && <p className="checkout__error">{error}</p>}

            <button className="checkout__submit" type="submit">
              PAY ¥{total.toLocaleString('ja-JP')}
            </button>
          </form>

          <div className="checkout__summary">
            <p className="checkout__section-label">ORDER SUMMARY</p>
            <div className="checkout__summary-items">
              {cartItems.map(item => (
                <div
                  className="checkout__summary-item"
                  key={`${item.product.id}-${item.size}`}
                >
                  <span className="checkout__summary-name">
                    {item.product.name}
                    <span className="checkout__summary-meta">
                      {' '}/ {item.size} × {item.quantity}
                    </span>
                  </span>
                  <span className="checkout__summary-price">
                    ¥{(item.product.price * item.quantity).toLocaleString('ja-JP')}
                  </span>
                </div>
              ))}
            </div>
            <div className="checkout__summary-total">
              <span>Total</span>
              <span>¥{total.toLocaleString('ja-JP')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
