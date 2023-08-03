import Link from "next/link";

const GameImages = () => {

    const biggerSizes = {width: 1240, height: 490};
    const smallerSizes = {width: 400, height: 300};

    return(
        <section>
            <Link href="/pacman"><img src="/static/images/pacman.svg" alt="Big image with Pacman game" /></Link>
            <div>
                <Link href="/pacman"><img src="/static/images/pacman.svg" alt="Small image with Pacman game" /></Link>
                <img src="/static/images/tetris.svg" alt="Tetris game" />
                <img src="/static/images/asteroids.svg" alt="Asteroids game" />
            </div>
        </section>
    );

}

export default GameImages;