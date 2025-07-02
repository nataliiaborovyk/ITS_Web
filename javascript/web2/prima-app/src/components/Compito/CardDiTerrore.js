import React from "react";

// Componente che riceve un solo oggetto utente come prop
function CardDiTerrore({ utente }) {
  return (
    // Contenitore principale della card
    <div className="card h-100">

      {/* Intestazione: mostra ID dell’utente */}
      <div className="card-header text-center">
        <h5>Utente #{utente.id}</h5>
      </div>

      {/* Corpo della card: mostra info utente */}
      <div className="card-body text-center">
        <h6>{utente.nome} {utente.cognome}</h6>

        <p>
          <strong>Età:</strong>
          <span className="badge bg-secondary ms-2">{utente.eta}</span>
        </p>

        <p><strong>Professione:</strong> {utente.professione}</p>
        <p><strong>Email:</strong> {utente.email}</p>
      </div>

      {/* Piè di pagina: bottone che mostra alert con i dettagli */}
      <div className="card-footer text-center">
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
  );
}

export default CardDiTerrore;
