// Возле дороги стоят столбы.
//   Расстояние между столбами одинаковое и ширина столбов одинаковая.
//   Ваша функция принимает три аргумента:
//   количество столбов (≥ 1);
// расстояние между столбами (10 – 30 метров);
// ширина столба (10 – 50 сантиметров).
// Рассчитайте расстояние между первым и последним столбом в сантиметрах (без ширины первого и последнего столба).


// function pillars(num_pill, dist, width) {
//     if (num_pill >= 1) {
//         return num_pill*width + dist - 2*num_pill
//     }
// }
//
// console.log(pillars(1, 10,10))


// function likes(names) {
//     names = names || []
//         switch (names.length) {
//             case 0 :return    console.log('no one likes this'); break;
//             case 1:return    console.log(names[0] + ' likes this');break
//             case 2:return   console.log(names[0] + ' and ' + names[1] + ' likes this'); break
//             case 3 : return   console.log(names[0] + names[1]  + ' and '+ names[2] + ' likes this')
//                 break
//             case 4 :return   console.log(names[0] + (names.length - 2)  + 'other likes this')
//                 break
//             default:return    console.log('no one likes this')
//
//
//         }
// }
// likes([])
// likes(["Peter"])
// likes(["Jacob", "Alex"])
// likes(["Max", "John", "Mark"] )
// likes(["Max", "John", "Mark", "Max"])

// function addBinary(a,b) {
//     const c = a + b
// }


//
// function oddOrEven(array) {
//     array.reduce((sum, i) => sum + i, 0)%2 === 0 ? console.log('even') : console.log('odd')
// }
// oddOrEven([10000,2000,2000000000000])

// function solution(str) {
//     let arr = [];
//     for (let i = 0; i < str.split('').length; i += 2) {
//         arr.push(str.slice(i, i + 2))
//     }
//
//     return arr.map(v => v.length === 1 ? v + '_' : v)
//
//     console.log(arr)
// }
//
// solution('qwer')

// function openOrSenior(data){
// //
// //     return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
// //
// //
// // }
// // console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]))


// function toCamelCase(str) {
//      str = str.split('')
//     return str.map((el,i) => {
//         if (el === '-' || el === '_'){
//             el = str[i+1].toUpperCase()
//             str.splice(i+1, 1)
//         }
//         return el
//     }).join('')
//
// }
//
// console.log(toCamelCase('as-asd'))

// function pigIt(str) {
//     str = str.trim().split(/\s{1,}/);
//     return str.map(val => {
//         if (/^[A-Za-z]+$/.test(val)) {
//             return `${val.slice(1)}${val.slice(0, 1)}ay`;
//         }
//         return val;
//     }).join(' ');
// }
//
//
// console.log(pigIt('dad mom'))

// const myStorage = {
//     "car": {
//         "inside": {
//             "glove box": "maps",
//             "passenger seat": "crumbs"
//         },
//         "outside": {
//             "trunk": "jack"
//         }
//     }
// };
//
// const gloveBoxContents = myStorage.car.inside["glove box"]
// console.log(gloveBoxContents)
//
// const myPlants = [
//     {
//         type: "flowers",
//         list: [
//             "rose",
//             "tulip",
//             "dandelion"
//         ]
//     },
//     {
//         type: "trees",
//         list: [
//             "fir",
//             "pine",
//             "birch"
//         ]
//     }
// ];
//
// const secondTree = myPlants[1].list[1];
// console.log(secondTree)

// const recordCollection = {
//     2548: {
//         albumTitle: 'Slippery When Wet',
//         artist: 'Bon Jovi',
//         tracks: ['Let It Rock', 'You Give Love a Bad Name']
//     },
//     2468: {
//         albumTitle: '1999',
//         artist: 'Prince',
//         tracks: ['1999', 'Little Red Corvette']
//     },
//     1245: {
//         artist: 'Robert Palmer',
//         tracks: []
//     },
//     5439: {
//         albumTitle: 'ABBA Gold'
//     }
// };

// function updateRecords(records, id, prop, value) {
//     if (value !== '' && prop !== '' ){
//         records[id][prop] = value
//     } else if (prop === 'tracks' && records[id].hasOwnProperty('track') === false){
//         records[id][prop] = [value]
//     } else if (prop === 'tracks' && value !== ''){
//         records[id][prop].push(value)
//     } else if (value === ''){
//         delete records[id][prop]
//     }
//     return records;
// }
//
// console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'))

// const myArray = [];
// let i = 5;
//
//     while (i >= 0){
//     myArray.push(i)
//     i--
// }
// console.log(myArray)
// const myArray = [];
//
// for (let i = 1; i <= 9; i += 2) {
//     myArray.push(i);
// }
//
// console.log(myArray)
/*
Учитывая строку слов, вам нужно найти слово с наивысшим баллом.
Каждая буква слова оценивается в зависимости от ее положения в алфавите: a = 1, b = 2, c = 3 и т. д.
Вам нужно вернуть слово с наивысшим баллом в виде строки.
Если два слова оцениваются одинаково, верните слово, которое появляется первым в исходной строке.
Все буквы будут строчными, и все входные данные будут действительными.
 */

// function high(s) {
//     let as = s.split(' ').map(s => [...s].reduce((a, b) => a+b.charCodeAt(0) - 96, 0)
//     );
//     return s.split(' ')[as.indexOf(Math.max(...as))];
//
// }
//
// console.log(high('All letters will be lowercase and all inputs will be valid'))

// String.prototype.camelCase = function () {
//     return this.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')
// }
//
// console.log("hello case".camelCase())

// function humanReadable(sec) {
//     if (sec < 359999){
//         let hour = (sec/3600)
//         let min = ((hour - Math.floor(hour))*60)
//         let seconds = (((min- Math.floor(min))*60).toFixed(0))
//
//         console.log(addZero(Math.floor(hour)) +
//             ':'+ addZero(Math.floor(min)) + ':' + addZero(seconds))
//     } else if (sec === 0) {
//         return '00:00:00'
//     }
//
//     function addZero(num) {
//         if (num >=0 && num <= 9){
//             return '0' + num
//         } else {
//             return  num
//         }
//     }
//
//
// }
//
// humanReadable(86399)


// const myArray = [];
// for (let i = 9; i > 0; i -= 2) {
//     myArray.push(i);
// }
// console.log(myArray)

// const myArr = [2, 3, 4, 5, 6];
// let total = 0
// for(let i = 0; i <myArr.length; i++){
//     total += myArr[i]
// }
//
// console.log(total)

// function multiplyAll(arr) {
//     let product = 1;
//     for (let i = 0; i < arr.length; i++){
//         for (let  j = 0; j < arr[i].length; j++){
//              product  *= arr[i][j]
//
//         }
//     }
//     return console.log(product);
// }
//
// multiplyAll([[5, 1], [0.2, 4, 0.5], [3, 9]]);



// const myArray = [];
// let i = 10;
//
// // Only change code below this line
// do {
//     myArray.push(i);
//     i++;
// }
// while (i < 5)
//
// console.log(myArray)
// console.log(i)