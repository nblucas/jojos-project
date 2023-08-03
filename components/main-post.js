import { PortableText } from "@portabletext/react";

const MainPost = (props) => {

    const {name, image, author, date, content} = props;

    return (
        <div>
            <img src={image} alt="image of a tiny computer surrounded of other eletronics" />
            <div>
                <h2>{name}</h2>
                <p>Por {author}, {date}</p>
                <PortableText value={content}/>
            </div>
        </div>
    );
}

export default MainPost;