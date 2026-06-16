import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export function CartPage() {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="cart">
      <h1 className="cart__title">CART</h1>

      {cartItems.length === 0 ? (
        <div className="cart__empty">
          <p>Your cart is empty.</p>
          <button className="cart__continue" onClick={() => navigate('/products')}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="cart__items">
            {cartItems.map(item => (
              <div className="cart__item" key={`${item.product.id}-${item.size}`}>
                <div className="cart__item-image">
                  {item.product.image ? (
                    <img src={item.product.image} alt={item.product.name} />
                  ) : (
                    <div className="cart__item-image-placeholder" />
                  )}
                </div>
                <div className="cart__item-info">
                  <p className="cart__item-name">{item.product.name}</p>
                  <p className="cart__item-meta">Size: {item.size}</p>
                  <p className="cart__item-meta">Qty: {item.quantity}</p>
                  <p className="cart__item-price">
                    ¥{(item.product.price * item.quantity).toLocaleString('ja-JP')}
                  </p>
                </div>
                <button
                  className="cart__item-remove"
                  onClick={() => removeFromCart(item.product.id, item.size)}
                >
                  REMOVE
                </button>
              </div>
            ))}
          </div>

          <div className="cart__summary">
            <p className="cart__total">
              Total: ¥{total.toLocaleString('ja-JP')}
            </p>
            <button className="cart__checkout-btn" onClick={handleCheckout}>
              CHECKOUT
            </button>
            <button
              className="cart__continue"
              onClick={() => navigate('/products')}
            >
              Continue Shopping
            </button>
          </div>
        </>
      )}
    </div>
  );
}
