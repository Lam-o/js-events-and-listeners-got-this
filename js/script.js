var button = document.querySelector(".got-this");
var modal = document.querySelector(".modal");
var modalX = document.querySelector(".modal-x");

//console.log(button, modal, modalX);

button.addEventListener("click", function () {
  modal.classList.add("show-modal");
  button.innerText = "You've got this !!!";
});

//now to change it back//

modalX.addEventListener("click", function () {
  modal.classList.remove("show-modal");
  button.innerText = "Who's got this";
});
