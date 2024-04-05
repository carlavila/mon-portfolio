import React from 'react';
import { BrowserRouter, Routes, Route }  from 'react-router-dom';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div> 



  );
};

export default App;
   