import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import Footer from './Components/Footers/Footer';
import './App.css';
import SecoundPage from './Views/SecoundPage';
import NewHeader from './Components/Headers/NewhHeader';

function App() {
  return (
  
          <BrowserRouter>
          <div className="App">
            <NewHeader />
              <SecoundPage/>
            <Footer />
          </div>
          </BrowserRouter>

  );
}

export default App;
