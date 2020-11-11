let button  = document.getElementById("btn");

function func1(){

    let text = document.getElementById("text").value;
    let count = text.match(/[aeiou]/gi);
    if(!count){
        count = 0;
    }
    else{
        count = count.length;
    }
    alert(`number of vowels = ${count}`);
    document.getElementById("text").value = "";
}

button.addEventListener("click",func1);
