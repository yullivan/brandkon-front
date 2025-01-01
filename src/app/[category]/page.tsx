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

const productsByCategory: ProductsByCategory = {
  cafe: [
    {
      id: 1,
      imgSrc: '',
      productName: '(ICE)아메리카노',
      brandName: '메가MGC커피',
      price: 2000,
    },
    {
      id: 3,
      imgSrc: '',
      productName: '아메리카노(Ice)(TAKE-OUT)',
      brandName: '컴포즈커피',
      price: 1500,
    },
  ],
};

interface ProductsByCategory {
  [key: string]: Product[];
}

interface Product {
  id: number;
  imgSrc: string;
  productName: string;
  brandName: string;
  price: number;
}

export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const category = (await params).category;
  const categoryName = categoryNames[category];
  const products = productsByCategory[category] ?? [];
  return (
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
  );
}
