import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="container-fluid footer">
            <div className="pt-4 pb-2 text-center ">
                <p>Institut Français de l'Intelligence Artificielle et de la Génétique - IFIAG </p>
                <p>88, avenue des Ternes 75017 PARIS - Tél 01 41 34 38 25 - Site www.ifiag.org </p>
                <p>Numéro d'activité: 11756431275 (Préfecture de Police Paris et Île-de-France) </p>
                <p>SIREN 884 158 072 - RNA W751253501 - APE 8559B </p>
                {/* <p>Copyright @ IFIAG &nbsp; {new Date().getFullYear()} </p> */}
            </div>
        </div>
        </footer>
    )
}

export default Footer
