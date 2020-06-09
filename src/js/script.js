let money = +prompt("Ваш бюджет на месяц?");
console.log(money);

let time = prompt("Введите дату в формате YYYY-MM-DD");
console.log(time);

// let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 	a2 = prompt("Во сколько обойдется?", ''),
// 	a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 	a4 = prompt("Во сколько обойдется?", '');

let appData = {
    budget: money,
    expenses: {},
    timeData: time,
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
    if ( (typeof(a)) === 'string' && (typeof(a)) !== null && (typeof(b)) !== null && a != ''&& b != '' && a.length < 50 ) {
        appData.expenses[a] = b;
    } else {
        console.log("MISTAKE");
        i--;
    }
    
}



moneyPerDay = appData.budget / 30;
console.log(moneyPerDay);
console.log(typeof(appData.budget));
alert ("Бюджет на 1 день составляет " + moneyPerDay + "руб.");

