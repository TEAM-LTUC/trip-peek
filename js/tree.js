
const treePlanConnector= JSON.parse (localStorage.getItem('planA'));
console.log( treePlanConnector);


function render() {

  let h1Element = document.getElementById("h1");
  h1Element.textContent = treePlanConnector.planDays[0].planHotel.name;
  let p2Element = document.getElementById("location1");
  p2Element.textContent = "Location :"+treePlanConnector.planDays[0].planHotel.location;


  let h2Element = document.getElementById("h2");
  h2Element.textContent = treePlanConnector.planDays[0].planResturent[0].name;
  let p4Element = document.getElementById("location2");
  p4Element.textContent = "Location :"+treePlanConnector.planDays[0].planResturent[0].location;



  let h3Element = document.getElementById("h3");
  h3Element.textContent = treePlanConnector.planDays[0].planActivities[0].name;
  let p5Element = document.getElementById("time3");
  p5Element.textContent = "Expected Time Duration : " + treePlanConnector.planDays[0].planActivities[0].timeNeeded + " Hours ";
  let p33Element=document.getElementById("cat1");
  p33Element.textContent= "Catogery : "+treePlanConnector.planDays[0].planActivities[0].catogery;
  let p6Element = document.getElementById("location3");
  p6Element.textContent = "Location :"+treePlanConnector.planDays[0].planActivities[0].location;



  let h4Element = document.getElementById("h4");
  h4Element.textContent = treePlanConnector.planDays[0].planActivities[1].name;
  let p7Element = document.getElementById("time4");
  p7Element.textContent = "Expected Time Duration : " + treePlanConnector.planDays[0].planActivities[1].timeNeeded + " Hours ";
  let p34Element=document.getElementById("cat2");
  p34Element.textContent= "Catogery : "+treePlanConnector.planDays[0].planActivities[1].catogery;
  let p8Element = document.getElementById("location4");
  p8Element.textContent = "Location :"+treePlanConnector.planDays[0].planActivities[1].location;



  let h5Element = document.getElementById("h5");
  h5Element.textContent = treePlanConnector.planDays[0].planActivities[2].name;
  let p9Element = document.getElementById("time5");
  p9Element.textContent = "Expected Time Duration : " + treePlanConnector.planDays[0].planActivities[2].timeNeeded + " Hours ";
  let p35Element=document.getElementById("cat3");
  p35Element.textContent= "Catogery : "+treePlanConnector.planDays[0].planActivities[2].catogery;
  let p10Element = document.getElementById("location5");
  p10Element.textContent = "Location : "+treePlanConnector.planDays[0].planActivities[2].location;



  let h6Element = document.getElementById("h6");
  h6Element.textContent = treePlanConnector.planDays[0].planResturent[1].name;
  let p12Element = document.getElementById("location6");
  p12Element.textContent = "Location : "+treePlanConnector.planDays[0].planResturent[1].location;




}

function hotelStore(event){
  localStorage.removeItem('renderme');
  if (event.target.innerHTML === treePlanConnector.planDays[0].planHotel.name){
    const myHotel = treePlanConnector.planDays[0].planHotel;
    localStorage.setItem('renderme',JSON.stringify(myHotel));
    console.log(event);

  }
  if (event.target.textContent === treePlanConnector.planDays[0].planResturent[0].name){
    const myRest = treePlanConnector.planDays[0].planResturent[0];
    localStorage.setItem('renderme',JSON.stringify(myRest));
    console.log(event);

  }
  if (event.target.innerHTML === treePlanConnector.planDays[0].planResturent[1].name){
    const myRest = treePlanConnector.planDays[0].planResturent[1];
    localStorage.setItem('renderme',JSON.stringify(myRest));
    console.log(event);

  }
  if (event.target.innerHTML === treePlanConnector.planDays[0].planActivities[0].name){
    const myRest = treePlanConnector.planDays[0].planActivities[0];
    localStorage.setItem('renderme',JSON.stringify(myRest));
    console.log(event);

  }
  if (event.target.innerHTML === treePlanConnector.planDays[0].planActivities[1].name){
    const myRest = treePlanConnector.planDays[0].planActivities[1];
    localStorage.setItem('renderme',JSON.stringify(myRest));
    console.log(event);

  }
  if (event.target.innerHTML === treePlanConnector.planDays[0].planActivities[2].name){
    const myRest = treePlanConnector.planDays[0].planActivities[2];
    localStorage.setItem('renderme',JSON.stringify(myRest));
    console.log(event);

  }
  
  window.open('activity.html','_blank');

}

render();
document.getElementById('h1').onclick = hotelStore;
document.getElementById('h2').onclick = hotelStore;
document.getElementById('h3').onclick = hotelStore;
document.getElementById('h4').onclick = hotelStore;
document.getElementById('h5').onclick = hotelStore;
document.getElementById('h6').onclick = hotelStore;

