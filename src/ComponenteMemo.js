import React from 'react'

export const ComponenteMemo = ({cambiar}) => {
    console.log("Log desde el ComponenteMemo");
  return (
    <div>
        <button onClick={cambiar}>Boton</button>
    </div>
  )
}
