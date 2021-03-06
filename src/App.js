import React from 'react';
import { BrowserRouter, Routes, Route }  from 'react-router-dom';
import Home from './pages/Home';
import Knowledges from './pages/Knowledges';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/competences" element={<Knowledges/>}></Route>
          <Route path="/projets" element={<Projects/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
    </div> 
    
  

  );
};

export default App;
