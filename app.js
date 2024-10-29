import * as UtilsDateiEinlesen from "./utils_datei_einlesen.js";
import * as UtilsDateiSpeichern from "./utils_datei_speichern.js";
import * as UtilsFunktionen from "./utils_funktionen.js";
import * as EventListener from "./utils_eventlistener.js";

// Eventlistener für den Abspeichern-Button
document.getElementById("fileInput").addEventListener("click", EventListener.funktion_01 );

// Eventlistener für den Herunterladen-Button
document.getElementById("saveButton").addEventListener("click", EventListener.funktion_02 );

async function main() {
  const gesCodeObj = document.querySelector(".derGanzeCode");

  const layoutCode = await UtilsDateiEinlesen.setupFileInput(
    "fileInput",
    "output"
  ); // Array von Zeilen speichern
  console.log(layoutCode);

  const code1 = await UtilsFunktionen.liefereCode("wr_01_code_kopf.txt");
  const code3 = await UtilsFunktionen.liefereCode("wr_02_code_setup_loop.txt");
  const code5 = await UtilsFunktionen.liefereCode("wr_03_code_ende.txt");
  const code2 = await UtilsFunktionen.liefereCodeAbschnittAusLayout(
    layoutCode,
    "// BEGINN : ShortArrays",
    "// ENDE : ShortArrays"
  );
  const code4 = await UtilsFunktionen.liefereCodeAbschnittAusLayout(
    layoutCode,
    "// BEGINN : CaseZeilen",
    "// ENDE : CaseZeilen"
  );
  // hier ist der gesamte eingelese Code in korrekter Reihenfolge als Array
  const codeGesamtalsArray = code1
    .concat(code2)
    .concat(code3)
    .concat(code4)
    .concat(code5);
  // hier ist der gesamte eingelese Code in korrekter Reihenfolge als String
  //const codeGesamtAlsString = codeGesamtalsArray.join("<br>");
  // hier wird der codeGesamtAlsString ins das html-Ausgabe-Objekt geschrieben
  //gesCodeObj.innerHTML = codeGesamtAlsString;
  gesCodeObj.innerHTML = "Code erfolgreich erstellt.";

  // Weise meinArry zu.
  const meinArray = codeGesamtalsArray;
  // Event-Listener für den Button, um das Array als Datei zu speichern
  
  const nameDownloadFile = "ArduinoCode_Weichenrouter.ino"; // hier kann man einen beliebigen Namen eintragen
  document.getElementById("saveButton").addEventListener("click", function () {
    UtilsDateiSpeichern.saveArrayAsTxt(meinArray, nameDownloadFile); // Verwende die importierte Funktion
  });
}

main(); // Die Hauptfunktion aufrufen
