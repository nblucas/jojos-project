import { createClient, groq } from "next-sanity";

export async function getBlogPosts() {

    const client =  createClient({
        projectId: "6ag3y1y9",
        dataset: "production",
        apiVersion: "2023-08-02"
    });

    return client.fetch(
        groq`*[_type == "blog"]{
            _id,
            _createdAt,
            name,
            creationId,
            "slug": slug.current,
            "image": image.asset->url,
            "secundaryImage": secundaryImage.asset->url,
            url,
            author,
            date,
            content
        }`
    )

}