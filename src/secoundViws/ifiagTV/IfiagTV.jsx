import React from 'react';
import './ifiagTV.css';
// import { Link } from 'react-router-dom';
import Portrait from '../../Components/portrait/Portrait';

const IfiagTV = () => {
    return (
     <div className="container">

             <div className="row justify-content-center ">
                <div className="col-12 col-lg-9 mt-5">
                    <div className='col-11 bg-light '>

                        <div className="ratio ratio-16x9 m-0 ">
                                        <iframe src="https://www.youtube.com/embed/7VUN808QsGw" title="La DIGI’MOBILE de L’IF" frameborder="1" allow="fullscreen" className="tv-video"></iframe>
                                    </div> 
                                    <p className='head-text'>La DIGI’MOBILE de L’IFIAG à Aubervilliers 93</p>
                                    <p className='tv-text'>L'équipe de l’institut Français de l’intelligence Artificielle et de la Génétique (IFIAG) sur le terrain à Aubervilliers avec à sa tête son Président Jean Roger SIQUILINI à la rencontre des personnes afin de mieux les informer et de répondre à leurs différentes questions liées au Numérique.</p>  
                                    <p className='tv-text'>
                                        Conscient de l’importance du Numérique dans nos vies, l'IFIAG fait de l'inclusion Numérique un levier de développement économique et social pour tous, en étant sur le terrain, avec son projet phare la DIGI’MOBILE (l'automobile digitale), de manière à sensibiliser et à prendre contact avec ce public éloigné du Numérique ; et qui, bien entendu, ne peut être rencontré sur Internet. De cette façon, nous pourrons leur permettre également d'accéder à cette inclusion Numérique.</p>     
                            </div>
                     <div className='col-11  bg-light mt-5'>

                        <div className="ratio ratio-16x9 m-0 ">
                                <iframe src="https://www.youtube.com/embed/uaCn0hjT7Lc" title="La DIGI’MOBILE de L’IF" frameborder="1" allow="fullscreen" className="tv-video"></iframe>
                            </div> 
                            <p className='head-text'>La DIGI’MOBILE de L’IFIAG à Aubervilliers 93</p>
                            <p className='tv-text'>L'équipe de l’institut Français de l’intelligence Artificielle et de la Génétique (IFIAG) sur le terrain à Aubervilliers avec à sa tête son Président Jean Roger SIQUILINI à la rencontre des personnes afin de mieux les informer et de répondre à leurs différentes questions liées au Numérique.</p>  
                            <p className='tv-text'>
                                Conscient de l’importance du Numérique dans nos vies, l'IFIAG fait de l'inclusion Numérique un levier de développement économique et social pour tous, en étant sur le terrain, avec son projet phare la DIGI’MOBILE (l'automobile digitale), de manière à sensibiliser et à prendre contact avec ce public éloigné du Numérique ; et qui, bien entendu, ne peut être rencontré sur Internet. De cette façon, nous pourrons leur permettre également d'accéder à cette inclusion Numérique.</p>     
                     </div>
                </div>
                
                <div className="col-12 col-lg-3 mt-5">  
                        <Portrait />
                    </div>   
             </div>
        </div>
    )
}

export default IfiagTV