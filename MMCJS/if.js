// function testNum(a) {
//     let result;
//     if (a > 0) {
//       result = 'positive';
//     } else {
//       result = 'NOT positive';
//     }
//     return result;
//   }
  
//   console.log(testNum(5));
// //   Expected output: "NOT positive"
  

const pass = 'zasgf!hfghfhvafbnm'; // Twoje hasło
let r = /!/; // Wyrażenie regularne do sprawdzenia obecności '!' w haśle


if (pass.length > 10 && r.test(pass)) {
    console.log('Masz dobre hasło: liczba znaków to ' + pass.length);
} else if (pass.length > 10) {
    console.log('opkej hsało, ale jeszcze dodaj "!" .');
    console.log('Liczba znaków to: ' + pass.length);    
} else {
    console.log('Za krótkie hasło posiadasz.');
    console.log('Liczba znaków to: ' + pass.length);
}


if (pass.length > 10 && pass.includes('!')) {
    console.log('Masz dobre hasło: liczba znaków to ' + pass.length);
} else if (pass.length > 10) {
    console.log('opkej hsało, ale jeszcze dodaj "!" .');
    console.log('Liczba znaków to: ' + pass.length);    
} else {
    console.log('Za krótkie hasło posiadasz.');
    console.log('Liczba znaków to: ' + pass.length);
}


let x = 50
let y = 30
if (x > y) {
    console.log(`${x}` + ' jest większe od ' + `${y}`)
}

let color = 'blue'
let newcolor = 'green'

if (color === newcolor) {
    console.log('kolory się zgadzają')
} else {
    console.log('nie zgadzają się kolory')
}



let a = 100
let b = 50
if (a > b) {
    console.log('a>b')
} else if (a === b) {
    console.log('a=b')
} else {
    console.log('a<b')
}

let c = 10
if (c % 2 == 0) {
    console.log(`${c}` + ` jest parzysta`)
} else {
    console.log(`${c} nie jest parzysta`)
}

let d = 3 
const check = (d % 2 === 0) ? 'jest parzyste' : 'nie jest parzyste'
console.log(`${check} i reszta z dzielenia przez 2 to  ${d % 2}` )


let e = 30
if (e > 100) {
    console.log('e>100')
} else if (e <= 100 && e >= 30) {
    console.log('e średniak pomiędzy 100 a 30')
} else { 
    console.log(' e <30')
}


let text

if (e > 100) {
    text = 'e>100'
} else if (e <= 100 && e >= 30) {
    text = 'e średniak pomiędzy 100 a 30'
} else { 
    text = ' e <30'
}

console.log(text.toUpperCase())








