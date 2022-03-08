import React from 'react';
import './Contact.css';
import { useForm, ValidationError } from '@formspree/react';
import Portrait from '../../Components/portrait/Portrait';
export default function ContactForm() {
  const [state, handleSubmit] = useForm('xknybjpo');

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>
  }

  return (

    

   <div className="container">
     <div className="row justify-content-center ">
    <div className="col-12 col-lg-9 mt-5">  
   <div className="row d-flex justify-content-center align-items-center">
    <div className="col-12 col-lg-9 card shadow rounded">  
    <form method="POST" onSubmit={handleSubmit}>
     <div className="form-group row">
      <div className="col-12 col-md-6">
         <label className="col-12 col-form-label" htmlFor="name" ><span className="star">*</span> Prénom: </label>
                <input
                    id="prenom"                    
                    type="text"                                    
                    name="prenom"
                    className="col-12 form-control"                    
                    placeholder="Entrez votre prénom"
                    required
                    />
                <ValidationError prefix="Name" field="name" errors={state.errors} />    
        </div>
      
      <div className="col-12 col-md-6">
         <label className="col-12 col-form-label" htmlFor="name" ><span className="star">*</span> Nom: </label>
                <input
                    id="nom"                    
                    type="text"                                    
                    name="nom"
                    className="col-12 form-control"                    
                    placeholder="Entrez votre nom"
                    required
                    />
        </div>
      <div className="col-12 col-md-6">
         <label className="col-12 col-form-label"  htmlFor="email"><span className="star">*</span> Email: </label>
                <input
                    id="email"                    
                    type="email"                                    
                    name="email"
                    className="col-12 form-control"                    
                    placeholder="Entrez votre email"
                    required
                    />
          <ValidationError prefix="Email" field="email" errors={state.errors} />           
        </div>
      <div className="col-12 col-md-6">
         <label className="col-12 col-form-label"  htmlFor="email"><span className="star">*</span> Téléphone</label>
                <input
                    id="number"                    
                    type="number"                                    
                    name="number"
                    className="col-12 form-control"                    
                    placeholder="Entrez votre numéro"
                    required
                    />
          <ValidationError prefix="number" field="number" errors={state.errors} />           
        </div>
        


        <div className="form-group row">
    
            <label className="col-12 col-form-label"><span className="star">*</span> Nos-Formations : </label>
                <select name="cars" id="cars">
                    <option value="Initiation numérique">Initiation numérique</option>
                    <option value="HTML ET CHATBOT">Html et Chatbot</option>
                    <option value="MongoDB">MongoDB</option>
                    <option value="Elasitc">Elastic stack</option>
                    <option value="ai">Ai deep learing avec Tensorflow </option>
                    </select>                 
              
            </div>    
                            
        <div className="form-group row">
            <div className="col-12">
            <label className="col-12 col-form-label"><span className="star">*</span> Message : </label>
               <textarea
                    id="cars"
                    type="text"                        
                    name="message"
                    className="col-12 form-control resposive-text"
                    rows="3"
                    placeholder="Entrez votre message ..."  
                    >
                    <ValidationError prefix="Message" field="message" errors={state.errors} />    
                </textarea>                 
                </div>
            </div>    
                            
        
        <div className="form-group row d-flex justify-content-canter col-11 col-lg-6 mr-2">
      <button className='portrait-button-3'  type="submit" disabled={state.submitting}>
        Envoyer
      </button>
    </div> 
      
      </div>   
    </form>
    </div>
   </div>
   </div>
   <div className="col-12 col-lg-3 mt-5">  
        <Portrait />
    </div> 
   </div>
   </div>   
  );
}


