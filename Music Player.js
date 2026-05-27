const audio = document.getElementById("audio")

const playBtn = document.getElementById("play-btn")

const progress = document.getElementById("progress")

let isPlaying = false

// PLAY / PAUSE
playBtn.addEventListener("click", () => {

  if(isPlaying){

    audio.pause()

    playBtn.innerText = "▶"

  }
  else{

    audio.play()

    playBtn.innerText = "⏸"

  }

  isPlaying = !isPlaying

})

// UPDATE PROGRESS BAR
audio.addEventListener("timeupdate", () => {

  progress.value = (
    audio.currentTime / audio.duration
  ) * 100

})

// CHANGE SONG TIME
progress.addEventListener("input", () => {

  audio.currentTime = (
    progress.value / 100
  ) * audio.duration

})