let num1 = document.getElementById("n1");
let num2 = document.getElementById("n2");
let num3 = document.getElementById("n3");
let num4 = document.getElementById("n4");

let contador = 0;
let contador2 = 0;
let contador3 = 0;
let contador4 = 0;

function mud1() {
    contador++
    num1.innerHTML = contador;
}

function mud2() {
    contador2 += 2
    num2.innerHTML = contador2;
}

function mud3() {
    contador3 += 3
    num3.innerHTML = contador3;
}

function mud4() {
    contador4 += 4
    num4.innerHTML = contador4;
}