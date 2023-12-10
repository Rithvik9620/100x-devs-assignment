/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
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
  const date = new Date();
  const t1 = date.getTime();
  waitOneSecond().then(() => {
    waitTwoSecond().then(() => {
      waitThreeSecond().then(() => {
        const dateNow = new Date();
        const t2 = dateNow.getTime();
        console.log("Time taken: " + (t2 - t1));
      });
    });
  });
}

calculateTime();
