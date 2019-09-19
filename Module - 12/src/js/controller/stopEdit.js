import MicroModal from 'micromodal';
import { refreshList } from '../view/refreshList';
import { notepad } from '../app';
import { state } from './state';
import refs from '../utils/constants';
import renderNoteList from '../view/renderNoteList';

export default function exitEdit() {
  refs.title.value = '';
  refs.body.value = '';
  MicroModal.close('note-editor-modal');
  renderNoteList(notepad.notes());
  state.note = null;
}
