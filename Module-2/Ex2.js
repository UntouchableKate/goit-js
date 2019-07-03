const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attemptsLeft = 3;

let input;
let n = 1;

do {
  let input = prompt ('Введите пароль!');
  attemptsLeft = attemptsLeft - n;
  let includePass = passwords.includes(input);
  
  if ( input === null) {
    alert ('Отменено пользователем!');
    break;
  } 
  else if (includePass === true) {
    alert ('Добро пожаловать!');
    break;
  } 
  else if (n > attemptsLeft) {
    alert ('У вас закончились попытки, аккаунт заблокирован!');
  }
  else {
    alert (`Неверный пароль, у вас осталось ${attemptsLeft} попыток`);
  } 
  
} while (n <= attemptsLeft)