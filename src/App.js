import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Gallery from './components/gallery/Gallery';
import { NavBar } from './components/nav/NavBar';
import Booster from './components/booster/BOOOSTER';
import { Login } from './auth/Login';
import { Register } from './auth/Register';
import { Authorized } from './views/Authorized';
import BaseSetBooster from './components/booster/BaseSetBooster';
import { Collection } from './components/collection/collection';
import { ApplicationViews } from './views/AppView';


function App() { 
  return (
    <div className="App">

    <BrowserRouter> 
    
      <Routes>
                <Route path='/login' element={<Login />} />
                  <Route path='/register' element={<Register />} />

                    <Route path="*" element={  
                <> 
                <Authorized> 
                     <NavBar />
                    <ApplicationViews />
                   
                  </Authorized>
              
                </> 
              }/>

  


      </Routes>
    
    
    
    
    </BrowserRouter>
		

  
	

  


    </div>
  );
}

export default App;
