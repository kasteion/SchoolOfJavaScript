class MediaPlayer {
    constructor(config){
        this.video = config.el
        this.plugins = config.plugins
        this.initPlayers()
        this.getPaused = this.getPaused.bind(this)
    }

    play() {
        this.video.play()
    }

    pause() {
        this.video.pause()
    }

    mute() {
        if (this.video.muted){
            this.video.muted = false;
        } else {
            this.video.muted = true;
        }
    }

    initPlayers() {
        // const player = {
        //     play: () => this.play(),
        //     pause: () => this.pause(),
        //     mute: () => this.mute(),
        //     video: this.video
        // }

        this.plugins.forEach(element => {
            element.run(this)
        });
    }

    getPaused() {
        return this.video.paused
    }
}

export default MediaPlayer