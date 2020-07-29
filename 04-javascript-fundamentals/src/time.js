function dateDiff(date1, date2){
    const diff = Math.abs(date1 - date2)
    return diff //milliseconds
}

const today = new Date()
const otherDate = new Date(1945, 9, 2)

console.log(today)
console.log(otherDate)

let difference = dateDiff(today, otherDate)

console.log(difference)

function millisecondsToYears(ms){
    const msInADay = 1000 * 60 * 60 * 24 * 365
    return Math.floor(ms / msInADay)
}

let diffYears = millisecondsToYears(difference)
console.log(`There have passed ${diffYears} years between the two given dates`)