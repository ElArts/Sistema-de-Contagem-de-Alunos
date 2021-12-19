// Comando de repetição "for"

// for (let indice = 0; indice < numeroDeAlunos; indice++){
//
//    if(indice == 0) {
//        console.log("Zero")
//    }else if (indice % 2 == 0) {
//        console.log ("O número " + indice + " é par")
//    }else{
//        console.log ("O número " + indice + " é impar")
//    }
//}

let listaDeAlunos = ["Victor", "Caue", "Rodrigo"]
let tamanhoListaDeAlunos = listaDeAlunos.length

for (let indiceAtual = 0; indiceAtual < tamanhoListaDeAlunos; indiceAtual++) {
console.log (listaDeAlunos[indiceAtual]) 
    }
    if (tamanhoListaDeAlunos < 10) {
        console.log ("É possível adicionar um novo aluno")
    }else{
        console.log("Não é possível adicionar novos alunos a esta turma")
    }