import BrandLinks from '@/components/brand-links';
import PopularProducts from '@/components/popular-product';
import { fetchBrands, fetchCategories, fetchPopularProducts } from '@/lib/api';

export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const categorySlug = (await params).category;
  const category = (await fetchCategories()).filter(
    (category) => category.slug === categorySlug
  )[0];
  const categoryName = category.name ?? '';
  const brands = await fetchBrands(categorySlug);
  const products = await fetchPopularProducts({
    brandId: null,
    categoryId: category.id,
  });

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
