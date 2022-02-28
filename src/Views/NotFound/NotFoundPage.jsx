import React from 'react'
import { Link } from "react-router-dom";
import './NotFoundPage.css';


const NotFoundPage = () => {
    return (
        <div className="container">
            <div className="row d-flex justify-content-center align-item-center">
                <div className="col-12 myheader">
                    <h1 className="heading1">404</h1>
                </div>
                <div className="col-12 errer">
                    <div className="row d-flex justify-content-center align-item-center ">
                        <div className="col-12">
                        <h2>DÉSOLÉ</h2>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center align-item-center ">
                        <div className="col-12">
                        <h4>Cette page n’existe pas (plus).</h4>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center align-item-center ">
                        <div className="col-12">
                        <p>Reformulez votre recherche ou allez sur la page d'accueil d'IFIAG. cliquez sur le bouton ci-dessous</p>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-10 col-md-4">
                        <Link to="/" className="btn custom-button">back to Home page</Link>
                        </div>
                    </div>
                    
                    
                    
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage
