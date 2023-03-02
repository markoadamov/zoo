import React from "react";
import Animal from "./Animal";

export default function AnimalList({ animals, removeEl, moveUp }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Breed</th>
          <th>Date Of Birth</th>
          <th>Sector</th>
        </tr>
      </thead>
      <tbody>
        {animals.map((element, index) => {
          return (
            <tr key={index}>
              <Animal animal={element} />
              <th className="centerButtonInCell">
                <button onClick={() => moveUp(index)}> MoveUp </button>
              </th>
              <th className="centerButtonInCell">
                <button onClick={() => removeEl(element)}> Remove </button>
              </th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
