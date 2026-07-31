// Введение в формат JSON в JavaScript

/* Иногда бывает нужно преобразовать некую структуру данных, например, массив или объект, в строку. Это может понадобится, например, чтобы отправить эту структуру через интернет или сохранить в какое-то хранилище.

Для этого в JavaScript был придуман специальный формат JSON.

Формат JSON может содержать одну из двух структур: или массив, или объект с парами ключ-значение. Массивы и объекты строятся так же, как и в JavaScript, но имеют ограничение: все строки и строковые ключи объектов должны быть взяты в двойные кавычки.

Давайте, например, сделаем строку, содержащую массив в формате JSON:

let json = '[1, 2, 3, 4, 5, "a", "b"]'; 

А теперь сделаем строку, содержащую объект в формате JSON:

let json = `{
	"a": "aaa",
	"b": "bbb",
	"c": "ccc",
	"111": "ddd"
}`;

Можно комбинировать эти структуры в любом порядке:

let json = `[
	{
		"a": "aaa",
		"b": "bbb"
	},
	{
		"c": "ccc",
		"d": "ddd"
	}
]`;

В отличие от структур JavaScript, в JSON не разрешены запятые после последних элементов массивов и объектов:

let json = '[1, 2, 3, 4, 5,]'; // неверно 
let json = '[1, 2, 3, 4, 5]';  // верно 

Кроме чисел и строк в качестве элементов могут выступать также значения true, false и null:

let json = '[null, true, false]' */

/* let json = '[1, 2, 3, "a", "b", "c"]'; */

/* let json = `{
	"a": 1,
	"b": 2,
	"c": "eee",
	"d": true
}`; */

/* let json = `{
	"a": ["a", "b", "c"],
	"b": "111",
    "c": "eee"
}`; */

// Преобразование JSON в структуру данных JavaScript

/* С помощью метода JSON.parse можно преобразовать JSON в структуру данных JavaScript. Давайте посмотрим на примере.

Пусть у нас есть строка, содержащая массив в формате JSON:

let json = '[1, 2, 3, 4, 5, "a", "b"]'; 

Преобразуем нашу строку в массив:

let arr = JSON.parse(json);

В случае, если строка будет содержать некорректный JSON, наш метод выдаст ошибку:

let json = '[1, 2, 3, 4, 5,]'; // некорректный JSON 
let arr = JSON.parse(json); // выдаст ошибку */

/* let json = '[1, 2, 3, 4, 5]';

let arr = JSON.parse(json);
let sum = 0;

for (let elem of arr) {
    sum += elem;
}

console.log(sum); */

/* let json = `{
	"data1": [1, 2, 3],
	"data2": [4, 5, 6],
	"data3": [7, 8, 9]
}`;

let obj = JSON.parse(json);
let sum = 0;

for (let key in obj) {
    for (let elem of obj[key]) {
        sum += elem; 
    }
}

console.log(sum); */

/* let json = '["user1","user2","user3","user4","user5"]';

let arr = JSON.parse(json);

let ul = document.createElement('ul');

for (let elem of arr) {
    let li = document.createElement('li');
    li.textContent = elem;
    ul.appendChild(li);
}

document.body.appendChild(ul); */

/* let json = `[
	{
		"name": "user1",
		"age": 25,
		"salary": 1000
	},
	{
		"name": "user2",
		"age": 26,
		"salary": 2000
	},
	{
		"name": "user3",
		"age": 27,
		"salary": 3000
	}
]`;

let emploees = JSON.parse(json);

let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

let keys = Object.keys(emploees[0]);

let headerRow = document.createElement('tr');

for (let key of keys) {
    let th = document.createElement('th');
    th.textContent = key;
    headerRow.appendChild(th);
}
thead.appendChild(headerRow);

for (let emploee of emploees) {
    let tr = document.createElement('tr');

    for (let key of keys) {
        let td = document.createElement('td');
        td.textContent = emploee[key];
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
}

document.body.appendChild(table); */

// Преобразование структур данных JavaScript в формат JSON

/* С помощью метода JSON.stringify можно преобразовать массивы и объекты JavaScript в формат JSON. Давайте посмотрим на примере.

Пусть у нас есть массив с данными:

let arr = [1, 2, 3, 4, 5, 'a', 'b']; 

Преобразуем наш массив в строку:

let json = JSON.stringify(arr); */

/* let arr = ['user1', 'user2', 'user3', 'user4', 'user5']; 

let json = JSON.stringify(arr);

console.log(json); */

/* let cities = document.querySelectorAll('li');

let citiesArray = [...cities].map(item => item.textContent);

let json = JSON.stringify(citiesArray);

console.log(json); */

/* let rows = document.querySelectorAll('tr');

let data = [...rows].slice(1).map(row => {
	let cells = row.querySelectorAll('td');
	return {
		surname: cells[0].textContent,
		name: cells[1].textContent,
		patronymic: cells[2].textContent
	};
});

let json = JSON.stringify(data);

console.log(json); */

// Изменение данных в JSON на JavaScript

/* Пусть у нас есть строка, содержащая массив в формате JSON:

let json = '[1, 2, 3, 4, 5]';

Давайте добавим в конец этого массива еще один элемент. Для этого нам нужно проделать ряд шагов.

Для начала распакуем JSON в массив JavaScript:

let arr = JSON.parse(json);

Добавим в массив новый элемент:

arr.push(6);

Преобразуем измененный массив обратно в JSON:

let res = JSON.stringify(arr);

Итоговый код будет выглядеть следующим образом:

let json = '[1, 2, 3, 4, 5]';

let arr  = JSON.parse(json);
arr.push(6);

let res = JSON.stringify(arr);
console.log(res); */

/* let json = '["user1","user2","user3","user4","user5"]';

let arr = JSON.parse(json);

arr.push('user6');

let res = JSON.stringify(arr);

console.log(res); */

/* let json = '["user1","user2","user3","user4","user5"]';

let arr = JSON.parse(json);

arr[1] = 'noname';

let res = JSON.stringify(arr);

console.log(res); */

/* let json = `[
	{
		"name": "user1",
		"age": 25,
		"salary": 1000
	},
	{
		"name": "user2",
		"age": 26,
		"salary": 2000
	},
	{
		"name": "user3",
		"age": 27,
		"salary": 3000
	}
]`;

let employees = JSON.parse(json);

employees.push({
	name: 'user4',
	age: 28,
	salary: 4000
});

let res = JSON.stringify(employees);

console.log(res); */