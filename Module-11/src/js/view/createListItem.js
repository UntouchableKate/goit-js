import templateCard from '../../templates/templateItems.hbs';

function createListItem(refList, initialNotes) {
  return initialNotes.map(item => templateCard(item)).join('');
}

export default createListItem;
