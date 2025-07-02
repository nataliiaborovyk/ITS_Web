import React from 'react'

function MessaggioColorato(props) {
  return (
    <div className="test-center" style={{color: props.colore, backgroundColor: props.sfondo, padding: "10px", borderRadius: "8px"}}>
        <h5>{props.testo}</h5>
    </div>
  );
}

export default MessaggioColorato
