import React from "react";

// Componente unico: contiene i dati e la logica di visualizzazione
function EsercizioSofferente() {

  //  Array di 3 utenti (oggetti con nome, età, ecc.)
  const utenti = [
    {
      id: 1,
      nome: "Anna",
      cognome: "Arisi",
      eta: 30,
      professione: "Sviluppatrice",
      email: "anna.arisi@gmail.com"
    },
    {
      id: 2,
      nome: "Marco",
      cognome: "Rossi",
      eta: 45,
      professione: "Designer",
      email: "marco.rossi@gmail.com"
    },
    {
      id: 3,
      nome: "Gabriele",
      cognome: "Pasini",
      eta: 26,
      professione: "Data Analyst",
      email: "gabriele.pasini@gmail.com"
    }
  ];

  // JSX di ritorno: stampa le card
  return (
    //  container = margine sinistro/destra centrato
    // mt-4 = margine top (spazio sopra)
    <div className="container mt-4">

      {/*  Titolo al centro con margine sotto */}
      <h2 className="text-center mb-4">Lista Utenti (Sofferenza inclusa)</h2>

      {/*  row = riga Bootstrap: qui dentro metto le colonne */}
      <div className="row">

        {/*  ciclo per ogni utente */}
        {utenti.map((utente) => (
          
          //  col-md-4 = colonna larga 4/12 → 3 colonne per riga
          // mb-4 = margine in basso (spazio tra le righe)
          <div className="col-md-4 mb-4" key={utente.id}>

            {/*  card = contenitore principale della card, stile Bootstrap */}
            {/* h-100 = altezza 100% → per allineare verticalmente se serve */}
            <div className="card h-100">

              {/*  card-header = parte alta della card */}
              {/* text-center = testo centrato */}
              <div className="card-header text-center">
                <h5>Utente #{utente.id}</h5>
              </div>

              {/*  card-body = parte centrale con i dati */}
              <div className="card-body text-center">
                {/* h6 = testo un po’ più piccolo per nome completo */}
                <h6>{utente.nome} {utente.cognome}</h6>

                {/* Badge = stile età (piccola etichetta grigia) */}
                <p>
                  <strong>Età:</strong>
                  <span className="badge bg-secondary ms-2">{utente.eta}</span>
                  {/* ms-2 = "margin start": un po’ di spazio a sinistra del badge */}
                </p>

                {/* Professione e email normali */}
                <p><strong>Professione:</strong> {utente.professione}</p>
                <p><strong>Email:</strong> {utente.email}</p>
              </div>

              {/*  card-footer = parte bassa con bottone */}
              <div className="card-footer text-center">
                {/* btn btn-primary = bottone blu Bootstrap */}
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    alert(
                      `Nome: ${utente.nome} ${utente.cognome}\nEtà: ${utente.eta}\nProfessione: ${utente.professione}\nEmail: ${utente.email}`
                    )
                  }
                >
                  Mostra dettagli
                </button>
              </div>
            </div>
          </div>
        ))}

      </div> {/* ← fine .row */}
    </div>   
  );
}

export default EsercizioSofferente;
