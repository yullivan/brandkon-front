import PopularProducts from '@/components/popular-product';
import ProductCard from '@/components/product';
import { BrandResponse } from '@/lib/api';
import { products } from '@/lib/data';
import Link from 'next/link';

export default async function Page({
  params,
}: {
  params: Promise<{ brandId: string }>;
}) {
  const brandId = (await params).brandId;
  const brand: BrandResponse = {
    id: 1,
    name: '메가MGC커피',
    imageUrl: '',
  };

  return (
    <div>
      <div>{brand.name}</div>
      <PopularProducts name={brand.name} products={products} />
      <div>
        <div>전체 상품</div>
        <div className="grid grid-cols-2">
          {products.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id}>
              <ProductCard
                img={product.imageUrl}
                name={product.productName}
                brand={product.brandName}
                price={product.price}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
