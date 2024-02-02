const botao_play_pause = document.getElementById('play-pause');
const botao_proximo = document.getElementById('proximo');
const botao_anterior = document.getElementById('anterior');
const audio_capitulo = document.getElementById("audio-capitulo");
const numero_capitulos = 10;
let tocando = 0;
let capitulo_atual = 1
const nome_capitulo = document.getElementById('capitulo');

function tocar_faixa() {
    audio_capitulo.play();
    botao_play_pause.classList.remove('bi-play-circle-fill');
    botao_play_pause.classList.add('bi-pause-circle-fill');
}

function pausar_faixa() {
    audio_capitulo.pause();
    botao_play_pause.classList.remove('bi-pause-circle-fill');
    botao_play_pause.classList.add('bi-play-circle-fill');
}

function tocar_pausar() {
    if (tocando === 0) {
        tocar_faixa();
        tocando = 1;
    } else {
        pausar_faixa();
        tocando = 0;
    }
}

function trocar_nome_faixa() {
    nome_capitulo.innerText = 'Capítulo ' + capitulo_atual;
}

function proxima_faixa() {
    if (capitulo_atual === numero_capitulos) {
        capitulo_atual = 1;
    } else {

        capitulo_atual = capitulo_atual + 1;
    }
    audio_capitulo.src = "books/dom-casmurro/" + capitulo_atual + ".mp3";
    tocar_faixa();
    tocando = 1;
    trocar_nome_faixa();
}


function faixa_anterior() {
    if (capitulo_atual === 1) {
        capitulo_atual = numero_capitulos;
    } else {
        capitulo_atual = capitulo_atual - 1;
    }
audio_capitulo.src = "books/dom-casmurro/" + capitulo_atual + ".mp3";
tocar_faixa();
tocando = 1;
trocar_nome_faixa();
}


botao_play_pause.addEventListener('click', tocar_pausar);
botao_proximo.addEventListener('click', proxima_faixa);
botao_anterior.addEventListener('click', faixa_anterior);

