// const obj = {
//     name: "Gulanda",
//     age: 16
// }
// obj.name = "Asan"

// const arr = ["asan", 100,,true,null,Nan,undefined]
// console.log(arr)

// 1.Напишите функцию, которая принимает число в качестве аргумента и возвращает его квадрат.

// function square(num) {
//     return num * num
// }
// const result = square(5);
// console.log(result)

// 2.Напишите функцию, которая принимает два числа в качестве аргументов и возвращает их сумму.

// function sumOfTwoNumbers(num1, num2) {
//     return num1 + num2;
// }
// let res = sumOfTwoNumbers(3, 4);
// console.log(res)


// 3.Напишите функцию, которая принимает строку в качестве аргумента и возвращает ее длину.
// function line(str) {
//     return str.length;
// }
// let myString = "Hello, world!";
// console.log(line(myString));

// 4.Напишите функцию, которая принимает массив в качестве аргумента и возвращает первый элемент массива.
// function firstElement(arr) {
//     return arr[0];
// }
// let myArray = [1, 2, 3, 4, 5];
// console.log(firstElement(myArray))


// 5.Напишите функцию, которая принимает логическое значение (true или false) в качестве аргумента и возвращает противоположное значение.

// function getOpposite(value) {
//     if (value === true) {
//       return false;
//     } else {
//       return true;
//     }
//   }
//   console.log(getOpposite(true));


//   6.Напишите функцию, которая принимает массив чисел в качестве аргумента и возвращает среднее арифметическое этих чисел.

// function calculateAverage(numbers) {
//     if (numbers.length === 0) {
//         return 0; 
//     }
//     const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
//     const average = sum / numbers.length;
//     return average;
// }


// const numbers = [1, 2, 3, 4, 5];
// const averageValue = calculateAverage(numbers);
// console.log(averageValue); 





// 7.Напишите функцию, которая принимает строку в качестве аргумента и возвращает ее в обратном порядке.

// function  reverseStr(str) {
//     return str.split("").reverse().join("");
// }
// console.log(reverseStr("hello"));


// 8.Напишите функцию, которая принимает число в качестве аргумента и возвращает true, если число является простым, и false, если нет. Простое число - это число, которое делится только на себя и на единицу.
// function oddEven(num){
//     if(num / 2 === 0){
//         return true
//     }else{
//          return false
//     }
// }
// console.log(oddEven(9))
// let n = 100;

// function isPrime(num) {
//     if (num < 2) return false;
//     for (let i = 2; i * i <= num; i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }
// console.log(isPrime(1)); 
// console.log(isPrime(2)); // true
// console.log(isPrime(9)); // false
// console.log(isPrime(17)); // true



// function isPrime(number) {

//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             return true;
//         }
//     }
//     return false;
// }
// console.log(isPrime(9))


// 9.Напишите функцию, которая принимает массив строк в качестве аргумента и возвращает самую длинную строку из массива.


function findLongestString(arr) {
    if (arr.length === 0) {
        return null;
    }

    let longestStr = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longestStr.length) {
            longestStr = arr[i];
        }
    }
    return longestStr;
}

let strings = ['apple', 'banana', 'orange', 'strawberry'];
console.log(findLongestString(strings)); 

strings = ['short', 'longer', 'longest', 'shortest'];
console.log(findLongestString(strings)); 

strings = [];
console.log(findLongestString(strings)); 



// 10.Напишите функцию, которая принимает два массива в качестве аргументов и возвращает массив, содержащий элементы, общие для обоих массивов.
// let num1 = [1, 2, 3],
//   num2 = [4, 5, 6],
//   num3 = [7, 8, 9];

// let nums = num1.concat(num2, num3);

// function somemass(num1,num2,num3){
//     var nums = num1.concat(num2, num3);
// }

// console.log(nums);

// 11.Напишите функцию, которая принимает число в качестве аргумента и возвращает массив, содержащий все числа Фибоначчи, меньшие или равные данному числу. Числа Фибоначчи - это последовательность чисел, в которой каждое следующее число равно сумме двух предыдущих: 1, 1, 2, 3, 5, 8, 13, 21, …



// 12.Напишите функцию, которая принимает два числа в качестве аргументов и возвращает наибольший общий делитель этих чисел. Наибольший общий делитель - это наибольшее число, на которое оба числа делятся без остатка: НОД(12, 18) = 6, НОД(30, 45) = 15, …
// function findNod(x, y) {

// }

// 13.Напишите функцию, которая принимает строку в качестве аргумента и возвращает количество гласных букв в этой строке. Гласными буквами считаются “а”, “е”, “и”, “о”, “у”, “ы”, “э”, “ю”, “я”.



// 14.Напишите функцию, которая принимает массив объектов в качестве аргумента и возвращает новый массив, содержащий только те объекты, у которых есть свойство “name”. Например, для массива [{name: “Иван”, age: 25}, {city: “Москва”}, {name: “Петр”, hobby: “футбол”}] функция должна вернуть [{name: “Иван”, age: 25}, {name: “Петр”, hobby: “футбол”}].



// function filterByName(arr) {
//     return arr.filter(item => item.hasOwnProperty('name'));
// }

// let arr = [{ name: "Иван", age: 25 }, { city: "Москва" }, { name: "Петр", hobby: "футбол" }];
// console.log(filterByName(arr));
// 15.Напишите функцию, которая принимает массив объектов в качестве аргумента и возвращает новый массив, отсортированный по возрастанию значения свойства “price” каждого объекта. Например, для массива [{name: “apple”, price: 10}, {name: “banana”, price: 5}, {name: “orange”, price: 15}] функция должна вернуть [{name: “banana”, price: 5}, {name: “apple”, price: 10}, {name: “orange”, price: 15}].

// function sortObjectsByPrice(arr) {
//     return arr.sort((a, b) => a.price - b.price);
// }

// let arr = [{ name: "apple", price: 10 }, { name: "banana", price: 5 }, { name: "orange", price: 15 }];
// console.log(sortObjectsByPrice(arr));

// i % 2 === 0 ? console.log(true) :  console.log(false)

let a = [1,2]
