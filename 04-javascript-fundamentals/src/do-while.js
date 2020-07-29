var counter = 0

const rain = () => Math.random() < 0.25

do {
    counter++
} while (!rain())

if(counter > 1){
    console.log(`I went out to see if there was raining ${counter} times.`)
} else {
    console.log(`I went out to see if there was raining ${counter} time.`)
}