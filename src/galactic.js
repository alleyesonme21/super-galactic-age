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

  expectancyMercury() {
    this.checkMercury();
    const mercury = Math.round(this.age - (this.lifeExpectancy/0.24));
    if(mercury > 0) {
      return `You have ${mercury} left to live`;
    } else if(mercury < 0) { 
      return `You have lived ${mercury} past your life expectancy`;
    }
  }
}