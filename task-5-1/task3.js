const number = 8;

let step = 1;
const iterations = 10;

const getOutput = (number, step) => {
    return `${number} * ${step} = ${number * step}`;
}

console.log('Iterate using for loop')

for (let step = 1; step <= iterations; step++) {
    console.log(getOutput(number, step))
}

console.log('\nIterate using while loop')

step = 1;
while (step <= iterations) {
    console.log(getOutput(number, step))
    step++;
}
