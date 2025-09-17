import React, { useState } from 'react'

const FetchComponent = () => {
    const [album, setAlbum] = useState([]);
    const getData= async () => {
        const album=await fetch(url).then(res=>res.json())
      //const album=await fetch(url).then(risposta=>risposta.json())
        setAlbum(album)
    }

    // const getData = async () => {
    //     const risposta = await fetch(url);       // attendo la risposta
    //     const album = await risposta.json();     // trasformo in dati leggibili
    //     setAlbum(album);                         // salvo nello stato
    //     };



    useEffect(()=>{
        //getData()
        fetch(url)
        .then(res=>res.json())
        .then(ris=>{
            setAlbum(ris)
        })
    },[])

// è la stessa cosa
//    useEffect(()=>{ 
//     fetch(url)
//     .then(risposta => risposta.json())
//     .then(dati => setAlbums(dati));
//     },[])

    
  return (
    <div>
        {
            album.map((a)=>{
                return (<h3>{a.title}</h3>)
            })
        }
    </div>
  )
}
w
export default FetchComponent