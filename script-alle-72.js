// Kombiniertes Quiz: RBM3 (40) + RBM4 (12) + NEU (20) = 72 Fragen
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
  },
  {
    "question": "Was ist der Hauptgrund für die Schaffung einer besonderen Bankenaufsicht?",
    "options": [
      "a. Um die Gewinne der Banken zu maximieren",
      "b. Um Vertrauens- und Liquiditätskrisen zu vermeiden und die Finanzmarktstabilität zu gewährleisten",
      "c. Um die Zinsen für Kunden zu kontrollieren",
      "d. Um den Wettbewerb zwischen Banken zu fördern"
    ],
    "correct_indices": [
      1
    ]
  },
  {
    "question": "Welche Aussagen zur Zusammenarbeit zwischen FMA, EZB und OeNB sind korrekt?",
    "options": [
      "a. Die FMA ist für kleinere Institute (LSIs) unmittelbar zuständig",
      "b. Die EZB ist für bedeutende Kreditinstitute (SIs) ab 30 Mrd. € Bilanzsumme unmittelbar zuständig",
      "c. Die OeNB unterstützt FMA und EZB bei Vor-Ort-Prüfungen",
      "d. Die FMA ist weisungsgebunden gegenüber der EZB"
    ],
    "correct_indices": [
      0,
      1,
      2
    ]
  },
  {
    "question": "Welche Aufgaben hat die EBA (European Banking Authority)?",
    "options": [
      "a. Erlassen von Leitlinien (Guidelines)",
      "b. Veröffentlichung von Questions & Answers zur praktischen Anwendung",
      "c. Konzessionserteilung für alle europäischen Banken",
      "d. Vorgabe von Szenarien für Stresstests"
    ],
    "correct_indices": [
      0,
      1,
      3
    ]
  },
  {
    "question": "Was bedeutet 'Single Rulebook' im Zusammenhang mit CRR und CRD?",
    "options": [
      "a. Ein einzelnes Buch mit allen Bankenregeln",
      "b. Einheitliche Regeln für alle Mitgliedstaaten der EU",
      "c. CRR ist eine EU-Verordnung und wirkt unmittelbar",
      "d. CRD ist eine EU-Richtlinie und muss national umgesetzt werden"
    ],
    "correct_indices": [
      1,
      2,
      3
    ]
  },
  {
    "question": "Welche Rechtsformen sind für Banken in Österreich zulässig?",
    "options": [
      "a. Aktiengesellschaft (AG)",
      "b. Einzelunternehmen",
      "c. Genossenschaft",
      "d. Gesellschaft mit beschränkter Haftung (GmbH)"
    ],
    "correct_indices": [
      0,
      2,
      3
    ]
  },
  {
    "question": "Welche Voraussetzungen muss die Geschäftsleitung einer Bank erfüllen?",
    "options": [
      "a. Mindestens 2 Geschäftsleiter (4-Augen-Prinzip)",
      "b. Fachlich geeignet (fit) und persönlich zuverlässig (proper)",
      "c. Dreijährige Leitungserfahrung",
      "d. Mindestens ein Doktortitel in Betriebswirtschaft"
    ],
    "correct_indices": [
      0,
      1,
      2
    ]
  },
  {
    "question": "Wann fehlt die Propriety (persönliche Zuverlässigkeit) eines Geschäftsleiters?",
    "options": [
      "a. Bei Insolvenzverfahren über das Vermögen des Geschäftsleiters",
      "b. Bei Freiheitsstrafe von mehr als 180 Tagsätzen",
      "c. Bei Verurteilungen wegen Vermögensdelikten",
      "d. Bei fehlender dreijähriger Berufserfahrung"
    ],
    "correct_indices": [
      0,
      1,
      2
    ]
  },
  {
    "question": "Bei welchen Schwellwerten müssen Veränderungen in der Eigentümerstruktur einer Bank angezeigt werden?",
    "options": [
      "a. 10% des Kapitals oder der Stimmrechte",
      "b. 20% des Kapitals oder der Stimmrechte",
      "c. 30% des Kapitals oder der Stimmrechte",
      "d. 50% des Kapitals oder der Stimmrechte"
    ],
    "correct_indices": [
      1,
      2,
      3
    ]
  },
  {
    "question": "Wozu brauchen Banken Eigenmittel?",
    "options": [
      "a. Um unerwartete Verluste abdecken zu können",
      "b. Um Einleger und Gläubiger zu schützen",
      "c. Um die Widerstandsfähigkeit (Resilienz) zu stärken",
      "d. Um Dividenden auszuschütten"
    ],
    "correct_indices": [
      0,
      1,
      2
    ]
  },
  {
    "question": "Unter welchen Voraussetzungen wird genossenschaftliches Geschäftsanteilkapital als hartes Kernkapital anerkannt?",
    "options": [
      "a. Unbefristet und voll eingezahlt",
      "b. Nachrangig gegenüber anderen Gläubigern",
      "c. Keine feste Verzinsung oder garantierte Dividende",
      "d. Rückzahlungspflicht nach 5 Jahren"
    ],
    "correct_indices": [
      0,
      1,
      2
    ]
  },
  {
    "question": "Was ist die Sockelbetragslösung bei Genossenschaften?",
    "options": [
      "a. Ein in der Satzung definierter Mindestbetrag, unter den das Geschäftsanteilkapital nicht fallen darf",
      "b. Bei Unterschreitung werden Abfindungsansprüche ausgesetzt",
      "c. Sie dient der Stabilität des harten Kernkapitals",
      "d. Sie ist im § 50a Abs. 2 Z 2 GenG geregelt"
    ],
    "correct_indices": [
      0,
      1,
      2,
      3
    ]
  },
  {
    "question": "Wie setzen sich die Eigenmittel einer Bank zusammen?",
    "options": [
      "a. Hartes Kernkapital (CET1 - Common Equity Tier 1)",
      "b. Zusätzliches Kernkapital (AT1 - Additional Tier 1)",
      "c. Ergänzungskapital (Tier 2)",
      "d. Fremdkapital von Kunden"
    ],
    "correct_indices": [
      0,
      1,
      2
    ]
  },
  {
    "question": "Welche Mindesteigenmittelquoten sind nach Art. 92 CRR einzuhalten?",
    "options": [
      "a. Harte Kernkapitalquote: 4,5%",
      "b. Kernkapitalquote: 6%",
      "c. Eigenmittelquote: 8%",
      "d. Verschuldungsquote (Leverage Ratio): 3%"
    ],
    "correct_indices": [
      0,
      1,
      2,
      3
    ]
  },
  {
    "question": "Was ist der SREP-Zuschlag und warum wird er erhoben?",
    "options": [
      "a. Ein zusätzlicher Kapitalpuffer basierend auf individuellen Risiken der Bank",
      "b. Er wird von der FMA individuell festgelegt",
      "c. Er deckt Risiken ab, die durch Art. 92 CRR nicht hinreichend erfasst sind",
      "d. Bei Nichteinhaltung droht sofortige Insolvenz"
    ],
    "correct_indices": [
      0,
      1,
      2
    ]
  },
  {
    "question": "Welche Kapitalpufferanforderungen gibt es?",
    "options": [
      "a. Kapitalerhaltungspuffer (2,5% für alle Banken)",
      "b. Antizyklischer Kapitalpuffer (0-2,5% je nach Marktlage)",
      "c. Systemrelevanzpuffer (nur für systemrelevante Banken)",
      "d. Liquiditätspuffer (5% für alle Institute)"
    ],
    "correct_indices": [
      0,
      1,
      2
    ]
  },
  {
    "question": "Welche Konsequenzen hat die Unterschreitung von Kapitalpuffern?",
    "options": [
      "a. Ausschüttung von Dividenden ist eingeschränkt",
      "b. Zahlung von variablen Vergütungen ist eingeschränkt",
      "c. Rückzahlung von Geschäftsanteilen ist eingeschränkt",
      "d. Sofortiger Konzessionsentzug"
    ],
    "correct_indices": [
      0,
      1,
      2
    ]
  },
  {
    "question": "Was ist die Leverage Ratio (Verschuldungsquote) und warum ist sie wichtig?",
    "options": [
      "a. Sie misst das Verhältnis von Kernkapital zu Gesamtrisikoposition",
      "b. Die Mindestquote beträgt 3%",
      "c. Bei ihr spielen Risikogewichte keine Rolle",
      "d. Sie wurde nach der Finanzkrise eingeführt, weil risikogewichtete Aktiva Risiken nicht immer korrekt abbilden"
    ],
    "correct_indices": [
      0,
      1,
      2,
      3
    ]
  },
  {
    "question": "Was versteht man unter 'Corresponding Deduction Approach'?",
    "options": [
      "a. Beteiligungen müssen vom gleichen Kapitalbestandteil abgezogen werden, wie sie bei der anderen Bank angerechnet werden",
      "b. Er verhindert die Doppelzählung von Kapital",
      "c. Er ist relevant bei Beteiligungen an anderen Banken",
      "d. Er wird nur bei internationalen Bankbeteiligungen angewendet"
    ],
    "correct_indices": [
      0,
      1,
      2
    ]
  },
  {
    "question": "Welche Bankgeschäfte benötigen eine Konzession nach BWG?",
    "options": [
      "a. Einlagengeschäft",
      "b. Kreditgeschäft",
      "c. Verwahrung und Verwaltung von Wertpapieren für andere",
      "d. Vermittlung von Versicherungen"
    ],
    "correct_indices": [
      0,
      1,
      2
    ]
  },
  {
    "question": "Was sind die Konsequenzen bei unbefugtem Betreiben von Bankgeschäften?",
    "options": [
      "a. Strafdrohungen bis zu € 5 Mio bei unbefugtem Kredit- und Einlagengeschäft",
      "b. Kein Anspruch auf vereinbarte Zinsen, Provisionen und Vergütungen",
      "c. Eintrag ins Firmenbuch ist nicht möglich",
      "d. Automatische Umwandlung in eine regulierte Bank"
    ],
    "correct_indices": [
      0,
      1,
      2
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
        document.getElementById('start-quiz-btn').addEventListener('click', () => {
            this.startQuiz();
        });
        document.getElementById('submit-answer-btn').addEventListener('click', () => {
            this.checkAnswer();
        });
        document.getElementById('next-question-btn').addEventListener('click', () => {
            this.nextQuestion();
        });
        document.getElementById('restart-quiz-btn').addEventListener('click', () => {
            this.restartQuiz();
        });
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
        this.selectedQuestions = this.getRandomQuestions(questionCount);
        document.getElementById('total-questions').textContent = this.totalQuestions;
        this.showScreen('quiz-screen');
        this.displayQuestion();
    }

    getRandomQuestions(count) {
        const shuffled = [...this.questions].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, count);
    }

    displayQuestion() {
        const question = this.selectedQuestions[this.currentQuestionIndex];
        const progress = ((this.currentQuestionIndex + 1) / this.totalQuestions) * 100;
        document.getElementById('progress').style.width = `${progress}%`;
        document.getElementById('current-question').textContent = this.currentQuestionIndex + 1;
        document.getElementById('question-text').textContent = question.question;
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';
        question.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `option-${index}`;
            checkbox.name = 'answer';
            checkbox.value = index;
            const label = document.createElement('label');
            label.htmlFor = `option-${index}`;
            label.textContent = option;
            optionDiv.appendChild(checkbox);
            optionDiv.appendChild(label);
            optionsContainer.appendChild(optionDiv);
            checkbox.addEventListener('change', () => {
                const anyChecked = document.querySelectorAll('input[name="answer"]:checked').length > 0;
                document.getElementById('submit-answer-btn').disabled = !anyChecked;
            });
        });
        document.getElementById('answer-feedback').classList.add('hidden');
        document.getElementById('submit-answer-btn').disabled = true;
    }

    checkAnswer() {
        const question = this.selectedQuestions[this.currentQuestionIndex];
        const selectedOptions = Array.from(document.querySelectorAll('input[name="answer"]:checked'))
            .map(input => parseInt(input.value));
        const correctAnswers = question.correct_indices;
        const isCorrect = this.arraysEqual(selectedOptions.sort(), correctAnswers.sort());
        this.userAnswers.push({
            question: question,
            userAnswers: selectedOptions,
            correctAnswers: correctAnswers,
            isCorrect: isCorrect
        });
        if (isCorrect) {
            this.score++;
        }
        this.showFeedback(isCorrect, correctAnswers, selectedOptions);
    }

    arraysEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) return false;
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    }

    showFeedback(isCorrect, correctAnswers, selectedOptions) {
        document.querySelectorAll('.option').forEach((optionDiv, index) => {
            const checkbox = optionDiv.querySelector('input');
            if (correctAnswers.includes(index)) {
                optionDiv.classList.add('correct');
            } else if (selectedOptions.includes(index)) {
                optionDiv.classList.add('incorrect');
            }
            checkbox.disabled = true;
        });
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
        document.getElementById('percentage').textContent = `${percentage}%`;
        document.getElementById('correct-count').textContent = this.score;
        document.getElementById('total-count').textContent = this.totalQuestions;
        const scoreCircle = document.getElementById('score-circle');
        scoreCircle.style.setProperty('--percentage', `${percentage * 3.6}deg`);
        scoreCircle.className = `score-circle ${passed ? 'passed' : 'failed'}`;
        const resultStatus = document.getElementById('result-status');
        if (passed) {
            resultStatus.textContent = 'Bestanden! 🎉';
            resultStatus.className = 'result-status passed';
        } else {
            resultStatus.textContent = 'Nicht bestanden 😞';
            resultStatus.className = 'result-status failed';
        }
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
            const userAnswerTexts = answer.userAnswers.map(i => question.options[i]).join(', ');
            const correctAnswerTexts = answer.correctAnswers.map(i => question.options[i]).join(', ');
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
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }

    restartQuiz() {
        this.showScreen('start-screen');
        document.getElementById('question-count').value = '10';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new MultipleChoiceQuiz();
});
