const prompt = require('prompt-sync')();
// OR (//) nosso boneco só pode sair se tiver sem chuva OU com guarda chuva 
let tempo = "sol"
let item = "guarda chuva"
let podeSair = (tempo !== "chuva") || (item === "guarda chuva")
console.log("nosso personagem pode sair? " + podeSair)
// resposta: true / pq ambas estão dentro do pedido


let tempo2 = "chuva"
let item2 = "guarda chuva"
let podeSair2 = (tempo !== "chuva") || (item === "guarda chuva")
console.log("nosso personagem pode sair? " + podeSair)
// resposta: true / pq uma delas ainda está dentro do pedido.

let tempo3 = "chuva"
let item3 = "pá"
let podeSair3 = (tempo !== "chuva") || (item === "guarda chuva")
console.log("nosso personagem pode sair? " + podeSair)
// resposta: false/ pq ambas opções não estão dentro do padrão solicitado.
