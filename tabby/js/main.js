const tabs = Array.from(document.querySelectorAll(".tab"));
const tabby = document.querySelector(".tabby");
const tabContents = Array.from(tabby.querySelectorAll(".tab-content"));

tabs.forEach((tab) => {
  tab.addEventListener("click", (event) => {
    // Finding the correct tab content
    const target = tab.dataset.theme;
    const tabContent = tabby.querySelector("#" + target);
    // Selecting a tab
    tabs.forEach((t) => t.classList.remove("is-selected"));
    tab.classList.add("is-selected");
    // Selecting a tab-content
    tabContents.forEach((c) => c.classList.remove("is-selected"));
    tabContent.classList.add("is-selected");
  });
});
