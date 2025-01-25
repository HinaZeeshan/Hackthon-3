import { client } from '../../../sanity/lib/client';
import ProductDetails from '../../../components/ProductDetails';
import React from 'react';


// Define Params interface
interface Params {
  slug: string;
}

// Async Page Component
export default async function BestsellingPage({ params }: { params: Promise<Params> }) {
 
  const { slug } = await params;

  // Fetch data from Sanity
  const products = await client.fetch(
    `*[_type == "product" && slug.current == $slug]{
       _id,
      title,
      "slug": slug.current,
      description,
      "imageUrl": productImage.asset->url,
      price,
      tags,
      discountPercentage,
      isNew,
      inventory
    }`,
    { slug }
  );

  // Get the first product
  const product = products?.[0];

  // Pass product data to ProductDetails component
  return<ProductDetails product={product}/>
 // <ProductDetails product={product} />;
  
}




















