import shortid from 'shortid';
import { notepad } from '../app';
import { refs } from '../utils/constants';
import addListItem from '../view/addListItem';


function addNote(event) {
  event.preventDefault();
  const title = refs.title.value || '';
  const body = refs.body.value || '';
  if (title.length === 0 || body.length === 0) {
    alert('Необходимо заполнить все поля!');
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
}

export default addNote;
