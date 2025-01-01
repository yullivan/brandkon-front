import Categories from '@/components/categories';
import { fetchCategories } from '@/lib/api';

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = await fetchCategories();
  return (
    <div>
      <div>
        <div className="text-xl font-semibold">브랜드콘</div>
        <Categories categories={categories} />
      </div>
      <div>{children}</div>
    </div>
  );
}
