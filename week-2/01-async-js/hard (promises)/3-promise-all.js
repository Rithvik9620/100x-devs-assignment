/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
  return new Promise((resolve) => setTimeout(resolve, t * 1000));
}

function wait2(t) {
  return new Promise((resolve) => setTimeout(resolve, t * 1000));
}

function wait3(t) {
  return new Promise((resolve) => setTimeout(resolve, t * 1000));
}

function calculateTime(t1, t2, t3) {
  const date = new Date();
  const time1 = date.getTime();
  return new Promise((resolve) => {
    const p1 = wait1(t1);
    const p2 = wait2(t2);
    const p3 = wait3(t3);
    Promise.all([p1, p2, p3]).then(() => {
      const date2 = new Date();
      const time2 = date2.getTime();
      resolve(time2 - time1);
    });
  });
}

module.exports = calculateTime;
