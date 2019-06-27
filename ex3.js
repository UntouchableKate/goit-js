const userInput = prompt ('Укажите страну доставки');
const deliveryCountry = userInput.toLowerCase();

console.log (userInput.toLowerCase());

const COUNTRY_CHINA = 'китай';
const COUNTRY_AMERIKA = 'южная америка';
const COUNTRY_AUSTRALIA = 'австралия';
const COUNTRY_INDIA = 'индия';
const COUNTRY_JAMAJCA = 'ямайка';

const PRICE_CHINA = 100;
const PRICE_AMERICA = 250;
const PRICE_AUSTRALIA = 170;
const PRICE_INDIA = 80;
const PRICE_JAMAICA = 120;

let deliveryPrice;
const newStr = `${deliveryCountry[0].toUpperCase()}${deliveryCountry.slice(1)}`;
  
switch (deliveryCountry) {
 
  case COUNTRY_CHINA:
    console.log ('Китай');
    deliveryPrice = PRICE_CHINA;
    alert (`Доставка в ${newStr} будет стоить ${deliveryPrice} кредитов`);
   break; 
    
    case COUNTRY_AMERIKA:
    console.log ('Южная Америка');
    deliveryPrice = PRICE_AMERICA;
    alert (`Доставка в ${newStr} будет стоить ${deliveryPrice} кредитов`);
   break; 
    
    case COUNTRY_AUSTRALIA:
    console.log ('Австралия');
    deliveryPrice = PRICE_AUSTRALIA;
    alert (`Доставка в ${newStr} будет стоить ${deliveryPrice} кредитов`);
   break; 
    
    case COUNTRY_INDIA:
    console.log ('Индия');
    deliveryPrice = PRICE_INDIA;
    alert (`Доставка в ${newStr} будет стоить ${deliveryPrice} кредитов`);
   break; 
    
    case COUNTRY_JAMAJCA:
    console.log ('Ямайка');
    deliveryPrice = PRICE_JAMAICA;
    alert (`Доставка в ${newStr} будет стоить ${deliveryPrice} кредитов`);
   break; 
  
     default:
        alert ('В вашей стране доставка не доступна');
}
    

 //alert (`Доставка в ${newStr} будет стоить ${deliveryPrice} кредитов`);