import { ProductResponse } from '@/lib/api';
import Link from 'next/link';

export default function PopularProducts({
  name,
  products,
}: {
  name: string;
  products: ProductResponse[];
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="font-semibold">{name} 인기 상품</div>
      <div className="flex flex-col gap-2">
        {products.map((product, index) => (
          <Link
            href={`/products/${product.id}`}
            key={index}
            className="flex gap-2"
          >
            <div>
              <img
                src="/placeholder.jpg"
                alt=""
                width={100}
                height={100}
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-sm text-blue-500 font-semibold">
                {index + 1}위
              </div>
              <div className="text-sm">
                {product.brandName} | {product.productName}
              </div>
              <div className="text-lg font-semibold">
                {product.price.toLocaleString()}원
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
