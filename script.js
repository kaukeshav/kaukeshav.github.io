// Add smooth scrolling to sections
const sections = document.querySelectorAll('section');

sections.forEach((section) => {
  const sectionId = section.getAttribute('id');
  const sectionAnchor = document.querySelector(`a[href="#${sectionId}"]`);

  sectionAnchor.addEventListener('click', (e) => {
    e.preventDefault();

    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    });
  });
});
