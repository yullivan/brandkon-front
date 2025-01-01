import PopularProducts from '@/components/popular-product';
import ProductCard from '@/components/product';
import { fetchBrandById, fetchPopularProducts, fetchProducts } from '@/lib/api';
import Link from 'next/link';

export default async function Page({
  params,
}: {
  params: Promise<{ brandId: string }>;
}) {
  const brandId = (await params).brandId;
  const brand = await fetchBrandById(brandId);
  const popularProducts = await fetchPopularProducts({
    brandId,
    categoryId: null,
  });
  const products = await fetchProducts(brandId);

  return (
    <div>
      <div>{brand.name}</div>
      <PopularProducts name={brand.name} products={popularProducts} />
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
