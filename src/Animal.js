import React from "react";

export default function Animal({ animal }) {
  let month, day, year;
  let datumR = animal.datum_rodjenja;

  if (datumR) {
    month = datumR.getMonth() + 1;
    day = datumR.getDate();
    year = datumR.getFullYear();
  }

  return (
    <>
      <th>{animal.ime}</th>
      <th>{animal.vrsta}</th>
      <th>
        {" "}
        {datumR ? <p>{day + "." + month + "." + year}</p> : <p>Nepoznat</p>}
      </th>
      <th>{animal.sektor}</th>
    </>
  );
}
