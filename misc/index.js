var bmiweight = document.getElementsByClassName("bmiweight");
var bmi_link = document.getElementById("bmi_link");
function round_up(){
    let height = parseInt(document.getElementById("height").value);
    let weight = document.getElementById("weight").value;
    if(height > 100){
        height /= 100;
    }
    height *= height;
    weight = weight/height;
    let weight_round = Math.round(weight);
    if(weight_round <= 18){
        for (let i = 0; i < bmiweight.length; i++) {
            bmiweight[i].style.visibility = "visible";
        }
        bmiweight[0].innerHTML = "Your BMI is: " + weight_round;
        bmiweight[1].innerHTML = "It is on unhealthy level."  +
        " We recommend you to increase your calorie intake and diet.";
        bmi_link.href = "https://jcdfitness.com/2010/03/the-perfect-caloric-surplus/";
    }
    else if(weight_round > 18 && weight_round < 25){
        for (let i = 0; i < bmiweight.length; i++) {
            bmiweight[i].style.visibility = "visible";
        }
        bmiweight[0].innerHTML = "Your BMI is: " + weight_round;
        bmiweight[1].innerHTML = "It is on a normal level."  +
        " However, we still recommend you to manage your calorie intake to" +
        " not have future weight problems.";
        bmi_link.href = "https://www.healthline.com/nutrition/calorie-deficit";
    }
    else if(weight_round > 25){
        for (i = 0; i < bmiweight.length; i++){
            bmiweight[i].style.visibility = "visible";
        }
        bmiweight[0].innerHTML = "Your BMI is: "+ weight_round;
        bmiweight[1].innerHTML = "It's on unhealthy level, you are overweight. " +
        "You should decrease your calorie intake to not face further problems."
    }
}
document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("btn-submit");
    button.addEventListener("click", function(event) {
    event.preventDefault();
    });
});