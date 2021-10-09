function Person( first, last, age, gender, interests){ 
    this.name = {
        first,
        last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
};

Person.prototype.Bio = function(){
    let string = '';
    let pronoun = '';
    if(this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M'){
        pronoun = 'He likes ';
    }else if(this.gender === 'female' || this.gender === 'Female' || this.gender === 'F' || this.gender === 'f'){
        pronoun = 'She likes ';
    }else{
        pronoun = 'They like ';
    }

    string += this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. '+ pronoun;
    if(this.interests.length == 1){
        string += interests[0] + '.';
    }else if(this.interests.length === 2) {
        string += interests[0] + ' and ' + interests[1] + '.';
    }else {
        for(let i = 0; i<this.interests.length; ++i){
            if(this.interests.length-1 === i){
                string += ' and ' + this.interests[i] + '.';
            }else {
                string +=  this.interests[i] + ', ';
            }
        }
    }
    alert(string);
}

Person.prototype.greeting = function(){
    alert('Hi! I\'m ' + this.name.first);;
}

// inherited properties from Person 
function Teacher(first, last, age, gender, interests, subject){
    Person.call(this, first, last, age, gender, interests);
    this.subject = subject;
};

Teacher.prototype = Object.create(Person.prototype);

Object.defineProperty(Teacher.prototype, 'constructor', {
    value : Teacher,
    enumerable : false,
    writable : true
});

Teacher.prototype.greeting = function(){
    let prefix = '';
    if(this.gender === 'Male' || this.gender === 'male' || this.gender === 'm' || this.gender === 'M'){
        prefix = 'Mr. ';
    }else if(this.gender === 'Female' || this.gender === 'female' || this.gender === 'f' || this.gender === 'F'){
        prefix = 'Ms. ';
    }else{
        prefix = 'Mx. ';
    }
    alert('Hello. My name is ' + prefix + this.name.last + '.' + ' and I teach ' + this.subject);
}

function Student( first, last, age, gender, interests){
    Person.call(this, first, last, age, gender, interests);
}

Student.prototype.greeting = function(){
    alert('Yo! I\'m ' + this.name.first);
}
