const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,18,19,20]

 function getEvenNumbers (numbers) {
    return numbers.filter(number => number % 2 === 0);
}

console.log(getEvenNumbers(numbers))