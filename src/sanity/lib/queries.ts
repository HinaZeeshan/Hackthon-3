import { defineQuery } from "next-sanity";

export const allproducts = defineQuery(`
   *[_type == "product"]{
   _id,
        title,
         "slug":slug.current,
        description,
        "imageUrl": productImage.asset->url,
        price,
        tags,
        discountPercentage,
        isNew
   } 
`);

export const mainproduct = defineQuery(`
    *[_type == "product"][0..3]{
    _id,
         title,
         "slug":slug.current,
         description,
         "imageUrl": productImage.asset->url,
         price,
         tags,
         discountPercentage,
         isNew
    } 
 `);

export const collectionproduct = defineQuery(`
     *[_type == "product"][4..16]{
     _id,
          title,
          "slug":slug.current,
          description,
          "imageUrl": productImage.asset->url,
          price,
          tags,
          discountPercentage,
          isNew
     } 
  `);
