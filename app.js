//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


let nubank;
let c6;
let credicard;
const meta = 2100;


function sortearAmigo() {
  nubank = parseFloat(document.getElementById('nubank').value.replace(",", "."));
  c6 = parseFloat(document.getElementById('c6').value.replace(",", "."));
  credicard = parseFloat(document.getElementById('credicard').value.replace(",", "."));
  console.log(nubank);
  console.log(c6);
  console.log(credicard);
  
    let totalDeGastos = (nubank + c6 + credicard).toFixed(2);
    console.log(totalDeGastos);
    let valorDisponivel = (meta - totalDeGastos).toFixed(2);
    console.log(valorDisponivel);
    alert("A sua meta de gastos é de R$ " + meta.toFixed(2) + "\nO total de gastos com cartões foi de R$ "
      + totalDeGastos + "\nO valor disponível para gastos é de RS " + valorDisponivel);
    let lista = document.getElementById('resultado');
    lista.innerHTML = "<h2>A sua meta de gastos é de R$ " + meta.toFixed(2) + "\nO total de gastos com cartões foi de R$ " + totalDeGastos + "\nO valor disponivel para gastos é de RS " + valorDisponivel + "</h2>";

  
}

