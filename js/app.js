import { groceryItems } from "./data.js";
import { createItems } from "./items.js";

let items = groceryItems;

// Render App
function render() {
  const itemsContainer = document.querySelector(".items");
  itemsContainer.innerHTML = "";

  const itemsElements = createItems(items, removeItem, editCompleted);
  itemsContainer.appendChild(itemsElements);
}

// Remove Item
function removeItem(itemId) {
  items = items.filter((item) => item.id !== itemId);

  alert("Item Deleted Successfully!");

  render();
}

// Toggle Completed
export function editCompleted(itemId) {
  items = items.map((item) =>
    item.id === itemId ? { ...item, completed: !item.completed } : item,
  );
  render();
}

// Initialize
render();
