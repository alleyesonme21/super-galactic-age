import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
 import './css/styles.css';
import Planets from './../src/galactic.js';

// not finished yet
$(document).ready(function() {
  $('#formOne').submit(function(event) {
    event.preventDefault();
    const age = $('#age').val();
   const expectancyAge  = $("age-expectancy")
   const inputRadio = $("input:radio[name=expectancy]:checked").val();
  let planets = new Planets(age, expectancyAge, inputRadio)
  let result = planets.expectancyMercury().age;
  console.log(result);

  });
}); 

