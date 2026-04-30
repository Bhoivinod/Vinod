const sections = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      sec.classList.add("active");
    }
  });
});