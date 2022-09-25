const username: number = 3;
//const usernames: number | string = 4;

const sum = (a: number, b: string){
    return a + b;
}

sum(3, '6');

/*class Person {
    age: number;
    private lastname: string;
    constructor(age: number, lastname: string) {
        this.age = age;
        this.lastname = lastname;
    }
}*/

class Person {
    constructor(public age: number, private lastname: string) {
    }
}

const victor = new Person(30, 'Asencio');
victor.age;
//victor.lastname