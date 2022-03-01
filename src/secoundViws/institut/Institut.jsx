import React from 'react';
import './institut.css';
import Portrait from '../../Components/portrait/Portrait';

const Institut = () => {
    return (
      
         <div className="container">

             <div className="row justify-content-center ">
                <div className="col-12 col-lg-9 mt-5 text-justify margin-mobile">
                      <h1 className="sub-heading-text mb-4">Institut français de l’Intelligence Artificielle et de la Génétique «IFIAG»
                        </h1> 
                        <p>L’IFIAG ambitionne de positionner l’intelligence artificielle et la génétique comme secteurs d’avenir
                            de l’activité économique française auprès des politiques, des médias, des industriels et des
                            entrepreneurs</p> 
                        <p>L’engagement de l’IFIAG se compose de 3 points clés :</p> 
                        <p className='artical-obj'>1- Découvrir !</p>
                        <p>Les pépites entrepreneuriales dans ces domaines, les conseillant dans chaque étape de
                            développement. Où qu’elles se trouvent, la création et l’ambition peuvent recevoir le soutien de
                            l’IFIAG. Contactez-nous !
                        </p>
                        <p className='artical-obj'>2- Encourager !</p>
                        <p>Par une présence dans les médias et auprès des institutions, faisant la promotion de la nécessité
                            d’une vision de l’avenir et sa réponse entrepreneuriale. L’IFIAG participe à de nombreux
                            évènements et organise des rencontres avec les entrepreneurs.
                            Depuis Paris, en passant par l’ensemble de la France hexagonale, et jusqu’aux Outre-mer, l’IFIAG
                            est présent pour vous dire « OSEZ ENTREPRENDRE ! ».
                        </p>
                        <p className='artical-obj'>3- Accompagner !</p>
                        <p>L’IFIAG propose son label pour faciliter le financement de la recherche et le développement des
                            entreprises par subvention, prêt à taux zéro et avance récupérable.
                            En labellisant les entreprises selon des critères d’innovation des services ou des produits dans ces
                            domaines. L’IFIAG, en intervenant dès la phase de création, permet à l’entreprise d’afficher une
                            garantie de qualité reconnue aux yeux du grand public mais également auprès des décideurs
                            politiques ainsi qu’auprès de nos partenaires privés.<br/>


                           <br/> L’IFIAG organise les levées de fonds des entreprises labellisées par crowfunding classique de don,
                            prêt et investissement, mais également pour les entreprises s’inscrivant dans la technologie
                            blockchain les Initial Public Offering et Initial Coin Offering.
                        </p>
                    </div>
                
                <div className="col-12 col-lg-3 mt-5">  
                        <Portrait />
                    </div>   
             </div>
        </div>   
               
        
    )
}

export default Institut;
