// Введение в тип Symbol в JavaScript

/* Тип Symbol предназначен для создания уникальных идентификаторов. Эти идентификаторы могут быть использованы для создания уникальных ключей объектов.

Давайте для примера создадим символ:

let sym = Symbol();
console.log(sym);

Можно создать несколько символов:

let sym1 = Symbol();
let sym2 = Symbol();

console.log(sym1, sym2);

Созданные нами символы будут уникальными. Это значит, что при сравнении они не будут равны:

let sym1 = Symbol();
let sym2 = Symbol();

console.log(sym1 === sym2); // false */

/* let sym1 = Symbol();
let sym2 = Symbol();

console.log(sym1, sym2); */

// Описания символа в JavaScript

/* Символам можно добавлять описания. Эти описания ни на что не влияют, просто являются подсказкой о том, что содержится в символе:

let sym = Symbol('текстовое описание');
console.log(sym); */

/* let sym1 = Symbol('Привет, Тата');
let sym2 = Symbol('Как дела?');

console.log(sym1, sym2); */

// Символы ключи объектов в JavaScript

/* Давайте для какого-нибудь объекта добавим ключ с типом Symbol. Пусть для примера у нас есть следующий объект:

let obj = {a: 1, b: 2, c: 3};

Добавим в этот объект новый элемент с ключом из символа:

let sym = Symbol();
obj[sym] = 'text'; */

/* let obj = {a: 1, b: 2, c: 3};

let sym = Symbol();
obj[sym] = 'text';

console.log(obj); */

// Перебор объекта с символами в JavaScript

/* Преимуществом типа Symbol в качестве ключа объекта является то, что такие ключи не будут участвовать в переборе циклом.

Давайте посмотрим на примере. Пусть у нас есть следующий объект:

let obj = {a: 1, b: 2, c: 3};

Добавим в этот объект новый элемент с ключом из символа:

let sym = Symbol();
obj[sym] = 'text';

Переберем этот объект циклом. В результате мы увидим все элементы, кроме нашего с ключом из символа:

for (let key in obj) {
    console.log(obj[key]); // 1, 2, 3
} */

/* let obj = {a: 1, b: 2, c: 3};

let sym = Symbol();
obj[sym] = 'text';

console.log(obj);

for (key in obj) {
    console.log(obj[key]);
} */

// Функция в объекте в JavaScript

/* С помощью символов в объекты можно добавлять функции и эти функции не будут участвовать в переборе. Давайте попробуем. Пусть у нас есть объект:

let obj = {a: 1, b: 2, c: 3};

Создадим символ:

let sym = Symbol();

Запишем в объект функцию с ключом в виде нашего символа:

obj[sym] = function() {
    console.log('!!!');
};

При переборе объекта наша функция перебираться не будет:

for (let key in obj) {
	console.log(obj[key]); // 1, 2, 3
}

Получим нашу функцию, в качестве ключа передав наш символ (ту же переменную):

let func = obj[sum];

func();

Можно сократить код:

obj[sym](); */

/* let obj = {a: 1, b: 2, c: 3};

let sym = Symbol();

obj[sym] = function() {
    let date = new Date();
    let time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    console.log(time);
}

obj[sym](); */

// Операции с объектами в функции в JavaScript

/* Давайте добавим в объект функцию, которая будет выполнять некоторую полезную операцию. Например, будет находить сумму элементов объекта.

Пусть у нас есть объект:

let obj = {a: 1, b: 2, c: 3};

Создадим символ:

let sym = Symbol();

Запишем функцию:

obj[sym] = function() {
	
};

В функции, привязанной к объекту this будет указывать на сам объект:

obj[sym] = function() {
    console.log(this); // {a: 1, b: 2, c: 3} 
}

Найдем с помощью нашей функции сумму элементов объекта:

obj[sym] = function() {
    let sum = 0;

    for (let key in this) {
        sum += this[key];
    }

    return sum;
};

Вызовем нашу функцию, получив сумму элементов объекта:

let sum = obj[sym]();
console.log(sum); // выведет 6 */

/* let arr = [1, 2, 3];

let sym = Symbol();


arr[sym] = function() {
    let sum = 0;

    for (let elem of this) {
        sum += elem;
    }
    return sum;
}

let sum = arr[sym]();
console.log(sum);

arr.push(4);
arr.push(5);
arr.push(6);

sum = arr[sym]();
console.log(sum); */

// Глобальные символы в JavaScript

/* С помощью метода Symbol.for можно создавать символы с именем. Эти символы будут сохранены в глобальный реестр символов и доступ к ним можно будет получить из любого места кода.

Давайте посмотрим, как это работает. В одной функции создадим символ:

function func1() {
    let sym = Symbol.for('test');
    return sym;
}

Теперь в другой функции получим доступ к этому символу по его имени:

function func2() {
    let sym = Symbol.for('test');
    return sym;
}

Проверим, что обе функции содержат один и тот же символ. Вызовем наши функции:

let sym1 = func1();
let sym2 = func2();

Сравним символы:

console.log(sym1 === sym2); // true */

/* let obj1 = {a: 1, b: 2, c: 3};
let obj2 = {d: 4, e: 5, f: 6};
let obj3 = {g: 7, h: 8, i: 9};

let sym = Symbol.for('sum');

function func() {
    let sum = 0;
    for (let key in this) {
        sum += this[key];
    }
    return sum;
}

obj1[sym] = func;
obj2[sym] = func;
obj3[sym] = func;

console.log(obj1[sym]());
console.log(obj2[sym]());
console.log(obj3[sym]()); */

// Получение имени символа в JavaScript

/* Имея переменную с символом, можно получить его имя в глобальном реестре. Это делается с помощью метода Symbol.keyFor. Давайте попробуем. Создадим символ с именем:

let sym = Symbol.for('test');

Получим его имя по его переменной:

let key = Symbol.keyFor(sym);
console.log(key); // выведет 'test' */

/* let sym1 = Symbol.for('test1');
let sym2 = Symbol.for('test2');

let key1 = Symbol.keyFor(sym1);
let key2 = Symbol.keyFor(sym2);

console.log(key1, key2); */

// Хорошо известные символы в JavaScript

/* Существуют специальные встроенные символы, которые используются JavaScript в служебных целях. Такие символы называются well-known symbols (хорошо известные символы).

Примером такого символа служит Symbol.iterator, содержащий в себе функцию, перебирающую массивы. Проверим ее наличие в каком-нибудь массиве:

let arr = [1, 2,,3];
let func = arr[Symbol.iterator];
console.log(func); */

/* let map = new Map();
let func = map[Symbol.iterator];

console.log(func); */

/* let set = new Set();
let func = set[Symbol.iterator];

console.log(func); */