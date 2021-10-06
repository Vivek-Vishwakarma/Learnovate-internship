const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modalImg");
const img1 = document.querySelectorAll(".img1");
const cross = document.querySelector(".cross");

img1.forEach((element) => {
    element.addEventListener("click", (e) => {
    modal.style.left = "50%"
    modalImg.src = e.target.src;
  });
});
cross.addEventListener("click", () => {
  modal.style.left = "-80%";
});
