import React, { useState } from 'react'

const CambioNome = () => {

const [nome, setNome] = useState("Nat")

const toggleName=()=>{
    if(nome==="Nat"){
        setNome("Mario")
    }else{
        setNome("Nat")
    }
}
  return (
    <div>
        <h3>{nome}</h3>
        <button className="btn btn-dark" onClick={toggleName}>Cambia Nome</button>
        
    </div>
  )
}

export default CambioNome