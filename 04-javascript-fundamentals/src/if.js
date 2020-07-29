var mike = {
    name: 'Mike',
    surname: 'Regent',
    age: 27,
    javascript: true,
    php: true,
    csharp: false
}

function printLanguages(person){
    console.log(`${person.name} ${person.surname}:`)
    if (person.javascript){
        console.log('- Programs in JavaScript')
    } else 
    {
        console.log('- Does not program in JavaScript')
    }
    if (person.php) {
        console.log('- Programs in PHP')
    } else
    {
        console.log('- Does not program in PHP')
    }
    if (person.csharp){
        console.log('- Programs in C#')
    } else {
        console.log('- Does not program in C#')
    }
}

printLanguages(mike)