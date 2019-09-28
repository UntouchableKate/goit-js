import templateCard from '../../templates/templateItems.hbs';

function createListItem(notes = []) {
  return notes.map(item => templateCard(item)).join('');
}

export default createListItem;
