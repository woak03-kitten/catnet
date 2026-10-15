const hexText = "46 41 55 58 20 53 49 47 4e 41 41 4c 20 2d 20 4e 45 54 43 41 54 20 56 45 49 4c 4c 43 2c 45";
const noteContent = `"Le signal a été découpé et crypté par N|√'15 en traversant les décennies. Pour retrouver ma fréquence d'origine, vous devez fusionner les 3 fragments."`;

const hexElement = document.getElementById("line-hex");
const noteElement = document.getElementById("note-text");

let hexIndex = 0;
let noteIndex = 0;

function typeHex() {
    if (hexIndex < hexText.length) {
        hexElement.innerHTML += hexText.charAt(hexIndex);
        hexIndex++;
        setTimeout(typeHex, 25);
    } else {
        setTimeout(typeNote, 500);
    }
}

function typeNote() {
    if (noteIndex < noteContent.length) {
        noteElement.innerHTML += noteContent.charAt(noteIndex);
        noteIndex++;
        setTimeout(typeNote, 30);
    }
}

setTimeout(typeHex, 700);