function devide(numerator, denominator) {
    if (denominator === 0 || typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw Error('Something went wrong');
    }

    return numerator / denominator;
}

console.log(devide(1, 2));

try {
    console.log(devide(1, 0))
} catch (error) {
    console.log(error.message);
} finally {
    console.log('Done');
}

try {
    console.log(devide('1', 2))
} catch (error) {
    console.log(error.message);
} finally {
    console.log('Done');
}

try {
    console.log(devide(1, '2'))
} catch (error) {
    console.log(error.message);
} finally {
    console.log('Done');
}