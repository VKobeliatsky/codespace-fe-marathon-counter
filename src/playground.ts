// tslint:disable

// basic types

let isDone: boolean = false;

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let color: string = "blue";
color = 'red';

// any 

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

// tuples 

let x: [string, number];

x = ["hello", 10];

// void null undefined

function warnUser(): void {
    alert("This is my warning message");
}

let u: undefined = undefined;
let n: null = null;

// never

function error(message: string): never {
    throw new Error(message);
}

// function fail() {
//     return error("Something failed");
// }

function infiniteLoop(): never {
    while (true) {
    }
}

// function types

function add(x: number, y: number): number {
    return x + y;
}

let myAdd: (a: number, b: number) => number
    = function(x, y) { return x + y; };

// interfaces classes

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

class Student {
    fullName: string;
    protected socialSecurityNumber: number;
    constructor(
        public firstName: string,
        public middleInitial: string,
        public lastName: string
    ) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
        this.socialSecurityNumber = Math.random();
    }
}

let user = new Student("Jane", "M.", "User");

// generic types

const numArr: Array<number> = [1, 2, 3];
const strArr: Array<string> = ['foo', 'bar'];

function identity<T>(arg: T): T {
    return arg;
}

const foo = identity('foo');

// union types

interface A {
    a: number
}

interface B {
    b: number
}

const a: A | B = { a: 1 };

const b: A | B = { b: 2 };

const ab: A | B = { a: 1, b: 2 };

// depth/breadth polymorphism

// discriminated unions

interface Square {
    kind: "square";
    size: number;
}
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
interface Circle {
    kind: "circle";
    radius: number;
}

type Shape = Square | Rectangle | Circle;

function area(s: Shape): number {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * s.radius ** 2;
    }
}

// Maybe example

// intersection types

// index types

function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
    return names.map(n => o[n]);
}
