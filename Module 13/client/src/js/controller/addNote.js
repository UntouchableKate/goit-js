
import MicroModal from 'micromodal';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import { notepad } from '../app';
import { refs, PRIORITY_TYPES } from '../utils/constants';
import addListItem from '../view/addListItem';
import { state } from './state';
import updateNote from './updateNote';


const notyf = new Notyf();

function addNote(event) {
  event.preventDefault();
  const title = refs.title.value || '';
  const body = refs.body.value || '';
  if (title.length === 0 || body.length === 0) {
    notyf.error('Необходимо заполнить все поля!');
    return;
  }
  const note = {
    title,
    body,
    priority: PRIORITY_TYPES.LOW,
  };
  if (!state.note) {
    notepad.saveNote(note).then((data) => {
      addListItem(refs.list, note);
      notyf.success('Заметка успешно добавлена!');
    });
  }
  if (state.note) {
    updateNote();
  }
  localStorage.removeItem('fb-textarea');
  localStorage.removeItem('fb-input');
  event.target.reset();
  MicroModal.close('note-editor-modal');
}

export default addNote;
