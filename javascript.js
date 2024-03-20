let youName = prompt('Ismingizni kiriting')
while(youName){
    youName = prompt('Sizdan faqat ism soralvodi')
}
alert('Salom ' + youName)

let son = +prompt('son kiriting')
while (isNaN(son)) {
    son = +prompt('iltimis faqat son ')
}
let daraja = +prompt('Endi birinch kiritgan soningizni darajasini kiriting')
alert(son ** daraja)
console.log(son + ' ** ' + daraja, ' =',son ** daraja)

alert('Siz 3ta son kiriting va men sizga orta soni topib beraman')
let number1 =+prompt('1-son')
let number2 =+prompt('2-son')
let number3 =+prompt('3-son')


if((number1 > number2 && number1 < number3) || (number1 < number2 && number1 > number3)){
    let average = number1
    console.log('Siz kiritgan ortason '+ average)
}else if((number1 < number2 && number2 < number3) || (number1 > number2 && number2 > number3)){
    let average = number2
    console.log('Siz kiritgan ortason '+ average)
}else if((number1 < number3 && number3 < number2) || (number1 > number3 && number3 > number2)){
    let average = number3
    console.log('Siz kiritgan ortason '+ average)
}else{
    alert('Qanaqib bu daragaga erishdiz aqlim lol qoldi')
}

let misol =+prompt('17*5' + ' sizning javobingiz')
let javob =17*5
if(misol ===javob){
    console.log('Sizning javob togri:'+javob)
}else{
    console.log('Sizning javob notogri togri togri javob:'+javob)
}

let misol1 =+prompt('72*86+72-14' + ' sizning javobingiz')
let javob1=72*86+72-14
if(misol1 ===javob1){
    console.log('Sizning javob togri:'+javob1)
}else{
    console.log('Sizning javob notogri togri togri javob:'+javob1)
}

let misol2 =+prompt('12+72/6' + ' sizning javobingiz')
let javob2 =12+72/6
if(misol2 ===javob2){
    console.log('Sizning javob togri:'+javob2)
}else{
    console.log('Sizning javob notogri togri togri javob:'+javob2)
}

alert('Menga 2ta san kiriting va men sizga ularning ummumiy yegindisini topib beraman')
let a =+prompt('1-son boshlangich qiymat')
let b =+prompt('2-son manzil qiymati Gacham')

for (let i = a; i < b; i++) {
    a = a * i
}
console.log(a)

let son = +prompt('Son kiriting va men sizga kiritilga sonlar miqdorida qaylarni sanab beraman')
let qoylar = ''
for (let i = 1; i <= son; i++) {
	qoylar += `${i} qoylar `
}
console.log(qoylar)
