export default class Planets {
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
  }
  checkEarth() {   
    return this.age;
  }

  checkMercury() {
    return parseInt((this.age / .24).toFixed());
  }

  checkVenus() {
    return parseInt((this.age / .62).toFixed());
  }

  checkMars() {
    return parseInt((this.age / 1.88).toFixed()); 
  }
  checkJupiter() {
    return parseInt((this.age / 11.86).toFixed()); 
  }

  expectancyEarth() {
    let AgeEarth = this.checkEarth();
    const earth = Math.round(this.lifeExpectancy - AgeEarth);
    if(earth > 0) {
      return `You have ${earth} left to live`;
    } else if(earth < 0) { 
      return `You have lived ${earth} past your life expectancy`;
    }
  }

  expectancyMercury() {
    let AgeMercury = this.checkMercury();
    const mercury = Math.round((this.lifeExpectancy/0.24)- AgeMercury);
    if(mercury > 0) {
      return `You have ${mercury} left to live`;
    } else if(mercury < 0) { 
      return `You have lived ${mercury} past your life expectancy`;
    }
  }
  expectancyVenus() {
    let AgeVenus = this.checkVenus();
    const venus = Math.round((this.lifeExpectancy/0.62)- AgeVenus );
    if(venus > 0) {
      return `You have ${venus} left to live`;
    } else if(venus < 0) { 
      return `You have lived ${venus} past your life expectancy`;
    }
  }
  expectancyMars() {
    let AgeMars = this.checkMars();
    const mars = Math.round((this.lifeExpectancy/1.88)- AgeMars );
    if(mars > 0) {
      return `You have ${mars} left to live`;
    } else if(mars < 0) { 
      return `You have lived ${mars} past your life expectancy`;
    }
  }
  expectancyJupiter() {
   let AgeJupiter = this.checkJupiter();
    const jupiter = Math.round((this.lifeExpectancy/11.86) - AgeJupiter);
    if(jupiter > 0) {
      return `You have ${jupiter} left to live`;
    } else if(jupiter < 0) { 
      return `You have lived ${jupiter} past your life expectancy`;
    }
  }

}