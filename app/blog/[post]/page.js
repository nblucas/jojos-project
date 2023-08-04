import { getBlogPost } from "@/sanity/sanity-utils";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import "@/public/static/css/styles.css"

async function SinglePostPage({ params }) {

    const slug = params.post;

    const post = await getBlogPost(slug);

    const {name, image, author, date, content} = post;
    
    return (

        <section>
            <img src={image} alt="image of a tiny computer surrounded of other eletronics" className="single-blog-img" />
            <h2 className="montserrat-font weight-700 grey-font smaller-margin-top">{name}</h2>
            <p className="montserrat-font grey-font smaller-margin-top tiny-margin-top">Por {author}, {date}</p>
            <div id="pt-parent" className="twenty-pixels montserrat-font grey-font line-height small-margin-top">
                <PortableText value={content}/>
            </div>
        </section>

    );

}

export default SinglePostPage;