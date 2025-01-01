import {
  BrandResponse,
  CategoryResponse,
  ProductDetailResponse,
  ProductResponse,
} from './api';

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

const product: ProductDetailResponse = {
  productId: 1,
  productName: '(ICE)아메리카노',
  price: 2000,
  brand: {
    id: 1,
    name: '메가MGC커피',
    guidelines: `
    사용처
    - 전국 메가MGC커피 매장에서 사용 가능합니다.
  
    제한사항
    - 사진은 이미지 컷이므로 실제와 다를 수 있습니다.
  
    유의사항
    - *지급보증 : 본 상품은 별도의 지급보증 및 피해보상보험계약체결 없이 자체 신용으로 발행되었습니다.
    `,
  },
  expirationDays: 366,
};

export { categories, brands, products, product };
