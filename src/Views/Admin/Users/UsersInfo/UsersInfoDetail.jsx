import React, { useContext, useEffect, useState } from 'react';
import './UsersInfoDetail.css';
import { GlobalState } from '../../../../GlobalState';
import UserCard from './UserCard';
import axios from 'axios';
import NotFoundPage from '../../../NotFound/NotFoundPage'

const UsersInfoDetail = () => {
    const state = useContext(GlobalState);
    // const [users, setUsers] = state.usersAPI.users;
    // const [callBackUsers, setCallBackUsers] = state.usersAPI.callBackUsers;
    const [token] = state.token;

    const [isLogged, setIsLogged] = state.userAPI.isLogged;
    const [isAdmin, setIsAdmin] = state.userAPI.isAdmin;

    const [users, setUsers] = useState([]);
    const [callBackUsers, setCallBackUsers] = useState([]);
    console.log("users info Detail :", users);
    
    //Get the All Users information only if it is Admin
    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await axios.get('/user/infos', {
                    headers: {
                        Authorization: token
                    }
                })
                console.log('usersAPI all :', res.data)
                setUsers(res.data)
            } catch (err) {
                // console.log(err.res.mes)
            }
        }
        getUsers();
    },[callBackUsers])


    //Delete user function when click the delete button
    const deleteUser = async (id) => {
        console.log({ id })
        try {
            const res = await axios.delete(`/user/${id}`, {
                headers: {
                    authorization: token
                }
            })
            await res;
            console.log('Deleted the user :', res)
            alert(res.data.message);
            setCallBackUsers(!callBackUsers)
        } catch (err) {
            // alert(err.res.data.message)
        }
    }
    return (
        <div className="container">
            {
                isLogged && isAdmin ?
                    <>
                        <h1 className="heading">Informations sur les utilisateurs</h1>
                        <div className="row d-flex justify-content-start mb-3">
                            {
                                users.map(user => (
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <UserCard
                                            key={user._id}
                                            user={user}
                                            deleteUser={deleteUser}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </>
                    :
                    <>
                    <NotFoundPage />
                    </>
                }

        </div>
    )
}

export default UsersInfoDetail
