import React from 'react';
import './nosFormation.css';
// import { Link } from 'react-router-dom';

import Portrait from '../../Components/portrait/Portrait';
import DeepLearning from '../../Assets/images/Deep-learning.jpg';


const Transhumanisme = () => {
    return (
         <div className="container">

             <div className="row justify-content-center ">
                <div className="col-12 col-lg-9 mt-5">
                    <div className=" col-12">
                            <img src={DeepLearning} alt="formation*date" className="img-fluid mb-3 mr-5 formation-img " /> 
                        </div>
                   <h1 className="sub-heading-text">Transhumanisme : l’être humain peut-il devenir immortel ?</h1> 
                   <p class="">Le 𝐭𝐫𝐚𝐧𝐬𝐡𝐮𝐦𝐚𝐧𝐢𝐬𝐦𝐞, c’est l’idée qui est selon les 𝐭𝐫𝐚𝐧𝐬𝐡𝐮𝐦𝐚𝐧𝐢𝐬𝐭𝐞𝐬 que l’esprit humain peut être séparé du corps, mais qui sont donc les transhumanistes ?
                                𝐋𝐞𝒔 𝐭𝐫𝐚𝐧𝐬𝐡𝐮𝐦𝐚𝐧𝐢𝐬𝐭𝐞𝐬 portent 𝐮𝐧 𝐦𝐨𝐮𝐯𝐞𝐦𝐞𝐧𝐭 𝐜𝐮𝐥𝐭𝐮𝐫𝐞𝐥 𝐞𝐭 𝐢𝐧𝐭𝐞𝐥𝐥𝐞𝐜𝐭𝐮𝐞𝐥 𝐢𝐧𝐭𝐞𝐫𝐧𝐚𝐭𝐢𝐨𝐧𝐚𝐥 𝐩𝐫ô𝐧𝐚𝐧𝐭 𝐥’𝐮𝐬𝐚𝐠𝐞 𝐝𝐞𝐬 𝐬𝐜𝐢𝐞𝐧𝐜𝐞𝐬 𝐞𝐭 𝐝𝐞𝐬 𝐭𝐞𝐜𝐡𝐧𝐢𝐪𝐮𝐞𝐬 𝐚𝐟𝐢𝐧 𝐝’𝐚𝐦é𝐥𝐢𝐨𝐫𝐞𝐫 𝐥𝐚 𝐜𝐨𝐧𝐝𝐢𝐭𝐢𝐨𝐧 𝐡𝐮𝐦𝐚𝐢𝐧𝐞 𝐧𝐨𝐭𝐚𝐦𝐦𝐞𝐧𝐭 𝐩𝐚𝐫 𝐥’𝐚𝐮𝐠𝐦𝐞𝐧𝐭𝐚𝐭𝐢𝐨𝐧 𝐝𝐞𝐬 𝐜𝐚𝐩𝐚𝐜𝐢𝐭é𝐬 𝐩𝐡𝐲𝐬𝐢𝐪𝐮𝐞𝐬 𝐞𝐭 𝐦𝐞𝐧𝐭𝐚𝐥𝐞𝐬 𝐝𝐞𝐬 ê𝐭𝐫𝐞𝐬 𝐡𝐮𝐦𝐚𝐢𝐧𝐬. (Wikipédia)</p> 
                   
                   <p class="">Alexandre Maurer dit qu’il y a très très longtemps un homme des cavernes a ramassé un bâton qui traînait par terre, avec ce bâton il pouvait frapper plus fort et plus loin, il allait ainsi sans le savoir devenir le premier humain augmenté de l’histoire.</p> 
                   
                   <p class="">Et depuis ce jour nous n’avons cessé d’inventer nous dit-il de nouvelles prothèses, des prothèses de jambes pour nous déplacer beaucoup plus vite, des prothèses de mémoire pour stocker une quantité d’information quasi illimitée, des prothèses d’yeux pour permettre aux personnes ayant une déficience visuelle de mieux voir (thèse réfutée entre autre par Fabrice Hadjadj, écrivain et philosophe français, directeur de l’Institut Philanthropos) et également des prothèses de voix qu’on appelle généralement « micro », sans oublier cette prothèse incroyable avec lequel la voix porte jusqu’à l’autre bout du monde et qui est bien entendu le téléphone.</p> 
                   
                   <p class="">Mais cependant tout ceci appartient déjà au passé et que nous réserve l’avenir si nous continuons à nous augmenter ? Cela nous amène à ce que l’on appelle le transhumanisme qui est l’idée que nous pouvons dépasser nos limitations biologiques avec la technologie.</p> 
                   <p class="">Est-ce une bonne ou une mauvaise chose, les avis sont bien entendu partagés.

Pour les partisans de l’immortalité, un des principaux aspects du transhumanisme est de vivre beaucoup plus longtemps, pas d’être vieux plus longtemps bien évidemment, l’idée c’est de ralentir le vieillissement, ou de le stopper et pourquoi pas même l’inverser afin de rester le plus longtemps possible en pleine forme et en pleine possession de nos moyens.</p> 
                   <p class="">Pour certains le transhumanisme c’est la quête de l’Homme parfait!

L’Homme réinvente sans cesse ce qu’il est par la technologie, et avec le type d’humain que nous sommes entrain de fabriquer, quel sera dans un futur pas si lointain notre rapport au monde, notre rapport aux autres, et surtout notre rapport à nous-mêmes ?</p>      
                </div>
                
                <div className="col-12 col-lg-3 mt-5">  
                        <Portrait />
                    </div>   
             </div>
        </div>
    )
}

export default Transhumanisme