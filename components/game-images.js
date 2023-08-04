import Link from "next/link";

const GameImages = () => {

    const biggerSizes = {width: 1240, height: 490};
    const smallerSizes = {width: 400, height: 300};

    return(
        <section className="grid grid-area-games small-gap">
            <Link href="/pacman" className="main-1 games-items parent-div-images-games">
                <img src="/static/images/pacman.svg" alt="Big image with Pacman game" className="main-image-games" />
            </Link>
            <Link href="/pacman" className="parent-div-images-games sec-1 games-items">
                <img src="/static/images/pacman.svg" alt="Small image with Pacman game" className="secundary-games-with-link"/>
            </Link>
            <img src="/static/images/tetris.svg" alt="Tetris game" className="parent-div-images-games sec-2 games-items" />
            <img src="/static/images/asteroids.svg" alt="Asteroids game" className="parent-div-images-games sec-3 games-items" />
        </section>
    );

}

export default GameImages;