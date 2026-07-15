// Коллекции Map в JavaScript

/* Коллекции Map представляют собой объекты, в которых в качестве ключей могут выступать как примитивы, так и объекты.

Давайте попробуем на примере. Для начала создадим коллекцию с помощью следующей команды:

let map = new Map;

После этого в коллекцию можно будет добавлять элементы с помощью метода set и получать их с помощью метода get.

Давайте попробуем. Пусть в качестве ключей мы хотим сделать два массива:

let arr1 = [1, 2];
let arr2 = [3, 4];

Присвоим нашим ключам некие значения:

map.set(arr1, 'data1');
map.set(arr2, 'data2');

А теперь прочитаем наши значения по ключам:

console.log(map.get(arr1));
console.log(map.get(arr2)); */

/* let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];

let map = new Map;

map.set(arr1, 'data1');
map.set(arr2, 'data2');
map.set(arr3, 'data3');

console.log(map.get(arr1));
console.log(map.get(arr2));
console.log(map.get(arr3)); */

/* let obj1 = {key1: 'a', key2: 'b'};
let obj2 = {key1: 'c', key2: 'd'};
let obj3 = {key1: 'e', key2: 'f'};

let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];

let map = new Map;

map.set(obj1, arr1);
map.set(obj2, arr2);
map.set(obj3, arr3);

console.log(map.get(obj1));
console.log(map.get(obj2));
console.log(map.get(obj3)); */

// Полезные возможности коллекций Map

/* Коллекции Map имеют ряд полезных свойств и методов. Давайте их разберем.

Размер коллекции

В свойстве size содержится размер коллекции:

console.log(map.size);

Проверка наличия ключа

Проверить наличие ключа в коллекции можно с помощью метода has:

console.log(map.has(arr1));

Удаление по ключу
Удалить элемент из коллекции можно с помощью метода delete:

map.delete(arr1);

Очистка коллекции

Очистить всю коллекцию можно с помощью метода clear:

map.clear(); */

// Перебор коллекций Map циклом

/* Пусть у нас есть некоторая коллекция Map:

let map = new Map;

let arr1 = [1, 2];
let arr2 = [3, 4];

map.set(arr1, 'data1');
map.set(arr2, 'data2');

Эту коллекцию можно перебрать с помощью цикла for-of:

for (let elem of map) {

}

При этом в elem будут попадать массивы пар ключ-значение. В первом элементе будет ключ, а во втором - значение:

for (let elem of map) {
	console.log(elem); // сначала [[1, 2], 'data1'], потом [[3, 4], 'data2'] 
}

Можно отделить ключи и значения с помощью деструктуризации:

for (let [key, elem] of map) {
	console.log(key);
	console.log(elem);
} */

// Ключи и значения в коллекциях Map

/* Чтобы получить только ключи или только значения, существуют специальные методы. Для получения значений метод values:

let values = map.values();

Аналогично с ключами:

let keys = map.keys();

Существует также метод entries, возвращает набор пар ключ-значение:

let entries = map.entries(); */

/* let map = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);

let keys = map.keys();

for (let key of keys) {
    console.log(key);
} */

/* let map = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);

let entries = map.entries();

for (let elem of entries) {
    console.log(elem);
} */

// Применение коллекций Map

/* Пусть у нас есть абзацы:

<p>aaa</p>
<p>bbb</p>
<p>ccc</p>
<p>ddd</p>
<p>eee</p>

Давайте сделаем так, чтобы по клику на каждый абзац ему в конец записывался его порядковый номер в списке абзацев. Решим задачу через Map.

let elems = document.querySelectorAll('p')

Создадим новую коллекцию Map:

let map = new Map;

Заполним нашу коллекцию так, чтобы ключами были наши абзацы, а их значениями - порядковые номера:

let i = 1;

for (let elem of elems) {
    map.set(elem, i++);
}

Переберем абзацы циклом и повесим на них обработчик клика:

for (let elem of elems) {
    elem.addEventListener('click', function() {

    });
}

Давайте теперь по клику будем добавлять порядковый номер в конец текста абзаца. При этом будем получать этот номер из нашей коллекции:

for (let elem of elems) {
    elem.addEventListener('click', function() {
        this.textContent += map.get(this);
    });
} */

/* let elems = document.querySelectorAll('input');

let map = new Map;
let i = 1;

for (let elem of elems) {
    map.set(elem, i++);
}


for (let elem of elems) {
    elem.addEventListener('click', function() {
        elem.value = map.get(this);
    });
} */

/* let elems = document.querySelectorAll('input');

let map = new Map;

for (let elem of elems) {
    elem.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            map.set(this, Number(this.value));
        }
    });

    elem.addEventListener('blur', function() {
        let allNumbers = [];
        for (let val of map.values()) {
            allNumbers.push(val);
        }
        console.log(allNumbers);
    });
} */