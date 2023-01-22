
const keyBtn = document.querySelectorAll('.key');


window.onkeydown = (e) => {
    for(btn of keyBtn){
        if(btn.dataset.key === e.code){
            const keyAudio = new Audio(btn.dataset.sound);
            keyAudio.currentTime = 0;
            keyAudio.play();
            btn.classList.add('active');
        }
    }
}
window.onkeyup = (e) => {
    for(btn of keyBtn){
        if(btn.dataset.key === e.code){
            btn.classList.remove('active');
        }
    }
}

keyBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        const clickAudio = new Audio(btn.dataset.sound);
        clickAudio.currentTime = 0;
        clickAudio.play();
    })
})
