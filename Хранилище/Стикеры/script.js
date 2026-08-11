let noteInput = document.querySelector('#noteInput');
let addBtn    = document.querySelector('#addBtn');
let board     = document.querySelector('#board');

let myStickers = JSON.parse(localStorage.getItem('myStickers')) || [];

function save() {
  localStorage.setItem('myStickers', JSON.stringify(myStickers));
}

function createNoteEl(text, index) {
  const note = document.createElement('div');
  note.className = 'note';

  const textEl = document.createElement('div');
  textEl.className = 'text';
  textEl.textContent = text;

  const actions = document.createElement('div');
  actions.className = 'actions';

  const editBtn = document.createElement('button');
  editBtn.className = 'edit-btn';
  editBtn.textContent = 'Изменить';

  const delBtn = document.createElement('button');
  delBtn.className = 'del-btn';
  delBtn.textContent = 'Удалить';

  actions.append(editBtn, delBtn);
  note.append(textEl, actions);

  editBtn.addEventListener('click', () => editNote(index));
  delBtn.addEventListener('click',  () => deleteNote(index));

  return note;
}

function render() {
  board.innerHTML = '';
  myStickers.forEach((text, index) => {
    board.appendChild(createNoteEl(text, index));
  });
}

addBtn.addEventListener('click', () => {
  const text = noteInput.value.trim();
  if (text === '') return;

  myStickers.push(text);
  save();

  noteInput.value = '';
  render();
});

noteInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
    addBtn.click();
  }
});

function editNote(index) {
  const newText = prompt('Редактировать заметку:', myStickers[index]);
  if (newText === null) return;

  const trimmed = newText.trim();
  if (trimmed === '') return;

  myStickers[index] = trimmed;
  save();
  render();
}

function deleteNote(index) {
  myStickers.splice(index, 1);
  save();
  render();
}

render();