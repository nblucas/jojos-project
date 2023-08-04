import Link from "next/link";

const GameImages = () => {

    const biggerSizes = {width: 1240, height: 490};
    const smallerSizes = {width: 400, height: 300};

    return(
        <section>
            <Link href="/pacman">
                <img src="/static/images/pacman.svg" alt="Big image with Pacman game" className="main-image-games" />
            </Link>
            <div className="flex justify-between gap-games">
                <Link href="/pacman" className="secundary-images-games">
                    <img src="/static/images/pacman.svg" alt="Small image with Pacman game" className="secundary-games-with-link"/>
                </Link>
                <img src="/static/images/tetris.svg" alt="Tetris game" className="secundary-images-games" />
                <img src="/static/images/asteroids.svg" alt="Asteroids game" className="secundary-images-games" />
            </div>
        </section>
    );

}

export default GameImages;