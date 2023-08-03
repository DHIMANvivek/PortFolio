document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const prevButton = document.querySelector(".prev-btn");
  const nextButton = document.querySelector(".next-btn");

  const slideWidth = carousel.clientWidth;
  let currentPosition = 0;

  function slideTo(position) {
    carousel.style.transform = `translateX(${position}px)`;
  }

  function showPrevSlide() {
    if (currentPosition < 0) {
      currentPosition += slideWidth;
      slideTo(currentPosition);
    }
  }

  function showNextSlide() {
    const maxPosition = -(carousel.scrollWidth - slideWidth);
    if (currentPosition > maxPosition) {
      currentPosition -= slideWidth;
      slideTo(currentPosition);
    }
  }

  prevButton.addEventListener("click", showPrevSlide);
  nextButton.addEventListener("click", showNextSlide);
});


function changeBackgroundColor(element) {
  // Get all list items inside the navigation
  const listItems = document.querySelectorAll('.main-menu ul li');

  // Remove the "active" class from all list items
  listItems.forEach(item => item.classList.remove('active'));

  // Add the "active" class to the clicked list item
  element.parentNode.classList.add('active');
}


function toggleDarkTheme() {
  document.body.classList.toggle("dark-theme");
  console.warn("Dark theme is implemented yet")
}


function downloadPageAsPDF() {
    // Create a new jsPDF instance
    const pdf = new jsPDF();

    // Get the content element that you want to convert to PDF
    const content = document.getElementById("content-to-pdf");

    // Use html2canvas to capture the content as an image
    html2canvas(content).then((canvas) => {
      // Convert the canvas to a base64 image data
      const imgData = canvas.toDataURL("image/jpeg");

      // Add the image to the PDF
      pdf.addImage(imgData, "JPEG", 0, 0, 210, 297); // Assuming A4 size (210x297 mm)

      // Save the PDF with the name "download.pdf"
      pdf.save("download.pdf");
    });
  }