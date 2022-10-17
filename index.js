let inputIn = document.querySelector('.input-in , .nav_down_input-in');
let button = document.querySelector('.input-in_btn , nav_down-btn');

let input = document.querySelector('.nav_down_input-in');
let btn = document.querySelector('.nav_down-btn');


button.onclick = function() {
    console.log(inputIn.value);
}

btn.onclick = function() {
    console.log(input.value);
}