// CODE here for your Lambda Classes

class Person{
    constructor(personAttributes) {
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
    }
    speak() {
        return console.log(`Hello, my name is ${this.name} and I am from ${this.location}.`);
    }
}

class Instructor extends Person{
    constructor(duper) {
        super(duper);
        this.specialty = duper.specialty;
        this.favLanguage = duper.favLanguage;
        this.catchPhrase = duper.catchPhrase;
    }
    demo(subject) {
        return console.log(`Today we are learning about ${subject}.`);
    }
    grade(student, subject) {
        return console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(studentStuff) {
        super(studentStuff);
        this.previousBackground = studentStuff.previousBackground;
        this.className = studentStuff.className;
        this.favSubjects = studentStuff.favSubjects;
    }
    listsSubjects() {
        this.favSubjects.forEach((subjectListed) => {
            console.log(subjectListed);
        });
    }

    PRAssignment(subject) {
    return console.log(`${this.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(subject) {
        return console.log(`${this.name} has begun sprint challenge on ${subject}.`);
    }
}

class ProjectManager extends Instructor{
    constructor(topDog) {
        super(topDog);
        this.gradClassName = topDog.gradClassName;
        this.favInstructor = topDog.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
    }
}

const logan = new Person({
    name: 'logan',
    age: 29,
    location: 'Houston',
});

const leah = new Person({
    name: 'Leah',
    age: 23,
    location: 'Alaska',
});

const dan = new Student ({
    name: 'Dan',
    age: 28,
    location: 'Anchorage',
    previousBackground: 'lawyer',
    className: 'WEB20',
    favSubjects: ['debate', 'math', 'physics']
});

const brooke = new Student ({
    name: 'Brooke',
    age: 27,
    location: 'Juneau',
    previousBackground: 'Banker',
    className: 'WEB20',
    favSubjects: ['guitar', 'javascript', 'python', 'salsa dancing']
});

const chris = new Instructor ({
name: 'Chris',
age: 34,
location: 'Nobody knows',
specialty: 'How to make French Toast',
favLanguage: 'SQL',
catchphrase: 'Show Me Ya Moves!',
});

const georgeMichael = new Instructor ({
    name: 'George Michael Bluth',
    age: 34,
    location: 'The Banana Stand',
    specialty: 'double-banana',
    favLanguage: 'Java',
    catchphrase: 'Maybe I do',
});
    

const larry = new ProjectManager({
    name: 'Larry',
    age: 97,
    location: 'a retirement home',
    specialty: 'tapioca',
    favLanguage: 'Javascript',
    catchPhrase: 'Not today!',
    gradClassName: 'Staying Alive 101',
    favInstructor: georgeMichael,
});

const hagrid = new ProjectManager({
name: 'Hagrid',
age: 97,Hogwartsa retirement home',
specialty: 'Being freaking tall!',
favLanguage: 'Ruby',
catchPhrase: `You're a wizard, Harry!`,
gradClassName: 'Fantastic Beasts and Where To Find Them',
favInstructor: chris,
});