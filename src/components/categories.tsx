'use client';

import { CategoryResponse } from '@/lib/api';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Categories({
  categories,
}: {
  categories: CategoryResponse[];
}) {
  const pathname = usePathname();

  return (
    <div className="grid grid-cols-4">
      <Link
        href="/"
        className={clsx(
          'flex flex-col items-center justify-center gap-1 rounded-md bg-gray-50 p-2 text-xs font-medium hover:bg-sky-100 hover:text-blue-600',
          {
            'bg-sky-100 text-blue-600': pathname === '/',
          }
        )}
      >
        <img src="/icons/rec.png" alt="추천" width={24} height={24} />
        <p>추천</p>
      </Link>
      {categories.map((category) => (
        <Link
          key={category.name}
          href={category.slug}
          className={clsx(
            'flex flex-col items-center justify-center gap-1 rounded-md bg-gray-50 p-2 text-xs font-medium hover:bg-sky-100 hover:text-blue-600',
            {
              'bg-sky-100 text-blue-600': pathname === `/${category.slug}`,
            }
          )}
        >
          <img
            src={category.imageUrl}
            alt={category.name}
            width={24}
            height={24}
          />
          <p>{category.name}</p>
        </Link>
      ))}
    </div>
  );
}
