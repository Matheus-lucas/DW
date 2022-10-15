let array = [1, 3, 46]

function sum(array) {
    let sum = 0;
    for (let value of array) {
        sum += value
    } return sum
}

function product(array) {
    let prod = 1;
    for (let value of array) {
        prod *= value
    }
    return prod
}

function sumOdds(array) {
    let sumOdd=0,sumPar = 0;
    for (let value of array) {
        if (value & 1) {
            sumOdd += value
            
        }
        if (!(value & 1)) {
            sumPar += value
        }
    }
    return sumOdd, sumPar
}
console.log(sumOdds(array))