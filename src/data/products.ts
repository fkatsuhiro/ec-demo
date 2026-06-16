import type { Product } from '../types';

// WOMEN
import linenShirt from '../assets/images/women/womens_linen_shirts.png';
import wideLegs from '../assets/images/women/womens_wide_leg_pants.png';
import silkBlouse from '../assets/images/women/womens_silk_blouse.png';
import midiDress from '../assets/images/women/womens_midi_dress.png';
import knitCardigan from '../assets/images/women/womens_knit_cardigan.png';
import tailoredBlazer from '../assets/images/women/womens_tailored_blazer.png';

// MEN
import oxfordShirt from '../assets/images/men/mens_oxford_shirt.png';
import chinoPants from '../assets/images/men/mens_chino_pants.png';
import mensKnit from '../assets/images/men/mens_knit.png';
import denimJacket from '../assets/images/men/mens_denim_jacket.png';
import linenTrousers from '../assets/images/men/mens_linen_trousers.png';
import coachJacket from '../assets/images/men/mens_coarch_jacket.png';
import mensBag from '../assets/images/men/mens_bag.png';
import mensCasualJacket from '../assets/images/men/mens_casual_jacket.png';
import mensCasualPants from '../assets/images/men/mens_casual_oants.png';
import mensCoat from '../assets/images/men/mens_coart.png';
import mensMuffler from '../assets/images/men/mens_maflar.png';
import mensNightwear from '../assets/images/men/mens_night_ware.png';
import mensShoes from '../assets/images/men/mens_shoes.png';
import mensSportswear from '../assets/images/men/mens_sports_ware.png';
import mensTote from '../assets/images/men/mens_toto.png';
import mensTshirts from '../assets/images/men/mens_tshirts.png';

// KIDS
import kidsTee from '../assets/images/kids/kids_tee.png';
import kidsShorts from '../assets/images/kids/kids_shorts.png';
import kidsHoodie from '../assets/images/kids/kids_hoodie.png';
import kidsPuffer from '../assets/images/kids/kids_puffer.png';
import kidsDress from '../assets/images/kids/kids_dress.png';
import kidsDenim from '../assets/images/kids/kids_denim.png';
import kidsCoat from '../assets/images/kids/kids_coat.png';
import kidsKnit from '../assets/images/kids/kids_knit.png';
import kidsNightwear from '../assets/images/kids/kids_night_ware.png';
import kidsBelt from '../assets/images/kids/kids_belt.png';
import kidsPants from '../assets/images/kids/kids_pants.png';
import kidsShoes from '../assets/images/kids/kids_shoes.png';
import kidsTshirts from '../assets/images/kids/kids_tshirts.png';

export const products: Product[] = [
  // WOMEN
  {
    id: 'w1',
    name: 'Linen Shirt',
    price: 12000,
    salePrice: 9800,
    category: 'WOMEN',
    image: linenShirt,
    description: 'Breathable linen shirt perfect for warm seasons. Relaxed fit with a clean collar.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 'w2',
    name: 'Wide Leg Pants',
    price: 15000,
    category: 'WOMEN',
    image: wideLegs,
    description: 'Elegant wide leg trousers with a high waist silhouette. Made from premium fabric.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 'w3',
    name: 'Silk Blouse',
    price: 18000,
    salePrice: 13800,
    category: 'WOMEN',
    image: silkBlouse,
    description: 'Luxurious silk blouse with a subtle sheen. Versatile enough for day or evening.',
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: 'w4',
    name: 'Midi Dress',
    price: 22000,
    category: 'WOMEN',
    image: midiDress,
    description: 'Flowing midi dress in soft crepe fabric. Features a wrap style with adjustable tie.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 'w5',
    name: 'Knit Cardigan',
    price: 16000,
    salePrice: 11800,
    category: 'WOMEN',
    image: knitCardigan,
    description: 'Soft knit cardigan with an open front. A wardrobe staple for layering.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'w6',
    name: 'Tailored Blazer',
    price: 28000,
    category: 'WOMEN',
    image: tailoredBlazer,
    description: 'Sharp tailored blazer with structured shoulders and a single-button closure.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  // MEN
  {
    id: 'm1',
    name: 'Oxford Shirt',
    price: 11000,
    salePrice: 8500,
    category: 'MEN',
    image: oxfordShirt,
    description: 'Classic oxford button-down in premium cotton. Timeless design that transitions effortlessly.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'm2',
    name: 'Chino Pants',
    price: 14000,
    category: 'MEN',
    image: chinoPants,
    description: 'Slim fit chino trousers in stretch cotton. Clean and versatile for any occasion.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'm3',
    name: 'Crew Neck Knit',
    price: 13000,
    category: 'MEN',
    image: mensKnit,
    description: 'Fine merino wool crew neck sweater. Lightweight warmth with a refined finish.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'm4',
    name: 'Denim Jacket',
    price: 25000,
    category: 'MEN',
    image: denimJacket,
    description: 'Classic denim jacket in medium wash. Slightly oversized cut for a modern look.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'm5',
    name: 'Linen Trousers',
    price: 13000,
    salePrice: 9800,
    category: 'MEN',
    image: linenTrousers,
    description: 'Lightweight linen trousers with a relaxed silhouette. Ideal for warmer weather.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'm6',
    name: 'Coach Jacket',
    price: 20000,
    salePrice: 15800,
    category: 'MEN',
    image: coachJacket,
    description: 'Sporty coach jacket in water-resistant nylon. Subtle branding and a clean finish.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'm7',
    name: 'Canvas Bag',
    price: 8500,
    category: 'MEN',
    image: mensBag,
    description: 'Durable canvas shoulder bag with a minimalist design. Fits everyday essentials with ease.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'm8',
    name: 'Casual Jacket',
    price: 18000,
    salePrice: 13800,
    category: 'MEN',
    image: mensCasualJacket,
    description: 'Relaxed casual jacket in a lightweight woven fabric. Versatile enough for any occasion.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'm9',
    name: 'Casual Pants',
    price: 12000,
    salePrice: 9500,
    category: 'MEN',
    image: mensCasualPants,
    description: 'Easy-fitting casual trousers with a tapered silhouette. Comfortable for all-day wear.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'm10',
    name: 'Wool Coat',
    price: 32000,
    category: 'MEN',
    image: mensCoat,
    description: 'Tailored wool blend coat with a structured silhouette. A timeless layer for cold seasons.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'm11',
    name: 'Knit Muffler',
    price: 6500,
    salePrice: 4800,
    category: 'MEN',
    image: mensMuffler,
    description: 'Chunky ribbed muffler in soft wool blend. Adds warmth and texture to any winter look.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'm12',
    name: 'Loungewear Set',
    price: 11000,
    category: 'MEN',
    image: mensNightwear,
    description: 'Relaxed loungewear set in soft cotton jersey. Ideal for rest days and casual evenings at home.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'm13',
    name: 'Leather Sneakers',
    price: 22000,
    category: 'MEN',
    image: mensShoes,
    description: 'Clean leather sneakers with a low-profile sole. Effortlessly pairs with both casual and smart looks.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'm14',
    name: 'Sportswear Set',
    price: 14000,
    category: 'MEN',
    image: mensSportswear,
    description: 'Functional sportswear set in moisture-wicking fabric. Built for movement without sacrificing style.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'm15',
    name: 'Tote Bag',
    price: 9500,
    category: 'MEN',
    image: mensTote,
    description: 'Spacious tote bag in structured canvas. A practical carry-all for work or weekends.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'm16',
    name: 'Basic Tee',
    price: 6000,
    category: 'MEN',
    image: mensTshirts,
    description: 'Essential crew neck tee in premium cotton. A wardrobe staple that pairs with everything.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  // KIDS
  {
    id: 'k1',
    name: 'Kids Tee',
    price: 4000,
    salePrice: 2800,
    category: 'KIDS',
    image: kidsTee,
    description: 'Soft 100% cotton tee for everyday wear. Durable and easy to care for.',
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: 'k2',
    name: 'Kids Shorts',
    price: 5000,
    salePrice: 3500,
    category: 'KIDS',
    image: kidsShorts,
    description: 'Comfortable pull-on shorts in lightweight cotton. Features an elastic waistband.',
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: 'k3',
    name: 'Kids Hoodie',
    price: 8000,
    salePrice: 5500,
    category: 'KIDS',
    image: kidsHoodie,
    description: 'Cozy fleece-lined hoodie with a kangaroo pocket. Perfect for cooler days.',
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: 'k4',
    name: 'Kids Puffer',
    price: 12000,
    category: 'KIDS',
    image: kidsPuffer,
    description: 'Lightweight puffer jacket with a packable design. Keeps kids warm without bulk.',
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: 'k5',
    name: 'Kids Dress',
    price: 7000,
    category: 'KIDS',
    image: kidsDress,
    description: 'Casual cotton dress with a relaxed A-line silhouette. Easy layering over leggings.',
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: 'k6',
    name: 'Kids Denim',
    price: 9000,
    salePrice: 6800,
    category: 'KIDS',
    image: kidsDenim,
    description: 'Classic straight-leg jeans with a soft stretch fabric. Reinforced knees for durability.',
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: 'k7',
    name: 'Kids Wool Coat',
    price: 14000,
    category: 'KIDS',
    image: kidsCoat,
    description: 'Warm wool-blend coat with a double-breasted front. A polished layer for cooler days.',
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: 'k8',
    name: 'Kids Ribbed Knit',
    price: 7000,
    category: 'KIDS',
    image: kidsKnit,
    description: 'Soft ribbed knit sweater in a relaxed fit. Easy to layer and comfortable all day long.',
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: 'k9',
    name: 'Kids Pyjama Set',
    price: 6000,
    salePrice: 4200,
    category: 'KIDS',
    image: kidsNightwear,
    description: 'Cosy cotton pyjama set with a relaxed silhouette. Gentle on skin for a good night\'s rest.',
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: 'k10',
    name: 'Kids Woven Belt',
    price: 3000,
    salePrice: 2200,
    category: 'KIDS',
    image: kidsBelt,
    description: 'Adjustable woven belt in a casual stripe pattern. A fun finishing touch for any outfit.',
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: 'k11',
    name: 'Kids Chino Pants',
    price: 6500,
    category: 'KIDS',
    image: kidsPants,
    description: 'Neat chino trousers in stretch cotton blend. Smart enough for school, comfortable for play.',
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: 'k12',
    name: 'Kids Canvas Sneakers',
    price: 8000,
    salePrice: 5800,
    category: 'KIDS',
    image: kidsShoes,
    description: 'Lightweight canvas sneakers with a rubber sole. Easy on and off for busy little feet.',
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: 'k13',
    name: 'Kids Graphic Tee',
    price: 4500,
    category: 'KIDS',
    image: kidsTshirts,
    description: 'Soft cotton tee with a playful graphic print. A go-to for everyday casual wear.',
    sizes: ['XS', 'S', 'M', 'L'],
  },
];
