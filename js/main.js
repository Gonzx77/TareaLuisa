const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
const topBtn = document.getElementById("topBtn");

// Menú móvil
menuBtn.addEventListener("click", () => {
  mainNav.classList.toggle("open");

  menuBtn.textContent = mainNav.classList.contains("open")
    ? "✕"
    : "☰";
});

// Cerrar menú al seleccionar una sección
document.querySelectorAll("#mainNav a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuBtn.textContent = "☰";
  });
});

// Mostrar botón "volver arriba"
window.addEventListener("scroll", () => {
  topBtn.classList.toggle("show", window.scrollY > 500);
});

// Volver al inicio
topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Animaciones al entrar en pantalla
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

// Aplicar animación a todos los elementos .reveal
document.querySelectorAll(".reveal").forEach(element => {
  observer.observe(element);
});