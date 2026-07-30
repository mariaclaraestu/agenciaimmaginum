/*
====================================================
MOTOR DE PORTAIS DIMENSIONAIS
AGÊNCIA IMMAGINUM
====================================================
*/


// ====================================================
// BANCO DE DADOS DOS UNIVERSOS
// ====================================================


const universos = {


    cthulhu:{
        nome:"CALL OF CTHULHU",
        assinatura:"ENTIDADE ABISSAL DETECTADA",
        cor:"#8b4dff",
        descricao:
        "Um universo de horror cósmico onde investigadores enfrentam criaturas antigas, mistérios proibidos e forças que ultrapassam a compreensão humana."
    },


    cyberpunk:{
        nome:"CYBERPUNK RED",
        assinatura:"SINAL DIGITAL CORROMPIDO",
        cor:"#00ffff",
        descricao:
        "Uma realidade futurista dominada por tecnologia, megacorporações e sobreviventes tentando encontrar seu espaço em uma sociedade quebrada."
    },


    dnd:{
        nome:"DUNGEONS & DRAGONS",
        assinatura:"ENERGIA ARCANA ESTABILIZADA",
        cor:"#ffd86b",
        descricao:
        "Um universo de fantasia medieval repleto de magia, criaturas lendárias, heróis e aventuras além dos limites conhecidos."
    },


    ordem:{
        nome:"ORDEM PARANORMAL",
        assinatura:"ATIVIDADE DO OUTRO LADO",
        cor:"#ff003c",
        descricao:
        "Agentes investigam acontecimentos paranormais e enfrentam ameaças vindas de uma dimensão desconhecida chamada Outro Lado."
    },


    kuro:{
        nome:"KURO",
        assinatura:"REDE HOLOGRÁFICA ONLINE",
        cor:"#00eaff",
        descricao:
        "Uma mistura de cyberpunk e sobrenatural onde tecnologia avançada encontra espíritos e fenômenos inexplicáveis."
    },


    pathfinder:{
        nome:"PATHFINDER",
        assinatura:"BIOMA DIMENSIONAL DETECTADO",
        cor:"#5cff8a",
        descricao:
        "Um mundo fantástico cheio de magia, monstros, exploração e grandes jornadas."
    },


    assimilacao:{
        nome:"ASSIMILAÇÃO",
        assinatura:"FORMA ORGÂNICA INVADINDO",
        cor:"#75ff00",
        descricao:
        "Uma realidade onde formas alienígenas e mutações alteram tudo ao redor."
    },


    vampiro:{
        nome:"VAMPIRO A MÁSCARA",
        assinatura:"PRESENÇA SOMBRIA DETECTADA",
        cor:"#b30024",
        descricao:
        "Um mundo oculto onde vampiros vivem nas sombras tentando controlar sua própria natureza."
    },


    old:{
        nome:"OLD DRAGON",
        assinatura:"GRIMÓRIO ANTIGO CONECTADO",
        cor:"#e5a34b",
        descricao:
        "Um sistema clássico de fantasia medieval inspirado nas primeiras gerações dos RPGs."
    },


    tormenta:{
        nome:"TORMENTA 20",
        assinatura:"CAOS DIMENSIONAL INSTÁVEL",
        cor:"#ff1744",
        descricao:
        "Um universo de fantasia brasileira com deuses, guerras, magia e grandes ameaças."
    },


    tagmar:{
        nome:"TAGMAR",
        assinatura:"ARQUIVO ANCESTRAL ABERTO",
        cor:"#c89b55",
        descricao:
        "Um dos primeiros RPGs brasileiros, focado em fantasia medieval e grandes aventuras."
    },


    "sistema-3det":{
        nome:"3D&T",
        assinatura:"NÍVEL DE PODER ELEVADO",
        cor:"#ffea00",
        descricao:
        "Um sistema inspirado em animes, jogos e histórias de ação com poderes extraordinários."
    },


    "sistema-7mar":{
        nome:"7 MAR",
        assinatura:"CORRENTE OCEÂNICA DETECTADA",
        cor:"#00bfff",
        descricao:
        "Um mundo de piratas, exploração marítima, aventuras e intrigas."
    },


    "sistema-6d6":{
        nome:"SISTEMA 6D6",
        assinatura:"PROBABILIDADE CALCULADA",
        cor:"#d65cff",
        descricao:
        "Um sistema narrativo baseado em escolhas, possibilidades e consequências."
    }


};




// ====================================================
// DETECTAR PORTAIS
// ====================================================


const portais =
document.querySelectorAll(".box");





portais.forEach(portal=>{


    let universoEncontrado;



    Object.keys(universos).forEach(classe=>{


        if(portal.classList.contains(classe)){


            universoEncontrado =
            universos[classe];


        }


    });




    if(!universoEncontrado)
    return;





    // HOVER


    portal.addEventListener("mouseenter",()=>{


        ativarPortal(
            portal,
            universoEncontrado
        );


    });





    portal.addEventListener("mouseleave",()=>{


        limparPortal(portal);


    });





    // CLIQUE


    portal.addEventListener("click",()=>{


        abrirUniverso(
            universoEncontrado
        );


    });



});






// ====================================================
// ATIVAR PORTAL
// ====================================================


function ativarPortal(portal, universo){


    portal.style.setProperty(
        "--energia",
        universo.cor
    );



    criarInterface(
        portal,
        universo
    );



    criarParticulas(
        portal,
        universo.cor
    );


}







// ====================================================
// PAINEL MIRA NO CARD
// ====================================================


function criarInterface(portal, universo){



    if(portal.querySelector(".mira-portal"))
    return;



    let painel =
    document.createElement("div");



    painel.className =
    "mira-portal";



    painel.innerHTML = `


    <span>
    ASSINATURA DIMENSIONAL
    </span>


    <strong>
    ${universo.nome}
    </strong>


    <small>
    ${universo.assinatura}
    </small>


    <small>
    CONTENÇÃO: 94%
    </small>


    `;



    portal.appendChild(painel);


}







// ====================================================
// PARTÍCULAS
// ====================================================


function criarParticulas(portal,cor){



    for(let i=0;i<18;i++){



        let particula =
        document.createElement("span");



        particula.className =
        "particula";



        particula.style.background =
        cor;



        particula.style.left =
        Math.random()*100+"%";



        particula.style.animationDelay =
        Math.random()*3+"s";



        portal.appendChild(
            particula
        );


    }


}







// ====================================================
// LIMPAR PORTAL
// ====================================================


function limparPortal(portal){



    let painel =
    portal.querySelector(
        ".mira-portal"
    );


    if(painel)
    painel.remove();




    portal.querySelectorAll(
        ".particula"
    )
    .forEach(p=>p.remove());


}







// ====================================================
// JANELA DE INFORMAÇÕES
// ====================================================


function abrirUniverso(universo){



    const janela =
    document.getElementById(
        "janelaUniverso"
    );



    const titulo =
    document.getElementById(
        "tituloUniverso"
    );



    const texto =
    document.getElementById(
        "textoUniverso"
    );



    titulo.innerHTML =
    universo.nome;



    texto.innerHTML = `


    <b>
    STATUS:
    </b>
    UNIVERSO ANALISADO
    <br><br>


    <b>
    ASSINATURA:
    </b>
    ${universo.assinatura}


    <br><br>


    ${universo.descricao}


    `;



    janela.classList.add(
        "ativa"
    );



}







function fecharUniverso(){


    document
    .getElementById(
        "janelaUniverso"
    )
    .classList.remove(
        "ativa"
    );


}






// fechar clicando fora


document
.getElementById("janelaUniverso")
?.addEventListener(
"click",
(e)=>{


if(e.target.id==="janelaUniverso"){


    fecharUniverso();


}


});