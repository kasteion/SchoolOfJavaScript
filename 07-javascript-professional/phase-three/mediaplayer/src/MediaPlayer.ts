class MediaPlayer {
    video: HTMLMediaElement
    plugins: Array<any>
    container: HTMLElement
    
    constructor(config){
        this.video = config.el
        this.plugins = config.plugins
        this.initPlayer()
        this.initPlugins()
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

    initPlayer() {
        this.container = document.createElement('div')
        this.container.style.position = 'relative'
        this.video.parentNode.insertBefore(this.container, this.video)
        this.container.appendChild(this.video)
    }

    initPlugins() {
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