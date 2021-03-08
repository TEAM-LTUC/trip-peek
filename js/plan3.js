
let actualTime = 12; // 24h - (7+2+3);
let timeLeft = 0;
let activitiesTotalTime = 0;

function timeLeftFunc ()
{
  for ( let i = 0 ; i < activitiesTimeNeeded.length ; i++ ){
    activitiesTotalTime = activitiesTotalTime + activitiesTimeNeeded[i];
  }
timeLeft = actualTime - activitiesTotalTime;
}