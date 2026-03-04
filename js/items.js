import { createSingleItem } from "./single-item.js";

export function createItems(itemsArray, removeItem, editCompleted) {
  const fragment = document.createDocumentFragment();

  itemsArray.forEach((item) => {
    const itemElement = createSingleItem(item, removeItem, editCompleted);
    fragment.appendChild(itemElement);
  });

  return fragment;
}
