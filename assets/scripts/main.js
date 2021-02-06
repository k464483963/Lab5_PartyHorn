// main.js
// TODO

let get = document.getElementById('volume-slider');
let get2 = document.getElementById('volume-number');
let get3 = document.getElementById('volume-image');
let button = document.getElementById("honk-btn");

let car = document.getElementById("radio-car-horn");
let air = document.getElementById("radio-air-horn");
let party = document.getElementById("radio-party-horn");
let ima = document.getElementById("sound-image");
let horn = document.getElementById("horn-sound");
let mul = 0.01;

car.addEventListener("click",cause);
air.addEventListener("click",cause2);
party.addEventListener("click",cause3);


get.addEventListener('input',updateValue2);
get2.addEventListener('input',updateValue);

function updateValue(){
    get.value = get2.value;
    if(getRange(get2.value,0,0)){
        get3.src="./assets/media/icons/volume-level-0.svg";
        horn.volume = get2.value*mul;
        button.disabled = true;
    }
    else if(getRange(get2.value,1,33)){
        get3.src="./assets/media/icons/volume-level-1.svg";
        horn.volume = get2.value*mul;
        button.disabled = false;
    }
    else if(getRange(get2.value,34,66)){
        get3.src="./assets/media/icons/volume-level-2.svg";
        horn.volume = get2.value*mul;
        button.disabled = false;
    }
    else if(getRange(get2.value,67,100)){
        get3.src="./assets/media/icons/volume-level-3.svg";
        horn.volume = get2.value*mul;
        button.disabled = false;
    
    }
}

function updateValue2(){
    get2.value = get.value;
    if(getRange(get.value,0,0)){
        get3.src="./assets/media/icons/volume-level-0.svg";
        horn.volume = get.value*mul;
        button.disabled = true;
    }
    else if(getRange(get.value,1,33)){
        get3.src="./assets/media/icons/volume-level-1.svg";
        horn.volume = get.value*mul;
        button.disabled = false;
    }
    else if(getRange(get.value,34,66)){
        get3.src="./assets/media/icons/volume-level-2.svg";
        horn.volume = get.value*mul;
        button.disabled = false;
    }
    else if(getRange(get.value,67,100)){
        get3.src="./assets/media/icons/volume-level-3.svg";
        horn.volume = get.value*mul;
        button.disabled = false;
    }

}

function getRange(x,min,max){
    return x>=min && x<=max;
}

function cause(){
    ima.src = "./assets/media/images/car.svg";
    horn.src = "./assets/media/audio/car-horn.mp3";
}

function cause2(){
    ima.src = "./assets/media/images/air-horn.svg";
    horn.src = "./assets/media/audio/air-horn.mp3";
}

function cause3(){
    ima.src = "./assets/media/images/party-horn.svg";
    horn.src = "./assets/media/audio/party-horn.mp3";
}


button.addEventListener("click",myFunction);

function myFunction(){
   horn.play();
    event.preventDefault();
}


