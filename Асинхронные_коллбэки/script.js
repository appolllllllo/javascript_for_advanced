// Асинхронный код с коллбэками в JavaScript

/* Пусть у нас есть некоторая асинхронная функция:

function make() {
    setTimeout(function() {
        console.log('1');
    }, 3000);
}

Пусть мы используем эту функцию следующим образом:


make();
console.log('2'); // выполнится первым

Пусть мы хотим сделать так, чтобы второй вывод в консоль выполнился после того, как выполнится асинхронная операция внутри функции. Одним из подходов, используемых для этого, является использование коллбэка: обернем ожидающий код в анонимную функцию и передадим параметром в функцию make:

make(function() {
    console.log('2');
});

Конечно же, само по себе это не решит нашу задачу. Пока мы просто заключили следующее соглашение: при желании выполнить код после срабатывания make передайте этот код коллбэком в вызов make.

Исправим код функции make так, чтобы она начала работать в соответствии с нашим соглашением:

function make(callback) {
    setTimeout(function() {
        console.log('1'); // некая асинхронная операция, может не одна
        callback(); // затем наш коллбэк
    }, 3000);
} */

/* Расскажите, в каком порядке выведутся числа в консоль:

function make(callback) {
	setTimeout(function() {
		console.log('1');
		callback();
	}, 3000);
}

make(function() {
	console.log('2');
	console.log('3');
});

Порядок вывода: 1, 2, 2 (с паузой 3 секунды в самом начале) */

// Асинхронная передача результата в коллбэк в JavaScript

/* Пусть теперь асинхронная операция после своего завершения не выводит ничего в консоль, а получает некий результат. Пусть это будет массив с данными, который, например, мог бы быть получен через AJAX. Но так как с AJAX мы работать пока не умеем, то просто сымитируем это получение:

function make() {
    setTimeout(function() {
        let res = [1, 2, 3, 4, 5]; // массив с результатом
    }, 3000);
}

Сделаем так, чтобы массив с результатом передавался в параметр коллбэка:

function make(callback) {
    setTimeout(function() {
        let res = [1, 2, 3, 4, 5];
        callback(res); // передаем результат параметром
    }, 3000);
}

Теперь, при передаче коллбэка в вызов функции make мы можем написать в нем параметр - и в этот параметр попадет результат асинхронной операции:

make(function(res) {
	console.log(res); // наш массив
}); */

/* function make(callback) {
    setTimeout(function() {
        let arr = [1, 2, 3, 4, ];
        let sum = 0;
        for (let elem of arr) {
            sum += elem;
        }
        callback(sum);
    })
}

make(function(sum) {
    console.log(sum);
}); */

// Передача параметров в асинхронный коллбэк в JavaScript

/* Сделаем теперь так, чтобы в асинхронную функцию можно было передавать входные параметры. Пусть для примера в качестве первого параметра функции make мы будем передавать номер того элемента массива, который мы хотим получить в качестве результата. Для примера давайте получим третий элемент массива:

make(3, function(res) {
    console.log(res); // третий элемент массива
});

Давайте переделаем код нашей функции make в соответствии с описанным:

function make(num, callback) {
    setTimeout(function() {
        let arr = [1, 2, 3, 4, 5];
        callback(arr[num]); // результатом передадим элемент массива
    }, 3000);
} */

/* function make(num1, num2,
    callback) {
        setTimeout(function() {
            let arr = [1, 2, 3, 4, 5];
            callback(arr[num1] + arr[num2]);
        }, 3000);
    }

make(1, 2, function(sum) {
    console.log(sum);
}); */

// Иключения в асинхронных коллбэках в JavaScript

/* Пусть, если параметром make передан номер несуществующего элемента массива - это исключительная ситуация. Как вы уже знаете, исключения, возникшие внутри асинхронной функции, не могут быть пойманы через try-catch. В нашем случае исключение, возникшее внутри make или коллбэка, не будет поймано:

try {
	make(10, function(res) {
		console.log(res);
	});
} catch(err) {
	// не поймается
}

В коллбэк-подходе с исключениями работают следующим образом: в первый параметр коллбэка отправляют результат, а во второй - ошибку. В этом случае обработка ошибок происходит следующим образом:

make(10, function(res, err) {
    if (!err) {
        console.log(res); // ошибки не возникло, выведем резулттат
    } else {
        console.log(err); // ошибка возникла, выведем ее текст
    }
});

Давайте переделаем код нашей функции make в соответствии с описанным:

function make(num, callback) {
    setTimeout(function() {
        let arr = [1, 2, 3, 4, 5];

        let err;
        if (arr[num] === undefined) {
            err = 'elem not exists'; // текст ошибки
        } else {
            err = null; // ошибки нетж
        }

        callback(arr[num], err);
    }, 3000);
} */

// Загрузка картинок через асинхронные коллбэки в JavaScript

/* Давайте реализуем функцию loadImage, которая будет загружать картинки. Пусть первым параметром эта функция принимает путь к картинке, а вторым - коллбэк, который выполнится, когда картинка будет загружена:

loadImage('img.png', function() {
    // выполнится по загрузке картинки
});

Пусть в первый параметр нашего коллбэка попадает ссылка на DOM элемент картинки, а во второй - ошибка, если произойдет исключительная ситуация:

loadImage('img.png', function(image, err) {
    console.log(image, err);
});

Мы можем использовать нашу функцию следующим образом:

loadImage('image.png', function(image, err) {
    document.body.append(image); // разместим картинку по загрузке
});

Либо с обработкой исключительной ситуации:

loadImage('image.png', function(image, err) {
    if (!err) {
        document.body.append(image);
    } else {
        console.log('произошла ошибка: ' + err);
    }
}); */

/* function loadImage(src, callback) {
    let image = document.createElement('img');
    image.src = src;

    image.addEventListener('load', function() {
        callback(image, null);
    });

    image.addEventListener('error', function() {
        callback(null, 'не удалось загрузить картинку');
    });
}

loadImage('img.jpg', function(image, err) {
    if (!err) {
        document.body.append(image);
    } else {
        console.log('произошла ошибка: ' + err);
    }
}); */

// Проблема callback hell в JavaScript

/* Пусть мы хотим с помощью функции loadImage загрузить три картинки:

loadImage('img1.png', function(image, 
	err) { 
	document.body.append(image);
});
loadImage('img2.png', function(image, 
	err) { 
	document.body.append(image);
});
loadImage('img3.png', function(image, 
	err) { 
	document.body.append(image);
});

С этим кодом кое-что не так. Дело в том, что картинки будут добавляться в body по мере их загрузки. To есть никто не гарантирует нам, что картинки будут добавлены именно в том порядке, который нам нужен.

Есть еще кое-что. Пусть мы хотим сделать что-нибудь, когда будут загружены все три картинки. В нашем коде мы просто не сможем поймать этот момент, так как все три картинки грузятся независимо.

Окей, переделаем код:

loadImage('img1.png', function(image1, 
	err1) { 
	document.body.append(image1);
	
	loadImage('img2.png', function(image2, 
		err2) { 
		document.body.append(image2);
		
		loadImage('img3.png', function(image3, 
			err3) { 
			document.body.append(image3);
			console.log('все картинки загружены'); 
		});
	});
});

Мы решили обе описанные проблемы. Однако, получили взамен другую. Пока она еще не сильно видна, но представьте себе, как будет выглядеть наш код, если в нем будет загрузка не трех, а, скажем, десяти картинок, плюс будет добавлена обработка исключений. В результате код станет крайне нечитаемым: сложность кода лавинообразно нарастает при вложенности коллбэков друга. Такая ситуация называется callback hell - ад коллбэков. */

/* loadImage('img1.png', function(image1, err1) {
    if (!err1) {
        document.body.append(image1);
        
        loadImage('img2.png', function(image2, err2) {
            if (!err2) {
                document.body.append(image2);
                
                loadImage('img3.png', function(image3, err3) {
                    if (!err3) {
                        document.body.append(image3);
                        
                        loadImage('img4.png', function(image4, err4) {
                            if (!err4) {
                                document.body.append(image4);
                                
                                loadImage('img5.png', function(image5, err5) {
                                    if (!err5) {
                                        document.body.append(image5);
                                        
                                        loadImage('img6.png', function(image6, err6) {
                                            if (!err6) {
                                                document.body.append(image6);
                                                
                                                loadImage('img7.png', function(image7, err7) {
                                                    if (!err7) {
                                                        document.body.append(image7);
                                                        
                                                        loadImage('img8.png', function(image8, err8) {
                                                            if (!err8) {
                                                                document.body.append(image8);
                                                                
                                                                loadImage('img9.png', function(image9, err9) {
                                                                    if (!err9) {
                                                                        document.body.append(image9);
                                                                        
                                                                        loadImage('img10.png', function(image10, err10) {
                                                                            if (!err10) {
                                                                                document.body.append(image10);
                                                                                console.log('все картинки загружены');
                                                                            } else {
                                                                                console.log('ошибка загрузки img10: ' + err10);
                                                                            }
                                                                        });
                                                                    } else {
                                                                        console.log('ошибка загрузки img9: ' + err9);
                                                                    }
                                                                });
                                                            } else {
                                                                console.log('ошибка загрузки img8: ' + err8);
                                                            }
                                                        });
                                                    } else {
                                                        console.log('ошибка загрузки img7: ' + err7);
                                                    }
                                                });
                                            } else {
                                                console.log('ошибка загрузки img6: ' + err6);
                                            }
                                        });
                                    } else {
                                        console.log('ошибка загрузки img5: ' + err5);
                                    }
                                });
                            } else {
                                console.log('ошибка загрузки img4: ' + err4);
                            }
                        });
                    } else {
                        console.log('ошибка загрузки img3: ' + err3);
                    }
                });
            } else {
                console.log('ошибка загрузки img2: ' + err2);
            }
        });
    } else {
        console.log('ошибка загрузки img1: ' + err1);
    }
}); */

// Асинхронная загрузка картинок в цикле в JavaScript

/* let arr = ['img1.png', 'img2.png', 
	'img3.png']; 

for (let path of arr) {
    loadImage(path, function(image, err) {
        document.body.append(image);
    });
}

Код получился красивый и без callback hell, однако, мы вернулись к двум нашим проблемам: порядок картинок не гарантирован и невозможно поймать момент загрузки всех картинок.

И решения в данной ситуации нет: невозможно запустить цикл, использовать внутри него асинхронную функцию, а потом поймать момент завершения всех функций цикла. Либо вам не нужно ловить этот момент и приведенный выше код вам подойдет либо добро пожаловать в callback hell.

Но, расстраиваться не стоит - решение проблемы возможно через промисы, которые мы будем изучать в следующих уроках. */