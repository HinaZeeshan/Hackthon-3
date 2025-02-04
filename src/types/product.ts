


export interface Product  {
    
    _id: any;
    title: string; 
    slug: string; 
    description: string; 
    imageUrl: string; 
    price: number; 
    tags?: string[]; 
    discountPercentage?: number; 
    isNew?: boolean;
    inventory?:number;
  }
  