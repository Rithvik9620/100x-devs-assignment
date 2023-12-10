for (let i = 1; i < 101; i += 1) {
  console.log("printing " + i);
  setTimeout(() => console.log(i), i * 1000);
}
