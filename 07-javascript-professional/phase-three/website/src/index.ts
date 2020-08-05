import MediaPlayer from '@kasteion/platzimediaplayer/lib/MediaPlayer'
import AutoPlay from '@kasteion/platzimediaplayer/lib/plugins/AutoPlay'
import AutoPause from '@kasteion/platzimediaplayer/lib/plugins/AutoPause'
import Ads from '@kasteion/platzimediaplayer/lib/plugins/Ads'

const video: HTMLVideoElement = document.querySelector('video')
const play: HTMLElement = document.getElementById('play')
const mute: HTMLElement = document.getElementById('mute')

const player = new MediaPlayer({ el: video, 
    plugins: [ new AutoPlay() , new AutoPause(), new Ads()]})

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