//plan obj used in the code is the same from form.js
// pick a hotel // fill planHotel in planDay obj
// 'use strict';




//plan obj used in the code is the same from form.js
// pick a hotel // fill planHotel in planDay obj
'use strict';

let activitiesTimeNeeded = []; // arr of activity's timeNeeded


function pickHotel() {

  console.log('hello from hotel');
  for ( let i = 0 ; i < Hotel.all.length ; i++ ){
    if ( plan.budget === Hotel.all[i].hotelBudget && plan.planDays[0].dayLocation === Hotel.all[i].location ) {
      plan.planDays[0].planHotel = Hotel.all[i];

    }
    

  }

}
// pick 2 resturents // fill planResturent array in planDay obj
function pickResturent ()
{
  console.log('hello from resturant');
  for ( let i = 0 ; i < Resturent.all.length ; i++ ){
    if ( plan.budget === Resturent.all[i].resturentBudget && plan.planDays[0].dayLocation === Resturent.all[i].location ) {
      plan.planDays[0].planResturent.push( Resturent.all[i] );


    }


  }

}

function pickActivities(){
  let length;
  let lastCat;
  console.log('hello from activities');

  for ( let i = 0 ; i < Activities.all.length ; i++ ){
    if ( plan.planDays[0].planActivities.length < 3
      && plan.budget === Activities.all[i].activityBudget
      && plan.planDays[0].dayLocation === Activities.all[i].location ) {
      // plan.planDays.length < 3 ---> used to make sure to only add 3 activities

      
      //mohammad
      for (let j =0 ; j < plan.catogeries.length ;j++){


        if ((Activities.all[i].catogery === plan.catogeries[j]) && (Activities.all[i].catogery !== lastCat)){
          plan.planDays[0].planActivities.push( Activities.all[i] );
          lastCat= Activities.all[i].catogery;
          console.log(lastCat);
          console.log((Activities.all[i].catogery !== lastCat));

          length = plan.planDays[0].planActivities.length;

          for ( let k = length-1 ; k < length ; k++ ){
            activitiesTimeNeeded.push(plan.planDays[0].planActivities[k].timeNeeded);
            console.log(length, activitiesTimeNeeded);
          }
    

        }


      }


    }


  }
  console.log( plan );
}




let actualTime = 15;  // 24h - (7+2); 



let timeLeft = 0;
let activitiesTotalTime = 0;

function timeLeftFunc ()
{
  for ( let i = 0 ; i < activitiesTimeNeeded.length ; i++ ){

    activitiesTotalTime = activitiesTotalTime + Number(activitiesTimeNeeded[i]);

  }
  timeLeft = actualTime - activitiesTotalTime;

}



const plan = JSON.parse( localStorage.getItem( 'planA' ) );
pickHotel();
pickResturent ();

pickActivities();
console.log( plan );

// let activitiesTimeTotal = 0;

// function pickActivities(){

//   for ( let i = 0 ; i < Activities.all.length ; i++ ){
//     if ( plan.budget === Activities.all[i].activityBudget && plan.planDays[0].dayLocation === Activities.all[i].location ) {
//       plan.planDays[0].planActivities.push( Activities.all[i] );


//     }

//   }
// }
// function pickHotel() {


//   for ( let i = 0 ; i < Hotel.all.length ; i++ ){
//     if ( plan.budget === Hotel.all[i].hotelBudget && plan.planDays[0].dayLocation === Hotel.all[i].location ) {
//       plan.planDays[0].planHotel = Hotel.all[i];

//     }


//   }

// }
// // pick 2 resturents // fill planResturent array in planDay obj
// function pickResturent ()
// {
//   for ( let i = 0 ; i < Resturent.all.length ; i++ ){
//     if ( plan.budget === Resturent.all[i].resturentBudget && plan.planDays[0].dayLocation === Resturent.all[i].location ) {
//       plan.planDays[0].planResturent.push( Resturent.all[i] );
//     }


//   }
// }