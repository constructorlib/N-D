var underweight = document.getElementsByClassName("underweight");
var normal = document.getElementsByClassName("normal");
console.log(normal);


function round_up(){
    let height = document.getElementById("height").value;
    height = parseInt(height)
    height *= height;
    let weight = document.getElementById("weight").value;
    weight = parseInt(weight);
    weight = height/weight;
    let weight_round = Math.round(weight);
    console.log(weight_round);
    // return weight_round;
    console.log(weight_round);
    if(weight_round <= 18){
        for (let i = 0; i < underweight.length; i++) {
            underweight[i].style.visibility = "visible";
        }
    } 
    else if(weight_round > 18 ){
        for (let i = 0; i < normal.length; i++) {
            normal[i].style.display = "flex";
        }
    }
}
document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("btn-submit");
    button.addEventListener("click", function(event) {
    event.preventDefault();
    });
});