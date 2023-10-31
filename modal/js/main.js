const modalButton = document.querySelector(".jsModalButton");
const modalCloseButton = document.querySelector(".jsModalClose");

modalButton.addEventListener("click", (event) => {
  document.body.classList.add("modal-is-open");
});

modalCloseButton.addEventListener("click", (event) => {
  document.body.classList.remove("modal-is-open");
});
