export interface CategoryResponse {
  name: string;
  href: string;
  imageSrc: string;
}

export interface BrandResponse {
  brandId: number;
  brandName: string;
  imageUrl: string;
}

export interface ProductResponse {
  id: number;
  imgSrc: string;
  productName: string;
  brandName: string;
  price: number;
}

export interface ProductDetailResponse {
  productId: number;
  productName: string;
  price: number;
  expirationDays: number;
  brand: {
    id: number;
    name: string;
    guidelines: string;
  };
}
