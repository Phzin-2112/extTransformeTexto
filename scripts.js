/*   const inputTexto = document.getElementById("input-text");
  const botaoMaiuscula = document.getElementById("Maiuscula");
  const botaoMinuscula = document.getElementById("minuscula");
  const resultado = document.getElementById("result");

  botaoMaiuscula.addEventListener("click", () => {
    const texto = inputTexto.value;
    resultado.textContent = texto.toUpperCase();
  });

  botaoMinuscula.addEventListener("click", () => {
    const texto = inputTexto.value;
    resultado.textContent = texto.toLowerCase();
  });
 */

window.document.addEventListener("DOMContentLoaded", function () {
  window.document
    .querySelector("#btnMaiuscula")
    .addEventListener("click", function () {
      let inputText = document.querySelector("#input-text").value;
      let result = document.querySelector("#result");
      document.querySelector("#result").innerHTML = inputText.toUpperCase();
      result.style.color = "black";
    });

  window.document
    .querySelector("#btnminuscula")
    .addEventListener("click", function () {
      let inputText = document.querySelector("#input-text").value;
      document.querySelector("#result").innerHTML = inputText.toLowerCase();
    });
});
