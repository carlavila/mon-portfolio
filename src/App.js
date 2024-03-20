import React from 'react';
import { BrowserRouter, Routes, Route }  from 'react-router-dom';
import Home from './pages/Home/Home';
import Projects from './pages/Project/Projects';
import Contact from './pages/Contact/Contact';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/projets" element={<Projects/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
    </div> 



  );
};

export default App;
   