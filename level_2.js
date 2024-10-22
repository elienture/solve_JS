// Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти.

for (let i = 1; i <= 1000; i++) {
  let digits = i.toString();

  if (digits.length >= 2) {
    // Проверяем, есть ли хотя бы две цифры
    let firstDigit = parseInt(digits[0]);
    let secondDigit = parseInt(digits[1]); // используем parseInt для преобразования строки в число

    if (firstDigit + secondDigit === 5) {
      console.log(i);
    }
  }
}

// Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6] Найдите сумму первой половины элементов этого массива.

const ArrArrarray = [1, 2, 3, 4, 5, 6];

const ArrayHalf = ArrArrarray.length / 2;

const ArrayHalfSum = ArrArrarray.slice(0, ArrayHalf).reduce(
  (previousValue, num) => previousValue + num,
  0
); // Извлекаем первую половину c помощью slice // Синтаксис метода reduce() следующий: аrr.reduce(callback(accumulator, currentValue), initialValue); // initialValue = 0

console.log(ArrayHalfSum);

// Дана строка. Удалите предпоследний символ из этой строки.

function deletedSymbol(string) {
  console.log(string.slice(0, -2) + string.slice(-1)); // соединяем слайс (от первого до предпосленего символа) и слайс (последний символ)
}

deletedSymbol("deleted");

// Дан массив с числами. Оставьте в нем только положительные числа.

let NumbersArray = [-1, -2, -3, 3, 2, 16, -5]
const positiveArray = NumbersArray.filter(num => num > 0)

console.log(positiveArray)