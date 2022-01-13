import React from 'react';
import { BrowserRouter, Routes, Route }  from 'react-router-dom';
import Home from './pages/Home';
import Knowledges from './pages/Knowledges';
import Projets from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/competences" element={<Knowledges/>}></Route>
          <Route path="/projets" element={<Projets/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </> 
    
  

  );
};

export default App;
