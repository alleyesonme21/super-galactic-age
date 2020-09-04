export default class Planets {
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
  }
  checkMercury() {
    this.age = parseInt((this.age /= .24).toFixed());

  }
  checkVenus() {
    this.age = parseInt((this.age /= .62).toFixed());

  }
  checkMars() {
    this.age = parseInt((this.age /= 1.88).toFixed());
    
  }
  checkJupiter() {
    this.age = parseInt((this.age /= 11.86).toFixed());
    
  }
}