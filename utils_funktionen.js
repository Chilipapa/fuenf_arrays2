export async function liefereCodeAbschnittAusLayout(
  layoutCodeArray,
  startString,
  endString
) {
  let rueckgabeArray = [];
  let gehoertDazu = false;

  layoutCodeArray.forEach(function (zeile) {
    if (zeile.trim() === startString.trim()) {
      gehoertDazu = true;
    }
    if (zeile.trim() === endString.trim()) {
      gehoertDazu = false;
    }
    if (gehoertDazu) {
      rueckgabeArray.push(zeile);
    }
  });

  // Rückgabe des Arrays nach Abschluss der forEach-Schleife
  return rueckgabeArray;
}

export async function liefereCode(textDatei) {
  try {
    const response = await fetch(textDatei);
    const text = await response.text();
    const dateiTextAlsArray = text.split(/\r?\n/);
    return dateiTextAlsArray; // Rückgabe des Arrays nach erfolgreichem fetch
  } catch (error) {
    console.error("Fehler beim Abrufen der Datei:", error);
  }
}

/*
// Der Import muss über bzw. außerhalb von "async function main() {" stehen
// Importiere die Funktionen aus utils_funktionen.js
import { liefereCodeAbschnittAusLayout2, liefereCode2 } from './utils_funktionen.js';
*/
