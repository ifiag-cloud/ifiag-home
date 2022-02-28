import React from 'react';
import './actualites.css';
import Portrait from '../../Components/portrait/Portrait';
import IfiagInstitut from '../../Assets/images/IFIAG-Institut.jpg'


const ArticlePasteur = () => {
    return (
        <div className="container">

             <div className="row justify-content-center ">
                <div className="col-12 col-lg-9 mt-5 margin-mobile">
                      <h2 className="sub-heading-text ">
                        
                           L’IFIAG assistait à la table ronde organisée à l’Institut de Pasteur le 30 novembre 2021 sur le thème: les enjeux de l’industrie de la santé révélés pendant la crise sanitaire liée à la Covid-19 en France.
                      </h2>  
                      <p className="text-justify mt-3 numerique-artical">
                         
                          Plusieurs experts en recherche scientifique et du domaine de la santé se sont réunis le mardi 30 Novembre
                          au sein de l’Institut Pasteur pour mettre en avant les enjeux de la recherche scientifique et de
                          l’innovation en France. 


                        </p>
                      <img  src={IfiagInstitut} alt="Logo République Français" className="img-fluid numerique-image" />
                      <p className="text-justify mt-2 numerique-artical">
                         La discussion sur le thème: « Investir dans la recherche : un enjeu d'anticipation, de relance et de 
                         souveraineté » a été abordée par le directeur général de l'Institut Pasteur et d’autres intervenants, 
                         notamment la présidente du Conseil d'administration de MSDAVENIR, la filiale française du laboratoire 
                         pharmaceutique américain Merck & Co.
                        </p>
                      <p className="text-justify mt-2 numerique-artical">
                        Le président-directeur général du CNRS (Centre national de la recherche scientifique) a introduit la 
                        table ronde suivie de l’intervention de  nombreux professionnels du domaine de la recherche. Parmi eux, 
                        des députés, des professionnels du domaine de la santé, dont la vice-présidente du Board de la Mission 
                        Cancer d'Horizon Europe.
                        </p>
                      <p className="text-justify mt-2 numerique-artical">
                        Le Président de l’IFIAG Jean Roger SIQUILINI dont la mission est de promouvoir l’Intelligence Artificielle 
                        et la Génétique comme secteurs d'activité en France Hexagonale, dans les Outre-Mer et à l’étranger, était 
                        invité à cette table ronde. L’objectif de l’IFIAG est de trouver des solutions qui répondent aux plus 
                        hautes exigences de sécurité du patrimoine numérique médical et permettent de gagner en souveraineté 
                        digitale. 
                        </p>
                      <p className="text-justify mt-2 numerique-artical">
                          La France dispose d’atouts considérables en matière de recherche en santé. Cependant la crise sanitaire
                          a révélé certaines problématiques actuelles de l’industrie de la santé. Nous avons assisté à cette réunion
                          pour pouvoir comprendre les défis actuels.
                        </p>
                      <p className="text-justify mt-2 numerique-artical">
                          Il a été mis en avant lors des différentes tables rondes que l’une des difficultés en France, est 
                          le manque de cohésion : « Par exemple, le modèle américain est très fédéré, là où les gens peuvent 
                          réussir. En France nous devons défragmenter et aller au-delà des petits conflits entre des institutions
                           s’il y a un but commun, mais cela semble être encore compliqué. »
                        </p>
                      <p className="text-justify mt-2 numerique-artical">
                          Selon le directeur adjoint de l’ANRS: «  Cette épidémie a déclenché certaines choses et nous a obligé à prendre
                          des décisions, comme la création le 1er janvier 2021 de notre nouvelle agence en maladies infectieuses émergentes 
                          qui a permis d’avoir une communauté qui réagit. Cette nouvelle agence finance, coordonne et anime la recherche sur 
                          le VIH/sida, les hépatites virales, la tuberculose et les maladies émergentes comme la Covid-19 et d’autres dans 
                          toutes les disciplines  dont la recherche fondamentale, la clinique, la santé publique, l’épidémiologie et l’innovation. 
                          L’idée est de pouvoir anticiper mieux les infections pour éviter les crises sanitaires. Face à l’épidémie, 
                          l’approche thérapeutique en France a connu un échec. Les recherches ont besoin de temps et pour cela 
                          il faut anticiper. »
                        </p>
                      <p className="text-justify mt-2 numerique-artical">
                          Comme le confirmait un député du Gard : « Le succès de notre pays ne peut venir que de l’innovation 
                          et de la recherche en amont. Le point fort de notre recherche c’est d’être fonction publique mais 
                          c’est aussi peut être son point faible. La coopération entre les laboratoires de recherche académiques
                          et les entreprises privées peut accélérer la recherche et permettre la possibilité d’avancer de 
                          manière pérenne. Il faut voir comment permettre cette aisance et coopération entre public et privé. »
                        </p>
                      <p className="text-justify mt-2 numerique-artical">
                          « Nous sommes bien en avance dans certains domaines de recherches, notamment dans le domaine des cancers 
                          néanmoins le financement dans la recherche reste un défi sociétal » , approuve la Vice-présidente du 
                          Board de la Mission Cancer d'Horizon Europe. Elle souligne l’importance de mettre en place de 
                          nouveaux moyens d’organiser la recherche et de financer la recherche et les innovations. 
                          « Il faudra revaloriser le salaire et le temps passé à l’innovation des hommes et des femmes. 
                          Cela pourra répondre absolument à ce défi social qui est la crise sanitaire. C’est la même chose 
                          pour le cancer et les autres domaines de recherches qui sont importants. D’où l’importance de la 
                          cohésion de différents types de financement. »
                        </p>
                      <p className="text-justify mt-2 numerique-artical">
                          L’un des lauréats du Prix des Innovateurs en santé et néphrologue connu pour ses découvertes dans 
                          le domaine de la transplantation et notamment sur le sujet du rejet de greffe, a affirmé l’importance 
                          d’investir dans la Data et donner plus de priorité à ce domaine pour gagner en souveraineté:  « Nous 
                          constatons la fuite des cerveaux et en particulier dans le domaine de data-science puisque les grilles 
                          de salaire évoquées sont à 10 fois plus hautes dans d’autres institutions. 
                        </p>
                      <p className="text-justify mt-2 numerique-artical">
                         L’objectif est de rester attractif, pour non seulement retenir les personnes talentueuses, mais pouvoir 
                         aussi attirer d’autres talents et faire revenir les chercheurs français sur notre territoire. Par exemple, 
                         le financement de MSDAVENIR, le fonds de soutien à la recherche en France, nous a permis de gagner en 
                         souplesse, en compétitivité et aussi d’avoir accéléré de façon exponentielle notre recherche et devenir 
                         connu. Pour pouvoir avancer plus vite il faut aller sur des partenariats publics-privés transparents, et 
                         en particulier, dans le domaine de la data-science. Prioriser ce domaine nous permettra de gagner en 
                         souveraineté. La data ce n’est pas quelque chose à la mode mais c’est un dénominateur commun de toute 
                         la recherche même à commencer par la recherche fondamentale. Il faut garder le patriotisme et favoriser 
                         les start-ups en France en allant sur les partenariats public-privés beaucoup plus en amont. »


                        </p>
                      <p className="text-justify mt-2 numerique-artical">
                        Le but de l’IFIAG comme susdit est d’encourager et de soutenir les start-up françaises en France Hexagonale, 
                        Outre-Mer et à l’étranger, les orienter vers la data science et mettre en avant les métiers de chercheurs, 
                        de spécialistes de l’IA et stimuler la recherche en génétique. La France a un grand potentiel pour gagner 
                        en souveraineté digitale et rebondir après la crise de la Covid pour continuer à garder sa place parmi 
                        les leaders mondiaux de l’industrie de la santé et de la recherche scientifique.
                        </p>
                      <p className="text-justify mt-2 numerique-artical">

                        </p>
                      <p className="text-justify mt-2 numerique-artical">

                        </p>
                     
                         
                </div>

                <div className="col-12 col-lg-3 mt-5">  
                        <Portrait />
                    </div>   
             </div>
        </div>
    )
}

export default ArticlePasteur ;


