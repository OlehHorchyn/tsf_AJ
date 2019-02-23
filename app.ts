// console.log('Hello');

//примітивні типи в TypeScript
// let str: string = 'Oleg';
// let num: number = 54;
// let bool: boolean = false;


//в any ми можемо записувати все що хочемо
// let anny: any = {};
// anny = 'asd';
// anny = 122;

//масиви
// let arr1: number[] = [123, 12, 2];
// let arr2: Array<string> = ['sad','sadas','sss'];
// let arr3: Array<any> = ['sad', 22, 'asddd'];

//тип union це коли ми можемо записати або то або то
// let a: number | string = 'asd';
// let ar: [number|string];
//
// в масив записуємо або то або то це тип tupple
// let tupple: [string?, number?];
// tupple.push('asd');
// tupple.push(1223);
// tupple.push(22123);
//
// tupple.map( el => typeof el); ///це буде повертати типи елементів які зберігаються в масиві


// enum
// enum ROLES{
//     ADMIN_ROLE,
//     USER_ROLE,
//     MANAGER_ROLE
// }
//
// let myRole: ROLES = ROLES.MANAGER_ROLE;
// console.log(myRole); // виведеться порядковий номер

// визначення обєктів
// let obj: {
//     name: string,
//     age: number,
//     gender?: string //може бути а може і не бути
// };
// obj = {name: 'aa', age: 123};
// obj = {name: 'vd', age: 12, gender: 'male'};

// let annyString: any = 'sadsad';
// console.log((<string>annyString).length);//приведення до стрічки
// (annyString as string).length;/// те саме що і рядком вище
// console.log(annyString.length);

// обєкт в обєкті
// let father : {
//     name:string
//     child: {
//         name:string,
//         age: number
//     }
// }


// функції
// function fun(a: number, b: number):number// тип який буде повертати функція
// {
//     return a + b;
// }
// console.log(fun(3, 4));

// let fun: (a: string, b: number) => void;
// fun = function (xx: string, yy: number):void {};


//класи
// class Person {
//     public name: string;
//     public age: number;
//     public status: string;
//
//
//     constructor(name: string, age: number, status: string) {
//         this.name = name;
//         this.age = age;
//         this.status = status;
//     }
// }
// let person = new Person('asdsa', 54, 'asd');

//скорочений вигляд створення класу
// class Person {
//     constructor(
//         public _name: string,
//         readonly _age: number,  ///readonly можна прочитати але не можна змінювати
//         public _status: string
//     ) {
//     }
//
//
//     get name(): string {
//         return this._name;
//     }
//
//     get age(): number {
//         return this._age;
//     }
//
//     get status(): string {
//         return this._status;
//     }
//
//     set name(value: string) {
//         this._name = value;
//     }
//
//     set status(value: string) {
//         this._status = value;
//     }
// }

//статичні класи і методи
//static вказує на те що щось живе в контексті класу а не обєкта
// class ArrayUtil {
//     static className = 'Hello';
//     static printArr(arr){
//         console.log(arr);
//     }
// }
// console.log(ArrayUtil.printArr(['asd', 2343]));
// console.log(ArrayUtil.className);

// наслідування
// class Animal {
//
//     constructor(
//         public name: string,
//         private superpower: boolean
//     ) {
//     }
//
//     speek(){
//         console.log(".....")
//     }
// }
//
// class Dog extends Animal{
//
//     constructor(name: string, superpower: boolean) {
//         super(name, superpower);
//     }
//
//     speek() {
//         console.log("Gava gav");
//     }
// }
//
// let tuzik = new Dog('tuzik', false);
// tuzik.speek();
// console.log(tuzik.name);


// //абстракції
// abstract class Animal {
//
//     constructor(
//         public name: string,
//         public weight: number
//     ) {
//     }
//
//     abstract speek();
//
//     pray(){
//         console.log('i am praying');
//     }
// }
//
// class Cat extends Animal{
//     constructor(name: string, weight: number, countOfLives: number) {
//         super(name, weight);
//     }
//
//     speek() {
//         console.log('Myavaaaaa');
//     }
// }
//
// class Dog extends Animal{
//     constructor(name: string, weight: number) {
//         super(name, weight);
//     }
//
//     speek() {
//         console.log("gav gavaaaa")
//     }
//
// }
//
// let dog = new Dog('tuz',123);
// dog.pray();

//інтерфейси
// interface Alcohol {
//     name: string;
//     degrees: number
// }
// let xx: Alcohol = {
//     name: 'asd',
//     degrees: 123
// };
//
// interface Whiskey extends Alcohol{
//     color: string,
//
//     // drink?: () => void;
// }
//
// let henkey: Whiskey = {
//     name: 'asd',
//     degrees: 123,
//     color: 'brown',
//     // drink: function () {
//     //     console.log('asdasd');
//     // }
// };
//
// interface Water {
//     isWet: boolean;
// }
//
// class JackDaniels implements Whiskey, Water{
//     color: string;
//     degrees: number;
//     name: string;
//     isWet: boolean;
//
//
//     constructor(color: string, degrees: number, name: string, isWet: boolean) {
//         this.color = color;
//         this.degrees = degrees;
//         this.name = name;
//         this.isWet = isWet;
//     }
// }
//
// let jackDaniels = new JackDaniels('asd',123,"asd",true);
// function show(xxx : Water & Whiskey) {
//     console.log(xxx);
// }
//
// console.log(jackDaniels);

//власні типи
// function returner<T>(anny: T): T {
//     return anny;
// }
//
// let str: string = 'sada';
// let reternedStr = returner<string>(str);
// let num: number = 123;
// let number = returner<number>(num);

//namespace
//використовуються тоді коли потрібно декілька функцій з однаковим імям
namespace Universe1 {
    export function show() { //export для того щоб ми могли використлвувати ззовні нашу функцію
        console.log('1');
    }
}
namespace Universe2 {
    export function show() {
        console.log('2');
    }
}

Universe1.show();
Universe2.show();
