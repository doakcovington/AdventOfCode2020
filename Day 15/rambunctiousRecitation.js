const rambunctiousRecitation = (numbers, n) => {
  const seen = new Map(
    numbers.flatMap((number, index) =>
      index < numbers.length - 1 ? [[number, index]] : []
    )
  );

  let last = numbers[numbers.length - 1];

  for (let i = numbers.length; i < n; ++i) {
    const term = seen.has(last) ? i - seen.get(last) - 1 : 0;
    seen.set(last, i - 1);
    last = term;
  }

  return last;
};

const part1 = (numbers) => findNthTerm(numbers, 2020);
const part2 = (numbers) => findNthTerm(numbers, 30000000);

const input = [20, 0, 1, 11, 6, 3];

const numbers = input.map(Number);
