document.getElementById("roll").onclick = function () {
  document.getElementById("n1").textContent = Math.floor(Math.random() * 6) + 1;
  document.getElementById("n2").textContent = Math.floor(Math.random() * 6) + 1;
  document.getElementById("n3").textContent = Math.floor(Math.random() * 6) + 1;
};
