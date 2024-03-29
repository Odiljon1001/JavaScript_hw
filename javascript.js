// bu amal kiritilgan soni toq yoki juft ekanligini topib beradi

// let input = prompt(
// 	'Son kiriting va men sizga uni juft yoki toq ekanligini topib beraman'
// )

// if (input === '') {
// 	console.log('Siz son kiritmadingiz')
// } else {
// 	let number = +input
// 	if (!isNaN(number)) {
// 		if (number === 0) {
// 			console.log('Kiritgan soningiz 0, bu ham juft son hisoblanadi')
// 		} else if (number % 2 == 0) {
// 			console.log('bu son juft')
// 		} else {
// 			console.log('bu son toq')
// 		}
// 	} else {
// 		console.log('Bu son emas')
// 	}
// }


// // Функция для генерации случайного числа в заданном диапазоне
// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// // Функция для выполнения различных арифметических операций с двумя числами
// function solveArithmeticProblems() {
//   // Генерируем два случайных числа
//   var number1 = getRandomNumber(1, 100);
//   var number2 = getRandomNumber(1, 100);

//   // Выбираем случайным образом арифметическую операцию
//   var operations = ['+', '-', '*', '/'];
//   var operation = operations[Math.floor(Math.random() * operations.length)];

//   // Вычисляем результат в зависимости от выбранной операции
//   var result;
//   switch (operation) {
//     case '+':
//       result = number1 + number2;
//       break;
//     case '-':
//       result = number1 - number2;
//       break;
//     case '*':
//       result = number1 * number2;
//       break;
//     case '/':
//       // Для деления нужно убедиться, что второе число не равно 0
//       if (number2 !== 0) {
//         result = number1 / number2;
//       } else {
//         // Если второе число равно 0, генерируем новое второе число
//         number2 = getRandomNumber(1, 100);
//         result = number1 / number2;
//       }
//       break;
//     default:
//       result = "Неизвестная операция";
//   }

//   // Возвращаем результат в виде объекта
//   return {
//     number1: number1,
//     number2: number2,
//     operation: operation,
//     result: result
//   };
// }

// // Пример использования
// var problem = solveArithmeticProblems();
// console.log("Первое число:", problem.number1);
// console.log("Второе число:", problem.number2);
// console.log("Операция:", problem.operation);
// console.log("Результат:", problem.result);


// function task() {
//   let number1 = Math.round(Math.random() * 100) + 1;
//   let number2 = Math.round(Math.random() * 100) + 1;

//   // Генерируем случайное число от 1 до 4 для выбора операции
//   let operation = Math.floor(Math.random() * 4) + 1;

//   let result;
//   switch (operation) {
//     case 1:
//       result = number1 + number2;
//       break;
//     case 2:
//       result = number1 - number2;
//       break;
//     case 3:
//       result = number1 * number2;
//       break;
//     case 4:
//       result = number1 / number2;
//       break;
//     default:
//       result = "Ошибка";
//   }

//   return result;
// }

// Одилжон Ташматов, [23.03.2024 15:37]
// let misol1 = Math.round(Math.random()*100)
// let misol2 = Math.round(Math.random()*100)
// let son = Math.round(Math.random()*4)
// let operator = ['+','-','*','/','%']

// let x = eval(String(misol1) + operator[son] + String(misol2))
// console.log(x)

// Одилжон Ташматов, [23.03.2024 15:43]
// let misol1 = Math.round(Math.random()*100)
// let misol2 = Math.round(Math.random()*100)
// let son = Math.round(Math.random()*4)
// let operator = ['+','-','*','/','%']

// let x = eval(String(misol1) + operator[son] + String(misol2))
// console.log(x)
// const obj =cartObj()
// console.log(obj);

// let son = +prompt('son kiriting')
// while (isNaN(son)) {
//     son = +prompt('iltimis faqat son ')
// }
// let daraja = +prompt('Endi birinch kiritgan soningizni darajasini kiriting')
// alert(son ** daraja)
// console.log(son + ' ** ' + daraja, ' =',son ** daraja)

// alert('Siz 3ta son kiriting va men sizga orta soni topib beraman')
// let number1 =+prompt('1-son')
// let number2 =+prompt('2-son')
// let number3 =+prompt('3-son')


// if((number1 > number2 && number1 < number3) || (number1 < number2 && number1 > number3)){
//     let average = number1
//     console.log('Siz kiritgan ortason '+ average)
// }else if((number1 < number2 && number2 < number3) || (number1 > number2 && number2 > number3)){
//     let average = number2
//     console.log('Siz kiritgan ortason '+ average)
// }else if((number1 < number3 && number3 < number2) || (number1 > number3 && number3 > number2)){
//     let average = number3
//     console.log('Siz kiritgan ortason '+ average)
// }else{
//     alert('Qanaqib bu daragaga erishdiz aqlim lol qoldi')
// }

// let misol =+prompt('17*5' + ' sizning javobingiz')
// let javob =17*5
// if(misol ===javob){
//     console.log('Sizning javob togri:'+javob)
// }else{
//     console.log('Sizning javob notogri togri togri javob:'+javob)
// }

// let misol1 =+prompt('72*86+72-14' + ' sizning javobingiz')
// let javob1=72*86+72-14
// if(misol1 ===javob1){
//     console.log('Sizning javob togri:'+javob1)
// }else{
//     console.log('Sizning javob notogri togri togri javob:'+javob1)
// }

// let misol2 =+prompt('12+72/6' + ' sizning javobingiz')
// let javob2 =12+72/6
// if(misol2 ===javob2){
//     console.log('Sizning javob togri:'+javob2)
// }else{
//     console.log('Sizning javob notogri togri togri javob:'+javob2)
// }

// alert('Menga 2ta san kiriting va men sizga ularning ummumiy yegindisini topib beraman')
// let a =+prompt('1-son boshlangich qiymat')
// let b =+prompt('2-son manzil qiymati Gacham')

// for (let i = a; i < b; i++) {
//     a = a * i
// }
// console.log(a)

// bu sikil i ni 0 dan boshlangan tarzda 1dan boshlab beradi
// let qoy = +prompt('qoylar sonini kiriting')
// let box = ''
// for (let i = 0; i < qoy; i++) {
// 	let son = i + 1
// 	if (son == 1) {
// 		box += ` ${son} qoy`
// 	} else {
// 		box += ` ${son} qoylar`
// 	}
// }
// console.log(box)

// let homeWork = +prompt('dioganal son kiriting')
// let dig = ''
// for (let i = 0; i < homeWork; i++) {
// 	for (let j = 0; j < homeWork; j++) {
// 		if (
// 			i == j || //	dioganal \
// 			j == 0 || //
// 			i == 0 || //
// 			i == homeWork - 1 || //
// 			j == homeWork - 1 || //
// 			j == homeWork - i - 1 // dioganal /
// 		) {
// 			dig += '🟨'
// 		} else dig += '🟥'
// 	}
// 	console.log(dig)
// 	dig = ''
// }

// let myname = prompt('Ismingizni kiriting')
// let thisYear = +prompt('hozirgi yil kiriting')
// let myBirth = +prompt('tugulgan yilingizni kiriting')

// function unknown(myname, thisYear, myBirth) {
// 	return ` Sizning yoshingiz: ${thisYear - myBirth} da`
// }
// console.log(unknown(myname, thisYear, myBirth))
// console.log(
// 	`Salom ismingiz ${myname} hozirgi yil ${thisYear} tugulgan yilingiz ${myBirth}`
// )
// let youName = prompt('Ismingiz nima?')
// let firstLetter =youName.charAt().toUpperCase(0)
// let otherLetters = youName.slice(1).toLowerCase()
// let result = firstLetter + otherLetters

// let yourAge = prompt('Sizning yoshingiz nechida?')

// alert('Salom '+result)
// console.log('Ismingiz '+result + ' yoshingiz '+ yourAge)

// let misol1 = prompt('10+5=? '+ ' jovob')
// let jovob1 = (10+5)
// alert('Sizning jovab '+ misol1 + " to'g'ri javob esa " + jovob1)
// if(jovob1 == misol1){
//     console.log("Sizning javob to'g'ri " + misol1)
// }else if(jovob1 > misol1){
//     console.log("Sizning javob no to'g'ri to'g'ri javob esa "+ jovob1 )
// }else if(jovob1 < misol1){
//     console.log("Sizning javob no to'g'ri to'g'ri javob esa "+ jovob1 )
// }else("Siztomondan qandaydur hatolik ketdi")

// let misol2 = prompt('10-5=? '+ ' jovob')
// let jovob2 =10-5
// alert('Sizning jovab '+ misol2 + " to'g'ri javob esa " + jovob2)
// if(jovob2 == misol2){
//     console.log("Sizning javob to'g'ri " + misol2)
// }else if(jovob2 > misol2){
//     console.log("Sizning javob no to'g'ri to'g'ri javob esa "+ jovob2 )
// }else if(jovob2 < misol2){
//     console.log("Sizning javob no to'g'ri to'g'ri javob esa "+ jovob2 )
// }else("Siztomondan qandaydur hatolik ketdi")

// let misol3 = prompt('10*5=? '+ ' jovob')
// let jovob3 =10*5
// alert('Sizning jovab '+ misol3 + " to'g'ri javob esa " + jovob3)
// if(jovob3 == misol3){
//     console.log("Sizning javob to'g'ri " + misol3)
// }else if(jovob3 > misol3){
//     console.log("Sizning javob no to'g'ri to'g'ri javob esa "+ jovob3 )
// }else if(jovob3 < misol3){
//     console.log("Sizning javob no to'g'ri to'g'ri javob esa "+ jovob3 )
// }else("Siztomondan qandaydur hatolik ketdi")

// let misol4 = prompt('10/5=? '+ ' jovob')
// let jovob4 =10/5
// alert('Sizning jovab '+ misol4 + " to'g'ri javob esa " + jovob4)
// if(jovob4 == misol4){
//     console.log("Sizning javob to'g'ri " + misol4)
// }else if(jovob4 > misol4){
//     console.log("Sizning javob no to'g'ri to'g'ri javob esa "+ jovob4 )
// }else if(jovob4 < misol4){
//     console.log("Sizning javob no to'g'ri to'g'ri javob esa "+ jovob4 )
// }else("Siztomondan qandaydur hatolik ketdi")

// let misol5 = prompt('10%5=? '+ ' jovob')
// let jovob5 =10%5
// alert('Sizning jovab '+ misol5 + " to'g'ri javob esa " + jovob5)
// if(jovob5 == misol5){
//     console.log("Sizning javob to'g'ri " + misol5)
// }else if(jovob5 > misol5){
//     console.log("Sizning javob no to'g'ri to'g'ri javob esa "+ jovob5 )
// }else if(jovob5 < misol5){
//     console.log("Sizning javob no to'g'ri to'g'ri javob esa "+ jovob5 )
// }else("Siztomondan qandaydur hatolik ketdi")

// let misol6 = prompt('10++=? '+ ' jovob')
// let jovob6 = 10+1
// alert('Sizning jovab '+ misol6 + " to'g'ri javob esa " + jovob6)
// if(jovob6 == misol6){
//     console.log("Sizning javob to'g'ri " + misol6)
// }else if(jovob6 > misol6){
//     console.log("Sizning javob no to'g'ri to'g'ri javob esa "+ jovob6 )
// }else if(jovob6 < misol6){
//     console.log("Sizning javob no to'g'ri to'g'ri javob esa "+ jovob6 )
// }else("Siztomondan qandaydur hatolik ketdi")

// let misol7 = prompt('10--=? '+ ' jovob')
// let jovob7 =10-1
// alert('Sizning jovab '+ misol7 + " to'g'ri javob esa " + jovob7)
// if(jovob7 == misol7){
//     console.log("Sizning javob to'g'ri " + misol7)
// }else if(jovob7 > misol7){
//     console.log("Sizning javob no to'g'ri to'g'ri javob esa "+ jovob7 )
// }else if(jovob7 < misol7){
//     console.log("Sizning javob no to'g'ri to'g'ri javob esa "+ jovob7 )
// }else("Siztomondan qandaydur hatolik ketdi")

// let misol8 = prompt('10*8+20-12%10=? '+ ' jovob')
// let jovob8 =10*8+20-12%10
// alert('Sizning jovab '+ misol8 + " to'g'ri javob esa " + jovob8)
// if(jovob8 == misol8){
//     console.log("Sizning javob to'g'ri " + misol8)
// }else if(jovob8 > misol8){
//     console.log("Sizning javob no to'g'ri to'g'ri javob esa "+ jovob8 )
// }else if(jovob8 < misol8){
//     console.log("Sizning javob no to'g'ri to'g'ri javob esa "+ jovob8 )
// }else("Siztomondan qandaydur hatolik ketdi")

// let misol9 = prompt('10*10%64-78/2+14=? '+ ' jovob')
// let jovob9 =10*10%64-78/2+14
// alert('Sizning jovab '+ misol9 + " to'g'ri javob esa " + jovob9)
// if(jovob9 == misol9){
//     console.log("Sizning javob to'g'ri " + misol9)
// }else if(jovob9 > misol9){
//     console.log("Sizning javob no to'g'ri to'g'ri javob esa "+ jovob9 )
// }else if(jovob9 < misol9){
//     console.log("Sizning javob no to'g'ri to'g'ri javob esa "+ jovob9 )
// }else("Siztomondan qandaydur hatolik ketdi")


// alert('Omad latto 3ta son kiriting va man sizga orta qiymatni topib beraman')
// let lotto1 =prompt('1 son')
// let lotto2 =prompt('2 son')
// let lotto3 =prompt('3 son')
// console.log(lotto1,lotto2,lotto3 +' Siz kiritgan sonlar')

// let goldenEgg = lotto1
// console.log(goldenEgg+ ' Sizni omadli soningiz')
// // [&& это знак означаеть и] [|| это знак означаеть или]

// if (lotto2 > lotto1 && lotto2 < lotto3) {
//     goldenEgg = lotto2;
//     alert("Sizni tabriklaymiz: " + goldenEgg);
//   }else if (lotto2 > lotto3 && lotto2 < lotto1) {
//     goldenEgg = lotto2;
//     alert("Sizni tabriklaymiz: " + goldenEgg);
//   }else if (lotto3 > lotto1 && lotto3 < lotto2) {
//     goldenEgg = lotto3;
//     alert("Sizni tabriklaymiz: " + goldenEgg);
//   }else if (lotto3 > lotto2 && lotto3 < lotto1) {
//     goldenEgg = lotto3;
//     alert("Sizni tabriklaymiz: " + goldenEgg);
//   }else if (lotto1 > lotto2 && lotto1 < lotto3 ) {
//     goldenEgg = lotto1;
//     alert("Sizni tabriklaymiz: " + goldenEgg);
//   } else if (lotto1 > lotto3 && lotto1 < lotto2 ) {
//     goldenEgg = lotto1;
//     alert("Sizni tabriklaymiz: " + goldenEgg);
//   }else{
//       alert("Bugun sizning kuningiz emas ekan")
//   }


// // let nam1 = parseFloat(prompt('1-son'));
// // let nam2 = parseFloat(prompt('2-son'));
// // let nam3 = parseFloat(prompt('3-son'));

// // let sum = [nam1, nam2, nam3];

// // function findAverage(sum) {
// //     if (sum.length === 0) {
// //         return null;
// //     }

// //     let number = 0;
// //     for (let i = 0; i < sum.length; i++) {
// //         number += sum[i];
// //     }

// //     let average = number / sum.length;
// //     return average;
// // }

// // // Вызываем функцию и выводим результат в консоль
// // let  = findAverage(sum);
// // console.log("Среднее значение:", result)
// // let youName = prompt('Ismingiz nima?')
// // let firstLetter =youName.charAt().toUpperCase(0)
// // let otherLetters = youName.slice(1).toLowerCase()
// // let result = firstLetter + otherLetters

// // let yourAge = prompt('Sizning yoshingiz nechida?')

// // alert('Salom '+result)
// // console.log('Ismingiz '+result + ' yoshingiz '+ yourAge)

// // let misol1 = prompt('10+5=? '+ ' jovob')
// // let jovob1 = (10+5)
// // alert('Sizning jovab '+ misol1 + " to'g'ri javob esa " + jovob1)
// // if(jovob1 == misol1){
// //     console.log("Sizning javob to'g'ri " + misol1)
// // }else if(jovob1 > misol1){
// //     console.log("Sizning javob no to'g'ri to'g'ri javob esa "+ jovob1 )
// // }else if(jovob1 < misol1){
// //     console.log("Sizning javob no to'g'ri to'g'ri javob esa "+ jovob1 )
// // }else("Siztomondan qandaydur hatolik ketdi")

// // let misol2 = prompt('10-5=? '+ ' jovob')
// // let jovob2 =10-5
// // alert('Sizning jovab '+ misol2 + " to'g'ri javob esa " + jovob2)
// // if(jovob2 == misol2){
// //     console.log("Sizning javob to'g'ri " + misol2)
// // }else if(jovob2 > misol2){
// //     console.log("Sizning javob no to'g'ri to'g'ri javob esa "+ jovob2 )
// // }else if(jovob2 < misol2){
// //     console.log("Sizning javob no to'g'ri to'g'ri javob esa "+ jovob2 )
// // }else("Siztomondan qandaydur hatolik ketdi")

// // let misol3 = prompt('10*5=? '+ ' jovob')
// // let jovob3 =10*5
// // alert('Sizning jovab '+ misol3 + " to'g'ri javob esa " + jovob3)
// // if(jovob3 == misol3){
// //     console.log("Sizning javob to'g'ri " + misol3)
// // }else if(jovob3 > misol3){
// //     console.log("Sizning javob no to'g'ri to'g'ri javob esa "+ jovob3 )
// // }else if(jovob3 < misol3){
// //     console.log("Sizning javob no to'g'ri to'g'ri javob esa "+ jovob3 )
// // }else("Siztomondan qandaydur hatolik ketdi")

// // let misol4 = prompt('10/5=? '+ ' jovob')
// // let jovob4 =10/5
// // alert('Sizning jovab '+ misol4 + " to'g'ri javob esa " + jovob4)
// // if(jovob4 == misol4){
// //     console.log("Sizning javob to'g'ri " + misol4)
// // }else if(jovob4 > misol4){
// //     console.log("Sizning javob no to'g'ri to'g'ri javob esa "+ jovob4 )
// // }else if(jovob4 < misol4){
// //     console.log("Sizning javob no to'g'ri to'g'ri javob esa "+ jovob4 )
// // }else("Siztomondan qandaydur hatolik ketdi")

// // let misol5 = prompt('10%5=? '+ ' jovob')
// // let jovob5 =10%5
// // alert('Sizning jovab '+ misol5 + " to'g'ri javob esa " + jovob5)
// // if(jovob5 == misol5){
// //     console.log("Sizning javob to'g'ri " + misol5)
// // }else if(jovob5 > misol5){
// //     console.log("Sizning javob no to'g'ri to'g'ri javob esa "+ jovob5 )
// // }else if(jovob5 < misol5){
// //     console.log("Sizning javob no to'g'ri to'g'ri javob esa "+ jovob5 )
// // }else("Siztomondan qandaydur hatolik ketdi")

// // let misol6 = prompt('10++=? '+ ' jovob')
// // let jovob6 = 10+1
// // alert('Sizning jovab '+ misol6 + " to'g'ri javob esa " + jovob6)
// // if(jovob6 == misol6){
// //     console.log("Sizning javob to'g'ri " + misol6)
// // }else if(jovob6 > misol6){
// //     console.log("Sizning javob no to'g'ri to'g'ri javob esa "+ jovob6 )
// // }else if(jovob6 < misol6){
// //     console.log("Sizning javob no to'g'ri to'g'ri javob esa "+ jovob6 )
// // }else("Siztomondan qandaydur hatolik ketdi")

// // let misol7 = prompt('10--=? '+ ' jovob')
// // let jovob7 =10-1
// // alert('Sizning jovab '+ misol7 + " to'g'ri javob esa " + jovob7)
// // if(jovob7 == misol7){
// //     console.log("Sizning javob to'g'ri " + misol7)
// // }else if(jovob7 > misol7){
// //     console.log("Sizning javob no to'g'ri to'g'ri javob esa "+ jovob7 )
// // }else if(jovob7 < misol7){
// //     console.log("Sizning javob no to'g'ri to'g'ri javob esa "+ jovob7 )
// // }else("Siztomondan qandaydur hatolik ketdi")

// // let misol8 = prompt('10*8+20-12%10=? '+ ' jovob')
// // let jovob8 =10*8+20-12%10
// // alert('Sizning jovab '+ misol8 + " to'g'ri javob esa " + jovob8)
// // if(jovob8 == misol8){
// //     console.log("Sizning javob to'g'ri " + misol8)
// // }else if(jovob8 > misol8){
// //     console.log("Sizning javob no to'g'ri to'g'ri javob esa "+ jovob8 )
// // }else if(jovob8 < misol8){
// //     console.log("Sizning javob no to'g'ri to'g'ri javob esa "+ jovob8 )
// // }else("Siztomondan qandaydur hatolik ketdi")

// // let misol9 = prompt('10*10%64-78/2+14=? '+ ' jovob')
// // let jovob9 =10*10%64-78/2+14
// // alert('Sizning jovab '+ misol9 + " to'g'ri javob esa " + jovob9)
// // if(jovob9 == misol9){
// //     console.log("Sizning javob to'g'ri " + misol9)
// // }else if(jovob9 > misol9){
// //     console.log("Sizning javob no to'g'ri to'g'ri javob esa "+ jovob9 )
// // }else if(jovob9 < misol9){
// //     console.log("Sizning javob no to'g'ri to'g'ri javob esa "+ jovob9 )
// // }else("Siztomondan qandaydur hatolik ketdi")


// // alert('Omad latto 3ta son kiriting va man sizga orta qiymatni topib beraman')
// // let lotto1 =prompt('1 son')
// // let lotto2 =prompt('2 son')
// // let lotto3 =prompt('3 son')
// // console.log(lotto1,lotto2,lotto3 +' Siz kiritgan sonlar')

// // let goldenEgg = lotto1
// // console.log(goldenEgg+ ' Sizni omadli soningiz')
// // [&& это знак означаеть и] [|| это знак означаеть или]

// // if (lotto2 > lotto1 && lotto2 < lotto3) {
// //     goldenEgg = lotto2;
// //     alert("Sizni tabriklaymiz: " + goldenEgg);
// //   }else if (lotto2 > lotto3 && lotto2 < lotto1) {
// //     goldenEgg = lotto2;
// //     alert("Sizni tabriklaymiz: " + goldenEgg);
// //   }else if (lotto3 > lotto1 && lotto3 < lotto2) {
// //     goldenEgg = lotto3;
// //     alert("Sizni tabriklaymiz: " + goldenEgg);
// //   }else if (lotto3 > lotto2 && lotto3 < lotto1) {
// //     goldenEgg = lotto3;
// //     alert("Sizni tabriklaymiz: " + goldenEgg);
// //   }else if (lotto1 > lotto2 && lotto1 < lotto3 ) {
// //     goldenEgg = lotto1;
// //     alert("Sizni tabriklaymiz: " + goldenEgg);
// //   } else if (lotto1 > lotto3 && lotto1 < lotto2 ) {
// //     goldenEgg = lotto1;
// //     alert("Sizni tabriklaymiz: " + goldenEgg);
// //   }else{
// //       alert("Bugun sizning kuningiz emas ekan")
// //   }


// let nam1 = parseFloat(prompt('1-son'));
// let nam2 = parseFloat(prompt('2-son'));
// let nam3 = parseFloat(prompt('3-son'));

// let sum = [nam1, nam2, nam3];

// function findAverage(sum) {
//     if (sum.length === 0) {
//         return null;
//     }

//     let number = 0;
//     for (let i = 0; i < sum.length; i++) {
//         number += sum[i];
//     }

//     let average = number / sum.length;
//     return average;
// }

// // Вызываем функцию и выводим результат в консоль
// let result = findAverage(sum);
// console.log("Среднее значение:", result)

// let son = +prompt('Nechta misol yechasiz')

// function randomNumber(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min
// }

// let operations = ['+', '-', '*', '/', '%']

// for (let i = 0; i < son; i++) {
// 	let operation = operations[randomNumber(0, 4)]
// 	let num1 = randomNumber(1, 100)
// 	let num2 = randomNumber(1, 100)

// 	let misol = +prompt(`${num1 + operation + num2}=?`)
// 	let result = eval(num1 + operation + num2)

// 	if (misol == result) {
// 		console.log(`Sizning javob to'g'ri ${misol}`)
// 	} else
// 		console.log(`Sizning javob no to'g'ri ${misol} to'g'ri javob ${result}`)

// 	console.log(`Misol: ${num1} ${operation} ${num2}`)
// }
// let userNum = +prompt("Foydalanuvchilar soni");

// for (let i = 0; i <= userNum; i++) {
//   let name = prompt("User name", "Ivan");
//   let age = +prompt("User age", "30");
//   console.log(`${i+1} Foydalanuvchi ismi ${name}:
// Foydalanuvchi yoshi ${age}  `);
// }

// const priceList = cartObj()
// console.log(priceList)
// let totalPrice = 0
// let dastavaka = 9000
// let product = ''

// for (const key in priceList) {
// 	totalPrice += priceList[key].price
// 	product += ` ${key}: ${priceList[key].info}`
// }

// let jami = totalPrice + dastavaka

// console.log(`Sizning harid qilgan maxsulotingiz ${product}
// jami sumangiz ${jami} som undan ${dastavaka} som yetqazib berish narxi`)

