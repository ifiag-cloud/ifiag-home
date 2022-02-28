import React from 'react';
import './digimobile.css';
import Portrait from '../../Components/portrait/Portrait';
import Captur from '../../Assets/images/Captur.png';



const DigiMobile = () => {
    return (
        <div className="container">

             <div className="row justify-content-center ">
                <div className="col-12 col-lg-9 mt-5 margin-mobile">
                   <p>La DIGI’MOBILE est un projet social collaboratif à visée éducative pour lutter contre la carence des compétences en milieu urbain.</p>    
                   <p>Le numérique est la compétence clé pour aujourd’hui et l’avenir, c’est un véritable enjeu de société.</p>    
                   <p>Le numérique est devenu essentiel au socle de connaissances indispensables pour être attractif sur le marché de l’emploi et pour évoluer dans sa vie quotidienne.</p>    
                   <p>Le numérique est devenu essentiel au socle de connaissances indispensables pour être attractif sur le marché de l’emploi et pour évoluer dans sa vie quotidienne.</p>    
                   <p className='artical-obj'>1- Les besoins en terme d’éducation sont différents d’une zone à une autre et évoluent dans le temps.</p>    
                   <p className='artical-obj'>2- La méthodologie classique d’apprentissage n’est pas adaptée aux particularités individuelles.</p>    
                   <p className='artical-obj'>3- L’aménagement de locaux est long et coûteux.</p>    
                   <p>L’utilisation d’une ou plusieurs DIGI’MOBILE permet d’apporter une réponse rapide et plus économique.</p>    
                       <div className='col-10 '>
                           <img src={Captur} class="img-fluid" alt="..."></img>
                       </div>
                        
                        
                   <p className='mt-3'>La DIGI’MOBILE solutionne ces problématiques par une nouvelle méthodologie :</p>    
                   <p className='artical-obj'>– Évolutive</p>    
                   <p className='artical-obj'>– Modulable</p>    
                   <p className='artical-obj'>– Rapide</p>    
                   <p className='artical-obj'>– Économique</p>    
                   <p className='artical-obj'>– Mobile</p>   
                   <p>L’intervention Digi’Mobile cible :</p>   
                   <p className='artical-obj'>– Les personnes isolées ou en difficulté. – Le milieu urbain dit « populaire ».</p>   
                   <p className='artical-obj'>– Les « déserts » ruraux</p>   
                   <p className='artical-obj'>– Les Outre-mer.</p>  
                   <p>La première application concrète est la Fablab Mobile, afin d’initier et intéresser le « public cible » de façon ludique aux enjeux pédagogiques.</p> 
                   <p>Ce laboratoire de fabrication participatif mobile se présente dans un camion équipé de matériel Hightech notamment informatique, d’imprimantes 3D, tablettes tactiles, ordinateurs et autres.</p> 
                   <p></p> 
                </div>
                
                <div className="col-12 col-lg-3 mt-5">  
                        <Portrait />
                        <div className="col-12">
                            <div className="ratio ratio-16x9">
                                <iframe src="https://www.youtube.com/embed/uaCn0hjT7Lc" title="La DIGI’MOBILE de L’IF" frameborder="1" allow="fullscreen" className="video02"></iframe>
                            </div>
                        </div>
                    </div>   
             </div>
        </div>
    )
}

export default DigiMobile;
