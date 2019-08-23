import createListItem from './createListItem';

function renderNoteList(refList, notes) {
  refList.innerHTML = '';
  refList.insertAdjacentHTML('beforeend', createListItem(refList, notes));
}

export default renderNoteList;
