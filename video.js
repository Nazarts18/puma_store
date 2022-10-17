let playBtn = document.getElementById("play-btn");
let video = document.querySelector(".video");
let progressBar = document.querySelector(".progress-bar");
let progressRange = document.querySelector(".progress-range");
let volumeRange = document.querySelector(".volume-range");
let volumeIcon = document.getElementById('volume-icon')
let fullsreenBtn = document.querySelector('.fullscreen')
let speed = document.querySelector('.player-speed')





function displayTime(time) {
  const minutes = Math.floor(time / 60)
  let seconds = Math.floor(time % 60)
  seconds = seconds > 9 ? seconds : `0${seconds}`
  return `${minutes}:${seconds}`
}

let isVideoPlaying = false;

function playOrPauseVideo() {
    if(!isVideoPlaying ) {
        video.play();
        isVideoPlaying = true;
        playBtn.classList.replace('fa-play', 'fa-pause');
    } else {
        video.pause();
        isVideoPlaying = false;
        playBtn.classList.replace('fa-pause', 'fa-play');

    }
}



function updateProgressbar(event) {
    console.log(event.target.currentTime, event.target.duration);
    let currentTime = event.target.currentTime 
    let duration = event.target.duration

    progressBar.style.cssText = `
        width: ${(currentTime / duration)* 100}%
        `;    
    
}

function updateSeekbar(event){

    let calculateWidth = progressRange.getBoundingClientRect();
    console.log(calculateWidth);

    console.log(event.offsetX, event.target.clientWidth);
    let currentPoint = event.offsetX;
    let progresbarWidth = event.target.clientWidth;
    let currentRange = (currentPoint / progresbarWidth) * video.duration;
    video.currentTime = currentRange;
}

function openFullscreen(elem) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { 
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
    video.classList.add('video-fullscreen')
  }
  

  function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { 
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { 
      document.msExitFullscreen();
    }
    video.classList.remove('video-fullscreen')
  }

  function toggleFullscreen() {
    if (!fullscreen) {
      openFullscreen(playBtn);
    } else {
      closeFullscreen();
    }
    fullscreen = !fullscreen;
  }
  let fullscreen = false

  function changeSpeed() {
    video.playbackRate = speed.value
  }



playBtn.addEventListener("click", playOrPauseVideo);
video.addEventListener("click", playOrPauseVideo);
video.addEventListener('timeupdate', updateProgressbar);
progressRange.addEventListener('click', updateSeekbar);
fullsreenBtn.addEventListener("click", toggleFullscreen)
speed.addEventListener("change", changeSpeed);


function test() {
    
}








