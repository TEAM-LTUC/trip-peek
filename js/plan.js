//plan obj used in the code is the same from form.js
// pick a hotel // fill planHotel in planDay obj
'use strict';

let counterSet =0;
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

  for ( let i = 0 ; i < Activities.all.length ; i++ ){


    let lastCat = '';

    if ( plan.planDays[0].planActivities.length < 3 && plan.budget === Activities.all[i].activityBudget && plan.planDays[0].dayLocation === Activities.all[i].location ) {

      for (let j =0 ; j < plan.catogeries.length ;j++){


        if ((Activities.all[i].catogery === plan.catogeries[j]) && (Activities.all[i].catogery !== lastCat)){
          plan.planDays[0].planActivities.push( Activities.all[i] );
          lastCat= Activities.all[i].catogery;
          console.log(lastCat);
          console.log((Activities.all[i].catogery !== lastCat));



        }


      }

    }



    // plan.planDays.length < 3 ---> used to make sure to only add 3 activities

  }
  console.log( plan );

}

