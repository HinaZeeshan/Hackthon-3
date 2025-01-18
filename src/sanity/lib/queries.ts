import { defineQuery } from "next-sanity";



export const allproducts = defineQuery(`
   *[_type == "product"]{
        title,
         "slug":slug.current,
        description,
        "imageUrl": productImage.asset->url,
        price,
        tags,
        discountPercentage,
        isNew
   } 
`)

export const mainproduct = defineQuery(`
    *[_type == "product"][0..3]{
         title,
         "slug":slug.current,
         description,
         "imageUrl": productImage.asset->url,
         price,
         tags,
         discountPercentage,
         isNew
    } 
 `)

 export const collectionproduct = defineQuery(`
     *[_type == "product"][4..16]{
          title,
          "slug":slug.current,
          description,
          "imageUrl": productImage.asset->url,
          price,
          tags,
          discountPercentage,
          isNew
     } 
  `)

