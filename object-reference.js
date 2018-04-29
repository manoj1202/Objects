// challenge
let myAccount = {
    name : 'Andrew',
    expense : 0,
    income : 0
}

let addIncome = function(account , amount){
    account.income = account.income + amount;
    
}

let addExpense = function(account , amount){
    account.expense = account.expense + amount
}

let getAccountSummary = function(account){
    return `Account for ${account.name} has $${account.income - account.expense}. $${account.income} is the income And $${account.expense} is the expense`
}

let resetAccount = function(account){
    account.expense = 0,
    account.income = 0;
    console.log(account);
}

addIncome(myAccount, 1000);
console.log(myAccount);

addExpense(myAccount, 150);
console.log(myAccount);

addExpense(myAccount, 250);
console.log(myAccount);

console.log(getAccountSummary(myAccount));


resetAccount(myAccount)

console.log(getAccountSummary(myAccount));
