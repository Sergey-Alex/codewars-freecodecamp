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
//
//     return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
//
//
// }
// console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]))