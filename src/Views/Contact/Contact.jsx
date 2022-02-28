import React, { useState, useEffect } from 'react';
import './Contact.css';
import { Link } from "react-router-dom";
import axios from "axios";

const Contact = () => {

    const initialValue = {
        prenom: "",
        nom: "",
        phone: "",
        email: "",
        message: ""
    };
    const [contact, setContact] = useState(initialValue);
    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const onChangeInput = e => {
        console.log("click")
        const { name, value } = e.target;
        setContact({ ...contact, [name]: value })
        console.log(`After change the input: ${contact}`)
    };

    const onContactSubmit = async (e) => {
        e.preventDefault()
        console.log("button clicked");
        setErrors(validates(contact));
        try {
            await axios.post('/contacts/register', { ...contact })
            window.location.href = "/register"
        } catch (err) {

        }
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log("Errors : ", errors);
        if (Object.keys(errors).length === 0 && isSubmit) {
            console.log(`Contact : ${contact.prenom}`)
        }
    }, [errors, isSubmit, contact]);


    // Custom Validation for input
    const validates = (values) => {
        const errors = {};
        const phoneValidation = /^\d{9}$/;
        const emailValidation = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

        if (!values.prenom) {
            errors.prenom = "Prenom is required"
        }
        if (!values.nom) {
            errors.nom = "Nom is required"
        }
        if (!values.email) {
            errors.email = "Email is required"
        } else if (!emailValidation.test(values.email)) {
            errors.email = "This is not a valid email format"
        }
        if (!values.phone) {
            errors.phone = "Phone is required"
        } else if (!phoneValidation.test(values.phone)) {
            errors.phone = "Enter the Correct mobile number format. eg: 785578887"
        }
        if (!values.message) {
            errors.message = "Message is required. Please Type your message"
        }else if(values.message.length >= 300) {
            errors.message = "Text length should not be more than 300 character"
        }
        return errors;
    };

    return (
        <div className="container">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-12 col-lg-7">
                    <p className="text-center pt-3 ">
                        Vous avez une question veuillez completer le formulaire ci-dessous
                        ou allez à la page contact de L'IFIAG en cliquant
                        <Link to="#"> ici</Link>
                    </p>
                </div>
                <div className="col-12 col-lg-6 card shadow rounded">
                    {Object.keys(errors).length === 0 && isSubmit
                        ? (
                            <div className="col-12 col-md-6 shadow rounded boxes pb-3 mt-3">
                                <h4 className="text-center pt3 text-secondary">Message successfully Send</h4>
                                <span><i className="far fa-check-circle successIcon" /></span>
                            </div>
                        ) : (
                            <p className="errors-message">
                                {
                                    errors.prenom || errors.nom || errors.email || errors.phone || errors.message
                                }
                            </p>
                        )}
                    <div className="">
                        <form onSubmit={onContactSubmit}>
                            <div className="form-group row">
                                <div className="col-12 col-md-6">
                                    <label className="col-12 col-form-label"><span className="star">*</span> Prénom: </label>
                                    <input
                                        type="text"
                                        name="prenom"
                                        className="col-12 form-control"
                                        placeholder="Entre votre Prénom"
                                        value={contact.prenom}
                                        onChange={onChangeInput}
                                    />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="col-12 col-form-label"><span className="star">*</span> Nom: </label>
                                    <input
                                        type="text"
                                        name="nom"
                                        className="col-12 form-control"
                                        placeholder="Entre votre Nom"
                                        value={contact.nom}
                                        onChange={onChangeInput}
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-12 col-md-6">
                                    <label className="col-12 col-form-label"><span className="star">*</span>  Adresse e-mail : </label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="col-12 form-control"
                                        placeholder="email@email.com"
                                        value={contact.email}
                                        onChange={onChangeInput}
                                    />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="col-12 col-form-label"><span className="star">*</span> n° de téléphone : </label>
                                    <input
                                        type="text"
                                        name="phone"
                                        className="col-12 form-control"
                                        placeholder="Entrez votre numéro"
                                        value={contact.phone}
                                        onChange={onChangeInput}
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-12">
                                    <label className="col-12 col-form-label"><span className="star">*</span> Message : </label>

                                    <textarea
                                        type="text"
                                        name="message"
                                        className="col-12 form-control"
                                        rows="3"
                                        placeholder="Entrez votre message ..."
                                        value={contact.message}
                                        onChange={onChangeInput}
                                    >
                                    </textarea>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-12">
                                    <hr ></hr>
                                </div>
                            </div>
                            <div className="form-group row d-flex justify-content-end">
                                <div className="col-4 col-2">
                                    <button
                                        type="submit"
                                        className="btn btn-primary send-button"
                                    >
                                        Envoyer
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
