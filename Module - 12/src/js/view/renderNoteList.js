import createListItem from './createListItem';
// import refreshList from './refreshList';


function renderNoteList(refList, notes) {
  refList.innerHTML = '';
  refList.insertAdjacentHTML('beforeend', createListItem(refList, notes));
}

export default renderNoteList;
