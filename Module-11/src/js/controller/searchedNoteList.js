import { notepad } from '../app';
import { refs } from '../utils/constants';
import renderNoteList from '../view/renderNoteList';

function searchedNoteList(event) {
  event.preventDefault();
  const filteredNoteList = notepad.filterNotesByQuery(event.target.value);
  renderNoteList(refs.list, filteredNoteList);
}

export default searchedNoteList;
