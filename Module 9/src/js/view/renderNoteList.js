// const ref = document.querySelector('.note-list');

function renderNoteList(refList, notes) {
  refList.innerHTML = '';
  refList.append(...notes.map(note => createListItem(note)));
}
