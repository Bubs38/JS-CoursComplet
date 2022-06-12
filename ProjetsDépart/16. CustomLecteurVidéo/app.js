const video = document.querySelector('.video');
const btnPausePlay = document.getElementById('play-pause');
const img = document.querySelector('#play-pause img');
const barreOrange = document.querySelector('.barre-orange');
const juice = document.querySelector('.juice')
const muteBtn = document.getElementById('mute');
const fullscreen = document.getElementById('fullscreen');
const volumeSlider = document.getElementById('volume-slider')


// Play et Pause

btnPausePlay.addEventListener('click', togglePlayPause);
video.addEventListener('click', togglePlayPause);

function togglePlayPause() {
  if(video.paused){
    img.src = "ressources/pause.svg";
    video.play();
  }
  else {
    img.src = "ressources/play.svg";
    video.pause();
  }
}

// Barre Orange 

video.addEventListener('timeupdate', () => {

  let juicePos = video.currentTime / video.duration;

  juice.style.width = juicePos * 100 + "%";

  if(video.ended){
    img.src = "ressources/play.svg";
  }
})

// Volume

volumeSlider.addEventListener('change', () => {

  video.volume = volumeSlider.value / 100;

})

// Mute

muteBtn.addEventListener('click', () => {

  if(video.muted){
    video.muted = false;
    muteBtn.innerText = 'Mute';
  }
  else {
    video.muted = true;
    muteBtn.innerText = "Unmuted"
  }

})

// Cliquer sur la barre de la vidéo

let rect = barreOrange.getBoundingClientRect();
let largeur = rect.width;

barreOrange.addEventListener('click', (e) => {

  let x = e.clientX - rect.left;

  let widthPercent = (x*100/largeur);

  let durationVideo = video.duration;

  //Position en seconde par rapport au pourcentage
  video.currentTime = durationVideo * (widthPercent / 100)
})

window.addEventListener('resize', () => {

  let rect = barreOrange.getBoundingClientRect();
  let largeur = rect.width;

})


//Fullscreen

video.addEventListener('dblclick', () => {
  video.requestFullscreen();
})
fullscreen.addEventListener('click', () => {
  video.requestFullscreen();
})