import React from 'react'

export default function Animal({animal}) {
    let month = animal.datum_rodjenja.getUTCMonth() + 1; //months from 1-12
    let day = animal.datum_rodjenja.getUTCDate();
    let year = animal.datum_rodjenja.getUTCFullYear();
  return (
    <div>
      <p>Name: {animal.ime}</p>
      <p>Breed: {animal.vrsta}</p>
      <p>Date of Birth: {day + '.' + month + '.' + year}</p>
      <br/>
      <br/>
    </div>
  )
}
