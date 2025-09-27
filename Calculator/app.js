let value1 = "";
let value2 = "";
let operator;

document.getElementById("b1").onclick = function () {
  value1 += "*";
  document.getElementById("calculation").textContent = value1;
};
document.getElementById("b2").onclick = function () {
  value1 += "/";
  document.getElementById("calculation").textContent = value1;
};
document.getElementById("b3").onclick = function () {
  value1 += "-";
  document.getElementById("calculation").textContent = value1;
};
document.getElementById("b4").onclick = function () {
  value1 += "+";
  document.getElementById("calculation").textContent = value1;
};
document.getElementById("b5").onclick = function () {
  value1 += "9";
  document.getElementById("calculation").textContent = value1;
};
document.getElementById("b6").onclick = function () {
  value1 += "8";
  document.getElementById("calculation").textContent = value1;
};
document.getElementById("b7").onclick = function () {
  value1 += "7";
  document.getElementById("calculation").textContent = value1;
};
document.getElementById("b8").onclick = function () {
  value1 += "6";
  document.getElementById("calculation").textContent = value1;
};
document.getElementById("b9").onclick = function () {
  value1 += "5";
  document.getElementById("calculation").textContent = value1;
};
document.getElementById("b10").onclick = function () {
  value1 += "4";
  document.getElementById("calculation").textContent = value1;
};
document.getElementById("b11").onclick = function () {
  value1 += "3";
  document.getElementById("calculation").textContent = value1;
};
document.getElementById("b12").onclick = function () {
  value1 += "2";
  document.getElementById("calculation").textContent = value1;
};
document.getElementById("b13").onclick = function () {
  value1 += "1";
  document.getElementById("calculation").textContent = value1;
};
document.getElementById("b14").onclick = function () {
  value1 += "0";
  document.getElementById("calculation").textContent = value1;
};
document.getElementById("b15").onclick = function () {
  value1 += ".";
  document.getElementById("calculation").textContent = value1;
};
document.getElementById("b16").onclick = function () {
  try {
    document.getElementById("result").textContent = eval(value1);
  } catch (err) {
    document.getElementById("result").textContent = "Error";
  }
};
document.getElementById("b17").onclick = function () {
  value1 = "";
  document.getElementById("result").textContent = "";
  document.getElementById("calculation").textContent = value1;
};
