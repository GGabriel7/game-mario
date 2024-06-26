// Pulo
const mario = document.querySelector('.mario')
function jump() {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 700)
}

//Game Over
const pipe = document.querySelector('.pipe');
const gameover = document.querySelector('.gameover')

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 75 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        
        mario.src = '../imagens/mariomorto.png'
        mario.style.width = '70px'

        gameover.style.display = 'block'

        clearInterval(loop)
    }
}, 10);

// Reconhecimento do botão
document.addEventListener('keyup', function(tecla) {
    if (tecla.code === 'Space') {
        jump()
    }
});

// Reiniciar a Página
const restart = document.getElementById('botao');
restart.addEventListener('click', () => {
    location.reload();
});