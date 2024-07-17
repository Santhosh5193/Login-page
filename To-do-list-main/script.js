const itemform = document.getElementById("item-form");
const iteminput = document.getElementById("item-input");
const itemlist = document.getElementById("item-list");
const clearBtn = document.getElementById("clear");
const formBtn = itemform.querySelector("button");
let isEditMode = false;

function displayItems() {
  const itemsFromStorage = getItemsFromStorage();
  itemsFromStorage.forEach((item) => additemtoDom(item));
  checkUI();

  let itemstored = JSON.parse(localStorage.getItem("items"));
  let ApproveList = JSON.parse(localStorage.getItem("Approve-items"));
  let RejectList = JSON.parse(localStorage.getItem("Reject-items"));
  
  
  document.getElementsByClassName("absolute").innerHTML = "ApproveList";
    for (let i=0 ; i<ApproveList.length ;i++){
      console.log(ApproveList[i]);
    }
}

function onclickAddItems(e) {
  e.preventDefault();

  const newItem = iteminput.value;

  if (newItem === "") {
    alert("Please Enter the Item");
    return;
  }

  if (isEditMode) {
    const itemtoedit = itemlist.querySelector(".edit-mode");

    removeItemFromStorage(itemtoedit.textContent);
    itemtoedit.classList.remove("edit-mode");
    itemtoedit.remove();
    isEditMode = false;
  }

  additemtoDom(newItem);

  additemtostorage(newItem);

  checkUI();

  iteminput.value = "";
}

//add items to dom
function additemtoDom(item) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));

  const pendingstate = document.createElement("button");
  pendingstate.classList.add("absolute");
  pendingstate.innerHTML = "pending...";
  li.appendChild(pendingstate)

  const divicons = document.createElement("div");
  divicons.classList.add("flex");
  li.appendChild(divicons);

  const editbutton = createeditButton("edit-item btn-link text-green");
  divicons.appendChild(editbutton);

  const button = createButton("remove-item btn-link text-red");
  divicons.appendChild(button);

  itemlist.addEventListener("click" ,removeicon);


  itemlist.appendChild(li);
}

function removeicon(){
  const removeicon = document.getElementsByClassName("edit-mode")[0]?.children[1].children[1];
    removeicon.remove();
}



function createeditButton(c) {
  const editbtn = document.createElement("button");
  editbtn.className = c;
  const editicon = createeditIcon("fa-solid fa-edit");
  editbtn.appendChild(editicon);
  return editbtn;

}
function createeditIcon(c) {
  const editicon = document.createElement("i");
  editicon.className = c;
  return editicon;
}

function createButton(classes) {
  const button = document.createElement("button");
  button.className = classes;
  const icon = createIcon("fa-solid fa-xmark");
  button.appendChild(icon);
  return button;
}

function createIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
}

//add items to local storage
function additemtostorage(item) {
  const itemFromStorage = getItemsFromStorage();

  itemFromStorage.push(item);

  localStorage.setItem("items", JSON.stringify(itemFromStorage));
}
//get items from storage
function getItemsFromStorage() {
  let itemFromStorage;

  if (localStorage.getItem("items") === null) {
    itemFromStorage = [];
  } else {
    itemFromStorage = JSON.parse(localStorage.getItem("items"));
  }

  return itemFromStorage;
}

// remove items
function onclickremoveItems(e) {
  if (e.target.parentElement.classList.contains("remove-item")) {
  removeItem(e.target.parentElement.parentElement.parentElement);
  }

}

function removeItem(item) {
  if (confirm("Are you sue to delete")) {
    item.remove();

    removeItemFromStorage(item.firstChild.textContent);

    checkUI();
  }
}
//remove item from storage
function removeItemFromStorage(item) {
  let itemFromStorage = getItemsFromStorage();

  itemFromStorage = itemFromStorage.filter((i) => i !== item);

  localStorage.setItem("items", JSON.stringify(itemFromStorage));
}

//edit item
function onclickEditItems(e) {
  if (e.target.parentElement.classList.contains("edit-item")) {
    setItemToEdit(e.target.parentElement.parentElement.parentElement);
  }
}
function setItemToEdit(item) {
  isEditMode = true;

  itemlist
    .querySelectorAll("li")
    .forEach((i) => i.classList.remove("edit-mode"));

  item.classList.add("edit-mode");
  formBtn.innerHTML = `<i class="fa-solid fa-pen"></i> Update Item`;
  formBtn.style.background = "green";
  iteminput.value = item.firstChild.textContent;
}

//clear items
function clearItems() {
  if(confirm("Are you sure to Delete all items")){
    while (itemlist.firstChild) {
      itemlist.removeChild(itemlist.firstChild);
    }
  }
  checkUI();
}

//check UI
function checkUI() {
  const li = itemlist.querySelectorAll("li");
  if (li.length === 0) {
    clearBtn.style.display = "none";
  } else {
    clearBtn.style.display = "block";
  }

  formBtn.innerHTML = `<i class="fa-solid fa-plus"></i> Add Item`;
  formBtn.style.background = "black";
}

// event Listners
itemform.addEventListener("submit", onclickAddItems);
itemlist.addEventListener("click", onclickremoveItems);
itemlist.addEventListener("click", onclickEditItems);
clearBtn.addEventListener("click", clearItems);
document.addEventListener("DOMContentLoaded", displayItems);

checkUI();
