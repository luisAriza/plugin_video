const video = document.querySelector("video");
const btn = document.querySelector("button");

function MediaPlayer(config) {
  this.media = config.el;
}

MediaPlayer.prototype.play = function () {
  this.media.paused ? this.media.play() : this.media.pause();
};

const player = new MediaPlayer({ el: video });

btn.onclick = () => player.play();
