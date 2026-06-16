export type Category = 'WOMEN' | 'MEN' | 'KIDS';
export type Size = 'XS' | 'S' | 'M' | 'L' | 'XL';

export interface Product {
  id: string;
  name: string;
  price: number;
  salePrice?: number;
  category: Category;
  image: string;
  description: string;
  sizes: Size[];
}

export interface CartItem {
  product: Product;
  size: Size;
  quantity: number;
}
