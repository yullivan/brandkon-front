import { BrandResponse, CategoryResponse, ProductResponse } from './api';

const categories: CategoryResponse[] = [
  { name: '추천', href: '/', imageSrc: '/icons/rec.png' },
  { name: '카페', href: '/cafe', imageSrc: '/icons/cafe.png' },
  { name: '상품권', href: '/giftcard', imageSrc: '/icons/giftcard.png' },
  { name: '치킨', href: '/chicken', imageSrc: '/icons/chicken.png' },
  { name: '피자·버거', href: '/pizza-burger', imageSrc: '/icons/pizza.png' },
  {
    name: '편의점',
    href: '/convenience-store',
    imageSrc: '/icons/convenience.png',
  },
  { name: '외식', href: '/dining', imageSrc: '/icons/dining.png' },
  { name: '디저트', href: '/dessert', imageSrc: '/icons/dessert.png' },
];

const brands: BrandResponse[] = [
  {
    brandId: 1,
    brandName: '메가MGC커피',
    imageUrl: '',
  },
  {
    brandId: 2,
    brandName: '배스킨라빈스',
    imageUrl: '',
  },
  {
    brandId: 3,
    brandName: '스타벅스',
    imageUrl: '',
  },
];

const products: ProductResponse[] = [
  {
    id: 1,
    imgSrc: '',
    productName: '(ICE)아메리카노',
    brandName: '메가MGC커피',
    price: 2000,
  },
  {
    id: 3,
    imgSrc: '',
    productName: '아메리카노(Ice)(TAKE-OUT)',
    brandName: '컴포즈커피',
    price: 1500,
  },
];

export { categories, brands, products };
