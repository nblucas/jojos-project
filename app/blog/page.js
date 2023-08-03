import MainPost from "@/components/main-post";
import { getBlogPosts } from "@/sanity/sanity-utils";


async function Blog() {

    const posts = await getBlogPosts();

    //console.log(posts)

    const mainPost = posts.filter((value) => value.creationId === 1)

    console.log(mainPost);

    return (
        <section>
            <h1>Blog</h1>
            <div>
                {mainPost.map((value) => {
                    const {name, image, author, date, content} = value;
                    return (
                        <MainPost name={name} image={image} author={author} date={date} content={content} />
                    );
                })}
                <div>
                    <ul>
                        <li>
                            <img src="" alt="" />
                            <p>texto 1</p>
                        </li>
                        <li>
                            <img src="" alt="" />
                            <p>texto 2</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );

}

export default Blog;