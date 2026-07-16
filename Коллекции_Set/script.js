// Коллекции Set в JavaScript

/* Коллекции Set позволяют создать массивы без дублей. Давайте посмотрим, как работать с такими коллекциями. Для начала нужно создать коллекцию с помощью следующей команды:

let set = new Set;

После создания коллекции в нее можно добавлять новые элементы с помощью метода add:

let set = new Set;

set.add(1);
set.add(2);
set.add(3);

При этом при попытке добавить уже существующий в коллекции элемент нового добавления не произойдет:

let set = new Set;

set.add(1);
set.add(2);
set.add(3);
set.add(3); // не добавится, т.к. уже есть */

/* let set = new Set;

set.add(1);
set.add(2);
set.add(3);
set.add(3);

console.log(set); */

// Начальное заполнение коллекции Set в JavaScript

/* Можно при создании заполнить коллекцию Set некоторыми значениями, передав параметром массив с данными:

let set = new Set([1, 2, 3]);

При этом если в массиве будут дубли, то в коллекции они исчезнут:

let set = new Set([1, 2, 3, 3, 4, 4, 5]);

console.log(set); // будет [1, 2, 3, 4, 5] */

/* let arr = [1, 2, 3, 1, 3, 4];
let set = new Set(arr);

console.log(set); */

/* let set = new Set([1, 2, 3]);

set.add(2);

console.log(set); */

// Полезные возможности коллекций Set

/* Коллекции Set имеют ряд полезных свойств и методов. Давайте их разберем.

Размер коллекции

В свойстве size содержится размер коллекции:

let set = new Set;

set.add(1);
set.add(2);
set.add(3);

console.log(set.size);

Проверка наличия значения

Проверить наличие значения в коллекции можно с помощью метода has:

let set = new Set;

set.add(1);
set.add(2);
set.add(3);

console.log(set.has(1));

Удаление элементов

Удалить элемент из коллекции можно с помощью метода delete:

let set = new Set;

set.add(1);
set.add(2);
set.add(3);

set.delete(1);

Очистка коллекции

Очистить всю коллекцию можно с помощью метода clear:

let set = new Set;

set.add(1);
set.add(2);
set.add(3);

set.clear(); */

/* let set = new Set([1, 2, 3]);

console.log(set.size); */

/* let set = new Set([1, 2, 3]);

console.log(set.has(3));
console.log(set.has(4)); */

// Перебор коллекций Set циклом

/* Пусть у нас есть некоторая коллекция Set:

let set = new Set;

set.add(1);
set.add(2);
set.add(3);

Давайте переберем ее циклом:

for (let elem of set) {
    console.log(elem);
} */

/* let set = new Set([1, 2, 3]);
let sum = 0;

for (let elem of set) {
    sum += elem;
}

console.log(sum); */

// Преобразование коллекций Set

/* Коллекции Set можно преобразовывать в массивы. Можно также выполнять обратную операцию - массивы преобразовывать в Set. Давайте посмотрим, как это делается.

Преобразование в массив

Пусть у нас есть некоторая коллекция Set:

let set = new Set([1, 2, 3]);

Можно преобразовать ее в массив, используя прием с деструктуриацией:

let arr = [...set];

А можно воспользоваться методом Array.from:

let arr = Array.from(set); */

/* let set = new Set([1, 2, 3]);

let arr1 = [...set];
let arr2 = Array.from(set);

console.log(arr1);
console.log(arr2); */

// Преобразование массива в Set

/* Пусть у нас есть массив:

let arr = [1, 2, 3];

Давайте преобразуем его в коллекцию Set:

let set = new Set(arr); */

/* let arr = [1, 2, 3];

let set = new Set(arr);

console.log(set); */

// Удаление дублей из массива через Set

/* С помощью коллекций Set легко можно удалять дубли из массивов. Для этого массив нужно преобразовать в коллекцию Set. Так как эта коллекция не может содержать дубли элементов, то при преобразовании они исчезнут. Если затем преобразовать коллекцию обратно в массив, то мы получим массив без дублей.

Давайте посмотрим на примере. Пусть у нас есть следующий массив с дублями:

let arr = [1, 2, 3, 1, 3, 4];

Создадим на его основе коллекцию Set:

let set = new Set(arr);

А теперь преобразуем нашу коллекцию обратно в массив:

let arr = [1, 2, 3, 1, 3, 4];
let res = [...new Set(arr)];

console.log(res); // выведет [1, 2, 3, 4] */

/* function getArray(arr) {
    let newArr = [...new Set(arr)];
    console.log(newArr);
}

getArray([1, 2, 3, 1, 3, 4]); */

// Получение DOM элементов без дублей

/* Пусть у нас есть абзацы и кнопка:

<p>aaa</p>
<p>bbb</p>
<p>ccc</p>
<p>ddd</p>
<p>eee</p>

<button>click me</button>

Пусть пользователь кликает на эти абзацы в произвольном порядке. Давайте сделаем так, чтобы по нажатию на кнопку в конец каждого абзаца, на который был совершен клик, был добавлен восклицательный знак. Решим задачу через Set.

Приступим. Для начала получим наши элементы в переменные:

let button = document.querySelector('button');
let elems  = document.querySelectorAll('p');

Создадим новую коллекцию Set:

let set = new Set;

Переберем абзацы циклом и повесим на них обработчик клика:

for (let elem of elems) {
	elem.addEventListener('click', function() {
		
	});
}

Давайте теперь по клику на абзац будем добавлять этот абзац в коллекцию:

for (let elem of elems) {
	elem.addEventListener('click', function() {
		set.add(this);
	});
}

Из-за того, что мы используем коллекцию Set повторный клик на абзац не будет приводить к добавлению дубля абзаца.

Давайте теперь по клику на кнопку переберем содержимое нашей коллекции и каждому абзацу в конец добавим восклицательный знак:

button.addEventListener('click', function() {
	for (let elem of set) {
		elem.textContent = elem.textContent 
			+ '!'; 
	}
}); */

/* let elems = document.querySelectorAll('p');
let button = document.querySelector('button');

let set = new Set;

for (let elem of elems) {
    elem.addEventListener('click', function() {
        set.add(this);
    });
}

button.addEventListener('click', function() {
    for (let elem of set) {
        elem.textContent += '!';
    }
}); */