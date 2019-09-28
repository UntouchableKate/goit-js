
function removeListItem(elem) {
  const li = elem.closest('.note-list__item');
  const { id } = li.dataset;
  li.remove();
}

export default removeListItem;
