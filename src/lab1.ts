// create IProduct Interface
interface IProduct {
  id: number;
  productName: string;
  price: number;
  description: string;
  hasDiscount: () => boolean;
  discount: (value: number) => number;
  show: () => string;
}

class Product implements IProduct {
  constructor(
    public id: number,
    public productName: string,
    public price: number,
    public description: string
  ) {
    console.log("Product has initialized");
  }
  public hasDiscount(): boolean {
    return true;
  }

  public discount(value: number): number {
    return this.hasDiscount() ? value * 0.1 : 0;
  }
  public show(): string {
    return `Product name = ${this.productName}, price = ${this.price}, description = ${this.description}`;
  }
}

// creating product obejct
let product = new Product(1, "Labtop", 20000, "Dell core i7");

console.log(product.show());

// creating array of products
let productsArr: Product[] = [
  product,
  new Product(2, "Iphone", 18000, "description of the product.."),
  new Product(3, "TV", 40000, "description of the product.."),
  new Product(4, "Car", 500000, "description of the product.."),
];

showDetails(productsArr);

function showDetails(products: Product[]): void {
  products.forEach((product) => {
    console.log(
      `Product name = ${product.productName}, price = ${product.price}, description = ${product.description}`
    );
  });
}
