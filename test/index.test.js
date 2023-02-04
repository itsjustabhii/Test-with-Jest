const { add, err, promiseTest } = require("../index");

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

test("toThrow", () => {
  expect(() => err()).toThrow("I'm a New Error");
});

test("promiseTest", () => {
  promiseTest(1, 2)
    .then((data) => {
      expect(data).toBe("+ve");
    })
    .catch((e) => {
      expect(e).toBe("-ve");
    });
});

test("promiseTest", () => {
  expect(prommiseTest(2, 1)).resolves.toBe("+ve");
});
test("promiseTest", () => {
  expect(prommiseTest(1, 2)).rejects.toBe("-ve");
});
