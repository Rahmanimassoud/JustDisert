
// function to remove the join button
function removeJoin(e){
    e.remove();
}

// function to read the message from search box and display it as an alert
function alertGo(){
    let element = document.querySelector("#go");
    console.log(element.value);
    alert("You are searching for " + element.value);
}

// function to increase the count of likes
function like(id){
    let element = document.querySelector(id);
    console.log(element.innerText);
    element.innerText = parseInt(element.innerText) + 1; //this is called parsing, where we can change text to integer. we used it cuz we said innerText

}

// =================Function to add and remove shadow
function addShadow(element){ 
    element.classList.add("shadow");
}

function removeShadow(element){
    element.classList.remove("shadow");
}