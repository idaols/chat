"use strict";

const socket = io("http://localhost:3000");

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const inp = document.getElementById("message");
  console.log("emitting", inp.value);
  socket.emit("chat message", inp.value);
  inp.value = "";
});

socket.on("chat message", (msg) => {
  const item = document.createElement("li");
  item.classList.add(
    "py-2",
    "px-3",
    "bg-mm-sky-blue-crayola",
    "rounded-2xl",
    "text-mm-dark-sienna",
    "w-fit",
    "m-3"
  );
  item.innerHTML = msg;
  document.getElementById("messages").appendChild(item);
});
