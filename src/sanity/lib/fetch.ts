import { createClient } from "next-sanity";

const client = createClient({
    projectId: "ibyygf5d",
    dataset: "production",
    useCdn: true,
    apiVersion: "2023-10-10"
});

export async function sanityFetch({
    querry,
    params = {},
}: {
    querry: string;
    params?: Record<string, unknown>;
}) {
    return await client.fetch(querry, params);
}



// import { createClient } from "next-sanity";

 

// const client = createClient ({
//     projectId : "ibyygf5d",
//     dataset : "production",
//     useCdn : true,
//     apiVersion : "2023-10-10"
// })
// export async function sanityFetch({querry,params ={}} :{querry: string, params?: any}){
// return await client.fetch(querry,params) 
// }