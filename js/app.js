import { createItems } from "./items.js";
import { createForm } from "./form.js";

const STORAGE_KEY = "grocery-items";

let items = getFromLocalStorage();
let startEditGlobal;

// ------------------ STORAGE FUNCTIONS ------------------

function saveToLocalStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

function getFromLocalStorage() {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

// ------------------ RENDER ------------------

function render() {
  const itemsContainer = document.querySelector(".items");
  itemsContainer.innerHTML = "";

  const itemsElements = createItems(
    items,
    removeItem,
    toggleCompleted,
    startEditGlobal
  );

  itemsContainer.appendChild(itemsElements);
  saveToLocalStorage();
}

// ------------------ CRUD FUNCTIONS ------------------

function addItem(name) {
  items.push({
    id: Date.now(),
    name,
    completed: false,
  });

  render();
}

function updateItem(id, newName) {
  items = items.map((item) =>
    item.id === id ? { ...item, name: newName } : item
  );

  render();
}

function removeItem(id) {
  items = items.filter((item) => item.id !== id);
  render();
}

function toggleCompleted(id) {
  items = items.map((item) =>
    item.id === id
      ? { ...item, completed: !item.completed }
      : item
  );

  render();
}

// ------------------ CLEAR ALL ------------------

function clearAll() {
  items = [];
  render();
}

// ------------------ INITIALIZE FORM ------------------

const { form, startEdit } = createForm(addItem, updateItem);
startEditGlobal = startEdit;

document.getElementById("form-container").appendChild(form);

// ------------------ ADD CLEAR BUTTON ------------------

const clearBtn = document.createElement("button");
clearBtn.textContent = "Clear All";
clearBtn.className = "clear-btn";
clearBtn.addEventListener("click", clearAll);

document.getElementById("form-container").appendChild(clearBtn);

render();