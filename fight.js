let score = 0;
let countDown = 30;
const scoreBoard = document.getElementById('score-board');
const mosquito = document.createElement('img');

const timer = setInterval(function() {
    let gameOver = false;

    if(document.getElementById('mosquito') === null && gameOver !== true) {
        mosquito.src= 'images/mosquito.svg';
        let x = Math.floor(Math.random() * window.innerWidth - 150);
        let y = Math.floor(Math.random() * window.innerHeight - 150);
        if (x < 0) {
            x = 10;
        } else if (y < 0) {
            y = 10;
        }
        
        mosquito.style.left = x + 'px';
        mosquito.style.top = y + 'px';
        mosquito.id = 'mosquito';
        document.getElementById('main').appendChild(mosquito);
    }

    countDown -= 1;
    document.getElementById('counter').innerHTML = countDown;
    if(countDown <= 0) {
        gameOver = true;
        clearInterval(timer);
        clearInterval(disappear);
        document.body.innerHTML = '<h1>Game Over!!!</h1>';
    }
}, 1000);

const disappear = setInterval(function() {
    if(document.getElementById('mosquito') !== null) {
        document.getElementById('main').removeChild(document.getElementById('mosquito'));
    }
}, 3000);

document.body.addEventListener('click', function(e) {
        if(e.target.id === 'mosquito') {
            //console.log(mosquito);
            mosquito.src= 'images/mosquitoDied.svg';
            
            score += 5;
            scoreBoard.innerHTML = score;
            //e.target.parentNode.removeChild(e.target);
        }
});
