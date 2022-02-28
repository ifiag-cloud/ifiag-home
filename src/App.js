import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import Footer from './Components/Footers/Footer';
import './App.css';
import { DataProvider } from './GlobalState';
 import{ ContextProvider } from'./ContextState'
import SecoundPage from './Views/SecoundPage';
import NewHeader from './Components/Headers/NewhHeader';

function App() {
  return (
    < ContextProvider >
        <DataProvider>
          <BrowserRouter>
          <div className="App">
            <NewHeader />
              <SecoundPage/>
            <Footer />
          </div>
          </BrowserRouter>
        </DataProvider>
    </ContextProvider>
  );
}

export default App;
