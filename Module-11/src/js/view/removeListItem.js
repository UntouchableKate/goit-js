import { Notyf } from 'notyf';
import { notepad } from '../app';

const notyf = new Notyf();

function removeListItem(elem) {
  const li = elem.closest('.note-list__item');
  const { id } = li.dataset;
  notepad.deleteNote(id);
  li.remove();
  notyf.success('Заметка успешно удалена!');
}

export default removeListItem;
