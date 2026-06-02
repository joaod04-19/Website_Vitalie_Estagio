/* SLIDER DE IMAGENS - PÁGINA PRINCIPAL */
const slides = document.querySelectorAll(".hero-slide");
let index = 0;

function changeSlide() {
    slides[index].classList.remove("active");

    index = (index + 1) % slides.length;

    slides[index].classList.add("active");
}

setInterval(changeSlide, 4000);


/* ------------------------------------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------------------------------------ */

/* LIGAÇÃO COM O WHATTSAPP - PÁGINA DE CONTACTO */
const form = document.getElementById("whatsappForm");

if (form) {

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = document.getElementById("nome").value;
        const servico = document.getElementById("servico").value;
        const mensagem = document.getElementById("mensagem").value;

        const texto = `Olá, gostaria de solicitar um orçamento.
        
            Nome: ${nome}
            Serviço: ${servico}
            Mensagem: ${mensagem}`;

        const numeroEmpresa = "351968439152";

        const url = `https://wa.me/${numeroEmpresa}?text=${encodeURIComponent(texto)}`;

        window.open(url, "_blank");

    });
}