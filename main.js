//даты_task_1
var date = new Date();

function showTime(date) {
	var h = date.getHours();
	if (h < 10) {
		h = '0' + h;
	}
	var m = date.getMinutes();
	if (m < 10) {
		m = '0' + m;
	}
	var s = date.getSeconds();
	if (s < 10) {
		s = '0' + s;
	}
	return h + ':' + m + ':' + s;
}

alert( showTime(date) );

//даты_task_2
var n = +prompt('Хотите узнать, какая дата будет через N дней, введите N для расчета:', '');
while (n < 1 || n > 1000 || isNaN(n)) {
	n = +prompt('Введите количество дней от  1 до 1000 для расчета будущей даты:', '');
}
function showFutureDate(days) {
	var date = new Date();
	date.setDate(date.getDate() + n);
	var weekDate = date.getDay();
	var week = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
	var day = date.getDate();
	var monthes = [ 'январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']
	var month = date.getMonth();
	var year = date.getFullYear();
	document.write('Через ' + n + ' дня(ей) будет вот такая дата:' + '<br>' +
		'День недели: ' + week[weekDate] + '<br>' +
		'Число: ' + day + '<br>' +
		'Месяц: ' + monthes[month] + '<br>' +
		'Год: ' + year );

}
showFutureDate(n);


/*=======================================================================*/
/*=======================================================================*/

//обьекты_task_1
var salaries = {
	"Вася": 100,
	"Петя": 300,
	"Даша": 250
};

var summ = 0;
for (var key in salaries) {
	summ += salaries[key];
}
console.log(summ);

//обьекты_task_2
var salaries = {
	"Вася": 100,
	"Петя": 300,
	"Даша": 250
};

var max = 0;
var maxKey = 0;
for (var key in salaries) {
	if (salaries[key] > max) {
		max = salaries[key];
		maxKey = key;
	}
}
console.log(maxKey || 'нет сотрудников');

/*=======================================================================*/
/*=======================================================================*/

//рекурсия_task_1
var n = +prompt('Введите натуральное число:', '');
function count(n) {
	if (n == 1){
		return n; 
	} else {
		return count(n - 1) + ' ' + n;
	}
}
count(n);


//рекурсия_task_2(через цикл)
var N = +prompt('Введите число n для расчета суммы от 1 до n :', '');

function sumTo(n) {
	var summ = 0;
	for (var i=1; i<=n; i++) {
		summ += i;
	}
	return summ;
}
alert('сумма чисел от 1 до ' + N + ' равна ' + sumTo(N));

//рекурсия_task_2
function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}
alert('сумма чисел от 1 до ' + N + ' равна ' + sumTo(N));


//рекурсия__task_3
function consoleNumbers() {
	var i = 1;
	var timer = setInterval(function() {
		console.log(i);
		if (i == 20) clearInterval(timer);
		i++;
	}, 100);
}

consoleNumbers();


function consoleNumbers() {
	var i = 1;
	var timer = setTimeout(function consoleNum() {
		console.log(i);
		timer = setTimeout(consoleNum, 100);
		if (i < 20) {i++}
		else {
			clearTimeout(timer);
		}
	}, 100);
}
consoleNumbers();

