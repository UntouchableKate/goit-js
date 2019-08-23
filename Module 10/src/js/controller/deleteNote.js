
import removeListItem from '../view/removeListItem';

function deleteNote(event) {
  const { target } = event;
  if (target.nodeName !== 'I') return;
  if (target.parentNode.dataset.action === 'delete-note') {
    removeListItem(target);
  }
}

export default deleteNote;
