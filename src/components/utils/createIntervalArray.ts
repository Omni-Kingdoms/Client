export default function createIntervalArray(number: number, total: number) {
  let start = number - 1;
  let end = number + 2;

  let array = [];

  console.log(start, end);

  if (start <= 0) {
    start = 1;
    end = 4;
  }

  if (end > total) {
    end = total + 1;
    start = total - 2;
  }

  console.log(start, end);

  for (let i = start; i < end; i++) {
    array.push(i);
  }

  return array;
}