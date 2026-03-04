import { groceryItems } from "./data.js";
import { createItems } from "./items.js";

let items = groceryItems;

// Render App
function render() {
  const itemsContainer = document.querySelector(".items");
  itemsContainer.innerHTML = "";

  const itemsElements = createItems(items);
  itemsContainer.appendChild(itemsElements);
}

// Remove Item
export function removeItem(itemId) {
  alert("Item Deleted Successfully!");
  items = items.filter((item) => item.id !== itemId);
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
