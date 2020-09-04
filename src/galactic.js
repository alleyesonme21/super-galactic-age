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
    

  }
}