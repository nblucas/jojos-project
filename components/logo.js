import Image from "next/image.js";

const Logo = () => {

    return (
        <div className="flex justify-between">
            <Image src="/static/images/logo-img.svg" width={48.7} height={40} alt="Jojos logo" className="logo"/>
            <div className="title">
                <span className="white-font">J</span>
                <span className="sunrise-font">O</span>
                <span className="white-font">J</span>
                <span className="sunrise-font">O</span>
                <span className="white-font">S</span>
            </div>
        </div>
    );

}

export default Logo;