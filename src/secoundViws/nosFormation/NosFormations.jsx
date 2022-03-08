import React from 'react';
import { Link } from 'react-router-dom';
import './nosFormation.css';
import Portrait from '../../Components/portrait/Portrait';
import Initiation from '../../Assets/images/Initiation.jpg';
import Chatbot from '../../Assets/images/Ochatbot.jpg';
import Elastic from '../../Assets/images/Elastic.jpg';
import DeepLearning from '../../Assets/images/Support.jpg';
import MongoDB from '../../Assets/images/MongoDB.jpg'
const NosFormations = () => {
    return (
        <div className="container ">

             <div className="row justify-content-center ">
                <div className=" row col-12 col-lg-9 mt-5 margin-mobile" >
                   
                     <div className=" col-12">

                        <div className=" col-12">

                            <img src={Initiation} alt="formation*date" className="img-fluid formation-img" /> 
                        </div>
                      <div className=" col-12 mt-4 margin text-justify">
                            <p class=""><samp class="formation-sub-text">Initiation</samp> au<samp class="formation-sub-text"> Numérique et maîtrise des outils</samp>, enjeux stratégiques et domaines d'application de l'Intelligence Artificielle</p> 
                            <p class=""><samp class="formation-text">participants : </samp>tout public, porteurs de projets, création d’entreprise</p>
                            <p class=""><samp class="formation-text">prérequis : </samp>aucun</p>                    
                            <p class=""><samp class="formation-text">Financement : </samp><samp class="formation-sub-text">CPF/AIF/PASS Numérique</samp></p>
                            <p class=""><samp class="formation-text">Financement : </samp><samp class="formation-sub-text">ENTREPRISE /OPCO /FNE</samp></p>
                         <Link to="/contacts">
                            <button type="button" className="accueil-button float mb-3">CHOISIR CETTE FORMATION</button>
                         </Link>
                        </div>
                    </div>

                     <div className=" col-12">

                        <div className=" col-12">

                            <img src={Chatbot} alt="formation*date" className="img-fluid formation-img" /> 
                        </div>
                        <div className=" col-12 mt-4 margin text-justify">
                            <p class=""><samp class="formation-sub-text">HTML ET CHATBOT </samp>(3 jours sur le no-code pour créer un site Web suivi de 2 jours de création de Chatbot) Cette formation sur 5 jours est constituée de deux modules indépendants</p> 
                            <p class=""><samp class="formation-text">description : </samp> la formation sur 5 jours permet non seulement de concevoir un site web (3 jours) mais aussi d’y intégrer un chat bot (2 jours). Nous utiliserons pour les Chatbot une approche low code qui permet de concevoir facilement un Chatbot efficace selon le projet de l’utilisateur. Cette formation comporte 70% de pratique. Cette formation est ouverte à tout type de public.</p>
                            <p class=""><samp class="formation-text">participants : </samp> porteur de projet/toute personne désireux de créer rapidement un site web</p>
                            <p class=""><samp class="formation-text">prérequis : </samp>aucun</p>                    
                            <p class=""><samp class="formation-text">Financement : </samp><samp class="formation-sub-text">CPF </samp> (3 jours HTML) + (2 jours Chatbot)</p>
                            <p class=""><samp class="formation-text">Financement : </samp><samp class="formation-sub-text">ENTREPRISE /OPCO /FNE </samp> (3 jours HTML) + (2 jours Chatbot)</p>
                         <Link to="/contacts">
                            <button type="button" className="accueil-button float mb-3">CHOISIR CETTE FORMATION</button>
                         </Link>
                        </div>
                    </div>
                     <div className=" col-12">

                        <div className=" col-12">

                            <img src={MongoDB} alt="formation*date" className="img-fluid formation-img" /> 
                        </div>
                        <div className=" col-12 mt-4 margin text-justify">
                            <p class=""><samp class="formation-sub-text">MongoDB</samp></p> 
                            <p class=""><samp class="formation-text">participants : </samp> ce stage s’adresse à tous les informaticiens ayant à installer et à exploiter MongoDB ou voulant une première approche de l’administration et de l’écriture de requêtes simples avec MongoDB.</p>
                            <p class=""><samp class="formation-text">prérequis : </samp>bonnes connaissances d’un langage de programmation. Connaissances de base de l’administration en ligne de commande. Connaissance souhaitable du langage Python ou Java</p>                    
                            <p class=""><samp class="formation-text">Financement : </samp><samp class="formation-sub-text">AIF</samp></p>
                            <p class=""><samp class="formation-text">Financement : </samp><samp class="formation-sub-text">ENTREPRISE /OPCO /FNE</samp></p>
                         <Link to="/contacts">
                            <button type="button" className="accueil-button float mb-3">CHOISIR CETTE FORMATION</button>
                         </Link>
                        </div>
                    </div>
                     <div className=" col-12">

                        <div className=" col-12">

                            <img src={Elastic} alt="formation*date" className="img-fluid formation-img" /> 
                        </div>
                        <div className=" col-12 mt-4 margin text-justify">
                            <p class=""><samp class="formation-sub-text">Elastic stack </samp></p> 
                            <p class=""><samp class="formation-text">participants : </samp>Chef de projets, responsable d’applications</p>
                            <p class=""><samp class="formation-text">prérequis : </samp>quelques connaissances en programmation et en administration du système d’exploitation Windows.</p>                    
                            <p class=""><samp class="formation-text">Financement : </samp><samp class="formation-sub-text">CPF</samp></p>
                            <p class=""><samp class="formation-text">Financement : </samp><samp class="formation-sub-text">ENTREPRISE /OPCO /FNE</samp></p>
                         <Link to="/contacts">
                            <button type="button" className="accueil-button float mb-3">CHOISIR CETTE FORMATION</button>
                         </Link>
                        </div>
                    </div>
                     <div className=" col-12">

                        <div className=" col-12">
                            <img src={DeepLearning} alt="formation*date" className="img-fluid formation-img" /> 
                        </div>
                        <div className=" col-12 mt-4 margin text-justify">
                             

                            <p class=""><samp class="formation-sub-text">AI,DEEP LEARING AVEC TENSORFLOW </samp> (4 jours)</p> 
                            <p class=""><samp class="formation-text">description  : </samp>TensorFlow est LE framwork Deep Learning et l’Intelligence Artificielle, par excellence. Proposée par Google, librairie Open Source TensorFlow permet d’implémenter des problèmes de Deep Learning. Notre formation avec 50% de pratique expose les cas d’utilisation et leur mise en pratique des architecture Deep Learning. Les stagiaires seront à même de concevoir des systèmes prédictifs de reconnaissance visuelle, textuelle.</p> 
                            <p class=""><samp class="formation-text">participants : </samp> Data scientist, Data analyst, développeurs, Architectes Big Data</p>
                            <p class=""><samp class="formation-text">prérequis : </samp>Il est nécessaire de connaître la programmation en Python</p>                    
                            <p class=""><samp class="formation-text">Financement : </samp><samp class="formation-sub-text">CPF /AIF /PASS Numérique</samp></p>
                            <p class=""><samp class="formation-text">Financement : </samp><samp class="formation-sub-text">ENTREPRISE /OPCO /FNE </samp></p>
                         <Link to="/contacts">
                            <button type="button" className="accueil-button float mb-3">CHOISIR CETTE FORMATION</button>
                         </Link>
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

export default NosFormations