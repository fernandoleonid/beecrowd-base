"use strict"

const solveProblem = () =>  {
    const input = document.getElementById('input')
                          .value.replace(/ +|\r|\n/g,' ')
                          .split(' ')
    const problemNumber = document.getElementById('problems').value
    window[`problem${problemNumber}`](input)
}
document.getElementById('solve').addEventListener('click', solveProblem)

// Digite uma função para cada problema
// O nome da função deverá seguir o padrão problemXXXX
// onde XXXX é o número do problema