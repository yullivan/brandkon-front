import ProductCard from '@/ui/product';
import Link from 'next/link';

const products = [
  {
    id: 1,
    imgSrc: '',
    productName: '(ICE)아메리카노',
    brandName: '메가MGC커피',
    price: 2000,
  },
  {
    id: 2,
    imgSrc: '',
    productName: '신세계이마트 1만원 상품권 교환권',
    brandName: '신세계 상품권',
    price: 10000,
  },
  {
    id: 3,
    imgSrc: '',
    productName: '아메리카노(Ice)(TAKE-OUT)',
    brandName: '컴포즈커피',
    price: 10000,
  },
];

export default async function Home() {
  return (
    <div>
      <div className="text-lg font-semibold">추천 브랜드콘</div>
      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <ProductCard
              img={product.imgSrc}
              name={product.productName}
              brand={product.brandName}
              price={product.price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
