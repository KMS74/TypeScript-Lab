"use strict";
// 1-Create array that accept  number only
let numbers = [10, 20, 30];
// 2-Create array that accept string and number only and print all items
let numbersOrStrings = [10, 20, "30", "Karem"];
// Create array that accept string and number only and print all items
let numberOrBoolean = 10;
numberOrBoolean = true;
// 4-	Create function with two parameter
function add(a, b) {
    return a + b;
}
class Employee {
    constructor(id, name, username, email, address) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = address;
    }
    getUserName() {
        return this.username;
    }
}
let employee = new Employee(1, "Leanne Graham", "Bret", "Sincere@april.biz", {
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: { lat: "-37.3159", lng: "81.1496" },
    },
});
console.log(employee.name);
class Manager extends Employee {
    getAddress() {
        console.log(this.address);
    }
}
let manager = new Manager(2, "john", "john123", "admin@example.com", {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: { lat: "-37.3159", lng: "81.1496" },
});
manager.getAddress();
