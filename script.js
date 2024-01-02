let sentence = document.getElementById('sentence');
let input = document.getElementById('input');
let time = document.getElementById('Time');
let start = document.getElementById('start');
let end = document.getElementById('end');

let TIME = 10, num, old_num, speed;

let arr = [
    'Happy New Year!',
    'Happy Birthday!'
]

time.innerHTML = TIME;


function choosenum(){
    num = Math.floor(Math.random()*arr.length);
    check1()
}

function check1(){
    if(num == old_num){
        choosenum();
    }
}

function timeChange(){
    if(TIME > 0){
        TIME --;
        time.innerHTML = TIME;
        let lenght = arr[num].length;
        speed = lenght / (10 - TIME);
    } 
    else check();
}

function check(){
    if(arr[num] == input.value){
        alert(`You win. Your speed is ${speed}`)
    } 
    else alert("You lose!")
}

function main(){
    setInterval(timeChange, 1000);
}

start.addEventListener("click", ()=>{
    main();
    choosenum();
    sentence.innerHTML = arr[num];
    old_num = num;
})

end.addEventListener("click", ()=>{
    clearInterval(timeChange());
    check();
})