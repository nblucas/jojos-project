
const MainPost = (props) => {

    const {name, image, author, date, content} = props;

    console.log(name, author, date);
    console.log(content);

    return (
        <div>
            <img src="" alt="" />
            <div>
                <h2>{name}</h2>
                <p>Por {author}, {date}</p>
                <p>{content}</p>
            </div>
        </div>
    );
}

export default MainPost;