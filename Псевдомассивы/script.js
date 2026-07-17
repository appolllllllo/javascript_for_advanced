// Псевдомассивы в JavaScript

/* Кроме массивов в JavaScript есть объекты, которые похожи на массивы, но не поддерживают все их возможности. Такие объекты называются псевдомассивами.

Псевдомассивы чаще всего возникают при работе с DOM элементами. Давайте посмотрим на примере. Пусть у нас есть абзацы:

<p></p>
<p></p>
<p></p>
<p></p>
<p></p>

Давайте получим наши абзацы в переменную:

let elems = document.querySelectorAll('p');
В переменной elems будет содержаться псевдомассив:

console.log(elems); // это псевдомассив

В следующих уроках мы разберемся с особенностями псевдомассивов, рассмотрим в чем они похожи на обычные массивы, и в чем отличаются. */

// Сходство с массивами в JavaScript

/* Давайте посмотрим, в чем псевдомассивы схожи с обычными массивами.

Индексы

К элементам псевдомассива, как и к элементам обычного массива, можно обратиться по их номеру:

console.log(elems[0]);
console.log(elems[1]);
console.log(elems[2]);

Длина

Можно также узнать количество элементов с помощью свойства length:

console.log(elems.length);

Цикл

Можно перебрать элементы псевдомассива циклом:

for (let elem of elems) {
	console.log(elem);
} */

/* let elems = document.querySelectorAll('p');

console.log(elems[0]);
console.log(elems[1]);
console.log(elems[2]);

console.log(elems.length);

for (let elem of elems) {
	console.log(elem);
} */

// Отличия от массивов в JavaScript

/* Хотя псевдомассивы и похожи на массивы, но все же это обычные объекты. У них нет методов массивов, таких как map, join, slice.

console.log(elems.slice(1, 3)); // будет ошибка */

/* let elems = document.querySelectorAll('p');

console.log(elems.slice(1, 3)); 

console.log(elems.join(', '));

console.log(elems.map(elem += '!')); */

// Проверка на массив в JavaScript

/* Существует специальный метод Array.isArray, с помощью которого можно проверить переменную на то, содержит ли она настоящий массив или нет. Давайте проверим работу метода.

Массив:

let test = [1, 2, 3];
let res  = Array.isArray(test);

console.log(res); // выведет true

Объект:

let test = {a: 1, b: 2, c: 3};
let res  = Array.isArray(test);

console.log(res); // выведет false

Примитив:

let test = 'abcde';
let res  = Array.isArray(test);

console.log(res); // выведет false

Псевдомассив:

let test = document.querySelectorAll('p');
let res  = Array.isArray(test);

console.log(res); // выведет false */

/* let test = [
	[1, 2, 3],
	{a: 1, b: 2, c: 3},
	[3, 4, 5],
	{x: 1, y: 2, z: 3},
];

for (let elem of test) {
	let res = Array.isArray(elem);
	console.log(res);
} */

// Преобразование к массиву в JavaScript

/* Пусть у нас есть псевдомассив абзацев:

let elems = document.querySelectorAll('p');

Давайте преобразуем его в обычный массив.

Способ первый

Самое очевидное, что можно сделать, это перебрать наш псевдомассив циклом, формируя в этом цикле новый массив:

let arr = [];

for (let elem of elems) {
	arr.push(elem);
}

Способ второй

Можно воспользоваться деструктуризацией:

let arr = [... elems];

Способ третий

Можно воспользоваться методом Array.from:

let arr = Array.from(elems); */

/* let elems = document.querySelectorAll('p');

let arr = [];

for (let elem of elems) {
	arr.push(elem);
}

console.log(arr); */

/* let elems = document.querySelectorAll('p');

let arr = [... elems];

console.log(arr); */

/* let elems = document.querySelectorAll('p');

let arr = Array.from(elems);

console.log(arr); */

/* let elems = document.querySelectorAll('p');

let arr = [... elems];

let res = arr.slice(1, -1);

console.log(res); */

// Типы псевдомассивов в JavaScript

/* Псевдомассивы бывают различных типов. Тип зависит от способа получения.

В следующем примере мы получим коллекцию одного типа:

let elems = document.querySelectorAll('p');
console.log(elems); // NodeList

А следующем примере - коллекцию другого типа:

let elems = document.getElementsByTagName('p');
console.log(elems); // HTMLCollection */

/* let parent = document.getElementById('parent');

console.log(parent.childNodes); */

/* let parent = document.querySelector('#parent');

console.log(parent.children); */

/* let elems = document.getElementsByClassName('.parent');

console.log(elems); */

// Разница между типами псевдомассивов в JavaScript

/* Разница между двумя типами псевдомассивов в различном поведении при изменении DOM элементов. Пусть, к примеру, мы получили коллекцию абзацев в виде HTMLCollection и в виде NodeList. Затем мы создадим и добавим еще один абзац в наш DOM. В этом случае он автоматически появится в HTMLCollection, но коллекция NodeList останется без изменений.

Давайте посмотрим на примере. Пусть у нас будет див, а в нём абзацы. Получим наш див и одни и те же абзацы в виде коллекций двух разных типов:

Добавим еще один абзац в наш див:

let p = document.createElement('p');
parent.append(p);

В результате одна из коллекций изменится, а вторая - нет:

console.log(elems1); // 4 абзаца - с новым 
console.log(elems2); // 3 начальных абзаца */ 

/* let parent = document.querySelector('#parent');

let children = parent.children;

console.log(children.length);
console.log(children); 

parent.insertAdjacentHTML('beforeend', '<div>Новый блок</div>');

console.log(children.length);
console.log(children); */

/* let parent = document.querySelector('#parent');
let nodes = parent.childNodes;

console.log(nodes.length);
console.log(nodes);
console.log(nodes.constructor.name);

parent.insertAdjacentHTML('beforeend', '<div>Новый блок</div>');

console.log(nodes.length);
console.log(nodes); */