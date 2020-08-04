import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'
import AdsPlugin from './plugins/Ads/index.js'

const video = document.querySelector('video')
const play = document.getElementById('play')
const mute = document.getElementById('mute')

const player = new MediaPlayer({ el: video, 
    plugins: [ new AutoPlay() , new AutoPause()]})

play.addEventListener('click', () => {
    if (player.getPaused()){
        player.play()
    } else {
        player.pause()
    }
})

mute.addEventListener('click', () => {
    player.mute()
})

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(error => {
        console.log(error.message)
    })
}