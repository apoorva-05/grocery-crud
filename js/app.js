import { groceryItems } from "./data.js";
import { createItems } from "./items.js";
import { createForm } from "./form.js";

let items = groceryItems;
let startEditGlobal;

function render() {
  const itemsContainer = document.querySelector(".items");
  itemsContainer.innerHTML = "";

  const itemsElements = createItems(
    items,
    removeItem,
    editCompleted,
    startEditGlobal,
  );

  itemsContainer.appendChild(itemsElements);
}

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
    item.id === id ? { ...item, name: newName } : item,
  );
  render();
}

function removeItem(id) {
  alert("Item Deleted Successfully!");
  items = items.filter((item) => item.id !== id);
  render();
}

function editCompleted(id) {
  items = items.map((item) =>
    item.id === id ? { ...item, completed: !item.completed } : item,
  );
  render();
}

// Initialize Form
const { form, startEdit } = createForm(addItem, updateItem);
startEditGlobal = startEdit;

document.getElementById("form-container").appendChild(form);

render();
