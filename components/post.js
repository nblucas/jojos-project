
const Post = (props) => {

    const {name, image} = props;

    return (
        <li className="single-post flex flex-direction-column">
            <img src={image} alt="image of various characters in an abstract world" className="single-post-img"/>
            <p className="montserrat-font grey-font">{name}</p>
        </li>
    );

}

export default Post;