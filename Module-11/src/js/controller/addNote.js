import shortid from 'shortid';
import MicroModal from 'micromodal';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import { notepad } from '../app';
import { refs } from '../utils/constants';
import addListItem from '../view/addListItem';

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
    id: shortid.generate(),
    title,
    body,
  };

  notepad.saveNote(note);
  event.target.reset();
  addListItem(refs.list, note);
  MicroModal.close('note-editor-modal');
  notyf.success('Заметка успешно добавлена!');
}

export default addNote;
