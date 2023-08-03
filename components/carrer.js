import Link from "next/link";
import CarrerCard from "./carrer-card";

const Carrer = () => {

    const allCarrers = [
        {
            id: 1,
            carrerName: "Desenvolvedor C++ Júnior",
            firstTag: "DEV",
            secondTag: "Remoto"
        },
        {
            id: 2,
            carrerName: "Desenvolvedor C++ Pleno",
            firstTag: "DEV",
            secondTag: "Remoto"
        },
        {
            id: 3,
            carrerName: "Engenheiro de Software",
            firstTag: "Engenheiro",
            secondTag: "Remoto"
        },
        {
            id: 4,
            carrerName: "Artista Técnico",
            firstTag: "Arte",
            secondTag: "Remoto"
        },
        {
            id: 5,
            carrerName: "Representante Comercial",
            firstTag: "Comercial",
            secondTag: "Presencial"
        },
    ];

    return (
        <section id="carrer-container">
            <h1>Carreira</h1>
            <div>
                {allCarrers.map((value) => {
                    const {id, carrerName, firstTag, secondTag} = value;
                    return id === 1 ? <Link href="/forms"><CarrerCard id={id} carrerName={carrerName} firstTag={firstTag} secondTag={secondTag} /></Link> : <CarrerCard id={id} carrerName={carrerName} firstTag={firstTag} secondTag={secondTag} />
                })}
            </div>
        </section>
    );

}

export default Carrer;