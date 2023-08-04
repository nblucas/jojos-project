import Link from "next/link";

const titleAndLinks = [
    {
        id: 1,
        title: "Jogos",
        ref: "/"
    },
    {
        id: 2,
        title: "Sobre",
        ref: "/#about-us-container"
    },
    {
        id: 3,
        title: "Blog",
        ref: "/blog"
    },
    {
        id: 4,
        title: "Carreira",
        ref: "/#carrer-container"
    }
]

const Navbar = () => {

    return (
        <nav>
            <ul className="flex justify-between">
                {titleAndLinks.map((value) => {
                    const {id, title, ref} = value;
                    if(id === 4) {
                        return(
                            <li key={id}><Link href={ref} className="no-decoration carrer-btn">{title}</Link></li>
                        );    
                    }
                    return(
                        <li key={id}><Link href={ref} className="white-font no-decoration">{title}</Link></li>
                    );
                })}
            </ul>
        </nav>
    );

}

export default Navbar;