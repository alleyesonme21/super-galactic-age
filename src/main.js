import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Planets from './../src/galactic.js';

// not finished yet
$(document).ready(function() {
  $('#formOne').submit(function(event) {
    event.preventDefault();
    const age = $("#age").val();
    const expectancyAge  = $("#age-expectancy").val();
    const inputRadio = $("input:radio[name=expectancy]:checked").val();
  let planets = new Planets(age, expectancyAge);
  if (planets == inputRadio && inputRadio == "earth") {
    $("#life").append(planets.expectancyEarth());
  } else if(planets == inputRadio && inputRadio == "mercury") {
    $("#life").append(planets.expectancyMercury());
  }
  console.log(planets);
  $("#output").show();

  });
}); 

