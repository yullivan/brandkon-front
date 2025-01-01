import Categories from '@/components/categories';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>
        <div className="text-xl font-semibold">브랜드콘</div>
        <Categories />
      </div>
      <div>{children}</div>
    </div>
  );
}
