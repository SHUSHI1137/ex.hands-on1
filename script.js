document.querySelectorAll(".view-more").forEach((button) => {
  button.addEventListener("click", function () {
    const imageRow = this.closest("tr").nextElementSibling;
    const imageContainer = imageRow.querySelector(".image-container");
    const imageSrc = this.getAttribute("data-img");
    imageContainer.innerHTML = `<img src="${imageSrc}" alt="Crane Image">`;
    imageRow.style.display =
      imageRow.style.display === "none" ? "table-row" : "none";
  });
});
