import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import AnimalList from "./AnimalList";
import AddAnimal from "./AddAnimal";
import SectorList from "./SectorList";

function App() {
  const [animals, setAnimals] = useState([
    { ime: "Ime Macke", vrsta: "macka", sektor: "Sisari" },
    {
      ime: "Ime Psa",
      vrsta: "Pas",
      datum_rodjenja: new Date("2023-03-01"),
      sektor: "Sisari",
    },
    {
      ime: "Ime Ptice",
      vrsta: "Ptica",
      datum_rodjenja: new Date(),
      sektor: "Ptice",
    },
    { ime: "Ime Konja", vrsta: "konj", datum_rodjenja: null, sektor: "Sisari" },
    {
      ime: "Ime Zeca",
      vrsta: "Zec",
      datum_rodjenja: new Date(),
      sektor: "Sisari",
    },
  ]);

  const sektori = getAllSectors();

  function getAllSectors() {
    let arraySektori = [];

    animals.forEach((element) => {
      if (!arraySektori.includes(element.sektor)) {
        arraySektori.push(element.sektor);
      }
    });

    return arraySektori;
  }

  //console.log(sektori);

  const removeEl = (element) => {
    delete animals[animals.indexOf(element)];
    console.log(animals);
    var filtered = animals.filter(function (el) {
      return el != null;
    });
    setAnimals(filtered);
  };

  const moveUp = (index) => {
    let filteredAnimals = animals.filter(
      (item, itemIndex) => itemIndex !== index
    );
    setAnimals([animals[index], ...filteredAnimals]);

    // -------------DRUGI NACIN

    // let newArray = [...animals];
    // let finalArray = [];

    // delete newArray[newArray.indexOf(element)];

    // let filtered = newArray.filter(function (el) {
    //   return el != null;
    // });

    // finalArray.push(element);
    // finalArray.push(...filtered);

    // setAnimals(finalArray);
  };

  return (
    <div>
      <AddAnimal animals={animals} setAnimals={setAnimals} />
      <AnimalList animals={animals} removeEl={removeEl} moveUp={moveUp} />
      <SectorList sektori={sektori} animals={animals} />
    </div>
  );
}

export default App;
