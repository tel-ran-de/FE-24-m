// https://typescript-handbook.ru/docs/ts-3/
// Сужение типов

// # Пример
// Если padding - это number, значит, мы хотим добавить указанное количество пробелов перед input.
// Если padding - это string, значит, мы просто хотим добавить padding перед input. 
// Попробуем реализовать логику, когда padLeft принимает number для padding:
// function padLeft(padding: number | string, input: string): string {
//   return new Array(padding + 1).join(' ') + input
//   // TS ERROR Оператор '+' не может быть применен к типам 'string | number'
//   // мы должны проверить тип padding
// }



// function padLeft(padding: number | string, input: string): string {
//   if (typeof padding === 'number') {
//     return new Array(padding + 1).join(' ') + input
//   }
//   return padding + input
// }
// И никаких ошибок!

// Выражение typeof padding === 'number' 
// называется защитником или предохранителем типа (type guard)
// А процесс приведения определенного типа к более конкретной версии 
// с помощью защитников типа и присвоений называется сужением типа (narrowing)




// Конструкции сужения типов:

// 1) Защитник типа typeof

// Оператор typeof возвращает одну из следующих строк:
// "string"
// "number"
// "bigint"
// "boolean"
// "symbol"
// "undefined"
// "object"
// "function"

// # Пример
// function printAll(strs: string | string[] | null) {
//   if (typeof strs === 'object') {
//     for (const s of strs) {
//       // Object is possibly 'null'.
//       // Потенциальным значением объекта является 'null'
//       console.log(s)
//     }
//   } else if (typeof strs === 'string') {
//     console.log(strs)
//   } else {
//     // ...
//   }
// }

// В функции printAll мы пытаемся проверить, 
// является ли переменная strs объектом (массивом).
// Но, поскольку выражение typeof null возвращает object (по историческим причинам), мы получаем ошибку.
// Таким образом, в приведенном примере мы выполнили сужение к string[] | null вместо желаемого string[].




// 2) Проверка на истинность (truthiness narrowing)

// В JS мы можем использовать любые выражения в условиях, 
// инструкциях &&, ||, if, 
// приведении к логическому значению с помощью ! и т.д. 
// Например, в инструкции if условие не всегда должно иметь тип boolean
// # Пример
// function getUsersOnlineMessage(numUsersOnline: number) {
//   if (numUsersOnline) {
//     return `В сети находится ${numUsersOnline} человек!`
//   }
//   return 'Здесь никого нет :('
// }



// В JS конструкции типа if преобразуют условия в логические значения
// и выбирают ветку (с кодом для выполнения) в зависимости от результата (true или false)

// 0
// 0n (bigint-версия нуля)
// NaN
// "" (пустая строка)
// null
// undefined

// Все они ложные (false), всё остальное соотвественно true


// Явно преобразовать значение в логическое можно 
// с помощью функции Boolean или с помощью двойного отрицания (!!):
// Boolean('hello') // true
// !!'world' // true


// # Пример
// function printAll(strs: string | string[] | null) {
//   if (strs && typeof strs === 'object') { // теперь нет ошибки
//     for (const s of strs) {
//       console.log(s)
//     }
//   } else if (typeof strs === 'string') {
//     console.log(strs)
//   }
// }


// # Пример использования отрицания
// function multiplyAll(
//   values: number[] | undefined,
//   factor: number
// ): number[] | undefined {
//   if (!values) {
//     return values
//   } else {
//     return values.map((x) => x * factor)
//   }
// }




// 3) Проверка на равенство (equality narrowing)

// Для сужения типов также можно воспользоваться инструкцией 
// switch или операторами равенства ===, !==, ==, !=

// # Пример
// function example(x: string | number, y: string | boolean) {
//   if (x === y) {
//     // Теперь мы можем вызывать любой строковый метод
//     x.toUpperCase()
//     // (method) String.toUpperCase(): string
//     y.toLowerCase()
//     // (method) String.toLowerCase(): string
//   } else {
//     console.log(x)
//     // (parameter) x: string | number
//     console.log(y)
//     // (parameter) y: string | boolean
//   }
// }



// # Пример
// Перепишем printAll с использованием оператора равенства:
// function printAll(strs: string | string[] | null) {
//   if (strs !== null) {
//     if (typeof strs === 'object') {
//       for (const s of strs) {
//         // (parameter) strs: string[]
//         console.log(s)
//       }
//     } else if (typeof strs === 'string') {
//       console.log(strs)
//       // (parameter) strs: string
//     }
//   }
// }



// Операторы абстрактного равенства (== и !=) 
// также могут использоваться для сужения типов, 
// в некоторых случаях их использование даже более эффективно, 
// чем использование операторов строгого равенства (=== и !==). 

// Например, выражение == null проверяет на равенство не только с null, но и с undefined. 
// Аналогично выражение == undefined проверяет на равенство не только с undefined, но и с null.

// # Пример
// interface Container {
//   value: number | null | undefined
// }

// function multiplyValue(container: Container, factor: number) {
//   // Удаляем 'null' и 'undefined' из типа
//   if (container.value != null) {
//     console.log(container.value)
//     // (property) Container.value: number

//     // Теперь мы можем безопасно умножать 'container.value'
//     container.value *= factor
//   }
// }



// 4) Сужение типов с помощью оператора in

// оператор in существует в JavaScript для проверки наличия свойства в объекте
// # Пример
// type Fish = { swim: () => void }
// type Bird = { fly: () => void }

// function move(animal: Fish | Bird) {
//   if ('swim' in animal) {
//     return animal.swim()
//   }

//   return animal.fly()
// }

// В выражении 'value' in x, 
// где 'value' - строка, а x - объединение, 
// истинная ветка сужает типы x к типам, 
// которые имеют опциональное или обязательное свойство value, 
// а ложная ветка сужает типы к типам, 
// которые имеют опциональное или не имеют названного свойства



// Наличие опциональных свойств в обоих ветках не является ошибкой, 
// поскольку человек, например, может и плавать (swim), и летать (fly):
// # Пример
// type Fish = { swim: () => void }
// type Bird = { fly: () => void }
// type Human = { swim?: () => void; fly?: () => void }

// function move(animal: Fish | Bird | Human) {
//   if ('swim' in animal && animal.swim) {
//     animal.swim()
//     // (parameter) animal: Fish | Human
//   } else if ('fly' in animal && animal.fly) {
//     animal.fly()
//     // (parameter) animal: Bird | Human
//   } else {
//   	console.log('О, это человек который ничего не хочет делать')
//   }
// }


// 5) Сужение типов с помощью оператора instanceof

// Оператор instanceof используется для определения того, 
// является ли одна сущность "экземпляром" другой. 

// Например, выражение x instanceof Foo проверяет, 
// содержится ли Foo.prototype в цепочке прототипов x. 
// Данный оператор применяется к значениям, 
// сконструированным с помощью ключевого слова new. 
// Он также может использоваться для сужения типов

// // # Пример
// function logValue(x: Date | string) {
//   if (x instanceof Date) {
//     console.log(x.toUTCString())
//     // (parameter) x: Date
//   } else {
//     console.log(x.toUpperCase())
//     // (parameter) x: string
//   }
// }




// 6) Присвоения (assignments)

// Когда мы присваиваем значение переменной, 
// TS "смотрит" на правую часть выражения 
// и вычисляет тип для левой части:

// let x = Math.random() < 0.5 ? 10 : 'hello world!'
// // let x: string | number

// x = 1
// console.log(x)
// let x: number

// x = 'goodbye!'
// console.log(x)
// // let x: string

// // Данные присвоения являются валидными, 
// // поскольку типом, определенным для x, 
// // является string | number. 

// // Однако, если мы попытаемся присвоить x логическое значение, то получим ошибку:

// x = true
// // Type 'boolean' is not assignable to type 'string | number'.
// console.log(x)
// // let x: string | number




// 7) Анализ потока управления (control flow analysis)

// Анализ потока управления - это анализ, 
// выполняемый TS на основе достижимости кода (reachability)
// и используемый им для сужения типов с учетом защитников типа и присвоений. 

// При анализе переменной поток управления может разделяться и объединяться снова и снова,
// поэтому переменная может иметь разные типы в разных участках кода:

// # Пример
// function example() {
//   let x: string | number | boolean

//   x = Math.random() < 0.5

//   console.log(x)
//   // let x: boolean

//   if (Math.random() < 0.5) {
//     x = 'hello'
//     console.log(x)
//     // let x: string
//   } else {
//     x = 100
//     console.log(x)
//     // let x: number
//   }

//   return x
//   // let x: string | number
// }




// 8) Использование предикатов типа (type predicates)

// Иногда мы хотим иметь более прямой контроль над тем, как изменяются типы. 
// Для определения пользовательского защитника типа необходимо определить функцию, 
// возвращаемым значением которой является предикат типа:

// type Fish = { swim: () => void }
// type Bird = { fly: () => void }

// function isFish(pet: Fish | Bird): pet is Fish {
//   return (pet as Fish).swim !== undefined
// }

// pet is Fish - это наш предикат. 
// Предикат имеет форму parameterName is Type, 
// где parameterName - это название параметра из сигнатуры текущей функции.

// При вызове isFish с любой переменной, 
// TS "сузит" эту переменную до указанного типа, 
// разумеется, при условии, что оригинальный тип совместим с указанным.

// if (isFish(pet)) {
//   pet.swim()
// } else {
//   pet.fly()
// }

// TS знает не только то, что pet - это Fish в ветке if, 
// но также то, что в ветке else pet - это Bird.



// 9) Исключающие объединения (discriminated unions)

// Предположим, что мы пытаемся закодировать фигуры, такие как круги и квадраты. 
// Круги "следят" за радиусом, а квадраты - за длиной стороны. 

// Для обозначения того, с какой фигурой мы имеем дело, 
// будет использоваться свойство kind. 

// interface Shape {
//   kind: 'circle' | 'square' // Использование 'circle' | 'square' вместо string позволяет избежать орфографических ошибок:
//   radius?: number
//   sideLength: number
// }

// function handleShape(shape: Shape) {
//   // Упс!
//   if (shape.kind === 'rect') {
//     // ERROR Данное условие всегда возвращает `false`, поскольку типы "circle" | "square" и "rect" не пересекаются
//     // ...
//   }
// }

// Cоздадим функцию getArea для вычисления площади фигур. Начнем с кругов:

// function getArea(shape: Shape) {
//   return Math.PI * shape.radius ** 2
//   // ERROR Потенциальным значением объекта является 'undefined'
// }

// Нужно исправить

// function getArea(shape: Shape) {
//   if (shape.kind === 'circle') {
//     return Math.PI * shape.radius ** 2
//     // ERROR Object is possibly 'undefined'.
//     // Можно переписать shape.radius! (ненулевое утверждение)
//     // но лучше сделать иначе
//   }
// }


// interface Circle {
//   kind: 'circle'
//   radius: number
// }

// interface Square {
//   kind: 'square'
//   sideLength: number
// }

// type Shape = Circle | Square

// Мы разделили Shape на два разных типа с разными значениями свойства kind, 
// свойства radius и sideLength являются обязательными в соответствующих типах.

// function getArea(shape: Shape) {
//   if (shape.kind === 'circle') {
//     return Math.PI * shape.radius ** 2
//     // (parameter) shape: Circle
//   } else {
//     return shape.sideLength ** 2
//     // (parameter) shape: Square
//   }
// }

// или через switch

// function getArea(shape: Shape) {
//   switch (shape.kind) {
//     case 'circle':
//       return Math.PI * shape.radius ** 2
//     // (parameter) shape: Circle
//     case 'square':
//       return shape.sideLength ** 2
//     // (parameter) shape: Square
//   }
// }







// 10) Тип never и исключающие проверки (exhaustiveness checking)

// Тип never может быть присвоен любому типу; 
// однако, никакой тип не может быть присвоен never (кроме самого never). 
// Это означает, что never можно использовать 
// для выполнения исчерпывающих проверок в инструкции switch

// # Пример
// function getArea(shape: Shape) {
//   switch (shape.kind) {
//     case 'circle':
//       return Math.PI * shape.radius ** 2
//     case 'square':
//       return shape.sideLength ** 2
//     default:
//       const _exhaustiveCheck: never = shape
//       return _exhaustiveCheck
//   }
// }// После этого попытка добавления нового члена в объединение Shape будет приводить к ошибке:

// interface Circle {
//   kind: 'circle'
//   radius: number
// }

// interface Square {
//   kind: 'square'
//   sideLength: number
// }

// interface Triangle {
//   kind: 'triangle'
//   sideLength: number
// }

// type Shape = Circle | Square | Triangle

// function getArea(shape: Shape) {
//   switch (shape.kind) {
//     case 'circle':
//       return Math.PI * shape.radius ** 2
//     case 'square':
//       return shape.sideLength ** 2
//     default:
//       const _exhaustiveCheck: never = shape
//       // Type 'Triangle' is not assignable to type 'never'.
//       return _exhaustiveCheck
//   }
// }


// Домашнее задание 
// расселить животных в зоопарке по разным вольерам

// попугай, кенгуру, слон, волк, олень, заяц, рысь, бобер, жираф, еж.
// каждому вальеру (box) указать своё особенное свойство 
// присущее этому животному(метод объекта - функция возращающая строку что это животное делает - летает, ползает...),
// его цвет, вес, количество кормлений в сутки, дату рождения (instanceof), хищник или травоядный
// использовать методы сужения типов для каждого вольера свой

// написать функцию, которая будет вычислять можно ли этому животному жить в общем вольере (если травоядный)
// написать функцию соотвественно которая расселит животных в разные вольеры - в общих всех, кому туда можно и отдельно 
// тех, кто должен жить отдельно, и вернет количество вольеров

// Попытатся максимально использовать 
// typeof
// Проверка на истинность
// Проверка на равенство
// оператора in
// instanceof
// Присвоения
// Анализ потока управления
// предикатов типа
// Исключающие объединения
// Тип never


function App() {
  return (
    <div>

    </div>
  );
}

export default App;
