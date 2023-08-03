"use client"

import { useState, useEffect, useRef } from "react";
import Modal from "@/components/modal";

const Forms = () => {

    const [isShowingModal, setIsShowingModal] = useState(false);
    const [formValues, setFormValues] = useState({fullName: "", email: "", portfolio: "", motivation: ""});

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

    const cleanInputFields = () => {
        setFormValues({fullName: "", email: "", portfolio: "", motivation: ""});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsShowingModal(true);
        cleanInputFields();
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevData) => ({...prevData, [name]: value}));
    }

    return(
        <section>
            <div>
                <h1>Formulário de Vaga</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Nome:</label>
                        <input type="text" id="name" name="fullName" value={formValues.fullName} onChange={handleChange} required/>
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={formValues.email} onChange={handleChange} required/>
                    </div>
                    <div>
                        <label htmlFor="portfolio">Link para portfólio: </label>
                        <input type="text" id="portfolio" name="portfolio" value={formValues.portfolio} onChange={handleChange} required/>
                    </div>
                    <div>
                        <label htmlFor="motivation">Por que você quer fazer parte da Jojos?</label>
                        <input type="text" id="motivation" name="motivation" value={formValues.motivation} onChange={handleChange} required/>
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