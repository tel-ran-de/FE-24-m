class Person {
	constructor(fName, lName, base, plan, koeff = 1.2) {
		this.id = Date.now();
		this.fName = fName;
		this.lName = lName;
		this.base = base;
		this.plan = plan; // in hours
		this.workingDays = [];
		this.koeff = koeff;
	}
	getShortName() {
		return `${this.lName} ${this.fName[0]}.`;
	}
	addWorkingDay(hours) {
		this.workingDays.push(hours);
	}
	getAllTime() {
		let totalResult = 0;
		this.workingDays.forEach((item) => {
			totalResult += item;
		});
		// const totalResult = this.workingDays.reduce((totalHours, hoursInDay) => {
		// 	return (totalHours += hoursInDay);
		// }, 0);
		return totalResult;
	}
	getSalary() {
		const fullTime = this.getAllTime();
		if (fullTime <= this.plan) {
			return fullTime * this.base;
		}
		return (
			(fullTime - this.plan) * this.base * this.koeff + this.plan * this.base
		);
	}
}

const ivan = new Person('Ivan', 'Ivanoff', 10, 30);
ivan.addWorkingDay(10);
ivan.addWorkingDay(8);
ivan.addWorkingDay(3);
ivan.addWorkingDay(10);

console.log(ivan);
console.log(ivan.getAllTime());
console.log(ivan.getSalary());

const persons = [];
