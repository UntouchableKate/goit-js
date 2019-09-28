import { Notyf } from 'notyf';
import { notepad } from '../app';
import removeListItem from '../view/removeListItem';

const notyf = new Notyf();

function deleteNote(event) {
  const { target } = event;
  if (target.nodeName !== 'I') return;
  if (target.parentNode.dataset.action === 'delete-note') {
    const li = target.closest('.note-list__item');
    const { id } = li.dataset;
    li.remove();
    notepad.deleteNote(id).then((data) => {
      removeListItem(target);
      notyf.success('Заметка успешно удалена!');
    });
  }
}

export default deleteNote;
