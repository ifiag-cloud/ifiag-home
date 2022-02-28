import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Footer from './Components/Footers/Footer';
import './App.css';
// import SecoundPage from './Views/SecoundPage';
import NewHeader from './Components/Headers/NewhHeader';
import Accueil from './secoundViws/accueil/Accueil';
import Institut from './secoundViws/institut/Institut';
import DigiMobile from './secoundViws/digiMobile/DigiMobile';

function App() {
  return (
  
          <BrowserRouter>
          <div className="App">
            <NewHeader />
              <Switch>
                <Route exact path="/" component={Accueil} />
                <Route exact path="/institut" component={Institut} />
                <Route exact path="/digimobile" component={DigiMobile} />
              </Switch>
            <Footer />
          </div>
          </BrowserRouter>

  );
}

export default App;
