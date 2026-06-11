let imagens = [
    "IMG_tcc261.jpeg",
    "IMG_tcc262.jpeg"
];

let index = 0;

function atualizarImagem() {
    document.getElementById("imagem").src = imagens[index];
}

function proxima() {
    index++;

    if (index >= imagens.length) {
        index = 0;
    }

    atualizarImagem();
}

function anterior() {
    index--;

    if (index < 0) {
        index = imagens.length - 1;
    }

    atualizarImagem();
}

setInterval(proxima, 3000);