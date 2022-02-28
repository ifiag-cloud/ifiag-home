import React, { useState, useContext } from 'react';
import './Home.css';
import Logo_France from '../../Assets/images/logoRepu.png';
import Logo_ileDeFrance from '../../Assets/images/logoIle-de-Fr.png';
import { ContextState } from '../../ContextState';
// import Formation from '../../Assets/Video/ifiag_info.mp4';
import { Link, NavLink } from 'react-router-dom'
 
const Home = () => {
        const {setNewPag} = useContext(ContextState)
        const data = localStorage.getItem("newPage")

        console.log(data)
    return (
        <div className="container">
            <h1 className="heading">Choisissez votre Formation en cliquant <a href="https://www.ifiag.org" target="_blank" rel="noreferrer" > ici</a></h1>

            <div className="row justify-content-center columns">

                <div className="col-12 col-lg-7 card shadow rounded mt-2 pt-3 pb-3 mycard">
                    <h2 className="sub-heading">HTML et Chatbot</h2>
                    <p className="para">Vous aurez droit à 3 jours sur le no-code pour créer un site Web suivi de 2 jours de création de Chatbot. Cette formation comporte deux modules indépendants.</p>

                    <h2 className="sub-heading">MongoDB , Elastic  Stack (3 Jour)</h2>
                    <p className="para">Ce stage s’adresse à tous les informaticiens ayant à installer et à exploiter MongoDB ou voulant une première approche de l’administration et de l’écriture de requêtes simples avec MongoDB.</p>
                    <p><span>Participants:</span> Chef de projets, responsable d’applications <span>Prérequis:</span> quelques connaissances en programmation et en administration du système d’exploitation Windows. Financement <span>AIF</span> Financement entreprise OPCO, FNE</p>

                    <h2 className="sub-heading">IA , Deep Learning avec TensorFlow (4 Flow)</h2>
                    <p className="para">TensorFlow est LE framwork Deep Learning et l’Intelligence Artificielle, par excellence. Proposée par Google, librairie Open Source TensorFlow permet d’implémenter des problèmes de Deep Learning. Notre formation avec 50% de pratique expose les cas d’utilisation et leur mise en pratique des architecture Deep Learning.</p>
                    <NavLink exact to="/accueil" activeClassName="active" className="nav_links" onClick={()=>setNewPag(data)}>
                    <button type="button" className="button_info"> En Savoir Plus </button>

                    </NavLink>
                </div>




                <div className="col-12 col-lg-4 mt-2 leftbox">
                    {/* <div className="row">
                        <div className="col-12">
                            <video className="ratio ratio-16x9" controls>
                                <source className=""
                                    src={Formation} type="video/mp4"
                                />
                            </video>
                        </div>
                    </div> */}
                    <div className="row">
                        <div className="col-12">
                            <div className="ratio ratio-16x9">
                                <iframe src="https://www.youtube.com/embed/7VUN808QsGw" title="La DIGI’MOBILE de L’IFIAG à Aubervilliers 93" frameborder="1" allow="fullscreen" className="video"></iframe>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                    <p className="para">L’IFIAG bénéficie du soutien de l’État à travers le contrat de ville de Plaine Commune-Aubervilliers. Elle est aussi soutenue par la Région Île-de-France.</p>
                    </div>

                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-4">
                            <img src={Logo_France} alt="Logo République Français" className="img-fluid" />
                        </div>
                        <div className="col-4">
                            <img src={Logo_ileDeFrance} alt="Région île de France" className="img-fluid" />
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center social-medial">
                        <Link to="#"><i className="fab fa-facebook-square facebook social-media-icon"></i></Link>
                        <Link to="#"><i className="fab fa-instagram-square instagram social-media-icon"></i></Link>
                        <Link to="#"><i className="fab fa-twitter-square twitter social-media-icon"></i></Link>
                        <Link to="#"><i className="fab fa-linkedin linkedin social-media-icon"></i></Link>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Home
