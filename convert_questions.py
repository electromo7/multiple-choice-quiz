import json
import re

def clean_question_text(question_text):
    """
    Entfernt Quellenangaben vom Ende der Frage
    """
    # Entferne Patterns wie "Marold S. 13-16", "Siehe Seite...", etc.
    patterns = [
        r'\s*,?\s*Marold\s+[Ss]\.?\s*\d+[-–]\d+.*$',
        r'\s*,?\s*Marold\s+[Ss]eite\s+\d+.*$', 
        r'\s*,?\s*[Ss]iehe\s+[Ss]eite.*$',
        r'\s*,?\s*[Ss]iehe\s+[Ss]\..*$',
        r'\s*,?\s*Deloitte\s+[Ss]\.?\s*\d+.*$',
        r'\s*,?\s*Dellinger\s+[Ss]\.?\s*\d+.*$',
        r'\s*,?\s*EZB\s+Leitfaden.*$',
        r'\s*,?\s*OeNB\s+Leitfaden.*$',
        r'\s*,?\s*Steinmüller[,\s]+[Ss]\.?\d+.*$',
        r'\s*,?\s*\([^)]*[Ss]eite[^)]*\).*$'
    ]
    
    cleaned_text = question_text
    for pattern in patterns:
        cleaned_text = re.sub(pattern, '', cleaned_text, flags=re.IGNORECASE)
    
    return cleaned_text.strip()

def clean_option_text(option_text):
    """
    Entfernt a., b., c., d. Präfixe von Antwortoptionen
    """
    # Entferne Patterns wie "a.", "b.", "c.", "d." am Anfang
    cleaned_text = re.sub(r'^[a-d]\.?\s*', '', option_text.strip(), flags=re.IGNORECASE)
    return cleaned_text

def convert_json_to_js_questions():
    """
    Konvertiert die mcq_questions.json Datei in JavaScript-Format 
    für GitHub Pages Kompatibilität mit verbesserter Bereinigung
    """
    
    # JSON-Datei laden
    with open('mcq_questions.json', 'r', encoding='utf-8') as file:
        questions = json.load(file)
    
    # Filtere Fragen und entferne "Siehe Seite..." Optionen
    cleaned_questions = []
    
    for question in questions:
        # Bereinige den Fragetext
        cleaned_question_text = clean_question_text(question['question'])
        
        cleaned_options = []
        correct_indices_mapping = {}
        new_index = 0
        
        # Filtere Optionen und erstelle neues Index-Mapping
        for old_index, option in enumerate(question['options']):
            # Überspringe "Siehe Seite..." Einträge
            if ('siehe seite' in option.lower() or 
                'siehe s.' in option.lower() or
                'marold' in option.lower() or
                'deloitte' in option.lower() or
                'dellinger' in option.lower()):
                continue
                
            # Bereinige die Option (entferne a., b., c., d.)
            cleaned_option = clean_option_text(option)
            if cleaned_option:  # Nur wenn nicht leer nach Bereinigung
                cleaned_options.append(cleaned_option)
                correct_indices_mapping[old_index] = new_index
                new_index += 1
        
        # Aktualisiere correct_indices basierend auf dem neuen Mapping
        new_correct_indices = []
        for old_index in question['correct_indices']:
            if old_index in correct_indices_mapping:
                new_correct_indices.append(correct_indices_mapping[old_index])
        
        # Nur Fragen mit gültigen Optionen hinzufügen
        if cleaned_options and new_correct_indices:
            cleaned_questions.append({
                'question': cleaned_question_text,
                'options': cleaned_options,
                'correct_indices': new_correct_indices
            })
    
    # JavaScript-Code generieren
    js_content = """// Fragen direkt als JavaScript-Array eingebettet für GitHub Pages Kompatibilität
const QUIZ_QUESTIONS = """
    
    # JSON zu JavaScript String konvertieren
    js_content += json.dumps(cleaned_questions, indent=2, ensure_ascii=False)
    js_content += ";\n\n"
    
    # Restlichen JavaScript-Code aus der Vorlage lesen
    with open('script-github.js', 'r', encoding='utf-8') as file:
        template_content = file.read()
    
    # Entferne die Beispiel-Daten aus der Vorlage
    template_start = template_content.find('class MultipleChoiceQuiz')
    if template_start != -1:
        js_content += template_content[template_start:]
    
    # Neue Datei schreiben
    with open('script-complete.js', 'w', encoding='utf-8') as file:
        file.write(js_content)
    
    print(f"✅ Konvertierung abgeschlossen!")
    print(f"📊 {len(cleaned_questions)} Fragen verarbeitet")
    print(f"📝 Neue Datei erstellt: script-complete.js")
    
    return len(cleaned_questions)

if __name__ == "__main__":
    convert_json_to_js_questions()
