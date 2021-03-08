//plan obj used in the code is the same from form.js
// pick a hotel // fill planHotel in planDay obj
'use strict';

let activitiesTimeNeeded = []; // arr of activity's timeNeeded


function pickHotel() {


  for ( let i = 0 ; i < Hotel.all.length ; i++ ){
    if ( plan.budget === Hotel.all[i].hotelBudget && plan.planDays[0].dayLocation === Hotel.all[i].location ) {
      plan.planDays[0].planHotel = Hotel.all[i];

    }


  }

}
// pick 2 resturents // fill planResturent array in planDay obj
function pickResturent ()
{
  for ( let i = 0 ; i < Resturent.all.length ; i++ ){
    if ( plan.budget === Resturent.all[i].resturentBudget && plan.planDays[0].dayLocation === Resturent.all[i].location ) {
      plan.planDays[0].planResturent.push( Resturent.all[i] );


    }


  }

}

function pickActivities(){
  let length;
  for ( let i = 0 ; i < Activities.all.length ; i++ ){
    if ( plan.planDays[0].planActivities.length < 3
      && plan.budget === Activities.all[i].activityBudget
      && plan.planDays[0].dayLocation === Activities.all[i].location ) {
      plan.planDays[0].planActivities.push( Activities.all[i] );
      // plan.planDays.length < 3 ---> used to make sure to only add 3 activities

      length = plan.planDays[0].planActivities.length;

      for ( let j = length-1 ; j < length ; j++ ){
        activitiesTimeNeeded.push(plan.planDays[0].planActivities[j].timeNeeded);
        console.log(length, activitiesTimeNeeded);
      }

    }


    console.log( plan );
  }
}
