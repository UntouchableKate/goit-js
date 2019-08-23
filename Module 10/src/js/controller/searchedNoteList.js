import { notepad } from '../app';
import renderNoteList from '../view/renderNoteList';
import { refs } from '../utils/constants';

function searchedNoteList(event) {
  event.preventDefault();
  const filteredNoteList = notepad.filterNotesByQuery(event.target.value);

  renderNoteList(refs.list, filteredNoteList);
}

export default searchedNoteList;
