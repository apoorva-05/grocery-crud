export function createForm(addItem, updateItem) {
  const form = document.createElement("form");
  form.id = "grocery-form";

  form.innerHTML = `
    <input 
      type="text" 
      id="grocery-input" 
      placeholder="Enter grocery item" 
      required 
    />
    <button type="submit">Add</button>
  `;

  let editMode = false;
  let editId = null;

  const input = form.querySelector("#grocery-input");
  const button = form.querySelector("button");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const value = input.value.trim();
    if (!value) return;

    if (editMode) {
      updateItem(editId, value);
      editMode = false;
      editId = null;
      button.textContent = "Add";
    } else {
      addItem(value);
    }

    input.value = "";
  });

  function startEdit(item) {
    input.value = item.name;
    editMode = true;
    editId = item.id;
    button.textContent = "Update";
  }

  return { form, startEdit };
}
