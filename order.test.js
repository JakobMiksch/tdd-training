import test from "node:test";
import assert from "node:assert/strict";
import Order from "./order.js";
import Customer from "./customer.js";

test("order is empty", () => {
  const order = new Order();

  assert.strictEqual(order.items.length === 0, true);

  const customer = new Customer()

  assert.ok(customer)
});
