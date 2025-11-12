const tableContainer = document.getElementById("tableContainer");

// Hide table when scrolled to top
tableContainer.addEventListener("scroll", () => {
  if (tableContainer.scrollTop === 0) {
    tableContainer.classList.add("hidden");
  } else {
    tableContainer.classList.remove("hidden");
  }
});


