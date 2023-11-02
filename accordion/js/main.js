const accordions = Array.from(document.querySelectorAll(".accordion"));

accordions.forEach((accordion) => {
  // Find the accordion header
  const accordionHeader = accordion.querySelector(".accordion__header");

  // Add event listener to the accordion header
  accordionHeader.addEventListener("click", (event) => {
    accordion.classList.toggle("is-open");
  });
});
