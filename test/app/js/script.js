;(function(){

	let login = prompt('Логин', '');
	let answer;

	if (login == 'Админ') {

		let password  = prompt('Пароль', '');

		answer = Check(password);
	}

	else if (login == null) {

		answer = 'Вход отменён';
	}

	else {

		answer = 'Я вас не знаю';
	}

	alert(answer);

})();

function Check(password) {

	if(password == 'Черный Властелин') {

		answer = 'Добро пожаловать!'
	}

	else if(password == null) {

		answer = 'Вход отменён'
	} 

	else {

		answer = 'Пароль неверен'
	}

	return answer;
}