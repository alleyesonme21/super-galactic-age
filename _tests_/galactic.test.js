import Planets from './../src/galactic.js'
// import { TestScheduler } from 'jest'

describe('Planets', () => {
  
  let planets;
  beforeEach(() => {
    planets = new Planets(38, 90)
  }) 

  test("It will show  you the user current age in Mercury", () => {
   
   planets.checkMercury()
   expect(planets.age).toEqual(158)
  })

  test("It will show you the users current age in Venus", () => {
    planets.checkVenus();
    expect(planets.age).toEqual(61)
  })

  test("It will show you the users current age in Mars", () => {
    planets.checkMars();
    expect(planets.age).toEqual(20)
  
  })
  test("It will show you the users current age in Jupiter", () => {
    planets.checkJupiter();
    expect(planets.age).toEqual(3)
  })

  test("It will show the users'years left to live on Mercury", () => {
    expect(planets.expectancyMercury()).toBe("You have lived -217 past your life expectancy")
  });

  test("It will show the users'years left to live on Venus", () => {
    expect(planets.expectancyVenus()).toBe("You have lived -314 past your life expectancy")
  });

  test("It will show the users'years left to live on Mars", () => {
    expect(planets.expectancyMars()).toBe("You have lived -355 past your life expectancy")
  });

  test("It will show the users'years left to live on Jupiter", () => {
    expect(planets.expectancyJupiter()).toBe("")
  });
  
})