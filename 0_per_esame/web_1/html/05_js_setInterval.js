// setInterval(funzioneDaRipetere, ogniQuantiMillisecondi)

//     funzioneDaRipetere → cosa deve succedere ogni volta

//     ogniQuantiMillisecondi → ogni quanto tempo

//     1000 millisecondi = 1 secondo

setInterval(()=>{console.log("ciao")}, 1000)

let numero = 1

setInterval(()=>{
    numero +=1
    console.log(numero)
}, 1000)