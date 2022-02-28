import React from 'react';
import './UserCard.css';

function UserCard({ user, deleteUser }) {

    console.log("users card: ", { user })
    return (
        <>
            <div className="mt-3 shadow rounded">
                <h6 className="detail-info"> Nom : <span className="nom">{user.nom}</span></h6>
                <h6 className="detail-info">Prenom : <span className="prenom">{user.prenom}</span> </h6>
                <h6 className="detail-info">E-mail : {user.email}</h6>
                <h6 className="detail-info">Mobile : {user.phone}</h6>
                <div className="d-grid gap-2 col-12 col-md-8 col-lg-6 mx-auto">
                    <button type="button" className="btn btn-danger" onClick={() => deleteUser(user._id)}>Delete</button>
                </div>
            </div>
        </>
    )
}

export default UserCard
