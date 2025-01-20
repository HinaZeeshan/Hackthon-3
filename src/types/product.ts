/* eslint-disable @typescript-eslint/no-explicit-any */


export interface Product  {
    id: any;
    title: string; // The title of the product
    slug: string; // The slug (URL-friendly identifier) of the product
    description: string; // Description of the product
    imageUrl: string; // URL of the product image
    price: number; // Price of the product
    tags?: string[]; // Optional array of tags associated with the product
    discountPercentage?: number; // Optional discount percentage for the product
    isNew?: boolean; // Optional flag indicating if the product is new
  }
  // export interface Cart{
  //   id: number;
  //   title: string; 
  //     slug: string;
  //     description: string; 
  //     imageUrl: string; 
  //     price: number;
  //     size:string;
  //     quantity:string;
  //     uuid: number | string | undefined;
  // } 
  