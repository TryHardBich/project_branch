const credit=200000;
const prcnt=0.1;
const years=2;

console.log('Выплата по кредиту =', Math.floor(credit+(credit*prcnt)+((credit+(credit*prcnt))*prcnt)), ', переплата =', Math.floor((credit+(credit*prcnt)+((credit+(credit*prcnt))*prcnt)) - credit));