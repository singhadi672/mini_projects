
var i=0;
function func1(){
    var item = document.getElementById("text").value;
    if(!item){
        alert("Please Enter a value!!!");
    }
    else{
    var node = document.createElement("li");
    var node1 = document.createElement("button");
    var clear = document.getElementById("clear");

    clear.addEventListener("click",()=>{
        node.remove();
    })
    node1.textContent = 'X';
    node1.style.margin = '10px';
    i++;
    node1.id = 'button' + i;

    node1.addEventListener("click",()=>{
        node.remove();
    });
    var textnode = document.createTextNode(item);
    node.appendChild(textnode);
    document.getElementById("list-item").appendChild(node).appendChild(node1);
}

}
