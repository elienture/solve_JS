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

let NumbersArray = [-1, -2, -3, 3, 2, 16, -5];
const positiveArray = NumbersArray.filter((num) => num > 0);

console.log(positiveArray);

// Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.

function letterMatch(firstWord, secondWord) {
  let lastLetter = firstWord[firstWord.length - 1];
  let secondLetter = secondWord[0];

  if (lastLetter == secondLetter) {
    console.log("true");
  } else {
    console.log("false");
  }
}

letterMatch("front", "back");

// Дана дата в следующем формате: '2025-12-31' Преобразуйте эту дату в следующий объект: { year: '2025', month: '12', day: '31', }

function parseDate(dateString) {
  const [year, month, day] = dateString.split("-");
  return {
    year: year,
    month: month,
    day: day,
  };
}

console.log(parseDate("2025-12-31"));

// Даны числа, разделенные запятыми: '12,34,56' Найдите сумму этих чисел.

let numbersString = "12,34,56";
let numSeperate = numbersString.split(",");
let sum = numSeperate.reduce((acc, val) => acc + parseInt(val), 0);

console.log(sum);

// Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.

const obj = {
  name: "L",
  age: 100,
  sign: "scorpio",
};

const keysArray = Object.keys(obj);
const valuesArray = Object.values(obj);

console.log(keysArray);
console.log(valuesArray);

// Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.

function digitFind(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] >= 0 && string[i] <= 9) {
      return i; // Возвращаем индекс первой цифры
    }
  }
}

console.log(digitFind("a1b2c3d4"));

// Дана некоторая строка: 'abcde' Переведите в верхний регистр все нечетные буквы этой строки.
//  В нашем случае должно получится следующее: 'AbCdE'

function oddLetters(string) {
  console.log(
    string
      .split("")
      .map((letter, index) => {
        if (index % 2 == 0) {
          return letter.toUpperCase();
        } else {
          return letter;
        }
      })
      .join("")
  );
}

oddLetters("abcde");

// Дана некоторая строка, например, вот такая: '023m0df0dfg0' Получите массив позиций всех нулей в этой в строке.

const inputString = "023m0df0dfg0";

const zeroIndex = Array.from(inputString)
  .map((char, index) => (char === "0" ? index : undefined))
  .filter((index) => index !== undefined);

console.log(zeroIndex);

// Дана некоторая строка: 'abcdefg' Удалите из этой строки каждый третий символ. В нашем случае должно получится следующее: 'abdeg'

function removeThirdLetter(string) {
  console.log(
    string
      .split("")
      .filter((char, i) => (i + 1) % 3 !== 0)
      .join("")
  ); // Если символ не кратен 3 - он остается в строке
}

removeThirdLetter("abcdefg");

// Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6] 
// Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях.

function OddsandEvensSum(arr) {
  let evenSum = 0;
  let oddSum = 0; // инициируем суммы с нуля

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      evenSum += arr[i]; // Суммируем четные позиции элементов
    } else {
      oddSum += arr[i]; // Суммируем нечетные позиции элементов
    }
  }

  return evenSum / oddSum;
}
console.log(OddsandEvensSum([1, 2, 3, 4, 5, 6]));

// Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой строки.

function getDigitIndex(string) {
  return string
    .split("")
    .map((char, index) => {
      return char >= "0" && char <= "9" ? index : -1;
    })
    .filter((index) => index !== -1);
}

console.log(getDigitIndex("123aaa555bbb"));

// Дан массив с некоторыми числами, например, вот такой: [123, 456, 789]
// Напишите код, который перевернет числа в этом массиве по следующему принципу: [321, 654, 987]

function flipArrNums(arr) {
  return arr.map((num) => Number(num.toString().split("").reverse().join("")));
}

console.log(flipArrNums([123, 456, 789]));

// Дана некоторая строка: 'a bc def ghij'
// Переведите в верхний регистр все подстроки, в которых количество букв меньше или равно трем.
// В нашем случае должно получится следующее: 'A BC DEF ghij'

let string = "a bc def ghij";
let upperThree = string
  .split(" ")
  .map((word) => {
    if (word.length <= 3) {
      return word.toUpperCase(); // Если длина слова меньше или равна 3, переводим в верхний регистр
    }
    return word;
  })
  .join(" ");

console.log(upperThree);

// Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.

function checkUpperorLower(char) {

  if (char === char.toUpperCase()) {
    console.log("Символ в верхнем регистре.");
  } else {
    console.log("Символ в нижнем регистре.");
  }
}

checkUpperorLower('A');
checkUpperorLower('a')

// Дано некоторое число, например, такое: 123789 Удалите из этого числа все нечетные цифры. 
// В нашем случае получится такой результат: 28

let num = 123789

let evenNum = num.toString().split('').filter(number => number % 2 === 0).join('')

console.log(evenNum)