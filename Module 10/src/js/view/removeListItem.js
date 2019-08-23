import { notepad } from '../app';

function removeListItem(elem) {
  const li = elem.closest('.note-list__item');
  const { id } = li.dataset;
  notepad.deleteNote(id);
  li.remove();
}

export default removeListItem;
