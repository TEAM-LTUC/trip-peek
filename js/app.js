
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


function Activities (activityname,budget,locationAct,catogery )
{
  this.name = activityname ;
  this.activityBudget = budget;
  this.location = locationAct;
  this.catogery = catogery;

  this.timeNeeded = 4;
  Activities.all.push( this );

  this.map = '';
  this.imagePath = '';
}
Activities.all = [];



function Resturent ( name,resturentBudget,location )
{
  this.name = name ;
  this.resturentBudget = resturentBudget;
  this.location = location;

  Resturent.all.push( this );

  //this.timeNeeded = 1;
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

  // this.timeNeeded = 7;

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
  new Hotel ( 'Hotel1','L','south' );
  new Hotel ( 'Hotel2','L','north' );
  new Hotel ( 'Hotel3','L','middle' );

  new Hotel ( 'Hotel4','M','south' );
  new Hotel ( 'Hotel5','M','north' );
  new Hotel ( 'Hotel6','M','middle' );

  new Hotel ( 'Hotel7','G','south' );
  new Hotel ( 'Hotel8','G','north' );
  new Hotel ( 'Hotel9','G','middle' );

  console.log( Hotel.all );
}


generateHotel ();


// generate Resturent objects  (18 obj to account all cases) , time needed = 1

function generatResturent ()
{
  new Resturent ( 'Resturent1','L','south' );
  new Resturent ( 'Resturent2','L','south' );
  new Resturent ( 'Resturent3','L','north' );
  new Resturent ( 'Resturent4','L','north' );
  new Resturent ( 'Resturent5','L','middle' );
  new Resturent ( 'Resturent6','L','middle' );
  //----------------------------------------------
  new Resturent ( 'Resturent7','M','south' );
  new Resturent ( 'Resturent8','M','south' );
  new Resturent ( 'Resturent9','M','north' );
  new Resturent ( 'Resturent10','M','north' );
  new Resturent ( 'Resturent11','M','middle' );
  new Resturent ( 'Resturent12','M','middle' );
  //------------------------------------------------
  new Resturent ( 'Resturent13','G','south' );
  new Resturent ( 'Resturent14','G','south' );
  new Resturent ( 'Resturent15','G','north' );
  new Resturent ( 'Resturent16','G','north' );
  new Resturent ( 'Resturent17','G','middle' );
  new Resturent ( 'Resturent18','G','middle' );

  console.log( Resturent.all );
}


generatResturent ();



function generateActivities ()
{

  
//--------------------------------------------------------------
  // ----------------------------Low / south
  new Activities ( 'Activities1','L','south', 'nature');
  new Activities ( 'Activities2','L','south' , 'nature');
  new Activities ( 'Activities3','L','south', 'urban');
  new Activities ( 'Activities4','L','south', 'urban');
  new Activities ( 'Activities5','L','south', 'handCraft');
  new Activities ( 'Activities6','L','south', 'handCraft');
  new Activities ( 'Activities7','L','south', 'historical');
  new Activities ( 'Activities8','L','south', 'historical');
  //-----------------------Low / middle
  new Activities ( 'Activities9','L','middle', 'nature');
  new Activities ( 'Activities10','L','middle' , 'nature');
  new Activities ( 'Activities11','L','middle', 'urban');
  new Activities ( 'Activities12','L','middle', 'urban');
  new Activities ( 'Activities13','L','middle', 'handCraft');
  new Activities ( 'Activities14','L','middle', 'handCraft');
 new Activities ( 'Activities15','L','middle', 'handCraft');
  new Activities ( 'Activities16','L','middle', 'handCraft');
  //--------------------------------------------------------------
  //------------------------------------------ Medium / south
  new Activities ( 'Activities17','M','south', 'nature');
  new Activities ( 'Activities18','M','south' , 'nature');
  new Activities ( 'Activities19','M','south', 'urban');
  new Activities ( 'Activities20','M','south', 'urban');
  new Activities ( 'Activities21','M','south', 'handCraft');
  new Activities ( 'Activities22','M','south', 'handCraft');
  new Activities ( 'Activities23','M','south', 'historical');
  new Activities ( 'Activities24','M','south', 'historical');
  //---------------------------// Medium / middle
  new Activities ( 'Activities25','M','middle', 'nature');
  new Activities ( 'Activities26','M','middle' , 'nature');
  new Activities ( 'Activities27','M','middle', 'urban');
  new Activities ( 'Activities28','M','middle', 'urban');
  new Activities ( 'Activities29','M','middle', 'handCraft');
  new Activities ( 'Activities30','M','middle', 'handCraft');
  new Activities ( 'Activities31','M','middle', 'historical');
  new Activities ( 'Activities32','M','middle', 'historical');
  //---------------------------------------------------------
  //------------------------------------------ Good / south
  new Activities ( 'Activities33','G','south', 'nature');
  new Activities ( 'Activities34','G','south' , 'nature');
  new Activities ( 'Activities35','G','south', 'urban');
  new Activities ( 'Activities36','G','south', 'urban');
  new Activities ( 'Activities37','G','south', 'handCraft');
  new Activities ( 'Activities38','G','south', 'handCraft');
  new Activities ( 'Activities39','G','south', 'historical');
  new Activities ( 'Activities40','G','south', 'historical');
  //---------------------------// Medium / middle
  new Activities ( 'Activities41','G','middle', 'nature');
  new Activities ( 'Activities42','G','middle' , 'nature');
  new Activities ( 'Activities43','G','middle', 'urban');
  new Activities ( 'Activities44','G','middle', 'urban');
  new Activities ( 'Activities45','G','middle', 'handCraft');
  new Activities ( 'Activities46','G','middle', 'handCraft');
  new Activities ( 'Activities47','G','middle', 'historical');
  new Activities ( 'Activities48','G','middle', 'historical');
  
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
