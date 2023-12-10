/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function waitOneSecond() {
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

function waitTwoSecond() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

function waitThreeSecond() {
  return new Promise((resolve) => setTimeout(resolve, 3000));
}

function calculateTime() {
  const p1 = waitOneSecond();
  const p2 = waitTwoSecond();
  const p3 = waitThreeSecond();
  const date = new Date();
  const t1 = date.getTime();
  Promise.all([p1, p2, p3]).then(() => {
    const dateNow = new Date();
    const t2 = dateNow.getTime();
    console.log("Estimated time:" + (t2 - t1));
  });
}

calculateTime();