import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home/Home';
import Register from './Users/Register/Register';
import Login from './Users/Login/Login';
import Profile from './Users/Profile/Profile';
import Answer from './Users/Answer/Answer'
import Contact from './Contact/Contact';
import ContactInfoDetail from './Admin/ContactInfo/ContactInfoDetail';
import UsersInfoDetail from './Admin/Users/UsersInfo/UsersInfoDetail';
import UsersAnswersDetail from './Admin/Users/UsersAnswer/UsersAnswersDetail';
import NotFoundPage from './NotFound/NotFoundPage';
import ResetPassword from './Users/Password/ResetPassword/ResetPassword';
import Institut from '../secoundViws/institut/Institut';
import DigiMobile from '../secoundViws/digiMobile/DigiMobile';
import Accueil from '../secoundViws/accueil/Accueil';
import Actualites from '../secoundViws/actualites/Actualites';
import NosFormations from '../secoundViws/nosFormation/NosFormations';
import Contacts from '../secoundViws/Contact/Contacts';
import IfiagTV from '../secoundViws/ifiagTV/IfiagTV';
import ArticalAI from '../secoundViws/actualites/ArticalAI';
import NumériqueArtical from '../secoundViws/actualites/NumériqueArtical';
import Transhumanisme from '../secoundViws/nosFormation/Transhumanisme';
import ArticleOLlya from '../secoundViws/actualites/ArticleOLlya';
import ArticleOLlyaColloque from '../secoundViws/actualites/ArticleOLlyaColloque';

const MainPage = () => {
    return (
        <div>
            <Switch >
                <Route exact path="/" component={Home} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/answer" component={Answer}/>
                <Route exact path="/user_profile" component={Profile} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/reset_password" component={ResetPassword} />
                

                <Route exact path="/contact_info" component={ContactInfoDetail} />
                <Route exact path="/users_info" component={UsersInfoDetail} />
                <Route exact path="/users_answers" component={UsersAnswersDetail} />

                <Route exact path="/accueil" component={Accueil} />
                <Route exact path="/institut" component={Institut} />
                <Route exact path="/digimobile" component={DigiMobile} />
                <Route exact path="/actualites" component={Actualites} />
                <Route exact path="/nos-formation" component={NosFormations} />
                <Route exact path="/contacts" component={Contacts} />
                <Route exact path="/ifiagTV" component={IfiagTV} />

                <Route exact path="/article-ollya" component={ArticleOLlya} />
                <Route exact path="/article-ollya-Colloque" component={ArticleOLlyaColloque} />
                <Route exact path="/artical-portrait" component={ArticalAI} />
                <Route exact path="/aritcal-digitale" component={NumériqueArtical} />
                <Route exact path="/transhumanisme" component={Transhumanisme} />
             

                <Route path="*" exact component={NotFoundPage} />
            </Switch >
        </div>
    )
}

export default MainPage
