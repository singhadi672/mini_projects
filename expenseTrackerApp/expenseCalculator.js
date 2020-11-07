let sum = 0;
function func2(){

    var name = document.getElementById("Name").value;
    var date = document.getElementById("date").value;
    let amount = document.getElementById("amount").value;

    if(!name||!date||!amount){
        alert("Please Enter the relevent info");
    }
    else{
        sum = sum + parseInt(amount);
        var table = document.getElementById("tableBody");
        var node1 = document.createElement("button");
        node1.textContent = "X";
        node1.style.width = '30px';
        
        node1.id = 'cancelbutton';
        var row = table.insertRow(-1);
        row.id = 'row';
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = `${name}`;
        cell2.innerHTML = `${date}`;
        cell3.innerHTML = `$ ${amount}`;
        cell4.append(node1);

        document.getElementById("total").innerHTML = "$ " + sum;

        node1.addEventListener("click",()=>{
            row.remove();
            sum = sum-parseInt(amount);
            document.getElementById("total").innerHTML ="$ " + sum;
        })
    }    

}