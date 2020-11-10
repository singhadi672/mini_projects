var i=0;


function func1(){
    
    var desc = document.getElementById("notes").value;
    if(!desc){
        alert("Please enter a note!");
    }
    else{

        var nodeMain = document.createElement("div");
        var header = document.createElement("h1");
        header.innerHTML = "Note " + (++i);
        
        var paragraph = document.createElement("p");
        var button = document.createElement("button");
        button.innerHTML = "View Full Note!";
        button.id = "viewFull";
        
        
        paragraph.innerHTML = desc;
        nodeMain.appendChild(header);
        nodeMain.appendChild(paragraph);
        nodeMain.appendChild(button);
        
        nodeMain.className = "box";
        document.getElementById("container").appendChild(nodeMain);

        document.getElementById("notes").value = "";

        var modal = document.getElementById("myModal");
        var btn = document.getElementById("viewFull");
        var span = document.getElementsByClassName("close")[0];
        document.getElementById("modalPara").innerHTML = desc;

        btn.addEventListener("click",()=>{
            modal.style.display = "block";
        })
          
        
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
          modal.style.display = "none";
        }
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        }
    }
    
}