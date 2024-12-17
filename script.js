// Initialize the Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add('show'); // Add 'show' class to slide in
          observer.unobserve(entry.target); // Optional: Stop observing once the effect is applied
      }
  });
}, {
  threshold: 0.1 // Trigger when 10% of the element is visible
});

// Select all elements with the class 'slide-container'
const slideElements = document.querySelectorAll('.slide');
slideElements.forEach((el) => observer.observe(el));




document.getElementById('openPdfButton').addEventListener('click', function() {
  // Open the PDF in a new tab
  const pdfName = "Mridhul CV";
  const pdfFile = "./image/CV.pdf";
  window.location.href = pdfFile;
  document.title = pdfName;
});