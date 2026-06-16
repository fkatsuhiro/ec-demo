import { useNavigate } from 'react-router-dom';
import type { Product } from '../types';
import { isSaleEnabled } from '../utils/featureFlags';

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  const navigate = useNavigate();
  const saleActive = isSaleEnabled(product.category) && product.salePrice != null;

  return (
    <div className="product-card" onClick={() => navigate(`/products/${product.id}`)}>
      <div className="product-card__image">
        {product.image ? (
          <img src={product.image} alt={product.name} />
        ) : (
          <div className="product-card__image-placeholder" />
        )}
      </div>
      {saleActive && <span className="product-card__sale-badge">SALE</span>}
      <div className="product-card__info">
        <p className="product-card__name">{product.name}</p>
        {saleActive ? (
          <p className="product-card__price">
            <span className="product-card__price--sale">¥{product.salePrice!.toLocaleString('ja-JP')}</span>
            <span className="product-card__price--original">¥{product.price.toLocaleString('ja-JP')}</span>
          </p>
        ) : (
          <p className="product-card__price">¥{product.price.toLocaleString('ja-JP')}</p>
        )}
      </div>
    </div>
  );
}
