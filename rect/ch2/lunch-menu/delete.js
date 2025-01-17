import { list } from "./tags.js";

function reloadMenu(data){
  list.innerHTML = '';
  data.forEach((title, index) => {
    const li = document.createElement('li');
    li.classList.add('item');
    li.innerHTML = `<b>${index + 1}</b>${title}<button className="del-btn" data-index="${index}">X</button>`;
    list.append(li);
  });
}

function deleteMenu(data, index){
  data.splice(index, 1);
  reloadMenu(data);
}

export default deleteMenu;