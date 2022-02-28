import React, {useContext} from 'react';
import './UsersAnswersDetail.css';
import { GlobalState } from '../../../../GlobalState';

const UsersAnswersDetail = () => {
    
    // const state = useContext(GlobalState);
    // const [isAnswers, setIsAnswers] = state.isAnswersAPI.isAnswers;
    // const [callBackAnswer, setCallBackAnswer] = state.isAnswersAPI.callBackAnswer;
    // const [token] = state.token;

    // console.log('users answer page :', isAnswers)

    //get all the users answer
    
    return (
        <div>
            <p>Users Answers detail</p>
            {/* {isAnswers.map(answer=>(
                console.log("HIIIIII",answer.answers)
            ))} */}
        </div>
    )
}

export default UsersAnswersDetail
