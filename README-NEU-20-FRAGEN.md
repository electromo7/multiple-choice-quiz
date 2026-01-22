# 20 Neue Prüfungsfragen - Bankenaufsichtsrecht für die Praxis

## 📋 Übersicht

Diese Datei enthält **20 neue Multiple-Choice-Fragen**, die aus dem Dokument "Bankenaufsichtsrecht für die Praxis" erstellt wurden.

## 📚 Themengebiete

Die Fragen decken folgende Bereiche ab:

### Kapitel 1: Warum Bankenaufsicht?
- **Frage 1**: Hauptgrund für Bankenaufsicht
- **Frage 2**: Zusammenarbeit FMA, EZB und OeNB
- **Frage 3**: Aufgaben der EBA
- **Frage 4**: Single Rulebook (CRR und CRD)

### Kapitel 2: Konzessionserfordernis und Zugangsbeschränkungen
- **Frage 5**: Zulässige Rechtsformen für Banken
- **Frage 6**: Voraussetzungen für Geschäftsleitung
- **Frage 7**: Propriety (persönliche Zuverlässigkeit)
- **Frage 8**: Anzeigepflichten bei Eigentümerstruktur
- **Frage 19**: Konzessionspflichtige Bankgeschäfte
- **Frage 20**: Konsequenzen bei unbefugtem Betreiben

### Kapitel 3: Solvabilität – Säule 1
- **Frage 9**: Zweck von Eigenmitteln
- **Frage 10**: Anerkennung genossenschaftliches Geschäftsanteilkapital
- **Frage 11**: Sockelbetragslösung
- **Frage 12**: Zusammensetzung der Eigenmittel
- **Frage 13**: Mindesteigenmittelquoten
- **Frage 14**: SREP-Zuschlag
- **Frage 15**: Kapitalpufferanforderungen
- **Frage 16**: Konsequenzen bei Unterschreitung
- **Frage 17**: Leverage Ratio (Verschuldungsquote)
- **Frage 18**: Corresponding Deduction Approach

## ✅ Qualitätsmerkmale

- ✓ Alle Fragen sind **neu** und kommen nicht in RBM3 oder RBM4 vor
- ✓ **Praxisrelevant** basierend auf offiziellem Schulungsmaterial
- ✓ **Multiple-Choice** mit 2-4 richtigen Antworten
- ✓ Unterschiedliche **Schwierigkeitsgrade**
- ✓ Deckung wichtiger **Kernthemen** des Bankenaufsichtsrechts

## 📊 Statistik

- **Gesamtanzahl**: 20 Fragen
- **Durchschnittliche Anzahl Optionen**: 4
- **Fragen mit 1 richtiger Antwort**: 1
- **Fragen mit 2 richtigen Antworten**: 3
- **Fragen mit 3 richtigen Antworten**: 11
- **Fragen mit 4 richtigen Antworten**: 5

## 🔄 Integration in bestehende Quiz

Um diese Fragen in das bestehende Quiz zu integrieren:

### Option 1: Eigenständiges Quiz
```bash
# Quiz nur mit den neuen 20 Fragen erstellen
python3 generate_neu_quiz.py
```

### Option 2: Kombination mit RBM3 & RBM4
```bash
# Alle Fragen kombinieren (RBM3 + RBM4 + NEU = 72 Fragen)
python3 generate_combined_quiz.py
```

## 📝 Dateiformat

Die Fragen folgen dem gleichen JSON-Format wie die bestehenden Fragen:

```json
{
  "question": "Fragentext",
  "options": [
    "a. Option 1",
    "b. Option 2",
    "c. Option 3",
    "d. Option 4"
  ],
  "correct_indices": [0, 2]  // 0-basiert
}
```

## 🎓 Lernziele

Diese Fragen helfen beim Verständnis von:
- Grundlagen der Bankenaufsicht und deren Notwendigkeit
- Organisationsstruktur der Aufsichtsbehörden (FMA, EZB, OeNB, EBA)
- Konzessionsvoraussetzungen und rechtliche Anforderungen
- Eigenmittelanforderungen und Kapitalpuffer
- Risikomanagement und Solvabilitätsregeln

## 📅 Erstellungsdatum

22. Januar 2026

## 📄 Quelle

Dokument: "Bankenaufsichtsrecht für die Praxis.pdf"
