document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    document.getElementById("successMessage").style.display = "block"; // Show success message
  });
  