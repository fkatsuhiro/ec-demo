import { useNavigate } from 'react-router-dom';

export function OrderCompletePage() {
  const navigate = useNavigate();

  return (
    <div className="order-complete">
      <div className="order-complete__content">
        <div className="order-complete__icon">&#10003;</div>
        <h1 className="order-complete__title">Order Placed!</h1>
        <p className="order-complete__message">
          Thank you for your purchase.
          <br />
          We'll send you a confirmation email shortly.
        </p>
        <button
          className="order-complete__btn"
          onClick={() => navigate('/products')}
        >
          BACK TO TOP
        </button>
      </div>
    </div>
  );
}
