import Navbar from "./navbar.js";
import Logo from "./logo.js";

const Header = () => {

    return (
        <header className="header flex justify-between">
            <Logo />
            <Navbar />
        </header>
    );

};

export default Header;