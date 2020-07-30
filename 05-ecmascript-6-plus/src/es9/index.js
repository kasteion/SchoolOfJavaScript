const team = {
    frontend: 'Mike',
    backend: 'Rachele',
    design: 'Harriet',
}

// ES9: LOS ...all
// PARA DESERIALIZE POR UN LADO EL DATA 1 Y POR EL OTRO EL RESTO DEL OBJETO
const { frontend, ...all} = team
console.log(frontend)
console.log(all)

const frontendObj = {
    name: team.frontend,
    age: 27
}

const frontendObj2 = {
    ...frontendObj,
    country: 'US'
}

console.log(frontendObj, frontendObj2)

// ES9: FINALLY
const helloPromise = () => {
    return new Promise((response, reject) => {
        (true)? setTimeout(() => response('Hello World!'), 3000) : reject('Hello World!')
    })
}

helloPromise().then((response) => {
    console.log(response)
}).catch((error) => {
    console.log(error)
}).finally(() => {
    console.log('Ended.')
})


// ES9: EXPRESIONES REGULARES
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20') // match = ["2018-04-20", "2018", "04", "20", index: 0, input: "2018-04-20", groups: undefined]
const year = match[1]
const month = match[2]
const day = match[3]
console.log(match)
console.log(year, month, day)