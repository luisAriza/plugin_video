import MediaPlayer from "./app/MediaPlayer";
import AutoPlay from "./app/plugins/AutoPlay";
import AutoPause from "./app/plugins/AutoPause";
import Ads from "./app/plugins/Ads";

const video = document.querySelector("video");
const player = new MediaPlayer({
    elm: video,
    plugins: [new AutoPlay(), new AutoPause(), new Ads()],
});

const playButton: HTMLElement = document.querySelector("#playButton");
playButton.onclick = () => player.togglePlay();

const muteButton: HTMLElement = document.querySelector("#muteButton");
muteButton.onclick = () => {
  if (player.media.muted) {
    player.unmute();
  } else {
    player.mute();
  }
};

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").catch((error) => {
    console.log(error.message);
  });
}
