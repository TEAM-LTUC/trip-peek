
'use strict';

// constructers :

function randomNumber( min, max ) {
  return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
}
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


function Activities (activityname,budget,locationAct,catogery,timeNeeded)
{
  this.name = activityname ;
  this.activityBudget = budget;
  this.location = locationAct;
  this.catogery = catogery;

  this.timeNeeded = timeNeeded ;

  this.map = '';
  this.imagePath = '' ;
  Activities.all.push( this );

}
Activities.all = [];



function Resturent ( name,resturentBudget,location )
{
  this.name = name ;
  this.resturentBudget = resturentBudget;
  this.location = location;


  this.map = '';
  this.imagePath = '';
  Resturent.all.push( this );

}
Resturent.all = [];




function Hotel ( name,hotelBudget,location )
{
  this.name = name;
  this.hotelBudget = hotelBudget;
  this.location = location;

  

  this.map = '';
  this.imagePath = '';
  Hotel.all.push( this );
}
Hotel.all = [] ;



// fill plan object properties
Plan.prototype.getFormData = function ( numOfDays,budget,catogeries,governorateName )
{
  this.numOfDays = numOfDays;
  this.budget = budget;
  this.catogeries = catogeries;
  console.log( this );

  
  const planDay1 = new PlanDay (governorateName);
  this.planDays.push( planDay1 );
};



Plan.prototype.saveToLocalStorage = function() {
  // TODO: save the user selections to localStorage : send plan object to local storage
  localStorage.setItem( 'planA', JSON.stringify( this ) );
};


// generate Hotel objects (9 obj to account all cases)
function generateHotel ()
{
  new Hotel ( 'Samara Resort','L','south' );
  new Hotel ( 'Al-Joud hotel','L','north' );
  new Hotel ( 'Larsa Hotel Amman','L','middle' );

  new Hotel ( 'Kempinski','M','south' );
  new Hotel ( '7 Stars Hotel','M','north' );
  new Hotel ( 'Royal','M','middle' );

  new Hotel ( 'Hayatt Regency','G','south' );
  new Hotel ( 'Ajloun Forest Reserve','G','north' );
  new Hotel ( 'Movenpick Hotel','G','middle' );

}


generateHotel ();


// generate Resturent objects  (18 obj to account all cases) , time needed = 1

function generatResturent ()
{
  new Resturent ( 'Khubza & Seneya','L','south' );
  new Resturent ( 'Rovers Return','L','south' );
  new Resturent ( 'Summaga Cafe','L','north' );
  new Resturent ( 'Palestine Restaurant','L','north' );
  new Resturent ( 'Hashim','L','middle' );
  new Resturent ( 'Abu Zaghleh','L','middle' );
  //----------------------------------------------
  new Resturent ( 'Mirwas Restaurant and Cafe','M','south' );
  new Resturent ( 'Gaadet Jeeran','M','south' );
  new Resturent ( 'AlHaram Resaurant & Cafe','M','north' );
  new Resturent ( 'Chimney House','M','north' );
  new Resturent ( 'Eostrix Gastro Pub','M','middle' );
  new Resturent ( 'Konya Turkish Restaurant','M','middle' );
  //------------------------------------------------
  new Resturent ( 'Bacchus Restaurant','G','south' );
  new Resturent ( 'Obelisk Restaurant','G','south' );
  new Resturent ( 'Umm Qais Rest House','G','north' );
  new Resturent ( 'Lebanese House Um Khalil Restaurant','G','north' );
  new Resturent ( 'Nur Lebanese Dining','G','middle' );
  new Resturent ( 'Jasmine House','G','middle' );


  
}


generatResturent ();



function generateActivities ()
{


  //--------------------------------------------------------------
  // ----------------------------Low / south
  new Activities ( 'HIKING','L','south', 'nature','5');
  new Activities ( 'CYCLING','L','south' , 'nature','5');
  new Activities ( 'Muta University','L','south', 'urban','4');
  new Activities ( 'Karak Tourism Center ','L','south', 'urban','4');
  new Activities ( 'Making Kohl','L','south', 'handCraft','2');
  new Activities ( 'Mosaic','L','south', 'handCraft','2');
  new Activities ( 'Karak Citadel','L','south', 'historical','3');
  new Activities ( 'Wadi Araba','L','south', 'historical','3');
  //-----------------------Low / middle
  new Activities ( 'King Hussein Park','L','middle', 'nature','5');
  new Activities ( 'Bahrain Kingdom forest','L','middle' , 'nature','5');
  new Activities ( 'Boulevard Al-Abdali','L','middle', 'urban','4');
  new Activities ( 'Jordan Museum Of Popular Tradition','L','middle', 'urban','4');
  new Activities ( 'Wadi Finan','L','middle', 'handCraft','2');
  new Activities ( 'Dar Al-anda','L','middle', 'handCraft','2');
  new Activities ( 'Iraq Al-Amir','L','middle', 'historical','3');
  new Activities ( 'The Hashemite Square','L','middle', 'historical','3');
  //--------------------------------------------------------------
  //------------------------------------------ Medium / south
  new Activities ( 'CANYONING','M','south', 'nature','5');
  new Activities ( 'RUM SKY','M','south' , 'nature','5');
  new Activities ( 'Masada National Park','M','south', 'urban','4');
  new Activities ( 'AL-TAFILA ECHO; Interpretation And Visitors Center','M','south', 'urban','4');
  new Activities ( 'DAY WITH SHEPHERD','M','south', 'handCraft','2');
  new Activities ( 'ZARB DESERT CAMP','M','south', 'handCraft','2');
  new Activities ( 'Al-Humaimah','M','south', 'historical','3');
  new Activities ( 'Wadi Musa','M','south', 'historical','3');
  //---------------------------// Medium / middle
  new Activities ( 'ANCIENT RUINS','M','middle', 'nature','5');
  new Activities ( 'GREEK ORTHODOX CHURCH','M','middle' , 'nature','5');
  new Activities ( 'Beit Sitti','M','middle', 'urban','4');
  new Activities ( 'Jordan Folklore Museum','M','middle', 'urban','4');
  new Activities ( 'Royal Automobile Museum','M','middle', 'handCraft','2');
  new Activities ( 'Children Museum','M','middle', 'handCraft','2');
  new Activities ( 'Roman Nymphaeum','M','middle', 'historical','3');
  new Activities ( 'Temple Of Hercules','M','middle', 'historical','3');
  //---------------------------------------------------------
  //------------------------------------------ Good / south
  new Activities ( 'CAMPING','G','south', 'nature','5');
  new Activities ( 'JEEP TOUR','G','south' , 'nature','5');
  new Activities ( 'Ayla Oasis','G','south', 'urban','4');
  new Activities ( 'Aqaba South Gulf','G','south', 'urban','4');
  new Activities ( 'NATURE CINEMA','G','south', 'handCraft','2');
  new Activities ( 'WEAVING GOAT HAIRED TENTS','G','south', 'handCraft','2');
  new Activities ( 'Petra','G','south', 'historical','3');
  new Activities ( 'Wadi Rum','G','south', 'historical','3');
  //---------------------------// Medium / middle
  new Activities ( 'Nepo Mountain','G','middle', 'nature','5');
  new Activities ( 'Wadi Almujeb','G','middle' , 'nature','5');
  new Activities ( 'National Archaeological Museum','G','middle', 'urban','4');
  new Activities ( 'Jordan National Gallery Of Fine Art','G','middle', 'urban','4');
  new Activities ( 'Jadal','G','middle', 'handCraft','2');
  new Activities ( 'Skyline Sushi Cooking Class','G','middle', 'handCraft','2');
  new Activities ( 'Roman Theater','G','middle', 'historical','3');
  new Activities ( 'Castel Mountain','G','middle', 'historical','3');
}


generateActivities ();

console.log(Activities.all)


