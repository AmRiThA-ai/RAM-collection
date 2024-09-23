const toggleButton = document.querySelector(".toggleButton");

function toggleImage() {
  var image = document.querySelector(".imgab img");
  image.style.display = (image.style.display === "none") ? "block" : "none";
  
  toggleButton.textContent = (image.style.display === "none") ? "Show Image" : "Hide Image";
}

function validateForm() {
  const name = document.getElementById("name").value;
  const ccnum = document.getElementById("ccnum").value;
  const exp = document.getElementById("exp").value;
  const ccv = document.getElementById("ccv").value;
  const email = document.getElementById("email").value;

  if (!name || !ccnum || !exp || !ccv || !email) {
      alert("Please fill out all fields.");
      return false; // Prevent form submission
  }

  // If all fields are filled, allow form submission
  return true;
}

function submitForm() {
  if (validateForm()) {
      // Redirect to games.html if validation is successful
      window.location.href = "games.html";
  }
}