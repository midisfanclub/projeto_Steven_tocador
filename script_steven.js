const botao_play_pause = document.getElementById('play-pause');
const botao_proximo = document.getElementById('proximo');
const botao_anterior = document.getElementById ('anterior');
const audio_musica = document.getElementById('audio-musica');
const numero_de_musicas = 18;
const nome_musica = document.getElementById('musica')
let tocando = 0;
let musica_atual = 1;

function tocar_faixa() {
    audio_musica.play();
    botao_play_pause.classList.remove('bi-play-circle-fill');
    botao_play_pause.classList.add('bi-pause-circle-fill');
}

function pausar_faixa() {
    audio_musica.pause();
    botao_play_pause.classList.remove('bi-pause-circle-fill');
    botao_play_pause.classList.add('bi-play-circle-fill');
}

function play_pause() {
    if (tocando === 0) {
        tocar_faixa();
        tocando = 1;
    } else {
        pausar_faixa();
        tocando = 0;
    }
}

function trocar_nome_musica() {
    nome_musica.innerText = 'Música ' + musica_atual;
}


function proxima_musica() {
    if (musica_atual === numero_de_musicas) {
        musica_atual = 1;
        
    } else {
        musica_atual = musica_atual + 1;
    }
    
    audio_musica.src = 'musicas/musicas_steven_1/' + musica_atual + '.mp3';
    tocar_faixa();
    tocando = 1;
    trocar_nome_musica();
}

function musica_anterior() {
    if (musica_atual === 1) {
        musica_atual = numero_de_musicas;
    } else {
        musica_atual = musica_atual - 1;
    }
    audio_musica.src = 'musicas/musicas_steven_1/' + musica_atual + '.mp3';
    tocar_faixa();
    tocando = 1;
    trocar_nome_musica()
}

botao_play_pause.addEventListener('click', play_pause);
botao_proximo.addEventListener('click', proxima_musica);
botao_anterior.addEventListener('click', musica_anterior);
