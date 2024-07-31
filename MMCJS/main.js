// alert('czesc');

console.log('Cześć');
console.log('Cześć');
console.log('Cześć');
console.log('Cześć');
console.log('Cześć');
console.log('6');
console.log('6');
console.log('6');


// consta nie możemy zmieniać i jest on bez zmian 
const name = 'Lisa';
console.log(name);


// za to leta możemy zmieniać i modyfikować, zapisujemy w nich zmienne 
let age = 23;
console.log(age);

// tutaj jest przykład zmiany zmiennej w let
age = 45;

console.log(age);


let color
color = 'red'

// zadanie od mmc
const name2 = 'Daniel';
const age2 = 24;
const meal = "pizza";

console.log(name2);
console.log(age2);
console.log(meal);

// sposób, którego nie powinniśmy wykonywać 

var test = 123
console.log(test)


// nie używamy polskich słów
// różnica w znakach wielkości są już inną zmienną, i nie zaczyna się z wielkiel litery zmiennej
// nie piszemy spacji tylko _ w miejsce spacji
const Age = 12;
console.log(Age);

const first_name = "Tomek";
console.log(first_name);

// łączymy ze sobą stringi
console.log('tutaj jest ' + name2 + ' i wcina ' + meal)

// Bardziej poprawne pisanie połączeń stringów
console.log(`czesc, jestem ${name2} i jem ${meal} !`)
console.log(`cześć, jestem ${name2} i mam zwierzaka ${first_name} moja rybka`)
console.log(`Rybka ${first_name} ma już ${age} lat`)


// DZIAŁ Z TYPEM ZMIENNYCH
const text = '321';
console.log(text);

// zadanie cytat
const quote = 'Staszek Powiedział - "Siema Siema"';
console.log(quote);
// Właściwość lenght liczy ilość znaków
console.log(quote.length)
// Zwiększanie znaków w toUpperCase
console.log(quote.toUpperCase());
// Zmienia na małe litery
console.log(quote.toLowerCase());
console.log(quote.toLocaleUpperCase());
console.log(quote.toLocaleLowerCase());

const date = new Date()
console.log(date.toLocaleDateString('en'));

// Wyszukiwanie liter z tekstu
const newname2 = name2.charAt(0).toUpperCase() + name2.slice(1);
// możemy wypisać samą tesztę zdania w samym wysoływaniu
// console.log(newname2.slice(1));

console.log(newname2);

// możemy też dodawać style css do js
console.log('%cCześć !@', 'font-size:30px; color: gold;');

for (let i = 1; i < 5; i++) {
    console.log(`%cOkrążenie %cnr %c${i}`, 'font-weight: bold', '', 'color: lime')
}
console.log(`%ckotki`, `background: tomato; padding: 20px; font-size: 20px`)





// Zadanie dotyczące metod zmiennych STRINGA

/*
    Metody do wykorzystania:
    charAt()
    includes()
    replace()* podchwytliwe 🙂 
    slice()
    split()
    toLowerCase()
    toUpperCase()
*/

const text1 = 'powiększ mnie!'
const text2 = 'ZAPISZ MNIE MAŁYMI LITERAMI'
const text3 = '$#%#^ wytnij te dziwne znaki na początku!'
const text4 = 'sprawdź, czy zawieram słowo "czy"'
const text5 = 'wyLoguj w konsoli tylko literę "L", która znajduje się w wyrazie "Wyloguj"'
const text6 = 'pies zamień każde słowo pies, na słowo kot  pies'
const text7 = 'podziel, ten, string, od, przecinków'

console.log(text1.toUpperCase())
console.log(text2.toLowerCase())
console.log(text3.slice(6))
console.log(text4.includes('czy'))
console.log(text5.charAt(2))
console.log(text6.replaceAll('pies', 'kot'))
console.log(text7.split)


console.log(text1.toUpperCase());
console.log(text2.toLowerCase());
console.log(text3.slice(0, 10));
console.log(text3.slice(14, 20));
console.log(text3.slice(6));
console.log(text4.includes('czy'));
console.log(text5.slice(2, 3))
console.log(text5.charAt(2))
console.log(text6)
console.log(text6.replace('pies', 'kot'))
console.log(text6.replaceAll('pies', 'kot'))
console.log(text7.split(''));
console.log(text7.split(','))







// MATERIAŁ I ODCINEJ Z TYPEM NUMBER

const num1 = 23.12
const num2 = "2"

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)
console.log(num1.toFixed())
console.log(num1.toFixed(1))
console.log(parseInt(num2));
console.log(num1 + parseInt(num2));


// MATERIAŁ I ODCINEJ Z TYPEM Boolean

if ('') {
    console.log('TRUE');
} else {
    console.log('FALSE');
}


// MATERIAŁ I ODCINEJ Z TYPEM null i undrfinge

// to są wartości zerowe, że nic nie ma 
// null jest zwracany przez nas, sami go ustawiamy
// undefined jest zwracany przez program tak jak js
let b = null
let a
console.log(a)
console.log(b)



// MATERIAŁ I ODCINEJ Z TYPEM ZŁOŻONYM

// lista
const color2 = [123, 'abc', true,];
console.log(color2)

// funkcje (są przynajmniej 4 funkcje)
function test2() {
    console.log('lorem lorem lorem')
}
test2()

// obiekty
const person = {
    name3: 'Borek',
    age3: 23,
    favColor: null
}
console.log(person);





// MATERIAŁ I ODCINEJ Z OPERATORÓW arytmetycznych

let x = 5
const y = 8

const add = x + y
const subtraction = x - y
const multiply = x * y
const divide = x / y
console.log(add)
console.log(subtraction)
console.log(multiply)
console.log(divide)

x++
console.log(`Inkrementacja ${x}`)
x++
console.log(`Inkrementacja ${x}`)
x++
console.log(`Inkrementacja ${x}`)


x--
console.log(`Dekrementacja ${x}`)
x--
console.log(`Dekrementacja ${x}`)




// modulo  jest wynikiem z dzielenia

let modulo = 10 % 3
console.log(' ')
console.log('Reszta z dzielenia')
console.log(modulo)

let modulo2 = 10 % 8
console.log(modulo2)

let modulo3 = 10 % 7
console.log(modulo3)



// MATERIAŁ I ODCINEJ Z OPERATORÓW przypisania

let c = 10
let z = 5
console.log(' ')
console.log(c)
console.log(z)
console.log(c + z)

x = x + y
x += y
console.log(x)
x = x - y
x -= y
console.log(x)
x = x * y
x *= y
console.log(x)
x = x / y
x /= y
console.log(x)
x = x % y
x %= y
console.log(x)


// MATERIAŁ I ODCINEJ Z OPERATORÓW porównania

// == porównuje zawartość
// === porównuje zawartość oraz typ
console.log(10 == '10')
console.log(10 === '10')
console.log('10' === '10')
console.log(' --- ')

console.log(10 != '10')
console.log(10 !== '10')
console.log('10' !== '10')

console.log(' --- ')

console.log(10 < 5)
console.log(10 > 5)
console.log(10 <= 5)
console.log(10 >= 5)



// MATERIAŁ I ODCINEJ Z OPERATORÓW logiczne
if (5 < 6 && 5 > 6) {
    console.log(':)');
} else {
    console.log(' :( ');
}

if (false || true) {
    console.log(':)');
} else {
    console.log(' :( ');
}


// potęga
if (false ** true) {
    console.log(':)');
} else {
    console.log(' :( ');
}


if (false ** true) {
    console.log(':)');
} else {
    console.log(' :( ');
}


if (false ** true) {
    console.log(':)');
} else {
    console.log(' :( ');
}



// typ danych
if (!('10' === 10)) {
    console.log(':)');
} else {
    console.log(' :( ');
}










// MATERIAŁ I ODCINEJ Z Instrukcje warunkowe if, else

const pass = 'asfwwwwwwwsasd!'
console.log(pass);

if (pass.length > 10) {
    console.log('Masz dobre hasło')
} else {
    console.log('Masz za krótkie hasło')
}

const color3 = 'blue'

if (color3 == 'blue') {
    if (10 > 0) {
        console.log('true true');
    } else {
        console.log('okoko')
    }

} else {
    console.log('false')
}


console.log(' ')

if (pass.length > 10 && pass.includes('!')) {
    console.log('Masz rewelacyjne hasło')
} else if (pass.length > 10) {
    console.log(`Masz dobre hasło`)
} else {
    console.log(`Masz za którkiw hasło`)
}






// MATERIAŁ I ODCINEJ Z Instrukcje warunkowe switch
// switch służy do wyszukiwania tego czego szukamy
// jak szukamy wtorku, to wyszukujemy wtorek



const day = 'czwartek'

if (day === 'poniedziałem') {
    console.log('dzisiaj jest poniedziałek')
} else if (day === 'wtorek') {
    console.log('dzisiaj jest wtorek')
} else if (day === 'środa') {
    console.log('dzisiaj jest środa')
} else if (day === 'czwartek') {
    console.log('dzisiaj jest czwartek')
} else if (day === 'piątek') {
    console.log('dzisiaj jest piątek')
} else {
    console.log('Weekend')
}

console.log(' ')

switch (day) {
    case 'poniedziałek':
        console.log('dzisiaj jest poniedziałek')
        break;
    case 'wtorek':
        console.log('dzisiaj jest wtorek')
        break;
    case 'środa':
        console.log('dzisiaj jest środa')
        break;
    case 'czwartek':
        console.log('dzisiaj jest czwartek')
        break;
    case 'piątek':
        console.log('dzisiaj jest piątek')
        break;

    default:
        console.log('weekend')
}




// MATERIAŁ I ODCINEJ Z Instrukcje operatory warunkowe 
const v = 100
const newV = (v > 20) ? `${v} > 20` : `${v} < 20`
console.log(newV)


const is_Logged_in = true

function Logged_In() {
    console.log('Zalogowany')
}
function logged_Out() {
    console.log('Nie Zalogowany')
}

if (is_Logged_in) {
    Logged_In()
} else {
    logged_Out()
}

is_Logged_in ? Logged_In() : logged_Out()





// Zadanie 1 z IF

const X = 50
const Y = 30

if (X >= Y) {
    console.log(`${X} jest większe, niż ${Y}`)
} else {
    console.log('nie jest większe')
}

// Zadanie 2 z IF & else




// zadanie 6
console.log(' ')
console.log('zadanie 6')

let z6x = 60
z6x >= 100 ? console.log(' x >= 100') : null;
z6x >= 100 ? console.log(' x >= 100') : z6x > 30 ? console.log('x jest średniakiem') : null;

z6x >= 100 ? console.log(' x >= 100') : z6x > 30 ? console.log('x jest średniakiem'.toUpperCase()) : z6x <= 30 ? console.log('jest mały') : null;

if (z6x >= 100) {
    console.log('x > 100')
} else if (z6x <100 && z6x > 30) {
    console.log('x jest średniakiem')
} else if (z6x <= 30) {
    console.log('jest mały')
}






// MATERIAŁ I ODCINEJ Z Instrukcje  Pętle For

console.log(' ');

for (let i = 0; i <= 6; i++) {
    console.log(i);
}

const animels = ['🥷','🦬','🫓','🪆']
console.log(' ')
console.log(animels[3])

console.log(' ')
for (let n = 0; n < 6; n++){
    console.log(animels[n]);
}


console.log(' ')
for (let n = 0; n < animels.length; n++){
    console.log(animels[n]);
}

console.log(' ')
const color4 = ['🟠','🟡', '🟢', '🟣', '🟤'];
for (let m = 0; m < color4.length; m++) {
    console.log(color4[m])   
}

// MATERIAŁ I ODCINEJ Z Instrukcje  Pętle While




























