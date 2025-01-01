export interface CategoryResponse {
  id: number;
  name: string;
  slug: string;
  imageUrl: string;
}

export interface BrandResponse {
  id: number;
  name: string;
  imageUrl: string;
}

export interface ProductResponse {
  id: number;
  imageUrl: string;
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

export async function fetchBrands(
  categorySlug: string
): Promise<BrandResponse[]> {
  const response = await fetch(`${apiBaseUrl}/brands?category=${categorySlug}`);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data;
}

export async function fetchBrandById(brandId: string): Promise<BrandResponse> {
  const response = await fetch(`${apiBaseUrl}/brands/${brandId}`);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data;
}

export async function fetchProducts(
  brandId: string | null
): Promise<ProductResponse[]> {
  const response = await fetch(
    `${apiBaseUrl}/products${brandId === null ? '' : `?brandId=${brandId}`}`
  );

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data;
}

export async function fetchPopularProducts({
  brandId,
  categoryId,
}: {
  brandId: string | null;
  categoryId: number | null;
}): Promise<ProductResponse[]> {
  const queryString = brandId
    ? `?brandId=${brandId}`
    : categoryId !== null
    ? `?categoryId=${categoryId}`
    : '';
  const response = await fetch(`${apiBaseUrl}/products/popular${queryString}`);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data;
}
