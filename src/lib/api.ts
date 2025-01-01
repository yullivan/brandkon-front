export interface CategoryResponse {
  name: string;
  slug: string;
  imageUrl: string;
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

const apiBaseUrl = `http://localhost:8080`;
export async function fetchCategories(): Promise<CategoryResponse[]> {
  const response = await fetch(`${apiBaseUrl}/categories`);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data;
}
