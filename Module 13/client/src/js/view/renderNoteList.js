import createListItem from './createListItem';
import { refs } from '../utils/constants';


function renderNoteList(notes = []) {
  refs.list.innerHTML = '';
  refs.list.insertAdjacentHTML('beforeend', createListItem(notes));
}

export default renderNoteList;
