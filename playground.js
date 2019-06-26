class Person {
  constructor (name, quirkyFact) {
    this.name = name;
    this.quirkyFact = quirkyFact;
  }

  

  bio () {
    return `My name is ${this.name} and here's my quirky fact ${this.quirkyFact}`;
  }
}

class Student extends Person {
  enroll(cohort) {
    this.cohort = cohort;
  }
  bio () {
    return `I'm a student at Lighthouse Labs (aka Labber). ${super.bio()}`
  }
}

class Mentor extends Person {
  goOnShift () {
    this.onShift = true;
  }
  goOffShift () {
    this.onShift = false;
  }
  bio() {
    return `I'm a mentor at Lighthouse Labs. ${super.bio()}`
  }
}

const emma = new Student("Emma", "I think that Owls are really cool");
console.log(emma);
console.log(emma.bio());

const tim = new Mentor("Tim","I really like airplanes")
console.log(tim);
console.log(tim.bio());
