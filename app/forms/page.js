"use client"

import { useState, useEffect, useRef } from "react";
import Modal from "@/components/modal";

const Forms = () => {

    const [isShowingModal, setIsShowingModal] = useState(false);

    const modalRef = useRef(null);

    const handleClickOutside = (e) => {
        if(!modalRef.current.contains(e.target)){
            setIsShowingModal(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mouseup", handleClickOutside);

        return () => {
            document.removeEventListener("mouseup", handleClickOutside);
        }

    }, [modalRef]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsShowingModal(true);
    }

    return(
        <section>
            <div>
                <h1>Formulário de Vaga</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Nome:</label>
                        <input type="text" id="name" name="name"/>
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email"/>
                    </div>
                    <div>
                        <label htmlFor="portfolio">Link para portfólio: </label>
                        <input type="url" id="portfolio" name="portfolio"/>
                    </div>
                    <div>
                        <label htmlFor="motivation">Por que você quer fazer parte da Jojos?</label>
                        <input type="text" id="motivation" name="motivation"/>
                    </div>
                    <button type="submit">Enviar formulário</button>
                </form>
            </div>
            <div ref={modalRef} style={{backgroundColor: "red"}}>
                {isShowingModal && <Modal />}
            </div>
        </section>
    )
}

export default Forms;