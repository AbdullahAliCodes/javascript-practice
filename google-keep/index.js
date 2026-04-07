// 2 pieces of input are used to create a component in the page when a button is clicked

// Input Process Output

function readInput() {
    let title  = document.getElementById("title").value;

    let note  = document.getElementById("note").value;

    return [title, note];

};

function createNote(title, note) {
    let container = document.createElement('div');
    let titleElement = document.createElement('h2');
    let noteElement = document.createElement('p');

    titleElement.textContent = title;
    noteElement.textContent = note;

    container.appendChild(titleElement);
    container.appendChild(noteElement);
    container.id = "note"

    return container;
}

function displayNote(note) {
    [title, note] = readInput();
    let container = createNote(title, note);

    let noteList = document.getElementById('note-list');
    noteList.appendChild(container);
    
}