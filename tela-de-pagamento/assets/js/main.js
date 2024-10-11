const form = document.querySelector("#form");
const numberCredit = document.querySelector("#numCartao");
const deactivateButtonCreditPay = document.querySelector(".desativado-cartao");
const deactivateButtonBoletoPay = document.querySelector(".desativado-boleto");
const deactivateAboutCvv = document.querySelector(".aboutCvv");
const activateAboutCvv = document.querySelector("#aboutCvv");
const activateButtonCreditPay = document.querySelector("#cartao");
const activateButtonBoletoPay = document.querySelector("#boleto");
const buttonPagamentoCredito = document.querySelector("#pagamentoCredito");
const buttonPagamentoBoleto = document.querySelector("#pagamentoBoleto");
const valueForPay = document.querySelector("#valor");
const generaTezicket = document.querySelector("#gerar-boleto");
const name = document.querySelector("#nome");
const cpf = document.querySelector("#cpf");

buttonPagamentoCredito.style.display = "none";
buttonPagamentoBoleto.style.display = "none";
valueForPay.style.display = "none";
deactivateButtonCreditPay.style.display = "none";
deactivateButtonBoletoPay.style.display = "none";
deactivateAboutCvv.style.display = "none";

activateButtonCreditPay.addEventListener("click", () => {
  buttonPagamentoBoleto.style.display = "none";
  deactivateButtonCreditPay.style.display = "block";
  buttonPagamentoCredito.style.display = "block";
  valueForPay.style.display = "block";
  deactivateButtonBoletoPay.style.display = "none";
});

activateButtonBoletoPay.addEventListener("click", () => {
  deactivateButtonBoletoPay.style.display = "block";
  buttonPagamentoBoleto.style.display = "block";
  valueForPay.style.display = "block";
  deactivateButtonCreditPay.style.display = "none";
  buttonPagamentoCredito.style.display = "none";
});

buttonPagamentoBoleto.addEventListener("click", () => {
  document.location = "http://127.0.0.1:5501/boleto/index.html";
});

function validateCredit(str) {
  const validacaoCartao = /^[0-9]{4}[0-9]{4}[0-9]{4}[0-9]{4}$/;
  if (!validacaoCartao.test(str)) {
    console.log("deu errado");
    numCartao.placeholder = "Digite novamente";
  } else {
    console.log("deu certo");
  }
}

form.onsubmit = function (form) {
  form.preventDefault();
  validateCredit(String(numberCredit.value));
};
