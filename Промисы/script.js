// Введение в промисы в JavaScript

/* Вы уже знаете, что использование коллбэк-модели асинхронности легко приводит к ситуации callback hell. Поэтому в JavaScript была введена новая модель под названием промисы (promise). Давайте изучим эту модель.

Промис представляет собой объект, в который параметром передается функция, внутри которой нужно размещать наш асинхронный код:

let promise = new Promise(function()
{
    // асинхронный код
});

Как вы видите, я записал объект с промисом в переменную promise. В каком-то другом месте кода я могу применить к этой переменной метод then, передав в него функцию с кодом, который должен быть выполнен по завершении асинхронного кода, написанного при создании данного промиса:

promise.then(function()
{
    // выполнится по завершении асинхронного кода
});

Звучит запутано, поэтому давайте посмотрим на примере. Пусть у меня есть вот такой асинхронный код:

setTimeout(function() {
    let result = [1, 2, 3, 4, 5];
}, 3000);

Пусть я хочу решить для него нашу основную задачу асинхронности: выполнить некоторый код после срабатывания таймера. При этом я не хочу размещать этот код в самом таймере и хочу, чтобы в этот код как-то попал результат, написанный мною в переменной result. В общем-то, мы решали эту задачу в предыдущих уроках через коллбэки и подписки. Давайте теперь посмотрим, как это сделать через промисы.

Для начала нужно обернуть наш асинхронный код в промис:

let promise = new Promise(function() {
    setTimeout(function()
    {
        let result = [1, 2, 3, 4, 5];
    }, 3000);
});

Этого, однако, не достаточно. Мы должны в явном виде указать, что наш асинхронный код завершился. В этом нам поможет специальная функция завершения, автоматически попадающая в первый параметр функции, если он указан:

let promise = new Promise(function(resolve)
{ // указываем параметр
    setTimeout(function() {
        let result = [1, 2, 3, 4, 5];
    }, 3000);  
});

С помощью функции завершения мы можем явно указать промису, что асинхронный код завершился. Для этого мы должны вызвать эту функцию в нужном нам месте:

let promise = new Promise(function(resolve) {
    setTimeout(function() {
        let result = [1, 2, 3, 4, 5];
        resolve(); // завершаем промис
    }, 3000);
});

При этом, если мы хотим передать вовне какой-то результат асинхронного кода, мы можем передать его параметром нашей функции завершения:

let promise = new Promise(function(resolve) {
    setTimeout(function() {
        let result = [1, 2, 3, 4, 5];
        resolve(result); // передаем результат
    }, 3000);
});

Можно, конечно же, избавится от промежуточной переменной:

let promise = new Promise(function(resolve) {
    setTimeout(function() {
        resolve([1, 2, 3, 4, 5]);
    }, 3000);
});

Теперь в любом другом месте мы можем вызвать метод then нашего промиса:

promise.then(function() {
    // сработает по завершению промиса
});

Результат работы промиса попадет в первый параметр функции, если мы пожелаем его указать:

promise.then(function(result) {
    console.log(result); // выведет массив с результатом 
}); */

/* let promise = new Promise(function(resolve) {
    setTimeout(function() {
        let text = 'I love JavaScript';
        resolve(text);
    }, 5000);
});

promise.then(function(result) {
    console.log(result);
}); */

// Исключительные ситуации в промисах в JavaScript

/* Давайте теперь научимся обрабатывать исключительные ситуации, случившиеся внутри промиса. В случае возникновения такой ситуации мы должны отклонить промис с помощью специальной функции отклонения, которая автоматически попадает во второй параметр функции промиса:

let promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        ...
    }, 3000);
});

Внутри функции промиса мы должны вызвать resolve, если все прошло штатно, либо reject, если возникла исключительная ситуация:

let promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let isError = false;

        if (!isError) {
            resolve([1, 2, 3, 4, 5]);
            // данные промиса
        } else {
            reject('error in promise'); // ваш текст ошибки
        }
    }, 3000);
});

Затем в методе then параметрами вы должны передать не одну, а две функции: первая сработает, если промис сработал штатно (зарезолвился), а вторая - если сработал с ошибкой (зареджектился):

promise.then(
    function(result) {
        console.log(result); // выведет результат промиса
    },
    function(error) {
        console.log(error); // выведет текст ошибки
    }
);

Как правило, приведенный выше код записывают более компактно, вот так:

promise.then(function(result) {
    console.log(result); // выведет результат промиса 
}, function(error) {
    console.log(error);  // выведет текст ошибки 
}); */

/* let promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    }

    let num = getRandomInt(0, 5);
    
    if (num === 0) {
        reject('Ошибка деления на ноль! Выпало число 0');
    } else {
        let res = 1 / num;
        resolve(res);
    }
    }, 3000)
});

promise.then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
}); */

// Объект с ошибкой промиса в JavaScript

/* Более принято в функцию reject передавать не строку с ошибкой, а объект с ошибкой:

let promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        reject(new Error('error in promise'));
        //объект с ошибкой
    }, 3000)
});

Можно также выбрасывать объекты с ошибками с помощью throw - это будет эквивалентно передаче их в reject:

let promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        throw new Error('error in promise');
        // эквивалентно reject
    }, 3000)
}); */

/* let promise = new Promise(function(resolve, reject) { 
    setTimeout(function() {
        let isError = false;
    	
        if (!isError) {
            resolve('success');
        } else {
            reject(new Error('error'));
        }
    }, 3000);
}); */

/* let promise = new Promise(function(resolve, reject) { 
    setTimeout(function() {
        let isError = false;
    	
        if (!isError) {
            resolve('success');
        } else {
            throw new Error('error');
        }
    }, 3000);
}); */

// Отдельный перехват исключений в промисах в JavaScript

/* В then можно указать только функцию-обработчик исключительной ситуации, передав вместо первого параметра null:

Promise.then(
    null,
    function(error) {
        console.log(error);
    }
);

В таком случае удобно воспользоваться сокращенным синтаксисом через метод catch:

Promise.catch(
    function(error) {
        console.log(error);
    }
); */

/* let promise = new Promise(function(resolve, 
    reject) { 
    setTimeout(function() {
        let isError = false;
    	
        if (!isError) {
            resolve('success');
        } else {
            reject(new Error('error'));
        }
    }, 3000);
});

promise.then(
    res => console.log(res)
);

promise.catch(
    err => console.log(err.message)
); */

// Состояния промиса в JavaScript

/* Промис может находится в одном из трех состояний. При создании промис находится в ожидании (pending), а затем может стать исполненным (fulfilled), вернув полученный результат, или отклоненным (rejected), вернув причину отказа. Вы можете посмотреть переход из одного состояния в другой, запустив следующий код:

let promise = new Promisw(function(resolve, reject) {
    setTimeout(function() {
        let isError = false; // поставьте либо true, либо false

        if (!isError) {
            resolve([1, 2, 3, 4, 5]);
        } else {
            reject('error in promise');
        }
    }, 3000)
});

setInterval(function() {
    console.log(promise); // каждую секунду выводим промис в консоль
}, 1000);

Учтите, что состояния fulfilled и rejected неизменны: если промис перешел в одно из этих состояний, то он уже не сможет перейти в другое. Давайте посмотрим на примере. В следующем коде вызов reject случится раньше, поэтому вызов resolve будет проигнорирован:

let promise = new Promise(function(resolve, reject) {
    setTimeout(() => reject(new Error('error')), 1000);
    setTimeout(() => resolve('ignored'),2000);
}); */

/* let promise = new Promise(function(resolve, reject) {
     setTimeout(function() {
        let isError = false;

        if (!isError) {
            resolve('I love JavaScript');
        } else {
            throw new Error('error is promise');
        }
     }, 3000)
});

setInterval(function() {
    console.log(promise);
}, 1000); */

/* let promise = new Promise(function(resolve, reject) {
    setTimeout(() => reject(new Error('error is promise')), 3000);
    setTimeout(() => resolve('ignored'), 4000);
});

setInterval(function() {
    console.log(promise);
}, 1000); */

// Цепочки промисов в JavaScript

/* Пусть у нас есть следующий промис:

let promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('string');
    }, 3000);
});

promise.then(
    function(result) {
        console.log(result); // выведет 'string'
    }
)

Давайте теперь не будем сразу выводить результат, а как-то изменим его и вернем через return:

promise.then(
    function(result) {
        return result + '!';
    }
);

В этом случае мы можем к результату нашего then применить еще один then, создав тем самым цепочку методов. При этом в результат следующего метода будет попадать то, что вернул через return предыдущий:

promise.then(
    function(result) {
        return result + '!';
    }
).then(
    function(result) {
        console.log(result); // выведет 'string!'
    }
);

Таким образом можно построить цепочку какой-угодно длины:

promise.then(
    function(result) {
        return result + '1';
    }
).then(
    function(result) {
        return result + '2';
    }
).then(
    function(result) {
        return result + '3';
    }
).then(
    function(result) {
        console.log(result); // выведет 'string123' 
    }
); */

// Промисы внутри цепочки в JavaScript

/* Функции цепочки могут также возвращать промисы. В этом случае результат этого промиса попадет в следующий then:

promise.then(
    function(result) {
        return result + '1';
    }
).then(
    function(result) {
        return new Promise(function(resolve) {
            resolve(result + '2'); // этот результат попадет в следующий then
        });
    }
).then(
    function(result) {
        return result + '3';
    }
).then(
    function(result) {
        console.log(result); // выведет 'string123'
    }
) */

// Исключения в цепочках промисов в JavaScript

/* Пусть по каким-то причинам наш промис завершится с ошибкой:

let promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        reject('error');
    }, 3000);
});

В этом случае выполнение кода сразу перейдет к тому then, в котором есть функция-обработчик ошибки, либо в первому catch, смотря что встретится раньше.

Вот пример первой ситуации:

promise.then(
    function(result) {
        return result + '1';
    }
).then(
    function(result) {
        return result + '2';
    },
    function(error) {
        // выполнение сразу перейдет сюда
    }
).then(
    function(result) {
        console.log(result);
    }
);

Вот пример второй ситуации:

promise.then(
    function(result) {
        return result + '1';
    }
).then(
    function(result) {
        return result + '2';
    }
).catch(
    function(error) {
        // выполнение сразу перейдет сюда
    }
).then(
    function(result) {
        console.log(result);
    }
);

Функция-обработчик имеет два варианта действий: если она справилась с исключительной ситуацией, то может вернуть результат через return и выполнение продолжится дальше по цепочке. Если же она не справилась с ошибкой, то может или ничего не возвращать, или выбросить исключение через throw. В этом случае выполнение перейдет к следующему перехватчику ошибки (в then или catch - что встретится раньше).

Как правило, все ошибки цепочки перехватываются в одном месте: в конце цепочки размещается catch:

promise.then(
    function(result) {
        return result + '1';
    }
).then(
    function(result) {
        return result + '2';
    }
).catch(
    function(error) {
        // попадем сюда в случае ошибки
    }
);

При этом исключение может возникнуть в самом промисе, либо выброшено через throw в любом звене цепочки:

promise.then(
    function(result) {
        return result + '1';
    }
).then(
    function(result) {
        if (всеХорошо) {
            return result + '2';
        } else {
            throw new Error('ошибка'); // переходим к ближайшему перехватчику 
        }
    }
)
.then(
    function(result) {
        return result + '3';
    }
).catch(
    function(error) {
        // ближайший перехватчик
    }
);

Учтите, что catch нужен именно для диагностики ошибки: она решаема или нет. Если ошибка решаема, то catch должен передать ее решение следующему за собой then. А если не решаема (или данный catch просто не знает как ее решить), то мы должны или ничего не вернуть или бросить исключение:

promise.then(
    function(result) {
        return result + '1';
    }
).then(
    function(result) {
        return result + '2';
    }
).catch(
    function(error) {
        if (ошибкаРешаема) {
            return 'данные'; // отправляем на следующий then 
        } else {
            // ничего не возвращаем или бросаем исключение 
        }
    }
).then(
    function(result) {
        // тут решаем ошибку
    }
); */

// Работа с массивами промисов в JavaScript

/* Сейчас мы разберем два полезных метода, позволяющих работать с массивами промисов. Метод Promise.all позволяет выполнить код по окончанию всех промисов, переданных ему в виде массива, а метод Promise.race дожидается загрузки первого промиса из массива, отбрасывая остальные.

Оба метода своим результатом возвращают новый промис. Для метода Promise.all результатом этого промиса будет массив результатов всех переданных промисов (порядок результатов соответствует порядку промисов в массиве), а для Promise.race - результат первого сработавшего промиса.

Давайте посмотрим на практике. Пусть у нас есть массив промисов:

let promises = [
    new Promise(resolve => setTimeout(() 
        => resolve(1), 1000)), 
    new Promise(resolve => setTimeout(() 
        => resolve(2), 2000)), 
    new Promise(resolve => setTimeout(() 
        => resolve(3), 3000)), 
];

Давайте с помощью Promise.all дождемся окончания загрузки всех промисов из нашего массива:

Promise.all(promises).then(function(res) {
    console.log(res); // выведет [1, 2, 3] - результат всех промисов
});

А теперь с помощью Promise.race дождемся окончания загрузки первого из промисов:

Promise.race(promises).then(function(res) {
    console.log(res); // выведет 1 - результат первого выполнившегося промиса
});

Если хотя бы один из промисов в массиве будет отклонен, то промис с результатом сразу же перейдет в состояние rejected. Поэтому возникшее исключение можно поймать обычным, уже изученным вами способом, например, через catch:

Promise.all(promises).then(function(res) {
    console.log(res);
}).catch(function(err) {
    console.log(err);
}); */

/* function delay() {
    return new Promise((resolve, reject) => {
        let seconds = Math.floor(Math.random() * 10) + 1;
        setTimeout(() => {
            resolve(seconds);
        }, seconds * 1000);
    });
}

let promises = [];

for (let i = 0; i < 10; i++) {
    promises.push(delay());
}

for (let i = 0; i < promises.length; i++) {
    promises[i].then(value => {
        console.log(`Промис ${i} завершился через ${value} секунд`)
    });
} */

/* function delay() {
    return new Promise((resolve, reject) => {
        let seconds = Math.floor(Math.random() * 10) + 1;
        setTimeout(() => {
            resolve(seconds);
        }, seconds * 1000);
    });
}

let promises = [];

for (let i = 0; i < 10; i++) {
    promises.push(delay());
}

Promise.race(promises).then(function(res) {
    console.log(res);
}); */

/* function delay() {
    return new Promise((resolve, reject) => {
        let seconds = Math.floor(Math.random() * 10) + 1;
        setTimeout(() => {
            resolve(seconds);
        }, seconds * 1000);
    });
}

let promises = [];

for (let i = 0; i < 10; i++) {
    promises.push(delay());
}

Promise.all(promises).then(function(res) {
    let sum = 0;
    for (let promise of res) {
        sum += promise;
    }
    console.log(sum);
}); */

// Создание сработавших промисов в JavaScript

/* Иногда вам может понадобится создать уже выполненный промис. Для этого существуют два метода: метод Promise.resolve создает выполненный успешно промис, Promise.reject создает отклоненный промис. Параметром эти методы получают то, что станет результатом или ошибкой промиса соответственно.

Когда нам может понадобится уже выполненный промис? Давайте посмотрим на примере. Пусть у нас есть некоторая функция, которая параметром принимает число, что-то с ним делает асинхронно и возвращает промис с результатом:

function func(num) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(num * num);
        }, 3000);
    });
}

func(5).then(function(res) {
    console.log(res); // выведет 25
});

Пусть теперь мы решили, что нашу асинхронную операцию мы будем совершать, только если передано число больше нуля. В противном случае результатом функции должен быть ноль:

function func(num) {
    if (num > 0) {
        return new Promise(function(resolve) {
            setTimeout(function() {
                resolve(num * num);
            }, 3000);
        })
    } else {
        return 0; // нулевой результат
    }
}

Однако, теперь получается, что функция возвращает или промис, или число. Из-за этого мы больше не можем применить метод then к результату функции, так как в случае возврата функцией числа мы получим ошибку:

func(0).then(function(res) { // ошибка, применяем метод then к нулю 
});

Исправить проблему нам поможет Promise.resolve:

function func(num) {
    if (num > 0) {
        return new Promise(function(resolve) {
            setTimeout(function() {
                resolve(num * num);
            }, 3000);
        });
    } else {
        return Promise.resolve(0); // возвращаем промис, а не число
    }
}

Пусть теперь мы решили, что для переданного нуля мы должны вернуть ноль, а для чисел меньше нуля - исключение. В этом нам поможет метод Promise.reject:

function func(num) {
    if (num > 0) {
        return new Promise(function(resolve) {
            setTimeout(function() {
                resolve(num * num);
            }, 3000);
        });
    } else if (num === 0) {
        return Promise.resolve(0);
    } else {
        return Promise.reject('incorect number'); // вернем отклоненный промис
    }
} */

// Промисификация асинхронного кода в JavaScript

/* Так как промисы появились в JavaScript не так давно, то некоторый асинхронный функционал может не поддерживать промисы. В этом случае полезно создать над таким кодом оболочку в виде промиса, так как пользоваться промисами гораздо удобнее. Такое преобразование называется промисификацией.

Примером функционала, который не поддерживает промисы, может служить загрузка картинок, которую мы уже разбирали в предыдущих уроках:

let image = document.createElement('img');
image.src = 'img.png';

image.addEventListener('load', function() {
    document.body.appendChild(image);
});
image.addEventListener('error', function() {
    console.log('image load error');
});

Давайте выполним промисификацию этого кода, обернув его в функцию, возвращающую промис:

function loadImage(path) {
    return new Promise(function(resolve, reject) {
        let image = document.createElement('img');
        image.src = path;

        image.addEventListener('load', function() {
            resolve(image);
        });
        image.addEventListener('error', function() {
            reject(new Error('image "' + path + '" load error'));
        });
    });
}

Мы сможем воспользоваться нашей функцией следующим образом:

loadImage('image.png').then(function(image) {
    document.body.appendChild(image);
}).catch(function(error) {
    console.log(error);
}); */

/* function loadImage(path) {
    return new Promise(function(resolve, reject) {

        let image = document.createElement('img');
        image.src = path;

        image.addEventListener('load', function() {
            resolve(image);
        });

        image.addEventListener('error', function() {
            reject(new Error('image "' + path + '" load error'));
        });
    });
}

loadImage('https://fons.grizly.club/uploads/posts/2025-06/04/17490609236062.jpg').then(function(image) {
    document.body.appendChild(image);
}).catch(function(error) {
    console.log(error);
}) */

/* let paths = ['img1.png', 'img2.png', 'img3.png'];

function loadImage(path) {
    return new Promise(function(resolve, reject) {
        let image = document.createElement('img');
        image.src = path;

        image.addEventListener('load', function() {
            resolve(image);
        })

        image.addEventListener('error', function() {
            reject(new Error('image "' + path + '" load error'));
        });
    });
}

let promises = [];

for (let path of paths) {
    promises.push(loadImage(path));
}

Promise.all(promises).then(function(images) {
    for (let image of images) {
        document.body.appendChild(image);
    }
}).catch(function(error) {
    console.log(error);
}); */

/* function loadDom() {
    return new Promise(function (resolve, reject) {
        if (document.readyState === 'loading') {
            window.addEventListener('DOMContentLoaded', function () {
                resolve();
            })
        } else {
            resolve();
        }
    })
} */

// Проблема promise hell в JavaScript

/* Вы уже знаете, что промисы были созданы для того, чтобы решить проблему callback hell. Однако, со временем оказалось, что промисы также способны породить сложный код. Эта проблема по аналогии была названа promise hell.

Давайте рассмотрим эту проблему на примерах кода. Пусть у нас есть функция getSmth, получающая параметр и возвращающая результат в зависимости от этого параметра:

function getSmth(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num * num), 1000)
    });
}

В данном случае мы имитируем некоторую полезную операцию (например, получения данных с сервера). В качестве имитации мы просто параметром передаем число и через секунду возвращаем квадрат этого числа.

Давайте теперь воспользуемся нашей функцией getSmth внутри другой функции:

function func() {
    getSmth(2).then(res => {
        console.log(res); // выведет 4
    })
}

func();

Первая проблема

Множество следующих друг за другом конструкций then затрудняют понимание кода:

function func(){
	getSmth(2).then(res1 => {
		// делаем что-то
	}).then(res2 => {
		// делаем что-то
	}).then(res3 => {
		// делаем что-то
	}).then(res4 => {
		// делаем что-то
	}).then(res5 => {
		// делаем что-то
	}).then(res6 => {
		// делаем что-то
	});
}

func();

Вторая проблема

Есть проблема и другого плана. Пусть теперь мы хотим воспользоваться нашей функцией два раза, затем просуммировать результаты. В результате у нас получится вот такой код:

function func() {
	getSmth(2).then(res1 => {
		getSmth(3).then(res2 => {
			console.log(res1 + res2); // выведет 13 
		});
	});
}

func();

Уже напоминает callback hell, не так ли? Добавим еще один вызов функции - код станет еще хуже:

function func() {
	getSmth(2).then(res1 => {
		getSmth(3).then(res2 => {
			getSmth(4).then(res3 => {
				console.log(res1 + res2 + res3);
			});
		});
	});
}

func();

Можно, конечно же, воспользоваться Promise.all:

function func() {
	Promise.all([getSmth(2), getSmth(3), 
		getSmth(4)]).then(res => { 
		console.log(res[0] + res[1] + 
			res[2]); 
	});
}

func();

Однако, получили ли мы то же самое? Нет! В первом случае каждая новая функция ожидает завершения предыдущего промиса, а во втором случае - все промисы выполняются одновременно. Эта разница будет существенна в том случае, когда мы в следующую функцию захотим передать вызов предыдущей:

function func() {
	getSmth(2).then(res1 => {
		getSmth(res1).then(res2 => {
			getSmth(res2).then(res3 => {
				console.log(res3);
			});
		});
	});
}

func(); */

// Промисы в синхронном стиле в JavaScript

/* Для решения проблемы promise hell был придуман специальный синтаксис промисов, позволяющий писать асинхронный код гораздо проще - в синхронном стиле.

Давайте приступим к его изучению. Для начала возьмем код из предыдущего урока:

function func() {
    getSmth(2).then(res => {
        console.log(res); // выведет 4
    })
}

func();

Если бы наша функция getSmth была синхронной, то код функции func мы могли бы переписать следующим образом:

function func() {
    let res = getSmth(2);
    console.log(res); // выведет 4
}

Функция getSmth, однако, асинхронная, поэтому приведенный выше код не сработает. Но, воспользовавшись синхронным стилем промисов, мы сможем получить нечто похожее. Сделаем это.

Для начала мы должны объявить нашу функцию func асинхронной с помощью специальной команды async:

async function func() {

}

После этого мы сможем внутри функции func использовать специальную команду await. Эта команда, написанная перед промисом, заставит JavaScript ждать до тех пор, пока промис не выполнится. После чего команда вернет результат промиса, и выполнение кода продолжится.

В нашем случае мы должны написать await перед вызовом getSmth. Так как результатом вызова этой функции будет промис, то дальнейшее выполнение кода продолжится только после выполнения этого промиса. Ну, а результат промиса можно записать в переменную. Сделаем описанное:

async function func() {
    let res = await getSmth(2);
    console.log(res); // выведет 4
}

func();

Давайте вызовем getSmth несколько раз:

async function func() {
    let res1 = await getSmth(2);
    let res2 = await getSmth(3);

    console.log(res1 + res2); // выведет 13 
}

func();

А теперь будем вызывать getSmth в цикле:

async function func() {
    let arr = [1, 2, 3, 4, 5];
    let sum = 0;

    for (let elem of arr) {
        sum += await getSmth(elem);
    }

    console.log(sum);
}

func(); */

/* function getSmth(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num * num), 1000)
    });
}

async function func() {
    let res1 = await getSmth(2);
    let res2 = await getSmth(3);
    let res3 = await getSmth(4);

    console.log(res1 + res2 + res3);
}

func(); */

// Исключения в синхронном стиле в JavaScript

/* Синхронный синтаксис промисов поддерживает обработку исключений через обычный try-catch:

async function func() {
	try {
		let res = await getSmth(2);
		console.log(res);
	} catch (err) {
		console.log(err);
	}
}

func(); */