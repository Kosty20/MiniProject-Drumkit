
const keyBtn = document.querySelectorAll('.key');
const audioElement = new Audio('sounds/clap.wav');

window.onkeydown = (e) => {
    for(btn of keyBtn){
        if(btn.dataset.key === e.code){
            btn.classList.add('active');
        }
    }

    switch(e.code){
        case 'KeyA': audioElement.currentTime = 0; audioElement.play();
    }
}
window.onkeyup = (e) => {
    for(btn of keyBtn){
        if(btn.dataset.key === e.code){
            btn.classList.remove('active');
        }
    }
}
