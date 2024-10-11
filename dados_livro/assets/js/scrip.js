// var modalwrap = null;
// const showmodal = () => {
//   modalwrap = document.createElement("div");
// };
// const myModal = document.getElementById("myModal");
// const myInput = document.getElementById("myInput");

// myModal.addEventListener("shown.bs.modal", () => {
//   myInput.focus();
// });
function mostra_modal() {
  let el = document.querySelector("#minhaCaixa");
  let minhaCaixa = new bootstrap.modal(el);
  minhaCaixa.swol();
}
