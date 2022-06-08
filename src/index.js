import MediaPlayer from "./app/mediaPlayer.js";
import AutoPlay from "./app/plugins/autoPlay.js";
import AutoPause from "./app/plugins/autoPause.js";

const video = document.querySelector("video");

const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause()],
});

const playPause = document.querySelector(".playPause");
playPause.onclick = () => player.play();

const muteUnmute = document.querySelector(".MuteUnmute");
muteUnmute.onclick = () => player.muteUnmute();
