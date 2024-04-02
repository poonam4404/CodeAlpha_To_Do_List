const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function AddTask()
{
    if(inputBox.value == ' '){
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        
       }
       inputBox.value = "";
}

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    
    }
    else if(e.target.tagName === "span"){
        e.target.parentElement.remove();

    }
}),false;