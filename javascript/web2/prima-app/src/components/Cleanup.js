import React, { useState } from 'react'

const Cleanup = () => {
    const [size, setSize]=useState(window.innerWidth);
    const dimensione=()=>{
        setSize(window.innerWidth)
    
    }
    useEffect(()=>{
        window.addEventListener("resize")
    })
  return (
    <div>Cleanup</div>
  )
}

export default Cleanup