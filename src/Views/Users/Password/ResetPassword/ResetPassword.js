import React from 'react';
import {Link} from "react-router-dom";
import "./ResetPassword.css"

const ResetPassword = () => {
    return (
        <div className="container">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-12 col-sm-8 col-md-6 col-lg-4 card shadow rounded">
                    <div className="card-header">
                        <h3 className="text-center pt-3 header-text">Réinitialiser le mot de passe</h3>
                    </div>
                    <div className="col-12 mt-2">
                        <p className="para">Veuillez entrer l'email que vous utilisez pour vous connecter à IFIAG</p>
                    </div>
                    <div>
                        <form>
                            <div className="form-group row">
                                <div className="col-12 mb-2">
                                    <label className="col-12 col-form-label"><span className="star">*</span>Adresse e-mail :</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="col-12 form-control"
                                        placeholder="email@email.com"
                                    />
                                </div>

                                <div className="col-12 mt-3">
                                    <button type="submit" className="btn btn-warning btn-block">Request Password Reset</button>
                                </div>
                                <div className="col-12 mt-3 d-flex justify-content-center align-item-cente">
                                    <Link className="login" to="login">Retour connexion</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword
