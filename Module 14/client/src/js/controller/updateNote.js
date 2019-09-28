import { Notyf } from 'notyf';
import { notepad } from '../app';
import { state } from './state';
import { refs } from '../utils/constants';

const notyf = new Notyf();

function updateNote() {
  const title = refs.title.value;
  const body = refs.body.value;
  state.note.title = title;
  state.note.body = body;
  const { id } = state.note;
  notepad.updateNoteContent(id, { title, body }).then((data) => {
    notyf.success('Заметка успешно сохранена!');
  });
}

export default updateNote;
