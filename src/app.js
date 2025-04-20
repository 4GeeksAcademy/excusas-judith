import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function excuseGenerator(){
  //partes excusas
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car', 'the house'];
  let when = ['before the class.', 'when I was sleeping.', 'while I was exercising.', 'during my lunch.',];

  //genera nº aleatorio
  let random1 = Math.floor(Math.random() * 4);
  let random2 = Math.floor(Math.random() * 4);
  let random3 = Math.floor(Math.random() * 4);
  let random4 = Math.floor(Math.random() * 4);

  document.getElementById("excuse").innerHTML = who[random1] +" "+ action[random2] +" "+ what[random3] +" "+ when[random4];
  console.log("Judith Ramírez");
};