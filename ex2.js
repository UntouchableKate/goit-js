const credits = 23850;
const pricePreDroid = 3000;
let totalPrice;
let balance;
let message;
const request = prompt ('Введите нужное количество дронов');


if (request === null) {
  message = 'Отменено пользователем!';
}

else {
  totalPrice = request * pricePreDroid;
  
  if (totalPrice > credits) {
    message = 'Недостаточно средств на счету!';
  }
  else {
    balance = credits - totalPrice;
    message = `Вы купили ${request} дроидов, на счету осталось ${balance} кредитов.`;
  }
}

alert (message);