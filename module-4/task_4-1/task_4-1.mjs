"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

const _filename = new URL('', import.meta.url).pathname;

const CurrencyTypes = {
  NOK: { value: 1.0000, name: "Norske kroner", denomination: "kr" },
  EUR: { value: 0.0985, name: "Europeiske euro", denomination: "€" },
  USD: { value: 0.1091, name: "United States dollar", denomination: "$" },
  GBP: { value: 0.0847, name: "Pound sterling", denomination: "£" },
  INR: { value: 7.8309, name: "Indiske rupee", denomination: "₹" },
  AUD: { value: 0.1581, name: "Australske dollar", denomination: "A$" },
  PHP: { value: 6.5189, name: "Filippinske peso", denomination: "₱" },
  SEK: { value: 1.0580, name: "Svenske kroner", denomination: "kr" },
  CAD: { value: 0.1435, name: "Canadiske dollar", denomination: "C$" },
  THB: { value: 3.3289, name: "Thai baht", denomination: "฿" }
};

const AccountTypes = {
    Normal: "Brukskonto",
    Savings: "Sparekonto",
    Credit: "Kreditkonto",
    Pensjon: "Pensjonskonto",
};

class TBankAcc {
    #type = 0;
    #balance = 0;
    #withdrawAccount = 0;
    #currencyType = null;

    constructor(aType) {
        this.#type = aType;
        this.#currencyType = CurrencyTypes.NOK;
    }

    toString(){
        return this.#type; 
        //`Konto Type: ${this.#type}`;
    }
    setType(aType){
        let txtOut = "The account type has changed from" + this.toString(); 
        this.#type = aType;
        txtOut += " to " + this.toString();
        printOut(txtOut);
    }
    getBalance(){
    return this.#balance;

}
deposit(aAmount){
    this.#withdrawAccount = 0;
    this.#balance += aAmount;
    printOut("Deposit of " + aAmount + ", new balance is " + this.#balance);
}

withdraw(aAmount){
 
    switch(this.#type){
        case AccountTypes.Pensjon:
       
            printOut("You cannot withdraw from " + this.#type)
            return;

        case AccountTypes.Savings:
            this.#withdrawAccount++;
            if(this.#withdrawAccount > 3){
                printOut("You can not withdraw from " + this.#type + " more than 3 times.");
                return;
            }
            break;

    }

    this.#balance -= aAmount;
    printOut("Withdraw of " + aAmount + ", new balance is " + this.#balance);
}
setCurrencyType(aCurrencyType){
    let old_currency = this.#currencyType;
    this.#currencyType = aCurrencyType
printOut(`Currency type changed from ${old_currency.name} to ${this.#currencyType.name}`);

}

}



printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const accountTypeValues = Object.values(AccountTypes);
const part1Text = "Account Types: " + accountTypeValues.join(", ");
printOut(part1Text);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const myAccount = new TBankAcc(AccountTypes.Normal);
myAccount.setType(AccountTypes.Savings);

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myAccount.deposit(100);
myAccount.withdraw(25);
printOut(`My account balance is ` + myAccount.getBalance());
printOut();
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myAccount.deposit(25);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.setType(AccountTypes.Pensjon);
myAccount.withdraw(30);
myAccount.setType(AccountTypes.Normal);
myAccount.withdraw(10);


printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
myAccount.deposit(150);


printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/  
myAccount.setCurrencyType(CurrencyTypes.SEK);
myAccount.setCurrencyType(CurrencyTypes.USD);
myAccount.setCurrencyType(CurrencyTypes.NOK);

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myAccount.deposit(12, CurrencyTypes.USD);
myAccount.withdraw(10, CurrencyTypes.GPD);
myAccount.setCurrencyType(CurrencyTypes.CAD);
myAccount.setCurrencyType(CurrencyTypes.INR);
myAccount.withdraw(150.1585, CurrencyTypes.SEK);

printOut(newLine);
