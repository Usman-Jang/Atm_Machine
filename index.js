#! /usr/bin/env node
import inquirer from "inquirer";
let my_Balance = 50000;
let my_pin = 12345;
let pin_check = await inquirer.prompt([
    { message: "Enter Your Pin", type: "number", name: "pin" },
]);
if (pin_check.pin === my_pin) {
    let list_ans = await inquirer.prompt([
        { message: "Select any Option", type: "list", name: "list", choices: ["withdraw", "check balance"] },
    ]);
    if (list_ans.list === "withdraw") {
        let amount = await inquirer.prompt([
            { message: "Enter Your Amount", type: "number", name: "amount" },
        ]);
        if (amount.amount <= my_Balance && amount.amount >= 500) {
            my_Balance -= amount.amount;
            console.log("Your remaining balance is: " + my_Balance);
        }
        else {
            console.log("insufficient balance");
        }
    }
    else if (list_ans === "check balance") {
        console.log("Your balance is: " + my_Balance);
    }
}
else {
    console.log("invalid pin");
}
