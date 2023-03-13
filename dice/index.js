function roll(){
    let dice_1 = Math.floor(Math.random() * 6 + 1); 
    let dice_2 = Math.floor(Math.random() * 6 + 1); 
    let refresh = document.getElementsByClassName("refresher")[0];
    let d1 = document.getElementsByClassName("img1")[0];
    let d2 = document.getElementsByClassName("img2")[0];
    d1.src = "images/dice"+dice_1+".png";
    d2.src = "images/dice"+dice_2+".png";
    if(dice_1 > dice_2){
        refresh.innerHTML = "Player 1 wins!";
    } else if(dice_2 > dice_1) {
        refresh.innerHTML = "Player 2 wins!";
    }
    else{
        refresh.innerHTML = "Draw, reroll again!";
    }
    console.log(dice_1 + ", " + dice_2);
    var btn = document.getElementById("btn");
    btn.reload();
}
roll();