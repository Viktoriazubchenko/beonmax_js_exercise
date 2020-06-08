

// var leftBorderWidth = 1;
// let second = 2;

// const third = 3;

// let person = {
//     name: 'Rami',
//     age: 32,
//     isMarried: true
// };

// console.log(person.age);

// let array = ['plum.png', 'orange.png', 'apple.png'];
// console.log(array[0]);

// let answer = prompt("Are you here?");
// console.log(typeof(answer));

let money = prompt("Ваш бюджет на месяц?");
console.log(money);

let time = prompt("Введите дату в формате YYYY-MM-DD");
console.log(time);

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a2 = prompt("Во сколько обойдется?", ''),
	a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a4 = prompt("Во сколько обойдется?", '');

let appData = {
    budget: money,
    expenses: {},
    timeData: time,
    optionalExpenses: {},
    income: [],
    savings: false
};

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

dailyBudget = appData.budget / 30;
alert(dailyBudget);


