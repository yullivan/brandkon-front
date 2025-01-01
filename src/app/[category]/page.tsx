import BrandLinks from '@/components/brand-links';
import { brands, products } from '@/lib/data';

const categoryNames: CategoryNames = {
  cafe: '카페',
  giftcard: '상품권',
  chicken: '치킨',
  'pizza-burger': '피자·버거',
  'convenience-store': '편의점',
  dining: '외식',
  dessert: '디저트',
};

interface CategoryNames {
  [key: string]: string;
}

export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const category = (await params).category;
  const categoryName = categoryNames[category];
  // const products = productsByCategory[category] ?? [];

  return (
    <div>
      <div className="flex flex-col gap-2">
        <div className="font-semibold">{categoryName} 인기 상품</div>
        <div className="flex flex-col gap-2">
          {products.map((product, index) => (
            <div key={index} className="flex gap-2">
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
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 bg-gray-100 px-4">
        <div className="font-semibold">브랜드</div>
        <BrandLinks brands={brands} />
      </div>
    </div>
  );
}
