import Notepad from './Notepad';
import initialNotes from './database';
import renderNoteList from './view/renderNoteList';
import { refs } from './utils/constants';

import addNote from './controller/addNote';
import deleteNote from './controller/deleteNote';
import editNote from './controller/editNote';
import searchedNoteList from './controller/searchedNoteList';

import decreasePriority from './controller/changeOfPriority';
// import { counter } from './controller/changeOfPriority';


const notepad = new Notepad(initialNotes);
renderNoteList(refs.list, notepad.notes);

refs.form.addEventListener('submit', addNote);
refs.list.addEventListener('click', deleteNote);
refs.list.addEventListener('click', editNote);
refs.search.addEventListener('input', searchedNoteList);
refs.list.addEventListener('click', decreasePriority);
// refs.list.addEventListener('click', counter.decrement);
// refs.list.addEventListener('click', counter.increment);

export { notepad };
