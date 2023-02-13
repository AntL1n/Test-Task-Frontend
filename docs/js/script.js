document.addEventListener("DOMContentLoaded", () => {
  const modalBtn = document.querySelectorAll(".panel__dropdown-btn");

  modalBtn.forEach((el) => {
    el.addEventListener("click", (e) => {
      let currentBtn = e.currentTarget;
      let drop = currentBtn
        .closest(".panel__dropdown")
        .querySelector(".dropdown");

      drop.classList.toggle("dropdown--active");
    });
  });
});
