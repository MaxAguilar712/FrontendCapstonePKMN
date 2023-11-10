import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Gallery from './components/gallery/Gallery';
import { NavBar } from './components/nav/NavBar';
import Booster from './components/booster/BOOOSTER';



function App() { 
  return (
    <div className="App">

    <BrowserRouter>
    <Routes>
    <Route path="*" element={  
      <> 
		  <NavBar />
		  <Gallery/>
      <Booster />
		  </> }/>

  


    </Routes>
    
    
    
    
    </BrowserRouter>
		

  
	

  


    </div>
  );
}

export default App;
