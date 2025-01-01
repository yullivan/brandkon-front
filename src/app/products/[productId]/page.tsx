import ProductToggle from '@/components/product-toggle';
import { product } from '@/lib/data';
import Link from 'next/link';

export default async function Page({
  params,
}: {
  params: Promise<{ productId: number }>;
}) {
  const productId = (await params).productId;
  return (
    <div className="flex flex-col gap-3">
      <div>
        <img src="/placeholder.jpg" alt="" />
        <Link
          href={`/brands/${product.brand.id}`}
        >{`${product.brand.name} >`}</Link>
        <div className="font-semibold text-lg">{product.productName}</div>
        <div className="font-semibold text-xl">
          {product.price.toLocaleString()}원
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <div>유효기간</div>
          <div>{product.expirationDays}일</div>
        </div>
        <ProductToggle
          title={`${product.brand.name} 유의사항`}
          content={product.brand.guidelines}
        />
        <ProductToggle
          title="브랜드콘 안내"
          content="사용 안내: 브랜드콘은 온라인, 오프라인에서 이용할 수 있는..."
        />
      </div>
    </div>
  );
}
