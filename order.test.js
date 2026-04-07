import test from "node:test";
import assert from "node:assert/strict";
import Order from "./order.js";
import Customer from "./customer.js";
import Product from "./product.js";

// test("Sufficient product stock", () => {
//   const order = new Order();

//   assert.strictEqual(order.items.length === 0, true);

//   const customer = new Customer();

//   assert.ok(customer);

//   // a temporary hold for the sale quantity is placed on that product’s stock,
//   const product = new Product();

//   product.hold = true;
//   assert.strictEqual(product.hold, true);
// });

test("temporary hold on product stock", () => {
  const product = new Product();
  product.hold = 1;
  assert.strictEqual(product.hold, 1);
});
