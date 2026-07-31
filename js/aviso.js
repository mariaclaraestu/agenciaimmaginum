const telaAviso = document.getElementById("tela-aviso");
const telaLoading = document.getElementById("tela-loading");

const etapa = document.getElementById("etapa");
const barra = document.getElementById("barra");
const resultado = document.getElementById("resultado");

const statusFinal = document.getElementById("status-final");

const aviso = document.getElementById("aviso");

const primeiraVisita = localStorage.getItem("immaginumPrimeiraVisita") === null;

/*
====================================================
BOTÃO PROSSEGUIR
====================================================
*/

async function entrar() {
  telaAviso.classList.add("hidden");

  telaLoading.classList.remove("hidden");

  if (primeiraVisita) {
    await inicializacaoCompleta();

    localStorage.setItem("immaginumPrimeiraVisita", "true");
  } else {
    await inicializacaoRapida();
  }

  finalizar();
}

/*
====================================================
PRIMEIRA INICIALIZAÇÃO
====================================================
*/

async function inicializacaoCompleta() {
  await carregarEtapa("Baixando Núcleo", 400);

  await carregarEtapa("Estabilizando Nexus", 400);

  await carregarEtapa("Sincronizando Multiverso", 400);

  mostrarStatus();

  await esperar(1200);
}

/*
====================================================
INICIALIZAÇÃO RÁPIDA
====================================================
*/

async function inicializacaoRapida() {
  await carregarEtapa("Conectando Núcleo", 200);

  await carregarEtapa("Verificando Nexus", 200);

  await carregarEtapa("Sincronizando Multiverso", 200);

  mostrarStatus();

  await esperar(700);
}

/*
====================================================
CARREGAMENTO DAS ETAPAS
====================================================
*/

async function carregarEtapa(nome, tempo) {
  resultado.innerHTML = "";

  barra.style.width = "0%";

  etapa.innerHTML = nome;

  etapa.style.display = "block";

  barra.parentElement.style.display = "block";

  let progresso = 0;

  let intervalo = setInterval(() => {
    progresso += 5;

    barra.style.width = progresso + "%";

    if (progresso >= 100) {
      clearInterval(intervalo);
    }
  }, 40);

  await esperar(tempo);

  barra.style.width = "100%";

  resultado.innerHTML = "✓";

  await esperar(400);

  // limpa antes da próxima etapa

  barra.style.width = "0%";

  resultado.innerHTML = "";

  etapa.innerHTML = "";
}

/*
====================================================
MOSTRAR PAINEL FINAL
====================================================
*/

function mostrarStatus() {
  // esconde carregamento

  etapa.style.display = "none";

  barra.parentElement.style.display = "none";

  resultado.style.display = "none";

  // mostra protocolo final

  statusFinal.classList.remove("hidden");

  statusFinal.classList.add("fade-in");
}

/*
====================================================
FECHAR AVISO
====================================================
*/

function finalizar() {
  aviso.classList.add("hidden");
}

/*
====================================================
TIMER
====================================================
*/

function esperar(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const blocos = document.querySelectorAll(".bloco");

const observador = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("aparecer");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

blocos.forEach((bloco) => {
  observador.observe(bloco);
});
