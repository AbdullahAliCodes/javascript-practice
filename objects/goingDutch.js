function goingDutch(amount, numOfPeople, tip) {
    tipAmt = tip/100 * amount;
    amtPerPerson = Math.ceil((amount+tipAmt)/numOfPeople);

    return amtPerPerson;
}

console.log(goingDutch(1500, 4, 10))











