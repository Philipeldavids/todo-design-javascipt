const container= document.getElementById("container");
const input = document.createElement("input");
const btn1= document.createElement("button");
const btn2= document.createElement("button")
const btn3= document.createElement("button");
const breakline = document.createElement("br");
const div = document.createElement("div");

container.appendChild(input);
container.appendChild(btn1);
btn1.innerText="Assigned To Me";
container.appendChild(btn2);
btn2.innerText="Tasks";
container.appendChild(breakline);
container.appendChild(div);
div.appendChild(btn3);
btn3.innerText="Create to do";
input.setAttribute("placeholder", "Search");
