const timer = document.getElementById('text')
let count = 0;
let myObj;
function startTimer(){
    myObj = setInterval(()=> {
        timer.innerHTML = count;
        count++;
    }, 1000)
}
function stopTimer(){
    clearInterval(myObj);
}

