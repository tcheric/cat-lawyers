// Video media controls
var video = document.getElementById("toonces")
video.volume = 0.5

var currPlaying = 1
var playIcon = document.getElementById("playback")
const togglePlayPause = () => {
  if (currPlaying) {
    video.pause()
    playIcon.innerHTML = '<i class="ph-play"></i>'
    currPlaying = 0
  } else {
    video.play()
    playIcon.innerHTML = '<i class="ph-pause"></i>'
    currPlaying = 1
  }
}

var volIcon = document.getElementById("volume")
const toggleVolume = () => {
  if (video.muted) {
    video.muted = false
    volIcon.innerHTML = '<i class="ph-speaker-simple-high"></i>'
  } else {
    video.muted = true
    volIcon.innerHTML = '<i class="ph-speaker-simple-slash"></i>'
  }
}
