import test from "node:test";

import assert from "node:assert/strict";

class Order {
  constructor() {
    this.items = [];
  }
}

test("order is empty", () => {
  const order = new Order();

  assert.strictEqual(order.items.length === 0, true);
});
