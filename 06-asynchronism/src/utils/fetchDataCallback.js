let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

function fetchDataCallback(url, callback){
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4){
            if (xhr.status === 200){
                callback(null, JSON.parse(xhr.responseText))
            } else {
                let error = new Error(`Error:  ${xhr.status}`)
                callback(error, null)
            }
        }
    }
    xhr.send()
}

module.exports = fetchDataCallback