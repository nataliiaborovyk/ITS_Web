import React, {useState} from 'react'

const Contatore = () => {

    const [count, setCount] = useState(0);

    const aumenta=()=>{
        // let numero1=count + 1;
        // setCount(numero1);
        setCount(numero => numero + 1)
    }

    const diminuisci=()=>{
        // let numero2=count - 1;
        // setCount(numero2);
        setCount(numero => numero - 1)
    }


  return (
    <>
    <div>{count}</div>
    <div>
        <button onClick={aumenta} className="btn btn-danger">Aumenta</button>
        <br/>
        <button onClick={diminuisci} className="btn btn-success">Diminuisci</button>
    </div>
    </>
  )
}

export default Contatore