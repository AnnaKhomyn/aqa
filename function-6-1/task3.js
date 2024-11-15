function checkOrder(available, ordered) {
    if (available < ordered)
        return "Your order is too large, we don't have enough goods.";
    if (available >= ordered)
        return "Your order is accepted, we will deliver it as soon as possible.";
    if (ordered === 0)
        return "Your order is empty";
}

console.log (checkOrder(100, 111));
console.log (checkOrder(100, 100));
console.log (checkOrder(100, 99));