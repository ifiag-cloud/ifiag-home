import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import Logo from '../../../Assets/images/ifiag_logo.png'
import './Login.css';

const Login = () => {

    const initialValues = {
        email: '',
        password: ''
    };
    const [user, setUser] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [passwordShow, setPasswordShow] = useState(false);

    const togglePassword = () => {
        setPasswordShow(!passwordShow)
    };

    const onChangeInput = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
        console.log(`After Changes input : ${user}`)
    };

    const onLoginSubmit = async (e) => {
        e.preventDefault();
        setErrors(validates(user));
            try {
                await axios.post(`/user/login`, { ...user })
                localStorage.setItem('firstLogin', true)
                window.location.href = "/user_profile"
            } catch (err) {
                alert(err.response.data.message)
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

        if (!values.email) {
            errors.email = "E-mail is required"
        } 
        if (!values.password) {
            errors.password = "Password is required"
        } 
        return errors;
    }
    return (
        <div className="container">
            <div className="row d-flex justify-content-center align-items-center ">
                <div className="col-12 col-sm-8 col-md-6 col-lg-4 card shadow rounded ">
                    <div className="card-header">
                        <h3 className="text-center pt-3 header-text">S’inscrire</h3>
                    </div>
                    <div className="logo">
                        <Link exact to="/" >
                            <img src={Logo} alt="" />
                        </Link>
                    </div>
                    {Object.keys(errors).length === 0 && isSubmit ? (
                        <>
                        </>
                        // <div className="col-12 col-md-5  shadow rounded boxes pb-3">
                        //     <div className="row d-flex align-items-center">
                        //         <h4 className="text-center pt-3 text-secondary">Login successfully</h4>
                        //         <span><i className="far fa-check-circle successIcon" /></span>
                        //     </div>
                        // </div>
                    ) : (
                        <>
                            {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
                            < p className="errors-message">{errors.prenom || errors.nom || errors.phone || errors.email || errors.password || errors.confirmPassword}  </p>
                        </>
                    )}
                    <div className="">
                        <form onSubmit={onLoginSubmit}>
                            <div className="form-group row">
                                <div className="col-12">
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
                            </div>
                            <div className="form-group row">
                                <div className="col-12">
                                    <label className="col-12 col-form-label"><span className="star">*</span> Mot de passe :</label>
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

                            </div>
                            <div className="form-group row mt-1">
                                <div className="col-12">
                                    <Link className="forget-password-link" to="reset_password">Mot de passe oublié ?</Link>
                                </div>
                                <div className="col-12 mt-3">
                                    <button type="submit" className="btn btn-primary btn-block">Se Connecter</button>
                                </div>
                                <div className="col-12 mt-3">
                                    <hr />
                                </div>
                                <div className="col-12 mt-3">
                                    {/* <button type="button" className="btn btn-success btn-block">Créer un compte</button> */}
                                    <Link className="btn register-link btn-block" to="/register">Créer un compte</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login
