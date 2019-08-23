import { createListItem } from './createListItem';

function renderNoteList(refList, notes) {
  refList.innerHTML = '';
  refList.append(...notes.map(note => createListItem(note)));
}

export default renderNoteList;
