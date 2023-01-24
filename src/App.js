import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Indexpage from './Pages/index'
import Contacts from './Pages/contact'
import '../src/App.css'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Indexpage/>} />
        <Route path='/contact' element={<Contacts/>} />
      </Routes>
    </div>
  );
}

export default App;
