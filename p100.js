function findCycleLength(x) {
  let cycles = 1;
  while (x != 1) {
    if (x % 2 == 1) {
      x = 3 * x + 1;
      cycles += 1;
    } else if (x % 2 == 0) {
      x = x / 2;
      cycles += 1;
    }
  }

  return cycles;
}

function findMaxCycles(x, y) {
  let max_cycles = 1;
  for (let i = x; i <= y; i++) {
    let cycles = findCycleLength(i);
    if (cycles > max_cycles) {
      max_cycles = cycles;
    }
  }
  return max_cycles;
}
