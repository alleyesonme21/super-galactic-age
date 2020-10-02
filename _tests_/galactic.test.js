import Planets from './../src/galactic.js'
describe('Planets', () => {

  let planets;
  
  test("It will show  you the user current age in Earth", () => {
    planets = new Planets(38,90);
    expect(planets.checkEarth()).toEqual(90)
  })

  test("It will show  you the user current age in Mercury", () => {
    planets = new Planets(40,90);
    expect(planets.checkMercury()).toEqual(158)
  })

  test("It will show you the users current age in Venus", () => {
  ;planets = new Planets(2,90);
    expect( planets.checkVenus()).toEqual(61)
  })

  test("It will show you the users current age in Mars", () => {
    planets = new Planets(80,90);
    expect(planets.checkMars()).toEqual(21)
  
  })
  test("It will show you the users current age in Jupiter", () => {
    planets = new Planets(100,90);
    expect(planets.checkJupiter()).toEqual(3)
  });
  test("It will show the users'years left to live on Earth", () => {
    planets = new Planets(120,90);
    expect(planets.expectancyEarth()).toBe("You have 337 left to live")
  });


test("It will show the users'years left to live on Mercury", () => {
      planets = new Planets(75,90);
      expect(planets.expectancyMercury()).toBe("You have 337 left to live")
  });

  test("It will show the users'years left to live on Venus", () => {
      planets = new Planets(25,90);
      expect(planets.expectancyVenus()).toBe("You have 107 left to live")
  });

  test("It will show the users'years left to live on Mars", () => {
    planets = new Planets(80,90);
    expect(planets.expectancyMars()).toBe("You have 10 left to live")
  });

  test("It will show the users'years left to live on Jupiter", () => {
    planets = new Planets(90,90);
    expect(planets.expectancyJupiter()).toBe("You have lived -30 past your life expectancy")
  });
  
})