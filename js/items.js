import { createSingleItem } from "./single-item.js";

export function createItems(itemsArray) {
  const fragment = document.createDocumentFragment();

  itemsArray.forEach((item) => {
    const itemElement = createSingleItem(item);
    fragment.appendChild(itemElement);
  });

  return fragment;
}
