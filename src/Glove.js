import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import Footer from './Components/Footers/Footer';
import { DataProvider } from './GlobalState';
import NewHeader from './Components/Headers/NewhHeader';
import SecoundPage from './Views/SecoundPage';

function Glove() {
  return (
    <DataProvider>
      <BrowserRouter>
      <div className="App">
       <NewHeader />
       <SecoundPage />
        <Footer />
      </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default Glove;
