// const ref = document.querySelector('.note-list');

function renderNoteList(refList, notes) {
  const elem = refList.cloneNode(false);
  elem.append(...notes.map(note => createListItem(note)));
  refList.replaceWith(elem);
}
