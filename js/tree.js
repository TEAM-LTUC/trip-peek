


function render() {

    let h1Element = document.getElementById("h1");
    h1Element.textContent = plan.planDays[0].planHotel.name;
    let p2Element = document.getElementById("location1");
    p2Element.textContent = plan.planDays[0].planHotel.location;


    let h2Element = document.getElementById("h2");
    h2Element.textContent = plan.planDays[0].planResturent[0].name;
    let p4Element = document.getElementById("location2");
    p4Element.textContent = plan.planDays[0].planResturent[0].location;



    let h3Element = document.getElementById("h3");
    h3Element.textContent = plan.planDays[0].planActivities[0].name;
    let p5Element = document.getElementById("time3");
    p5Element.textContent = "Expected Time Duration : " + plan.planDays[0].planActivities[0].timeNeeded + " Hours ";
    let p6Element = document.getElementById("location3");
    p6Element.textContent = plan.planDays[0].planActivities[0].location;



    let h4Element = document.getElementById("h4");
    h4Element.textContent = plan.planDays[0].planActivities[1].name;
    let p7Element = document.getElementById("time4");
    p7Element.textContent = "Expected Time Duration : " + plan.planDays[0].planActivities[1].timeNeeded + " Hours ";
    let p8Element = document.getElementById("location4");
    p8Element.textContent = plan.planDays[0].planActivities[1].location;



    let h5Element = document.getElementById("h5");
    h5Element.textContent = plan.planDays[0].planActivities[2].name;
    let p9Element = document.getElementById("time5");
    p9Element.textContent = "Expected Time Duration : " + plan.planDays[0].planActivities[2].timeNeeded + " Hours ";
    let p10Element = document.getElementById("location5");
    p10Element.textContent = plan.planDays[0].planActivities[2].location;



    let h6Element = document.getElementById("h6");
    h6Element.textContent = plan.planDays[0].planResturent[1].name;
    let p12Element = document.getElementById("location6");
    p12Element.textContent = plan.planDays[0].planResturent[1].location;




}

console.log(render());


render();


