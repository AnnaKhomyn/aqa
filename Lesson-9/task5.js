
const users = [
    { name: "Іван", email: "ivan@example.com", age: 25 },
    { name: "Марія", email: "maria@example.com", age: 22 },
    { name: "Олег", email: "oleg@example.com", age: 30 }
];

for (const user of users) {
    const { name, email, age } = user;
    console.log(`Ім'я: ${name}, Email: ${email}, Вік: ${age}`);
}