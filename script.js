function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function handleSubmit(e) {
  e.preventDefault();
  alert("Mensagem enviada! Aqui você pode integrar com um backend ou serviço de email.");
  e.target.reset();
}

// Animação simples das barras de skill ao carregar
window.addEventListener("load", () => {
  document.querySelectorAll(".progress-fill").forEach((bar) => {
    const value = bar.getAttribute("data-progress") || 0;
    requestAnimationFrame(() => {
      bar.style.width = value + "%";
    });
  });
});