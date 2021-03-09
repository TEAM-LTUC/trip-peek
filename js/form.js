'use strict';
// add one plan
let checkboxValues = [];

const plan = new Plan( 'planA' );
// add one day to plan
//const day = new PlanDay ('petraDay');
function handleSubmit( event ) {
  // TODO: Prevent the page from reloading
  event.preventDefault ();
  // Do all the things ...

  addSelectedDataToPlan( event );
  
  pickHotel();
  pickResturent();
  pickActivities();
  // timeLeftFunc();
  plan.saveToLocalStorage();
  window.open('./tree.html','_blank');

}
// TODO: get data from form , add the form data to plan object
function addSelectedDataToPlan( event ) {
  // TODO: get time and budget by id
  const time = event.target.time.value;
  const budget = event.target.budget.value;
  const checkbox1Element = document.getElementById( 'nature' );
  const checkbox2Element = document.getElementById( 'historical' );
  const checkbox3Element = document.getElementById( 'urban' );
  const checkbox4Element = document.getElementById( 'handCraft' );
  const checkbox = [checkbox1Element, checkbox2Element,checkbox3Element ,checkbox4Element];
  checkboxValues = [];
  for ( let i in checkbox ){ // this count the checkbox array element ,false will be return when its done
    if ( checkbox[i].checked ){

      checkboxValues.push( checkbox[i].value );
    }
  }

  let areasList = ['south','middle'] ;

  let indexGover = randomNumber(0,(areasList.length-1));
  let nameOfGovern = areasList[indexGover];

  plan.getFormData ( time,budget ,checkboxValues,nameOfGovern );

  // write a code to move you to `plan.html` page
}
// add event Listner on form submit;
const formSubmit = document.getElementById( 'tripForm' );
formSubmit.addEventListener( 'submit',handleSubmit );
// substitute checklist with radio-buttons



// function renderPlan()
// {
//   const divElement = document.getElementById ('renderDiv');

//   const h3Element1 = document.createElement ('h3');
//   const h3Element2 = document.createElement ('h3');
//   const h3Element3 = document.createElement ('h3');
//   const h3Element4 = document.createElement ('h3');
//   const h3Element5 = document.createElement ('h3');
//   const h3Element6 = document.createElement ('h3');
//   const h3Element7 = document.createElement ('h3');
//   const h3Element8 = document.createElement ('h3');
//   const h3Element9 = document.createElement ('h3');


//   h3Element1.textContent= 'Plan A / Day #1 ' + plan.planDays[0].dayLocation ;
//   h3Element2.textContent = ' 1) You will stay in --------------> ' + plan.planDays[0].planHotel.name ;
//   h3Element3.textContent = ' 2) You will have Breakfast in ----------->'+ plan.planDays[0].planResturent[0].name ;
//   h3Element4.textContent = ' 3) Your first Activity ----------->'+ plan.planDays[0].planActivities[0].name +'(Catagory :'+plan.planDays[0].planActivities[0].catogery+ ' )';
//   h3Element5.textContent = ' 4) Your second Activity ----------->'+ plan.planDays[0].planActivities[1].name +'(Catagory : '+plan.planDays[0].planActivities[1].catogery+ ' )';
//   h3Element6.textContent = ' 5) You will have Dinner in----------->'+ plan.planDays[0].planResturent[1].name ;
//   h3Element7.textContent = ' 6) Your third Activity ----------->'+ plan.planDays[0].planActivities[2].name +'(Catagory : '+plan.planDays[0].planActivities[2].catogery+ ' )';
//   // h3Element8.textContent = ' **** Your have free time : ----------->'+ '(' + timeLeft +')  Hours' ;
//   // h3Element9.textContent = ' **** Your can do this extra activity : ----------->' ; 

//   // Need to be reviewd line 76  and 77 
//   divElement.appendChild(h3Element1);
//   divElement.appendChild(h3Element2);
//   divElement.appendChild(h3Element3);
//   divElement.appendChild(h3Element4);
//   divElement.appendChild(h3Element5);
//   divElement.appendChild(h3Element6);
//   divElement.appendChild(h3Element7);
//   divElement.appendChild(h3Element8);
//   divElement.appendChild(h3Element9);


// }
