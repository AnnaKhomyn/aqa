const getAge = (age) => age >= 20

const getAgeMessage = (isOlder) => {
    if (isOlder) {
        return 'You are old';
    }
    if (!isOlder) {
        return 'You are young';
    }
}

console.log (getAge(19));
console.log (getAge(22));