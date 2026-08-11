// Локальное хранилище браузера в JavaScript

/* В браузере существует так называемое локальное хранилище, позволяющее хранить данные между заходами пользователя на сайт (5-10 мегабайт информации).

Доступ к данным производится по ключу: вы сохраняете данные с каким-то ключом, а затем можете получить их по этому ключу или удалить. При этом разрешено сохранять только строки. Для работы с данными есть специальные методы. Давайте их рассмотрим.

Для хранения данных используется два типа хранилищ: sessionStorage и localStorage. Первое хранит данные только до закрытия браузера, а второе - всегда.

В следующих уроках мы будем разбираться с возможностями локального хранилища. */

// Хранилище в отладчике в JavaScript

/* Содержимое локального хранилища можно изучать и редактировать в отладчике браузера. Для этого нужно зайти во вкладку Application. Там нужно выбрать вкладку Local Storage. В этой вкладке вы увидите ключи ваших данных. И значения ваших данных. */

// Работа с данными в localStorage в JavaScript

/* Метод setItem предназначен для сохранения данных. Первым параметром он принимает ключ, а вторым - значение. Метод getItem предназначен для получения данных. Он принимает один параметр - ключ, под которым эти данные были сохранены.

Давайте попробуем эти методы на практике. Для начала давайте сохраним какую-нибудь строку с каким-нибудь ключом:

localStorage.setItem('key', 'text');

Давайте теперь получим нашу строку из локального хранилища:

let str = localStorage.getItem('key');

console.log(str); // выведет 'text' */

/* localStorage.setItem('key1', 1);
localStorage.setItem('key2', 2);
localStorage.setItem('key3', 3);

let num1 = Number(localStorage.getItem('key1'));
let num2 = Number(localStorage.getItem('key2'));
let num3 = Number(localStorage.getItem('key3'));

console.log(num1 + num2 + num3); */

// Однократное сохранение в localStorage в JavaScript

/* Если попытаться прочитать ключ, для которого не были записаны данные, то результатом будет null. Это можно использовать для того, чтобы выполнить однократное сохранение данных.

К примеру, давайте запишем в локальное хранилище момент первого захода пользователя на сайт. А если пользователь зайдет не первый раз, то ничего делать не будем:

let time = localStorage.getItem(time);

if (time === null) {
    let now = Date.now();
    localStorage.setItem('time', now)
}

Перепишем условие в более коротком виде:

let time = localStorage.getItem('time');

if (!time) {
    let now = Date.now();
    localStorage.setItem('time', now);
} */

/* let time = localStorage.getItem('time');

if (!time) {
    localStorage.setItem('time', Date.now());
    console.log('Первый визит. Время сохранено')
} else {
    let now = Date.now();
    let dif = now - Number(time);

    console.log(`С прошлого захода прошло: ${dif} мс`);
    console.log(`Это ${Math.round(dif / 1000)} сек`);

    localStorage.setItem('time', now);
} */

/* let birthday = localStorage.getItem('birthday');

if (!birthday) {
    let input = prompt('Введите дату рождения в формате ДД.ММ:');
    localStorage.setItem('birthday', input);
    console.log('Дата сохранена. Приходите в свой день рождения!');
} else {
    let parts = birthday.split('.');
    let bDay = Number(parts[0]);
    let bMonth = Number(parts[1]);

    let now = new Date();

    if (now.getDate() === bDay && now.getMonth() + 1 === bMonth) {
        alert('Поздравляем с Днем Рождения!');
    } else {
        console.log('Сегодня не ваш праздник. Ждите!');
    }
} */

/* let input = document.querySelector('input');

let saved = localStorage.getItem('inputValue');

if (saved) {
    input.value = saved;
}

input.addEventListener('blur', function () {
    localStorage.setItem('inputValue', input.value);
}); */

// Перезапись данных в localStorage в JavaScript

/* Можно перезаписывать данные, хранящиеся в хранилище под определенным ключом. Давайте попробуем. Запишем какие-нибудь данные:

localStorage.setItem('key', '1');
let value1 = localStorage.getItem('key');

console.log(value1); // выведет '1'

А теперь перезапишем эти данные::

localStorage.setItem('key', '2');
let value2 = localStorage.getItem('key');

console.log(value2); // выведет '2' */

/* let counterEl = document.querySelector('#counter');

let count = localStorage.getItem('counter');

if (count !== null) {
    count = Number(count);
} else {
    count = 0;
}

count++;

localStorage.setItem('counter', count);

counterEl.textContent = count; */

// Удаление данных в localStorage в JavaScript

/* С помощью метода removeItem можно удалять данные и связанный с ними ключ. Давайте для примера удалим содержимое какого-нибудь ключа:

localStorage.removeItem('key');

Проверим теперь наличие данных:

let value = localStorage.getItem('key');
console.log(value); // выведет null */

/* let counterEl = document.querySelector('#counter');

let count = Number(localStorage.getItem('counter')) || 0;

count++;

if (count > 10) {
    count = 0;
}

localStorage.setItem('counter', count);
counterEl.textContent = count; */

// Очистка хранилища в localStorage в JavaScript

/* С помощью метода clear можно очистить все хранилище. Смотрите пример:

localStorage.clear(); */

/* localStorage.clear();

console.log(localStorage.length); */

// Количество записей в localStorage в JavaScript

/* С помощью свойства length можно узнать количество записей в локальном хранилище:

let num = localStorage.length;
console.log(num); */

/* let counterEl = document.querySelector('#counter');
let button = document.querySelector('button');

button.addEventListener('click', function() {
    counterEl.textContent = localStorage.length;
}); */

/* let counterEl = document.querySelector('#counter');
let button = document.querySelector('button');

button.addEventListener('click', function() {
    let num = Number(localStorage.length);
    if (num > 10) {
        localStorage.clear();
        counterEl.textContent = 'Хранилище очищено.'
    } else {
        counterEl.textContent = num;
    }
}); */

// Получение ключа по номеру в localStorage в JavaScript

/* Каждая запись в локальном хранилище имеет свой номер. По номеру можно получить ключ этой записи:

let key = localStorage.key(0);
console.log(key);

Зная ключ, можно получить значение этой записи:

let key = localStorage.key(0);
let val = localStorage.hetItem(key);

console.log(val); */

/* let key1 = localStorage.key(0);
let key2 = localStorage.key(1);
let key3 = localStorage.key(2);

let val1 = localStorage.getItem(key1);
let val2 = localStorage.getItem(key2);
let val3 = localStorage.getItem(key3); */

// Перебор хранилища по индексам в JavaScript

/* Объект localStorage не является итерируемым. Тем не менее в нем есть индексы и длина. Это значит, что можно выполнить перебор записей через обычный цикл for со счетчиком:

for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let val = localStorage.getItem(key);

    console.log(val);
} */

/* let recordsEl = document.querySelector('#records');
let button = document.querySelector('button');

button.addEventListener('click', function() {
    recordsEl.textContent = '';
    
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let val = localStorage.getItem(key);
        recordsEl.textContent += key + ': ' + val + '\n';
    }
}); */

// Массивы ключей и значений хранилища в JavaScript

/* Можно получить массив ключей всех записей из локального хранилища:

let keys = Object.keys(localStorage);

Можно также получить массив значений всех записей из локального хранилища:

let values = Object.values(localStorage); */

/* let recordsKeys = document.querySelector('#records-keys');

let button = document.querySelector('button');

button.addEventListener('click', function() {
    let keys = Object.keys(localStorage);

    recordsKeys.textContent = '';

    for (let key of keys) {
        recordsKeys.textContent += key + '\n';
    }
}); */

/* let recordsValues = document.querySelector('#records-values');

let button = document.querySelector('button');

button.addEventListener('click', function() {
    let values = Object.values(localStorage);

    recordsValues.textContent = '';

    for (let value of values) {
        recordsValues.textContent += value + '\n';
    }
}); */

// Хранение структур в localStorage в JavaScript

/* В локальном хранилище можно хранить только строки. Однако, есть возможность хранить массивы и объекты - для этого просто можно использовать формат JSON.

Давайте сохраним массив:

let arr = [1, 2, 3, 4, 5];
localStorageStorage.setItem('arr', JSON.stringfily(arr));

А теперь получим его обратно:

let str = localStorage.getItem('arr');
let res = JSON.parse(str);

console.log(res); */

/* let inputs = document.querySelectorAll('input');

let button = document.querySelector('button');

button.addEventListener('click', function() {
    let values = [... inputs].map(input => input.value);
    localStorage.setItem('values', JSON.stringify(values));
}); */

/* let inputs = document.querySelectorAll('input');

let button = document.querySelector('button');

let saved = localStorage.getItem('values');

if (saved !== null) {
    let values = JSON.parse(saved);

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = values[i] || '';
    }
}

button.addEventListener('click', function() {
    let values = [... inputs].map(input => input.value);
    localStorage.setItem('values', JSON.stringify(values));
}); */

// Модификация хранимых структур в localStorage в JavaScript

/* Пусть в локальном хранилище хранится некоторый массив:

let arr = [1, 2, 3, 4, 5];
localStorage.setItem('data', JSON.stringify(arr));

Пусть теперь нам понадобилось как-то модифицировать этот массив, например, добавить ему в конец еще один элемент или изменить уже существующий.

Для решения задачи получим хранящуюся в хранилище строку с массивом, преобразуем эту строку в массив, проделаем с этим массивом необходимые манипуляции, преобразуем этот массив обратно в строку и запишем назад в хранилище:

let json = localStorage.getItem('data');
let data = JSON.parse(json);

data.push(6);
data[0] = '1';

localStorage.setItem('data', JSON.stringify(data)); */

/* let users = [
	{
		surn: 'surn1',
		name: 'name1',
		age: 31,
	},
	{
		surn: 'surn2',
		name: 'name2',
		age: 32,
	},
	{
		surn: 'surn',
		name: 'name3',
		age: 33,
	},
];

if (localStorage.getItem('users') === null) {
    localStorage.setItem('users', JSON.stringify(users));
}

let surnInput = document.querySelector('#surn');
let nameInput = document.querySelector('#name');
let ageInput = document.querySelector('#age');

let button = document.querySelector('button');

button.addEventListener('click', function() {
    let savedUsers = JSON.parse(localStorage.getItem('users'));

    let newUser = {
        surn: surnInput.value,
        name: nameInput.value,
        age: Number(ageInput.value)
    };

    savedUsers.push(newUser);

    localStorage.setItem('users', JSON.stringify(savedUsers));

    surnInput.value = '';
    nameInput.value = '';
    ageInput.value = '';
}); */

// Практика на localStorage в JavaScript