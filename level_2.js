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

// Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.

function letterMatch (firstWord, secondWord) {
    let lastLetter = firstWord[firstWord.length - 1];
    let secondLetter = secondWord[0];

    if (lastLetter == secondLetter) {
        console.log('true')
    } else {
        console.log('false')
    }
}

letterMatch('front', 'back')

// Дана дата в следующем формате: '2025-12-31' Преобразуйте эту дату в следующий объект: { year: '2025', month: '12', day: '31', }

function parseDate (dateString) {
    const [year, month, day] = dateString.split('-');
    return {
        year: year,
        month: month,
        day: day
    }
}

console.log(parseDate('2025-12-31'))

// Даны числа, разделенные запятыми: '12,34,56' Найдите сумму этих чисел.

let numbersString = '12,34,56';
let numSeperate = numbersString.split(','); 
let sum = numSeperate.reduce((acc, val) => acc + parseInt(val), 0); 

console.log(sum); 

// Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.

const obj = {
    name: 'L',
    age: 100,
    sign: 'scorpio'
};

const keysArray = Object.keys(obj);
const valuesArray = Object.values(obj);

console.log(keysArray)
console.log(valuesArray)

// Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.

function digitFind(string) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] >= 0 && string[i] <= 9) { 
            return i; // Возвращаем индекс первой цифры
        }
    }
}

console.log(digitFind('a1b2c3d4'));

// Дана некоторая строка: 'abcde' Переведите в верхний регистр все нечетные буквы этой строки.
//  В нашем случае должно получится следующее: 'AbCdE'

function oddLetters(string) {
    return string
        .split('').map((letter, index) => {
            if (index % 2 !== 0) {
                return letter.toUpperCase(); 
            }
            return letter; 
        }).join(''); 
}


console.log(oddLetters('abcde'))