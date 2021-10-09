const input = document.querySelector('input');
const btn = document.querySelector('button');
const para = document.querySelector('p');

btn.onclick = function(){
  const code = input.value;
  para.textContent = eval(code);
}

function Person(first, last, age, gender, interests){
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
};

Person.prototype.bio = function(){
  let string = this.name.first + ' ' + this.name.last + ' ' + this.age + ' years old.';
  
  let pronoun;

  if(this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M'){
    pronoun = 'He likes ';
  }else if(this.gender === 'Female' || this.gender === 'female' || this.gender === 'F' || this.gender === 'f'){
    pronoun = 'She likes ';
  }else{
    pronoun = 'They like ';
  }

  string += pronoun;
  if(this.interests.length === 1){
    string += this.interests[0] + '.';
  }else if(this.interests.length === 2){
    string += this.interests[0] + ' and ' + this.interests[1] + '.';
  }else{
    for(let i = 0; i<interests.length ; ++i){
      if(i === this.interests.length-1){
        string += 'and ' + this.interests[i] + '.';
      }else{
        string += this.interests[i] + ', ';
      }
    }
  }
  alert(string);
};

Person.prototype.greeting = function() {
  alert('Hi I\'m ' + this.name.first + '.');
};

Person.prototype.farewell = function(){
  alert(this.name.first + ' has left the building. Bye for now!');
}
 
let person1 = new Person('Tammi', 'Smith', 17, 'female', ['music', 'skiing', 'kickboxing']);


function Teacher( first, last, age, gender, interests, subject) {
  Person.call( this, first, last, age, gender, interests);
  this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);

Object.defineProperty(Teacher.prototype, 'constructor', {
  value : Teacher,
  enumerable: false,
  writable: true
});

Teacher.prototype.greeting = function(){
  let prefix;
  if(this.gender === 'Male' || this.gender === 'male' || this.gender === 'm' || this.gender === 'M'){
    prefix = 'Mr. ';
  }else if(this.gender === 'Female' || this.gender === 'female' || this.gender === 'f' || this.gender === 'F'){
    prefix = 'Ms. ';
  }else{
    prefix = 'Mx. ';
  }
  alert('Hello. My name is '+ prefix + ' ' + this.name.last + ', and I teach' + this.subject + '.');
};

let teacher1 = new Teacher('Dave', 'Griffiths', 31, 'male', ['football', 'cookery'], 'mathematics');


// function Person(first, last, age, gender, interests){
//     this.name = {
//         first: first,
//         last: last
//     };
//     this.age = age;
//     this.gender = gender;
//     this.interests = interests;
//     this.bio = function() {
//         alert(this.name.first+" "+this.name+' is '+this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
//     };
//     this.greeting = function() {
//         alert('Hi! I\'m '+this.name.first+'.');
//     }
// }  

// function createNewPerson(name){
//     const obj = {};
//     obj.name = name;
//     obj.greeting = function(){
//         alert('Hi! I\'m '+obj.name+'.');
//     };
//     return obj;
// } 

// function Person(name){
//     this.name = name;
//     this.greeting = function(){
//         alert('Hi! I\'m '+this.name+'.');
//     };
// }
 
// const person = {
//     name: {
//         first: 'Bob',
//         second: 'Smith'
//     },
//     age: 32,
//     gender: 'male',
//     interests: ['music', 'skiing'],
//     bio: function() {
//       alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
//     },
//     greeting: function() {
//       alert('Hi! I\'m ' + this.name[0] + '.');
//     }
//   };
// let myDataName = 'height';
// let myDataValue = '1.75m';
// person[myDataName] = myDataValue;

// const person1 = {
//     name: 'Chris',
//     greeting: function(){
//         alert('Hi! I\'m '+this.name+'.');
//     }
// };

// const person2 = {
//     name: 'Deepti',
//     greeting: function(){
//         alert('Hi! I\'m '+this.name+'.');
//     }
// }