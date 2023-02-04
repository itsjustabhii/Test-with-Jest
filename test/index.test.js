const { add } = require("../index");

test("toBe", () => {
  expect(add(1, 2)).toBe(3);
});

test("toEqual", () => {
  expect(add(1, 2)).toEqual(3);
});

test("toEqual", () => {
  expect(add(1, 2)).toBeDefined();
});
test("toBeNull", () => {
  expect(add(1, 2)).not.toBeNull();
});

test("toBeGreaterThan", () => {
  expect(add(1, 2)).not.toBeGreaterThan(1);
});

test("toBeLessThan", () => {
  expect(add(1, 2)).toBeLessThan(7);
});
test("toBeCloseTo", () => {
  expect(add(1.12111, 2.4444)).toBeCloseTo(3.5);
});

test("toMatch", () => {
  expect(add("Hello", "World")).toMatch(/Hello/);
});
