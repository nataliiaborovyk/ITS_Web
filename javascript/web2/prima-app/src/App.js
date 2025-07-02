
// import logo from './logo.svg';
import './App.css';
import Componente1 from './components/Componente1';
import Clock from './components/Clock';
import { persone } from "./dati/dati"
import ComponentePersona from './components/Esercizi_slide_2/esercizio1';
import Tabellina from './components/Esercizi_slide_2/esercizio2';
import Stampanumeri from './components/Esercizi_slide_2/esercizio3';
import Stampanumeri2 from './components/Esercizi_slide_2/esercizio4';
// nuovo codice
import Home from "./components/esercizi_da_sola/home";
import Contatti from "./components/esercizi_da_sola/contatti"
import React, { useState } from 'react';
import MessaggioColorato from './components/esercizi_da_sola/MessaggioColorato';
import Animale from './components/esercizi_da_sola/Animale';
import { animali } from "./dati/dati"
import { utenti } from "./dati/dati"
import ListaUtenti from './components/esercizi_da_sola/ListaUtenti';
import EsercizioSofferente from './components/Compito/EsercizioSofferente';
import UtentiInnocenti from './components/Compito/UtentiInnocenti';
import { anagrafica } from "./dati/dati"
import Contatore from './components/Contatore';
//rafce

function App() {

  
  return (
    <div className="App">

      <Contatore/>

{/* 
      <EsercizioPersona />
      <br/>

      <EsercizioClock />
      <br/>
      <br/>

      <h1>Esercizi da slide 1 - 4</h1>
      <EserciziInClasse1234 />
      <br/>
      <br/>

      <h1>Esercizi da sola</h1>
      <br/>
      <h1>Num 1 Provo a creare sito con 2 pagine</h1>
       <br/>
      <PagineSito />
      <br/>
      <h1>Num 2 Provo a creare alte due versioni di paggine </h1>
       <br/>
      <Utente />
      <br/>
      <h1>Num 3 Cambio stile di testo</h1>
       <br/>
      <MessaggioColorato1 />
      <br/>
      <h1>Num 4 Cambio stile di testo versione 2</h1>
       <br/>
      <MessaggioColorato testo="Benvenuta Nat!" colore="white" sfondo="green" />
      <MessaggioColorato testo="Attenzione!" colore="black" sfondo="yellow" />
      <MessaggioColorato testo="Errore" colore="white" sfondo="red" />
      <br/>
      <h1>Num 5 Stampo array usando .map e props</h1>
       <br/>
      <h1>Esercizio Animali</h1>
      <ListaAnimali />
      <h1>Num 6 Stampo utenti usando map e decostruzione</h1>
       <br/>
      <ListaUtenti utenti={utenti}/>
      <br/>
      <h1>Compito per casa</h1>
       <br/>
       <h3>Versione con 1 solo omponente</h3>

      <EsercizioSofferente/>
       <br/>
      <h1>Compito per casa</h1>
       <br/>
       <h3>Versione con 2 componenti</h3>

      <UtentiInnocenti/> */}
    </div>
  );
}


function EsercizioPersona () {
    let nome = "Roberto";
  const persona1={
  nome:"Roberto",
  cognome:"del",
  eta:"48"
  }

  const persona2={
  nome:"gino",
  cognome:"destro",
  eta:"50"  
  }
  return (
    <div>
      <h1>Mio Primo Esercizio</h1>
      <h2>Aiuto!!!!!  {nome}</h2>
      <Componente1 {...persona1}/>
      <Componente1 {...persona2}/>

    </div>
  )
}
// export default App;

function EsercizioClock () {
  return (
    <div>
      <h1>Esercizio Clock</h1>
      <Clock/>
      <h2>
        { // dentro le { } scrivo codice js
          // Mostra data e ora locale in formato stringa.
          new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()
        }
      </h2>
      {/* Sto creando 3 orologi diversi, ognuno con un fuso orario e un paese. */}
      <Clock timezone="-6" country="USA">qualcosa</Clock>
      <Clock timezone="0" country="Italy"></Clock>
      <Clock timezone="7" country="Japone"></Clock>
    </div>
  )
}

function EserciziInClasse1234 () {
  return (
    <div>
      <h1>Esercizio 1</h1>
      <h3>Versione 1</h3>
      {persone.map((p) => {
        return <ComponentePersona key={p.id} {...p} />;
      })}
      <br/>
      <h3>Versione 2</h3>
      <ComponentePersona nome={persone[0].nome} cognome={persone[0].cognome} eta={persone[0].eta}/>
      {/* <ComponentePersona {...persona2}/> */}
      
      <br/>
      <h1>Esercizio 2</h1>
      <Tabellina num="2"/>

      <br/>
      <h1>Esercizio 3</h1>
      <Stampanumeri/>

      <br/>
      <h1>Esercizio 4</h1>
      <Stampanumeri2/>
    </div>
  )
}



function PagineSito() {
  const [pagina, setPagina] = useState('home');
  return(
    <div>
      <h1>La mia prima SPA React</h1>
      <button onClick={() => setPagina('home')}>Home</button>
      <button onClick={() => setPagina('contatti')}>Contatti</button>
      <hr />
      {pagina === 'home' ? <Home /> : <Contatti />}
    </div>
  );
}

function Utente () {

  const [nome, setNome] = useState('Nat');

  return (
    <div>
      <h2>Profilo utente</h2>
      <p>Ciao, {nome}!</p>
      <button onClick={() => setNome('Alice')}>Cambia in Alice</button>
      <button onClick={() => setNome('Luca')}>Cambia in Luca</button>
    </div>
  )

}
function MessaggioColorato1() {
  return (
    <p style={{ color: 'blue', backgroundColor: 'lightyellow' }}>
      Questo è un messaggio con stile inline!
    </p>
  );
}


function ListaAnimali() {
  return(
    <div>
      <h2>Lista Animali</h2>
      {animali.map((a) => (
        <Animale key={a.id} nome={a.nome} tipo={a.tipo} />
      ))}
    </div>
  );
}
// Rende il componente App disponibile ad altri file.
export default App;

// 1. Definisco variabile 'nome' (usata in <h1>)
// 2. Creo oggetto persona1
// 3. Creo oggetto persona2
// 4. Nel return JSX:
//    - Creo contenitore principale con className "App"
//    - Stampo <h1> con variabile nome
//    - Stampo Componente1 con props = dati di persona1
//    - Stampo Componente1 con props = dati di persona2
//    - Stampo un Clock (senza props)
//    - Stampo data e ora (con codice JavaScript dentro le graffe {})
//    - Stampo 3 Clock con timezone diversi

console.log("Ciao dalla console!");
