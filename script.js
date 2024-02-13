// console.log("hello")
const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('#list-container');

const rowBtn= document.querySelector(".row button");

rowBtn.addEventListener("click",()=>{
    // console.log("btn")
    if(inputBox.value== ""){
        alert("Please write something");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        inputBox.value = "";

        let span = document.createElement("span");
        span.innerHTML = "&#10005;";
        li.appendChild(span)
    }
    setData();
});

listContainer.addEventListener("click",(e)=>{
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked");
        setData();
    }else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        setData();
    }
})

//set Data in localStorage
function setData(){
    //ul ka sara data save kr rhe h 
    localStorage.setItem("data",listContainer.innerHTML);
}

//get data from localStoreg

function getData(){
    listContainer.innerHTML = localStorage.getItem("data");
} 

getData();