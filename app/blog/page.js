import MainPost from "@/components/main-post";
import Post from "@/components/post";
import { getBlogPosts } from "@/sanity/sanity-utils";
import Link from "next/link";


async function Blog() {

    const posts = await getBlogPosts();

    const mainPost = posts.filter((value) => value.creationId === 1)

    const [{ slug }] = mainPost;

    return (
        <section>
            <h1>Blog</h1>
            <div>
                <Link href={`/blog/${slug}`}>
                    {mainPost.map((value) => {
                        const {name, image, author, date, content} = value;
                        return (
                            <MainPost name={name} image={image} author={author} date={date} content={content} />
                        );
                    })}
                </Link>
                <div>
                    <ul>
                        {posts.map((value) => {
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