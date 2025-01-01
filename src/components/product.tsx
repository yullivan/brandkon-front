export default function ProductCard({
  img,
  name,
  brand,
  price,
}: {
  img: string;
  name: string;
  brand: string;
  price: number;
}) {
  return (
    <div>
      <div className="aspect-square bg-white p-4 flex items-center justify-center">
        <img
          src={img || '/placeholder.jpg'}
          className="w-full object-contain rounded"
        />
      </div>
      <div>
        <div className="p-4">
          <p className="text-lg font-semibold">{price.toLocaleString()}원</p>
          <p className="text-sm text-gray-600">
            {brand} | {name}
          </p>
        </div>
      </div>
    </div>
  );
}
