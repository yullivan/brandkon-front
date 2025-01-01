import BrandLinks from '@/components/brand-links';
import PopularProducts from '@/components/popular-product';
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
      <PopularProducts name={categoryName} products={products} />
      <div className="flex flex-col gap-2 bg-gray-100 px-4">
        <div className="font-semibold">브랜드</div>
        <BrandLinks brands={brands} />
      </div>
    </div>
  );
}
