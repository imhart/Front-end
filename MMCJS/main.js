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







// MATERIAŁ I ODCINEJ Z TYPEM table_of_elements

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
} else if (z6x < 100 && z6x > 30) {
    console.log('x jest średniakiem')
} else if (z6x <= 30) {
    console.log('jest mały')
}






// MATERIAŁ I ODCINEJ Z Instrukcje  Pętle For

console.log('');
console.log('Pętle For ');

for (let i = 0; i <= 6; i++) {
    console.log(i);
}

const animels = ['🥷', '🦬', '🫓', '🪆']
console.log(' ')
console.log(animels[3])

console.log(' ')
for (let n = 0; n < 6; n++) {
    console.log(animels[n]);
}


console.log(' ')
for (let n = 0; n < animels.length; n++) {
    console.log(animels[n]);
}

console.log(' ')
const color4 = ['🟠', '🟡', '🟢', '🟣', '🟤'];
for (let m = 0; m < color4.length; m++) {
    console.log(color4[m])
}





// MATERIAŁ I ODCINEJ Z Instrukcje  Pętle While
// nie możemy lisać leta wśrodku pentli while
console.log('Pętle While ')

let kotki = 0;
while (kotki < 6) {
    console.log(kotki)
    kotki++
}

// MATERIAŁ I ODCINEJ Z Instrukcje  Pętle do ...while
console.log('Pętle do ...while ')
let k = 0;

do {
    k++
    console.log(k)
} while (k < 6)

// MATERIAŁ I ODCINEJ Z Instrukcje  Pętle For of
console.log('Pętle For of ')

const table_of_elements = [1, 2, 3, 4, 5, 10]

for (const element of table_of_elements) {
    console.log(table_of_elements);
    console.log(typeof (table_of_elements))
}

console.log(' ')
for (const element of table_of_elements) {
    console.log(element);
}


console.log(' ')
for (const element of table_of_elements) {
    console.log(element * 3);
}
console.log(' ')


// MATERIAŁ I ODCINEJ Z Instrukcje  for each
table_of_elements.forEach(element => {
    console.log(element);
});



// zadanie 1 z for
console.log(' ')
console.log('     zadanie 1 z for')

const cities = ['Olsztyn', 'Olsztynek', 'Poznań'];
for (let j = 0; j < cities.length; j++) {
    console.log(`to misto nazywa się : ${cities[j].toUpperCase()}`);
}
for (let j = 0; j < cities.length; j++) {
    console.log(`to misto nazywa się : ${cities}`);
}
console.log(' ')

const furniture = ['desk', 'chair', 'dresser']
for (let h = 0; h < furniture.length; h++) {
    console.log(`takie są meble w domu: ${furniture}`)
}
for (let h = 0; h < furniture.length; h++) {
    console.log(`takie są meble w domu: ${furniture[h].toUpperCase()}`)
}

// const color4 = ['🟠', '🟡', '🟢', '🟣', '🟤'];
// for (let m = 0; m < color4.length; m++) {
//     console.log(color4[m])
// }



// zadanie 2 z for
console.log(' ')

console.log('     zadanie 2 z While')

let g = 0;

while (g < 10) {
    g += 2
    console.log(g);
}

console.log('     zadanie 3 z do...While')
let f = 20

do {
    f = f - 3
    console.log(f)
} while (f > 0)

console.log('     zadanie 3 z do...While')

// Zapisuje nam wartość całęgo f i dlatego ma już przypisaną wartość -3 po pierwszej pętli 
do {
    f = f - 3
} while (f > - 5)
console.log(f)




console.log('     zadanie 4 z for of')

let tabel_number = [5, 8, 10, 23, 48, 60, 65]
console.log(tabel_number)

for (let tabel_number_test = 0; tabel_number_test < tabel_number.length; tabel_number_test++) {
    console.log(`licza ${tabel_number[tabel_number_test] / 5}`)
}
console.log(' --------------')




let tabel_number2 = [5, 8, 10, 23, 48, 60, 65]


for (let tabel_number_test2 of tabel_number2) {
    if (tabel_number_test2 % 2 === 0) {
        console.log(`%clicza ${tabel_number_test2} jest parzyste`, `background-color:Violet; color:black; padding:10px`)
    } else {
        console.log(`%clicza ${tabel_number_test2} NIE jest parzyste`, 'background-color:DodgerBlue; color:black; padding: 10px;')

    }
}



// gówno jebane, ciężkie do połapania
// Wypisywanie wszystkich liczb z tablicy i sprawdzanie czy jest liczna parzysta, czy nie parzysta i koloruje na różne kolory
for (let tabel_number_test3 of tabel_number2) {
    if (tabel_number_test3 % 2 === 0) {
        console.log(`%cliczba ${tabel_number_test3} jest parzysta`, `background-color: Aquamarine; color:black; padding:10px`)
    } else {
        console.log(`%cliczba ${tabel_number_test3} NIE jest parzysta`, `background-color: Aqua; color:black; padding:5px`)
    }
}




// MATERIAŁ I ODCINEJ Z Instrukcje  TABLICE



let tabel_course = [1, 2, 3, 4, 5, 6, 7, 8, 9]




console.log('')
console.log('')
console.log(' ZACZYNAMY TABLICE ')
console.log('')
// const bt1 = document.querySelector('button:nth-of-type(1)')
// const bt2 = document.querySelector('button:nth-of-type(2)')
// const bt3 = document.querySelector('button:nth-of-type(3)')

// console.log(bt1, bt2, bt3);


// function btnMsg(e) {
//     console.log(`kliknięto ${e.target.textContent} ! 😃😃😃😃`)
// }

// bt1.addEventListener('click', btnMsg )
// bt2.addEventListener('click', btnMsg )
// bt3.addEventListener('click', btnMsg )



// Stworzyliśmy obiekt tablico podobnt dla przycisków
// pobiera wszystkie przyciski ze strony 
const btn = document.querySelectorAll('button')
console.log(btn);


// wypisywanie wiadomości i wyczytywanie zawartości z przycisku
function btnMeesage(element) {
    element.style.color = "red";
    element.style.backgroundColor = "blue";
    console.log(`kliknięto ${element.textContent} ! 😃😃😃😃`);
}

// Pętla for each przejdzie po całej tablicy i wykona pewien kod
// addEventListener nasłuchuje i obserwuje akcji na konkretnym elemencie, który wskazałem. 
btn.forEach(btnf => btnf.addEventListener('click', () => {
    btn.forEach(element => {
        element.style.color = ""
        element.style.backgroundColor = ""
    })
    btnMeesage(btnf)
    console.log(btnf)
}))




// MATERIAŁ I ODCINEJ Z  TABLICAMI (Array)  metody na tablicach

console.log(tabel_course);

// metoda unshift dodaje nam elementy na początku tablicy
tabel_course.unshift(10, 20)
console.log(tabel_course);


// metoda shift usuwa nam element na początku tablicy, nasz pierwszy element z index 0
tabel_course.shift()
tabel_course.shift()
console.log(tabel_course);

// metoda push dodaje nam element na końcu tablicy
tabel_course.push(11, 12)
console.log(tabel_course);

// element pop usuwa nam element na końcu tabeli
tabel_course.pop()
console.log(tabel_course);

// funkcja mnożąca razy 3
function function_table_curse(x) {
    return x * 2
    // console.log(x * 3)
}

// to jest mnożnik funcki function_table_curse
function_table_curse(2)


// wykonuje zapisaną fukcję na każdego lelmentu podanej tablicy
// w nawiasach wpisujemy funkcję, która ma się wykonać
// zwraca nam nową tablicę
let new_tabel_course = tabel_course.map(function_table_curse);
console.log('');
console.log('map()');
console.log('');
console.log(tabel_course);
console.log(new_tabel_course);
console.log(tabel_course);
console.log('');



tabel_course.push(22, 33, 44)
console.log(tabel_course);

// nie destrukcjyjne łączenie 2 table w nową  i można dodawać pojedyńce wartości
let table_abc = ['a', 'b', 'c']
const new_abc = tabel_course.concat(12, table_abc)

console.log(new_abc)



//   spread & rest operator
// zapisujemy go tak ...
// rozkładamy naszą tablicę na odzienne stringi (w tym przyadku 3)
// wyciągamy z nich wartości 
console.log('')
console.log('spread & rest operator')
console.log(table_abc);
console.log(...table_abc)

// rozsmarowowuje tabelę i łączy jes jako oddzielne elementy 
const spread_abc = [table_abc, 'łączę', tabel_course]
const spread_abcv1 = [...table_abc, 'łączę', ...tabel_course]
console.log(spread_abc)
console.log(spread_abcv1)



// reverse
// metoda reverse odwracająca całą tablicę 
console.log("")
console.log('metoda reverse odwraca całą tablicę')

const array_1 = [1, 2, 3, 4, 5, 'a'];
console.log(array_1);
array_1.reverse()
console.log(array_1); // [5,4,3,2,1]


// indexOf( )
// Zwraca indeks wyszukiwanego elementu w tablicy lub -1, jeśli nie ma tego indexu.
console.log(' ');
console.log('indexOf( )');

console.log(array_1.indexOf('a'));
console.log(array_1.indexOf(5));
console.log(array_1.indexOf(4));

// includes( )
// Zwraca na informację true, albo false i sprawdza czy jest ten elenent w tablicy, czy jego nie mamy
console.log(' ');
console.log('includes( )');
console.log(array_1)
console.log(array_1['a'])
console.log(array_1.includes(0));
console.log(array_1.includes(1));
console.log(array_1.includes('a'));



// Tworzy nową tablicę z wynikami wywołania podanej funkcji dla każdego elementu.
// for Each nie zwraca nam nic , a map zwraca nam nową tablicę 
console.log('')
console.log('map()')
console.log('Tworzy nową tablicę z wynikami wywołania podanej funkcji dla każdego elementu.')
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr)
console.log(arr.map(item => item * 5)); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// Zapisywanie stałej dla item map
const map_test = arr.map(item_map => item_map * 3)
console.log(map_test)

console.log(arr.map(item_map => item_map * 10))


arr.forEach(item_map => {
    console.log(item_map * 10)
})

console.log(' ')








// MATERIAŁ I ODCINEJ Z  TABLICAMI (Array) zadanie metody na tablicach

const array_task1_numbers = [0, 0, 1, 1, 2, 2, 2]
const array_task1_color = ['red', 'green', 'blue', true, 123]
const array_task1_cars = [123, true, 'audi', 'bmw', 'mercedes', 'ferrari', '🤷‍♂️', '👀']

console.log('ZADANIE Z TABLIC 1 i metoda slice ')
console.log('usuwam 2 pierwsze elementy tablei ')
console.log(array_task1_numbers.slice(2, 7));
console.log('zostawiam tylko 2 pierwsze elementy tabeli')
console.log(array_task1_numbers.slice(0, 2));
console.log('wypisuję tylko 4 pierwsze elementy tabeli ')
console.log(array_task1_numbers.slice(0, 4));
console.log('wypisuję 3 ostatnie elementy tabeli')
console.log(array_task1_numbers.slice(4, 7));
console.log('zostawiam tylko 3 ostatnie elemeny tabeli')
console.log(array_task1_numbers.slice(-3));

const array_task1_cars_new = array_task1_cars.slice(2, 6)
console.log(array_task1_cars_new)



console.log(' ')
console.log('funkcja modulo i odnajdywanie liczb parzystych za pomocą filter ')
function modulo_function(x) {
    return x % 2 === 0
}

// filtruje nam naszą tablicę i wypisuje tylko te elemeny które spełniają nasze warunki
// callback czyli funkcja, którą przekazujemy do innej funkcji 
console.log(tabel_course.filter(modulo_function));




console.log(' ')
console.log('ZADANIE Z TABLIC 1 i metoda slice ')

console.log(tabel_course)

console.log('dodaję na początku a i b metodą unshift')
tabel_course.unshift('a', 'b')
console.log(tabel_course)

console.log('dodaję na końcu e i f metodą push')
tabel_course.push('e', 'f')
console.log(tabel_course)


console.log('sprawdzam "b" i wypisuje jego index i czy jest ogólnie w tablicy')
console.log(tabel_course.indexOf('b'));
// console.log(tabel_course.in)



// ZADANIE Z TABLIC 2 i metoda slice
console.log(' ')
console.log('ZADANIE Z TABLIC 2 i concat, spread ')
console.log(array_task1_cars)
console.log(array_task1_color)
const array_task1_cars_and_color = array_task1_cars.concat(array_task1_color)
console.log(array_task1_cars_and_color)
console.log(...array_task1_cars, ...array_task1_numbers)



// ZADANIE Z TABLIC 3 i metoda slice


// Używać for of na tablicach 
// arr.forEach(item_map => {
//     console.log(item_map * 10)
// })
// array_task1_color

console.log(array_1)
console.log(array_task1_numbers)

console.log(' ')
console.log('ZADANIE Z TABLIC 3 i metoda slice ')

let new_table5 = []

// tabel_number2.forEach(item_numer => {
//     console.log(item_numer * 5)
//     new_table5.push(item_numer * 5)
// })
// console.log(new_table5)

// TWORZY I ZWRACA NOWĄ TABLICĘ, NIE MODYFIKUJE ORYGINALNEJ TABLICY, tWORZY SOBIE KOPIĘ
// FOR EACH SŁUŻY DO OPERACJI NA KAŻDEJ TABLICY, ALE JEJ NIE ZAPISUJE 
// MOŻEMY ZA POMOCĄ MAP ZMIENIAĆ STAŁĄ TABLICY  FOREACH ZMIENIAĆ 

// const new_table55 = tabel_number2.forEach(item55 => item55 * 5)
const new_table55 = tabel_number2.map(item55 => item55 * 5)
console.log(new_table55)


console.log(" ")

for (const item5 of new_table5) {
    if (item5 % 2 === 0) {
        console.log(`liczba przysta:  ${item5} tego typu 😎 `)
    } else {
        console.log(`liczba NIE parzysta :  ${item5} tego typu 😎 `)
    }
}





const person1 = {
    name4: "Jason",
    age: 25
};

console.log(Object(person1))
console.log(Object.values(person1))
console.log(Object.keys(person1))






console.log(' ')
console.log('ZADANIE Z TABLIC 4 i metoda slice ')

console.log(array_task1_color)
array_task1_color.unshift('pink')
console.log(array_task1_color)
array_task1_color.push('purple')
console.log(array_task1_color)


// usuwa elementy i można zastąpić nowy 
// 1 element zaczynamy usuwanie i od którego elementu
// 2 element ile elementów ma usunąć 
// 3  co ma wstawić w to miejsce 

array_task1_color.splice(4, 2, 'dark')
console.log(array_task1_color)
// tab[tab.length] = "Piotrek"


for (let i = 0; i < array_task1_color.length; i++) {
    console.log(`kolor :  ${array_task1_color[i].charAt(0).toUpperCase() + array_task1_color[i].slice(1)}`);
}




console.log(' ')
console.log('ZADANIE Z TABLIC 5 i metoda slice ')


console.log(array_task1_cars)
array_task1_cars.shift()
array_task1_cars.shift()
array_task1_cars.pop()
array_task1_cars.pop()
array_task1_cars.pop()
array_task1_cars.push('Nissan', 'Dodge')

console.log(array_task1_cars)

if (3 <= array_task1_cars.length) {
    console.log(`w tablicy jest WIĘCEJ niż 3 elementy ta wartość, to : ${array_task1_cars.length}  :)`)
} else {
    console.log(`w tablicy jest MNIEJ niż 3 elementy ${array_task1_cars.length}  :)`)
}

array_task1_cars.length > 3 ? console.log('Jest ok') : console.log('nie jest ok');


if (array_task1_cars.includes('Dodge')) {
    array_task1_cars.push('Mazda')
    console.log(array_task1_cars)
} else {
    array_task1_cars.pop()
    console.log(array_task1_cars)
}









console.log(' ')
console.log('ZADANIE Funkcje i wprowadzenie')



// deklaracja funcki 
// czesc()

function czesc() {
    console.log('cześć')
}
czesc()



czesc()







// wyrażenie funkcji
const czesc1 = function () {
    console.log('czesc1')
}
czesc1()





// funkcja strzałkowa
// w środku znajduje się argument
function czesc3(params, params2, params3) {
    console.log(params, params3)
}
// tutaj mamy parametr
czesc3(`czesc3`, `kocharz` ,`kamil`)


function suma(x,y=5,z=[]) {
    console.log(z)
    if (x < y){
        // return
        console.log(`if`)
    } else {
        console.log(z.map(element => element + (x + y)))
    }
    // console.log(x + y + z[])
}

suma(7, 6, [1,3,4])


// funkcja anonimowa 
console.log('')
console.log('funkcja anonimowa')



const heading = document.querySelector('h1')
// nie jest wiadomo co robi ta funkcja 
//  Jeżeli chcielibyśmy ją napisać na nowo, to nie mamy do niej dostępu i trzba by było napisać ją na nowo 

heading.addEventListener('click', function() {
    console.log('guzik !');
})



// funkcja strzałkowa 
console.log('')
console.log('funkcja strzałkowa')

const test3 = (name5) => {
    console.log(`Mam na imię ${name5}`)
}
test3(`Daniel`)


const test4 = name6 => console.log(`Mam na imię ${name6}`)
test4('Arek')



function test5(name7) {
    console.log(`Mam na imię ${name7}`)
}
test5('Kuba')



const test6 = (name8, age4) => console.log(`Mam na imię : ${name8}, mam : ${age4} lat`)
test6(`Michał`, 13)



// const test7 = (num3, num4) => num3 * num4


// funkcja i przypisywanie do nowej zmiennej 
const test8 = (x, y) => {
    return x + y
}

let wynik_test8 = test8(1,2)
console.log(test8(3,4))




//FUNKCJE domyślne parametry funkcji
console.log('')
console.log('FUNKCJE domyślne parametry funkcji ')


// nfn Tworzy nam się funkcja strzałkowa 
const hello = (name9 = `drogi użytkowniku`) => {
    console.log(`Cześć ${name9}, jak się masz? `)
}


hello()
hello('kaktus')


const funkcja_dodaj = (x=5, y=5) => {
    console.log(x + y)
}

funkcja_dodaj()
funkcja_dodaj(10)
funkcja_dodaj(10,10)








//FUNKCJE operator rest
console.log('')
console.log('FUNKCJE operator rest ')

//SPREAD
const array_2 = [1,2,3,4,5,6,7,8,9]
console.log(array_2)
console.log(...array_2)


//REST of all czyli wszystkie inne pozostałę 

// wyciąga wszystko inne co zostało w a ni jest x,y , czyli pierwszą i drugą wartością, to przypisuje nam do tablicy z
const numbers5 = (x,y, ...z) => {
    console.log(x,y,z)
    console.log(z)
    console.log(z.map(el => el * 2))
}

numbers5(1,2,3,4,5,6,7,8,9,10,11,12,13,14)



//FUNKCJE zakresy
console.log('')
console.log('FUNKCJE zakresy ')

const zakresy = `Lisa`

const zakresy2 = () => {
    const zakresy = `Lili`
    const age = 23
    console.log(age)
    console.log(`name w funkcji ${age}`)
    console.log(zakresy)
    console.log(`name w funkcji ${zakresy}`)

    const zakres3 = () => {
        
    }
    const zakres4 = () => {

    }
}
zakresy2()

console.log(`nazwa poza funkcją - ${zakresy}`)























