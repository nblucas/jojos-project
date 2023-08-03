import Image from "next/image";

const Post = (props) => {

    const {name, image} = props;

    return (
        <li>
            <Image src={image} alt="image of various characters in an abstract world" width={390} height={220}/>
            <p>{name}</p>
        </li>
    );

}

export default Post;