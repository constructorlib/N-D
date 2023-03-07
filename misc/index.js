// // const isNull = document.getElementById("height").value;
function round_up(){
    const underweight = document.getElementsByClassName("underweight");
    let height = document.getElementById("height").value;
    height *= height;
    let weight = document.getElementById("weight").value;
    weight /= height;
    // alert(Math.round(weight));
    let weight_round = Math.round(weight);
    // return weight_round;
    console.log(weight_round);
    if(weight_round <= 18){
        underweight.style.display = "flex";
    }
}
// Get the button element
var button = document.getElementById("btn-submit");

// Add a click event listener to the button
button.addEventListener("click", function(event) {
  // Prevent the default behavior of the button
  event.preventDefault();

  // Add your custom code here
  // ...
});