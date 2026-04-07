import test from "node:test";
import assert from "node:assert/strict";
import Order from "./order.js";

test("order is empty", () => {
  const order = new Order();

  assert.strictEqual(order.items.length === 0, true);
});
