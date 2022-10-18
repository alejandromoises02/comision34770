import React, {useState} from 'react'
import { UserList } from './UserList';

export const Users = () => {

  const [nombre, setNombre] = useState('');
  const [lista, setLista] = useState([]);
  
  const handlerChange = (e)=>{
    setNombre(e.target.value)
  }

  const handlerClick = ()=>{
    setLista([...lista,{nombre, id:Math.floor(Math.random() * 100)}]);
  }

  const funcionDelete = (id)=>{
    setLista(lista.filter((usuario)=>usuario.id !== id))
  }

  return (
    <div>
      <input type="text" value={nombre} onChange={handlerChange}/>
      <button onClick={handlerClick}>Agregar</button>
      <UserList lista={lista} funcionDelete={funcionDelete}/>
    </div>
  )
}

