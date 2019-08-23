import { PRIORITY_TYPES } from './utils/constants';

class Notepad {
  constructor(notes = []) {
    this._notes = notes;
  }

  get notes() {
    return this._notes;
  }

  findNoteById(id) {
    return this._notes.find(item => item.id === id);
  }

  saveNote(note) {
    if (note.priority) {
      this._notes.push(note);
    } else {
      note.priority = PRIORITY_TYPES.LOW;
      this._notes.push(note);
    }
    return note;
  }

  deleteNote(id) {
    this._notes = this._notes.filter(e => e.id === id);
    return this;
  }

  updateNoteContent(id, updatedContent) {
    return Object.assign(this.findNoteById(id), updatedContent);
  }

  updateNotePriority(id, priority) {
    this.findNoteById(id).priority = priority;
  }

  filterNotesByQuery(query) {
    return this._notes.filter(
      ({ title, body }) => title.toLowerCase().includes(query.toLowerCase())
      || body.toLowerCase().includes(query.toLowerCase()),
    );
  }

  filterNotesByPriority(priority) {
    return this._notes.filter(e => e.priority === priority);
  }

  static get Priority() {
    return {
      LOW: 0,
      NORMAL: 1,
      HIGH: 2,
    };
  }
}

export default Notepad;
