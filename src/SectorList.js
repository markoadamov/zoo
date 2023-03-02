import React from 'react'

export default function SectorList({sektori, animals}) {

    function showAnimals(sektor){
        let arrayAnimals = [];

        animals.forEach(element => {
            if(sektor === element.sektor)
            arrayAnimals.push(element.ime)
        });

        alert(arrayAnimals);
    }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Sektori:</th>
          </tr>
        </thead>
        <tbody>
            {sektori.map((sektor,index)=>{
               return (
                 <tr key={index}>
                   <th>{sektor}</th>
                   <th className='centerButtonInCell'><button onClick={()=>showAnimals(sektor)}>Check animals</button></th>
                 </tr>
               ); 
            })}

        </tbody>
      </table>
    </>
  );
}
