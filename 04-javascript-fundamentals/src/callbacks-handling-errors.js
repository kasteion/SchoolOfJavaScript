var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const URL = 'https://swapi.dev/api/people/'

function getCharacter(id, callback){
    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function(){
        if(this.readyState == 4){
            if (this.status == 200){
                callback(JSON.parse(this.responseText))
            } else if (this.status >= 400) {
                console.log(`There was an error. Could not get character id: ${id}`)
            }
        }
    }
    xhr.open('GET', `${URL}${id}/`, true)
    xhr.send()
}

// CallBack Hell!!!
getCharacter(1, ({ name }) => {
    console.log(`Hello, my name is ${ name }`)
    getCharacter(2, ({ name }) => {
        console.log(`Hello, my name is ${ name }`)
        getCharacter(3, ({ name }) => {
            console.log(`Hello, my name is ${ name }`)
            getCharacter(100, ({ name }) => {
                console.log(`Hello, my name is ${ name }`)
                getCharacter(5, ({ name }) => {
                    console.log(`Hello, my name is ${ name }`)
                })
            })
        })
    })
})