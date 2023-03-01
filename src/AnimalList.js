import React from 'react'
import Animal from './Animal'

export default function AnimalList({animals}) {

  return (
            animals.map(element => {
            return <Animal animal = {element} />
        })
  )
}
