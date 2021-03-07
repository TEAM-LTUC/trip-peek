'use strict';
// add one plan
const checkboxValues = [];

const plan = new Plan( 'planA' );
// add one day to plan
//const day = new PlanDay ('petraDay');
function handleSubmit( event ) {
  // TODO: Prevent the page from reloading
  event.preventDefault ();
  // Do all the things ...
  addSelectedDataToPlan( event );
  plan.saveToLocalStorage();
  pickHotel();
  pickResturent();
  pickActivities();
}
// TODO: get data from form , add the form data to plan object
function addSelectedDataToPlan( event ) {
  // TODO: get time and budget by id
  const time = event.target.time.value;
  const budget = event.target.budget.value;
  console.log( time );
  const checkbox1Element = document.getElementById( 'nature' );
  const checkbox2Element = document.getElementById( 'historical' );
  const checkbox3Element = document.getElementById( 'urban' );
  const checkbox4Element = document.getElementById( 'handCraft' );
  const checkbox = [checkbox1Element, checkbox2Element,checkbox3Element ,checkbox4Element];

  // console.log(checkbox1Element);

  for ( let i in checkbox ){ // this count the checkbox array element ,false will be return when its done
    if ( checkbox[i].checked ){

      checkboxValues.push( checkbox[i].value );
    }
  }
  console.log( checkboxValues );

  // TODO: get checkboxes by ID
  // make arr of checkbox value : T/F

  // make new arr and push the 3 selected checkboxes to it : nature, historical, urban, handCraft
  // for loop
  // call getFormData and add form values to 'plan' object .
  plan.getFormData ( time,budget ,checkboxValues );

  // write a code to move you to `plan.html` page
}
// add event Listner on form submit;
const formSubmit = document.getElementById( 'tripForm' );
formSubmit.addEventListener( 'submit',handleSubmit );
// substitute checklist with radio-buttons