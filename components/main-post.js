import { PortableText } from "@portabletext/react";

const MainPost = (props) => {

    const {name, image, author, date, contentPreview} = props;

    return (
        <div className="main-post small-gap">
            <img src={image} alt="image of a tiny computer surrounded of other eletronics" className="width-50"/>
            <div>
                <h2 className="montserrat-font weight-700 white-font">{name}</h2>
                <p className="montserrat-font white-font smaller-margin-top">Por {author}, {date}</p>
                <div className="twenty-pixels">
                    <p className="montserrat-font white-font line-height small-margin-top">{contentPreview}</p>
                </div>
            </div>
        </div>
    );
}

export default MainPost;