class Note {
        constructor(id, title, text) {
            this.id = id;
            this.title = title;
            this.text = text;
        }
    }

    class App {
        constructor() {
            this.notes = [];
    }

    // CREATE
    // Add a note
    addNote(id, { title, text }) {
        const newNote = new Note(id, title, text);
        this.notes = [...this.notes, newNote];
    }

    // UPDATE
    // Edit a note
    editNote(id, {title, text}) {
        this.notes = this.notes.map(note => {
            if(note.id == id){
                note.title = title;
                note.text = text;
            }
            return note;
        })
    }

    // DELETE
    // Delete a note
    deleteNote(id) {
        this.notes = this.notes.filter(note => note.id != id);
    }

    // READ
    // Display notes
    displayNotes() {
        this.notes.map(note => console.log(
            `ID: ${note.id}
TITLE: ${note.title}
TEXT: ${note.text}
            `
        ))
    }
}

// 1st Note Object
const note1 = {
    title: "Test note",
    text: "text",
};

// 2nd Note Object
const updatedNote = {
    title: "New Note Title",
    text: "New Note Text",
};

const app = new App();
app.addNote(0, note1);
app.addNote(1, note1);
app.addNote(2, note1);
app.addNote(3, note1);

// app.displayNotes();

setTimeout(() => {
    app.editNote(2, updatedNote);
    // app.displayNotes();
}, 1000);

setTimeout(() => {
    app.deleteNote(3);
    app.displayNotes();
}, 2000);

// app.displayNotes();

