import MainPost from "@/components/main-post";
import Post from "@/components/post";
import { getBlogPosts } from "@/sanity/sanity-utils";
import Link from "next/link";
import "@/public/static/css/styles.css"

async function Blog() {

    const posts = await getBlogPosts();

    const mainPost = posts.filter((value) => value.creationId === 1);

    const sortedPosts = [...posts].sort((a, b) => a.creationId - b.creationId);

    const [{ slug }] = mainPost;

    return (
        <section>
            <h1 className="title sunrise-font text-center title-bottom-margin">BLOG</h1>
            <div>
                <Link href={`/blog/${slug}`} className="no-decoration carrer-link">
                    {mainPost.map((value) => {
                        const {name, image, author, date, contentPreview} = value;
                        return (
                            <MainPost name={name} image={image} author={author} date={date} contentPreview={contentPreview} />
                        );
                    })}
                </Link>
                <div className="medium-margin-top">
                    <ul className="grid grid-column-three-even small-gap">
                        {sortedPosts.map((value) => {
                            const {name, secundaryImage} = value;
                            return (
                                <Post name={name} image={secundaryImage}/>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );

}

export default Blog;