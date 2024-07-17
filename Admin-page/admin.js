const itemlist = document.getElementById("item-list")

function displayItems() {
     let namestored = JSON.parse(localStorage.getItem("users"));
     
        for(let i = 0;i<namestored.length ;i++)
          {
         document.getElementById("name").innerHTML = namestored[i].firstName;
          }
      
    const itemsFromStorage = JSON.parse(localStorage.getItem("items"));
    itemsFromStorage.forEach((item) => additemtoDom(item));

  }
  
document.addEventListener("DOMContentLoaded", displayItems);


function additemtoDom(item){

      let li = document.createElement("li");
     li.appendChild(document.createTextNode(item));

      const divicons = document.createElement("div");
      divicons.classList.add("flex");
      li.appendChild(divicons);

      const acceptbutton = acceptButton("approve-item btn-link text-green");
     divicons.appendChild(acceptbutton);

     const rejectbutton = rejectButton("remove-item btn-link text-red");
      divicons.appendChild(rejectbutton);
    
      itemlist.appendChild(li)
}

function acceptButton(c) {
  const editbtn = document.createElement("button");
  editbtn.className = c;
  const editicon = acceptIcon("fa-solid fa-check");
  editbtn.appendChild(editicon);
  return editbtn;
}
function acceptIcon(c) {
  const acceptIcon = document.createElement("i");
  acceptIcon.className = c;
  return acceptIcon;
}

function rejectButton(classes) {
  const button = document.createElement("button");
  button.className = classes;
  const icon = rejectIcon("fa-solid fa-xmark");
  button.appendChild(icon);
  return button;
}

function rejectIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
}


document.addEventListener("click" , approveitem);

function approveitem(e){

  if(e.target.parentElement.classList.contains("approve-item")){
    Approveitemtostorage(e.target.parentElement.parentElement.parentElement);
  }
  if(e.target.parentElement.classList.contains("remove-item")){
    Rejectitemtostorage(e.target.parentElement.parentElement.parentElement);
  }
}
// Approve Items
function Approveitemtostorage(item){
    const items = item.firstChild.textContent;

    const itemFromStorage = getAproveItems();

    itemFromStorage.push(items);

    localStorage.setItem("Approve-items" , JSON.stringify(itemFromStorage));
}

function getAproveItems() {
  let ApproveItemsStorage;

  if (localStorage.getItem("Approve-items") === null) {
    ApproveItemsStorage = [];
  } else {
    ApproveItemsStorage = JSON.parse(localStorage.getItem("Approve-items"));
  }

  return ApproveItemsStorage;
}

//reject items
function Rejectitemtostorage(item){
  const items = item.firstChild.textContent;

  const RejectItems = getRejectItems();

  RejectItems.push(items);

  localStorage.setItem("Reject-items" , JSON.stringify(RejectItems));
}
function getRejectItems() {
  let RejectItems;

  if (localStorage.getItem("Reject-items") === null) {
    RejectItems = [];
  } else {
    RejectItems = JSON.parse(localStorage.getItem("Reject-items"));
  }

  return RejectItems;
}





