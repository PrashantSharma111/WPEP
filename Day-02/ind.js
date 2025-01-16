class bank {
  constructor(name, am) {
    this.name = name;
    this.am = am;
    console.log("Your account created successfully! ", this.name);
  }

  deposit(am) {
    this.am += am;
    console.log("Amount deposited successfully!");
  }

  retrieve(am) {
    if (this.am > am) {
      this.am -= am;
      console.log("Amount retrieved successfully!");
      console.log("Remaining amount: ", this.am);
    } else console.log("Not enough money to withdraw!!!");
  }

  check() {
    console.log(this.am);
  }
}

let obj = new bank("Munna", 2000);
obj.deposit(1000);
obj.retrieve(1000);
obj.check();
