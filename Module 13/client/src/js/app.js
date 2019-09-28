import Notepad from './Notepad';
import renderNoteList from './view/renderNoteList';
import { refs } from './utils/constants';

import addNote from './controller/addNote';
import deleteNote from './controller/deleteNote';
import editNote from './controller/editNote';
import searchedNoteList from './controller/searchedNoteList';
import storageTextForm from './controller/storageTextForm';

import decreasePriority from './controller/changeOfPriority';

import openModal from './view/openModal';


const notepad = new Notepad();

notepad.get().then(data => renderNoteList(data));


refs.form.addEventListener('submit', addNote);
refs.list.addEventListener('click', deleteNote);
refs.list.addEventListener('click', editNote);
refs.search.addEventListener('input', searchedNoteList);
refs.list.addEventListener('click', decreasePriority);
refs.openModalBtn.addEventListener('click', openModal);
refs.form.addEventListener('keyup', storageTextForm);

export { notepad };
