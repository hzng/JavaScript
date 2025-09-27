let counter = 0;
document.getElementById("add").onclick = function () {
  counter++;
  document.getElementById("counter").textContent = counter;
};
document.getElementById("minus").onclick = function () {
  counter--;
  document.getElementById("counter").textContent = counter;
};
document.getElementById("reset").onclick = function () {
  counter = 0;
  document.getElementById("counter").textContent = counter;
};
