
function functionWithASwitch(option){
    switch(option){
        case 1:
            console.log('Caso 1...')
            break
        case 2:
            console.log('Caso 2...')
            break
        case 3:
            console.log('Caso 3...')
            break
        case 4:
            console.log('Caso 4...')
            break
        case 5:
            console.log('Caso 5...')
            break
        case 6:
        case 7:
            console.log('Caso 6 o 7...')
            break
        case 8:
        case 9:
        case 10:
            console.log('Caso 8, 9 o 10...')
            break
        default:
            console.log('Ese caso no esta contemplado')
    }
}

var option = 1
functionWithASwitch(option)
option = 3
functionWithASwitch(option)
option = 4
functionWithASwitch(option)
option = 9
functionWithASwitch(option)
option = 11
functionWithASwitch(option)