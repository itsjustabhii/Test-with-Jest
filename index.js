const add = (a, b) => {
  return a + b;
};

const err = () => {
  throw new Error("I am new Error");
};

const promiseTest = () => {
  return new Promise((resolve, reject) => {
    if (a - b > 0) {
      resolve("+ve");
    } else {
      reject("-ve");
    }
  });
};

module.exports = {
  add,
  err,
  promiseTest,
};
