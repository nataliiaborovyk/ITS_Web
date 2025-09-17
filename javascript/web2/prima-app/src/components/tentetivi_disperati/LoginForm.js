import React, { useState } from 'react'

const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [pasword, setPasword] = useState("")
    
    const gestioneDati=(evento)=>{
        console.log("evento",evento)
        evento.preventDefault();
        setMessagio("Le credenziali sono: " + email + "pasword" + pasword);
    }

    const provaEvento=(evento,nome)=>{
        console.log(evento)
        console.log(nome)
    }
    const [messaggio, setMessagio] =useState("")

  return (
    
    <div>
        <form>
            <h2>Login</h2>
            {messaggio}
            <div>
                <label>Email</label>
                <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            </div>
            <div>
                <label>Pasword</label>
                <input type="pasword" required value={pasword} onChange={(e)=>setPasword(e.target.value)}></input>
            </div>
            <button  onClick={gestioneDati}>Login</button>
        </form>
        <button claaName="btn btn-drk" onClick={(e)=>provaEvento(e,"Nat")}>Prova Evento</button>
    </div>
  )
}

export default LoginForm