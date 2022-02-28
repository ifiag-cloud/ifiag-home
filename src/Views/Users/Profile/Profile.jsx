import React, { useContext } from 'react';
import profil from "../../../Assets/images/profile.jpg";
import "./Profile.css";
import { GlobalState } from "../../../GlobalState"

const Profile = () => {
    const state = useContext(GlobalState);
    const [isUser, setIsUser] = state.userAPI.isUser;

    console.log("Profile", isUser)

    return (
        <div className="container">
            <div className="row d-flex justify-content-center align-item-center">
                <div className="col-12 col-lg-8 card shadow rounded">
                    <div className="card-header">
                        <h3 className="text-center pt-3 header-text">
                            Profil
                        </h3>
                    </div>


                    <div className="row d-flex justify-content-center align-item-center profile-2-column">

                        <div className="col-12 col-md-3  mt-3 left-box">
                            <div className="row d-flex justify-content-end align-item-center">
                                <div className="col-12">
                                    <img src={profil} alt="profile photo" className="photo" />

                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary mt-3 upload-button">Upload Image</button>
                                </div>
                            </div>
                        </div>


                        <div className="col-12 col-md-8 profile-detail mt-3">
                            <div className="row">
                                <div className="col-5">
                                    <p className="title">Prénom :</p>
                                </div>
                                <div className="col-7">
                                    <p className="title-info">
                                        {isUser.prenom}
                                    </p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-5">
                                    <p className="title">Nom :</p>
                                </div>
                                <div className="col-7">
                                    <p className="title-info">
                                        {isUser.nom}
                                    </p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-5">
                                    <p className="title">n ° de téléphone :</p>
                                </div>
                                <div className="col-7">
                                    <p className="title-info">
                                        {isUser.phone}
                                        </p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-5">
                                    <p className="title">Adresse e-mail :</p>
                                </div>
                                <div className="col-7">
                                    <p className="title-info">
                                        {isUser.email}
                                        </p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-5">
                                    <p className="title">Mot de passe :</p>
                                </div>
                                <div className="col-7">
                                    <p className="title-info">**************</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <hr ></hr>
                                </div>
                            </div>
                            <div className="row d-flex justify-content-end mb-3 mt-3">
                                <div className="col-12 col-sm-8 col-md-6 col-lg-6">
                                    <button
                                        type="submit"
                                        className="btn btn-primary edit-button"
                                    >
                                        Edit Information
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile
