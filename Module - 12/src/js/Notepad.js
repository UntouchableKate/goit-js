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

  saveLocalStorage() {
    try {
      localStorage.setItem('notes', JSON.stringify(this._notes));
    } catch (error) {
      console.log(error);
    }
  }

  saveNote(note) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this._notes.push(note);
        this.saveLocalStorage();
        resolve(note);
      }, 300);
    });
  }

  deleteNote(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this._notes = this._notes.filter(e => e.id !== id);
        this.saveLocalStorage();
        resolve(this._notes);
      }, 300);
    });
  }

  updateNoteContent(id, updatedContent) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const updateContent = Object.assign(this.findNoteById(id), updatedContent);
        this.saveLocalStorage();
        resolve(updateContent);
      }, 300);
    });
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
}


export default Notepad;
