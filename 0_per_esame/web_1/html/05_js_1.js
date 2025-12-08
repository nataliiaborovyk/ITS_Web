// es 1
const numeri = [3, 10, 5, 8, 21, 4];
const summ = (lista) => {
    let somma = 0
    for (let n of lista) {
        somma += n;
    }
    return somma;
}
let x = summ(numeri)
console.log("Somma = " + x)

// es2
const f1 =(lista) => {
    for (let n of lista){
        console.log(n)
    }
}

//es3
const f2 = (lista) => {
    for (let i=0; i < lista.length; i++) {
        if (lista[i] > 5){
            console.log(lista[i])
        }
    }
}

//es4
const f3 = ()=> {
    let i = 1
  while(i <= 5){
    console.log(i);
    i++;
}
}

//es5
const media = (lista) => {
    som = 0
    for (let n of lista) {
        som += n
    };
    return som/lista.length
}
console.log("Media = " + media(numeri))

//es6
const f6 = (lista) => {
    let pari = lista.filter(n=>n%2==0)
    for (let x of pari) {
        console.log(x)
    }
    return pari;
}
console.log("Pari = [" + f6(numeri) + "]")


//es7
const f7 = (lista) => {
    let prezziConIVA = lista.map(n => n + n * 0.22)
    return prezziConIVA;
}
console.log("Prezzi Con Iva [" +  f7(numeri) + "]")

// es8
const f8 = (lista) => {
    let prezziGrandi = lista.filter(n => n > 15)
    return prezziGrandi
}
console.log("Prezzi Grandi [" +  f8(numeri) + "]")



const studenti = [
  { nome: "Nat", voto: 28 },
  { nome: "Luca", voto: 18 },
  { nome: "Anna", voto: 30 },
  { nome: "Paolo", voto: 22 }
];


//es9
const f9 = (array) => {
    let promossi = array.filter( n => n.voto >= 24)
    let nom_promossi = array.map(n => n.nome)
    return nom_promossi
}

//es10
const f10 = (n) => {
    if (n%2==0) {
        return true
    } else {
        return false
    }
}
console.log(f10(18))


//es11
const f11 = (array) => {
    let pari = array.filtra(n => f10(n))
    return pari
}
console.log(f11(numeri))

const prodotti = [
  { nome: "Mela", prezzo: 1.2 },
  { nome: "Pane", prezzo: 2.5 },
  { nome: "Latte", prezzo: 1.8 },
  { nome: "Formaggio", prezzo: 4.0 }
];


//es12
const applicaSconto = (lista, scontoPercentuale) => {
    let prezzoScontato = lista.map(
        n => {
            return {
                nome: n.nome, 
                prezzo: n.prezzo * (1 - scontoPercentuale/100)
            };
            });
    return prezzoScontato;
}
console.log(applicaSconto(prodotti, 20))
