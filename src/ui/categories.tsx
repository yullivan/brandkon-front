'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const categories = [
  { name: '추천', href: '/', imageSrc: '/icons/rec.png' },
  { name: '카페', href: '/cafe', imageSrc: '/icons/cafe.png' },
  { name: '상품권', href: '/giftcard', imageSrc: '/icons/giftcard.png' },
  { name: '치킨', href: '/chicken', imageSrc: '/icons/chicken.png' },
  { name: '피자·버거', href: '/pizza-burger', imageSrc: '/icons/pizza.png' },
  {
    name: '편의점',
    href: '/convenience-store',
    imageSrc: '/icons/convenience.png',
  },
  { name: '외식', href: '/dining', imageSrc: '/icons/dining.png' },
  { name: '디저트', href: '/dessert', imageSrc: '/icons/dessert.png' },
];

export default function Categories() {
  const pathname = usePathname();

  return (
    <div className="grid grid-cols-4 gap-2">
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
