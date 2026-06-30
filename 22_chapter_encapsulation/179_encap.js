class bankaccount {
    #balance = 0;
    deposit(ammount) {
        if (ammount > 0) {
            this.#balance += ammount; //composite operator(+=)
            //this.#balance = balance + ammount; 
        }
    }
    getbalance() {
        return this.#balance;
    }
}
const b = new bankaccount;
b.deposit(100);
let check = b.getbalance();
console.log(check);