function slideEffect(){
    function toggleButtons(toggle){
        for(button of buttons){
            button.style.pointerEvents = toggle;
        }
    }
    const animationSlider = document.getElementsByClassName('animationSlider')[0];
    const buttons = document.getElementsByClassName('btn');
    // Block buttons until animation is finished
    toggleButtons('none');
    animationSlider.classList.add('loadingScreen');
    setTimeout(function(){
        // Unblock buttons
        toggleButtons('');
        animationSlider.classList.remove('loadingScreen');
    }, 900);
};

slideEffect();