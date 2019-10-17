window.onload = slideEffect();

function slideEffect(){
    console.log('started');
    const animationSlider = document.getElementsByClassName('animationSlider')[0];
    animationSlider.classList.add('loadingScreen');
    setTimeout(function(){
        animationSlider.classList.remove('loadingScreen');
    }, 900);

};