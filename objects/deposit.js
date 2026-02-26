
// Given Input
const account1 = { balance: 100 };
const account2 = { balance: 50 };

// Your code here
let account = {balance: 0}

function deposit(account, amount) {
    account.balance += amount
    return account.balance
}

function withdraw(account, amount) {
    if (account.balance) {
        account.balance -= amount
    }
    else {
        return "You do not have enough funds"
    }
    
    return account.balance
}

function getBalance(account) {
    return account.balance
}

function transfer(fromAccount, toAccount, amount) {
    if(fromAccount.balance) {
        withdraw(fromAccount, amount)
        deposit(toAccount, amount)
    }
    else {
        return "You do not have enough funds"
    }
    
    return fromAccount.balance
}



// Output
console.log(deposit(account1, 50)); // Output: 150
console.log(withdraw(account1, 30)); // Output: 120
console.log(getBalance(account1));  // Output: 120
console.log(transfer(account1, account2, 20)); // Output: 100 (fromAccount's balance after transfer)
console.log(getBalance(account2)); // Output: 70 (toAccount's balance after transfer)
