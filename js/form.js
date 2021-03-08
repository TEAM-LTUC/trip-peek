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
  timeLeftFunc();
  renderPlan();
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



function renderPlan()
{
  const divElement = document.getElementById ('renderDiv');

  const h3Element1 = document.createElement ('h3');
  const h3Element2 = document.createElement ('h3');
  const h3Element3 = document.createElement ('h3');
  const h3Element4 = document.createElement ('h3');
  const h3Element5 = document.createElement ('h3');
  const h3Element6 = document.createElement ('h3');
  const h3Element7 = document.createElement ('h3');
  const h3Element8 = document.createElement ('h3');
  const h3Element9 = document.createElement ('h3');


  const imgElement1 = document.createElement ('img');
  const imgElement2 = document.createElement ('img');
  const imgElement3 = document.createElement ('img');
  const imgElement4 = document.createElement ('img');
  const imgElement5 = document.createElement ('img');
  const imgElement6 = document.createElement ('img');
  const imgElement7 = document.createElement ('img');


  h3Element1.textContent= 'Plan A / Day #1 (south) :';
  h3Element2.textContent = ' 1) You will stay in --------------> ' + plan.planDays[0].planHotel.name ;
  // imgElement1.innerHTML = `<img src= "${plan.planDays[0].planHotel.imagePath}"  >`;

  imgElement1.innerHTML = '<img src=\"http://placehold.it/350x350\" >' ;


  h3Element3.textContent = ' 2) You will have Breakfast in ----------->'+ plan.planDays[0].planResturent[0].name ;
  imgElement2.innerHTML ='';

  h3Element4.textContent = ' 3) Your first Activity ----------->'+ plan.planDays[0].planActivities[0].name ;
  imgElement3.innerHTML = '';

  h3Element5.textContent = ' 4) Your second Activity ----------->'+ plan.planDays[0].planActivities[1].name ;
  imgElement4.innerHTML ='';

  h3Element6.textContent = ' 5) You will have Dinner in----------->'+ plan.planDays[0].planResturent[1].name ;
  imgElement5.innerHTML ='';

  h3Element7.textContent = ' 6) Your third Activity ----------->'+ plan.planDays[0].planActivities[2].name ;
  imgElement6.innerHTML ='';

  h3Element8.textContent = ' **** Your have free time : ----------->'+ '(' + timeLeft +')  Hours' ;

  h3Element9.textContent = ' **** Your can do this extra activity : ----------->' ;
  imgElement7.innerHTML ='';


  console.log (plan.planDays[0].planHotel.name);

  divElement.appendChild(h3Element1);
  divElement.appendChild(h3Element2);
  divElement.appendChild(h3Element3);
  divElement.appendChild(h3Element4);
  divElement.appendChild(h3Element5);
  divElement.appendChild(h3Element6);
  divElement.appendChild(h3Element7);
  divElement.appendChild(h3Element8);
  divElement.appendChild(h3Element9);


  divElement.appendChild(imgElement1);
  divElement.appendChild(imgElement2);
  divElement.appendChild(imgElement3);
  divElement.appendChild(imgElement4);
  divElement.appendChild(imgElement5);
  divElement.appendChild(imgElement6);
  divElement.appendChild(imgElement7);



}
