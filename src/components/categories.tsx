'use client';

import { categories } from '@/lib/data';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Categories() {
  const pathname = usePathname();

  return (
    <div className="grid grid-cols-4">
      {categories.map((category) => (
        <Link
          key={category.name}
          href={category.href}
          className={clsx(
            'flex flex-col items-center justify-center gap-1 rounded-md bg-gray-50 p-2 text-xs font-medium hover:bg-sky-100 hover:text-blue-600',
            {
              'bg-sky-100 text-blue-600': pathname === category.href,
            }
          )}
        >
          <img
            src={category.imageSrc}
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
