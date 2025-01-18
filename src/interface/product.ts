export interface Product {
    slug: any;
    title: string;
    description: string;
    imageUrl: string; // Direct URL for the product image
    price: number;
    tags?: string[];
    discountPercentage?: number;
    isNew?: boolean;
  }