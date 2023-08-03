import Link from "next/link";

const Navbar = () => {

    return (
        <nav>
            <ul>
                <li><Link href="/">Jogos</Link></li>
                <li><Link href="/#about-us-container">Sobre</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/#carrer-container">Carreira</Link></li>
            </ul>
        </nav>
    );

}

export default Navbar;