function MediaPlayer(config) {
  this.media = config.el;
  this.plugins = config.plugins || [];
  this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function () {
  this.plugins.forEach((elements) => {
    elements.run(this);
  });
};

MediaPlayer.prototype.play = function () {
  this.media.paused ? this.media.play() : this.media.pause();
};

MediaPlayer.prototype.mute = function () {
  this.media.muted = true;
};

MediaPlayer.prototype.muteUnmute = function () {
  this.media.muted ? (this.media.muted = false) : (this.media.muted = true);
};

export default MediaPlayer;
