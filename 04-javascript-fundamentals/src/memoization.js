this.cache = {}

function factorialWithMemorization(n){
    if (!this.cache){
        this.cache = {}
    }

    if (this.cache[n]) {
        return this.cache[n]
    }

    if (n === 1) {
        return 1
    }

    this.cache[n] = n * factorialWithMemorization(n - 1)
    return this.cache[n]
}

let factorial12 = factorialWithMemorization(12)
let factorial20 = factorialWithMemorization(20)
console.log(factorial12)
console.log(factorial20)
console.log(this.cache)