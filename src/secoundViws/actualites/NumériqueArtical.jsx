import React from 'react';
import './actualites.css';
import Portrait from '../../Components/portrait/Portrait';
import ALLAMELLOU from '../../Assets/images/ALLAMELLOU.jpg'

const NumériqueArtical = () => {
    return (
        <div className="container">

             <div className="row justify-content-center ">
                <div className="col-12 col-lg-9 mt-4 ">
                      <h2 className="sub-heading-text mt-4">
                        Écologie digitale : l’impact du Numérique sur l’environnement
                      </h2>  
                      <p className="text-justify mt-3 numerique-artical">
                            L’actualité nous oblige à regarder le monde qui nous entoure à travers de nouveaux prismes. Face à la pandémie, le numérique apparaît comme notre bouée de sauvetage, entre consommation de contenus en streaming, backtracking (identification d’utilisateurs de smartphones ayant eu contact avec une personne infectée), explosion du télétravail avec son corollaire la visio-conférence (Zoom, Skype, Teams…) il donne l’illusion que l’Homme pourrait se passer de vie sociale. On en viendrait presqu’à oublier l’empreinte carbone liée au fonctionnement d’internet, à la fabrication des appareils qui se multiplient dans de nombreux foyers et au besoin, sans cesse croissant, de stockage de la donnée.<br/>
                        </p> 
                            <img  src={ALLAMELLOU} alt="Logo République Français" className="img-fluid numerique-image" />
                        <p className='text-justify'>   
                            <br/>La donnée est clairement devenue l’or du 21ème siècle. Cette assertion s’impose à nous car celui qui aujourd’hui détient la donnée et a en plus la capacité de l’analyser et de l’exploiter possède un avantage concurrentiel certain. On estime le marché de la donnée à 67 milliards d’euros à l’horizon 2021.
                            <br/><samp className='artical-question'>Notre « chère » donnée</samp>
                           <br/> Mais, la donnée ne se suffit pas à elle-même. Elle est la matière première indispensable au développement soutenu de l’intelligence artificielle, de la block Chain, de la smart city, des modèles prévisionnels de propagation d’une épidémie…<br/>

                            <br/>Les chiffres parlent d’eux-mêmes et sont vertigineux : d’après l’IDC (International Data Corporation) le volume de données sera multiplié par 5 entre 2018 et 2025 pour atteindre 175 Zo (Zettaoctets) soit 175 milliards de To (Téraoctet) !<br/>
                            <br/>La circulation de la donnée va aller en s’amplifiant avec l’arrivée de la 5G, des crypto monnaies, de l’IoT (internet of things) ou internet des objets en français. Tout en sachant que seule la moitié de la population mondiale est connectée à internet (un peu plus de 4 milliards de personnes).<br/>

                            <br/>D’ici 2022, 75% des bases de données seront migrées sur le Cloud. La plupart des applications sont accessibles en mode SaaS (Software as a Service) sur le Cloud ou d’abord sur le cloud avant d’être proposées on premise.<br/>

                            <br/>Toutes ces données sont aujourd’hui stockées dans des Datacenters, fonctionnant 24h/24, 7J/7 dont la température doit être maintenue à un niveau acceptable pour éviter la surchauffe. L’émission de CO2 n’est donc pas neutre. Le comportement au quotidien des consommateurs n’est pas non plus sans impact. En particulier le nombre considérable de vidéos regardés au quotidien sur les différents supports et en particulier les téléphones portables. Le streaming représente aujourd’hui 60% des flux de données sur internet. Des plateformes telles que Netflix ont été contraintes durant le confinement de réduire la qualité des films pour permettre aux réseaux de supporter, entre autres la montée en charge du télétravail.<br/>

                            <br/>L’Ademe dans son guide pratique « la face cachée du numérique » nous fait un état des lieux de l’impact du numérique mais donne aussi quelques pistes pour continuer à profiter pleinement de ce que nous offre le numérique en ayant des comportements éco-responsables.<br/>
                           <samp className='artical-question'>pour la maîtrise de notre consommation énergétique</samp>

                            <br/>Les entreprises ne sont pas en reste et proposent, elles aussi, des solutions pour réduire l’impact du numérique sur la planète. Elles ont compris que, bien utilisé, le numérique peut accompagner la nécessaire transition énergétique. On peut citer le smart grid qui permet d’optimiser la production, la distribution et la consommation d’électricité. D’autres initiatives existent telles que celle proposée par la startup Ubigreen qui avec la présence de capteurs est capables de détecter en temps réel les déperditions énergétiques. Dans les solutions d’Ubigreen, la possibilité de piloter la performance énergétique de sites à distance, ou d’analyser le taux d’occupation des bureaux. Là encore, la collecte et le stockage de données sont au coeur du processus d’Ubigreen.<br/>

                            <br/>Le radiateur intelligent Lancey de la startup française, Lancey Energy Storage, s’appuie également sur la collecte de donnée. Il communique avec le compteur Linky mais est également capable de se connecter au Wifi. L’avantage de ce radiateur c’est qu’il embarque une batterie permettant de lisser la demande lors des pics de consommation. Autre avantage, les vieilles batteries de vélos peuvent faire l’affaire.<br/>

                            <br/>D’autres entreprises travaillent aussi à la conception de terminaux (smartphones, desktop…) plus respectueux de l’environnement. L’exemple de la firme néerlandaise Fairphone fondée en 2013 en est une bonne illustration. Elle propose des téléphones « responsables ». Leur fabrication respecte les conditions de travail des personnes qui les fabriquent et un approvisionnement responsable en matériaux.<br/>

                            <br/>La startup française Commown propose à la location des téléphones ou des PC. Les appareils doivent afficher de bonnes qualités d’écoconception et de durabilité. Commown garantit également la gestion du cycle de vie de l’appareil de sa conception à son recyclage.<br/>

                            <br/>Certaines initiatives faisant appel à la contribution des utilisateurs sont aussi à mettre en exergue. On les retrouvent dans le guide de l’Ademe : la face cachée du numérique
                            <br/><samp className='artical-question'>quelques idées pour le stockage de la donnée</samp>
                            <br/>De nombreuses réflexions sont menées et des projets mis en œuvre pour réduire le bilan carbone des datacenters, lieux d’hébergement de la précieuse donnée<br/>

                            <br/>– Privilégier les régions froides pour l’installation des datacenters, ou encore immerger des Datacenters. Le projet Natik de Microsoft dispose d’un Datacenters immergé dans les fonds marins des iles Orcades au Nord de l’Écosse.

                            Immerger les datacenters, présenteraient, si l’expérience s’avèrent positive, un intérêt majeur. Plus de la moitié de la population mondiale vit à proximité des côtes. La donnée aurait donc des distances plus courtes à parcourir. La navigation WEB, la vidéo en streaming seraient par conséquent plus fluide.<br/>
                            <br/>– En 2014, Google est parvenu à réduire la consommation de ses datacenters de 50% grâce à un contrôle de la température et à un éclairage intelligent.<br/>
                            <br/>– En France des bailleurs sociaux tels que Paris habitat signent des partenariats avec des datacenters pour chauffer leurs logements grâce à la chaleur récupérée<br/>
                            <br/>– Autre solution proposée par Facebook, limiter le nombre de serveur fonctionnant en simultané grâce à son système Autoscale<br/>

                            <br/>Ce sont toutes ces mesures qui nous permettront de ne pas atteindre les prévisions les plus pessimistes. D’ici 2025, le numérique devrait produire 3 fois plus de CO2 que l’avion et autant que le transport routier.<br/>
                       
                        </p>
                         
                </div>

                <div className="col-12 col-lg-3 mt-5">  
                        <Portrait />
                    </div>   
             </div>
        </div>
    )
}

export default NumériqueArtical;
