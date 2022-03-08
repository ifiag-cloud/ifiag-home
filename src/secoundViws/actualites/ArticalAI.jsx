import React from 'react';
import './actualites.css';
import portrait from '../../Assets/images/jean-profile.jpg'




const ArticalAI = () => {
    return (
        <div className="container">
             <div className="row justify-content-center ">
                <div className="col-12 col-lg-12 mt-5 margin-mobile">
                      <h2 className="sub-heading-text mt-4">
                        Portrait | Jean-Roger SIQUILINI, président de l'IFIAG 
                        Membre du club « Paris, une chance. Les entreprises s’engagent ! »
                      </h2>
                      <p className="text-justify mt-3 portrait-artical">
                         "L'Institut Français de l'Intelligence Artificielle et de la Génétique (IFIAG) accompagne les porteurs de projets dans l'IA et le numérique, notamment dans les QPV." - Membre du Club #LaFranceUneChance
                        </p>
                          <img src={portrait} alt="Logo République Français" className="img-fluid numerique-image" />
                        <p className="text-justify mt-3 portrait-artical">
                           <br/><samp className='artical-question'>Pouvez-vous nous présenter votre activité ? </samp><br/>
                            Après des études en électrotechnique et 20 ans dans le conseil en communication, j'ai créé en 2019 l'association : « Institut Français de l'Intelligence Artificielle et de la Génétique » (IFIAG) pour promouvoir ces domaines en France hexagonale et dans les Dom-Tom. <br/><samp className='artical-obj'> Notre objectif :</samp> découvrir, encourager, former et accompagner les porteurs de projet dans l'IA en les conseillant à chaque étape de développement.
                                <br/> <samp className='artical-question'> Quels rôles a joué la CCI Paris dans cette aventure entrepreneuriale ?</samp><br/>
                                La CCI est un lieu incontournable pour l'entrepreneuriat, nous avons d'ailleurs pu assister à des conférences de qualité sur des thèmes liés à nos problématiques.

                                
                                Dans le cadre de nos projets de recrutement, nous souhaitions avoir une démarche en faveur de l'inclusion par l'emploi et nous avons naturellement rejoint le <samp className='artical-bold'>"Club Paris, une chance. Les entreprises s'engagent!". </samp>Grâce au club, nous avons participé au dernier Forum de l'alternance qui nous a permis de recevoir plusieurs candidatures qui sont actuellement à l'étude.

                                 <br/><samp className='artical-question'>Quels sont vos projets ?</samp> 
                               <br/> Le numérique est une compétence clé, c’est un véritable enjeu de société pour être attractif sur le marché de l’emploi et pour évoluer dans sa vie quotidienne.  Nous avons mis en place le véhicule "Digi’Mobile" : un projet social collaboratif à visée éducative pour lutter contre la carence des compétences en milieu urbain.

                                Avec le Digi’Mobile, nous nous adressons aux personnes isolées ou en difficulté dans les milieux dits « populaire », les « déserts » ruraux et en Outre-mer. La première application concrète est la Fablab Mobile, afin d’initier et intéresser le « public cible » de façon ludique aux enjeux pédagogiques. Ce laboratoire de fabrication participatif mobile se présente dans un camion équipé de matériel Hightech notamment informatique, d’imprimantes 3D, tablettes tactiles, ordinateurs et autres.
                            
                        </p>
            
                </div>
              
             </div>
        </div>
    )
}

export default ArticalAI;
