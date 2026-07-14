// Размеры окна в JavaScript

/* Следующие свойства содержат размеры окна браузера, не включающие в себя полосу прокрутки:

let w = document.documentElement.clientWidth; // ширина
let h = document.documentElement.clientHeight; // высота

Следующие свойства включают в себя полосу прокрутки:

let w = window.innerWidth; // ширина
let h = window.innerHeight; // высота

Разница между двумя типами свойств дает размер полосы прокрутки:

let w1 = document.documentElement.clientWidth;
let w2 = window.innerWidth;

console.log(w2 - w1); */

/* let button = document.querySelector('button');

button.addEventListener('click', function() {
    let w = document.documentElement.clientWidth;
    let h = document.documentElement.clientHeight;

    console.log(`Ширина окна: ${w}`);
    console.log(`Высота окна: ${h}`);
}); */

/* let button = document.querySelector('button');

button.addEventListener('click', function() {
    if (document.documentElement.scrollHeight > window.innerHeight) {
        console.log('true');
    } else {
        console.log('false');
    }
}); */

/* let button = document.querySelector('button');

button.addEventListener('click', function() {
    if (document.documentElement.scrollWidth > window.innerWidth) {
        console.log('true');
    } else {
        console.log('false');
    }
}); */

// Размеры окна с учетом прокрутки в JavaScript

/* Давайте получим размеры окна с учетом прокрученной части. К сожалению, удобного способа, работающего во всех браузерах - нет. Ниже приводятся работающие решения. Вникать в них не стоит, просто используйте.

Высота с учетом прокрученной части:

let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);

console.log(scrollHeight);

Ширина с учетом прокрученной части:

let scrollWidth = Math.max(
	document.body.scrollWidth, document.documentElement.scrollWidth,
	document.body.offsetWidth, document.documentElement.offsetWidth,
	document.body.clientWidth, document.documentElement.clientWidth
);

console.log(scrollWidth); */

/* let button = document.querySelector('button');

button.addEventListener('click', function() {
    let scrollHeight = Math.max(
	document.body.scrollHeight, document.documentElement.scrollHeight,
	document.body.offsetHeight, document.documentElement.offsetHeight,
	document.body.clientHeight, document.documentElement.clientHeight
);

console.log(`Высота с учетом прокрученной части: ${scrollHeight}`);
}); */

/* let button = document.querySelector('button');

button.addEventListener('click', function() {
    let scrollWidth = Math.max(
	document.body.scrollWidth, document.documentElement.scrollWidth,
	document.body.offsetWidth, document.documentElement.offsetWidth,
	document.body.clientWidth, document.documentElement.clientWidth
);

console.log(`Ширина с учетом прокрученной части: ${scrollWidth}`);
}); */

/* let button = document.querySelector('button');

button.addEventListener('click', function() {
    let hiddenHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    console.log(`Высота спрятанной части: ${hiddenHeight}`);
}); */

// Получение прокрутки окна в JavaScript

/* Следующие свойства содержат то, на сколько прокручено окно (только для чтения):

let x = window.pageXOffset; // слева
let y = window.pageYOffset; // справа */

/* let button = document.querySelector('button');

button.addEventListener('click', function() {
    let y = window.pageYOffset;

    console.log(`Прокрутка окна по вертикали: ${y}`);
}); */

/* let button = document.querySelector('button');

button.addEventListener('click', function() {
    let remaining = document.documentElement.scrollHeight - document.documentElement.clientHeight - window.pageYOffset;

    console.log(`До конца прокрутки осталось: ${remaining}`);
}); */

// Получение и изменение прокрутки окна в JavaScript

/* Следующие свойства содержат то, на сколько прокручено окно:

let t = document.documentElement.scrollTop;  // сверху
let l = document.documentElement.scrollLeft; // слева

Эти свойства можно изменять, прокручивая окно в произвольную позицию:

document.documentElement.scrollTop = 200; */

/* let button = document.querySelector('button');

button.addEventListener('click', function() {
    document.documentElement.scrollTop = 300;
}); */

/* let button = document.querySelector('button');

button.addEventListener('click', function() {
    document.documentElement.scrollTop = document.documentElement.scrollHeight - document.documentElement.clientHeight - 100;
}); */

/* let button = document.querySelector('button');

button.addEventListener('click', function() {
    document.documentElement.scrollTop = 0;
}); */

/* let button = document.querySelector('button');

button.addEventListener('click', function() {
    document.documentElement.scrollTop = document.documentElement.scrollHeight - document.documentElement.clientHeight;
}); */

// Метод для прокрутки окна в положение в JavaScript

/* Метод scrollTo прокручивает окно в заданное положение. Первым параметром он принимает положение по горизонтали, а вторым - по вертикали. Давайте прокрутим окно к заданному положению:

window.scrollTo(100, 200);

Метод имеет альтернативный синтаксис, в котором параметром передается объект. В ключе top этого объекта указывается положение по вертикали, в ключе left - положение по горизонтали, а в ключе behavior - тип прокрутки. Тип может быть 'auto' или 'smooth'. Во втором случае прокрутка будет плавной:

element.scrollTo({
	top: 100,
	left: 100,
	behavior: 'smooth'
}); */

/* let button = document.querySelector('button');

button.addEventListener('click', function() {
    window.scrollTo(0, 300);
}); */

/* let button = document.querySelector('button');

button.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}); */

/* let button = document.querySelector('button');

button.addEventListener('click', function() {
    let maxScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    window.scrollTo({
        top: maxScroll,
        behavior: 'smooth'
    });
}); */

// Метод для прокрутки окна на величину в JavaScript

/* Метод scrollBy прокручивает окно на заданную величину от текущего положения. Первым параметром он принимает сдвиг по горизонтали, а вторым - по вертикали. Давайте прокрутим окно на заданные величины:

window.scrollBy(100, 200);

Выполним прокрутку в обратную сторону:

window.scrollBy(-100, -200);

Выполним плавную прокрутку:

window.scrollBy({
	top: 100,
	left: 100,
	behavior: 'smooth'
}); */

/* let button = document.querySelector('button');

button.addEventListener('click', function() {
    window.scrollBy(0, 100);
}); */

/* let button = document.querySelector('button');

button.addEventListener('click', function() {
    window.scrollBy(0, -100);
}); */

/* let button = document.querySelector('button');

button.addEventListener('click', function() {
    window.scrollBy({
        top: 300,
        behavior: 'smooth'
    });
}); */

/* button.addEventListener('click', function() {
    window.scrollBy({
        top: -300,
        behavior: 'smooth'
    });
}); */

// Метод для прокрутки окна к элементу в JavaScript

/* Метод scrollIntoView прокручивает окно к заданному элементу. Метод применяется к элементу, к которому следует прокрутить окно. Параметром метода регулируют, где должен оказаться элемент: сверху окна или снизу.

Давайте посмотрим на примерах. Прокрутим окно так, чтобы элемент был сверху окна:

elem.scrollIntoView(true);

А теперь прокрутим окно так, чтобы элемент был снизу окна:

elem.scrollIntoView(false);

Можно также параметром передать объект с настройками. Давайте плавно прокрутим окно к элементу:

elem.scrollIntoView({
    behavior: 'smooth',
});

Объект с настройками имеет также настройки выравнивания страницы по отношению к элементу. Настройка block задает вертикальное выравнивание, а настройка inline - горизонтальное. Они могут принимать следующие значения: 'start', 'center', 'end', 'nearest'.

Давайте попробуем:

elem.scrollIntoView({
	behavior: 'smooth',
	block: 'start',
	inline: 'end',
}); */

/* let elem = document.querySelector('#elem');
let button = document.querySelector('button');

button.addEventListener('click', function() {
    elem.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
    });
}); */

// Событие прокрутки в JavaScript

/* Существует событие scroll, с помощью которого можно поймать момент, когда пользователь прокручивает окно. Давайте попробуем:

window.addEventListener('scroll', function() {
    console.log('!');
});

Будем выводить текущую прокрутку от верха сайта:

window.addEventListener('scroll', function() {
	console.log(window.pageYOffset);
}); */

/* window.addEventListener('scroll', function() {
    if (window.pageYOffset + window.innerHeight >= document.documentElement.scrollHeight) {
        console.log('Страница прокручена до конца.');
    }
}); */