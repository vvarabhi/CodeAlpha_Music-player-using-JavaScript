const progress = document.getElementById("progress");
const song = document.getElementById("song");
const controlIcon = document.getElementById("controlIcon");
const playPauseButton = document.querySelector(".play-pause-btn");
const forwardButton = document.querySelector(".controls button.forward");
const backwardButton = document.querySelector(".controls button.backward");
const songName = document.querySelector(".music-player h1");
const artistName = document.querySelector(".music-player p");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");

const songs = [
  {
    title: "Souraa",
    name: "Anirudh Ravichander",
    source: "Souraa.mp3",
  },
  {
    title: "Fear Song",
    name: "Anirudh Ravichander",
    source: "Fear.mp3",
  },
  {
    title: "Vintunnavaa",
    name: "A.R.Rahman",
    source: "Vintunnavaa.mp3",
  },
  {
    title: "Oh Prema",
    name: "Kapil Kapilan",
    source: "Oh Prema.mp3",
  },
  {
    title: "Pavizha Mazha",
    name: "KS Harisanker,",
    source: "Pavizha-Mazha.mp3",
  },
  
  {
    title: "Ok Anesa ",
    name: "Naresh Lyer",
    source: "Ok Anesa.mp3",
  },
  {
    title: "Anuvanuvuu",
    name: "Sree Vishnu",
    source: "Anuvanuvuu.mp3",
  },
  {
    title: "Naalone Pongenu",
    name: "Harish Ragavendra",
    source: "Naalona Pongenu.mp3",
  },
];



let currentSongIndex = 3;

function updateSongInfo() {
  songName.textContent = songs[currentSongIndex].title;
  artistName.textContent = songs[currentSongIndex].name;
  song.src = songs[currentSongIndex].source;

  song.addEventListener("loadeddata", function () {
    
  });
}


song.addEventListener("timeupdate", function () {
  if (!song.paused) {
    progress.value = song.currentTime;
    currentTimeEl.textContent = formatTime(song.currentTime);
  }
});



song.addEventListener("loadedmetadata", function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
  durationEl.textContent = formatTime(song.duration);
});


function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}


function pauseSong() {
  song.pause();
  controlIcon.classList.remove("fa-pause");
  controlIcon.classList.add("fa-play");
}



function playSong() {
  song.play();
  controlIcon.classList.add("fa-pause");
  controlIcon.classList.remove("fa-play");
}



function playPause() {
  if (song.paused) {
    playSong();
  } else {
    pauseSong();
  }
}

playPauseButton.addEventListener("click", playPause);



progress.addEventListener("input", function () {
  song.currentTime = progress.value;
});



progress.addEventListener("change", function () {
  playSong();
});



forwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateSongInfo();
  playPause();
});


backwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updateSongInfo();
  playPause();
});

updateSongInfo();

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  centeredSlides: true,
  initialSlide: 3,
  slidesPerView: "auto",
  allowTouchMove: false,
  spaceBetween: 40,
  coverflowEffect: {
    rotate: 25,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".forward",
    prevEl: ".backward",
  },
});
