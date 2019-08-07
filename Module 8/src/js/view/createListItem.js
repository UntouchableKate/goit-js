/*
 Напиши функцию createListItem(note)
 для создания одного элемента списка ul.note-list
 c карточкой заметки.
 Создавай DOM-узлы с помощью document.createElement.
 */
function createElem(tag, className, text = null, id = null) {
  const element = document.createElement(tag);
  className.split(' ').map(e => element.classList.add(e));
  if (id) {
    element.setAttribute('data-id', id);
  }
  if (text) {
    element.textContent = text;
  }
  return element;
}

function createButton(action, text) {
  const button = createElem('button', 'action');
  button.setAttribute('data-action', action);
  const i = createElem('i', 'material-icons action__icon', text);
  button.append(i);
  return button;
}

function createListItem({
  id, title, body, priority,
}) {
  const li = createElem('li', 'note-list__item', null, id);
  const note = createElem('div', 'note');
  li.append(note);
  const noteContent = createElem('div', 'note__content');
  noteContent.append(createElem('h2', 'note__title', title));
  noteContent.append(createElem('p', 'note__body', body));
  note.append(noteContent);
  const noteFooter = createElem('footer', 'note__footer');
  const noteSectionLeft = createElem('section', 'note__section');
  const noteSectionRight = createElem('section', 'note__section');

  noteSectionLeft.append(createButton(
    NOTE_ACTIONS.DECREASE_PRIORITY,
    ICON_TYPES.ARROW_DOWN,
  ));

  noteSectionLeft.append(createButton(
    NOTE_ACTIONS.INCREASE_PRIORITY,
    ICON_TYPES.ARROW_UP,
  ));

  noteSectionLeft.append(createElem('span', 'note__priority', `Priority: ${priority}`));

  noteSectionRight.append(createButton(
    NOTE_ACTIONS.EDIT,
    ICON_TYPES.EDIT,
  ));

  noteSectionRight.append(createButton(
    NOTE_ACTIONS.DELETE,
    ICON_TYPES.DELETE,
  ));

  noteFooter.append(noteSectionLeft);
  noteFooter.append(noteSectionRight);
  note.append(noteFooter);
  return li;
}
