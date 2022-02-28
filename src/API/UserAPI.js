import { useState, useEffect } from "react";
import axios from "axios";

function UserAPI(token) {
    const [isLogged, setIsLogged] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isUser, setIsUser] = useState([]);
    // const [users, setUsers] = useState([]);
    
    
    // console.log('users all :', users)


    //Get the user information who is loggged
    useEffect(() => {
        if (token) {
            const getUser = async () => {
                try {
                    const res = await axios.get('/user/info', {
                        headers: {
                            Authorization: token
                        }
                    })
                    // console.log("User Authorization :", res)
                    setIsLogged(true)
                    res.data.role === 1 ? setIsAdmin(true) : setIsAdmin(false);

                    setIsUser(res.data)
                } catch (err) {
                    // alert(err.response.data.message)
                }
            }
            getUser();
        }
    }, [token]);

    

    
    return {
        isLogged: [isLogged, setIsLogged],
        isAdmin: [isAdmin, setIsAdmin],
        isUser: [isUser, setIsUser],
        // users: [users, setUsers],
    }
}
export default UserAPI