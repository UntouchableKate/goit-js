const notepad = new Notepad(initialNotes);
const refList = document.querySelector('.note-list');
renderNoteList(refList, notepad.notes);
