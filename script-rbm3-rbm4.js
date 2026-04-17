// Fragen direkt als JavaScript-Array eingebettet für GitHub Pages Kompatibilität
// RBM3 (40 Fragen) + RBM4 (12 Fragen) = 52 Fragen gesamt
const QUIZ_QUESTIONS = [
  {
    "question": "Welche der foglenden Kapitalinstrumente zählen nach CRR/CRR II zum harten Kernkapital (CET1)?",
    "options": [
      "a. Gewinnvortrag",
      "b. Staatliches Partizipationskapital",
      "c. Stammeinlagen",
      "d. Gewinnrücklage"
    ],
    "correct_indices": [
      1,
      2,
      3
    ]
  },
  {
    "question": "Welche(n) Unterschied(e) gibt es zwischen G&V-Sicht und Deckungsbeitrags-Sicht in der Erfolgsrechnung?",
    "options": [
      "a. Der Unterschied ergibt sich aus der unterschiedlichen Betrachtung von effektiv anfallenden Kosten zu kalkulierten Standardkosten",
      "b. Der Unterschied ergibt sich aus der genaueren Rechnung der G&V-Sicht",
      "c. Es gibt Unterschiede, aber beide Systeme führen zum gleichen Ergebnis",
      "d. Die Deckungsbeitragssicht führt auf Grund der berücksichtigten Haftkapitalkosten in der Regel zu einem niedrigeren Ergebnis"
    ],
    "correct_indices": [
      0,
      3
    ]
  },
  {
    "question": "Wem obliegt in einer Bank die Verantwortung für die Risikostrategie?",
    "options": [
      "a. Die Geschäftsleiter:innen legen die Geschäftsstrategie fest. Die Risikostrategie wird vom Risikomanagement entwickelt.",
      "b. Das Risikomanagement ist für die ordnungsgemäße Umsetzung der Risikostrategie verantwortlich.",
      "c. Für die ordnungsgemäße Umsetzung der Risikostrategie ist die Geschäftsleitung verantwortlich.",
      "d. Die Geschäftsleiter:innen legen im Rahmen der Geschäftsstrategie auch eine Risikostrategie fest."
    ],
    "correct_indices": [
      2,
      3
    ]
  },
  {
    "question": "Welche der folgenden Aussagen ist/sind in Bezug auf die Leverage Ratio korrekt?",
    "options": [
      "a. Die Leverage Ratio wird folgendermaßen errechnet: Kernkapital (T1)/(ungewichteten) bilanziellen und außerbilanziellen Aktivpositionen",
      "b. Die Leverage Ratio stellt eine Kennzahl dar, die im Gegensatz zu Eigenmittelquote den Risikogehalt der einzelnen Geschäfte nicht berücksichtigt.",
      "c. Die Leverage Ratio ist mit dem 1.1.2016 einzuhalten",
      "d. Die Leverage Ratio beträgt 35%"
    ],
    "correct_indices": [
      0,
      1
    ]
  },
  {
    "question": "Wie entsteht eine Kreditentscheidung eines risikorelevanten Geschäftes in einer Bank?",
    "options": [
      "a. Eine Kreditgewährung erfordert ein zustimmendes Votum der Bereiche Markt und Marktfolge.",
      "b. Für den Fall einander abweichender Voten, kann der Kredit auf eine höhere Kompetenzstufe verlagert werden.",
      "c. Kreditentscheidungen, die vom Votum des anderen Bereiches abweichen, können positiv getroffen werden, sind aber im Risikobericht zu dokumentieren.",
      "d. Kreditentscheidungen, die vom Votum des anderen Bereiches abweichen, gelten grundsätzlich als abgelehnt."
    ],
    "correct_indices": [
      0,
      1,
      2
    ]
  },
  {
    "question": "Welche der folgenden Quellen ist/sind NICHT verpflichtend anzuwenden?",
    "options": [
      "a. Akte des Baseler Ausschusses (BCBS)",
      "b. Rechtsakte der FMA",
      "c. Die Kapitaladäquanzverordnung (Capital Requirements Regulation – CRR)",
      "d. Das Bankwesengesetz (BWG)"
    ],
    "correct_indices": [
      0
    ]
  },
  {
    "question": "Welche Risikoart(en) gehört/gehören zum Kreditrisiko?",
    "options": [
      "a. Ausfallsrisiko",
      "b. Fremdwährungsrisiko",
      "c. Konzentrationsrisiko",
      "d. Länderrisiko"
    ],
    "correct_indices": [
      0,
      2
    ]
  },
  {
    "question": "Kreditinstitute und Kreditinstitutsgruppen haben das besondere bankgeschäftliche Risiko von Großkrediten jederzeit angemessen zu begrenzen. Vorgabe(n) ist/sind gemäß CRR II für Großkredite zu beachten?",
    "options": [
      "a. Bei der Ermittlung von Großkrediten sind anzusetzen: Aktivposten, außerbilanzmäßige Geschäfte, Derivate und Handelsbuchpositionen.",
      "b. Ein Großkredit liegt ab mindestens 350.000 Euro vor.",
      "c. Bei der Ermittlung von Großkrediten sind anzusetzen: Aktivposten, außerbilanzmäßige Geschäfte, Derivate und Verbindlichkeiten.",
      "d. Ein Großkredit liegt vor, wenn ein solcher bei einem Kunden oder bei einer Gruppe verbundener Kunden 10% des Kernkapitals des Kreditinstitutes erreicht."
    ],
    "correct_indices": [
      0,
      3
    ]
  },
  {
    "question": "Welche der folgenden Aussagen in Bezug auf den Abschlussprüfer ist/sind zutreffend?",
    "options": [
      "a. Das Ergebnis der Prüfung ist in einer Anlage zum Prüfbericht über den Jahresabschluss darzustellen.",
      "b. Der Abschlussprüfer hat über das Ergebnis der Prüfung mündlich dem Aufsichtsrat zu berichten.",
      "c. Die CRR verpflichtet jedes Kreditinstitut zur Prüfung des Jahresabschlusses.",
      "d. Der Abschlussprüfer hat über das Ergebnis der Prüfung schriftlich zu berichten."
    ],
    "correct_indices": [
      0,
      3
    ]
  },
  {
    "question": "Welche der folgenden Vermögensbestandteile werden zukünftig zu den „hoch liquiden Aktiva“ gezählt, um die Liquidity Coverage Ratio...?",
    "options": [
      "a. Staatsanleihen der Republik Österreich",
      "b. Hypothekarisch besicherte Immobilienkredit an Privatkunden",
      "c. Bargeld (Münzen und Banknoten)",
      "d. Unternehmensanleihen mit Ratings von BB+ oder schlechter"
    ],
    "correct_indices": [
      0,
      2
    ]
  },
  {
    "question": "Wann liegt eine entschuldbare Fehlleistung vor?",
    "options": [
      "a. Eine entschuldbare Fehlleistung liegt vor, wenn der Schaden nur gering ist.",
      "b. Eine entschuldbare Fehlleistung liegt vor, wenn der Kunde Mitschuld hat.",
      "c. Eine entschuldbare Fehlleistung liegt vor, wenn der Eintritt eines Schadens nur bei außergewöhnlicher Aufmerksamkeit voraussehbar gewesen wäre.",
      "d. Eine entschuldbare Fehlleistung liegt vor, wenn der Aufsichtsrat dem zugestimmt hat."
    ],
    "correct_indices": [
      2
    ]
  },
  {
    "question": "Welche Berichtspflichten an den Aufsichtsrat gibt es?",
    "options": [
      "a. Quartalsbericht über Gang der Geschäfte und Lage des Unternehmens im Vergleich zur Vorschaurechnung und unter Berücksichtigung der künftigen Entwicklungen",
      "b. Bericht über Projektgeschäfte mind. 1 x pro Jahr bei Vorausbeschlüssen des Aufsichtsrats",
      "c. Monatlicher Kreditrisikobericht inkl. Entwicklung der Bonität der Kunden und aktuellem Wert der Sicherheiten",
      "d. Jahresbericht inkl. künftige Geschäftspolitik und künftiger Entwicklung (Vorschaurechnung) in schriftlicher Form"
    ],
    "correct_indices": [
      0,
      3
    ]
  },
  {
    "question": "Sie stehen in der Bank vor der Situation der Kreditentscheidung eines risikorelevanten Geschäftes. Sie haben sich bestens beraten und ein Votum abgelegt. Sie haben dafür gestimmt, der Kollege dagegen. Welche Aussage(n) ist/sind in diesem Zusammenhang korrekt?",
    "options": [
      "a. Sie berufen noch eine Sitzung mit den Geschäftsleiterkollegen ein und legen die Fakten nochmals dar, um ihn von der Finanzierung zu überzeugen.",
      "b. Bei der Finanzierung dieses Kredites ist darauf zu achten, dass es im Risikobericht erwähnt wird.",
      "c. Sie haben keine Möglichkeit den Kredit zu finanzieren, weil Kreditentscheidungen, die vom Votum des anderen Bereichs abweichen, gelten grundsätzlich als abgelehnt.",
      "d. Sie können mit den Funktionären sprechen und so das Votum auf die höhere Kompetenzstufe verlagern."
    ],
    "correct_indices": [
      1
    ]
  },
  {
    "question": "Welche der folgenden Punkte muss eine Raiffeisenbank im Rahmen der Geldwäschereibekämpfung beachten?",
    "options": [
      "a. Sämtliche verdächtige Kunden und Transaktionen müssen bei der Geldwäschemeldestelle des Bundeskriminalamts gemeldet werden.",
      "b. Regelmäßige Schulungen der Mitarbeiter müssen stattfinden.",
      "c. Bankgeschäfte von Bekannten der Geschäftsleiter unterliegen nicht dem Know your customer Prinzip.",
      "d. Ein Geldwäschebeauftragter muss bestellt werden."
    ],
    "correct_indices": [
      0,
      1,
      3
    ]
  },
  {
    "question": "Welche der folgenden Aussagen zum Wettbewerbsverbot für Geschäftsleiter:innen einer Genossenschaftsbank trifft/treffen zu?",
    "options": [
      "a. Das Wettbewerbsverbot gilt für eine Dauer von sieben Jahren",
      "b. Eine dienstvertragliche Konkurrenzklausel für Geschäftsleiter:innen ist nicht üblich",
      "c. Geschäftsleiter:innen dürfen einen Hauptberuf außerhalb des Bankwesens ausüben",
      "d. Sowohl das GenG als auch das BWG enthalten kein Wettbewerbsverbot für Geschäftsleiter:innen"
    ],
    "correct_indices": [
      3
    ]
  },
  {
    "question": "Was versteht man unter Entlastung?",
    "options": [
      "a. Die Befreiung der Geschäftsleitung von ihrer Haftung durch die Genehmigung seiner Entscheidung durch die Generalversammlung.",
      "b. Die Befreiung des Geschäftsleiters von seiner Haftung durch die Genehmigung seiner Entscheidung durch andere Geschäftsleiter:innen.",
      "c. Die Befreiung der Generalversammlung von ihrer Haftung durch die Genehmigung ihrer Entscheidung durch die Geschäftsleiter:innen.",
      "d. Die Befreiung der Mitarbeiter:innen von ihrer Haftung durch die Genehmigung seiner Entscheidung durch die Geschäftsleiter:innen."
    ],
    "correct_indices": [
      0
    ]
  },
  {
    "question": "Darf der ICAAP-Prozess oder Teile davon outgesourct werden?",
    "options": [
      "a. Nein, der gesamte ICAAP-Prozess muss sowohl organisatorisch als auch steuerungstechnisch und auch die gesamte Abwicklung bzw. Durchführung immer in Geschäftsleiter:innen einer Bank sein",
      "b. Der ICAAP Prozess gilt nur für Landesbanken, daher ist dies für Geschäftsleiter:innen irrelevant.",
      "c. Ja, der gesamte ICAAP-Prozess inklusive der Gesamtverantwortung für die Einhaltung des ICAAP darf outgesourct werden, wenn eine detaillierte Dokumentation...",
      "d. Ja, teile des ICAAP-Prozesses können outgesourct werden, wenn die Gesamtverantwortung für die Einhaltung des ICAAP bei den Geschäftsleiter:innen verbleibt"
    ],
    "correct_indices": [
      3
    ]
  },
  {
    "question": "Welche vier Voraussetzungen gibt es beim Schadenersatz?",
    "options": [
      "a. Schaden, Kausalität, Rechtswidrigkeit und Verschulden",
      "b. Schaden, Kausalität, Vorsatz, Rechtswidrigkeit",
      "c. Tatbestandsmäßigkeit, Rechtswidrigkeit, Schuld",
      "d. Schaden, Kausalität, dolus eventualis, Bereicherung"
    ],
    "correct_indices": [
      0
    ]
  },
  {
    "question": "Das interne Kontrollsystem...",
    "options": [
      "a. ...ist von der internen Revision mindestens alle 2 Monate zu prüfen und es ist dem Aufsichtsrat mindestens alle 2 Monate darüber zu berichten",
      "b. ...ist von der internen Revision mindestens vierteljährlich zu prüfen und es ist dem Aufsichtsrat mindestens halbjährlich darüber zu berichten",
      "c. ...ist von der internen Revision mindestens halbjährlich zu prüfen und es ist dem Aufsichtsrat mindestens jährlich darüber zu berichten",
      "d. ...ist von der internen Revision mindestens einmal jährlich zu prüfen und es ist dem Aufsichtsrat mindestens einmal jährlich darüber zu berichten"
    ],
    "correct_indices": [
      3
    ]
  },
  {
    "question": "Welche Maßnahmen helfen Ihnen bei der Vermeidung eines Untreuevorwurfs?",
    "options": [
      "a. Bilaterale Abstimmung mit GL Kolleg:innen",
      "b. Einholung der Zustimmung der Generalversammlung",
      "c. Einholung der Zustimmung durch Leitungs- und Kontrollausschuss",
      "d. Dokumentation von Entscheidungen"
    ],
    "correct_indices": [
      0,
      2,
      3
    ]
  },
  {
    "question": "Der Member Value ist ein zentrales Anreizelement für das Mitwirken von Mitgliedern in einer Genossenschaft. Der wichtigste unmittelbare Member Value. Welche Praxisbeispiele für unmittelbaren Member Value in Raiffeisenbanken sind richtig?",
    "options": [
      "a. Zum unmittelbaren Member Value zählt die Minderung von Risiko",
      "b. Der unmittelbare Member Value ermöglicht ein Mitwirkungs- und Entscheidungsrecht",
      "c. Eine weitere Aufgabe wäre die Mitverantwortung für Marketing",
      "d. Durch diesen kann man Mitglieder:innen in ihrer Wertschöpfung unterstützen"
    ],
    "correct_indices": [
      3
    ]
  },
  {
    "question": "Welche Maßnahmen eines Geschäftsleiters / einer Geschäftsleiterin trägt zur Förderung von Kooperation innerhalb der Genossenschaft & Verbund bei? (Grundlegende Faktoren zur Förderung von Kooperation)",
    "options": [
      "a. Kommunikation",
      "b. Vertrauen",
      "c. Teamdesign",
      "d. Diversität"
    ],
    "correct_indices": [
      0,
      1,
      2,
      3
    ]
  },
  {
    "question": "Wie ist die Principal-Agent-Problematik in der Genossenschaft zu meistern?",
    "options": [
      "a. Ausblenden von künftigen Aspekten der Entscheidungen",
      "b. Aktives Beziehungsmanagement zwischen Principals und Agents",
      "c. Rollenklarheit fördern – Verantwortlichkeiten festlegen",
      "d. Bewusst machen auch der kleineren Differenzen"
    ],
    "correct_indices": [
      1,
      2,
      3
    ]
  },
  {
    "question": "Die Business Judgement Rule regelt einen Teilbereich der Haftung für Geschäftsleiter:innen und Vorständ:innen. Welche ist/sind in Bezug auf diese korrekt?",
    "options": [
      "a. Die Regelung besagt, dass sich geschäftsführende Organe bei deren Entscheidungen und Handlungen keinesfalls von sachfremden Interessen leiten lassen",
      "b. Entscheidungen lassen vermuten, dass diese zum eigenen Wohle des Entscheiders / der Entscheiderin und zum Wohle des Unternehmens getroffen wurden",
      "c. Entscheidungen sind auf Basis von angemessenen Informationen zu treffen",
      "d. Die Regelung gilt für besonders wichtige unternehmerische Entscheidungen, welche das langfristige Fortbestehen des Unternehmens betreffen."
    ],
    "correct_indices": [
      0,
      2
    ]
  },
  {
    "question": "Kooperationskompetenz ist für Manager:innen in einer genossenschaftlichen Verbundstruktur relevanter denn je. Aus diesem Grund ist Kooperationskompetenz neben anderen Kompetenzfeldern Teil des Kompetenzprofils im Raiffeisen Berufsbild Geschäftsleiter:innen. Welche Aussagen ist/sind in Bezug auf die Kooperationskompetenz korrekt?",
    "options": [
      "a. Der Grundsatz von Solidarität und Subsidiarität wird großgeschrieben und die Werte dieser im Netzwerk einer Genossenschaft gelebt",
      "b. Unter Kooperationskompetenz fällt auch die Fähigkeit, Chancen am lokalen Markt strategisch und operativ zu nutzen.",
      "c. Kooperationskompetenz heißt unter anderem lösungsorientiert zu handeln, sobald Interessenskonflikte erkannt werden",
      "d. Kooperationskompetenz zu besitzen, heißt standhaft in der Ausführung von Entscheidungen zu sein und Rahmenbedingungen zeitnah bestimmen zu können."
    ],
    "correct_indices": [
      0,
      2
    ]
  },
  {
    "question": "Das Modell „BANI“ (Brittle, Anxious, Non-Linear, Incomprehensible) ist ein Erklärungsmodell für chaotische Zeiten und es kann unter Veränderungen der Arbeitswelt besser wahrnehmen und entsprechende Maßnahmen abzuleiten. Welche Aussagen im Zusammenhang ... sind richtig?",
    "options": [
      "a. Das BANI-Modell ersetzt die SWOT-Analyse im Strategieprozess, wenn das Umfeld immer komplexer und chaotischer wird.",
      "b. Das BANI-Modell ist für Raiffeisenbanken nicht geeignet, da die Genossenschaftsstrukturen seit vielen Jahren etabliert und gut kontrollierbar sind.",
      "c. Das BANI-Modell kommt zur Anwendung, wenn Ursache und Wirkung nicht mehr nachvollziehbar sind und in keinem bekannten Verhältnis stehen.",
      "d. Das BANI-Modell kann unterstützen, wenn die Komplexität und Ängstlichkeit zunehmen und viele Dinge nicht mehr greifbar sind."
    ],
    "correct_indices": [
      2,
      3
    ]
  },
  {
    "question": "Was zeichnet agiles Arbeiten aus?",
    "options": [
      "a. Wenn mir sonst nichts einfällt.",
      "b. Bei hoher Komplexität und Unsicherheit.",
      "c. Wenn es alle machen und wir mit dabei sein wollen.",
      "d. Wenn wir fokussiert Kundenwert schaffen wollen bei wechselnden Anforderungen."
    ],
    "correct_indices": [
      1,
      3
    ]
  },
  {
    "question": "In Ihrer Rolle als Unternehmenslenker*in können Sie sich bei der Zielformulierung leicht zu merkende Zielformulierungs-methoden z... dabei die GUT-Methode?",
    "options": [
      "a. Genau – Umsetzbar – Terminiert",
      "b. Genau – Umfangreich – Terminiert",
      "c. Genau – Umfangreich – Themenspezifisch",
      "d. Genau – Umsetzbar – Treffsicher"
    ],
    "correct_indices": [
      0
    ]
  },
  {
    "question": "Welche Frage/n steht/stehen bei der Planung strategischer Maßnahmen im Fokus?",
    "options": [
      "a. Welche Aktivitäten müssen wir setzen, um das Ziel zu erreichen?",
      "b. Wie verteilen wir die Verantwortung für die kurz und mittelfristigen Ziele?",
      "c. Wer ist verantwortlich für die Planung und Umsetzung der strategischen Aktivitäten?",
      "d. Welche möglichen Zielkonflikte sind zu erwarten und wie lösen wir sie?"
    ],
    "correct_indices": [
      0,
      2,
      3
    ]
  },
  {
    "question": "Der leitende Grundgedanke für den Einsatz einer Balanced Scorecard lautet: „Strategie in die Umsetzung bringen (from strategy to implementation). Welche Ausprägungspaare bestimmen die vier Felder einer BSC?",
    "options": [
      "a. Finanzen – Lernen & Entwickeln (Potenziale)",
      "b. Ertrag – Kosten",
      "c. Kunden & Markt – interne Prozesse",
      "d. Zahlen, Daten, Fakten – Bilanzwerte"
    ],
    "correct_indices": [
      0,
      2
    ]
  },
  {
    "question": "Im Zuge des Zieleplanungsprozesses im strategischen Management gilt es Ziele immer im Bewußtsein zu definieren, dass ... Beziehung zueinander stehen. Welche möglichen Zielbeziehungen gibt es dabei zu berücksichtigen?",
    "options": [
      "a. befeuernde ziele",
      "b. konkurrierende Ziele",
      "c. bestätigende Ziele",
      "d. komplementäre Ziele"
    ],
    "correct_indices": [
      1,
      3
    ]
  },
  {
    "question": "Sich laufend verändernde Rahmenbedingungen und Umweltveränderungen stellen eine Organisation vor Herausforderungen und lösen.. Veränderungsnotwendigkeiten aus. Um sich möglichst gut darauf vorbereiten zu können, können im Zuge einer Szenarioanalyse mehrere durchgedacht werden. Welche Szenarien sollten dabei auf alle Fälle beleuchtet werden?",
    "options": [
      "a. Ein mögliches Trendszenario, wenn von keinen großen Veränderungen ausgegangen wird",
      "b. Ein mögliches worst case Szenario",
      "c. Ein mögliches best case Szenario",
      "d. Ein mögliches most likely Szenario"
    ],
    "correct_indices": [
      0,
      1,
      2
    ]
  },
  {
    "question": "Wie gestaltet sich die Vorgehensweise zur Erstellung einer Balanced Scorecard (BSC)?",
    "options": [
      "a. Vision & Strategie klären – Strategische Ziele festlegen & verknüpfen – Messgrößen bestimmen – Zielwerte abstimmen – Maßnahmen selektieren",
      "b. Finanzkennzahlen festlegen – Strategien formulieren – Maßnahme definieren – Umsetzung planen",
      "c. Vision definieren – Strategien formulieren – Operative Ziele festlegen – Kennzahlen ermitteln – Zielwerte festlegen",
      "d. Strategische Ziele festlegen – Maßnahmen bestimmen – Zielwerte & Messgrößen abstimmen – Vision ableiten"
    ],
    "correct_indices": [
      0
    ]
  },
  {
    "question": "Im strategischen Management ist die Beschäftigung mit unterschiedlichen Zukunftsszenarien unumgänglich. Welche Komponente gibt’s im Szenario-Management?",
    "options": [
      "a. Vernetztes Denken und Handeln",
      "b. Zukunftsoffenes Denken und Handeln",
      "c. Strategisches Denken und Handeln",
      "d. Vorbeugendes Denken und Handeln"
    ],
    "correct_indices": [
      0,
      1,
      2
    ]
  },
  {
    "question": "Die ansteigende Komplexität im Unternehmenskontext führt dazu, dass gerade eine genaue und konkrete Zieldefinition immer me... Welche Schritte helfen bei einer solcher Zieledefinition?",
    "options": [
      "a. Zielideen zu sammeln und Zielkategorien zu definieren",
      "b. Ziele immer komplementär qualitativ und quantitativ festzuhalten",
      "c. Ziele immer extern prüfen und evaluieren zu lassen",
      "d. Ziele laufend zu überprüfen"
    ],
    "correct_indices": [
      0,
      3
    ]
  },
  {
    "question": "Die Rolle als Geschäftsleiter:in mit einem/r Kolleg:in macht dir zwar Spaß, hin und wieder in der „Alltag als Führungs-Duo“ a... kommt regelmäßig zu Reibereien. Du überlegst, was du selbst beitragen kannst, damit ihr beide gut und konstruktiv zusammen kommt. Welche Maßnahme(n) kommt/kommen in Frage?",
    "options": [
      "a. Fortschritte feiern",
      "b. Konflikte analysieren",
      "c. Regelmäßig reden",
      "d. Aufgaben aufteilen"
    ],
    "correct_indices": [
      0,
      1,
      2,
      3
    ]
  },
  {
    "question": "Du bist dir bewusst, dass Fragen, vor allem euch in der Kommunikation mit deinen Mitarbeiter:innen, ein wichtiges Instrument für Fragen, die dem Gegenüber oft helfen, neue Perspektiven einzunehmen, sind die sogenannten „zirkulären Fragen“. Welche Frage(n) gehört/gehören dazu?",
    "options": [
      "a. Wie könnte man das Ergebnis noch bewerten?",
      "b. Auf einer Skala von 1 bis 10, wie groß ist dein Problem heute?",
      "c. Was würde der Kunde sagen, wenn wir ihn um eine Lösung bitten würden?",
      "d. Wenn deine Kollegin jetzt hier säße und ich würde sie fragen, wie sie die Situation einschätzt, was würde sie mir erzählen?"
    ],
    "correct_indices": [
      2,
      3
    ]
  },
  {
    "question": "Eine deiner Führungskräfte, fachlich und inhaltlich top, hat das Gefühl, wenig Wirkung und „Macht“ bei ihren Mitarbeiter:innen zu haben. Sie unterstützen, selbst zu erkennen, wie viel Macht im positiven Sinn sie tatsächlich hat. Vor allem ihr Fachwissen und ihren Stärken. Welche Art(en) von Macht steht/stehen damit im Zusammenhang?",
    "options": [
      "a. Expertenmacht",
      "b. Sanktionsmacht",
      "c. Kommunikationsmacht",
      "d. Charismatische Macht"
    ],
    "correct_indices": [
      0
    ]
  },
  {
    "question": "Die Anzahl an Entscheidungen, die du täglich treffen musst, nimmt ständig zu, deine Mitarbeiter*innen kommen mit jeder noch so.. und treffen sie nicht selbstständig. Das möchtest du nun ändern. Du erinnerst dich dabei an das System von Jürgen Appelo mit solcher Entscheidungsdelegation. In welchen dieser Stufen entscheidest du als Führungskraft selbst (mit)?",
    "options": [
      "a. Erkundigen",
      "b. Beraten",
      "c. Verkünden",
      "d. Einigen"
    ],
    "correct_indices": [
      2,
      3
    ]
  },
  {
    "question": "Du hast das Gefühl, dass die Arbeit Tag für Tag mehr wird, deine Effizienz leidet und du mehr und mehr mit „Kleinkram“ beschäftigt bist. Die Zeit für strategische Themen und fürs Führen in deiner Rolle für deinen Erfolg maßgeblich ist. Also beschließt du, etwas zu verändern. Die Themen rund um die Kundenbetreuung das „Pareto-Prinzip“ zu beherzigen, um wieder mehr Zeit zur Verfügung zu haben. Was wirst du tun?",
    "options": [
      "a. Du delegierst die dringenden Kundenanfragen an 20% deiner Mitarbeiter:innen, alles andere besprichst du mit dem Rest des Teams.",
      "b. Du erledigst 80% deiner Aufgaben bis 17 Uhr, danach die 20% die deine Kund:innen betreffen",
      "c. Du konzentrierst dich auf jene 20% deiner Kund:innen, die rund 80% des Umsatzes bringen.",
      "d. Du strengst dich nur mehr zu 80% an, wenn es um Kundenbetreuung geht und hoffst, dass es niemanden auffällt."
    ],
    "correct_indices": [
      2
    ]
  },
  {
    "question": "1. Unter welchen Voraussetzungen kann eine Generalversammlung als Delegiertenversammlung abgehalten werden?",
    "options": [
      "a. Die Genossenschaft muss zwischen 100 und 400 Mitglieder haben.",
      "b. Die Genossenschaft muss mindestens 500 Mitglieder haben und die Satzung muss die Delegiertenversammlung ab 500 Mitglieder vorsehen.",
      "c. Der Vorstand hat eine Sprengeleinteilung festzulegen.",
      "d. Die Mitglieder sind einem bestimmten Sprengel zuzuordnen."
    ],
    "correct_indices": [
      1,
      2,
      3
    ]
  },
  {
    "question": "2. In welchem/-n Fall/Fällen spricht man von gemischter Gesamtprokura: Der Gesamtprokurist der Raiffeisenbank zeichnet in Bankgeschäften gemeinsam …",
    "options": [
      "a. mit einem zweiten Prokuristen.",
      "b. mit einem der Geschäftsleiter.",
      "c. mit einem ehrenamtlichen Vorstandsmitglied.",
      "d. mit einem sonstigen Handlungsbevollmächtigten.",
      "e. mit einem hauptberuflichen Vorstandsmitglied."
    ],
    "correct_indices": [
      1,
      4
    ]
  },
  {
    "question": "3. Die Eintragung der in der letzten GV neu gewählten und die Löschung der ausgeschiedenen Vorstandsmitglieder sind durch wen zu beantragen?",
    "options": [
      "a. Den neu gewählten Vorstand.",
      "b. Den bisherigen Vorstand.",
      "c. Die Geschäftsleiter."
    ],
    "correct_indices": [
      0
    ]
  },
  {
    "question": "4. Die Satzungsänderung wird rechtswirksam durch …",
    "options": [
      "a. eine Beschlussfassung in der Generalversammlung.",
      "b. die Eintragung im Firmenbuch."
    ],
    "correct_indices": [
      1
    ]
  },
  {
    "question": "6. Welche Schritte sind für eine Genossenschaftsgründung erforderlich?",
    "options": [
      "a. mindestens 2 Personen (Proponenten).",
      "b. hauptberufliche Mitarbeiter.",
      "c. ausgefertigte Satzung mit Geschäftszweck.",
      "d. Wahl eines Aufsichtsrates."
    ],
    "correct_indices": [
      0,
      2
    ]
  },
  {
    "question": "7. Welche rechtlichen Voraussetzungen sind für den Erwerb einer Mitgliedschaft erforderlich? (unter Voraussetzung eines ehrenamtlichen Vorstandes)",
    "options": [
      "a. Beschluss des Vorstandes.",
      "b. Beschluss des Aufsichtsrates.",
      "c. schriftliche Beitrittserklärung des Mitgliedes.",
      "d. geordnete Vermögensverhältnisse."
    ],
    "correct_indices": [
      0,
      2
    ]
  },
  {
    "question": "8. Welche Aufgaben bekommt das Organ \"Vorstand\" nach einer Umstellung auf den hauptberuflichen Vorstand zusätzlich dazu?",
    "options": [
      "a. Führung der Bankgeschäfte.",
      "b. Einberufung der Generalversammlung.",
      "c. Führung des Mitgliederregisters.",
      "d. Aufnahme und Ausschluss von Mitgliedern."
    ],
    "correct_indices": [
      0
    ]
  },
  {
    "question": "9. Für die Einberufung einer außerordentlichen Generalversammlung sind folgende Punkte zu beachten.",
    "options": [
      "a. Die außerordentliche Generalversammlung muss innerhalb der ersten 8 Monate stattfinden.",
      "b. In dieser außerordentlichen Generalversammlung ist über den Jahresabschluss zu beschließen.",
      "c. Der Vorstand kann ebenso wie die Generalversammlung einen Beschluss zur Einberufung einer außerordentlichen Generalversammlung fassen.",
      "d. Die Einberufung ist notwendig, wenn die Hälfte der Geschäftsanteile verbraucht ist."
    ],
    "correct_indices": [
      2,
      3
    ]
  },
  {
    "question": "10. Die Genossenschaft unterscheidet sich von der AG durch:",
    "options": [
      "a. die Weisungsunterworfenheit des Vorstandes.",
      "b. dass es sich um eine Publikumsgesellschaft handelt.",
      "c. den einfachen Eintritt und Austritt von Mitgliedern.",
      "d. das Fehlen eines starren Nennkapitals."
    ],
    "correct_indices": [
      0,
      2,
      3
    ]
  },
  {
    "question": "11. Bei der Durchführung der Revision ist der/die Revisor:in …",
    "options": [
      "a. unabhängig und weisungsfrei.",
      "b. er hat Weisungen seiner Vorgesetzten hinsichtlich seiner Revisionsfeststellung zu beachten."
    ],
    "correct_indices": [
      0
    ]
  },
  {
    "question": "12. Die standardmäßige gesetzliche Prüfung einer RB umfasst jedenfalls folgende Prüfungsbereiche:",
    "options": [
      "a. Abschlussprüfung laut UGB und BWG (formelle Prüfung).",
      "b. Bankprüfung laut BWG.",
      "c. Gebarungsprüfung (materielle Revision) laut GenRevG.",
      "d. Sonderprüfungen im Ermessen des Prüfers."
    ],
    "correct_indices": [
      0,
      1,
      2
    ]
  },
  {
    "question": "5. Die Wahl der Vorstandsmitglieder wird rechtswirksam durch ...",
    "options": [
      "a. die Beschlussfassung in der Generalversammlung und Annahme der Wahl.",
      "b. die Eintragung im Firmenbuch."
    ],
    "correct_indices": [
      0
    ]
  }
];

// Quiz Application Class
class MultipleChoiceQuiz {
    constructor() {
        this.questions = QUIZ_QUESTIONS;
        this.selectedQuestions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.totalQuestions = 0;
        this.userAnswers = [];

        this.initEventListeners();
    }

    initEventListeners() {
        // Start Quiz Button
        document.getElementById('start-quiz-btn').addEventListener('click', () => {
            this.startQuiz();
        });

        // Submit Answer Button
        document.getElementById('submit-answer-btn').addEventListener('click', () => {
            this.checkAnswer();
        });

        // Next Question Button
        document.getElementById('next-question-btn').addEventListener('click', () => {
            this.nextQuestion();
        });

        // Restart Quiz Button
        document.getElementById('restart-quiz-btn').addEventListener('click', () => {
            this.restartQuiz();
        });

        // Enter key to submit answer
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const submitBtn = document.getElementById('submit-answer-btn');
                const nextBtn = document.getElementById('next-question-btn');
                
                if (submitBtn.style.display !== 'none' && !submitBtn.disabled) {
                    submitBtn.click();
                } else if (!nextBtn.parentElement.parentElement.classList.contains('hidden')) {
                    nextBtn.click();
                }
            }
        });
    }

    startQuiz() {
        const questionCount = parseInt(document.getElementById('question-count').value);
        
        if (questionCount < 1 || questionCount > this.questions.length) {
            alert(`Bitte geben Sie eine Zahl zwischen 1 und ${this.questions.length} ein.`);
            return;
        }

        this.totalQuestions = questionCount;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];

        // Select random questions
        this.selectedQuestions = this.getRandomQuestions(questionCount);

        // Update UI
        document.getElementById('total-questions').textContent = this.totalQuestions;
        
        this.showScreen('quiz-screen');
        this.displayQuestion();
    }

    getRandomQuestions(count) {
        const shuffled = [...this.questions].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, count);
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    formatOptionText(option, displayIndex = null) {
        const text = option.replace(/^[a-z]\.\s*/i, '');
        return displayIndex === null ? text : `${displayIndex + 1}. ${text}`;
    }

    displayQuestion() {
        const question = this.selectedQuestions[this.currentQuestionIndex];
        
        // Update progress
        const progress = ((this.currentQuestionIndex + 1) / this.totalQuestions) * 100;
        document.getElementById('progress').style.width = `${progress}%`;
        document.getElementById('current-question').textContent = this.currentQuestionIndex + 1;

        // Display question
        document.getElementById('question-text').textContent = question.question;

        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';

        const shuffledOptions = this.shuffleArray(
            question.options.map((option, originalIndex) => ({
                text: option,
                originalIndex
            }))
        );
        this.currentQuestionMapping = {};

        shuffledOptions.forEach((option, index) => {
            this.currentQuestionMapping[index] = option.originalIndex;
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `option-${index}`;
            checkbox.name = 'answer';
            checkbox.value = index;
            
            const label = document.createElement('label');
            label.htmlFor = `option-${index}`;
            label.textContent = this.formatOptionText(option.text, index);

            optionDiv.appendChild(checkbox);
            optionDiv.appendChild(label);
            optionsContainer.appendChild(optionDiv);

            // Enable submit button when any option is selected
            checkbox.addEventListener('change', () => {
                const anyChecked = document.querySelectorAll('input[name="answer"]:checked').length > 0;
                document.getElementById('submit-answer-btn').disabled = !anyChecked;
            });

            optionDiv.addEventListener('click', (event) => {
                if (event.target === checkbox || checkbox.disabled) {
                    return;
                }

                event.preventDefault();
                checkbox.checked = !checkbox.checked;
                checkbox.dispatchEvent(new Event('change', { bubbles: true }));
            });
        });

        // Reset feedback
        document.getElementById('answer-feedback').classList.add('hidden');
        document.getElementById('submit-answer-btn').disabled = true;
    }

    checkAnswer() {
        const question = this.selectedQuestions[this.currentQuestionIndex];
        const selectedShuffledOptions = Array.from(document.querySelectorAll('input[name="answer"]:checked'))
            .map(input => parseInt(input.value));
        const selectedOptions = selectedShuffledOptions.map(index => this.currentQuestionMapping[index]);

        const correctAnswers = question.correct_indices;
        
        // Check if answer is correct
        const isCorrect = this.arraysEqual([...selectedOptions].sort(), [...correctAnswers].sort());

        // Save user answer
        this.userAnswers.push({
            question: question,
            userAnswers: selectedOptions,
            correctAnswers: correctAnswers,
            isCorrect: isCorrect
        });

        if (isCorrect) {
            this.score++;
        }

        // Show feedback and highlight correct/incorrect answers
        this.showFeedback(isCorrect, correctAnswers, selectedShuffledOptions);
    }

    arraysEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) return false;
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    }

    showFeedback(isCorrect, correctAnswers, selectedShuffledOptions) {
        // Highlight options
        document.querySelectorAll('.option').forEach((optionDiv, index) => {
            const checkbox = optionDiv.querySelector('input');
            const originalIndex = this.currentQuestionMapping[index];
            
            if (correctAnswers.includes(originalIndex)) {
                optionDiv.classList.add('correct');
            } else if (selectedShuffledOptions.includes(index)) {
                optionDiv.classList.add('incorrect');
            }
            
            checkbox.disabled = true;
        });

        // Show feedback message
        const feedback = document.getElementById('answer-feedback');
        const feedbackText = document.getElementById('feedback-text');
        
        if (isCorrect) {
            feedback.className = 'feedback correct';
            feedbackText.innerHTML = '<h3>Richtig! ✓</h3><p>Ihre Antwort ist korrekt.</p>';
        } else {
            feedback.className = 'feedback incorrect';
            feedbackText.innerHTML = '<h3>Falsch! ✗</h3><p>Die richtige(n) Antwort(en) sind markiert.</p>';
        }

        feedback.classList.remove('hidden');
        document.getElementById('submit-answer-btn').style.display = 'none';
    }

    nextQuestion() {
        this.currentQuestionIndex++;
        
        if (this.currentQuestionIndex < this.totalQuestions) {
            this.displayQuestion();
            document.getElementById('submit-answer-btn').style.display = 'inline-block';
        } else {
            this.showResults();
        }
    }

    showResults() {
        const percentage = Math.round((this.score / this.totalQuestions) * 100);
        const passed = percentage >= 60;

        // Update score display
        document.getElementById('percentage').textContent = `${percentage}%`;
        document.getElementById('correct-count').textContent = this.score;
        document.getElementById('total-count').textContent = this.totalQuestions;

        // Update score circle
        const scoreCircle = document.getElementById('score-circle');
        scoreCircle.style.setProperty('--percentage', `${percentage * 3.6}deg`);
        scoreCircle.className = `score-circle ${passed ? 'passed' : 'failed'}`;

        // Update result status
        const resultStatus = document.getElementById('result-status');
        if (passed) {
            resultStatus.textContent = 'Bestanden! 🎉';
            resultStatus.className = 'result-status passed';
        } else {
            resultStatus.textContent = 'Nicht bestanden 😞';
            resultStatus.className = 'result-status failed';
        }

        // Show wrong answers
        this.displayWrongAnswers();

        this.showScreen('results-screen');
    }

    displayWrongAnswers() {
        const wrongAnswersList = document.getElementById('wrong-answers-list');
        const wrongAnswers = this.userAnswers.filter(answer => !answer.isCorrect);

        if (wrongAnswers.length === 0) {
            wrongAnswersList.innerHTML = '<p style="color: #48bb78; text-align: center;">Alle Antworten waren richtig! 🎉</p>';
            return;
        }

        wrongAnswersList.innerHTML = '';

        wrongAnswers.forEach((answer, index) => {
            const wrongAnswerDiv = document.createElement('div');
            wrongAnswerDiv.className = 'wrong-answer-item';

            const question = answer.question;
            const userAnswerTexts = answer.userAnswers.map(i => this.formatOptionText(question.options[i])).join(', ');
            const correctAnswerTexts = answer.correctAnswers.map(i => this.formatOptionText(question.options[i])).join(', ');

            wrongAnswerDiv.innerHTML = `
                <div class="wrong-answer-question">${question.question}</div>
                <div class="wrong-answer-details">
                    <p class="your-answer"><strong>Ihre Antwort:</strong> ${userAnswerTexts}</p>
                    <p class="correct-answer"><strong>Richtige Antwort:</strong> ${correctAnswerTexts}</p>
                </div>
            `;

            wrongAnswersList.appendChild(wrongAnswerDiv);
        });
    }

    showScreen(screenId) {
        // Hide all screens
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });

        // Show target screen
        document.getElementById(screenId).classList.add('active');
    }

    restartQuiz() {
        this.showScreen('start-screen');
        // Reset form
        document.getElementById('question-count').value = '10';
    }
}

// Initialize quiz when page loads
document.addEventListener('DOMContentLoaded', () => {
    new MultipleChoiceQuiz();
});
