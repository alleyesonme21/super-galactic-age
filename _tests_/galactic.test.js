import Planets from './../src/galactic.js'
describe('Planets', () => {

  let planets;
  beforeEach(() => {
    planets = new Planets(38, 90)
  }) 
  test("It will show  you the user current age in Earth", () => {
    
    expect(planets.checkEarth()).toEqual(90)
  })

  test("It will show  you the user current age in Mercury", () => {
    
    expect(planets.checkMercury()).toEqual(158)
  })

  test("It will show you the users current age in Venus", () => {
   ;
    expect( planets.checkVenus()).toEqual(61)
  })

  test("It will show you the users current age in Mars", () => {
    ;
    expect(planets.checkMars()).toEqual(20)
  
  })
  test("It will show you the users current age in Jupiter", () => {
    ;
    expect(planets.checkJupiter()).toEqual(3)
  })

  test("It will show the users'years left to live on Mercury", () => {
    expect(planets.expectancyMercury()).toBe("You have lived -337 past your life expectancy")
  });

  test("It will show the users'years left to live on Venus", () => {
    expect(planets.expectancyVenus()).toBe("You have lived -107 past your life expectancy")
  });

  test("It will show the users'years left to live on Mars", () => {
    expect(planets.expectancyMars()).toBe("You have lived -10 past your life expectancy")
  });

  test("It will show the users'years left to live on Jupiter", () => {
    expect(planets.expectancyJupiter()).toBe("You have 30 left to live")
  });
  
})