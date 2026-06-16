import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import type { Size } from '../types';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { isSaleEnabled } from '../utils/featureFlags';

export function PDPPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isLoggedIn } = useAuth();

  const product = products.find(p => p.id === id);
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [sizeError, setSizeError] = useState(false);

  if (!product) {
    return (
      <div className="pdp-not-found">
        <p>Product not found.</p>
        <button onClick={() => navigate('/products')}>Back to products</button>
      </div>
    );
  }

  const saleActive = isSaleEnabled(product.category) && product.salePrice != null;

  const handleAddToCart = () => {
    if (!selectedSize) {
      setSizeError(true);
      return;
    }
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }
    addToCart(product, selectedSize);
    navigate('/cart');
  };

  return (
    <div className="pdp">
      <div className="pdp__image">
        {product.image ? (
          <img src={product.image} alt={product.name} />
        ) : (
          <div className="pdp__image-placeholder" />
        )}
      </div>

      <div className="pdp__info">
        <button className="pdp__back" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <div>
          <p className="pdp__category">{product.category}</p>
          <h1 className="pdp__name">{product.name}</h1>
          {saleActive ? (
            <div className="pdp__price-wrap">
              <span className="pdp__price--sale">¥{product.salePrice!.toLocaleString('ja-JP')}</span>
              <span className="pdp__price--original">¥{product.price.toLocaleString('ja-JP')}</span>
            </div>
          ) : (
            <p className="pdp__price">¥{product.price.toLocaleString('ja-JP')}</p>
          )}
        </div>

        <p className="pdp__description">{product.description}</p>

        <div className="pdp__sizes">
          <p className="pdp__sizes-label">SIZE</p>
          <div className="pdp__sizes-list">
            {product.sizes.map(size => (
              <button
                key={size}
                className={`pdp__size${selectedSize === size ? ' pdp__size--selected' : ''}`}
                onClick={() => {
                  setSelectedSize(size);
                  setSizeError(false);
                }}
              >
                {size}
              </button>
            ))}
          </div>
          {sizeError && <p className="pdp__error">Please select a size.</p>}
        </div>

        <button className="pdp__add-to-cart" onClick={handleAddToCart}>
          ADD TO CART
        </button>
      </div>
    </div>
  );
}
