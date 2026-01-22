# Multiple Choice Quiz

Eine moderne Web-Applikation für Multiple Choice Tests mit sofortigem Feedback und detaillierter Auswertung.

## 🎯 Features

- **Flexible Fragenanzahl**: Wählen Sie die gewünschte Anzahl an Fragen
- **Zufällige Auswahl**: Jeder Quiz-Durchlauf verwendet eine zufällige Auswahl der Fragen
- **Sofortiges Feedback**: Nach jeder Frage sehen Sie sofort, ob die Antwort richtig oder falsch war
- **Bestehensgrenze**: 60% der Fragen müssen richtig beantwortet werden
- **Detaillierte Auswertung**: Am Ende erhalten Sie eine Übersicht aller falschen Antworten
- **Responsives Design**: Funktioniert auf Desktop, Tablet und Smartphone

## 🚀 Live Demo

Die Applikation ist als GitHub Page verfügbar:
- **[RBM3 & RBM4 Quiz (52 Fragen)](https://electromo7.github.io/multiple-choice-quiz/index-rbm3-rbm4.html)** ⭐ NEU!
- [Original Quiz (108 Fragen)](https://electromo7.github.io/multiple-choice-quiz/)

## 💻 Lokale Nutzung

### Option 1: Direkt im Browser (einfach)
1. Laden Sie alle Dateien herunter
2. Öffnen Sie `index-github.html` in einem modernen Webbrowser

### Option 2: Mit lokalem Server (empfohlen)
```bash
# Mit Python
python -m http.server 8000

# Mit Node.js
npx http-server

# Mit PHP
php -S localhost:8000
```

Dann öffnen Sie `http://localhost:8000` in Ihrem Browser.

## 📁 Dateistruktur

```
├── index-github.html      # GitHub Pages optimierte HTML-Datei
├── styles.css            # CSS-Styling
├── script-complete.js    # JavaScript mit eingebetteten Fragen
├── convert_questions.py  # Python-Skript zur Konvertierung
└── README.md            # Diese Datei
```

## 🛠️ GitHub Pages Setup

1. **Repository erstellen**:
   - Erstellen Sie ein neues GitHub Repository
   - Laden Sie alle Dateien hoch

2. **GitHub Pages aktivieren**:
   - Gehen Sie zu Repository Settings
   - Scrollen Sie zu "Pages"
   - Wählen Sie "Deploy from a branch"
   - Wählen Sie "main" branch und "/ (root)"
   - Klicken Sie "Save"

3. **Index-Datei umbenennen**:
   - Benennen Sie `index-github.html` zu `index.html` um
   - Committen und pushen Sie die Änderung

4. **URL aufrufen**:
   - Ihre App ist verfügbar unter: `https://ihr-username.github.io/ihr-repository-name/`

## 🔧 Anpassungen

### Fragen hinzufügen/ändern
1. Bearbeiten Sie die `mcq_questions.json` Datei
2. Führen Sie `python convert_questions.py` aus
3. Die neue `script-complete.js` enthält Ihre aktualisierten Fragen

### Design anpassen
- Bearbeiten Sie `styles.css` für Farben, Schriftarten und Layout
- Das Design ist vollständig mit CSS anpassbar

### Bestehensgrenze ändern
- In `script-complete.js` die Zeile `const passed = percentage >= 60;` anpassen

## 📊 Technische Details

- **Frontend**: Vanilla HTML, CSS, JavaScript
- **Kompatibilität**: Moderne Browser (Chrome, Firefox, Safari, Edge)
- **Responsive**: Mobile-first Design
- **Performance**: Alle Daten werden lokal geladen, keine externen APIs

## 🤝 Beitragen

1. Fork das Repository
2. Erstellen Sie einen Feature Branch
3. Committen Sie Ihre Änderungen
4. Erstellen Sie einen Pull Request

## 📄 Lizenz

Dieses Projekt steht unter der MIT-Lizenz.

## 🐛 Probleme melden

Bei Problemen oder Verbesserungsvorschlägen erstellen Sie bitte ein Issue im GitHub Repository.
