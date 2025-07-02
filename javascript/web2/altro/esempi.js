// 1. Componente padre
function App() {
  // TODO: chiama il componente Presentazione e passa il tuo nome come prop
  return (
    <div>
      {<Presentazione nome="Nat" />}
    </div>
  );
}

// 2. Componente figlio
function Presentazione(props) {
  // TODO: mostra un messaggio con il nome passato nelle props
  return (
    <h1>
      {`Ciao, ${props.nome}!`}
    </h1>
  );
}


// 1. Componente padre
function App() {
  return (
    <div>
      {<SchedaPersona nome="Anna" eta={25}/>}
    </div>
  );
}

// 2. Componente figlio
function SchedaPersona(props) {
  return (
    <h2>
      {`Ciao, ${props.nome}! Hai ${props.eta} anni`}
    </h2>
  );
}

function Messaggio(props) {
  console.log(props); // stampa l’oggetto props
  return <p>{props.testo}</p>;
}
