
'use strict';

// constructers :


function Plan ( name )
{
  this.name = name; // plan a, plan b , plan c
  this.numOfDays = 0; // from user
  this.budget = 0; // from user
  this.catogeries = []; // from user

  this.planDays = []; // contains 3 days plans day1, day2 , day3
}


function PlanDay ( dayLocation ) {
  this.dayLocation = dayLocation; // day1 : north / day2:middle / day3:south

  this.planResturent = []; // array of Resturent objects
  this.planHotel; // contains Hotel Object
  this.planActivities = []; // array of Activities objects
}


function Activities (activityname,budget,locationAct)
{
  this.name = activityname ;
  this.activityBudget = budget;
  this.location = locationAct;
  this.catogery = '';




  this.timeNeeded = 4;
  this.map = '';
  this.imagePath = '';
  Activities.all.push( this );

}
Activities.all = [];



function Resturent ( name,resturentBudget,location )
{
  this.name = name ;
  this.resturentBudget = resturentBudget;
  this.location = location;

  Resturent.all.push( this );

  this.timeNeeded = 1;

  this.map = '';
  this.imagePath = '';
}
Resturent.all = [];




function Hotel ( name,hotelBudget,location )
{
  this.name = name;
  this.hotelBudget = hotelBudget;
  this.location = location;

  Hotel.all.push( this );

  this.timeNeeded = 7;

  this.map = '';
  this.imagePath = '';
}
Hotel.all = [] ;



// fill plan object properties
Plan.prototype.getFormData = function ( numOfDays,budget,catogeries )
{
  this.numOfDays = numOfDays;
  this.budget = budget;
  this.catogeries = catogeries;
  console.log( this );

  // add one day to planA
  const planDay1 = new PlanDay ( 'south' );
  this.planDays.push( planDay1 );
};



Plan.prototype.saveToLocalStorage = function() {
  // TODO: save the user selections to localStorage : send plan object to local storage
  localStorage.setItem( 'planA', JSON.stringify( this ) );
};


// generate Hotel objects (9 obj to account all cases)

function generateHotel ()
{
  new Hotel ( 'Hotel','L','south' );
  new Hotel ( 'Hotel','L','north' );
  new Hotel ( 'Hotel','L','middle' );

  new Hotel ( 'Hotel','M','south' );
  new Hotel ( 'Hotel','M','north' );
  new Hotel ( 'Hotel','M','middle' );

  new Hotel ( 'Hotel','G','south' );
  new Hotel ( 'Hotel','G','north' );
  new Hotel ( 'Hotel','G','middle' );

  console.log( Hotel.all );
}


generateHotel ();


// generate Resturent objects  (18 obj to account all cases) , time needed = 1

function generatResturent ()
{
  new Resturent ( 'Resturent1','L','south' );
  new Resturent ( 'Resturent2','L','south' );

  new Resturent ( 'Resturent1','L','north' );
  new Resturent ( 'Resturent2','L','north' );

  new Resturent ( 'Resturent1','L','middle' );
  new Resturent ( 'Resturent2','L','middle' );


  //----------------------------------------------

  new Resturent ( 'Resturent1','M','south' );
  new Resturent ( 'Resturent2','M','south' );

  new Resturent ( 'Resturent1','M','north' );
  new Resturent ( 'Resturent2','M','north' );

  new Resturent ( 'Resturent1','M','middle' );
  new Resturent ( 'Resturent2','M','middle' );


  //------------------------------------------------


  new Resturent ( 'Resturent1','G','south' );
  new Resturent ( 'Resturent2','G','south' );

  new Resturent ( 'Resturent1','G','north' );
  new Resturent ( 'Resturent2','G','north' );

  new Resturent ( 'Resturent1','G','middle' );
  new Resturent ( 'Resturent2','G','middle' );

  console.log( Resturent.all );
}


generatResturent ();



function generateActivities ()
{
  new Activities ( 'Activities1','L','south');
  new Activities ( 'Activities2','L','south');
  new Activities ( 'Activities3','L','south');


  new Activities ( 'Activities1','L','north' );
  new Activities ( 'Activities2','L','north' );
  new Activities ( 'Activities3','L','north' );


  new Activities ( 'Activities1','L','middle' );
  new Activities ( 'Activities2','L','middle' );
  new Activities ( 'Activities3','L','middle' );

  //----------------------------------------------

  new Activities ( 'Activities1','M','south' );
  new Activities ( 'Activities2','M','south' );
  new Activities ( 'Activities3','M','south' );


  new Activities ( 'Activities1','M','north' );
  new Activities ( 'Activities2','M','north' );
  new Activities ( 'Activities3','M','north' );


  new Activities ( 'Activities1','M','middle' );
  new Activities ( 'Activities2','M','middle' );
  new Activities ( 'Activities3','M','middle' );

  //------------------------------------------------


  new Activities ( 'Activities1','G','south' );
  new Activities ( 'Activities2','G','south' );
  new Activities ( 'Activities3','G','south' );


  new Activities ( 'Activities1','G','north' );
  new Activities ( 'Activities2','G','north' );
  new Activities ( 'Activities3','G','north' );

  new Activities ( 'Activities1','G','middle' );
  new Activities ( 'Activities2','G','middle' );
  new Activities ( 'Activities3','G','middle' );


  console.log( Activities.all );
}


generateActivities ();





// generate  objects  (18 obj to account all cases) , time needed = 1

// function generateActivity ()
// {
// new Resturent ('Activity1','L','south');
// new Resturent ('Activity2','L','south');
// new Resturent ('Activity3','L','south');

// new Resturent ('Activity1','L','north');
// new Resturent ('Activity2','L','north');
// new Resturent ('Activity3','L','north');


// new Resturent ('Activity1','L','middle');
// new Resturent ('Activity2','L','middle');
// new Resturent ('Activity3','L','middle');


// //----------------------------------------------------
// new Resturent ('Activity1','M','south');
// new Resturent ('Activity2','M','south');
// new Resturent ('Activity3','M','south');

// new Resturent ('Activity1','M','north');
// new Resturent ('Activity2','M','north');
// new Resturent ('Activity3','M','north');


// new Resturent ('Activity1','M','middle');
// new Resturent ('Activity2','M','middle');
// new Resturent ('Activity3','M','middle');


// //------------------------------------------------

// new Resturent ('Activity1','G','south');
// new Resturent ('Activity2','G','south');
// new Resturent ('Activity3','G','south');

// new Resturent ('Activity1','G','north');
// new Resturent ('Activity2','G','north');
// new Resturent ('Activity3','G','north');


// new Resturent ('Activity1','G','middle');
// new Resturent ('Activity2','G','middle');
// new Resturent ('Activity3','G','middle');


// console.log(Resturent.all);
// }