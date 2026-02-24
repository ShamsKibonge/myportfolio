import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'tailwindcss/base.css'; // Importer les styles de base (si nécessaire)
import 'tailwindcss/components.css'; // Importer les styles des composants (si nécessaire)
import 'tailwindcss/utilities.css'; // Importer les styles des utilitaires (si nécessaire)
import Home from './views/Home';
import Expertise from './views/expertise';
import Project from './views/Project';
import Contact from './views/Contact';
import NotFound from './views/NotFound';
import { DataProvider } from './component/Dataprovider';

const App = () => {
  return (
    <Router>
      <DataProvider>
        <Routes>
          <Route exact path="/" element={<Home page={'About'} />} />
          <Route exact path="/About" element={<Home page={'About'} />} />
          <Route exact path="/Expertise" element={<Expertise page={'Expertise'} />} />
          <Route exact path="/Projects" element={<Project page={'Projects'} />} />
          <Route exact path="/Contact" element={<Contact page='Contact' />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </DataProvider>
    </Router>
  );
};

export default App;
