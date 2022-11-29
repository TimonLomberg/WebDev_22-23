"use strict";

document.addEventListener("DOMContentLoaded", OnDOMLoaded);




function OnDOMLoaded() {

    //Aufgabe 1
    let aendern = document.getElementsByName("aendern");
    aendern[0].addEventListener("click", u8_1a);
    aendern[1].addEventListener("click", u8_1b);
    aendern[2].addEventListener("click", u8_1c);
    aendern[3].addEventListener("click", u8_1d);

    let domEigenschaften = document.getElementsByName("domEigenschaften");
    domEigenschaften[0].addEventListener("click", u8_2a);
    domEigenschaften[1].addEventListener("click", u8_2b);

    document.getElementById("berechne").addEventListener("click", u8_3);

    let schleifen = document.getElementsByName("schleifen");
    schleifen[0].addEventListener("click", u8_4);

    document.getElementById("flaeche").addEventListener("click",u8_5);

    u8_6();

}


function u8_1a() {
    let div = document.getElementById("u8-1");
    let item = div.getElementsByClassName("rot").item(0);
    if(item != null) {
        item.classList.toggle("rot");
        item.classList.toggle("gelb");
        return;
    }

    item = div.getElementsByClassName("gelb").item(0)
    if(item != null) {
        item.classList.toggle("rot");
        item.classList.toggle("gelb");
    }
}

function u8_1b() {
    let div = document.getElementById("u8-1");
    let item = div.getElementsByTagName("p")[1];
    if(item != null) {
        item.classList.toggle("hellblau");
        item.classList.toggle("gelb");
    }

}

function u8_1c() {
    let div = document.getElementById("u8-1");
    let item = div.querySelectorAll(".hellgruen")[0];
    if(item != null) {
        item.classList.remove("hellgruen");
        item.classList.add("gelb");
    }
}

function u8_1d() {
    let div = document.getElementById("u8-1");
    for(let item of div.querySelectorAll("li")) {
        item.classList.add("gelb");
        item.classList.add("rahmen");
    }
}



function u8_2a() {
    let div = document.getElementById("u8-2");
    console.log(div.getElementsByTagName("p")[0].innerText);
}

function u8_2b() {
    let item = document.getElementById("Liste2");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode("NEUES ELEMENT"));
    item.appendChild(li);
}



function u8_3() {
    let x = parseInt(document.getElementById("wert1").value);
    let y = parseInt(document.getElementById("wert2").value);
    let op = document.getElementById("operator").value;
    let ret = document.getElementById("wertAusgabe");

    ret.innerText = (() => {
        switch (op) {
            case "+":
                return x+y;
            case "-":
                return x-y;
            case "*":
                return x*y;
            case "/":
                return x/y;
        }
    })();
}



function u8_4() {

    let a = ["mo", "di", "mi", "do", "fr"];
    let nRows = 10;

    let table = "<table>";

    for (let i = 0; i < nRows; ++i) {
        table += "<tr>";
        for (let j = 0; j < a.length; ++j) {
            table += (i !== 0) ? `<td>${i}+${j}</td>` : `<td>${a[j]}</td>`;
        }
        table += "</tr>";
    }

    table += "</table>"
    document.getElementById("stundenplan").innerHTML = table;
}



function u8_5() {
    class Rechteck {
        constructor(width, height) {
            this.width = width;
            this.heigth = height;
        }
        getUmfang() {
            return this.width * this.heigth;
        }
    }

    let x = parseInt(document.getElementById("eingabeX").value);
    let y = parseInt(document.getElementById("eingabeY").value);
    let out = document.getElementById("flaecheAusgabe");

    let obj = new Rechteck(x, y);

    out.innerText = obj.getUmfang();
}



function u8_6() {
    document.getElementById("reset").addEventListener('click', resetCounter);


    localStorage.setItem("Visits", (parseInt(localStorage.getItem("Visits") ?? "0") + 1).toString());
    updateCounterText();


    function resetCounter() {
        localStorage.setItem("Visits", "0");
        updateCounterText();
    }
    function updateCounterText() {
        document.getElementById("zaehler").innerText = localStorage.getItem("Visits");
    }
}


