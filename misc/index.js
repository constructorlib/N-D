// // const isNull = document.getElementById("height").value;
var underweight = document.getElementsByClassName("underweight");
// console.log(underweight);

// underweight.map((elem)=>elem.style.display = "flex");

function round_up(){
    let height = document.getElementById("height").value;
    height *= height;
    let weight = document.getElementById("weight").value;
    weight /= height;
    // alert(Math.round(weight));
    let weight_round = Math.round(weight);
    // return weight_round;
    console.log(weight_round);
    if(weight_round <= 18){
        for (let i = 0; i < underweight.length; i++) {
            underweight[i].style.visibility = "visible";
            // underweight[i].style.textalign = "center";
        }
    }
}
document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("btn-submit");
    button.addEventListener("click", function(event) {
    event.preventDefault();
    });
});