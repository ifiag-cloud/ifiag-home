import React, { useContext, useState, useEffect } from 'react';
import { GlobalState } from '../../../GlobalState';
import ContactCard from "./ContactCard";
import axios from "axios";
import './ContactInfoDetail.css';
import NotFoundPage from '../../NotFound/NotFoundPage';

const ContactInfoDetail = () => {
    const state = useContext(GlobalState);
    // const [contacts, setContacts] = state.contactsAPI.contacts;
    // const [callBack, setCallBack] = state.contactsAPI.callBack;


    const [contacts, setContacts] = useState([]);
    const [callBack, setCallBack] = useState([]);
    const [token] = state.token;
    console.log("Contact info pages :", contacts);

    const [isLogged, setIsLogged] = state.userAPI.isLogged;
    const [isAdmin, setIsAdmin] = state.userAPI.isAdmin;

    //get contact detail
    useEffect(() => {
        const getContacts = async () => {
            try {
                const res = await axios.get('/contacts/details', {
                    headers: { authorization: token }
                })
                // console.log(`contact detail : ${res.data}`)
                setContacts(res.data.contacts)
            } catch (err) {
                // console.log(err.res.message)
            }
        }
        getContacts();
    }, [callBack]);


    //Delete the Contact List
    const deleteContact = async (id) => {
        console.log({ id })
        try {
            const res = await axios.delete(`/contacts/${id}`, {
                headers: {
                    authorization: token
                }
            })
            await res;
            console.log(`delete contact ${res}`)
            alert(res.data.message)
            setCallBack(!callBack)
        } catch (err) {
            alert(err.res.data.message)
        }
    }
    return (
        <div className="container">
            {isLogged && isAdmin ? 
                    <>
                        <h1 className="heading">Informations du contact</h1>

                        <div className="row d-flex justify-content-start mb-3">
                            {
                                contacts.map(contact => (
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <ContactCard
                                            key={contact._id}
                                            contact={contact}
                                            deleteContact={deleteContact}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </>
                    : 
                    <NotFoundPage />
}
        </div>
    )
}

export default ContactInfoDetail
