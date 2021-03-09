
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
  this.planHotel={}; // contains Hotel Object
  this.planActivities = []; // array of Activities objects
}


function Activities (activityname,budget,locationAct,catogery,timeNeeded,imagePath,map)
{
  this.name = activityname ;
  this.activityBudget = budget;
  this.location = locationAct;
  this.catogery = catogery;

  this.timeNeeded = timeNeeded ;

  this.map = map;
  this.imagePath = imagePath ;
  Activities.all.push( this );

}
Activities.all = [];



function Resturent ( name,resturentBudget,location ,imagePath,map)
{
  this.name = name ;
  this.resturentBudget = resturentBudget;
  this.location = location;


  this.map = map;
  this.imagePath = imagePath;
  Resturent.all.push( this );

}
Resturent.all = [];




function Hotel ( name,hotelBudget,location,imagePath,map )
{
  this.name = name;
  this.hotelBudget = hotelBudget;
  this.location = location;

  

  this.map = map;
  this.imagePath = imagePath;
  Hotel.all.push( this );
}
Hotel.all = [] ;



// fill plan object properties
Plan.prototype.getFormData = function ( numOfDays,budget,catogeries,governorateName )
{
  this.numOfDays = numOfDays;
  this.budget = budget;
  this.catogeries = catogeries;
 
  const planDay1 = new PlanDay (governorateName);
  this.planDays[0]=  planDay1 ;
};



Plan.prototype.saveToLocalStorage = function() {
  // TODO: save the user selections to localStorage : send plan object to local storage
  localStorage.setItem( 'planA', JSON.stringify( this ) );
};


// generate Hotel objects (9 obj to account all cases)
function generateHotel ()
{
  new Hotel ( 'Samara Resort','L','south','https://q-xx.bstatic.com/xdata/images/hotel/840x460/214509063.jpg?k=9d97e2879942b2dfa2954f90c52af68b03ddb7bd1867302654aeb4216740d724&o=','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d434422.08025919367!2d35.31022093281251!3d31.71801189999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15034a6a5d60c681%3A0xc611da088ead71f7!2sSamarah%20Dead%20Sea%20Resort!5e0!3m2!1sen!2sjo!4v1615295507481!5m2!1sen!2sjo' );
  new Hotel ( 'Al-Joud hotel','L','north' );
  new Hotel ( 'Larsa Hotel Amman','L','middle','https://media-cdn.tripadvisor.com/media/photo-s/09/3c/57/57/larsa-hotel.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.8578484689083!2d35.84032191464247!3d31.964752932263078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca1710fbf0ad3%3A0x20f5e4bfd64da234!2sLarsa%20Hotel!5e0!3m2!1sen!2sjo!4v1615295623865!5m2!1sen!2sjo');

  new Hotel ( 'Kempinski','M','south','https://media-cdn.tripadvisor.com/media/photo-s/1c/4e/d1/82/exterior.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3471.464323336432!2d34.99517191458103!3d29.53196944955491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1500703501a8066b%3A0xad0bd370a58ece40!2sKempinski%20Hotel%20Aqaba%20Red%20Sea!5e0!3m2!1sen!2sjo!4v1615295708053!5m2!1sen!2sjo' );
  new Hotel ( '7 Stars Hotel','M','north' );
  new Hotel ( 'Royal','M','middle','https://leroyal.com/application/files/2415/0107/7950/GALLERY_01_03.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.276150047955!2d35.90683611464226!3d31.953404232829094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca07c3ac2f427%3A0xe38918f500c1842!2sLe%20Royal%20Hotel%20%26%20Resorts%20Amman!5e0!3m2!1sen!2sjo!4v1615295775427!5m2!1sen!2sjo' );

  new Hotel ( 'Hayatt Regency','G','south','https://www.jordantimes.com/sites/default/files/styles/news_inner/public/7-Business-Club_1.jpg?itok=u-dO7xq5','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3470.902613547934!2d34.98824680374469!3d29.54833027528951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1500719572618741%3A0x2464280b5075c8de!2sHyatt%20Regency%20Aqaba%20Ayla!5e0!3m2!1sen!2sjo!4v1615295903686!5m2!1sen!2sjo');
  new Hotel ( 'Ajloun Forest Reserve','G','north' );
  new Hotel ( 'Movenpick Hotel','G','middle','https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/10/01/100165_v2.jpeg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.0691438228396!2d35.862371714643075!3d31.98614103119573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca18f3ca4e949%3A0x7549fdec8b8e1369!2sM%C3%B6venpick%20Hotel%20Amman!5e0!3m2!1sen!2sjo!4v1615295968313!5m2!1sen!2sjo');

}


generateHotel ();


// generate Resturent objects  (18 obj to account all cases) , time needed = 1

function generatResturent ()
{
  new Resturent ( 'Khubza & Seneya','L','south','https://lh3.googleusercontent.com/imji5RThgK6kT4gp1t9iCJ7yLQAHDjocfR9a0yoJ9-QZFBRARaZyrBf2V2fe9yzxq7_YnliXtomWvzs=w768-h768-n-o-v1','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3471.496837944176!2d35.00076841458104!3d29.531022149598975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x150071633f8f3e07%3A0x4d8fd8655186305!2sKhubza%20%26%20Seneya!5e0!3m2!1sen!2sjo!4v1615296221580!5m2!1sen!2sjo');
  new Resturent ( 'Rovers Return','L','south','https://img.baysider.com/companies/9000/90005/v2_file_613356503.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3471.524735290975!2d34.998951814580984!3d29.53020934963668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x150070366e3c6081%3A0x4e476d93216b5d4c!2sRovers%20Return!5e0!3m2!1sen!2sjo!4v1615296309731!5m2!1sen!2sjo');
  new Resturent ( 'Summaga Cafe','L','north' );
  new Resturent ( 'Palestine Restaurant','L','north' );
  new Resturent ( 'Hashim','L','middle','https://media-cdn.tripadvisor.com/media/photo-s/16/ae/6f/02/hashem-restaurant.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3386.4639910977767!2d35.92190571464145!3d31.92115793443663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5f5c91d1979f%3A0x87ef8fcac063086f!2sHashim%20Restaurant!5e0!3m2!1sen!2sjo!4v1615296384681!5m2!1sen!2sjo');
  new Resturent ( 'Abu Zaghleh','L','middle','https://media-cdn.tripadvisor.com/media/photo-s/16/e3/53/f2/km.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3387.386248157427!2d35.91277471464071!3d31.896101335684605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca75886be4451%3A0xa47f3960fdcc534!2sAbu%20Zaghleh%20Restaurant!5e0!3m2!1sen!2sjo!4v1615296439562!5m2!1sen!2sjo');
  //----------------------------------------------
  new Resturent ( 'Mirwas Restaurant and Cafe','M','south','https://media-cdn.tripadvisor.com/media/photo-m/1280/1a/86/14/64/mirwas-restaurant-and.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3471.5456200890067!2d34.99715511458095!3d29.529600849665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15007035f1c4da7d%3A0x31ed64b76ecc6176!2sMirwas%20Cafe%20and%20Restaurant!5e0!3m2!1sen!2sjo!4v1615296543334!5m2!1sen!2sjo');
  new Resturent ( 'Gaadet Jeeran','M','south','https://jannah.jo/photos/d3967b89-a11b-427f-8363-bc169d039325.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3471.5748753087!2d34.99798791458093!3d29.528748449704768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15007151ea7f0a6b%3A0x131ee73f95b609fa!2sGaadet%20Jeeran!5e0!3m2!1sen!2sjo!4v1615296605358!5m2!1sen!2sjo');
  new Resturent ( 'AlHaram Resaurant & Cafe','M','north' );
  new Resturent ( 'Chimney House','M','north' );
  new Resturent ( 'Eostrix Gastro Pub','M','middle','https://i2.wp.com/livinginjordanasexpat.com/wp-content/uploads/2019/08/img_20190722_212601.jpg?w=521&h=261&ssl=1','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.3335291294597!2d35.9113399146422!3d31.95184723290687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca17c01741cdb%3A0x3483417c23e89c61!2sEostrix%20GastroPub!5e0!3m2!1sen!2sjo!4v1615296699254!5m2!1sen!2sjo');
  new Resturent ( 'Konya Turkish Restaurant','M','middle','https://media-cdn.tripadvisor.com/media/photo-s/1b/12/6a/74/we-proud-of-our-chefs.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.3557098783135!2d35.92413791464209!3d31.951245332936708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5f3352c8efbf%3A0xe34a21f23c3edca6!2sKonya%20Turkish%20Resturant!5e0!3m2!1sen!2sjo!4v1615296764138!5m2!1sen!2sjo');
  //------------------------------------------------
  new Resturent ( 'Bacchus Restaurant','G','south','https://media-cdn.tripadvisor.com/media/photo-p/17/e5/1e/c3/bacchus-restaurant.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3475229.261951541!2d33.34598306249999!3d31.72194300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x89449b63893eeea2!2sBacchus!5e0!3m2!1sen!2sjo!4v1615296905017!5m2!1sen!2sjo');
  new Resturent ( 'Obelisk Restaurant','G','south','https://media-cdn.tripadvisor.com/media/photo-o/17/3c/17/3f/indoor-dining-area.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3394.0188655397!2d35.58397711463587!3d31.715379644660977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15034badfa3b2db9%3A0xc850521e8a2e100e!2sThe%20Obelisk%20Restaurant!5e0!3m2!1sen!2sjo!4v1615297003786!5m2!1sen!2sjo');
  new Resturent ( 'Umm Qais Rest House','G','north' );
  new Resturent ( 'Lebanese House Um Khalil Restaurant','G','north' );
  new Resturent ( 'Nur Lebanese Dining','G','middle','https://media-cdn.tripadvisor.com/media/photo-w/15/86/b1/e7/nur-main-seating-area.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.2921368409666!2d35.908489214642145!3d31.95297043285077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca186dcf8b3c7%3A0x2f51ad5b968f0cc1!2sNur%20Lebanese%20Dining!5e0!3m2!1sen!2sjo!4v1615297071594!5m2!1sen!2sjo');
  new Resturent ( 'Jasmine House','G','middle','https://media-cdn.tripadvisor.com/media/photo-w/11/b5/37/ff/img-20171101-wa0036-largejpg.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.128909858198!2d35.922080314642294!3d31.957399332629965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5f8f0042a7ff%3A0x8c0b5e6cceef1757!2z2KjZitiqINmK2KfYs9mF2YrZhg!5e0!3m2!1sen!2sjo!4v1615297127296!5m2!1sen!2sjo');


  
}


generatResturent ();



function generateActivities ()
{


  //--------------------------------------------------------------
  // ----------------------------Low / south
  new Activities ( 'HIKING','L','south', 'nature','5','https://trip500.com/wp-content/uploads/2018/04/26-Hiking-in-Jordan.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108313.63350688326!2d35.840281258203106!3d31.966293700000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5f884bc3d00f%3A0xa43b8cdb4d6877c5!2sTAKE%20A%20HIKE%20-%20Jordan!5e0!3m2!1sen!2sjo!4v1615297491656!5m2!1sen!2sjo');
  new Activities ( 'CYCLING','L','south' , 'nature','5','https://img.theculturetrip.com/wp-content/uploads/2018/04/dana_cycling_in_jordan.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.4821139165106!2d35.84933540000001!3d31.974943699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca198a6d7f8fb%3A0xf970b5f94c2a0c04!2sCycling%20Jordan!5e0!3m2!1sen!2sjo!4v1615297817576!5m2!1sen!2sjo');
  new Activities ( 'Muta University','L','south', 'urban','4','https://www.mutah.edu.jo/PublishingImages/SlideShowMutah2.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3416.578096159738!2d35.7151855146199!3d31.093660775199822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15039d60edaaebdd%3A0x9a417ab22771f9b3!2sMutah%20University!5e0!3m2!1sen!2sjo!4v1615297995641!5m2!1sen!2sjo');
  new Activities ( 'Karak Tourism Center ','L','south', 'urban','4','https://minaretproject.com/wp-content/uploads/2020/11/mumia-falls-img-2.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3413.4346212441874!2d35.699473314622196!3d31.180960470943802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x150370cdc75ce587%3A0xf0168216330872ce!2sAlKarak%20Castle!5e0!3m2!1sen!2sjo!4v1615298044966!5m2!1sen!2sjo');
  new Activities ( 'Making Kohl','L','south', 'handCraft','2','https://live.staticflickr.com/1404/5107491614_fb7b647966_b.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.89088038203!2d35.44845001460194!3d30.382456309481466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1501658987b30beb%3A0xe6e7d24bafc65208!2z2YXYrtmK2YUg2LnZhdin2LHZitmGINin2YTYqNiv2YjZig!5e0!3m2!1sen!2sjo!4v1615298923479!5m2!1sen!2sjo');
  new Activities ( 'Mosaic','L','south', 'handCraft','2','https://www.hecktictravels.com/wp-content/uploads/2012/06/Madaba-Mosaics-3.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.933307646736!2d35.792010614636034!3d31.717716744545196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151cacd0363cbdf9%3A0xfb986f55dd6d15b5!2sSt%20George&#39;s%20Greek%20Orthodox%20Church!5e0!3m2!1sen!2sjo!4v1615299023982!5m2!1sen!2sjo');
  new Activities ( 'Karak Citadel','L','south', 'historical','3','http://photos.wikimapia.org/p/00/00/51/43/63_big.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3413.4346212441874!2d35.699473314622196!3d31.180960470943802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x150370cdc75ce587%3A0xf0168216330872ce!2sAlKarak%20Castle!5e0!3m2!1sen!2sjo!4v1615299174232!5m2!1sen!2sjo');
  new Activities ( 'Wadi Araba','L','south', 'historical','3','https://lh3.googleusercontent.com/-dm6ROuFIJHE/WlPXUrrmSmI/AAAAAAABa_M/5D94YN70SKoyWh6YqDoWiQ676uHp39FlQCMQCGAYYCw/s1600/DSC_3288.JPG','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13755.918146533115!2d35.168467424332086!3d30.46501770299563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15019d2cb2d78779%3A0x56c8b63d626a956b!2sWadi%20Araba!5e0!3m2!1sen!2sjo!4v1615299284773!5m2!1sen!2sjo');
  //-----------------------Low / middle
  new Activities ( 'King Hussein Park','L','middle', 'nature','5','https://live.staticflickr.com/5026/5552404819_61c41d25ae_b.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.0415336985466!2d35.82586931464308!3d31.98688953115845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca1881d698f6d%3A0xc9577119e8370859!2sAl-Hussein%20Public%20Parks!5e0!3m2!1sen!2sjo!4v1615299346553!5m2!1sen!2sjo');
  new Activities ( 'Bahrain Kingdom forest','L','middle' , 'nature','5','https://alwatannews.net/uploads/images/2018/02/10/1252264.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3388.755363478653!2d35.89715791463978!3d31.858871637537394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca7911822e66f%3A0x9880676dbda6ae47!2sKing%20of%20Bahrain%20Kingdom%20Forest!5e0!3m2!1sen!2sjo!4v1615299413907!5m2!1sen!2sjo');
  new Activities ( 'Boulevard Al-Abdali','L','middle', 'urban','4','www.jordantimes.com/sites/default/files/styles/news_inner/public/4boulevard.jpg?itok=0IjwpAq4','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.8677798186795!2d35.90304711464252!3d31.96448353227649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca06e1969884d%3A0xbaf0e790ffe8b689!2sThe%20Boulevard!5e0!3m2!1sen!2sjo!4v1615299471571!5m2!1sen!2sjo');
  new Activities ( 'Jordan Museum Of Popular Tradition','L','middle', 'urban','4','https://cache-graphicslib.viator.com/graphicslib/page-images/742x525/141762_museum.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.3322282698255!2d35.93740351464222!3d31.951882532905064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5fbd02e873ef%3A0x2e7a312db04156a0!2sJordanian%20Museum%20of%20Popular%20Traditions!5e0!3m2!1sen!2sjo!4v1615299558473!5m2!1sen!2sjo');
  new Activities ( 'Wadi Finan','L','middle', 'handCraft','2','https://i0.wp.com/the-shooting-star.com/wp-content/uploads/2015/10/img_0648.jpg?ssl=1','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d879018.6678554784!2d34.97257232666014!3d30.615163815063916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe615dbcd9df544a1!2sWadi%20Finan!5e0!3m2!1sen!2sjo!4v1615299620721!5m2!1sen!2sjo');
  new Activities ( 'Dar Al-anda','L','middle', 'handCraft','2','https://media-cdn.tripadvisor.com/media/photo-s/11/05/4c/de/dar-al-anda-art-gallery.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.273431493493!2d35.9281553!3d31.953477999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5f854db9b757%3A0xcff0fabc40ba54f6!2sDar%20Al-Anda%20Art%20Gallery!5e0!3m2!1sen!2sjo!4v1615299765046!5m2!1sen!2sjo');
  new Activities ( 'Iraq Al-Amir','L','middle', 'historical','3','https://media-cdn.tripadvisor.com/media/photo-s/1a/c6/c2/16/caption.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54183.85039489896!2d35.69786996130997!3d31.920433900165044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151cbad1a9ee42f3%3A0xf583f09809beff4f!2sIraq%20Al%20Amir%2C%20Amman!5e0!3m2!1sen!2sjo!4v1615299878276!5m2!1sen!2sjo');
  new Activities ( 'The Hashemite Square','L','middle', 'historical','3','https://bogdanvacarescu.files.wordpress.com/2015/05/20150509_184427.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.320115104374!2d35.93697791464222!3d31.952211232888676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5fbd061233bd%3A0x7f19d8f0c15d9e1c!2sThe%20Hashemite%20Plaza!5e0!3m2!1sen!2sjo!4v1615299951027!5m2!1sen!2sjo');
  //--------------------------------------------------------------
  //------------------------------------------ Medium / south
  new Activities ( 'CANYONING','M','south', 'nature','5','https://cdn2.civitatis.com/ecuador/banos-de-agua-santa/barranquismo-rio-blanco.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54449.2203438153!2d35.53815407910156!3d31.467088000000018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x150340038f2f87d9%3A0x5a64c2db02533c09!2sWadi%20Mujib!5e0!3m2!1sen!2sjo!4v1615300068142!5m2!1sen!2sjo');
  new Activities ( 'RUM SKY','M','south' , 'nature','5','https://www.outlookindia.com/outlooktraveller/public/uploads/filemanager/images/shutterstock_1319299538-(1)_5e32432c08d4e.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.185193495917!2d35.481908714584!3d29.656399943754938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1500935a0d68f351%3A0xa496832f41e32bb4!2sRumSky%20Stargazing%20Adventure!5e0!3m2!1sen!2sjo!4v1615300166369!5m2!1sen!2sjo');
  new Activities ( 'Al-Shoubak Castle','M','south', 'urban','4','https://media.tacdn.com/media/attractions-splice-spp-674x446/09/a7/e3/5a.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3436.6337634825436!2d35.55864461460576!3d30.53139350236028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1503dfdeae5e6ee9%3A0x955a7c3f09c03796!2sShobak%20Castle%20-%20Montreal!5e0!3m2!1sen!2sjo!4v1615302337887!5m2!1sen!2sjo');
  new Activities ( 'AL-TAFILA ECHO; Interpretation And Visitors Center','M','south', 'urban','4','https://cdn.worldarchitecture.org/net/bin.aspx?file=0-5-.jpg','');
  new Activities ( 'DAY WITH SHEPHERD','M','south', 'handCraft','2','https://i1.wp.com/www.black-iris.com/wp-content/uploads/2011/10/farm.jpeg?w=550','');
  new Activities ( 'ZARB DESERT CAMP','M','south', 'handCraft','2','https://i1.wp.com/www.familytravel-middleeast.com/wp-content/uploads/2019/09/Jordan-Wadi-Rum-Desert-Camp.jpg?fit=1080%2C540&ssl=1','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.7780464497564!2d35.43216091458368!3d29.639189044558446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1500edb54cdf507d%3A0x7d8c76898ae58920!2sZarb%20Desert%20Camp!5e0!3m2!1sen!2sjo!4v1615302894137!5m2!1sen!2sjo');
  new Activities ( 'Al-Humaimah','M','south', 'historical','3','http://cultech.net/sites/default/files/hum.PNG','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220645.44226619694!2d35.54675407468178!3d30.220388955608453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x150146193b84e079%3A0xc9ed1d8a38192b48!2sMa&#39;an!5e0!3m2!1sen!2sjo!4v1615303316877!5m2!1sen!2sjo');
  new Activities ( 'Wadi Musa','M','south', 'historical','3','https://cf.bstatic.com/images/hotel/max1024x768/239/239943927.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27552.521740054395!2d35.465645457512295!3d30.320662729560766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15016930021ab6b1%3A0xe43a697bc3a3e0b9!2sWadi%20Musa!5e0!3m2!1sen!2sjo!4v1615303384487!5m2!1sen!2sjo');
  //---------------------------// Medium / middle
  new Activities ( 'Umm ar-Rasas','M','middle', 'nature','5','http://www.holyjordan.org/sites/default/files/um-er-rasas-kastrom-mefa.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.8638428888175!2d35.91821121463045!3d31.50042615527957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1504a7f97c1e3e51%3A0x49339bb222c31da4!2sUmm%20ar-Rasas!5e0!3m2!1sen!2sjo!4v1615303614176!5m2!1sen!2sjo');
  new Activities ( 'Castle mountain','M','middle' , 'nature','5','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1737791.3375877137!2d34.6734949778488!3d31.7125156055395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5f96539bcc23%3A0x83d61bcf8e637e6d!2sAmman%20Citadel!5e0!3m2!1sen!2sjo!4v1615303787089!5m2!1sen!2sjo');
  new Activities ( 'Beit Sitti','M','middle', 'urban','4','https://pbs.twimg.com/media/CgGUhATWEAAOu5S.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.245218848389!2d35.92719431464225!3d31.954243532787334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5f908dc59e69%3A0x82c08c59f9ce17bf!2sBeit%20Sitti%20Restaurant!5e0!3m2!1sen!2sjo!4v1615303861787!5m2!1sen!2sjo');
  new Activities ( 'Jordan Folklore Museum','M','middle', 'urban','4','https://universes.art/fileadmin/_processed_/2/6/csm_04-IMG_8957-A_22a1561487.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.3385482982253!2d35.93661591464222!3d31.951711032913572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5fb85d7981af%3A0x8806e7dabc064e5f!2sThe%20Folklore%20Museum!5e0!3m2!1sen!2sjo!4v1615303925141!5m2!1sen!2sjo');
  new Activities ( 'Royal Automobile Museum','M','middle', 'handCraft','2','https://i0.wp.com/cushtravel.com/wp-content/uploads/2016/11/amman-attractions-royal-automobile-museum-1.jpg?fit=696%2C540&ssl=1','<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.1907395357202!2d35.82417501464305!3d31.9828444313603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca229b2067e73%3A0xfbb235e88924929f!2sThe%20Royal%20Automobile%20Museum!5e0!3m2!1sen!2sjo!4v1615303988783!5m2!1sen!2sjo');
  new Activities ( 'Children Museum','M','middle', 'handCraft','2','https://farisandfaris.com/knzcms/wp-content/uploads/2013/08/NCM3.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d433119.3368295809!2d35.03224280956538!3d31.994932366282605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca2284dccda7b%3A0x35cd4fd2e0299907!2sThe%20Children&#39;s%20Museum%20Jordan!5e0!3m2!1sen!2sjo!4v1615306202662!5m2!1sen!2sjo');
  new Activities ( 'Roman Nymphaeum','M','middle', 'historical','3','https://cdn.britannica.com/84/125884-050-FB16C7D6/Nymphaeum-Zwinger-Palace-Dresden-Ger.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.392011208268!2d35.93391021464214!3d31.95026023298583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5f9816e6ce21%3A0xd2347309c14cd351!2sRoman%20Nymphaeum%20Amman!5e0!3m2!1sen!2sjo!4v1615304144893!5m2!1sen!2sjo');
  new Activities ( 'Temple Of Hercules','M','middle', 'historical','3','https://upload.wikimedia.org/wikipedia/commons/3/37/Temple_of_Hercules_%28Amman%29_at_sunset.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.2613865992544!2d35.93261841464222!3d31.953804832809187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5f97ad082479%3A0x14324b67068cd24a!2sTemple%20of%20Hercules!5e0!3m2!1sen!2sjo!4v1615304204124!5m2!1sen!2sjo');
  //---------------------------------------------------------
  //------------------------------------------ Good / south
  new Activities ( 'CAMPING','G','south', 'nature','5','https://www.bookingjordan.com/uploads/cms/images/1588169928_176531473.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55542.153847328715!2d35.38705629565828!3d29.53429158942634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15007039ff2efa81%3A0x6573d38415085d0b!2sWadi%20Rum%20Camping!5e0!3m2!1sen!2sjo!4v1615304362267!5m2!1sen!2sjo');
  new Activities ( 'JEEP TOUR','G','south' , 'nature','5','https://media-cdn.tripadvisor.com/media/photo-s/05/73/f9/66/jeep-tour.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55542.07685790856!2d35.38705625261344!3d29.53443176802687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1500936df18ffb8b%3A0xad1d2dfc99e013fd!2sWadi%20Rum%20Jeep%20tour!5e0!3m2!1sen!2sjo!4v1615304460787!5m2!1sen!2sjo');
  new Activities ( 'Ayla Oasis','G','south', 'urban','4','https://pbs.twimg.com/media/CDl6EoMUMAEIXfn.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3471.0201652444553!2d34.98761481458134!3d29.544907048952894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1500719b4c70b39d%3A0x959c6520e828dba3!2sAyla%20Oasis!5e0!3m2!1sen!2sjo!4v1615304522075!5m2!1sen!2sjo');
  new Activities ( 'Aqaba South Gulf','G','south', 'urban','4','https://cf.bstatic.com/images/hotel/max1024x768/240/240460840.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1790178.9109722625!2d33.63870207179881!3d28.79586407911932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15ab2644d09a580b%3A0x9957699c5371ccf2!2sGulf%20of%20Aqaba!5e0!3m2!1sen!2sjo!4v1615304690887!5m2!1sen!2sjo');
  new Activities ( 'NATURE CINEMA','G','south', 'handCraft','2','https://www.milleworld.com/wp-content/uploads/2018/04/voxfeatured-600x405.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.29002984204!2d35.83476841464301!3d31.980152331494722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca184ef939131%3A0xd37700c2d1f56394!2sGrand%20Cinemas!5e0!3m2!1sen!2sjo!4v1615304941112!5m2!1sen!2sjo');
  new Activities ( 'WEAVING GOAT HAIRED TENTS','G','south', 'handCraft','2','https://i.pinimg.com/originals/53/d2/a6/53d2a667a0355bb6d41c2bad55a4ec96.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55536.625371795046!2d35.39436999572162!3d29.544356031026858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15009310e9429f93%3A0x9db704623d76ea36!2sMirage%20rum%20camp!5e0!3m2!1sen!2sjo!4v1615305143692!5m2!1sen!2sjo');
  new Activities ( 'Petra','G','south', 'historical','3','https://cdn.traveltalktours.com/wp-content/uploads/2017/08/petra.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.7911096801176!2d35.44217351460064!3d30.328459012055742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15016ef1703b6071%3A0x199bf908679a2291!2sPetra!5e0!3m2!1sen!2sjo!4v1615305200964!5m2!1sen!2sjo');
  new Activities ( 'Wadi Rum','G','south', 'historical','3','https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/fe/71/08/welcome-to-wadirum.jpg?w=900&h=-1&s=1','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3470.6434315118963!2d35.405412114581594!3d29.555876648442204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x150093a5d3b537b3%3A0xe9885592958b5d07!2sWadi%20Rum%20Protected%20Area!5e0!3m2!1sen!2sjo!4v1615305267318!5m2!1sen!2sjo');
  //---------------------------// Medium / middle
  new Activities ( 'Nepo Mountain','G','middle', 'nature','5','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw_8L4OEywz0ac82WyFIHHS9br51LZoVzpZw&usqp=CAU','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13568.313315076322!2d35.71652272486724!3d31.76834949366591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151cad7ed4c82179%3A0x131a1cf280726293!2sMount%20Nebo!5e0!3m2!1sen!2sjo!4v1615305341273!5m2!1sen!2sjo');
  new Activities ( 'Wadi Almujeb','G','middle' , 'nature','5','http://wonderstourism.com/wp-content/uploads/2013/05/wadi-al-mujib-canyon-Jordan1.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27239.139413416055!2d35.85818855930514!3d31.417089783960357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15035f0ea5c6ba4b%3A0x134cf1540cca68d0!2sWadi%20Mujib!5e0!3m2!1sen!2sjo!4v1615305377878!5m2!1sen!2sjo');
  new Activities ( 'National Archaeological Museum','G','middle', 'urban','4','http://2.bp.blogspot.com/-wxPaU8Fb2ak/UYmM3RmZDlI/AAAAAAAAB2s/BQWQBqBerCs/s1600/art6%255B1%255D.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6770.821749399679!2d35.92624872368049!3d31.949748328493875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5f64f2cffd33%3A0x7404d30801ef7a3b!2sJordan%20Archaeological%20Museum!5e0!3m2!1sen!2sjo!4v1615305471605!5m2!1sen!2sjo');
  new Activities ( 'Jordan National Gallery Of Fine Art','G','middle', 'urban','4','https://universes.art/fileadmin/_migrated/gridelement_uploads/mobile/00-IMG_2723-wide-800-700.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.1077499382327!2d35.913057114642314!3d31.95797343260131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5f9974b4f58f%3A0x8f90347a95206e3b!2sJordan%20National%20Gallery%20of%20Fine%20Arts!5e0!3m2!1sen!2sjo!4v1615305524307!5m2!1sen!2sjo');
  new Activities ( 'Jadal','G','middle', 'handCraft','2','https://universes.art/fileadmin/_processed_/1/3/csm_12-IMG_3262-A_c141eb3f67.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.2348093947667!2d35.92684241464223!3d31.954525982773205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5feef2a66a83%3A0x22ef266198b1e84d!2sjadal!5e0!3m2!1sen!2sjo!4v1615305612067!5m2!1sen!2sjo');
  new Activities ( 'Skyline Sushi Cooking Class','G','middle', 'handCraft','2','https://media-cdn.tripadvisor.com/media/photo-p/1a/6d/29/fe/thank-you-for-all-our.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.022775117795!2d35.90176571464244!3d31.960278832486374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca065494f9105%3A0xb5fc920daa48b808!2sThe%20Landmark%20Amman%20Hotel%20%26%20Conference%20Center!5e0!3m2!1sen!2sjo!4v1615305923982!5m2!1sen!2sjo');
  new Activities ( 'Roman Theater','G','middle', 'historical','3','https://select.jo/wp-content/uploads/2019/07/RomanTheatre.jpg.pagespeed.ce_.b4W_W1OBTs.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.3418170123837!2d35.93712521464211!3d31.951622332917974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca07139c70a21%3A0xc5b2f8903093b109!2sRoman%20Theater!5e0!3m2!1sen!2sjo!4v1615306009082!5m2!1sen!2sjo');
  new Activities ( 'Castel Mountain','G','middle', 'historical','3','https://img.theculturetrip.com/wp-content/uploads/2020/04/gettyimages-665393744.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55463833.65352027!2d0.07605709999999968!3d31.954283300000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5f96539bcc23%3A0x83d61bcf8e637e6d!2sAmman%20Citadel!5e0!3m2!1sen!2sjo!4v1615306085053!5m2!1sen!2sjo');
}


generateActivities ();



