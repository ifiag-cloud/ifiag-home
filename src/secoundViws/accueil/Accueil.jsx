import React from 'react';
import './accueil.css';
import { Link } from 'react-router-dom';

import Main from '../../Assets/images/main.png';
import pass_numerique from '../../Assets/images/Pass-Numérique.jpg';
import Portrait from '../../Components/portrait/Portrait';

const Accueil = () => {
     return (
        <div className="container mt-4 mb-3">
           
            <div className="row">

                <div className="col-12 col-lg-4  card shadow rounded  first-image">

                      <img src={Main} alt="formation*date" className="img-fluid" /> 

                      <h2 className="sub-heading mt-2">FORMATIONS & DATES</h2>

                      <p class="mb-0">VOTRE FORMATION GRATUITE CPF ou FNE</p> 
                      <p class="mb-1"><samp class="telephone-text">par téléphone</samp>  :  01 41 34 38 25</p>
                     
                      <p class="mb-1"><samp class="formations-text">formations & dates</samp> enjeux <br/>stratégiques set domanies d’application
                       <br/>de...</p>
                         <Link to="/nos-formation">
                            <button type="button" className="accueil-button"> Choisir votre formation</button>
                         </Link>

                </div>
                
                <div className="col-12 col-lg-4  card shadow rounded ">
                      <img src={pass_numerique} alt="formation*date" className="img-fluid p-0" /> 
                   
                </div>
                
                <div className="col-12 col-lg-3 mt-3">  
                     <Portrait />
                </div>

            </div>
        </div>
    )
}

export default Accueil
