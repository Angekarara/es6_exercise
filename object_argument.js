function sum() {
  let total = 0;
  for (const argument of arguments) {
    total += argument;
  }
  return total;
}
