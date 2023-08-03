import Image from "next/image.js";

const Logo = () => {

    return (
        <div>
            <Image src="/static/images/logo-img.svg" width={48.7} height={40} alt="Jojos logo"/>
            <span>Jojos</span>
        </div>
    );

}

export default Logo;