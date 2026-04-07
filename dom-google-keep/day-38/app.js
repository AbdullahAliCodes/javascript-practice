class Note {
    constructor(id, title, text) {
        this.id = id;
        this.title = title;
        this.text = text;
    }
}

class App {
    constructor() {
        this.notes = [new Note("abc1", "test title", "test text")];

        this.$activeForm = document.querySelector(".active-form");
        this.$inactiveForm = document.querySelector(".inactive-form");
        this.$noteTitle = document.querySelector("#note-title");
        this.$noteText = document.querySelector("#note-text");
        this.$notes = document.querySelector(".notes");
        this.$form = document.querySelector("#form");
        this.$modal = document.querySelector(".modal");
        this.$modalForm = document.querySelector("#modal-form");
        this.$modalTitle = document.querySelector("#modal-title");
        this.$modalText = document.querySelector("#modal-text");
        this.$formContainer = document.querySelector(".form-container");

        console.log(this.$formContainer.classList)

        this.addEventListerners();
        this.displayNotes();
    }

    addEventListerners() {
        document.body.addEventListener("click", () => {
            this.handleFormClick(event);
            this.closeModal(event);
            this.openModal(event);
        })

        this.$form.addEventListener("submit", (event) => {
            event.preventDefault();
            const title = this.$noteTitle.value;
            const text = this.$noteText.value;
            this.addNote({ title, text });
            this.closeActiveForm();
        })

        this.$modal.addEventListener("click", () => {
            console.log("modal clicked");
        })

        
    }

    handleFormClick(event) {
        const isActiveFormClickedOn = this.$activeForm.contains(event.target);
        const isInactiveFormClickedOn = this.$inactiveForm.contains(event.target);
        const title = this.$noteTitle.value;
        const text = this.$noteText.value;

        if(isInactiveFormClickedOn) {
            this.openActiveForm();
        }
        else if(!isInactiveFormClickedOn && !isActiveFormClickedOn) {
            this.addNote({ title, text });
            this.closeActiveForm();
        }
    }

    openActiveForm() {
        this.$inactiveForm.style.display = "none";
        this.$activeForm.style.display = "block";
        this.$noteText.focus();
    }

    closeActiveForm() {
        this.$inactiveForm.style.display = "block";
        this.$activeForm.style.display = "none";
        this.$noteTitle.value = "";
        this.$noteText.value = "";
    }

    openModal(event) {
        const $selectedNote = event.target.closest(".note");
        if($selectedNote) {
            this.$modalTitle.value = $selectedNote.children[1].innerHTML;
            this.$modalText.value = $selectedNote.children[2].innerHTML;
            this.$modal.classList.add("open-modal");
        }
    }

    closeModal(event) {
        const isModalFormClickedOn = this.$modalForm.contains(event.target);
        if(!isModalFormClickedOn && this.$modal.classList.contains("open-modal")) {
            this.$modal.classList.remove("open-modal");
        }
    }
    
    // CREATE
    // Add a note
    addNote({ title, text }) {
        if (text != "") {
            const newNote = new Note(crypto.randomUUID(), title, text);
            this.notes = [...this.notes, newNote];
            this.displayNotes();
        }
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

    handleMouseOverNote(element) {
        const $note = document.querySelector("#" + element.id);
        const $checkNote = $note.querySelector(".check-circle");
        const $noteFooter = $note.querySelector(".note-footer");

        $checkNote.style.visibility = "visible";
        $noteFooter.style.visibility = "visible";
    }

    handleMouseOutNote(element) {
        const $note = document.querySelector("#" + element.id);
        const $checkNote = $note.querySelector(".check-circle");
        const $noteFooter = $note.querySelector(".note-footer");

        $checkNote.style.visibility = "hidden";
        $noteFooter.style.visibility = "hidden";
    }

    // READ
    // Display notes
    displayNotes() {
        this.$notes.innerHTML = this.notes.map((note) => 
        `
        <div class="note" id="${note.id}" onmouseover="app.handleMouseOverNote(this)" onmouseout="app.handleMouseOutNote(this)">
        <span class="material-symbols-outlined check-circle">check_circle</span>
        <div class="title">${note.title}</div>
        <div class="text">${note.text}</div>
        <div class="note-footer">
            <div class="tooltip">
            <span class="material-symbols-outlined hover small-icon"
                >add_alert</span
            >
            <span class="tooltip-text">Remind me</span>
            </div>
            <div class="tooltip">
            <span class="material-symbols-outlined hover small-icon"
                >person_add</span
            >
            <span class="tooltip-text">Collaborator</span>
            </div>
            <div class="tooltip">
            <span class="material-symbols-outlined hover small-icon"
                >palette</span
            >
            <span class="tooltip-text">Change Color</span>
            </div>
            <div class="tooltip">
            <span class="material-symbols-outlined hover small-icon"
                >image</span
            >
            <span class="tooltip-text">Add Image</span>
            </div>
            <div class="tooltip">
            <span class="material-symbols-outlined hover small-icon"
                >archive</span
            >
            <span class="tooltip-text">Archive</span>
            </div>
            <div class="tooltip">
            <span class="material-symbols-outlined hover small-icon"
                >more_vert</span
            >
            <span class="tooltip-text">More</span>
            </div>
        </div>
        </div>
        `
        ).join("");
    }
}

const app = new App();

