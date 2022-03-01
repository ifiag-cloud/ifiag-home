import React from 'react';
import './actualites.css';
import Portrait from '../../Components/portrait/Portrait';
import Ollyaimage from '../../Assets/images/OK - JR ph.jpg'


const ArticleOLlya = () => {
    return (
        <div className="container">

             <div className="row justify-content-center ">
                <div className="col-12 col-lg-9 mt-5 margin-mobile">
                      <h2 className="sub-heading-text ">
                        
                            En présence de la Ministre du travail le Président de l’IFIAG a assisté à la cérémonie de remise de trophées « 1 jeune, 1 solution » le Mercredi 22 septembre 2021
                      </h2>  
                      <p className="text-justify mt-3 numerique-artical">
                           C’est à l’invitation du préfet de la région d’Île-de-France et de Paris que le Président de l’IFIAG Jean Roger SIQUILINI 
                            participait à la cérémonie de remise des trophées « 1 jeune, 1 solution » le mercredi 22 septembre 2021 à l'Hôtel de Noirmoutier à Paris, en présence de la Ministre du Travail,
                            de l'Emploi et de l’Insertion, ainsi que du haut-commissaire à l’emploi et à l’engagement des entreprises dans le cadre du plan France Relance. Madame la Ministre a remis en ce
                            jour 8 trophées aux 8 entreprises membres du réseau « La France, une chance. Les entreprises s’engagent! » qui se sont affiliées pour recruter des jeunes de 16-25 ans dans des
                            secteurs comme le transport, le BTP, l’industrie, le numérique et autres.
                        </p>
                      <img  src={Ollyaimage} alt="Logo République Français" className="img-fluid numerique-image" />
                      <p className="text-justify mt-2 numerique-artical">
                          Lancé à l'été 2020 par le gouvernement, le plan « 1 jeune, 1 solution » a été mis en place pour accompagner et aider les jeunes à construire leur avenir professionnel. La plateforme
                           met en relation les entreprises et les jeunes cherchant un emploi, une formation ou une mission. Vous y trouverez des offres d’emploi, des contrats d’apprentissage ainsi que des offres
                            de stages. La plateforme propose également des possibilités d'accompagnement et de formation qualifiante ainsi que des aides auxquelles peuvent avoir droit ces jeunes. L’objectif de 
                            ce programme est de trouver une solution pour chaque jeune en construisant une société plus inclusive avec une économie durable et solidaire.
                        </p>
                      <p className="text-justify mt-2 numerique-artical">
                         Ce plan, mis en place par l’Etat en concertation avec les entreprises, prévoit plusieurs axes de développement tels que orienter et former des jeunes vers les secteurs et les métiers
                        d’avenir comme le numérique où l’IFIAG aura un rôle important à jouer.
                        </p>
                      <p className="text-justify mt-2 numerique-artical">
                       Membre du réseau « La France, une chance. Les entreprises s’engagent! » l’IFIAG apporte son soutien à cette campagne initiée par le Ministère du Travail, de l’Emploi et de l’Insertion.
                        L’objectif de l’IFIAG est d’encourager, former et accompagner les porteurs de projets liés au numérique et à l’Intelligence Artificielle en leur proposant des solutions d’accompagnement 
                        à chaque étape de leur développement.
                        </p>
                      <p className="text-justify mt-2 numerique-artical">
                            Conscient de l’importance de l’impact du numérique dans notre vie, l'IFIAG fait donc de l'inclusion numérique un levier de développement économique et social, en proposant des formations
                             d’initiation pour ceux qui en sont totalement éloignés, et pour ceux déjà qualifiés l’IFIAG propose des formations de montée en compétences ou d’orientation professionnelle.
                        </p>
                      <p className="text-justify mt-2 numerique-artical">
                       Concernant les entreprises, l’IFIAG met à leur disposition des outils intégrant l’Intelligence Artificielle pour aider à leur développement de même qu’il soutient les initiatives des jeunes
                        talents dans le domaine numérique et de la data afin de transformer le potentiel intellectuel en succès de notre pays.
                        </p>
                      <p className="text-justify mt-2 numerique-artical">
                       Dans le cadre du programme France Relance l’Etat souhaite fédérer entreprises et partenaires de tous les horizons pour s’entraider et intégrer un potentiel commun où chaque entreprise peut
                        proposer toutes actions innovantes afin de pouvoir construire une société plus durable et solidaire et se remettre de la crise de la Covid-19 d’ici 2030.
                        </p>
                      <p className="text-justify mt-2 numerique-artical">
                            La France a tous les atouts pour réussir et avoir sa place parmi les leaders du secteur numérique en Europe et dans le monde. Et pour cela l’IFIAG apporte sa contribution et son aide
                             aux entreprises en offrant les outils et les supports s’appuyant sur l’Intelligence Artificielle pour leur permettre de mieux réussir leur transition numérique. Le but est d’appliquer 
                             tout le potentiel que permettent l’Intelligence Artificielle et la Génétique en les mettant au service de notre économie et de la société française.
                        </p>
                     
                         
                </div>

                <div className="col-12 col-lg-3 mt-5">  
                        <Portrait />
                    </div>   
             </div>
        </div>
    )
}

export default ArticleOLlya;


