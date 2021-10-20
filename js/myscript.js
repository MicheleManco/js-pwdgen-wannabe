//Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito. Infine scrivi sulla pagina “La password assegnata è: ” nomecognomecolorepreferito21

// chiedo il nome, cognome, colore
let nome = prompt("inserisci il tuo nome")
let cognome = prompt("inserisci il tuo cognome")
let colorePreferito = prompt("inserisci il tuo colore preferito")

//formulo la password 
let password = nome + cognome + colorePreferito + "21"

// debug
// console.log(nome)
// console.log(cognome)
// console.log(colorePreferito)
// console.log(password)

//scrivo la password
document.getElementById("password").innerHTML = "Questa sarà la tua password: " + password