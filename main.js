const toggleButton = document.querySelector(".toggleButton");

function toggleImage() {
  var image = document.querySelector(".imgab img");
  image.style.display = (image.style.display === "none") ? "block" : "none";
  
  toggleButton.textContent = (image.style.display === "none") ? "Show Image" : "Hide Image";
}

