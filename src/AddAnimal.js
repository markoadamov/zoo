import React, { useRef } from "react";

export default function AddAnimal({ animals, setAnimals }) {
  let ime = useRef(),
    vrsta = useRef(),
    rodjendan_DD = useRef(),
    rodjendan_MM = useRef(),
    rodjendan_YY = useRef(),
    sektor = useRef();

  function addAnimal() {
    setAnimals([
      ...animals,
      {
        ime: ime.current.value,
        vrsta: vrsta.current.value,
        datum_rodjenja: new Date(
          `${rodjendan_YY.current.value}-${rodjendan_MM.current.value}- ${rodjendan_DD.current.value}`
        ),
        sektor: sektor.current.value,
      },
    ]);
  }

  return (
    <div className="addAnimalDiv">
      <label> Ime: </label>
      <input type="text" ref={ime}></input>
      <label> Vrsta: </label>
      <input type="text" ref={vrsta}></input>
      <br />
      <label>Sektor:</label>
      <select id="sectors" name="sectors" ref={sektor}>
        <option value="Ptice">Ptice</option>
        <option value="Insekti">Insekti</option>
        <option value="Sisari">Sisari</option>
        <option value="Gmizavci">Gmizavci</option>
      </select>
      <label> Rodjendan: </label>
      <input
        type="number"
        className="dateFieldWidth"
        ref={rodjendan_DD}
        placeholder="DD"
      ></input>
      <input
        type="number"
        className="dateFieldWidth"
        ref={rodjendan_MM}
        placeholder="MM"
      ></input>
      <input
        type="number"
        className="dateFieldWidth"
        ref={rodjendan_YY}
        placeholder="YY"
      ></input>
      <button onClick={() => addAnimal()}>Add Animal</button>
    </div>
  );
}
