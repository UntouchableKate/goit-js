const Notepad = require('../js/Notepad');
const database = require('../db');
const PRIORITY_TYPES = require('../js/utils/constants');

const { deleteNotes, getNotes } = require('../services/api.async');

test('get notes', () => {
  const notepad = new Notepad(database);
  expect(notepad.notes).toEqual(database);
});

//= ================================

describe('saveNote', () => {
  beforeAll(() => {
    console.log('testing save note');
  });

  test('saveNote', () => {
    let target,
      title,
      body,
      priority;

    const notepad = new Notepad();
    ({ title, body, priority } = database[1]);

    target = {
      title,
      body,
      priority,
    };

    expect(notepad.saveNote(target).then((note) => {
      ({ title, body, priority } = note);

      const sourse = {
        title,
        body,
        priority,
      };
      return sourse;
    })).resolves.toEqual(target);
  });

  afterAll(() => {
    getNotes().then((data) => {
      if (data) {
        const { id } = data[data.length - 1];
        deleteNotes(id);
      }
    });
  });
});

//= ===============================================

describe('deleteNote', () => {
  beforeAll(() => {
    console.log('testing delete note');
  });

  test(' deleteNote ', () => {
    let target,
      title,
      body,
      priority,
      id;
    const notepad = new Notepad();
    ({
      title, body, priority, id,
    } = database[1]);

    target = {
      title,
      body,
      priority,
      id,
    };

    expect(notepad.deleteNote(target)).resolves
      .toEqual(expect.not.objectContaining(target));
  });
});

//= ================================================

test('findNoteByID', () => {
  const notepad = new Notepad(database);
  expect(notepad.findNoteById('id-33')).toBeUndefined();
  expect(notepad.findNoteById('id-2')).toEqual(database[1]);
});

//= ================================================

test('updateNotePriority', () => {
  const init = database.map(e => ({ ...{}, ...e }));
  const notepad = new Notepad(init);
  expect(notepad.updateNotePriority('id-33', PRIORITY_TYPES.LOW)).toBeUndefined();
  const target = {
    ...{},
    ...database[0],
  };
  target.priority = PRIORITY_TYPES.HIGH;
  expect(notepad.updateNotePriority('id-1', PRIORITY_TYPES.HIGH)).toEqual(target);
});

//= =================================================

test('filterNotesByQuery', () => {
  const notepad = new Notepad(database);
  expect(notepad.filterNotesByQuery('Dogs')).toEqual([]);
  const target = [database[2]];
  expect(notepad.filterNotesByQuery('frameworks')).toEqual(target);
});

//= =================================================

test('filterNotesByPriority', () => {
  const notepad = new Notepad(database);
  expect(notepad.filterNotesByPriority(4)).toEqual([]);
  const target = [database[0]];
  expect(notepad.filterNotesByPriority(PRIORITY_TYPES.HIGH)).toEqual(target);
});
