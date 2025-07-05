// Função para mostrar/ocultar lista de frases
function mostrarFrases() {
  const lista = document.getElementById("frases");
  if (lista.style.display === "none" || lista.style.display === "") {
    lista.style.display = "block";
  } else {
    lista.style.display = "none";
  }
}

// Validação simples do formulário de contato
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formContato");
  if (form) {
    form.addEventListener("submit", function (e) {
      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const mensagem = document.getElementById("mensagem").value.trim();

      if (!nome || !email || !mensagem) {
        alert("Por favor, preencha todos os campos.");
        e.preventDefault();
        return;
      }

      // Validação simples de email (checa se contém "@" e ".")
      if (!email.includes("@") || !email.includes(".")) {
        alert("Por favor, insira um email válido.");
        e.preventDefault();
      }
    });
  }
});
