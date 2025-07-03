// Initialize AOS animations
AOS.init();

// Function to show selected class subjects
function showSubjects(id) {
  const allSections = document.querySelectorAll('.subject-section');
  allSections.forEach(section => {
    section.style.display = 'none';
  });

  const selectedSection = document.getElementById(id);
  if (selectedSection) {
    selectedSection.style.display = 'block';
    selectedSection.scrollIntoView({ behavior: 'smooth' });
  }
}
function viewPDF(file) {
  const viewer = document.getElementById("pdf-viewer");
  const section = document.getElementById("viewer-section");
  viewer.src = `assets/notes/${file}`;
  section.style.display = 'block';
  section.scrollIntoView({ behavior: 'smooth' });
}
// Blog filter in future
// document.getElementById('blogSearch').addEventListener('input', function () {
//   const keyword = this.value.toLowerCase();
//   document.querySelectorAll('.post').forEach(post => {
//     const content = post.innerText.toLowerCase();
//     post.style.display = content.includes(keyword) ? 'block' : 'none';
//   });
// });



function showPDF(file) {
  const viewer = document.getElementById("pdf-viewer");
  viewer.classList.remove("loaded"); // Reset opacity
  viewer.src = "assets/notes/" + file;
  viewer.onload = () => {
    viewer.classList.add("loaded"); // Fade in
  };
  document.getElementById("viewer-section").scrollIntoView({ behavior: "smooth" });
}
