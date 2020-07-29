const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')

const LEVELS = 10

class Game {
    constructor(){
        this.colors = [celeste, violeta, naranja, verde]
        this.followSequence = this.followSequence.bind(this)
        this.addEventListeners()
        this.sequence = Array(LEVELS).fill(0).map(() => Math.floor(Math.random() * 4))
        this.currentlevel = 1
        this.correctcolors = 0
    }

    addEventListeners(){
        celeste.addEventListener('click', this.followSequence)
        violeta.addEventListener('click', this.followSequence)
        naranja.addEventListener('click', this.followSequence)
        verde.addEventListener('click', this.followSequence)
    }

    removeEventListeners() {
        celeste.removeEventListener('click', this.followSequence)
        violeta.removeEventListener('click', this.followSequence)
        naranja.removeEventListener('click', this.followSequence)
        verde.removeEventListener('click', this.followSequence)
    }

    restartGame() {
        this.removeEventListeners()
        btnEmpezar.classList.remove('hide')
    }

    lightSequence() {
        let timeout = 500
        for (let x = 0; x < this.currentlevel; x++){
            setTimeout(() => this.colors[this.sequence[x]].classList.add('light'), timeout)
            timeout += 500
            if (x === this.currentlevel-1){
                setTimeout(() => {
                    this.colors[this.sequence[x]].classList.remove('light')
                    this.addEventListeners()
                }, timeout);
            } else {
                setTimeout(() => this.colors[this.sequence[x]].classList.remove('light'), timeout);
                timeout += 500
            }
        }
    }

    colorToNumber( color ){
        switch(color){
            case 'celeste':
                return 0
            case 'violeta':
                return 1
            case 'naranja':
                return 2
            case 'verde':
                return 3
        }
    }

    followSequence(event){
        let color = event.srcElement
        color.classList.add('light')
        setTimeout(() => color.classList.remove('light'), 250)
        let number = this.colorToNumber(color.id) 
        if (number === this.sequence[this.correctcolors]) {
            this.correctcolors += 1
        } else {
            this.correctcolors = 0
            swal("Oh no!", "You loose!", "error").then(
                () => this.restartGame()
            )
            
        }
        if (this.correctcolors === this.currentlevel){
            this.currentlevel += 1
            this.correctcolors = 0
            swal("Nice!", "Next level!", "success").then(
                () => this.gameOn()
            )
        }
        if (this.currentlevel > LEVELS){
            swal("Nice!", "You won!", "success").then(
                () => this.restartGame()
            )   
        }
    }

    gameOn(){
        this.removeEventListeners()
        this.lightSequence()
    }
}

let simon

function empezarJuego() {
    btnEmpezar.classList.add('hide')
    simon = new Game()
    simon.gameOn()
}