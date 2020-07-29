// Global Scope
var sentence = 'Kasteion is learning JavaScript'

function printSentenceInUperCase(sentence){
    // Function Scope
    sentence = sentence.toUpperCase()
    console.log(sentence)
}

printSentenceInUperCase(sentence)

console.log(sentence)

//console.log(window.sentence)