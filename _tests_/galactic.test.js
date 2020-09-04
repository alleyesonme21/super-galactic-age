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
    expect(planets.age).toEqual(40)
  })
})