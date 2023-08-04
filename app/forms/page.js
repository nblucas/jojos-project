"use client"

import { useState, useEffect, useRef } from "react";
import Modal from "@/components/modal";
import "@/public/static/css/styles.css"

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
                <h1 className="title sunrise-font text-center title-bottom-margin">Formulário de Vaga</h1>
                <form onSubmit={handleSubmit} className="flex flex-direction-column align-items-center justify-center medium-gap medium-margin-top">
                    <div className="flex flex-direction-column justify-start input-label montserrat-font twenty-pixels grey-font smaller-gap">
                        <label htmlFor="name">Nome:</label>
                        <input type="text" id="name" name="fullName" value={formValues.fullName} onChange={handleChange} required className="montserrat-font grey-font"/>
                    </div>
                    <div className="flex flex-direction-column justify-start input-label montserrat-font twenty-pixels grey-font smaller-gap">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={formValues.email} onChange={handleChange} required className="montserrat-font grey-font"/>
                    </div>
                    <div className="flex flex-direction-column justify-start input-label montserrat-font twenty-pixels grey-font smaller-gap">
                        <label htmlFor="portfolio">Link para portfólio: </label>
                        <input type="text" id="portfolio" name="portfolio" value={formValues.portfolio} onChange={handleChange} required className="montserrat-font grey-font"/>
                    </div>
                    <div className="flex flex-direction-column justify-start input-label montserrat-font twenty-pixels grey-font smaller-gap">
                        <label htmlFor="motivation">Por que você quer fazer parte da Jojos?</label>
                        <textarea id="motivation" name="motivation" value={formValues.motivation} onChange={handleChange} required className="montserrat-font grey-font"/>
                    </div>
                    <button type="submit" className="montserrat-font">Enviar formulário</button>
                </form>
            </div>
            <div ref={modalRef} className="flex justify-center align-items-center">
                {isShowingModal && <Modal />}
            </div>
        </section>
    )
}

export default Forms;