
import { notepad } from '../app';
import { refs } from '../utils/constants';
import { state } from './state';
import openModal from '../view/openModal';

// let count = 0;

function editNote(event) {
  event.preventDefault();
  const { target } = event;
  if (target.nodeName !== 'I') return;
  if (target.parentNode.dataset.action === 'edit-note'
  || target.dataset.action === 'edit-note') {
    const li = target.closest('.note-list__item');
    const { id } = li.dataset;

    const note = notepad.findNoteById(id);

    const { title, body } = note;
    refs.title.value = title;
    refs.body.value = body;
    state.note = note;
    openModal();
  }
}
//     const title = li.querySelector('.note__title');
//     const body = li.querySelector('.note__body');

//     title.setAttribute('contentEditable', true);
//     body.setAttribute('contentEditable', true);

//     title.style.backgroundColor = '#90cbf9';
//     body.style.backgroundColor = '#a6d5fa';
//     target.style.backgroundColor = '#90cbf9';
//     target.style.borderRadius = '50%';

//     note.title = title.textContent;
//     note.body = body.textContent;

//     count += 1;

//     if (count % 2 === 0) {
//       title.removeAttribute('contentEditable');
//       title.style.backgroundColor = '#fff';
//       body.setAttribute('contentEditable', false);
//       body.style.backgroundColor = '#fff';
//       target.style.backgroundColor = '#7c7879';
//     }
//   }
// }

export default editNote;
