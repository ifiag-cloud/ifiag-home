// import React, { useState, useEffect } from 'react'
// import axios from 'axios';


// function ContactsAPI(token) {
    

//     const [contacts, setContacts] = useState([]);
//     const [callBack, setCallBack] = useState([]);
        
//     useEffect(() => {
//             const getContacts = async () => {

//                 try {
//                     const res = await axios.get('/contacts/details',  {
//                         headers: { authorization: token }
//                     })
//                     // console.log(`contact detail : ${res.data}`)
//                     setContacts(res.data.contacts)
//                 } catch (err) {
//                     // console.log(err.res.message)
//                 }
//             }
//             getContacts();
//     }, [callBack]);
//     return {
//         contacts: [contacts, setContacts],
//         callBack: [callBack, setCallBack]
//     }
// }


// export default ContactsAPI
