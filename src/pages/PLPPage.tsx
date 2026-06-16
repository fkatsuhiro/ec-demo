import { useState } from 'react';
import type { Category } from '../types';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';

const CATEGORIES: Category[] = ['WOMEN', 'MEN', 'KIDS'];

export function PLPPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('WOMEN');

  const filtered = products.filter(p => p.category === activeCategory);

  return (
    <div className="plp">
      <div className="plp__tabs">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            className={`plp__tab${activeCategory === cat ? ' plp__tab--active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="plp__grid">
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
