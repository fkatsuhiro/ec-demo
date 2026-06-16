import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export function Header() {
  const { totalCount } = useCart();

  return (
    <header className="header">
      <Link to="/products" className="header__logo">
        MYSTORE
      </Link>
      <Link to="/cart" className="header__cart">
        BAG
        {totalCount > 0 && (
          <span className="header__cart-badge">{totalCount}</span>
        )}
      </Link>
    </header>
  );
}
