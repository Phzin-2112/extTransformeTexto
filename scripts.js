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

<<<<<<< HEAD
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
=======
window.document.addEventListener("DOMContentLoaded", function(){
  window.document.querySelector("#btnMaiuscula").addEventListener("click", function(){
    let inputText = document.querySelector("#input-text").value
    document.querySelector("#result").innerHTML = inputText.toUpperCase()
  })

    window.document.querySelector("#btnminuscula").addEventListener("click", function(){
    let inputText = document.querySelector("#input-text").value
    document.querySelector("#result").innerHTML = inputText.toLowerCase()
  })
})
>>>>>>> 1f9eac59c3096159c451d084d6f2b7874a1aa38d
