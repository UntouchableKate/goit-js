function searchedNoteList(event) {
  event.preventDefault();
  const filteredNoteList = notepad.filterNotesByQuery(event.target.value);

  renderNoteList(refs.list, filteredNoteList);
}

refs.search.addEventListener('input', searchedNoteList);
