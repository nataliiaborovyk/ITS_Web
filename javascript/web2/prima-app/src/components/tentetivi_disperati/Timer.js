import React, { useEffect, useState }  from 'react'

const Timer = () => {
  const [contatore, setContatore] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setContatore((pippo) => pippo + 1);
    }, 1000);

    return () => clearTimeout(timer); // importante per pulire il timeout
  }, [contatore]);

  return (
    <div>
      <h2>{contatore}</h2>
    </div>
  );
};


export default Timer