export default class Planets {
  constructor(age, lifeExpectancy) {
    this.planet = "earth";
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
  }
  checkEarth() {  
    return this.lifeExpectancy
  }

  checkMercury() {
    this.planet = "mercury"
    return parseInt((this.age / .24).toFixed());
  }

  checkVenus() {
    this.planet = "venus"
    return parseInt((this.age / .62).toFixed());
  }

  checkMars() {
    this.planet = "mars"
    return parseInt((this.age / 1.88).toFixed()); 
  }
  checkJupiter() {
    this.planet = "jupiter"
    return parseInt((this.age / 11.86).toFixed()); 
  }

  expectancyMercury() {
    this.checkMercury();
    const mercury = Math.round((this.lifeExpectancy/0.24)- this.age);
    if(mercury > 0) {
      return `You have ${mercury} left to live`;
    } else if(mercury < 0) { 
      return `You have lived ${mercury} past your life expectancy`;
    }
  }
  expectancyVenus() {
    this.checkVenus();
    const venus = Math.round((this.lifeExpectancy/0.62)- this.age );
    if(venus > 0) {
      return `You have ${venus} left to live`;
    } else if(venus < 0) { 
      return `You have lived ${venus} past your life expectancy`;
    }
  }
  expectancyMars() {
    this.checkMars();
    const mars = Math.round((this.lifeExpectancy/1.88)- this.age );
    if(mars > 0) {
      return `You have ${mars} left to live`;
    } else if(mars < 0) { 
      return `You have lived ${mars} past your life expectancy`;
    }
  }
  expectancyJupiter() {
    this.checkJupiter();
    const jupiter = Math.round( (this.lifeExpectancy/11.86) - this.age  );
    if(jupiter > 0) {
      return `You have ${jupiter} left to live`;
    } else if(jupiter < 0) { 
      return `You have lived ${jupiter} past your life expectancy`;
    }
  }

}