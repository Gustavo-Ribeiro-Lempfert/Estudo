import { conectaApi } from "./conectaApi.js";
const formulario =document.querySelector("[data-formulario]");

async function criarVideo(evento) {
    evento.preventDefault();

    const imagem =document.querySelector("[data-imagem]").value;
    const url =document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[daat-titulo]").value;
    const descricao = Math.floor(Math.random() * 10).toLocaleString();

    await conectaApi.criaVideo(titulo,descricao,url,imagem);

    window.location.href = "../pages/envio-concluido.html"
}

formulario.addEventListener('submit', evento => criarVideo(evento));