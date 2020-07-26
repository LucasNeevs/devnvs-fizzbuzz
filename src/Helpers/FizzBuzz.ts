export default (val: number): string => {
  if (val === 0) return `${val} is unfibuzzed!`;
  if (val % 3 === 0 && val % 5 === 0) return 'FizzBuzz';
  if (val % 3 === 0) return 'Fizz';
  if (val % 5 === 0) return 'Buzz';
  return `${val} is unfibuzzed!`;
};
