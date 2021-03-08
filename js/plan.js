//plan obj used in the code is the same from form.js
// pick a hotel // fill planHotel in planDay obj
'use strict';

let activitiesTimeNeeded = []; // arr of activity's timeNeeded


let counterSet =0;
function pickHotel() {


  do{
    let i = randomNumber(0,(Hotel.all.length-1));
    if ( plan.budget === Hotel.all[i].hotelBudget && plan.planDays[0].dayLocation === Hotel.all[i].location ) {
      plan.planDays[0].planHotel = Hotel.all[i];

    }


  }while(!(plan.planDays[0].planHotel));

}
// pick 2 resturents // fill planResturent array in planDay obj
function pickResturent ()
{
  let lastResturant;

  do {
    let i = randomNumber(0,(Resturent.all.length-1));
    if ( plan.budget === Resturent.all[i].resturentBudget && plan.planDays[0].dayLocation === Resturent.all[i].location && lastResturant !== Resturent.all[i]) {
      plan.planDays[0].planResturent.push( Resturent.all[i] );
      lastResturant = Resturent.all[i];

    }

    console.log(!(plan.planDays[0].planResturent.length === 2 ));
  }while(!(plan.planDays[0].planResturent.length === 2 ));
}


function pickActivities(){
  let length;
  let lastCat = '';
  let listLastCat = [];

  do{

    let i = randomNumber(0,(Resturent.all.length-1));

    if ( plan.planDays[0].planActivities.length < 3 && plan.budget === Activities.all[i].activityBudget && plan.planDays[0].dayLocation === Activities.all[i].location ) {

      for (let j =0 ; j < plan.catogeries.length ;j++){

        if ((Activities.all[i].catogery === plan.catogeries[j]) && !(listLastCat.includes(Activities.all[i].catogery))){
          plan.planDays[0].planActivities.push( Activities.all[i] );
          lastCat= Activities.all[i].catogery;
          listLastCat.push(lastCat);


          for ( let k = length-1 ; k < length ; k++ ){
            activitiesTimeNeeded.push(plan.planDays[0].planActivities[k].timeNeeded);
            console.log(length, activitiesTimeNeeded);
          }


        }


      }


    }


    console.log( plan );
  }while(!(plan.planDays[0].planActivities.length === plan.catogeries.length ));
}





let actualTime = 15; // 24h - (7+2);


let timeLeft = 0;
let activitiesTotalTime = 0;

function timeLeftFunc ()
{
  for ( let i = 0 ; i < activitiesTimeNeeded.length ; i++ ){

    activitiesTotalTime = activitiesTotalTime + Number(activitiesTimeNeeded[i]);

    console.log(activitiesTotalTime);

  }
  timeLeft = actualTime - activitiesTotalTime;

}
