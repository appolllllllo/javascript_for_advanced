let newNoteBtn = document.querySelector('#new-note');
let notesList = document.querySelector('#notes');
let noteTitle = document.querySelector("#note-title");
let noteText = document.querySelector('#note-text');
let saveBtn = document.querySelector('#save-note');
let deleteBtn = document.querySelector('#delete-note');

let notes = JSON.parse(localStorage.getItem('notes')) || [];

let currentNoteId = null;

function saveNotes() {
    localStorage.setItem('notes', JSON.stringify(notes));
}

function renderNotesList() {
    notesList.innerHTML = '';
    
    for (let note of notes) {
        let li = document.createElement('li');
        li.textContent = note.title || 'Без названия';
        li.dataset.id = note.id;
        
        if (note.id === currentNoteId) {
            li.classList.add('active');
        }
        
        li.addEventListener('click', function() {
            openNote(note.id);
        });
        
        notesList.appendChild(li);
    }
}

function openNote(id) {
    let note = notes.find(n => n.id === id);

    if (note) {
        currentNoteId = id;
        noteTitle.value = note.title;
        noteText.value = note.text;
        renderNotesList();
    }
}

newNoteBtn.addEventListener('click', function() {
    let newNote = {
        id: Date.now(),
        title: '',
        text: ''
    };

    notes.push(newNote);
    saveNotes();
    renderNotesList();
    openNote(newNote.id);

    noteTitle.focus();
});

saveBtn.addEventListener('click', function() {
    if (currentNoteId === null) {
        alert('Сначала выберите или создайте запись');
        return;
    }

    let note = notes.find(n => n.id === currentNoteId);

    if (note) {
        note.title = noteTitle.value.trim();
        note.text = noteText.value;
        saveNotes();
        renderNotesList();
        alert('Запись сохранена');
    }
});

deleteBtn.addEventListener('click', function() {
    if (currentNoteId === null) {
        alert('Сначала выберите запись для удаления');
        return;
    }

    notes = notes.filter(n => n.id !== currentNoteId);
    currentNoteId = null;
    noteTitle.value = '';
    noteText.value = '';
    saveNotes();
    renderNotesList();
});

renderNotesList();