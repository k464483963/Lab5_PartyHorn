// main.js
// TODO
let error = new Error("Something wrong lol");
class ValErr extends Error{
    constructor(message){
        super(message);
        this.name = "ValErr";
    }
}

function check(){
    throw new ValidationError("Wrong");
}


try{
let get = document.getElementById('volume-slider');
let get2 = document.getElementById('volume-number');
let get3 = document.getElementById('volume-image');
let button = document.getElementById("honk-btn");
let error = document.getElementById("error2");
let log = document.getElementById("log");
let table = document.getElementById("table");
let dir = document.getElementById("dir");
let node = document.getElementById("node");
let group = document.getElementById("group");
let time = document.getElementById("time");
let track = document.getElementById("track");


track.addEventListener("click",myFunction9);

function myFunction9(){
   const first = () => {second();};
   const second = () => {third();};
   const third = () => {here();};
   const here = () => {console.trace();};
   first();
    event.preventDefault();
}

group.addEventListener("click",myFunction7);

time.addEventListener("click",myFunction8);

function myFunction8(){
   console.time();
   for(var i = 0;i<5000;i++){
       let num = i ** 2;
   }
   console.timeEnd();
    event.preventDefault();
}

const label = 'This is group label';

function myFunction7(){
    console.group(label);
    console.info('This');
    console.info('is');
    console.info('me');
    console.groupEnd(label);
    event.preventDefault();
}

node.addEventListener("click",myFunction6);

function myFunction6(){
    console.dirxml(document);
    event.preventDefault();
}

dir.addEventListener("click",myFunction5);

function myFunction5(){
    console.dir(document.head);
    event.preventDefault();
}

error.addEventListener("click",myFunction2);

function myFunction2(){
    console.error("sorry this is not right.");
    event.preventDefault();
}

log.addEventListener("click",myFunction3);

function myFunction3(){
    console.log("Yeah.there you go");
    event.preventDefault();
}

table.addEventListener("click",myFunction4);

function myFunction4(){
    console.table([
        {
            first:'Hanjie',
            last:'Zhan',
        },
        {
            first:'Luozhi',
            last:'Yong',
        },
    ]

    );
    event.preventDefault();
}




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

}
catch(err){
    alert(error);
    alert(err.name);
}
