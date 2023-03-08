var bmiweight = document.getElementsByClassName("bmiweight");
// var normal = document.getElementsByClassName("normal");
// console.log(normal);


// if(Number.isInteger(height) && Number.isInteger(weight)){
    //     height = parseInt(height);
    //     weight = parseInt(weight);
    // } else{
    //     height = parseFloat(height);
    //     weight = parseFloat(weight);
    // }

function round_up(){
    let height = parseInt(document.getElementById("height").value);
    let weight = document.getElementById("weight").value;
    console.log(typeof height);
    if(height > 100){
        height /= 100;
    }
    console.log(height);
    // height = parseFloat(height);
    height *= height;
    // weight = parseFloat(weight);
    weight = weight/height;
    // console.log(weight);
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