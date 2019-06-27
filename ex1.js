const ADMIN_PASSWORD = 'm4ng0h4ckz';
const request = prompt('Введите пароль доступа');
let message;

if (request === null) {
  message = 'Отменено пользователем!';
} else if(request === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}

alert (message);
