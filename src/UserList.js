import React from "react";

export const UserList = ({ lista, funcionDelete }) => {

  return (
    <ul>
      {lista.map((usuario, i) => {
        return (
          <li>
            <h2 key={i}>{usuario.nombre}</h2>
            <button onClick={()=>funcionDelete(usuario.id)}>Eliminar usuario</button>
          </li>
        );
      })}
    </ul>
  );
};
