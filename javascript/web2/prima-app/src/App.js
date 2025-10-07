
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
import Saluto1 from './components/tentetivi_disperati/Saluto1';
import Saluto2 from './components/tentetivi_disperati/Saluto2';
import Saluto3 from './components/tentetivi_disperati/Saluto3';
import Messaggio1 from './components/tentetivi_disperati/Messaggio1';
import Messaggio2 from './components/tentetivi_disperati/Messaggio2';
import Utenti1 from './components/tentetivi_disperati/Utenti1';
import { utenti1 } from './dati/dati';
import Persona from './components/tentetivi_disperati/Persona';
import CambioNome from './components/tentetivi_disperati/CambioNome';
import LoginForm from './components/tentetivi_disperati/LoginForm';
import Esercizio_5 from './components/Esercizio_5';
import Timer from './components/tentetivi_disperati/Timer';
import UserAlbums from './components/tentetivi_disperati/UserAlbums';

import Saluto from './compito_estate/esercizio_1/Saluto';
import CardUtente from './compito_estate/esercizio_2/CardUtente';
import MenuRistorante from './compito_estate/esercizio_3/MenuRistorante';
import Termostato from './compito_estate/esercizio_4/Termostato';
import CampoRicerca from './compito_estate/esercizio_5/CampoRicerca';
import MessaggioSegreto from './compito_estate/esercizio_6/MessaggioSegreto';
import AggiornaTitolo from './compito_estate/esercizio_7/AggiornaTitolo';
import GalleriaFoto from './compito_estate/esercizio_8/GalleriaFoto';
import ModuloContatti from './compito_estate/esercizio_9/ModuloContatti';
import CardUtente1 from './compito_estate/esercizio_2/CardUtente1';

function App() {

  
  return (
    <div className="App">

    <h3>Esercizio 1: Il Tuo Primo Componente Statico</h3>
      <Saluto></Saluto>

    <h3>Esercizio 2: Componenti Dinamici con le Props</h3>
      <CardUtente
      nome ="Nat"
      email = "nat@gmail.com"
      imgUrl = "https://placehold.co/100x100"
      />

      <CardUtente
      nome ="Met"
      email = "met@gmail.com" 
      imgUrl = "https://placehold.co/100x100"
      />

          <h3>Esercizio 2: Componenti Dinamici con le Props</h3>
      <CardUtente1
      nome ="Nat"
      email = "nat@gmail.com"
      imgUrl = "https://placehold.co/100x100"
      />

      <CardUtente1
      nome ="Met"
      email = "met@gmail.com" 
      imgUrl = "https://placehold.co/100x100"
      />

    <h3>Esercizio 3: Renderizzare Liste con .map()</h3>
      <MenuRistorante></MenuRistorante>

    <h3>Esercizio 4: Introduzione allo Stato con useState</h3>
      <Termostato></Termostato>

    <h3>Esercizio 5: Gestire Input Utente (Controlled Components)</h3>
      <CampoRicerca/>

    <h3>Esercizio 6: Rendering Condizionale</h3>
      <MessaggioSegreto></MessaggioSegreto>

    <h3>Esercizio 7: Effetti Collaterali con useEffect</h3>
      <AggiornaTitolo/>

    <h3>Esercizio 8: Caricare Dati da un Server (Data Fetching)</h3>
      <GalleriaFoto/>

    <h3>Esercizio 9: Gestire Form Complessi con un Singolo Stato</h3>
      <ModuloContatti></ModuloContatti>


      {/* <Esercizio_5></Esercizio_5> */}

      {/* <UserAlbums></UserAlbums>
      <Timer></Timer> */}
      
      {/* <CambioNome/>

      <LoginForm/>
      <Saluto1/>
      <Saluto2 nome="Nat" tentativo={3} />
      <Saluto3 nome="Nat" tentativo={4}/>
      <Messaggio1 titolo="Ciao" testo="studio props"/>
      <Messaggio2 titolo="distruturazione" testo={5}/>


    {utenti1.map(({nome, eta}, index) => (<Utenti1 key={index} nome={nome} eta={eta}/>))}

    {persone.map(({id, nome, cognome, eta}) => (<Persona key={id} nome ={nome} cognome={cognome} eta={eta}/>))}
 */}


      {/* <Contatore/> */}

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


// function EsercizioPersona () {
//     let nome = "Roberto";
//   const persona1={
//   nome:"Roberto",
//   cognome:"del",
//   eta:"48"
//   }

//   const persona2={
//   nome:"gino",
//   cognome:"destro",
//   eta:"50"  
//   }
//   return (
//     <div>
//       <h1>Mio Primo Esercizio</h1>
//       <h2>Aiuto!!!!!  {nome}</h2>
//       <Componente1 {...persona1}/>
//       <Componente1 {...persona2}/>

//     </div>
//   )
// }
// // export default App;

// function EsercizioClock () {
//   return (
//     <div>
//       <h1>Esercizio Clock</h1>
//       <Clock/>
//       <h2>
//         { // dentro le { } scrivo codice js
//           // Mostra data e ora locale in formato stringa.
//           new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()
//         }
//       </h2>
//       {/* Sto creando 3 orologi diversi, ognuno con un fuso orario e un paese. */}
//       <Clock timezone="-6" country="USA">qualcosa</Clock>
//       <Clock timezone="0" country="Italy"></Clock>
//       <Clock timezone="7" country="Japone"></Clock>
//     </div>
//   )
// }

// function EserciziInClasse1234 () {
//   return (
//     <div>
//       <h1>Esercizio 1</h1>
//       <h3>Versione 1</h3>
//       {persone.map((p) => {
//         return <ComponentePersona key={p.id} {...p} />;
//       })}
//       <br/>
//       <h3>Versione 2</h3>
//       <ComponentePersona nome={persone[0].nome} cognome={persone[0].cognome} eta={persone[0].eta}/>
//       {/* <ComponentePersona {...persona2}/> */}
      
//       <br/>
//       <h1>Esercizio 2</h1>
//       <Tabellina num="2"/>

//       <br/>
//       <h1>Esercizio 3</h1>
//       <Stampanumeri/>

//       <br/>
//       <h1>Esercizio 4</h1>
//       <Stampanumeri2/>
//     </div>
//   )
// }



// function PagineSito() {
//   const [pagina, setPagina] = useState('home');
//   return(
//     <div>
//       <h1>La mia prima SPA React</h1>
//       <button onClick={() => setPagina('home')}>Home</button>
//       <button onClick={() => setPagina('contatti')}>Contatti</button>
//       <hr />
//       {pagina === 'home' ? <Home /> : <Contatti />}
//     </div>
//   );
// }

// function Utente () {

//   const [nome, setNome] = useState('Nat');

//   return (
//     <div>
//       <h2>Profilo utente</h2>
//       <p>Ciao, {nome}!</p>
//       <button onClick={() => setNome('Alice')}>Cambia in Alice</button>
//       <button onClick={() => setNome('Luca')}>Cambia in Luca</button>
//     </div>
//   )

// }
// function MessaggioColorato1() {
//   return (
//     <p style={{ color: 'blue', backgroundColor: 'lightyellow' }}>
//       Questo è un messaggio con stile inline!
//     </p>
//   );
// }


// function ListaAnimali() {
//   return(
//     <div>
//       <h2>Lista Animali</h2>
//       {animali.map((a) => (
//         <Animale key={a.id} nome={a.nome} tipo={a.tipo} />
//       ))}
//     </div>
//   );
// }


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
