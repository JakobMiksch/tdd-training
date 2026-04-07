export default class Customer {
  constructor() {}

  addToOrder(product) {
    product.hold += 1;
  }
}
