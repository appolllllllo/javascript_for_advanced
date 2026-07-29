// Итерируемые объекты в JavaScript

/* Любой объект, который можно перебрать через цикл for of, называется итерируемым.

Массивы являются одним из частных случаев итерируемых объектов:

let arr = [1, 2, 3];

for (let elem of arr) {
	console.log(elem);
}

Коллекции Map также являются итерируемыми объектами:

let map = new Map();
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);

for (let elem of map) {
	console.log(elem);
}

Коллекции NodeList также являются итерируемыми объектами:

let elems = document.querySelectorAll('p');

for (let elem of elems) {
	console.log(elem);
}

Кроме того, JavaScript позволяет сделать итерируемым все, что угодно. Для этого существуют специальные манипуляции, которые мы будем изучать в следующих уроках:

let obj = {a: 1, b: 2, c: 3};

// тут хитрые манипуляции

for (let elem of obj) { // можно 
	перебирать 
	console.log(elem);
} */

/* let str = 'Hello, world';

for (let char of str) {
    console.log(char);
} */

/* let set = new Set([1, 1, 2, 3, 3]);

for (let value of set) {
    console.log(value);
} */

// Функция итератора в JavaScript

/* Все итерируемые объекты имеют специальную структуру, которая называется итератор. Итератор представляет собой функцию, позволяющую перебирать объект.

Давайте посмотрим на примере массива:

let arr = [1, 2, 3];

Функция итератора для любого итерируемого объекта хранится с ключом в виде хорошо известного символа Symbol.iterator:

let func = arr[Symbol.iterator];

Мы можем убедиться, что под данным ключом хранится функция (но ее код будет скрыт от нас браузером):

console.log(func); // функция */

/* let str = 'Hello, world';

let func = str[Symbol.iterator];

console.log(func); */

/* let set = new Set([1, 1, 2, 3, 3]);

let func = set[Symbol.iterator];

console.log(func); */

/* let map = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);

let func = map[Symbol.iterator];

console.log(func); */

/* let arr = [1, 2, 3];

let func = arr[Symbol.iterator];

console.log(func); */

/* let elems = document.querySelectorAll('p');

let func = elems[Symbol.iterator];

console.log(func); */

// Вызовы итератора в JavaScript

/* Каждый последовательный вызов итератора должен возвращать объект специальной структуры. Давайте ее рассмотрим. Пусть у нас есть массив:

let arr = [1, 2, 3];

Получим итератор массива в переменную:

let itter = arr[Symbol.iterator]();

Теперь в этой переменной содержится объект с методом next. Этот метод будет возвращать объект с ключом value, содержащим значение элемента, и ключом done, содержащим информацию о том, закончился ли перебор или нет:

console.log( iter.next() ); // {value: 1, done: false} 

Последовательный вызов метода next будет каждый раз выдавать следующий элемент:

console.log( iter.next() ); // {value: 1, done: false} 
console.log( iter.next() ); // {value: 2, done: false} 
console.log( iter.next() ); // {value: 3, done: false} 

А как только элементы закончатся, мы увидим следующие значения:

console.log( iter.next() ); // {value: undefined, done: true} */

/* let map = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);

let iter = map[Symbol.iterator]();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next()); */

/* let elems = document.querySelectorAll('p');

let iter = elems[Symbol.iterator]();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next()); */

/* let elems = document.getElementsByTagName('p');

let iter = elems[Symbol.iterator]();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next()); */

// Генераторы в JavaScript

/* Существуют специальные функции, с помощью которых можно создавать свои итераторы. Такие функции называются генераторы. Имена таких функций должны начинаться со звездочки:

function *func() {

}

Внутри генераторов используется ключевое слово yield, указывающее то, что должен вернуть итератор на следующем вызове. Для примера давайте сделаем так, чтобы первый вызов возвращал 1, второй - 2, а третий - 3:

function *func() {
    yield 1;
    yield 2;
    yield 3;
}

Генератор своим результатом возвращает итератор:

let iter = func();

Давайте проверим работу нашего итератора:

console.log(iter.next()); // {value: 1, done: false} 
console.log(iter.next()); // {value: 2, done: false} 
console.log(iter.next()); // {value: 3, done: false} 
console.log(iter.next()); // {value: undefined, done: true} */

/* function *func() {
    yield 5;
    yield 4;
    yield 3;
    yield 2;
    yield 1;
}

let iter = func();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next()); */

// Циклы в генераторах в JavaScript

/* Внутри генераторов можно использовать циклы. При этом мы можем ставить циклы на паузу с помощью yield. Давайте посмотрим на примере. Будем ставить цикл на паузу каждую итерацию:

function *func() {
    for (let i = 1; 1 <= 3; i++) {
        yield i;
    }
}

Получим итератор:

let iter = func();

Проверим работу нашего итератора:

console.log(iter.next()); // {value: 1, done: false} 
console.log(iter.next()); // {value: 2, done: false} 
console.log(iter.next()); // {value: 3, done: false} 
console.log(iter.next()); // {value: undefined, done: true} */

/* function *func() {
    for (let i = 10; i >= 0; i--) {
        yield i;
    }
}

let iter = func();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next()); */

/* function *func(num) {
    for (; num >= 0; num--) {
        yield num;
    }
}

let iter = func(7);

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next()); */

/* function *func(num) {
    for (; num >= 1; num /= 2) {
        yield num;
    }
}

let iter = func(8);

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next()); */

/* function *func(num) {
    while (true) {
        yield num;
        num *= 2;
    }
}

let iter = func(2);

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next()); */

/* function *fibonacci() {
    let a = 1;
    let b = 1;

    while (true) {
        yield a;
        [a, b] = [b, a + b]; // деструктурирующее присваивание
    }
}

let iter = fibonacci();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next()); */

// Однократная работа итераторов в JavaScript

/* Каждый итератор может участвовать в цикле лишь один раз. Это немного неожиданно, но логично - ведь пройденный итератор устанавливает свое done в false, а значит не может больше перебираться.

Давайте убедимся в этом. Пусть у нас есть следующий генератор:

function *func() {
    yield 1;
    yield 2;
    yield 3;
}

Сделаем итератор:

let iter = func();

Переберем итератор одним циклом:

for (let elem of iter) {
    console.log(elem); // 1, 2, 3
}

А теперь переберем итератор двумя циклами:

for (let elem of iter) {
	console.log(elem); // 1, 2, 3
}
for (let elem of iter) {
	console.log(elem); // не работает
}

Для решения проблемы нужно для каждого нового цикла создавать свой итератор:

let iter1 = func();
for (let elem of iter1) {
	console.log(elem); // 1, 2, 3
}

let iter2 = func();
for (let elem of iter2) {
	console.log(elem); // 1, 2, 3
}

Можем упростить:

for (let elem of func()) {
	console.log(elem); // 1, 2, 3
}

for (let elem of func()) {
	console.log(elem); // 1, 2, 3
} */

/* function *func() {
	for (let i = 1; i <= 3; i++) {
		yield i;
	}
}

for (let elem of func()) {
	console.log(elem);
}
for (let elem of func()) {
	console.log(elem);
} */

// Итератор объекта в JavaScript

/* Давайте создадим итератор, с помощью которого можно будет перебрать обьект. Для начала сделаем генератор, параметром принимающий объект и перебирающий его:

function *func(obj) {
    for (let key in obj) {
        yield obj[key];
    }
}

Создадим теперь итератор:

let iter = func({a: 1, b: 2, c: 3}); 

Переберем итератор циклом:

for (let elem of iter) {
	console.log(elem); // 1, 2, 3
} */

/* function *func(obj) {
    for (let key in obj) {
        yield [key, obj[key]];   
    }
}

let iter = func({a: 1, b: 2, c: 3}); 

for (let elem of iter) {
    console.log(elem);
} */

// Создание итерируемого объекта в JavaScript

/* Давайте создадим настоящий итерируемый объект, который можно будет перебрать через цикл for-of. Для этого объекту нужно добавить соответствующую функцию в Symbol.iterator.

Давайте реализуем. Пусть у нас есть следующий объект:

let obj = {
    a: 1,
    b: 2,
    c: 3,
};

Добавим функцию в Symbol.iterator:

obj[Symbol.iterator] = function() {

}

Превратим эту функцию в генератор:

obj[Symbol.iterator] = function *() { 

}

Внутри нашей функции this будет ссылаться на сам объект:

obj[Symbol.iterator] = function *() {
    console.log(this); // сам объект
}

Запустим в итераторе перебор объекта:

obj[Symbol.iterator] = function *() {
    for (let key in this) {
        yield obj[key];
    }
}

Все, объект можно перебирать циклом for-of:

for (let elem of obj) {
	console.log(elem); // 1, 2, 3
} */

/* let obj = {a: 1, b: 2, c: 3};

obj[Symbol.iterator] = function *() {
    for (let key in this) {
        let newObj = {};
        newObj.key = key;
        newObj.val = this[key];
        yield newObj;
    }
}
    
for (let elem of obj) {
    console.log(elem);
} */

/* let obj = {a: 1, b: 2, c: 3};

obj[Symbol.iterator] = function *() {
    for (let key in this) {
        yield {key: key, val: this[key]};
    }
}

for (let elem of obj) {
    console.log(elem);
} */

// Генератор через вычисляемое свойство в JavaScript

/* В предыдущем уроке мы генератор для объекта присваивали отдельной командой. Таким был наш объект:

let obj = {
	a: 1,
	b: 2,
	c: 3,
};

Так мы задавали генератор:

obj[Symbol.iterator] = function *() {
    for (let key in this) {
        yield obj[key];
    }
}

На самом деле можно переписать наш код по-другому через вычисляемое свойство:

let obj = {
    a: 1,
    b: 2,
    c: 3,
    [Symbol.iterator]: function *() {
        for (let key in obj) {
            yield this[key];
        }
    }
}

Проверим перебор:

for (let elem of obj) {
	console.log(elem); // 1, 2, 3
} */

/* let obj = {
    a: 1,
    b: 2,
    c: 3,
    [Symbol.iterator]: function *() {
        for (let key in obj) {
            yield {key: key, val: obj[key]};
        }
    }
}

for (let elem of obj) {
    console.log(elem);
} */

// Встроенный итератор values в JavaScript

/* Все итерируемые объекты имеют встроенный итератор values, позволяющий перебирать значения. Давайте проверим его на коллекции Map:

let map = new Map;

map.set('a', 1);
map.set('b', 2);
map.set('c', 3);

Получим итератор:

let iter = map.values();

Переберем его циклом:

for (let elem of iter) {
    console.log(elem); // 1, 2, 3
} */

/* let arr = [1, 2, 3];

let iter = arr.values();

for (let elem of iter) {
    console.log(elem);
} */

/* let set = new Set;

set.add(1);
set.add(2);
set.add(3);

let iter = set.values();

for (let elem of iter) {
    console.log(elem);
} */

// Встроенный итератор keys в JavaScript

/* Все итерируемые объекты имеют встроенный итератор keys, позволяющий перебирать ключи. Давайте проверим его на массиве:

let arr = ['a', 'b', 'c'];

Получим итератор:

let iter = arr.keys();

Переберем его циклом:

for (let elem of iter) {
	console.log(elem); // 0, 1, 2
} */

/* let map = new Map();

map.set('a', 1);
map.set('b', 2);
map.set('c', 3);

let iter = map.keys();

for (let elem of iter) {
    console.log(elem);
} */

/* let set = new Set();

set.add(1);
set.add(2);
set.add(3);

let iter = set.keys();

for (let elem of iter) {
    console.log(elem);
} */

// Встроенный итератор entries в JavaScript

/* Все итерируемые объекты имеют встроенный итератор entries, позволяющий перебирать пары ключ-значение. Давайте проверим его на массиве:

let arr = ['a', 'b', 'c'];

Получим итератор:

let iter = arr.entries();

Переберем его циклом:

for (let entry of iter) {
    console.log(entry); // [0, 'a'], [1, 'b'], [2, 'c'] 
}

Выполним деструктуризацию при переборе:

for (let [key, value] of iter) {
    console.log(key); // 0, 1, 2
    console.log(value); // 'a', 'b', 'c' 
} */

/* let map = new Map();

map.set('a', 1);
map.set('b', 2);
map.set('c', 3);

let iter = map.entries();

for (let [key, value] of iter) {
    console.log(key);
    console.log(value);
} */

/* let set = new Set();

set.add(1);
set.add(2);
set.add(3);

let iter = set.entries();

for (let entry of iter) {
    console.log(entry);
} */

/* let elems = document.querySelectorAll('p');

let iter = elems.entries();

for (let entry of iter) {
    console.log(entry);
} */

// Три встроенных итератора в JavaScript

/* На самом деле каждый итерируемый объект содержит не один итератор, а три: values, keys и entries. Для каждого типа объектов по умолчанию применяется свой итератор. Для массивов - это values, а, например, для коллекции Map, это entries.

Обладая этими знаниями, мы теперь можем применить этот принцип к любой коллекции. Например, пусть у нас есть коллекция Map:

let map = new Map();
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);

По умолчанию для этой коллекции применяется итератор entries:

for (let elem of map) {
	console.log(elem); // ['a', 1], ['b', 2], ['c', 3] 
}

Но мы легко можем получить ключи нашей коллекции:

for (let elem of map.keys()) {
	console.log(elem); // 'a', 'b', 'c' 
}

Также можем получить и значения:

for (let elem of map.values()) {
	console.log(elem); // 1, 2, 3
} */

/* В коллекции Set по умолчанию действует итератор values().

Это означает, что при использовании конструкций, требующих итерируемости (например, цикла for...of или spread-оператора ...), JavaScript неявно обращается к методу values(). */

// Оператор spread и итераторы в JavaScript

/* Оператор spread разлагает любой объект, у которого есть итератор. При этом будет браться итератор по умолчанию. Давайте посмотрим на примере. Пусть у нас есть следующая коллекция Map:

let map = new Map();
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);

По умолчанию при разложении получится двухмерный массив:

let arr = [...map];

console.log(arr); // [['a', 1], ['b', 2], ['c', 3]] 

Для получения массива ключей разложим соответствующий итератор:

ler arr = [...map.keys()];

console.log(arr); // ['a', 'b', 'c']

Аналогично поступим для получения массива значений:

let arr = [...map.values()];

console.log(arr); // [1, 2, 3] */

/* let obj = {
	a: 1,
	b: 2,
	c: 3,
	[Symbol.iterator]: function *(){
		for (let key in this){
			yield this[key];
		}
	}
};

let arr = [...map];

console.log(arr); */

// Встроенные итераторы строк в JavaScript

/* Строки также имеют встроенный итератор. Давайте для примера переберем символы строки циклом:

for (let elem of 'abc') {
    console.log(elem); // 'a', 'b', 'c' 
}

А теперь разложим строку через оператор spread:

console.log([...'abc']); // ['a', 'b', 'c'] */

/* let str = '12345';
let sum = 0;

for (let elem of str) {
    sum += Number(elem);
}

console.log(sum); */

/* Давайте получим массив цифр числа. Пусть дано следующее число:

let num = 12345;

Попытка разложить число через spread приведет к ошибке, так как числа не итерируемы:

let num = 12345;
let arr = [...num]; // ошибка

console.log(arr);

Для решения проблемы преобразуем число в строку:

let num = 12345;
let arr = [...String(num)];

console.log(arr); /// ['1', '2', '3', '4', '5'] 

У нас, однако, получился массив строк, а не чисел. Исправим проблему с помощью хитрого приема, используя метод map:

let num = 12345;
let arr = [...String(num)].map(Number);

console.log(arr); // [1, 2, 3, 4, 5] */

/* let num = 1234567;
let arr = [...String(num)].map(Number);
let sum = 0;

for (let elem of arr) {
    sum += elem;
}

console.log(sum); */

// Нумерация DOM элементов в JavaScript

/* Понимания итераторов позволяет легко добавить номера DOM элементам. Пусть, к примеру, у нас есть абзацы:

<p>text</p>
<p>text</p>
<p>text</p>

Давайте получим коллекцию этих абзацев в переменную:

let elems = document.querySelectorAll('p');

Воспользуемся для перебора встроенным итератором entries:

for (let entry of elems.entries()) {
    console.log(entry);
}

Воспользуемся деструктуризацией, чтобы отделить номера от элементов:

for (let [num, elem] of elems.entries()) {
    console.log(num, elem);
}

Добавим каждому абзацу в конец его порядковый номер:

for (let [num, elem] of elems.entries()) {
    elem.textContent += num;
} */

/* let items = document.querySelectorAll('table tr td');

for (let [num, item] of items.entries()) {
    item.textContent += num;
} */

// Получение данных DOM элементов в JavaScript

/* Деструктуризация позволяет нам получать текст и значения атрибутов DOM прямо в цикле. Давайте разберемся, как это работает. Пусть у нас есть следующие абзацы:

<p id="id1">text1</p>
<p id="id2">text2</p>
<p id="id3">text3</p>

Давайте получим коллекцию этих абзацев в переменную:

let elems = document.querySelectorAll('p');

Переберем элементы циклом, отделив номера и сами элементы:

for (let [key, elem] of elems.entries()) {
    console.log(key, elem);
}

А теперь давайте выполним деструктуризацию элементов, получив из них их id и тексты:

for (let [key, {id, textContent}]
    of elems.entries()) {
        console.log(key, id, textContent);
    } */

/* let elems = document.querySelectorAll('input');

for (let [num, {id, value}]
    of elems.entries()) {
        console.log(num, id, value);
    } */