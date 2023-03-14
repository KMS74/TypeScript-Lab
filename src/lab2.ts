// 1-Create array that accept  number only
let numbers: number[] = [10, 20, 30];

// 2-Create array that accept string and number only and print all items
let numbersOrStrings: (string | number)[] = [10, 20, "30", "Karem"];

// Create array that accept string and number only and print all items
let numberOrBoolean: number | boolean = 10;
numberOrBoolean = true;

// 4-	Create function with two parameter
function add(a: number, b: number): number {
  return a + b;
}

// 5-	Create class Employee implement IEmployee using this object as implementation

interface IEmployee {
  readonly id: number;
  name: string;
  getUserName: () => string;
  email: string;
  address: object;
}

class Employee implements IEmployee {
  constructor(
    public id: number,
    public name: string,
    private username: string,
    public email: string,
    public address: {}
  ) {}
  public getUserName(): string {
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
  getAddress(): void {
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
