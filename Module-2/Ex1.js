let input;
const numbers = [];
let total = 0;

do {
  input = prompt ('Введите произвольное число');
  numbers.push(Number(input));
} while (input !== null);

for (let i = 0; i < numbers.length; i += 1) {
  total += numbers[i];
}

console.log(numbers);
alert (`Общая сумма чисел равна ${total}`)
