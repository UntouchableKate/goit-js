import templateCard from '../../templates/templateItems.hbs';

function addListItem(ref, note) {
  ref.insertAdjacentHTML('beforeend', templateCard(note));
}

export default addListItem;
