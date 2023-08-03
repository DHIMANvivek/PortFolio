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
