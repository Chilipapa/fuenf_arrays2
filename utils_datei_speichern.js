// Funktion zum Speichern eines Arrays als .txt-Datei
export function saveArrayAsTxt(array, fileName) {
    // Das Array in einen einzelnen String umwandeln, mit Zeilenumbrüchen
    const content = array.join('\n');

    // Erstellen eines Blobs mit dem Inhalt
    const blob = new Blob([content], { type: 'text/plain' });

    // Erstellen eines temporären Links
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = fileName;

    // Den Link anklicken, um den Download zu starten
    a.click();

    // Den temporären Link aus dem Dokument entfernen
    URL.revokeObjectURL(a.href);
}

/*
// Der Import muss über bzw. außerhalb von "async function main() {" stehen
// Importiere die Funktion aus utils_datei_speichern.js
import { saveArrayAsTxt } from './utils_datei_speichern.js';
*/

/* 
// Kopiere das ins script.js File
// Weise meinArry zu.
// Event-Listener für den Button, um das Array als Datei zu speichern
const nameDownloadFile = 'meinArray.txt'; // hier kann man einen beliebigen Namen eintragen
document.getElementById('saveButton').addEventListener('click', function() {
    saveArrayAsTxt(meinArray, nameDownloadFile); // Verwende die importierte Funktion
}); 
*/

/*
<!-- Kopiere das ins File index.html -->
<!-- Button zum Speichern der Datei -->
    <button id="saveButton">Speichern als TXT</button>
*/