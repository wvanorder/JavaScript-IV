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
        this.toughness = duper.toughness;
    }
    demo(subject) {
        return console.log(`Today we are learning about ${subject}.`);
    }
    grade(student, subject) {
        return console.log(`${student.name} receives a perfect score on ${subject}`);
    }
    gradePaper(student) {
        var tempNum = 0;
        var gradedSubject;
        tempNum = Math.ceil(Math.random() * 100);
        if (tempNum <= (100 / student.favSubjects.length)) {
            gradedSubject = student.favSubjects[0].subject;
            var subjectIndex = 0;
        } else if (tempNum > (100 / student.favSubjects.length) && tempNum <= ((100 / student.favSubjects.length) * 2)) {
            gradedSubject = student.favSubjects[1].subject;
            var subjectIndex = 1;
        } else {
            gradedSubject = student.favSubjects[2].subject;
            var subjectIndex = 2;
        };
        console.log(`Good morning, ${student.name}. I just finished looking over your assignment in ${gradedSubject}.`);
        var gradeOdds = Math.ceil(Math.random() * 100);
        var gradeImpact;
        if (gradeOdds <= (50 - student.smarts)) {
            gradeImpact = (-20 + (student.smarts - this.toughness));
        } else if (gradeOdds > (50 - student.smarts) && gradeOdds <= (75 - student.smarts)) {
            gradeImpact = 0 + (student.smarts - this.toughness);
        } else {
            gradeImpact = 15 + (student.smarts - this.toughness);
        };

        student.favSubjects[subjectIndex].grade += gradeImpact;
        student.grade += (gradeImpact / student.favSubjects.length);
       console.log(`Here you are, ${student.name}. your assignment score changed your class grade to ${student.favSubjects[subjectIndex].grade} and your average grade to ${student.grade}.`);
       return `${student.graduate()}`;
    };
}

class Student extends Person {
    constructor(studentStuff) {
        super(studentStuff);
        this.previousBackground = studentStuff.previousBackground;
        this.className = studentStuff.className;
        this.favSubjects = studentStuff.favSubjects;
        this.grade = studentStuff.grade;
        this.studentInstructor = studentStuff.studentInstructor;
        this.smarts = studentStuff.smarts;
    }

    listsSubjects() {
        
            var last = this.favSubjects.pop();
            return console.log(`${this.name}'s favorite subjects are ${this.favSubjects.join(', ')} and ${last}.`);
        // console.log(`${this.name}'s favorite subjects are`);
        // this.favSubjects.forEach((subjectListed) => {
        //     console.log(subjectListed);
        // });
    }

    PRAssignment(subject) {
    return console.log(`${this.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(subject) {
        return console.log(`${this.name} has begun sprint challenge on ${subject}.`);
    }
    graduate() {
        if (this.grade > 70) {
            return console.log(`${this.studentInstructor.name} is the best teacher ever! time to go off into the real world and make a difference!`);
        } else {
            return console.log(`${this.studentInstructor.name} sucks. Time to drop out and be a pro twitch streamer.`);
        }
    }
}

class ProjectManager extends Instructor{
    constructor(topDog) {
        super(topDog);
        this.gradClassName = topDog.gradClassName;
        this.favInstructor = topDog.favInstructor;
    }
    standUp(channel) {
        return console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject) {
        return console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
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





const chris = new Instructor ({
name: 'Chris',
age: 34,
location: 'Nobody knows',
specialty: 'How to make French Toast',
favLanguage: 'SQL',
catchphrase: 'Show Me Ya Moves!',
toughness: 1.8,
});

const georgeMichael = new Instructor ({
    name: 'George Michael Bluth',
    age: 34,
    location: 'The Banana Stand',
    specialty: 'double-banana',
    favLanguage: 'Java',
    catchphrase: 'Maybe I do',
    toughness: 4,
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
    toughness: 2.0,
});

const hagrid = new ProjectManager({
name: 'Hagrid',
age: 97,
location: 'Hogwarts retirement home',
specialty: 'Being freaking tall!',
favLanguage: 'Ruby',
catchPhrase: `You're a wizard, Harry!`,
gradClassName: 'Fantastic Beasts and Where To Find Them',
favInstructor: chris,
toughness: 3,
});




const dan = new Student ({
    name: 'Dan',
    age: 28,
    location: 'Anchorage',
    previousBackground: 'lawyer',
    className: 'WEB20',
    favSubjects: [{'subject': 'Math', 'grade': 40},{'subject': 'English', 'grade': 92}, {'subject': 'Programming', 'grade': 64}],
    studentInstructor: chris,
    grade: 75,
    smarts: 5.1,
});

const brooke = new Student ({
    name: 'Brooke',
    age: 27,
    location: 'Juneau',
    previousBackground: 'Banker',
    className: 'WEB20',
    favSubjects: [{'subject': 'History', 'grade': 70},{'subject': 'Salsa Dancing', 'grade': 86}, {'subject': 'Engineering 204', 'grade': 64}],
    grade: 74,
    studentInstructor: georgeMichael,
    smarts: 9.6,
});

chris.gradePaper(brooke);




/* [{subject: 'Math', grade: 80},{subject: 'English', grade: 92}, {subject: 'Programming', grade: 64}]*/
/*
class Instructor extends Person{
    constructor(duper) {
        super(duper);
        this.specialty = duper.specialty;
        this.favLanguage = duper.favLanguage;
        this.catchPhrase = duper.catchPhrase;
        this.toughness = duper.toughness;
    }
    demo(subject) {
        return console.log(`Today we are learning about ${subject}.`);
    }
    grade(student, subject) {
        return console.log(`${student.name} receives a perfect score on ${subject}`);
    }
    gradePaper(student) {
        var tempNum = 0;
        var gradedSubject;
        tempNum = Math.ceil(Math.random() * 100);
        if (tempNum <= (100 / student.favSubjects.length)) {
            gradedSubject = student.favSubjects[0].subject;
            var subjectIndex = 0;
        } else if (tempNum > (100 / student.favSubjects.length) && tempNum <= ((100 / student.favSubjects.length) * 2)) {
            gradedSubject = student.favSubjects[1].subject;
            var subjectIndex = 1;
        } else {
            gradedSubject = student.favSubjects[2].subject;
            var subjectIndex = 2;
        };
        console.log(`Good morning, ${student.name}. I just finished looking over your assignment in ${gradedSubject}.`);
        var gradeOdds = Math.ceil(Math.random() * 100);
        var gradeImpact;
        if (gradeOdds <= (50 - student.smarts)) {
            gradeImpact = (-20 + (student.smarts - this.toughness));
        } else if (gradeOdds > (50 - student.smarts) && gradeOdds <= (75 - student.smarts)) {
            gradeImpact = 0 + (student.smarts - this.toughness);
        } else {
            gradeImpact = 15 + (student.smarts - this.toughness);
        };

        student.favSubjects[subjectIndex].grade += gradeImpact;
        student.grade;
       console.log(`Here you are, ${student.name}. your assignment score changed your class grade to ${student.favSubjects[subjectIndex].grade} and your average grade to ${student.grade}.`);
       return `${student.graduate()}`;
    };
}

class Student extends Person {
    constructor(studentStuff) {
        super(studentStuff);
        this.previousBackground = studentStuff.previousBackground;
        this.className = studentStuff.className;
        this.favSubjects = studentStuff.favSubjects;
        this.avgGrade = student.newAverage;
        this.studentInstructor = studentStuff.studentInstructor;
        this.smarts = studentStuff.smarts;
    }
        changeAverage() {
        student.newAverage = studentStuff.favSubjects.reduce((total, theGrade) => { return (total + theGrade.grade);}, 0) / studentStuff.favSubjects.length;
    }


    listsSubjects() {
        
            var last = this.favSubjects.pop();
            return console.log(`${this.name}'s favorite subjects are ${this.favSubjects.join(', ')} and ${last}.`);
        // console.log(`${this.name}'s favorite subjects are`);
        // this.favSubjects.forEach((subjectListed) => {
        //     console.log(subjectListed);
        // });
    }

    PRAssignment(subject) {
    return console.log(`${this.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(subject) {
        return console.log(`${this.name} has begun sprint challenge on ${subject}.`);
    }
    graduate() {
        if (this.grade > 70) {
            return console.log(`${this.studentInstructor.name} is the best teacher ever! time to go off into the real world and make a difference!`);
        } else {
            return console.log(`${this.studentInstructor.name} sucks. Time to drop out and be a pro twitch streamer.`);
        }
    }
}*/