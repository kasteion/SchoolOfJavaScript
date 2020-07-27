// Esta variable tiene un scope Global
var nameGlobal = 'Kasteion'

function printIsLearning(){
    // pLanguage es local
    var pLanguage = "JavaScript"
    console.log(`${nameGlobal} is learning ${pLanguage}`)
}

printIsLearning()