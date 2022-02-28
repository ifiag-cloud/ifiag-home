import React,{useState, useEffect, useContext} from 'react';import { GlobalState } from '../../../GlobalState';
import axios from "axios";
import './Answer.css'

const Answer = () => {
    const state = useContext(GlobalState);
    const [token] = state.token;
    const initialValue = {
        answer1: '',
        answer2: '',
        answer3: "",
        answer4: "",
        answer5: "",
        answer6: "",
        answer7: "",
        answer8: "",
        answer9: "",
        answer10: "",
        answer11: "",
        answer12: "",
    };
    const [isAnswers, setIsAnswers] = useState(initialValue);
    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    // const onChangeInput =(e)=>{
    //     console.log('clicked me')
    //     const {name, value}=e.target;
    //     setIsAnswers({...isAnswers, [name]: value})
    //     console.log("after selected the answer :", {isAnswers})
    // };
    console.log("in",isAnswers.answer1)
    console.log("in1",isAnswers.answer2)
    console.log("in2",isAnswers.answer3)
    console.log("in3",isAnswers.answer4)
    console.log("in4",isAnswers.answer5)
    console.log("in5",isAnswers.answer6)
    console.log("in6",isAnswers.answer7)
    console.log("in7",isAnswers.answer8)
    console.log("in8",isAnswers.answer9)
    console.log("in9",isAnswers.answer10)
    console.log("in10",isAnswers.answer11)
    console.log("in11",isAnswers.answer12)
    const onChangeInput = e => {
    
        const { name, value,type,checked } = e.target;
        setIsAnswers({ ...isAnswers, [name]: type ==='checkbox'? checked: value })
        console.log(`After Changes input : ${isAnswers}`)
    };


    //post answer in user field answer for update
    const onAnswerSubmit = async (e) => {
        e.preventDefault();
        console.log("button clicked");
        setErrors(validation(isAnswers))
        try {
            const res = await axios.put('/user/user_answer', {...isAnswers}, {
                headers: {
                    Authorization: token
                }
            })
            console.log('user Answer :', res.data);
            setIsAnswers(res.data);
        } catch (err) {
            // console.log(err.res.mes)
        }
        setIsSubmit(true);
    };

    useEffect(()=>{
        console.log("Errors answer :", errors);
        if(Object.keys(errors).length === 0 &&  isSubmit) {
            console.log(`answer : ${isAnswers.answer1}`)
        }
    },[errors, isSubmit, isAnswers]);

    const validation=(values)=>{
        const errors={};

        if(!values.answer1) {
            errors.answer1 = "Answer number 1 is required"
        }
        if(!values.answer2) {
            errors.answer2 = "Answer number 2 is required"
        }
        if(!values.answer3) {
            errors.answer3 = "Answer number 3 is required"
        }
        if(!values.answer4) {
            errors.answer4 = "Answer number 4 is required"
        }
        if(!values.answer5) {
            errors.answer5 = "Answer number 5 is required"
        }
        if(!values.answer6) {
            errors.answer6 = "Answer number 6 is required"
        }
        if(!values.answer7) {
            errors.answer7 = "Answer number 7 is required"
        }
        // if(!values.answer8) {
        //     errors.answer8 = "Answer number 8 is required"
        // }
        if(!values.answer9) {
            errors.answer9 = "Answer number 9 is required"
        }
        if(!values.answer10) {
            errors.answer10 = "Answer number 10 is required"
        }
        if(!values.answer11) {
            errors.answer11 = "Answer number 11 is required"
        }
        if(!values.answer12) {
            errors.answer12 = "Answer number 12 is required"
        }
        return errors;
    };



    return (
        <div className="container">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-12 col-lg-7">
                    <h1 className="text-center question ">
                        Les questionnaires
                    </h1>
                </div>
                <div className="col-12 col-md-10 col-lg-8 card shadow rounded">
                    <div className="box-main">
                        <form onSubmit={onAnswerSubmit}>
                            <div className="form-group row">
                                <ol>
                                    <li>Je suis</li>

                                    <div className="col-12">
                                        <div className="form-check">
                                            <input 
                                            className="form-check-input" 
                                            type="radio" 
                                            name="answer1" 
                                            id="answer1Option1" 
                                            value="Un homme"
                                            onChange={onChangeInput}
                                            />
                                            <label className="form-check-label" htmlFor="answer1Option1">
                                                Un homme
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input 
                                            className="form-check-input" 
                                            type="radio" 
                                            name="answer1" 
                                            id="answer1Option2"
                                            value="Une femme"
                                            onChange={onChangeInput}
                                             />
                                            <label className="form-check-label" htmlFor="answer1Option2">
                                                Une femme
                                            </label>
                                        </div>
                                    </div>


                                    <li>J'ai</li>

                                    <div className="col-12">
                                        <div className="form-check">
                                            <input 
                                            className="form-check-input" 
                                            type="radio" 
                                            name="answer2" 
                                            id="answer2Option1"
                                            value="Moins de 18 ans"
                                            onChange={onChangeInput}
                                             />
                                            <label className="form-check-label" htmlFor="answer2Option1">
                                                Moins de 18 ans
                                            </label>
                                        </div>
                                        <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="radio" 
                                            name="answer2" 
                                            id="answer2Option2"
                                            value="Entre 18 et 35 ans"
                                            onChange={onChangeInput}
                                             />
                                            <label className="form-check-label" htmlFor="answer2Option2">
                                                Entre 18 et 35 ans
                                            </label>
                                        </div>
                                        <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="radio" 
                                            name="answer2" 
                                            id="answer2Option3"
                                            value="35 et 50 ans"
                                            onChange={onChangeInput}
                                             />
                                            <label className="form-check-label" htmlFor="answer2Option3">
                                                35 et 50 ans
                                            </label>
                                        </div>
                                        <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="radio" 
                                            name="answer2" 
                                            id="answer2Option4"
                                            value=" 50 et 65 ans"
                                            onChange={onChangeInput}
                                             />
                                             <label className="form-check-label" htmlFor="answer2Option4">
                                                50 et 65 ans
                                            </label>
                                        </div>
                                        <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="radio" 
                                            name="answer3" 
                                            id="answer2Option5"
                                            value="Plus de 65 ans"
                                            onChange={onChangeInput}
                                             />
                                            <label className="form-check-label" htmlFor="answer2Option5">
                                                Plus de 65 ans
                                            </label>
                                        </div>
                                    </div>

                                    <li>A domicile, je possède</li>

                                    <div className="col-12">
                                        <div className="form-check">
                                            <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            name="answer3" 
                                            id="answer3Option1"
                                            value="Un smartphone"
                                            onChange={onChangeInput}
                                             />                                            
                                             <label className="form-check-label" htmlFor="answer3Option1">
                                                Un smartphone
                                            </label>
                                        </div>
                                        <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            name="answer3" 
                                            id="answer3Option2"
                                            value="Une tablette"
                                            onChange={onChangeInput}
                                             />
                                             <label className="form-check-label" htmlFor="answer3Option2">
                                                Une tablette
                                            </label>
                                        </div>
                                        <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            name="answer3" 
                                            id="answer3Option3"
                                            value="Un ordinateur"
                                            onChange={onChangeInput}
                                             />
                                             <label className="form-check-label" htmlFor="answer3Option3">
                                                Un ordinateur
                                            </label>
                                        </div>
                                        <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            name="answer3" 
                                            id="answer3Option4"
                                            value=" Je n'ai pas d'équipement"
                                            onChange={onChangeInput}
                                             />
                                             <label className="form-check-label" htmlFor="answer3Option4">
                                                Je n'ai pas d'équipement
                                            </label>
                                        </div>
                                    </div>

                                    <li>Connexion à domicile</li>

                                    <div className="col-12">
                                        <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            name="answer4" 
                                            id="answer4Option1"
                                            value="J'ai un accès internet"
                                            onChange={onChangeInput}
                                             />
                                             <label className="form-check-label" htmlFor="answer4Option1">
                                                J'ai un accès internet
                                            </label>
                                        </div>
                                        <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            name="answer4" 
                                            id="answer4Option2"
                                            value="Je n'ai pas d'accès internet car je n'ai pas souscrit d'offre"
                                            onChange={onChangeInput}
                                             />
                                             <label className="form-check-label" htmlFor="answer4Option2">
                                                Je n'ai pas d'accès internet car je n'ai pas souscrit d'offre
                                            </label>
                                        </div>
                                        <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            name="answer4" 
                                            id="answer4Option3"
                                            value="Je n'ai pas d'accès internet car mon domicile ne peut pas être relié au réseau"
                                            onChange={onChangeInput}
                                             />
                                             <label className="form-check-label" htmlFor="answer4Option3">
                                                Je n'ai pas d'accès internet car mon domicile ne peut pas être relié au réseau
                                            </label>
                                        </div>
                                        <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            name="answer4" 
                                            id="flexRadioDefault1"
                                            value="Je n'ai pas d'équipement"
                                            onChange={onChangeInput}
                                             />
                                             <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                Je n'ai pas d'équipement
                                            </label>
                                        </div>
                                    </div>

                                    <li> Usages Equipement : je sais</li>

                                    <div className="col-12">
                                        <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            name="answer5" 
                                            id="flexRadioDefault1"
                                            value="Allumer et éteindre l'ordinateur/Smartphone /tablette"
                                            onChange={onChangeInput}
                                             />
                                             <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                Allumer et éteindre l'ordinateur/Smartphone /tablette
                                            </label>
                                        </div>
                                        <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            name="answer5" 
                                            id="flexRadioDefault1"
                                            value="Me servir d'un clavier et d'une souris"
                                            onChange={onChangeInput}
                                             />
                                             <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                Me servir d'un clavier et d'une souris
                                            </label>
                                        </div>
                                        <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            name="answer5" 
                                            id="flexRadioDefault1"
                                            value={isAnswers.answer5}
                                            onChange="Faire une impression scan"
                                             />
                                             <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                Faire une impression scan
                                            </label>
                                        </div>
                                        <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            name="answer5" 
                                            id="flexRadioDefault1"
                                            value="Créer, enregistrer et télécharger un document"
                                            onChange={onChangeInput}
                                             />
                                             <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                Créer, enregistrer et télécharger un document
                                            </label>
                                        </div>
                                        <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            name="answer5" 
                                            id="flexRadioDefault1"
                                            value="Utiliser une clef usb"
                                            onChange={onChangeInput}
                                             />
                                             <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                Utiliser une clef usb
                                            </label>
                                        </div>

                                        <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            name="answer5" 
                                            id="answer61"
                                            value="Je ne sais pas faire les actions precedentes"
                                            onChange={onChangeInput}
                                             />
                                             <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                Je ne sais pas faire les actions precedentes
                                            </label>
                                        </div>
                                    </div>


                                    <li>Usages internet : je sais</li>

                                    <div className="col-12">
                                        <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            name="answer6" 
                                            id="answer61"
                                            value="Faire des recherches sur internet"
                                            onChange={onChangeInput}
                                             />
                                             <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                Faire des recherches sur internet
                                            </label>
                                        </div>
                                        <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            name="answer6" 
                                            id="flexRadioDefault1"
                                            value="Utiliser les services publics en ligne (CPAM, pole Emploi...)"
                                            onChange={onChangeInput}
                                             />
                                             <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                Utiliser les services publics en ligne (CPAM, pole Emploi...)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            name="answer6" 
                                            id="flexRadioDefault1"
                                            value="Envoyer un email"
                                            onChange={onChangeInput}
                                             />
                                             <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                Envoyer un email
                                            </label>
                                        </div>
                                        <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            name="answer6" 
                                            id="flexRadioDefault1"
                                            value="Faire un achat en ligne"
                                            onChange={onChangeInput}
                                             />
                                             <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                Faire un achat en ligne
                                            </label>
                                        </div>
                                        <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            name="answer6" 
                                            id="flexRadioDefault1"
                                            value="Suivre mes comptes bancaires en ligne"
                                            onChange={onChangeInput}
                                             />
                                             <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                Suivre mes comptes bancaires en ligne
                                            </label>
                                        </div>

                                        <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            name="answer7" 
                                            id="flexRadioDefault1"
                                            value="Je ne sais pas faire les actions precedentes"
                                            onChange={onChangeInput}
                                             />
                                             <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                Je ne sais pas faire les actions precedentes
                                            </label>
                                        </div>
                                    </div>


                                    <li>Quand vous utilisez un outil numerique, le faites-vous</li>

                                    <div className="col-12">
                                        <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            name="answer7" 
                                            id="flexRadioDefault1"
                                            value="Seul de façon autonome"
                                            onChange={onChangeInput}
                                             />
                                             <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                Seul de façon autonome
                                            </label>
                                        </div>
                                        <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            name="answer7" 
                                            id="flexRadioDefault1"
                                            value={isAnswers.answer7}
                                            onChange="Accompagné (enfants, conjoints, amis, associations, aidants ...)"
                                             />
                                             <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                Accompagné (enfants, conjoints, amis, associations, aidants ...)
                                            </label>
                                        </div>

                                    </div>


                                    <li>Qu'aimeriez-vous faire sur internet et que vous ne savez pas faire aujourd'hui ?</li>

                                    <div className="col-12">
                                        <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            name="nswer7" 
                                            id="flexRadioDefault1"
                                            value="(champs libre)"
                                            onChange={onChangeInput}
                                             />
                                             <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                (champs libre)
                                            </label>
                                        </div>
                                    </div>



                                    <li>Parmi les éléments suivants, quel est celui qui vous paraît être aujourd'hui le principal frein  à  l'utilisation d'internet ?.</li>

                                    <div className="col-12">
                                        <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            name="answer9" 
                                            id="flexRadioDefault1"
                                            value="Trop compliqué à utiliser"
                                            onChange={onChangeInput}
                                             />
                                             <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                Trop compliqué à utiliser
                                            </label>
                                        </div>
                                        <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            name="answer9" 
                                            id="flexRadioDefault1"
                                            value="La qualité de service-le temps de reponse, les interruptions-n'est pas satisfaisante"
                                            onChange={onChangeInput}
                                             />
                                             <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                La qualité de service-le temps de reponse, les interruptions-n'est pas satisfaisante
                                            </label>
                                        </div>
                                        <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            name="answer9" 
                                            id="flexRadioDefault1"
                                            value="Les données personnelles ne sont pas suffisamment protégées sur internet"
                                            onChange={onChangeInput}
                                             />
                                             <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                Les données personnelles ne sont pas suffisamment protégées sur internet
                                            </label>
                                        </div>
                                        <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            name="answer9" 
                                            id="flexRadioDefault1"
                                            value="Cela revient trop cher"
                                            onChange={onChangeInput}
                                             />
                                             <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                Cela revient trop cher
                                            </label>
                                        </div>
                                        <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            name="answer9" 
                                            id="flexRadioDefault1"
                                            value="Internet n'est pas utile pour la vie quotidienne"
                                            onChange={onChangeInput}
                                             />
                                             <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                Internet n'est pas utile pour la vie quotidienne
                                            </label>
                                        </div>

                                        <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            name="answer9" 
                                            id="flexRadioDefault1"
                                            value="Le service après vente et l'assistance ne sont pas satisfaisants"
                                            onChange={onChangeInput}
                                             />
                                             <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                Le service après vente et l'assistance ne sont pas satisfaisants
                                            </label>
                                        </div>
                                    </div>


                                    <li>Aujourd'hui, lorsque vous devez accomplir vos démarches en ligne, êtes-vous plutôt </li>

                                    <div className="col-12">
                                        <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            name="flexRadioDefault" 
                                            id="flexRadioDefault1"
                                            value={isAnswers.answer10}
                                            onChange={onChangeInput}
                                             />
                                             <label className="form-check-label" htmlFor="flexRadioDefault1">
                                            Très inquiet
                                            </label>
                                        </div>
                                        <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            name="answer10" 
                                            id="flexRadioDefault1"
                                            value="Assez inquiet"
                                            onChange={onChangeInput}
                                             />
                                             <label className="form-check-label" htmlFor="flexRadioDefault2">
                                            Assez inquiet
                                            </label>
                                        </div>
                                        <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            name="answer10" 
                                            id="flexRadioDefault1"
                                            value="Peu inquiet"
                                            onChange={onChangeInput}
                                             />
                                             <label className="form-check-label" htmlFor="flexRadioDefault1">
                                            Peu inquiet
                                            </label>
                                        </div>
                                        <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            name="answer10" 
                                            id="flexRadioDefault1"
                                            value="Pas du tout inquiet"
                                            onChange={onChangeInput}
                                             />
                                             <label className="form-check-label" htmlFor="flexRadioDefault2">
                                            Pas du tout inquiet
                                            </label>
                                        </div>
                                        <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            name="answer10" 
                                            id="flexRadioDefault1"
                                            value="Ne sais pas"
                                            onChange={onChangeInput}
                                             />
                                             <label className="form-check-label" htmlFor="flexRadioDefault2">
                                            Ne sais pas
                                            </label>
                                        </div>
                                    </div>


                                    <li>Qu'est ce qui vous inquiète le plus dans le fait d'accomplir en ligne des démarches administratives et fiscales ? </li>

                                    <div className="col-12">
                                        <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            name="answer11" 
                                            id="flexRadioDefault1"
                                            value="Vous ne vous sentez pas suffisamment à l'aise, en général, avec un ordinateur ou internet ?"
                                            onChange={onChangeInput}
                                             />
                                             <label className="form-check-label" htmlFor="flexRadioDefault1">
                                            Vous ne vous sentez pas suffisamment à l'aise, en général, avec un ordinateur ou internet ?
                                            </label>
                                        </div>
                                        <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            name="answer11" 
                                            id="flexRadioDefault1"
                                            value="Vous ne vous sentez pas suffisamment à l'aise avec les sites administratifs en particulier"
                                            onChange={onChangeInput}
                                             />
                                             <label className="form-check-label" htmlFor="flexRadioDefault2">
                                            Vous ne vous sentez pas suffisamment à l'aise avec les sites administratifs en particulier
                                            </label>
                                        </div>
                                        <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            name="answer11" 
                                            id="flexRadioDefault1"
                                            value="Vous n'avez pas suffisamment confiance dans la sécurité des données sur internet"
                                            onChange={onChangeInput}
                                             />
                                             <label className="form-check-label" htmlFor="flexRadioDefault1">
                                            Vous n'avez pas suffisamment confiance dans la sécurité des données sur internet
                                            </label>
                                        </div>
                                        <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            name="answer11" 
                                            id="flexRadioDefault1"
                                            value="Vous n'avez pas facilement accès à internet"
                                            onChange={onChangeInput}
                                             />
                                             <label className="form-check-label" htmlFor="flexRadioDefault2">
                                            Vous n'avez pas facilement accès à internet
                                            </label>
                                        </div>
                                        <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            name="answer11" 
                                            id="flexRadioDefault1"
                                            value="Vous ne savez pas vraiment comment archiver et archiver et conserver des informatons dans le temps avec les les démarches en ligne"
                                            onChange={onChangeInput}
                                             />
                                             <label class="form-check-label" htmlFor="flexRadioDefault2">
                                            Vous ne savez pas vraiment comment archiver et archiver et conserver des informatons dans le temps avec les les démarches en ligne
                                            </label>
                                        </div>
                                    </div>

                                    <li>Connaissez-vous l'IFIAG ?</li>

                                    <div className="col-12">
                                        <div class="form-check">
                                            <input 
                                            class="form-check-input" 
                                            type="radio" 
                                            name="answer12" 
                                            id="flexRadioDefault1" 
                                            value="OUI"
                                            onChange={onChangeInput}
                                             />
                                            <label class="form-check-label" htmlFor="flexRadioDefault1">
                                            OUI
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input 
                                            class="form-check-input" 
                                            type="radio" 
                                            name="answer12" 
                                            id="answer12Option2" 
                                            value="NON"
                                            onChange={onChangeInput}
                                             />
                                            <label class="form-check-label" htmlFor="answer12Option2">
                                                NON
                                            </label>
                                        </div>
                                    </div>


                                </ol>



                            </div>

                            <div className="form-group row">
                                <div className="col-12">
                                    <hr ></hr>
                                </div>
                            </div>
                            <div className="form-group row d-flex justify-content-end">
                                <div className="col-12 col-md-3">
                                    <button
                                        type="submit"
                                        className="btn btn-primary send-button"
                                    >
                                        Envoyer
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Answer
