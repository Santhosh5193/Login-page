const itemform = document.getElementById("item-form");
const iteminput = document.getElementById("item-input");
const itemlist = document.getElementById("item-list");
const clearBtn = document.getElementById("clear");
const formBtn = itemform.querySelector("button");
let isEditMode = false;

iteminput.addEventListener("keydown" , (e) => {
  if(e.keyCode === 32){
    e.preventDefault();
  }
})

function displayItems() {
  const itemsFromStorage = getItemsFromStorage();
  itemsFromStorage.forEach((item) => additemtoDom(item));
 
  let ApproveList = JSON.parse(localStorage.getItem("Approve-items")) || [];
  let RejectList = JSON.parse(localStorage.getItem("Reject-items")) || [];
  
  let itemtxt = document.getElementsByClassName("text");

    for (let i=0 ; i<ApproveList.length ;i++){
      for (let j=0 ; j<itemtxt.length ;j++){
        if(ApproveList[i] === itemtxt[j].innerHTML){
          let item = itemtxt[j].parentElement.children[1];
          item.innerHTML = "Approve";
          item.style.background = "green";
          item.style.color = "white";
        }
      }
    }
    for (let i=0 ; i<RejectList.length ;i++){
      for (let j=0 ; j<itemtxt.length ;j++){
        if(RejectList[i] === itemtxt[j].innerHTML){
          let item = itemtxt[j].parentElement.children[1];
          item.innerHTML = "Reject";
          item.style.background = "red";
          item.style.color = "white";
        }
      }
    }

    checkUI();

    localStorage.removeItem("Approve-items");
    localStorage.removeItem("Reject-items");
}

function onclickAddItems(e) {
  e.preventDefault();

  const newItem = iteminput.value;

  if (newItem === "") {
    Swal.fire({
      title: "please enter the item",
      showCancelButton: true,
    })
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
  if(iteminput.value !== ""){
    const li = document.createElement("li");
  
  const text = `<span class=text>${item}</span> 
  <button class="absolute">pending...</button>
  <div class="flex">
    <button class = "edit-item btn-link text-green">
      <i class = "fa-solid fa-edit"> </i>
    <button class = "remove-item btn-link text-red">
      <i class = "fa-solid fa-xmark delete-button"></i>
  </div>`;
  li.innerHTML = text;

  itemlist.appendChild(li);
  }

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
    removeicon(e.target.parentElement.parentElement.children[1].children[0]);
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
   removeItemFromStorage(item.firstChild.textContent);
   clearBtn.style.display = "none";
}
function removeicon(item){   
  itemlist
  .querySelectorAll("i.delete-button")
  .forEach((i) =>
   i.classList.add("fa-xmark"));

  item.classList.remove("fa-xmark");
 }

 
//clear items
function clearItems() {

  if(confirm("are you sure to clear these items")){
    while (itemlist.firstChild) {
      itemlist.removeChild(itemlist.firstChild);
    }
    localStorage.removeItem("items");
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
