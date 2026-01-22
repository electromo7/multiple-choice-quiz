# Multiple Choice Quiz - RBM3 & RBM4

## Übersicht

Diese neue Version des Multiple Choice Quiz enthält kombinierte Fragen aus:
- **RBM3**: 40 Fragen
- **RBM4**: 12 Fragen
- **Gesamt**: 52 Fragen

## Dateien

- `index-rbm3-rbm4.html` - Die Haupt-HTML-Datei für den Quiz
- `script-rbm3-rbm4.js` - JavaScript mit allen 52 Fragen und der Quiz-Logik
- `generate_rbm_quiz.py` - Python-Script zum Generieren des Quiz aus den JSON-Dateien

## Verwendung

1. Öffnen Sie `index-rbm3-rbm4.html` in einem Browser
2. Wählen Sie die Anzahl der Fragen (1-52)
3. Klicken Sie auf "Quiz starten"
4. Beantworten Sie die Fragen durch Ankreuzen der richtigen Optionen
5. Nach jeder Frage erhalten Sie sofort Feedback
6. Am Ende sehen Sie Ihr Ergebnis und eine Übersicht der falschen Antworten

## Features

- ✅ Zufällige Auswahl von Fragen
- ✅ Multiple-Choice-Unterstützung (mehrere richtige Antworten möglich)
- ✅ Sofortiges Feedback nach jeder Antwort
- ✅ Fortschrittsanzeige
- ✅ Detaillierte Ergebnisübersicht
- ✅ Anzeige falscher Antworten mit Korrekturen
- ✅ Bestanden/Nicht bestanden Status (60% Grenze)

## Aktualisierung

Um die Fragen zu aktualisieren:

1. Bearbeiten Sie `pruefungsfragen_RBM3.json` oder `pruefungsfragen_RBM4.json`
2. Führen Sie das Script aus: `python3 generate_rbm_quiz.py`
3. Die Datei `script-rbm3-rbm4.js` wird automatisch neu generiert

## Quellendateien

- `pruefungsfragen_RBM3.json` - Fragen aus RBM3
- `pruefungsfragen_RBM4.json` - Fragen aus RBM4
