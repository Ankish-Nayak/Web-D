class Person {
    constructor(first, last, age, gender, interests) {
        this.name = {
            first,
            last
        };
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }

    greeting(){
        console.log(`Hi! I'm ${this.name.first}`);
    };
    
    farewell(){
        console.log(`${this.name.first} has left the building. Bye for now!`);
    }
}

let han = new Person('Han', 'Solo', 25, 'male', ['Smuggling'],);
han.greeting();

let leia = new Person('Leia', 'Organa', 19, 'female', ['Goverment']);
leia.farewell();

// inheritance with class extends keyword

// getter and setter methods helps us to get propery name and set property name 
class Teacher extends Person {
    // dont forget to make a super call before using this keyword

    constructor(first, last, age, gender, interests, subject, grade){
        super( first, last, age, gender, interests);
        this._subject = subject;
        this.grade = grade;
    }
    get subject(){
        return this._subject;
    }
    set subject(newSubject){
        this._subject = newSubject;
    }
}
let snape = new Teacher('Severus', 'Snape', 58, 'male', ['Potions'], 'Dark arts', 5);
console.log(snape.greeting());
console.log(snape.farewell());
console.log(snape.age);
console.log(snape.subject);

console.log(snape.subject);
snape.subject  = 'Balloon animals';
console.log(snape.subject);
console.log(snape.age);