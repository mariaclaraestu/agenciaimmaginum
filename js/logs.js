const pesquisa = document.querySelector(".painel-pesquisa input");

const filtros = document.querySelectorAll(".filtros select");

const cards = document.querySelectorAll(".log-card");

function filtrarLogs() {
  const texto = pesquisa.value.toLowerCase();

  const categoria = filtros[0].value.toLowerCase();

  const departamento = filtros[1].value.toLowerCase();

  const status = filtros[2].value.toLowerCase();

  cards.forEach((card) => {
    const conteudo = card.textContent.toLowerCase();

    const categoriaCard =
      card.querySelector(".informacoes")?.textContent.toLowerCase() || "";

    const statusCard =
      card.querySelector(".status")?.textContent.toLowerCase() || "";

    let mostrar = true;

    // Pesquisa por texto
    if (!conteudo.includes(texto)) {
      mostrar = false;
    }

    // Categoria
    if (
      categoria !== "todas as categorias" &&
      !categoriaCard.includes(categoria)
    ) {
      mostrar = false;
    }

    // Departamento
    if (
      departamento !== "todos os departamentos" &&
      !categoriaCard.includes(departamento)
    ) {
      mostrar = false;
    }

    // Status
    if (status !== "todos os status" && !statusCard.includes(status)) {
      mostrar = false;
    }

    card.style.display = mostrar ? "block" : "none";
  });
}

pesquisa.addEventListener("input", filtrarLogs);

filtros.forEach((filtro) => {
  filtro.addEventListener("change", filtrarLogs);
});
