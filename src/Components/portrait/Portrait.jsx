import React from 'react';
import './portrait.css';
import { Link } from 'react-router-dom';

import portrait from '../../Assets/images/jean-profile.jpg'

const Portrait = () => {
    return (
       
            <div className="col-12 col-lg-12">
                    <div className="row d-flex justify-content-center align-items-start m-0">
                        <div className="col-12">
                            <img src={portrait} alt="Logo République Français" className="img-fluid " />
                        </div>

                        <div className="col-12">
                             <Link to="/artical-portrait" style={{ textDecoration: 'none', color:'inherit' }}>
                            <p className=' text-justify portrait-text'>Portrait | Jean Roger SIQUILINI, président de l’IFIAG | CCI Paris </p>

                             </Link>
                        </div>
                     <p class="text-justify mr-2 portrait-paragraph">PORTRAIT] « L’IFIAG accompagne les 
                                            porteurs de projets dans les domaines 
                                            de l’Intelligence Artificielle et du #
                                            numérique, notamment dans les QPV. » 
                                            Jean Roger SIQUILINI, président l’IFIAG, 
                                            membre du club #LaFranceuneChance  
                                            Lire l’article:<a href='http://cciparisidf.fr/j2acodj' target="_blank" rel="noreferrer" >http://cciparisidf.fr/j2acodj </a></p>
                    
                    </div>
                          <Link to="/actualites">
                              <button  className='portrait-button-2'>Voir toutes les actualités</button>
                        </Link> 
                     <div className="d-flex justify-content-center align-items-center social-medial mt-2">
                        <Link to="#"><i className="fab fa-facebook-square facebook social-media-icon"></i></Link>
                        <Link to="#"><i className="fab fa-instagram-square instagram social-media-icon"></i></Link>
                        <Link to="#"><i className="fab fa-twitter-square twitter social-media-icon"></i></Link>
                        <Link to="#"><i className="fab fa-linkedin linkedin social-media-icon"></i></Link>

                    </div>

                </div>
               
    
    )
}

export default Portrait