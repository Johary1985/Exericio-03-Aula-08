/*  ***Primeira parte sem Function***
let PrimerUsuario = prompt ("PrimerUsuario")
let SegundoUsuario = prompt ("SegundoUsuario")
let Turma= prompt ("Turma")
let Turma2 = prompt ("Turma2")
let Modulo = prompt ("Modulo")
let Modulo2 = prompt ("Modulo2")

if (PrimerUsuario == SegundoUsuario) {
    console.log ("Usuario ja Cadastrado")
} 

if (Turma == Turma2) {
    console.log ("Sao da Mesma Turma")
} 

if (Modulo == Modulo2) {
    console.log ("Sao do mesmo Modulo")
} 
*/

function turma(Turma1, Turma2) {
    Turma1 = prompt ("Turma 1");
    Turma2 = prompt ("Turma 2");
}
turma()

function modulo(Modulo1, Modulo2) {
    Modulo1 = prompt ("Modulo 1");
    Modulo2 = prompt ("Modulo 2");
}
modulo()

function user() {
let PrimerUsuario =""
let SegundoUsuario =""
let Turma =""
let Turma2 =""
let Modulo =""
let Modulo2 =""


    if (PrimerUsuario == SegundoUsuario) {
        console.log ("Usuario ja Cadastrado")
    } 
    
    if (Turma == Turma2) {
        console.log ("Sao da Mesma Turma")
    } 
    
    if (Modulo == Modulo2) {
        console.log ("Sao do mesmo Modulo")
    } 
}
user()

