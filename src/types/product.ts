


export interface Product  {
    _id: any;
    title: string; // The title of the product
    slug: string; // The slug (URL-friendly identifier) of the product
    description: string; // Description of the product
    imageUrl: string; // URL of the product image
    price: number; // Price of the product
    tags?: string[]; // Optional array of tags associated with the product
    discountPercentage?: number; // Optional discount percentage for the product
    isNew?: boolean;
    inventory?:number;
  }
  