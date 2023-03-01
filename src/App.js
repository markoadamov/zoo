import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import AnimalList from './AnimalList';

function App() {
  const [animals, setAnimals] = useState([{ime:'Ime Macke', vrsta:'macka', datum_rodjenja: new Date()}, {ime:'Ime Psa', vrsta:'Pas', datum_rodjenja: new Date()}, {ime:'Ime Patke', vrsta:'pata', datum_rodjenja: new Date()}, {ime:'Ime Konja', vrsta:'konj', datum_rodjenja: new Date()}, {ime:'Ime Zeca', vrsta:'Zec', datum_rodjenja: new Date()}]);

  return (
    <div className="App">
      <AnimalList animals={animals}/>
    </div>
  );
}

export default App;
