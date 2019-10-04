const api = require('../services/api.async');

class Notepad {
  constructor(notes = []) {
    this._notes = notes;
  }

  get notes() {
    return this._notes;
  }

  get() {
    return api.getNotes().then((notes) => {
      this._notes = notes;
      return this._notes;
    });
  }

  findNoteById(id) {
    return this._notes.find(item => item.id === id);
  }

  saveNote(note) {
    return api.saveNotes(note).then((note) => {
      this._notes.push(note);
      return note;
    });
  }

  deleteNote(id) {
    return api.deleteNotes(id).then(() => this._notes = this._notes.filter(e => e.id !== id));
  }

  updateNoteContent(id, updatedContent) {
    Object.assign(this.findNoteById(id), updatedContent);
    return api.updateNotes(id, note);
  }


  updateNotePriority(id, priority) {
    const note = this.findNoteById(id);
    if (note) {
      note.priority = priority;
      return note;
    }
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
}

module.exports = Notepad;
