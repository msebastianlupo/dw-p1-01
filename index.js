"use strict";

let limiteMenor = parseInt(prompt("ingrese número límite inferior"));
let limiteMayor = parseInt(prompt("ingrese número límite superior"));
let numero = parseInt(prompt("ingrese el número"));

if(limiteMenor <= numero && limiteMayor >= numero){
    alert("el número está en rango!");
    //el cero no es un número par
    if(numero % 2 === 0 && numero !== 0){
        alert("el número es par");
    }
}else{
    if(numero % 2 !== 0){
        alert("el número es impar");
    }
}