// Расширение элементов в CSS для JavaScript

/* Задание CSS свойств width и height не гарантирует того, что элемент станет заданного размера. Давайте посмотрим на примерах.

Пример 1

Сейчас размеры элемента совпадают с заданными:

<div id="elem">
	text
</div>

#elem {
	width: 200px;
	height: 200px;
	margin: 50px auto;
	background: #CFF5BF;
}

Пример 2

А теперь давайте зададим элементу свойство padding. В результате реальная ширина элемента станет больше и расширится на заданное значение внутреннего отступа:

<div id="elem">
	text
</div>
#elem {
	padding: 25px;
	width: 200px;
	height: 200px;
	margin: 50px auto;
	background: #CFF5BF;
}

Пример 3

<div id="elem">
	text
</div>

#elem {
	width: 200px;
	height: 200px;
	margin: 50px auto;
	background: #CFF5BF;
	border: 20px solid #F0D7A1;
}

Пример 4

Свойство box-sizing позволяет изменять описанное выше поведение. Можно сделать так, чтобы ни внутренний отступ, ни граница не расширяли элемент. Для этого этому свойству нужно задать значение border-box:

<div id="elem">
	text
</div>

#elem {
	box-sizing: border-box;
	padding: 20px;
	width: 200px;
	height: 200px;
	margin: 50px auto;
	background: #CFF5BF;
	border: 20px solid #F0D7A1;
}

Важность описанного
С точки зрения JavaScript описанная ситуация не очень удобна. Ведь получается, что прочитав значение свойства width мы совсем не можем быть уверенными в том, что элемент будет именно этой ширины. */

// Тестовый элемент в JavaScript

/* Давайте создадим тестовый элемент, на примере которого мы будем изучать различные метрики в следующих уроках. Этот элемент мы организуем так, чтобы в нем были границы, внутренний отступ, а также полосы прокрутки:

<div id="elem">
	some long text
</div>

#elem {
	width: 300px;
	height: 150px;
	margin: 50px auto;
	padding: 25px;
	background: #CFF5BF;
	border: 25px solid #F0D7A1;
	overflow: auto;
	text-align: justify;
} 
    
Получим ссылку на этот элемент в переменную:

let elem = document.querySelector('#elem'); */

// Клиентский размер элемента в JavaScript

/* Следующие свойства содержат клиентский размер элемента, включающий в себя размер содержимого и внутреннего отступа, и не включающего в себя полосу прокрутки:

console.log(elem.clientWidth); // ширина
console.log(elem.clientHeight); // высота */

/* let elem = document.querySelector('#elem');
let button = document.querySelector('button');

button.addEventListener('click', function() {
    console.log(`Клиентская ширина: ${elem.clientWidth}`);
    console.log(`Клиентская высота: ${elem.clientHeight}`);
}); */

// Полный размер элемента в JavaScript

/* Следующие свойства содержат полный размер элемента:

console.log(elem.offsetWidth); // ширина
console.log(elem.offsetHeight); // высота */

/* let elem = document.querySelector('#elem');
let button = document.querySelector('button');

button.addEventListener('click', function() {
    console.log(`Полная ширина: ${elem.offsetWidth}`);
    console.log(`Полная высота: ${elem.offsetHeight}`);
}); */

/* Толщину горизонтальных рамок и ширину вертикальной полосы прокрутки. */

// Размеры элемента с прокруткой в JavaScript

/* Следующие свойства содержат размеры элемента с учетом спрятанной под прокруткой части:

console.log(elem.scrollWidth);  // ширина
console.log(elem.scrollHeight); // высота */

/* let elem = document.querySelector('#elem');
let button = document.querySelector('button');

button.addEventListener('click', function() {
    console.log(`Ширина с прокруткой: ${elem.scrollWidth}`);
    console.log(`Высота с прокруткой: ${elem.scrollHeight}`);
}); */

/* Разница между scrollHeight и offsetHeight содержит в себе: количество пикселей, доступных для вертикальной прокрутки, за вычетом толщины верхней и нижней рамки (border) и высоты горизонтального скроллбара. */

// Прокрутка элементов в JavaScript

/* Следующие свойства содержат то, на сколько прокручен элемент:

console.log(elem.scrollTop); // сверху
console.log(elem.scrollLeft); // слева */

/* let elem = document.querySelector('#elem');
let button = document.querySelector('button');
let topScroll = document.querySelector('#topScroll');
let leftScroll = document.querySelector('#leftScroll');

button.addEventListener('click', function() {
    topScroll.textContent = `T: ${elem.scrollTop}`;
    leftScroll.textContent = `L: ${elem.scrollLeft}`;
}); */

/* let elem = document.querySelector('#elem');
let button = document.querySelector('button');
let topScroll = document.querySelector('#topScroll');
let leftScroll = document.querySelector('#leftScroll');

button.addEventListener('click', function() {
    if (elem.scrollTop > 0) {
       topScroll.textContent = 'T: элемент прокручен по вертикали.';
    } else {
        topScroll.textContent = 'T: элемент не прокручен по вертикали.';
    }
}); */

/* let elem = document.querySelector('#elem');
let button = document.querySelector('button');
let topScroll = document.querySelector('#topScroll');
let leftScroll = document.querySelector('#leftScroll');

button.addEventListener('click', function() {
    let allTopScroll = elem.scrollTop;
    console.log(allTopScroll);
}); */

/* let elem = document.querySelector('#elem');
let button = document.querySelector('button');
let topScroll = document.querySelector('#topScroll');
let leftScroll = document.querySelector('#leftScroll');

button.addEventListener('click', function() {
    let allTopScroll = elem.scrollTop;
    console.log(elem.scrollHeight - allTopScroll);
}); */

/* let elem = document.querySelector('#elem');
let button = document.querySelector('button');
let topScroll = document.querySelector('#topScroll');
let leftScroll = document.querySelector('#leftScroll');

button.addEventListener('click', function() {
    let allTopScroll = elem.scrollTop;
    console.log(elem.scrollHeight - (elem.offsetHeight + allTopScroll));
}); */

// Изменение прокрутки элемента в JavaScript

/* Свойства, содержащие прокрутку элементов, можно изменять. В этом случае элемент будет прокручиваться к указанному значению. Давайте например прокрутим элемент на позицию 200px сверху:

elem.scrollTop = 200;

А теперь прокрутим элемент на 100px вниз от текущего значения:

elem.scrollTop = elem.scrollTop + 100;

А теперь прокрутим элемент в конец:

elem.scrollTop = elem.scrollHeight - elem.clientHeight; */

/* let elem = document.querySelector('#elem');
let button = document.querySelector('button');

button.addEventListener('click', function() {
	elem.scrollTop = 100;
	elem.scrollLeft = 50;
}); */

/* let elem = document.querySelector('#elem');
let button = document.querySelector('button');

button.addEventListener('click', function() {
	elem.scrollTop += 50;
}); */

/* let elem = document.querySelector('#elem');
let button = document.querySelector('button');

button.addEventListener('click', function() {
	elem.scrollTop = 0;
}); */

/* let elem = document.querySelector('#elem');
let button = document.querySelector('button');

button.addEventListener('click', function() {
	elem.scrollTop = elem.scrollHeight - elem.clientHeight;
}); */

// Прокрутка элемента до конца в JavaScript

/* Прокрутим элемент до самого низа:

elem.scrollTop = elem.scrollHeight - elem.clientHeight; */

/* let elem = document.querySelector('#elem');
let button = document.querySelector('button');

button.addEventListener('click', function() {
	elem.scrollTop = elem.scrollHeight - elem.clientHeight;
}); */

/* let elem = document.querySelector('#elem');
let button = document.querySelector('button');

button.addEventListener('click', function() {
    if (elem.scrollTop >= elem.scrollHeight - elem.clientHeight) {
        console.log('Элемент прокручен до конца');
    } else {
        console.log('Элемент прокручен не до конца');
    }
}); */

// Распахивание элемента в JavaScript

/* Распахнем элемент на всю высоту:

elem.style.height = elem.scrollHeight + 'px';

Распахнем элемент на всю ширину:

elem.style.width = elem.scrollWidth + 'px'; */

/* let elem = document.querySelector('#elem');
let button = document.querySelector('button');

button.addEventListener('click', function() {
    elem.style.width = elem.scrollWidth + 'px';
	elem.style.height = elem.scrollHeight + 'px';
}); */

// Ширина полосы прокрутки в JavaScript

/* Ширина полосы прокрутки зависит от браузера. Мы можем получить значение этой ширины. Для этого создадим элемент с прокруткой, но без границ и внутренних отступов:

let div = document.createElement('div');

Добавим ему некоторые стили:

div.style.overflowY = 'scroll';
div.style.width = '50px';
div.style.height = '50px';

Вставим элемент в документ, иначе размеры будут равны нулю:

document.body.append(div);

Получим размер полосы прокрутки:

let scrollWidth = div.offsetWidth - div.clientWidth; 

Удалим элемент:

div.remove(); */

/* let button = document.querySelector('button');

button.addEventListener('click', function() {
    let div = document.createElement('div');
    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';

    document.body.append(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    console.log(`Ширина полосы прокрутки браузера: ${scrollWidth}px`);
}); */