let score = 0;
let countDown = 30;
const scoreBoard = document.getElementById('score-board');
const mosquito = document.createElement('img');

const timer = setInterval(function() {
    let gameOver = false;

    if(document.getElementById('mosquito') === null && gameOver !== true) {
        mosquito.src= 'images/mosquito.svg';
        const myscreenWidth = document.documentElement.clientWidth;
        const myscreenHeight = document.documentElement.clientHeight;
        let x = Math.floor(Math.random() * myscreenWidth);
        let y = Math.floor(Math.random() * myscreenHeight);
        //console.log(myscreenWidth);      

        mosquito.style.top = y + 'px';
        let outHeight = mosquito.offsetHeight;
        if (outHeight > document.documentElement.clientHeight) {
            mosquito.style.top = y - outHeight + 'px';
        };
        mosquito.style.left = x + 'px';
        let outWidth = mosquito.offsetWidth;
        if (outWidth > document.documentElement.clientWidth) {
            mosquito.style.left = x - outWidth + 'px';
        };

        mosquito.id = 'mosquito';
        document.body.appendChild(mosquito);
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
        document.body.removeChild(document.getElementById('mosquito'));
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