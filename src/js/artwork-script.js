document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById("myModal");
    const images = document.querySelectorAll(".myImg");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");
    const closeBtn = document.querySelector(".close");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
  
    let currentIndex = -1; // No image is active initially
  
    // Function to show the image in the modal
    function showImage(index) {
      modal.style.display = "block"; // Show modal
      modalImg.src = images[index].src; // Set modal image source
      captionText.textContent = images[index].alt; // Set caption text
      currentIndex = index; // Update current index
    }
  
    // Add click event listener for each image
    images.forEach((img, index) => {
      img.addEventListener("click", () => {
        showImage(index); // Show image only when clicked
      });
    });
  
    // Clicking on the modal image moves to the next one
    modalImg.addEventListener("click", () => {
      if (currentIndex !== -1) {
        currentIndex = (currentIndex + 1) % images.length; // Move to next image
        showImage(currentIndex); // Show the new image
      }
    });
  
    // Close the modal when the close button is clicked
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none"; // Hide modal
    });
  
    // Close the modal if the user clicks outside the modal content (background)
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none"; // Hide modal
      }
    });
  
    // Navigate to the previous image
    prevBtn.addEventListener("click", () => {
      if (currentIndex !== -1) {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // Move to previous image
        showImage(currentIndex); // Show the new image
      }
    });
  
    // Navigate to the next image
    nextBtn.addEventListener("click", () => {
      if (currentIndex !== -1) {
        currentIndex = (currentIndex + 1) % images.length; // Move to next image
        showImage(currentIndex); // Show the new image
      }
    });
  
    // Make sure modal is hidden initially
    modal.style.display = "none";
  });
  