var bmiweight = document.getElementsByClassName("bmiweight");
// var normal = document.getElementsByClassName("normal");
// console.log(normal);


function round_up(){
    let height = document.getElementById("height").value;
    height = parseInt(height);
    height *= height;
    let weight = document.getElementById("weight").value;
    weight = parseInt(weight);
    weight = weight/height;
    console.log(weight);
    let weight_round = Math.round(weight);
    // console.log(weight_round);
    if(weight_round <= 18){
        for (let i = 0; i < bmiweight.length; i++) {
            bmiweight[i].style.visibility = "visible";
        }
        bmiweight[0].innerHTML = "12313";


    } 
}
document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("btn-submit");
    button.addEventListener("click", function(event) {
    event.preventDefault();
    });
});