import React from 'react';
import { Link } from 'react-router-dom';

import Portrait from '../../Components/portrait/Portrait';
import portrait from '../../Assets/images/jean-profile.jpg'
import ALLAMELLOU from '../../Assets/images/ALLAMELLOU.jpg'
import Ollyaimage from '../../Assets/images/OK - JR ph.jpg'
import Ollyaimage2 from '../../Assets/images/image.png'
import IfiagInstitut from '../../Assets/images/IFIAG-Institut.jpg'




const Actualites = () => {
    return (
        <div className="container">
            <div className="row justify-content-center ">
                <div className="col-12 col-lg-9 mt-5 margin-mobile">
                    <div className="row d-flex justify-content-start align-items-start">
                         <div className="col-12 col-lg-4">
                            <img src={IfiagInstitut} alt="Logo République Français" className="img-fluid" />
                        </div>
                           <div className="col-12 col-lg-8">

                                    <Link to="/artical-pasteur"style={{ textDecoration: 'none', color:'inherit' }}>
                                        <h1 className="sub-heading-text mb-3 ">L’IFIAG assistait à la table ronde organisée à l’Institut de Pasteur le 30 novembre 2021 sur le thème: les enjeux de l’industrie de la santé révélés pendant la crise sanitaire liée à la Covid-19 en France.</h1>
                                    </Link>

                                     <p className="text-justify mr-2 portrait-paragraph ">Plusieurs experts en recherche scientifique et du domaine de la santé se sont réunis le mardi 30 Novembre au sein de l’Institut Pasteur pour mettre en avant les enjeux de la recherche scientifique et de l’innovation en France.</p>
                                    <p  className='portrait-paragraph'>La discussion sur le thème: « Investir dans la recherche : un enjeu d'anticipation,...</p>
                           </div>

                    </div>
                    <div className="row d-flex justify-content-start align-items-start mt-5">
                         <div className="col-12 col-lg-4">
                            <img src={Ollyaimage2} alt="Logo République Français" className="img-fluid" />
                        </div>
                           <div className="col-12 col-lg-8">

                                    <Link to="/article-ollya-Colloque"style={{ textDecoration: 'none', color:'inherit' }}>
                                        <h1 className="sub-heading-text mb-3 ">Le Président de l’IFIAG Jean Roger SIQUILINI était convié au Sénat par l’USHOM en présence d’élus ultramarins pour répondre à la crise du logement social en Outre-mer.</h1>
                                    </Link>

                                     <p className="text-justify mr-2 portrait-paragraph mt-1">Les départements et régions d’Outre-mer ont aujourd’hui besoin de financement, d’innovation et d’une gestion adaptée pour faire face aux difficultés du secteur locatif social et au changement climatique et technologique.</p>
                                    <p className=' portrait-paragraph'>Le Président de l'IFIAG, Jean Roger SIQUILINI était convié le lundi 27 septembre 2021 au Palais du Luxembourg au colloque organisé par l’USHOM (Union sociale pour Outre-mer) sous le parrainage de Monsieur le Vice-Président du Sénat, Georges PATIENT, en partenariat avec ACCD’OM et Interco’Outre-merr sur le thème ....</p>
                           </div>       
                           

                    </div>
                    <div className="row d-flex justify-content-start align-items-start mt-5">
                         <div className="col-12 col-lg-4">
                            <img src={Ollyaimage} alt="Logo République Français" className="img-fluid" />
                        </div>
                           <div className="col-12 col-lg-8">

                                    <Link to="/article-ollya"style={{ textDecoration: 'none', color:'inherit' }}>
                                        <h1 className="sub-heading-text mb-3">En présence de la Ministre du travail le Président de l’IFIAG a assisté à la cérémonie de remise de trophées « 1 jeune, 1 solution » le Mercredi 22 septembre 2021</h1>
                                    </Link>

                                     <p className="text-justify mr-2 portrait-paragraph">C’est à l’invitation du préfet de la région d’Île-de-France et de Paris que le Président de l’IFIAG Jean Roger SIQUILINI 
                                     participait à la cérémonie de remise des trophées « 1 jeune, 1 solution » le mercredi 22 septembre 2021 à l'Hôtel de Noirmoutier à Paris, en présence de la Ministre du Travail,
                                     de l'Emploi et de l’Insertion, ainsi que du haut-commissaire à l’emploi et à l’engagement des entreprises dans le cadre du plan France Relance. Madame la Ministre a remis en ce
                                     jour 8 trophées aux 8 entreprises membres du réseau « La France, une chance. Les entreprises s’engagent! » qui se sont affiliées pour recruter des jeunes de 16-25 ans dans des
                                     secteurs comme le transport, le BTP</p>
                                     
                           </div>

                    </div>
                    <div className="row d-flex justify-content-start align-items-start  mt-5">
                         <div className="col-12 col-lg-4">
                            <img src={portrait} alt="Logo République Français" className="img-fluid " />
                        </div>
                           <div className="col-12 col-lg-8">

                                    <Link to="/artical-portrait"style={{ textDecoration: 'none', color:'inherit' }}>
                                        <h1 className="sub-heading-text mb-3">Portrait | Jean Roger SIQUILINI, président de l’IFIAG</h1>
                                    </Link>

                                     <p className="text-justify mr-2 portrait-paragraph mt-2">[PORTRAIT] « L’IFIAG accompagne les porteurs de projets dans
                                      les domaines de l’Intelligence Artificielle et du #numérique, notamment dans les QPV. » Jean Roger SIQUILINI,
                                       président l’IFIAG, membre du club #LaFranceuneChance  </p>
                                       <p>Pouvez-vous nous présenter votre activité ?</p>
                                    <p className=' portrait-paragraph'>Après des études en électrotechnique et 20 ans dans le conseil en communication, 
                                        j'ai créé en 2019 l'association : « Institut Français de l'Intelligence Artificielle 
                                        et de la Génétique » (IFIAG) pour promouvoir ces domaines en France hexagonale et dans les Dom-Tom.</p>
                           </div>

                    </div>
                    <div className="row d-flex justify-content-start align-items-start  mt-5 mb-4">
                         <div className="col-12 col-lg-4" >
                            <img src={ALLAMELLOU} alt="Logo République Français" className="img-fluid " />
                        </div>
                           <div className="col-12 col-lg-8">

                               <Link to="/aritcal-digitale" style={{ textDecoration: 'none', color:'inherit' }}>
                                     <h1 className="sub-heading-text mb-2">Écologie digitale : l’impact du Numérique sur l’environnement</h1>
                               </Link>
                                     <p class="text-justify mr-2 portrait-paragraph">L’actualité nous oblige à regarder le monde qui nous entoure à travers de nouveaux prismes. Face à la pandémie, le numérique apparaît comme notre bouée de sauvetage, entre consommation de contenus en streaming, backtracking (identification d’utilisateurs de smartphones ayant eu contact avec une personne infectée), explosion du télétravail avec son corollaire la visio-conférence (Zoom, Skype, Teams…) il donne l’illusion que l’Homme pourrait se passer de vie sociale. On en viendrait presqu’à oublier l’empreinte carbone liée au fonctionnement d’internet,</p>
                           </div>

                    </div>
                
                
                </div>

                <div className="col-12 col-lg-3 mt-5">  
                     <Portrait />
                </div>

            </div>
               
        </div>
    )
}

export default Actualites;



