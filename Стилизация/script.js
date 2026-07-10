// Стилизация через атрибут style в JavaScript

/* Давайте вспомним, как стилизовать элементы через атрибут style. Пусть у нас есть следующий элемент:

<div id="elem">
	text
</div>

Получим ссылку на него в переменную:

let elem = document.querySelector('#elem');

Поменяем ему нужные стили:

elem.style.color = 'red';

Прочитаем его стили:

console.log(elem.style.color); // выведет 'red'; */

// Единицы измерения в атрибуте style в JavaScript

/* При указании значений свойств через атрибут style мы должны указывать единицы измерения:

elem.style.width = '100px';

При чтении значений они также будут получаться с единицами измерений:

let width = elem.style.width;
console.log(width); // выведет '100px'; 

При необходимости мы можем избавиться от единиц измерения с помощью parseInt:

let width = elem.style.width;
console.log(parseInt(width)); // вывете 100

Если предполагаются дробные значения, можно воспользоваться функцией parseFloat:

let width = elem.style.width;
console.log(parseFloat(width)); */

/* let elem = document.querySelector('#elem');
let button = document.querySelector('button');

button.addEventListener('click', function() {
    elem.style.border = '2px solid red';
    elem.style.width = '400px';
    elem.style.height = '300px';
}); */

/* let elem = document.querySelector('#elem');
let button = document.querySelector('button');

button.addEventListener('click', function() {
    let width = elem.style.width;
    let height = elem.style.height;
    alert(`Ширина: ${parseInt(width)}`);
    alert(`Высота: ${parseInt(height)}`);
}); */

/* let elem = document.querySelector('#elem');
let button = document.querySelector('button');

button.addEventListener('click', function() {
    let fontsize = elem.style.fontSize;
    alert(`Размер шрифта: ${parseFloat(fontsize)}`);
}); */

// Ошибки с единицами измерения в JavaScript

/* Часто легко ошибиться и забыть про единицы измерения. Например, так:

let width = 100;
elem.style.width = width; // упс...

Правильно будет указать значение в пикселях:

let width = 100;
elem.style.width = width + 'px';

Представим себе, что мы хотим увеличить ширину на некоторое значение. Для этого нам сначала нужно прочитать ширину, затем извлечь число, прибавить к нему нужное значение, добавить 'px' и только потом записать обратно:

let widthPx = elem.style.width;
let widthNm = parseInt(widthPx);
elem.style.width = (widthNm + 30) + 'px'; */

/* <div style="font-size: 16px;">
	text
</div>

let elem = document.querySelector('div');
elem.style.fontSize = elem.style.fontSize + 2; 

В исходном коде происходит конкатенации строк вместо арифметического сложения.

Правильно:

let elem = document.querySelector('div');
let fontsizePx = elem.style.fontSize;
let fontsizeNm = parseFloat(fontsize);
elem.style.fontSize = (fontsizeNm + 2) + 'px'; */

/* <div style="font-size: 16px;">
	text
</div>

let elem = document.querySelector('div');
elem.style.fontSize = parseInt(elem.style.fontSize + 2) + 'px'; 

В исходном коде неправильный порядок выполнения операций. Сложение так и не произошло, потому что + 2 применилось к строке, а не к числу.

Правильно: 

let elem = document.querySelector('div');
elem.style.fontSize = parseFloat(elem.style.fontSize) + 2 + 'px'; */

/* <div style="font-size: 2.5em;">
	text
</div>

let elem = document.querySelector('div');
elem.style.fontSize = parseInt(elem.style.fontSize) + 2 + 'em'; 

В исходном коде используется parseInt вместо parseFloat.ParseInt отбрасывает дробную часть. Он читает строку до первого символа, который не является цифрой или знаком. parseFloat корректно обрабатывает десятичные дроби и останавливается только на буквах/символах.

Правильно:

let elem = document.querySelector('div');
elem.style.fontSize = parseFloat(elem.style.fontSize) + 2 + 'em'; */

/* let elem = document.querySelector('#elem');
let button = document.querySelector('button');

button.addEventListener('click', function() {
    elem.style.width = parseInt(elem.style.width) + 50 + 'px';
    elem.style.height = parseInt(elem.style.height) + 50 + 'px';
}); */

/* let elem = document.querySelector('#elem');
let button = document.querySelector('button');

button.addEventListener('click', function() {
    elem.style.width  = increaseByPercent(elem.style.width, 10);
    elem.style.height = increaseByPercent(elem.style.height, 10);
});

function increaseByPercent(cssValue, percent) {
    let num = parseFloat(cssValue);
    let increased = num * (1 + percent / 100);
    return increased + 'px';
} */

// Распаковка значений CSS свойств в JavaScript

/* При чтении атрибута style сокращенные CSS свойства распаковываются в свои полные свойства. Давайте посмотрим, что имеется ввиду. Пусть у нас задан отступ для всех сторон:

elem.style.margin = '20px';

Выведем его:

console.log(elem.style.margin); // выведет '20px'; 

При этом чтение свойств для отдельных сторон также будет доступно:

console.log(elem.style.marginLeft); // выведет '20px'; */

/* let elem = document.querySelector('#elem');
let button = document.querySelector('button');

button.addEventListener('click', function() {
    // alert(elem.style.border);
    alert(`Толщина: ${elem.style.borderWidth}
Тип: ${elem.style.borderStyle}
Цвет: ${elem.style.borderColor}`);
}); */

// Сброс стилей через style в JavaScript

/* Пусть мы по некоторому событию решили скрыть элемент:

elem.style.display = 'none';

Пусть теперь мы решили показать его обратно. Это значит, что свойству display нужно вернуть его исходное значение. Например, так:

elem.style.display = 'block';

Проблема в том, что это не удобно. Ведь исходное значение не обязательно было именно block. Оно могло быть и flex, и inline-block, и чем-то еще. Оно могло быть задано нами в CSS файле, а могло браться браузером по умолчанию. Отслеживать правильное значение сложно.

К счастью, есть способ легко вернуть исходное значение свойства обратно. Просто нужно в качестве значения свойства присвоить ему пустую строку:

elem.style.display = ''; */

/* let elem = document.querySelector('#elem');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');

btn1.addEventListener('click', function() {
    elem.style.display = 'none';
});

btn2.addEventListener('click', function() {
    elem.style.display = '';
}); */

/* let elem = document.querySelector('#elem');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');

btn1.addEventListener('click', function() {
    elem.style.backgroundColor = 'red';
});

btn2.addEventListener('click', function() {
    elem.style.backgroundColor = '';
}); */

// Массовая установка стилей в JavaScript

/* Можно задать сразу несколько стилей одной командой. Это делается с помощью свойства cssText:

elem.style.cssText = `
width: 100px;
height: 100px;
display: block;`

Это свойство редко используется, потому что такое присваивание удаляет все существующие стили: оно не добавляет, а заменяет их. Можно случайно удалить что-то нужное. Но его можно использовать, к примеру, для новых элементов, когда мы точно знаем, что не удалим существующий стиль. */

/* elem.style.cssText = `
width: 100px;
height: 100px;
margin: 10px auto;
color: red;
` */

// Проблемы чтения стилей в JavaScript

/* Через свойство style можно прочитать только стили, заданные через атрибут style. Это значит, что стили заданные в CSS файле, прочитать нельзя.

Давайте посмотрим на примере. Пусть у нас есть следующий элемент:

<div id="elem">
	text
</div>

Пусть в CSS файле для него задаются следующие стили:

#elem {
	color: red;
}

Получим ссылку на элемент в переменную:

let elem = document.querySelector('#elem');

Попробуем прочитать значение стиля:

console.log(elem.style.color); // выведет '' */

// Чтение свойств из CSS файлов в JavaScript

/* Свойства, заданные в CSS файле, можно прочитать с помощью специальной функции getComputedStyles.

Давайте посмотрим, как это делается. Пусть у нас есть следующий элемент:

<div id="elem">
	text
</div>

Пусть для этого элемента заданы следующие стили:

#elem {
	width: 100px;
	color: red;
	font-size: 20px;
}

Получим ссылку на элемент в переменную:

let elem = document.querySelector('#elem');

Теперь передадим ссылку на полученный элемент в качестве параметра функции getComputedStyles:

let computedStyle = getComputedStyle(elem);

В результате мы получим объект, содержащий значения CSS свойств для нашего элемента. Давайте с его помощью прочитаем, например, цвет:

console.log(computedStyle.color); // выведет 'red'

А теперь ширину:

console.log(computedStyle.width); // выведет '100px'

А теперь размер шрифта:

console.log(computedStyle.fontSize); // выведеь '20px' */

/* let elem = document.querySelector('#elem');
let button = document.querySelector('button');

button.addEventListener('click', function() {
    let computedStyle = getComputedStyle(elem);
    alert(`Ширина: ${computedStyle.width}
Высота: ${computedStyle.height}`);
}); */

/* let elem = document.querySelector('#elem');
let button = document.querySelector('button');

button.addEventListener('click', function() {
    let computedStyle = getComputedStyle(elem);
    let width = parseInt(computedStyle.width);
    let height = parseInt(computedStyle.height);

    elem.style.width = (width * 2) + 'px';
    elem.style.height = (height * 2) + 'px';
}); */

// Преобразование прочитанных значений в JavaScript

/* Функция getComputedStyles не получает именно те значения, которые были заданы в CSS. Она преобразует их в абсолютные значения, обычно в пиксели.

Давайте посмотрим на примере. Пусть у нас задана ширина в процентах:

#elem {
	width: 100%;
}

Однако при чтении ширины мы получим значение не в процентах, а в пикселях:

console.log(computedStyle.width); // значение в px */

/* let elem = document.querySelector('#elem');
let button = document.querySelector('button');

button.addEventListener('click', function() {
    let computedStyle = getComputedStyle(elem);
    alert(`Размер шрифта: ${computedStyle.fontSize}`);
}) */

// Стилизация классами в JavaScript

/* Стилизовать элементы через атрибут style иногда удобно, но чаще всего - не самая удачная идея. Проблема в том, что стили будут разбросаны по JavaScript файлу и их трудоемко будет изменять. Гораздо удобнее задавать стили в CSS файлах, чтобы их легко можно было изменять, не копаясь в JavaScript коде.

Пусть для примера у нас есть элемент, выводящий некоторое сообщение. Сообщение может быть "хорошим" и выводиться зеленым цветом и "плохим" и выводиться красным цветом. Лучшим решением в таком случае будет сделать для этого соответствующие CSS классы:

.success {
	color: green;
}
.error {
	color: red;
}

Теперь при выводе "хорошего" сообщения мы будем давать элементу "хороший" класс:

elem.textContent = 'good';
elem.classList.add('success');

А при выводе "плохого" сообщения мы будем давать элементу "плохой" класс:

elem.textContent = 'bad';
elem.classList.add('error'); */

/* let elems = document.querySelectorAll('p');

for (let elem of elems) {
    if (Number(elem.textContent) % 2 === 0) {
        elem.classList.add('red');
    } else {
        elem.classList.add('green');
    }
} */

// Один класс для стилизации в JavaScript

/* Пусть у нас есть два класса, которые мы даем элементу в зависимости от его состояния:

div.active {
	color: red;
}

div.passive {
	color: black;
}

На самом деле наличие двух классов здесь может мешать. В этом случае мы можем переписать стили следующим образом через селектор :not:

div.active {
	color: red;
}

div:not(active) {
	color: black;
}

В этом случае мы сможем удобным образом тогглить наш класс, делая элемент активным или неактивным:

elem.classList.toggle('active'); */

/* let elems = document.querySelectorAll('p');

for (let elem of elems) {
    elem.addEventListener('click', function() {
        elem.classList.toggle('active');
    })
} */

// Неудобство классов в JavaScript

/* Пусть у нас есть несколько классов для стилизации сообщений:

.success {
	color: green;
}
.warning {
	color: orange;
}
.error {
	color: red;
}

Пусть в некотором элементе мы вывели успешное сообщение и назначили ему соотвестсвующий класс для успеха:

elem.classList.add('success');

Пусть теперь мы в этом же элементе вывели сообщение об ошибке и назначили ему соотвестсвующий класс для ошибки:

elem.classList.add('error');

В результате получится, что в элементе будет два конфликтующих друг с другом класса:

<div id="elem" class="success error">
	text
</div>

Получается, что перед добавлением нового класса, нам придется сначала удалить предыдущий:

elem.classList.remove('success');
elem.classList.add('error');

Это не очень удобно, так как мы можем не знать, какой именно был предыдущий класс и нам придется удалять все классы подряд:

elem.classList.remove('success');
elem.classList.remove('warning');
elem.classList.add('error'); */

/* let elem = document.querySelector('input');

elem.addEventListener('blur', function() {
    if (elem.value.length >= 1 && elem.value.length <= 9) {
        elem.classList.add('success');
        elem.classList.remove('error');
    } else {
        elem.classList.add('error');
        elem.classList.remove('success');
    }
}) */

// Чередование стилей через data- атрибут в JavaScript

/* Для решения проблемы, описанной в предыдущем уроке, мы не будем задавать элементу классы, а будем менять значение data- атрибута. Это будет удобно тем, что такой атрибут может иметь только одно значение и при записи новое значение само будет затирать старое.

Для примера вот так мы зададим успешный стиль:

<div id="elem" data-type="success">
	text
</div>

А так стиль для ошибки:

<div id="elem" data-type="error">
	text
</div>

[data-type='success'] {
    color: green;
}

[data-type='warning'] {
    color: orange;
}

[data-type='error'] {
    color: red;
}

Теперь мы легко можем покрасить наш элемент в успешный цвет:

elem.dataset.type = 'success';

А так мы покрасим в цвет ошибки:

elem.dataset.type = 'error'; */

/* let elem = document.querySelector('input');

elem.addEventListener('blur', function() {
    let num = Number(elem.value);
    if (num <= 10 && num > 0) {
        elem.dataset.type = 'green';
    } else if (num === 10 || num <= 20 && num > 0) {
        elem.dataset.type = 'yellow';
    } else if (num > 20) {
        elem.dataset.type = 'red';
    }
    }); */