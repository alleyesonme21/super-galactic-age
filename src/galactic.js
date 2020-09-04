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
  expectancyVenus() {
    this.checkVenus();
    const venus = Math.round(this.age - (this.lifeExpectancy/0.24));
    if(venus > 0) {
      return `You have ${venus} left to live`;
    } else if(venus < 0) { 
      return `You have lived ${venus} past your life expectancy`;
    }
  }
  expectancyMars() {
    this.checkMars();
    const mars = Math.round(this.age - (this.lifeExpectancy/0.24));
    if(mars > 0) {
      return `You have ${mars} left to live`;
    } else if(mars < 0) { 
      return `You have lived ${mars} past your life expectancy`;
    }
  }
  expectancyJupiter() {
    this.checkJupiter();
    const Jupiter = Math.round(this.age - (this.lifeExpectancy/0.24));
    if(Jupiter > 0) {
      return `You have ${Jupiter} left to live`;
    } else if(Jupiter < 0) { 
      return `You have lived ${Jupiter} past your life expectancy`;
    }
  }

}