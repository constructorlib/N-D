var bmiweight = document.getElementsByClassName("bmiweight");
// var normal = document.getElementsByClassName("normal");
// console.log(normal);


function round_up(){
    let height = document.getElementById("height").value;
    height = parseFloat(height);
    height *= height;
    let weight = document.getElementById("weight").value;
    weight = parseFloat(weight);
    weight = weight/height;
    console.log(weight);
    let weight_round = Math.round(weight);
    if(weight_round <= 18){
        for (let i = 0; i < bmiweight.length; i++) {
            bmiweight[i].style.visibility = "visible";
        }
        bmiweight[0].innerHTML = "Your BMI is: " + weight_round;
        bmiweight[1].innerHTML = "It is on unhealthy level."  +
        " We recommend you to increase your calorie intake and diet.";
    }
    else if(weight_round > 18 && weight_round != 25){
        for (let i = 0; i < bmiweight.length; i++) {
            bmiweight[i].style.visibility = "visible";
        }
        bmiweight[0].innerHTML = "Your BMI is: " + weight_round;
        bmiweight[1].innerHTML = "It is on a normal level."  +
        " However, we still recommend you to manage your calorie intake to" +
        " not have future weight problems.";
    }
}
document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("btn-submit");
    button.addEventListener("click", function(event) {
    event.preventDefault();
    });
});