/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { read } from "@popperjs/core";

window.onload = function() {
  //write your code here

  let cartas = ["A", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J"];
  let iconos = ["♦", "♥", "♠", "♣"];

  let numeroaleatoriocartas = Math.floor(Math.random() * cartas.length);
  let numeroaleatoriodeiconos = Math.floor(Math.random() * iconos.length);
  console.log(cartas[numeroaleatoriocartas], iconos[numeroaleatoriodeiconos]);

  let dibujos = document.getElementById("superior");
  let numeros = document.getElementById("medio");
  let final = document.getElementById("inferior");
  dibujos.innerText = iconos[numeroaleatoriodeiconos];
  numeros.innerText = cartas[numeroaleatoriocartas];
  final.innerText = iconos[numeroaleatoriodeiconos];

  if (
    iconos[numeroaleatoriodeiconos] == "♥" ||
    iconos[numeroaleatoriodeiconos] == "♦"
  ) {
    // const superior = document.getElementById("superior");

    // const inferior = document.getElementById("inferior");

    dibujos.classList.add("red");
    final.classList.add("red");
  }
  // dibujos.innerText = iconos[numeroaleatoriodeiconos];
};
