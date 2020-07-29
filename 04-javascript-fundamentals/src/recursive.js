function factorial(n){
    if (n === 1) {
        return 1
    }
    return n * factorial(n - 1)
}

let n = 12
let factorialOfN = factorial(12)
console.log(`Factorial of ${n} is ${factorialOfN}`)