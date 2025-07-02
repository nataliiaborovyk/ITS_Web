import React from "react";
import CardDiTerrore from "./CardDiTerrore"; // Importa il componente della card

// Componente che contiene l’array degli utenti e li visualizza
function UtentiInnocenti() {
  //  Array di oggetti utente
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

  //  Stampa le card organizzate in griglia 3 colonne
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Utenti Innocenti</h2>

      <div className="row">
        {utenti.map((utente) => (
          <div className="col-md-4 mb-4" key={utente.id}>
            {/* Passo ogni oggetto utente come prop a CardDiTerrore */}
            <CardDiTerrore utente={utente} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UtentiInnocenti;
