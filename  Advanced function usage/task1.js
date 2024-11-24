function handleNum ( number, isEven, isOdd) {
 if (number % 2 === 0) {
    isEven(number);
 }
 else {
    isOdd(number);
 }
}
    
const isEven = (number ) => {
    console.log(`Number ${number} is even`)
}

const isOdd = (number) => {
    console.log(`Number ${number} is odd`);
}


handleNum(6, isEven, isOdd);

