export function createSingleItem(item, removeItem, editCompleted) {
  const div = document.createElement("div");
  div.className = "single-item";

  if (item.completed) {
    div.classList.add("completed");
  }

  div.innerHTML = `
    <input type="checkbox" ${item.completed ? "checked" : ""} />
    <p>${item.name}</p>
    <button class="btn icon-btn edit-btn" type="button">
      <i class="fa-regular fa-pen-to-square"></i>
    </button>
    <button class="btn icon-btn remove-btn" type="button">
      <i class="fa-regular fa-trash-can"></i>
    </button>
  `;

  const removeBtn = div.querySelector(".remove-btn");
  removeBtn.addEventListener("click", () => {
    removeItem(item.id);
  });

  const checkbox = div.querySelector("input");
  checkbox.addEventListener("change", () => {
    editCompleted(item.id);
  });

  return div;
}
