const numbers = [2, -5, 0, 7, -3, 0, 10, -8]
let positiveCount = 0
let negativeCount  = 0
let zeroCount = 0

for (let index = 0; index < numbers.length; index ++){
    if (numbers[index] > 0){
        positiveCount++
    }else
    if (numbers[index] < 0) {
        negativeCount++
    }else {
        zeroCount++
    }
}

console.log(`Кількість позитивних чисел: ${positiveCount}`)
console.log(`Кількість негативних чисел: ${negativeCount}`)
console.log(`Кількість нульових чисел: ${zeroCount}`)



// function getPositive(numbers) {
//     return numbers.filter(number => number > 0);
// }

// function positiveCount(numbers) {
//     return getPositive(numbers).length;
// }
// console.log(positiveCount(numbers))
// console.log(getPositive(numbers))


