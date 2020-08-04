class AutoPlay {
    run(player) {
        this.player = player
        this.player.mute()
        this.player.play()
    }
}

export default AutoPlay