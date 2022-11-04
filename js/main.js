 // input 
let nome = (prompt("Inserisci il tuo nome"));

console.log(nome);

let cognome = (prompt("Inserisci il tuo cognome"));

console.log(cognome);

let genpassword = nome + cognome + 21;
// output

document.getElementById("password").innerHTML = (genpassword);