const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

// Pulo
function jump() {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 700)
}

//Começar com o pipe

function comecar() {
    pipe.classList.add('comecar')
}

//PONTOS
let pontuacao = 0;
let intervalo;
let jogoIniciado = false;

function iniciarJogo() {
    if (!jogoIniciado) {
        jogoIniciado = true;
        intervalo = setInterval(aumentarPontuacao, 2000); // Aumenta a pontuação a cada 2 segundos
    }
}

function aumentarPontuacao() {
    pontuacao += 10;
    document.getElementById('result').textContent = pontuacao;
}

document.body.addEventListener('click', iniciarJogo);
document.body.addEventListener('keyup', iniciarJogo);

//Game Over
const gameover = document.querySelector('.gameover')

const tamanhoTela = window.innerWidth;

let colisao = 75;
let mariocolisao = 80;

if (tamanhoTela <= 500) {
    colisao = 37.5;
    mariocolisao = 40;
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= colisao && pipePosition > 0 && marioPosition < mariocolisao) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        
        mario.src = '../imagens/mariomorto.png'
        if (tamanhoTela > 500) {  
            mario.style.width = '100px'
        } else {
            mario.style.width = '50px'
        }

        clearInterval(intervalo);
        document.getElementById('result').textContent = `SCORE: ${pontuacao}`;
        document.getElementById('result').style.color = 'white'
        document.getElementById('result').style.textShadow = '2px 2px 0 #00ff00, -2px -2px 0 #00ff00, -2px 2px 0 #00ff00, 2px -2px 0 #00ff00'

        gameover.style.display = 'block'

        clearInterval(loop)
    }
}, 10);

// Reiniciar a Página
const restart = document.getElementById('botao');
restart.addEventListener('click', () => {
    location.reload();
});

// Reconhecimento do botão
document.addEventListener('keyup', function(tecla) {
    if (tecla.code === 'Space') {
        jump(), comecar()
    }
});

//Chamando todas as Funções para usar com onclick na tela

window.onload = function() {
    var game = document.querySelector('.game');
    game.addEventListener("click", jump);
    game.addEventListener("click", comecar);
}