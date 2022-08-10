// import React from 'react';

// Простая фабрика - довольно простой 
// и распространенный паттерн проектирования
// Мы сделаем типизированный компонент фабрику.

// Абстрактная задача
// Создать компонент(далее "компонент-фабрика"), 
// который, в зависимости от принимаемых им параметров, 
// будет возвращать подходящий к ним компонент(далее "подкомпонент"). 

// При этом учтем то, что:
// 1) Компонент не должен принимать таких параметров, при которых он ломается
// 2) Должна быть возможность расширять компонент, а именно добавлять новый подкомпонент
// 3) Он должен выполнять только те вычисления, 
// которые соответвствуют возращаемому подкомпоненту
// 4) При использовании компонента должно быть понятно 
// какие параметры он принимает для каждого подкомпонента и что возращает в ответ





// Реальная задача
// Создать компонент, который, по переданным ему параметрам, рисует подходящую фигуру.

// Моделирование
// Смоделируем фигуры и параметры, необходимые для их отрисовки:

// 1) Прямоугольник - высота и ширина
// 2) Круг - радиус
// 3) Треугольник - три стороны

// У каждой фигуры уникальные параметры, но в добавок 
// они могут иметь общий параметр — имя класса (css).


// Компонент-фабрика, которую мы создадим, 
// сможет принимать параметры всех фигур, но, 
// чтобы он вернул нам подходящую фигуру, 
// мы будем указывать в параметрах тип фигуры.

// Как это выглядит на Javascript
// Создадим абстрактные подкомпоненты (фигуры), 
// т. к. нас в текущем контексте не интересует их реализация.

// const Rectangle = ({className, width, height}) => null;
// const Circle = ({className, radius}) => null;
// const Triangle = ({className, sideA, sideB, sideC}) => null;
// // // // Переходим к компоненту фабрике.

// const Figure = ({
//   className,
//   type,
//   width,
//   height,
//   radius,
//   sideA,
//   sideB,
//   sideC,
// }) => {
//   switch (type) {
//     case "rectangle":
//       return height && width ? (
//         <Rectangle className={className} height={height} width={width} />
//       ) : null;

//     case "circle":
//       return radius ? <Circle className={className} radius={radius} /> : null;

//     case "triangle":
//       return sideA && sideB && sideC ? (
//         <Triangle
//           className={className}
//           sideA={sideA}
//           sideB={sideB}
//           sideC={sideC}
//         />
//       ) : null;

//     default:
//       return null;
//   }
// };

// Две проблемы:
// 1) Разработчик, используя наш компонент-фабрику, 
// не знает какие параметры ему передать, чтобы получить нужную ему фигуру. 
// Ему придется лазить в нашем коде, чтобы понять что к чему.

// 2) Если передать все параметры одновременно, то фабрика отрисует фигуру, 
// переданную в type, используя подходящие ему параметры, 
// а остальные параметры будут проигнорированы. 
// Это прибавит неясности в логике нашего компонента.



// Как же это выглядит на typescript
// Для начала определим параметры, которые будут иметь все фигуры. 
// Это имя класса.

// interface IBaseFigure {
//   className?: string;
// }

// Создадим те же абстрактные подкомпоненты, 
// что и в варианте с javascript, но теперь с типизацией.

// interface ICircle extends IBaseFigure {
//   radius: number;
// }
// const Circle: React.VFC<ICircle> = ({className, radius}) => null;

// interface IRectangle extends IBaseFigure {
//   width: number;
//   height: number;
// }
// const Rectangle: React.VFC<IRectangle> = ({className, width, height}) => null;

// interface ITriangle extends IBaseFigure {
//   sideA: number;
//   sideB: number;
//   sideC: number;
// }
// const Triangle: React.VFC<ITriangle> = ({className, sideA, sideB, sideC}) => null;


// Мы создали интерфейс BaseFigure, а потом расширяем его 
// интерфейсами наших фигур с помощью "extend". 
// Если мы определим новый параметр в BaseFigure, 
// то он появится во всех интерфейсах расширяюших его.

// В интерфейсах мы также указали какого типа должны быть параметры, 
// className должен быть строкой и является необязательным, 
// а остальные параметры обязательны и должны быть числом.

// Сами подкомпоненты мы протипизировали с помощью встроенного в React типа VFC, 
// который означает "Функциональный компонент без children".


// Протипизируем также нашу фабрику.

// interface IFigureRectangle extends IRectangle {
//   type: "rectangle";
// }

// interface IFigureCircle extends ICircle {
//   type: "circle";
// }

// interface IFigureTriangle extends ITriangle {
//   type: "triangle";
// }

// type IFigure = IFigureRectangle | IFigureCircle | IFigureTriangle;

// const Figure: React.VFC<IFigure> = (props) => {
//   switch (props.type) {
//     case "rectangle": {
//       return <Rectangle {...props} />;
//     }
//     case "circle": {
//       return <Circle {...props} />;
//     }
//     case "triangle": {
//       return <Triangle {...props} />;
//     }

//     default:
//       return null;
//   }
// };


// Сначала расширяем интерфейсы фигур, 
// добавляя к ним свойство type с определенным значением. 
// Если type задать такое значение, то остальные 
// параметры компонента определятся по этому интерфейсу.

// Мы объединяем интерфейсы и получаем единый интерфейс, 
// где в случае, если параметр type равно:

// 1) rectangle, остальныe параметры будут из IRectangle
// 2) circle, остальные параметры будут из ICircle
// 3) triangle, остальные параметры будут из ITriangle

// Теперь, благодаря типизации, компонент-фабрика решила проблемы, 
// которые были в варианте с использованием js. 
// Также у нас отпала необходимость проверять приходят ли все параметры.


// Работающий пример
// https://codesandbox.io/s/react-ts-simple-factory-pattern-fxxxu?file=/src/App.tsx














// React TypeScript: лучшие практики


// Интерфейсы
// Одним из множества преимуществ TypeScript является доступ к конструкциям, 
// которые позволяют определять интерфейс компонентов и других сложных объектов, 
// используемых с ними, таких как форма объекта Props (количество свойств и их типов).

// import React from 'react';

// interface IButtonProps {
//     /** Текст внутри кнопки */
//     text: string,
//     /** Тип кнопки, извлеченный из перечисления ButtonTypes */
//     type: "submit" | "reset" | "button" | undefined,
//     /** Функция, выполняемая после нажатия кнопки */
//     action: () => void
// }

// const ExtendedButton: React.FC<IButtonProps> = ({text, type, action}) => null
// В приведенный выше код необходимо добавить 3 свойства:

// text: представлен String.
// type: представлен опцией ButtonType.
// action: простая функция.



// Обратите внимание, что мы «расширили» тип FC (функциональный компонент) 
// с помощью собственного пользовательского интерфейса. 
// Благодаря этому функция получает все общие определения функциональных компонентов, 
// такие как prop и тип return, которые должны быть присвоены JSX.Element.

// Если вы проигнорируете одно из них или отправите несовместимое значение, 
// компилятор TypeScript и IDE уведомят вас об этом. 

// Лучший способ определить элемент ExtendedButton — 
// расширить нативный тип HTML-элемента button следующим образом:

// import React, { ButtonHTMLAttributes } from 'react';

// interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//     /** Текст внутри кнопки */
//     text: string,
//     * Тип кнопки, извлеченный из перечисления ButtonTypes 
//     type: "submit" | "reset" | "button" | undefined,
//     /** Функция, выполняемая после нажатия кнопки */
//     action: () => void
// }
// const ExtendedButton: React.FC<IButtonProps> = ({text, type, action} : IButtonProps) => null
















// Перечисления (Enums)
// Как и в случае с интерфейсами, перечисления позволяют 
// определять набор связанных констант как часть единой сущности.

// import React, { useState } from 'react';

// /** Набор сгруппированных констант */
// enum SelectableButtonTypes {
//     Important = "important",
//     Optional = "optional",
//     Irrelevant = "irrelevant"
// }

// interface IButtonProps {
//     text: string,
//     /** Тип кнопки, извлеченный из перечисления SelectableButtonTypes */
//     type: SelectableButtonTypes,
//     action: (selected: boolean) => void
// }

// const ExtendedSelectableButton = ({text, type, action}: IButtonProps) => {
//     let [selected, setSelected]  = useState(false)

//     return (<button className={"extendedSelectableButton " + type + (selected? " selected" : "")} onClick={ _ => {
//         setSelected(!selected)
//         action(selected)
//     }}>{text}</button>)
// }

/** Экспорт компонента и перечисления */
// export { ExtendedSelectableButton, SelectableButtonTypes}
// Импорт и использование перечислений:



// import {ExtendedSelectableButton, SelectableButtonTypes} from '...'

// const App = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <ExtendedSelectableButton type={SelectableButtonTypes.Important} text="Select me!!" action={ (selected) => {
//           console.log(selected) 
//         }} />       
        
//       </header>
//     </div>
//   );
// }

// // export default App;
// Обратите внимание, что в отличие от интерфейсов или типов, п
// еречисления переводятся на простой JavaScript. Например:

// enum SelectableButtonTypes {
//   Important = "important",
//   Optional = "optional",
//   Irrelevant = "irrelevant"
// }
// Код выше преобразуется в следующее:

// var SelectableButtonTypes;
// (function (SelectableButtonTypes) {
//   SelectableButtonTypes["Important"] = "important";

//   SelectableButtonTypes["Optional"] = "optional";

//   SelectableButtonTypes["Irrelevant"] = "irrelevant";
// })(SelectableButtonTypes || (SelectableButtonTypes = {}));


















// Интерфейсы и псевдонимы типов
// Многие новички в TypeScript часто сталкиваются с такой проблемой, 
// как использование интерфейсов или псевдонимов типов для различных частей кода. 
// Официальная документация не дает точного ответа по этой теме.

// Несмотря на то, что теоретически эти сущности различны, на практике они очень схожи:





// 1. Могут расширяться.
// //расширенные интерфейсы
// interface PartialPointX { x: number; }
// interface Point extends PartialPointX { y: number; }

// //расширенные типы
// type PartialPointX = { x: number; };
// type Point = PartialPointX & { y: number; };

// //интерфейс расширяет тип 
// type PartialPointX = { x: number; };
// interface Point extends PartialPointX { y: number; }

// //псевдоним типов расширяет интерфейсы
// interface PartialPointX { x: number; }
// type Point = PartialPointX & { y: number; };





// 2. Могут использоваться для определения формы объектов.

// //определение интерфейса для объектов
// interface Point {
//   x: number;
//   y: number;
// }
// //использование типов
// type Point2 = {
//   x: number;
//   y: number;
// };







// 3. Могут быть реализованы одинаково.

//реализация интерфейса
// class SomePoint implements Point {
//   x: 1;
//   y: 2;
// }

// //реализация псевдонима типа
// class SomePoint2 implements Point2 {
//   x: 1;
//   y: 2;
// }

// type PartialPoint = { x: number; } | { y: number; };

// // Единственное, что нельзя выполнить: реализовать тип объединения.
// class SomePartialPoint implements PartialPoint {
//   x: 1;
//   y: 2;
// }






// Единственная дополнительная функция интерфейсов 
// — это «объединение описаний», т. е. вы можете 
// определить один и тот же интерфейс несколько раз, 
// и с каждым определением свойства объединяются:

// interface Point { x: number; } //описание #1
// interface Point { y: number; } //описание #2

// // Оба описания становятся:
// interface Point { x: number; y: number; }
// const point: Point = { x: 1, y: 2 };

















// import React,{useState} from 'react';
// Хуки
// Добавление проверки типа в хуки
// Такие хуки, как useState, получают параметр, 
// возвращают состояние и функцию для его установки.

// Благодаря проверке типа в TypeScript можно реализовать тип (или интерфейс) 
// начального значения состояния следующим образом:
// type IUser = number;
// const [user, setUser] = useState<IUser | null>(null);
// setUser(56);
// Нулевые значения для хуков
// Если начальное значение для хука потенциально может быть null, 
// то в приведенном выше примере возникнет ошибка. 
// В этих случаях TypeScript также позволяет установить дополнительный тип для защиты со всех сторон.

// const [user, setUser] = React.useState<IUser | null>(null);

// позже...
// setUser(newUser);
// Таким образом, вы не только сохраняете проверки типов, 
// но и учитываете те сценарии, в которых начальное значение может быть равно null.






// Общие компоненты
// Подобно общим функциям и интерфейсам в TypeScript, 
// можно определять и общие компоненты, чтобы использовать 
// их повторно для разных типов данных. То же самое можно сделать с props и состояниями.
// import React,{useState} from 'react';

// interface Props<Todo> {
//   items: Todo[];
//   renderItem: (item: Todo) => React.ReactNode;
// }


// function List<Todo>(props: Props<Todo>) {
//   const { items, renderItem } = props;
//   const [state, setState] = useState<Todo[]>([]); 
  
//   return (
//     <div>
//       {items.map(renderItem)}
//     </div>
//   );
// }

// // Затем компонент можно использовать либо с помощью вывода типа, 
// // либо напрямую указав типы данных.

// function Render() {
//   return (
//     <List
//       items={["a", "5"]} // выведенный тип 'string'
//       renderItem={
// 	      	item => (
// 		        <li key={item}>
// 		          {item.toUpperCase()}
// 		        </li>
// 	      	)
//   		}
//     />
//   )
// }



// Объявленные напрямую типы:
// function Render() {
//   return (
//     <List<number>
//       items={[1,2,3,4]} 
//       renderItem={item => <li key={item}>{item.toFixed(1)}</li>}
//     />
//   )
// }









// Типы событий
// React предоставляет собственный набор событий, 
// поэтому использовать HTML-события напрямую не получится. 
// При этом у вас есть доступ ко всем необходимым UI-событиям. 
// Они имеют те же имена, поэтому убедитесь, что ссылаетесь на них напрямую, 
// как React.MouseEvent, или просто импортируйте их из React:

// import { Component, MouseEvent, useState } from 'react';
// Преимущество TypeScript в данном случае заключается в возможности использовать Generics, 
// чтобы ограничить элементы, на которых может использоваться обработчик событий.

// Например, следующий код не будет работать:
// function eventHandler(event: MouseEvent<HTMLAnchorElement>) {
//     console.log("TEST!")
// }

// И вы получите подобное сообщение об ошибке

// Однако вы можете использовать объединения, 
// чтобы разрешить повторное использование одного обработчика несколькими компонентами:

// function eventHandler(event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) {
//     console.log("TEST!")
// }

// const ExtendedSelectableButton = ({text, type, action}: any) => {
//     let [selected, setSelected]  = useState(false)
//     return (
//     	<button 
//     		className={"extendedSelectableButton " + type + (selected? " selected" : "")} 
//     		onClick={eventHandler}
//     		>
//     		{text}
//     	</button>

//     	)
// }



















































function App() {
  return (
    <div>
    </div>
  );
}

export default App;
