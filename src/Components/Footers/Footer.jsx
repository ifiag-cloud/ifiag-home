import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
         <footer>
            <div className="container-fluid footer">
            <div className="pt-4 pb-2 text-center ">
                <p>Institut Français de l'Intelligence Artificielle et de la Génétique - IFIAG </p>
                <p>88, avenue des Ternes 75017 PARIS - Tél 01 41 34 38 25 -<spam className="responsive-block">Site www.ifiag.net</spam></p>
                <p>Numéro d'activité: 11756431275 <spam className="responsive-block">(Préfecture de Police Paris et Île-de-France)</spam> </p>
                <p>SIREN 884 158 072 - RNA W751253501 - APE 8559B </p>
            </div>
        </div>
        </footer>
    )
}

export default Footer
