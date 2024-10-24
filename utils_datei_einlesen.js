export function LiesTxtFileEinUndGibArrayZurueck(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = function(e) {
            const content = e.target.result;
            // Inhalt in ein Array von Zeilen aufteilen (unter Berücksichtigung von Windows- und Unix-Zeilenumbrüchen)
            const lines = content.split(/\r?\n/); // \r?\n ermöglicht sowohl \n als auch \r\n
            resolve(lines); // Das Array zurückgeben
        };

        reader.onerror = function(e) {
            console.error('Fehler beim Einlesen der Datei:', e);
            reject(new Error('Fehler beim Einlesen der Datei')); // Fehler zurückgeben
        };

        // Die Datei als Text auslesen
        reader.readAsText(file);
    });
}

export function setupFileInput(fileInputId, outputId) {
    return new Promise((resolve) => {
        document.getElementById(fileInputId).addEventListener('change', async function(event) {
            const file = event.target.files[0]; // Ausgewählte Datei

            if (file) {
                try {
                    // Funktion zum Einlesen der Datei aufrufen
                    const lines = await LiesTxtFileEinUndGibArrayZurueck(file);
                    //document.getElementById(outputId).textContent = `Inhalt der Datei:\n${lines.join('\n')}`;
                    document.getElementById(outputId).textContent = "Layout ist erfolgreich geladen.";
                    resolve(lines); // Das Array zurückgeben
                } catch (error) {
                    document.getElementById(outputId).textContent = error.message;
                    resolve([]); // Im Fehlerfall ein leeres Array zurückgeben
                }
            } else {
                document.getElementById(outputId).textContent = 'Keine Datei ausgewählt.';
                resolve([]); // Leeres Array zurückgeben, wenn keine Datei ausgewählt wurde
            }
        });
    });
}
