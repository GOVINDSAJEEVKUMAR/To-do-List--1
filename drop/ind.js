const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function addTask(){
    if(inputBox.value ===''){
        alert("Fill the field please")
        console.log("fail")
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
        let span = document.createElement("span");
        
        span.innerText= "\u00d7";
       
        li.appendChild(span);
        console.log("success")
    }
    inputBox.value=" ";
    saveData();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove("span");
}
}, false);

// listContainer.addEventListener('click', (e) => {
//     console.log("delete");
//     document.querySelector('.checked').removeChild("li");
//   });


function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

