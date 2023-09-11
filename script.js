// alert("Loading")

function addNewWEField(){
    //console.log("Add new field")
    let newNode=document.createElement('textarea');
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute.add("rows",3);
    newNode.setAttribute.add("placeholder", "Enter here")

    let weOb=document.getElementsById("AQ");
    let weAddButtonOb=document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}


function addNewAqField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute.add("rows",3);
    newNode.setAttribute.add("placeholder", "Enter here")

    let aqOb=document.getElementsById("AQ");
    let aqAddButtonOb=document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);
    
}