// Generics

// interface User {
// 	name: string;
// 	age: number;
// }

// interface Message {
// 	text: string;
// 	id: number;
// }


// interface UserState {
// 	loading: boolean;
// 	error: Error | null;
// 	data: User
// }

// interface MessageState {
// 	loading: boolean;
// 	error: Error | null;
// 	data: Message
// }


// Здесь нам может понадобится дженерик тип
// interface State<T, S, B, G> {} // Интерфейс State использует 4 дженерик типа
// type State2<T, S, B, G> = {} // дженерик типы используемы алиасом
// class State3<T, S, B, G> {} // дженерик типы используемы классом
// function State4<T, S, B, G>() {} // дженерик типы используемы функцией


// interface State<T> {
// 	loading: boolean;
// 	error: Error | null;
// 	data: T
// } 

// type UserState = State<User>; // дженерик указывается в качестве типа данных
// type MessageState = State<Message>; // значит должен содержать аннотацию обощения
// // то есть <User> или <Message>

// const messageState: MessageState = {

// }










// Чуть более сложная типизация

// function getRandomElement(items) {
// 	const randomIndex = Math.floor(Math.random() * items.length)
// 	return items[randomIndex]
// }

// const el1 = getRandomElement([1,2,3])
// const el2 = getRandomElement(['hello','world','!'])
// const el3 = getRandomElement(['hello','world','!',1,2,3])
// const el4 = getRandomElement(['hello','world','!',1,2,3,null])

// function getRandomElement<T>(items: T[]) : T {
// 	const randomIndex = Math.floor(Math.random() * items.length)
// 	return items[randomIndex]
// }













// Другой пример
// function merge<
// 	FirstObject extends object, 
// 	SecondObject extends object
// >(
// 	object1: FirstObject, 
// 	object2: SecondObject
// ) {
// 	return {
// 		...object1,
// 		...object2
// 	}
// }

// const mergedObject = merge(
// 	{ name: 'Alex', age: 25 },
// 	{ country: 'USA', client: true }
// )











// function merge<First, Second>(object1: First, object2: Second): First & Second {
// 	return {
// 		...object1,
// 		...object2
// 	}
// }













// Основные встроенные дженерики

// Promise
// async function fakeRequest() {
// 	return 2 // независимо от того что здесь вернет promise
// }
// // const b: number = fakeRequest(); // ошибка TS
// const b: Promise<number> = fakeRequest(); 









// Array
// type Names = string[];
// type Names = Array<string>;










// Object
// type Obj = {
// 	[key: string]: number
// }
// type Obj = Record<string, number>


// Partial<T> – указывает, что все свойства типа T являются необязательными
// Readonly<T> – указывает, что все свойства типа T доступны только для чтения












// Расширение типов
// function len<
// 	T extends { length: number }
// >(collection: T): number {
// 	return collection.length
// }

// const str = len('hello'); // ok
// const arr = len(['1', 45, false]); // ok
// const obj = len({length:10}); // ok
// const num = len(65); // error



// function len<T extends { length: number }>(collection: T) {
// 	return collection.length
// }













// Получаем свойство из объекта

// function getValue<
// 	Obj extends object, // Тип Obj ограничен типом object
// 	Key extends keyof Obj // Тип Prop ограничен ключами типа Obj
// >(obj: Obj, key: Key): Obj[Key] {
// 	return obj[key]
// }

// const value1 = getValue({
// 	name: 'max',
// 	age: 25,
// 	text:'dfssf'
// }, 'test')




// function getValue<Obj extends object, Prop extends keyof Obj>(obj: Obj, prop: Prop) {
// 	return obj[prop]
// }
// Как это читать?
// 1. Тип Obj ограничен типом object
// 2. Тип Prop ограничен ключами типа Obj


// const value1 = getValue({
// 	name: 'max',
// 	age: 25
// }, 'country')












// Теперь получим ключ из объекта


// function getKey<
// 	Obj extends object,
// >(obj: Obj, value: Obj[keyof Obj]) {
// 	const key = (Object.keys(obj) as Array<keyof Obj>).find(k => obj[k] === value))
// 	return key || null
// }









// function getKey<
// 	Obj extends object, 
// 	Key extends keyof Obj
// >(obj: Obj, value: Obj[Key]): Key | null {
// 	const key = (Object.keys(obj) as Array<Key>).find(k => obj[k] === value))
// 	return key || null
// }

// или чуть проще
// function getKey<Obj extends object>(obj: Obj, value: Obj[keyof Obj]): keyof Obj | null {
// 	const key = (Object.keys(obj) as Array<keyof Obj>).find(k => obj[k] === value))
// 	return key || null
// }

// const key1 = getKey({
// 	name: 'max',
// 	age: 25
// }, 'USA')












// Пример для закрепления 
// type FunctionalComponent<
// 	RC extends object = object // объект по дефолту
// > = (props: RC & {children: any}) => any // и это функция которая принимает props типа RC 
// // и добавляет к ним children и потом возвращает any некоторый

// const component: FunctionalComponent< 
// 	{ name: string, age: number } 
// > = ( { name, age, children } ) => {}

// const jsxComponent = component({name:'Alex',age:5,children:null})


































































// 1) Как сводить к типу в TypeScript?
// дано
// let array = [1,2,3,4,5];
// let arrayLength = (array as number[]).length;






// Следует использовать утверждение типа (type assertion) - as


// let array: any = [1,2,3,4,5];
// let strLength = (array as number[]).length;





















// Небольшое отступление про модификаторы доступа

// Модификаторы доступа позволяют сокрыть состояние объекта 
// от внешнего доступа и управлять доступом к этому состоянию. 
// В TypeScript три модификатора: public, protected и private

// public то же что и вовсе без модификатора то есть 
// class Person {
//     name: string;
//     year: number;
// }
// // Будет эквивалентно:
// class Person {
//     public name: string;
//     public year: number;
// }

// private
// Если же к свойствам и методам применяется модификатор private, 
// то к ним нельзя будет обратиться извне при создании объекта данного класса.

// protected
// Модификатор protected определяет поля и методы, 
// которые из вне класса видны только в классах-наследниках
// то есть в тех классах которых "расширили" 
// class Employee extends Person


// 2) Как проверить тип объекта?
// class Animal{
// 	constructor(private name: string) {
// 		this.name = name
// 	}

//   // name - приватное свойство
// }
// let bird = new Animal('Wolf');
// console.log(bird) // true
















// Используя JavaScript  оператор instanceof:














// class Animal {
//   constructor(private name:string){
//     this.name = name;
//   }
// }
// let bird = new Animal('Bird');
// console.log(bird instanceof Animal) // true
















// 3) Как объявить массив?'
// просто определить тип
// let array = [1, 2, 3];


// определить через интерфейс Person
// let employees = [{name:'John Doe'}]







// let array: number[] = [1, 2, 3];
// interface Person {
//   name: string;
// }
// let employees: Array<Person> = [{name:'John Doe'}] //declaring array of objects


























// 4) Как проверить, является ли переменная undefined и/или null?

// let obj = {};
// let nullValue = null;
// let undefinedValue = obj.someProp;

// console.log(nullValue)
// console.log(undefinedValue)


// Самый простой способ - использовать оператор (something == null). 
// Возвращает true, если что-то равно null или undefined. 
// Также  можно использовать оператор отрицание.



// let obj:any={};
// let nullValue:any=null;
// let undefinedValue=obj.someProp;
// console.log(nullValue==null)//true
// console.log(undefinedValue==null)//true

// if(!nullValue || !undefinedValue){
//   console.log(true)
// }














// 5) Как создать тип перечисление в TypeScript?

//     New=1,
//     Pending,
//     InProgress,
//     Done

// console.log(Status.Pending)//2




// Используя ключевое слова enum. 
// Тело перечисления может состоять из нуля или многих элементов. 
// Каждый элемент имеет имя и значение. 
// Значение может быть объявлено как константа или вычислено.




// enum Status {
//     New=1,
//     Pending,
//     InProgress,
//     Done
// }
// console.log(Status.Pending)//2



























// 6) Как импортировать модуль?
// //ModuleA
// default class MyClass{
//     someProp:any;
//     someMethod(){
//   }
// }
// //ModuleB
// // ...












// Любой файл, содержащий ключевое слово import/export, считается модулем. 
// Существует два типа экспорта: default и named. 
// Для импорта экспорта по умолчанию напишите: import * as Module from './SomeModule'. 
// Для именованного  импорта export-import {SomeFunc} from './SomeModule'.














//ModuleA
// export interface MyClass{
// 	  someProp:any;
// 	  someMethod(){
//   }
// }
// //ModuleB
// import MyClass from './ModuleA'
// import * as moment from "moment";












// 7) Как использовать forEach и for..в TypeScript?
// let array = [1,2,3];
// array.forEach( e => e.toExponential(2) ) 















// Нет никакой разницы между тем, как использовать в JavaScript, 
// за исключением того, что вы можете указать тип для елемента массива. 
// Также будет ошибка компилятора при попытке запустить метод forEach для объекта или строки.















// let array:number[]=[1,2,3];
// array.forEach(e=>e.toExponential(2)) // Compiler knows that has number type 









// 8) Что такое дженерики(generics) ? Как их использовать?

// function loggingObject {
//   console.log(arg.toString());
//   return arg;
// }




// Generic-это некоторый обобщенный тип, который может быть заменен любым конкретным типом, 
// таким как string или number. Универсальные шаблоны позволяют писать универсальные функции, 
// с сохранностью типа, без использования "любого" типа. 
// Существуют универсальные функции, классы или интерфейсы, например, 
// можно написать класс Container<T>, который реализует базовые операции сбора, 
// независимо от типа хранимых элементов.




// function loggingObject<T>(arg: T): T {
//      return arg;
// }




























function App() {
  return (
    <div>

    </div>
  );
}

export default App;
