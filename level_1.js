//Задачи по JS 
// Уровень 1

// Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.
function checkNumber(number) {
    if (number < 0) {
        console.log("negative")
    } else {
        console.log("positive")
    }
}
checkNumber(3)

// Дана строка. Выведите в консоль длину этой строки.
function checkString(string) {
    console.log(string.length)
}

checkString("abc")

// Дана строка. Выведите в консоль последний символ строки.
function stringLast (string) {
    console.log(string[string.length - 1])
}

stringLast("world")

// Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.
function lastLetter (string) {
    if (string[string.length - 1] == 'ь') {
        console.log(string[string.length - 2])
    } else {
        console.log(string[string.length - 1])
    }
}

lastLetter('ноготь')
lastLetter('рука')

// Дано число. Проверьте, четное оно или нет.
function evenNum(number) {
    if (number % 2 === 0) { // остаток от деления числа на 2 равен 0, то число четное
        console.log("even")
    } else {
        console.log("odd")
    }
}

evenNum(2)
evenNum(7)

// Даны два слова. Проверьте, что первые буквы этих слов совпадают.
function sameLetter(firstWord, secondWord) {
    if (firstWord[0] == secondWord[0]) {
        console.log("Первые буквы слов совпадают")
    } else {
        console.log("Первые буквы слов не совпадают")
    }
}

sameLetter("привет", "пока")

// Дано число. Выведите в консоль первую цифру этого числа.
function firstNum (number) {
    console.log(number.toString()[0])
}

firstNum(4321)

// Дано число. Выведите в консоль последнюю цифру этого числа.
function lastNum (number) {
    let stringNumber = number.toString(); // сначала преобразуем число в строку
    console.log(stringNumber[stringNumber.length - 1])
}

lastNum(593)

// Дано число. Выведите в консоль сумму первой и последней цифры этого числа.
function firstAndLastDigitSum (number) {
    let stringNumber = number.toString();
    let firstDigit = +stringNumber[0]; // + преобразует строковое значение в число
    let lastDigit = +stringNumber[stringNumber.length - 1]
    console.log(firstDigit + lastDigit)
}

firstAndLastDigitSum(1465)

// Дано число. Выведите количество цифр в этом числе.
function digitsSum(number) {
    // Используем Math.abs(number) для получения абсолютного значения числа, чтобы избежать учета знака минус.
    console.log(Math.abs(number).toString().length) // Преобразуем число в строку и получаем длину
}

digitsSum(911);

// Даны два числа. Проверьте, что первые цифры этих чисел совпадают.
function digitMatch (numberOne, numberTwo) {
    let digitOne = numberOne.toString();
    let digitTwo = numberTwo.toString();
    if (digitOne[0] == digitTwo[0]) {
        console.log("Цифры совпадают")
    } else {
        console.log("Цифры не совпадают")
    }
}

digitMatch(423, 154)

// Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.
function stringLength (string) {
    if (string.length > 1) {
        console.log(string[string.length - 2])
    }
}

stringLength("Silentium!")

// Даны два целых числа. Проверьте, что первое число без остатка делится на второе.
function numDivide(numOne, numTwo) {
    if (numOne % numTwo === 0) {
        console.log("Остатка нет")
    } else {
        console.log("Остаток есть")
    }
}

numDivide(10, 5)
numDivide(11, 5)

// Выведите в консоль все целые числа от 1 до 100.
for (let i = 1; i <= 100; i = i + 1) {
    console.log(i)
}

// Выведите в консоль все целые числа от -100 до 0.
for (let i = -100; i <= 0; i++) {
    console.log(i)
}

// Выведите в консоль все числа кратные трем в промежутке от 1 до 100.
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log(i)
    }
}

// Дан массив с числами. Найдите сумму квадратов элементов этого массива.

let arr = [1, 2, 3, 4, 5]
let sumArr = 0 // начальное значение суммы 

arr.forEach(function(num) { // используем forEach, который перебирает каждый элемент массива
    sumArr += num ** 2 // возводим в квадрат с **
})

console.log(sumArr)