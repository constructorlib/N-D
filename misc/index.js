// const isNull = document.getElementById("height").value;
function round_up(){
    let height = document.getElementById("height").value;
    height *= height;
    let weight = document.getElementById("weight").value;
    weight /= height;
    // alert(Math.round(weight));
    let weight_round = Math.round(weight);
    return weight_round;
}