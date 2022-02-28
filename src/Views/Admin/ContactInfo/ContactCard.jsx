import React, { useState } from 'react';
import './ContactCard.css'
import { Container } from "react-bootstrap";

function ReadMore({ children = 110 }) {
  const text = children;
  const [isShow, setIsShowLess] = useState(true)
  const result = isShow ? text.slice(0, 110) : text;

  function toggleIsShow() {
    setIsShowLess((!isShow));
  }
  return (
    <p>
      {result}
      <span className="btn btn-link" onClick={toggleIsShow}>
        {isShow ? "Read More >>" : "<< Read Less"}
      </span>
    </p>
  )
}

function ContactCard({ contact, deleteContact }) {
  return (
    <>
      <Container className="mt-3 shadow rounded">
        <h6 > Nom : <span className="nom">{contact.nom}</span></h6>
        <h6 className="">Prenom : <span className="prenom">{contact.prenom}</span> </h6>
        <h6 className="">E-mail : {contact.email}</h6>
        <h6 className="">Mobile : {contact.phone}</h6>
        <p>
          <ReadMore>
            {contact.message}
          </ReadMore>
        </p>
        <div className="d-grid gap-2 col-12 col-md-8 col-lg-6 mx-auto">
        <button type="button" className="btn btn-danger" onClick={() => deleteContact(contact._id)}>Delete</button>
        </div>
        
      </Container>
    </>

  )
}

export default ContactCard;
