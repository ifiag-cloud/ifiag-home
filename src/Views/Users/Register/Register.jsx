import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

import './Register.css';

const Register = () => {

    const initialValues = {
        prenom: '',
        nom: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: ''
    };
    const [user, setUser] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [passwordShow, setPasswordShow] = useState(false);
    const [confirmPasswordShow, setConfirmPasswordShow] = useState(false);

    const togglePassword = () => {
        setPasswordShow(!passwordShow)
    };
    const toggleConfirmPassword = () => {
        setConfirmPasswordShow(!confirmPasswordShow)
    };

    const onChangeInput = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
        console.log(`After Changes input : ${user}`)
    };

    const onRegisterSubmit = async (e) => {
        e.preventDefault();
        setErrors(validates(user));
        if (user.password !== user.confirmPassword) {
            // alert("Passwords don't match");
        } else {
            // make API call
            try {
                await axios.post(`/user/register`, { ...user })
                localStorage.setItem('firstLogin', true)
                window.location.href = "/login"
            } catch (err) {
                // alert(err.response.data.message)
            }
        }

        setIsSubmit(true);
    };
    useEffect(() => {
        console.log("Errors :", errors)
        if (Object.keys(errors).length === 0 && isSubmit) {
            console.log(`user : ${user}`)
        }
    }, [errors, isSubmit, user])

    const validates = (values) => {
        const errors = {};
        const phoneValidation = /^\d{9}$/; 
        const emailValidation = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        const passwordValidation = /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/i;

        if (!values.prenom) {
            errors.prenom = "Prenom is required"
        }
        if (!values.nom) {
            errors.nom = "Nom is required"
        }
        if (!values.email) {
            errors.email = "E-mail is required"
        } else if (!emailValidation.test(values.email)) {
            errors.email = "This is not a valid email format"
        }
        if (!values.phone) {
            errors.phone = "Phone is required"
        } else if (!phoneValidation.test(values.phone)) {
            errors.phone = "Enter the Correct mobile number eg: 785578887"
        }
        
        if (!values.password) {
            errors.password = "Password is required"
        } else if (!passwordValidation.test(values.password)) {
            errors.password = "Password should be minimum eight and maximum 50 characters, at least one uppercase letter, one lowercase letter, one number and one special character"
        }
        if (!values.confirmPassword) {
            errors.confirmPassword = "Confirm Password is required"
        } else if (values.confirmPassword !== values.password) {
            errors.confirmPassword = "Confirm Password not matched."
        }
        return errors;
    }
    return (
        <div className="container">
            <div className="row d-flex justify-content-center align-items-center ">
                <div className="col-12 col-lg-6 card shadow rounded ">
                    <div className="card-header">
                        <h3 className="text-center pt-3 header-text">S’inscrire</h3>
                    </div>

                    {Object.keys(errors).length === 0 && isSubmit ? (
                        <div className="col-12 col-md-5  shadow rounded boxes pb-3">
                            <div className="row d-flex align-items-center">
                                <h4 className="text-center pt-3 text-secondary">Signed in successfully</h4>
                                <span><i className="far fa-check-circle successIcon" /></span>
                            </div>
                        </div>
                    ) : (
                        <>
                            {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
                            < p className="errors-message">
                                {
                                    errors.prenom || errors.nom || errors.email || errors.phone ||  errors.password || errors.confirmPassword
                                }
                            </p>
                        </>
                    )}
                    <div className="pb-3">
                        <form onSubmit={onRegisterSubmit}>
                            <div className="form-group row">
                                <div className="col-12 col-md-6">
                                    <label className="col-12 col-form-label"><span className="star">*</span> Prénom :</label>
                                    <input
                                        type="text"
                                        name="prenom"
                                        className="col-12 form-control"
                                        placeholder="Entrez votre Prénom"
                                        value={user.prenom}
                                        onChange={onChangeInput}
                                    />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="col-12 col-form-label"><span className="star">*</span> Nom :</label>
                                    <input
                                        type="text"
                                        name="nom"
                                        className="col-12 form-control"
                                        placeholder="Entrez votre Nom"
                                        value={user.nom}
                                        onChange={onChangeInput}
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-12 col-md-6">
                                    <label className="col-12 col-form-label"><span className="star">*</span> Adresse e-mail :</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="col-12 form-control"
                                        placeholder="email@email.com"
                                        value={user.email}
                                        onChange={onChangeInput}
                                    />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="col-12 col-form-label"><span className="star">*</span> n ° de téléphone :</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        className="col-12 form-control"
                                        placeholder="Entrez votre numéro"
                                        value={user.phone}
                                        onChange={onChangeInput}
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-12 col-md-6">
                                    <label className="col-12 col-form-label"><span className="star">*</span> Mot de passe : :</label>
                                    <div className="col-12">
                                        <input
                                            id="password"
                                            type={passwordShow ? "text" : "password"}
                                            name="password"
                                            className="form-control"
                                            placeholder="Mot de passe"
                                            value={user.password}
                                            onChange={onChangeInput}
                                        />
                                        <i
                                            className={passwordShow ? "fas fa-eye-slash pass" : "fas fa-eye pass"}
                                            id="togglePassword"
                                            onClick={togglePassword}
                                        ></i>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="col-12 col-form-label"><span className="star">*</span> Confirmer :</label>
                                    <input
                                        id="confirmPassword"
                                        type={confirmPasswordShow ? "text" : "password"}
                                        name="confirmPassword"
                                        className="col-12 form-control"
                                        placeholder="Confirmer mot de passe"
                                        value={user.confirmPassword}
                                        onChange={onChangeInput}
                                    />
                                    <i
                                        className={confirmPasswordShow ? "fas fa-eye-slash cpass" : "fas fa-eye cpass"}
                                        id="toggleConfirmPassword"
                                        onClick={toggleConfirmPassword}
                                    ></i>
                                </div>
                            </div>
                            <div className="form-group row mt-3">
                                <div className="col-12 col-md-6">
                                    <button type="submit" className="btn btn-primary btn-block">S'inscrire</button>
                                </div>


                                <div className="col-12 col-md-6  d-flex justify-content-end align-item-center">
                                    <Link className="login-link" to="/login">Se connecter à un compte existant</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Register
