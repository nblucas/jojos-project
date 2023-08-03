import { getBlogPost } from "@/sanity/sanity-utils";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

async function SinglePostPage({ params }) {

    const slug = params.post;

    const post = await getBlogPost(slug);

    const {name, image, author, date, content} = post;
    
    return (

        <section>
            <img src={image} alt="image of a tiny computer surrounded of other eletronics" />
            <h2>{name}</h2>
            <p>Por {author}, {date}</p>
            <PortableText value={content}/>
        </section>

    );

}

export default SinglePostPage;