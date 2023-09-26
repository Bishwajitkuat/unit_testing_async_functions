const check = (num) => {
  return new Promise((resoleve, reject) => {
    if (10 > num) {
      resoleve(`${num} is smaller than 10`);
    } else {
      reject(`${num} is larger than 10`);
    }
  });
};

async function test() {
  try {
    const result = await check(5);
    console.log("try : ", result);
  } catch (err) {
    console.log("err : ", err);
  } finally {
  }
}
test(5);
