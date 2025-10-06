  const inputTexto = document.getElementById("input-text");
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
