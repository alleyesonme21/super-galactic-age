import Planets from './../src/galactic.js'
// import { TestScheduler } from 'jest'

describe('Planets', () => {

  test("It will show  you the user current age in Mercury", () => {
   const mercury = new Planets(38,90)
   mercury.checkMercury()
   expect(mercury.age).toEqual(70)
  })
})