import ProductCard from '@/components/product';
import { fetchProducts } from '@/lib/api';
import Link from 'next/link';

export default async function Home() {
  const products = await fetchProducts(null);
  return (
    <div>
      <div className="text-lg font-semibold">추천 브랜드콘</div>
      <div className="grid grid-cols-2 gap-4">
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
  );
}
