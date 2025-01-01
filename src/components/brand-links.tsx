import { BrandResponse } from '@/lib/api';
import Link from 'next/link';

export default function BrandLinks({ brands }: { brands: BrandResponse[] }) {
  console.log(brands);
  return (
    <div className="flex flex-col gap-2">
      {brands.map((brand) => (
        <Link
          key={brand.id}
          href={`/brands/${brand.id}`}
          className="flex justify-between"
        >
          <div className="flex gap-2">
            <div>
              <img
                src={brand.imageUrl || '/placeholder.jpg'}
                alt=""
                width={30}
                height={30}
                className="rounded-full"
              />
            </div>
            <div>{brand.name}</div>
          </div>
          <div>{`>`}</div>
        </Link>
      ))}
    </div>
  );
}
