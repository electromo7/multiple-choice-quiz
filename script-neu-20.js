// Neue 20 Fragen - Bankenaufsichtsrecht für die Praxis
const QUIZ_QUESTIONS = [
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
  },
  {
    "question": "Welche der folgenden Anzeigetatbestände sind nach § 73 BWG für ein Kreditinstitut von Relevanz?",
    "options": [
      "a. Jede Änderung in der Person der Geschäftsleiter;",
      "b. Änderungen in der Person des/der Verantwortlichen für die Interne Revision;",
      "c. Jede Adressänderung von einzelnen Filialen;",
      "d. Jede Änderung der qualifizierten Beteiligungen an anderen Kreditinstituten."
    ],
    "correct_indices": [
      0,
      1
    ]
  },
  {
    "question": "Welche der folgenden Bestandteile können gemäß CRR dem Kernkapital (Tier 1) zugerechnet werden?",
    "options": [
      "a. Fonds für allgemeine Bankrisiken;",
      "b. Stille Reserven;",
      "c. Immaterielle Vermögensgegenstände;",
      "d. Haftrücklage."
    ],
    "correct_indices": [
      0,
      3
    ]
  },
  {
    "question": "Welche der folgenden Geschäfte bedürfen bei einem Kreditinstitut aufsichtsrechtlich der Zustimmung des Aufsichtsrats?",
    "options": [
      "a. Aufstellung des jährlichen Revisionsplans;",
      "b. Jeder gemäß CRR ermittelte Großkredit ab EUR 500.000,–;",
      "c. Organgeschaften;",
      "d. Kriterien für die Zuordnung der Positionen zum Handelsbuch."
    ],
    "correct_indices": [
      1,
      2
    ]
  },
  {
    "question": "Für welche der folgenden Unternehmen gilt gemäß Art. 89 CRR eine Begrenzung (bzw höhere Eigenmittelerfordernisse bei Überschreitung) für den Buchwert qualifizierter Beteiligungen iHv 15 % (bzw 60 % für die Summe aller Beteiligungen) der anrechenbaren Eigenmittel des Kreditinstituts?",
    "options": [
      "a. Gesellschaften, die Vorsorgewohnungen entwickeln;",
      "b. Eine Seilbahnbetriebsgesellschaft;",
      "c. Leasinggesellschaften;",
      "d. Kapitalanlagegesellschaften."
    ],
    "correct_indices": [
      0,
      1
    ]
  },
  {
    "question": "Welche Anforderungen stellen die EBA-Leitlinien zum ESG-Risikomanagement an die Transitionspläne (Übergangspläne) von Finanzinstituten?",
    "options": [
      "a. Finanzinstitute müssen jährlich einen detaillierten Bericht über alle ESG-Risiken veröffentlichen.",
      "b. Finanzinstitute müssen Transitionspläne erstellen, die spezifische Zeitpläne, quantifizierbare Zwischenziele und Meilensteine enthalten, um die finanziellen Risiken aus ESG-Faktoren zu überwachen und zu bewältigen.",
      "c. Finanzinstitute müssen ihre gesamte Geschäftsleitung durch ESG-Experten ersetzen und alle Investitionen in fossile Brennstoffe sofort beenden.",
      "d. Finanzinstitute müssen lediglich eine kurze Erklärung abgeben, dass sie ESG-Risiken berücksichtigen, ohne konkrete Maßnahmen oder Ziele festzulegen."
    ],
    "correct_indices": [
      1
    ]
  },
  {
    "question": "Was ist bei Organgeschäften zu beachten, wenn ein einstimmiger Beschluss der Geschäftsleiter und die Zustimmung des Aufsichtsrates oder des sonst nach Gesetz oder Satzung zuständigen Aufsichtsorgans zum Zeitpunkt des Abschlusses noch nicht vorliegen?",
    "options": [
      "a. Das Geschäft ist nichtig.",
      "b. Es ist ein nachträglicher, einstimmiger Beschluss der Geschäftsleiter und eine Zustimmung des Aufsichtsrates erforderlich.",
      "c. Gewährte Kredite und Vorschüsse sind unter allen Umständen unverzüglich zurückzuzahlen, da ein nachträglicher Beschluss nicht zulässig ist.",
      "d. Es ist ein Sonderbeschluss der Hauptversammlung notwendig."
    ],
    "correct_indices": [
      1
    ]
  },
  {
    "question": "Kreditinstitute haben für die Aufgaben der Internen Revision eine eigene Organisationseinheit einzurichten. Dies gilt jedoch nicht für Kreditinstitute:",
    "options": [
      "a. deren Bilanzsumme 300 Millionen Euro nicht übersteigt;",
      "b. deren Mitarbeiterstand im Jahresdurchschnitt 300 vollbeschäftigte Mitarbeiter nicht übersteigt;",
      "c. deren Mitarbeiterstand im Jahresdurchschnitt 100 vollbeschäftigte Mitarbeiter nicht übersteigt;",
      "d. deren Bilanzsumme eine Milliarde Euro nicht übersteigt und die Mitglied einer Kreditinstitutsgruppe sind oder einem Zentralinstitut angeschlossen sind."
    ],
    "correct_indices": [
      0,
      3
    ]
  },
  {
    "question": "Das Ergebnis der Prüfung des Bankprüfers ist den zuständigen Behörden zeitgerecht zu übermitteln; welche Frist gibt § 44 BWG für die Einreichung der geprüften Jahresabschlüsse bei der FMA/OeNB vor?",
    "options": [
      "a. Der geprüfte Jahresabschluss ist längstens innerhalb von sechs Monaten nach Abschluss des Geschäftsjahres der FMA und der Oesterreichischen Nationalbank vorzulegen.",
      "b. Der geprüfte Jahresabschluss ist längstens innerhalb von acht Monaten nach Abschluss des Geschäftsjahres der FMA und der Oesterreichischen Nationalbank vorzulegen.",
      "c. Der geprüfte Jahresabschluss ist längstens innerhalb von neun Monaten nach Abschluss des Geschäftsjahres der FMA und der Oesterreichischen Nationalbank vorzulegen.",
      "d. Der geprüfte Jahresabschluss ist längstens innerhalb von vier Monaten nach Abschluss des Geschäftsjahres der FMA und der Oesterreichischen Nationalbank vorzulegen."
    ],
    "correct_indices": [
      0
    ]
  },
  {
    "question": "Unter dem Operationellen Risiko versteht man:",
    "options": [
      "a. Das Risiko, das aus Verbriefungstransaktionen erwächst, bei denen das Kreditinstitut als Investor, Originator oder Sponsor auftritt;",
      "b. Das spezifische und allgemeine Positionsrisiko in zinsbezogenen Instrumenten;",
      "c. Das Risiko von Verlusten, die durch Unangemessenheit oder Versagen von internen Verfahren, Menschen und Systemen oder durch externe Ereignisse verursacht werden, einschließlich des Rechtsrisikos;",
      "d. Das Risiko, dass die vom Kreditinstitut eingesetzten bankaufsichtlich anerkannten kreditrisikomindernden Techniken weniger wirksam sind als erwartet."
    ],
    "correct_indices": [
      2
    ]
  },
  {
    "question": "Welche der folgenden Risiken müssen gemäß CRR mit Eigenmitteln unterlegt werden („Säule 1“)?",
    "options": [
      "a. Risikoarten des Handelsbuchs;",
      "b. Kreditrisiko;",
      "c. Operationelles Risiko;",
      "d. Liquiditätsrisiko."
    ],
    "correct_indices": [
      0,
      1,
      2
    ]
  },
  {
    "question": "Wer unterliegt den Fit & Proper Anforderungen gemäß EBA Leitlinien und FMA Rundschreiben?",
    "options": [
      "a. Mitglieder der Geschäftsleitung",
      "b. Mitglieder des Aufsichtsrats",
      "c. Inhaber von Schlüsselfunktionen",
      "d. Alle Mitarbeiter"
    ],
    "correct_indices": [
      0,
      1,
      2
    ]
  },
  {
    "question": "An wen muss die Interne Revision regelmäßig Bericht erstatten?",
    "options": [
      "a. Quartalsweise dem Vorsitzenden des Aufsichtsrates sowie dem Prüfungsausschuss;",
      "b. An die Aufsichtsräte und an das ressortzuständige Mitglied der Geschäftsleitung;",
      "c. An alle Geschäftsleiter;",
      "d. An den Risikoausschuss des Aufsichtsrates und an die verantwortlichen Mitglieder der Geschäftsleitung."
    ],
    "correct_indices": [
      0,
      2
    ]
  },
  {
    "question": "Welche der folgenden Umstände zählen – unter anderem – zu den Konzessionsvoraussetzungen nach § 5 BWG?",
    "options": [
      "a. Das Anfangskapital oder die Anfangsdotation beträgt 1 Million Euro und steht den Geschäftsleitern unbeschränkt und ohne Belastung im Inland zur freien Verfügung.",
      "b. Das Kreditinstitut muss in der Rechtsform einer Kapitalgesellschaft, einer Genossenschaft oder einer Sparkasse geführt werden.",
      "c. Das Anfangskapital oder die Anfangsdotation beträgt 5 Millionen Euro und steht den Geschäftsleitern unbeschränkt und ohne Belastung im Inland zur freien Verfügung.",
      "d. Der Sitz oder die Hauptverwaltung liegt im Inland."
    ],
    "correct_indices": [
      1,
      2
    ]
  },
  {
    "question": "Was gilt für Institute, die Bankgeschäfte ohne die notwendige Konzession betreiben?",
    "options": [
      "a. Das Institut hat auf alle mit diesen Geschäften verbundenen Vergütungen, wie insbesondere Zinsen und Provisionen, keinen Anspruch.",
      "b. Das Institut hat mit einem verwaltungsstrafrechtlichen Verfahren seitens der FMA zu rechnen.",
      "c. Die fehlende Konzession zieht die Rechtsunwirksamkeit des Geschäfts nach sich.",
      "d. Keine Konsequenzen; wer Bankgeschäfte ohne die erforderliche Berechtigung betreibt, kann sich im Notfall immer auf den § 1 Abs 5 BWG (Einwand von Spiel und Wette) berufen."
    ],
    "correct_indices": [
      0,
      1
    ]
  },
  {
    "question": "Kreditinstitute und Kreditinstitutsgruppen haben das besondere bankgeschäftliche Risiko von Großkrediten jederzeit angemessen zu begrenzen. Welche Vorgaben sind gemäß § 28b BWG und Teil 4 CRR für Großkredite zu beachten?",
    "options": [
      "a. Ein Großkredit liegt vor, wenn ein solcher bei einem Kunden oder bei einer Gruppe verbundener Kunden 10 % des Kernkapitals des Kreditinstitutes oder des konsolidierten Kernkapitals der Kreditinstitutsgruppe erreicht.",
      "b. Bei der Ermittlung von Großkrediten sind anzusetzen: Aktivposten, außerbilanzmäßige Geschäfte, Derivate und Handelsbuchpositionen.",
      "c. Bei der Ermittlung von Großkrediten sind anzusetzen: Aktivposten, außerbilanzmäßige Geschäfte, Derivate und Verbindlichkeiten.",
      "d. Ein Großkredit liegt ab mindestens 350.000 Euro vor."
    ],
    "correct_indices": [
      0,
      1
    ]
  },
  {
    "question": "Zur Bekämpfung von Geldwäscherei und Terrorismusfinanzierung nach FM-GwG haben Kreditinstitute die Identität des Kunden festzustellen, und zwar:",
    "options": [
      "a. Wenn der Betrag vor Beginn der Transaktion nicht bekannt ist, so ist die Identität dann festzustellen, sobald der Betrag bekannt ist und festgestellt wird, dass er mindestens 10.000 Euro oder Euro-Gegenwert beträgt.",
      "b. Bei Zweifeln an der Echtheit oder der Angemessenheit der Kundenidentifikationsdaten;",
      "c. Vor Begründung einer dauernden Geschäftsbeziehung;",
      "d. Vor Durchführung von allen nicht in den Rahmen einer dauernden Geschäftsbeziehung fallenden Transaktionen, deren Betrag sich auf mindestens 10.000 Euro oder Euro-Gegenwert beläuft."
    ],
    "correct_indices": [
      1,
      2
    ]
  },
  {
    "question": "Wie ist bei einem Verdacht nach § 41 BWG (Geldwäscherei und Terrorismusbekämpfung) vorzugehen?",
    "options": [
      "a. Bei einem Verdachtsmoment haben die Kredit- und Finanzinstitute die Geldwäsche-Meldestelle hiervon unverzüglich in Kenntnis zu setzen und bis zur Klärung des Sachverhalts jede weitere Abwicklung der Transaktion zu unterlassen.",
      "b. Bei einem Verdachtsmoment haben die Kredit- und Finanzinstitute die Behörde hiervon spätestens nach Ablauf von 24 Stunden in Kenntnis zu setzen und bis zur Klärung des Sachverhalts jede weitere Abwicklung der Transaktion zu unterlassen.",
      "c. Bei einem Verdachtsmoment haben die Kredit- und Finanzinstitute die Behörde hiervon spätestens bis zum Ende des nächsten Bankarbeitstages in Kenntnis zu setzen und bis zur Klärung des Sachverhalts jede weitere Abwicklung der Transaktion zu unterlassen.",
      "d. Keine der Antworten a) bis c); die Konten des Kunden sind unverzüglich einzufrieren, jeglicher Geldverkehr ist einzustellen."
    ],
    "correct_indices": [
      0
    ]
  },
  {
    "question": "Wann und von wem ist ein Vergütungsausschuss gemäß § 39c BWG einzurichten?",
    "options": [
      "a. In Kreditinstituten jedweder Rechtsform, deren Bilanzsumme 500 Millionen Euro übersteigt und die übertragbare Wertpapiere ausgegeben haben, ist vom Aufsichtsrat ein Vergütungsausschuss einzurichten.",
      "b. In Kreditinstituten jedweder Rechtsform, deren Bilanzsumme fünf Milliarden Euro übersteigt, ist ein Vergütungsausschuss einzurichten, bestehend aus mindestens einem Geschäftsleiter und dem Vorsitzenden des Aufsichtsrats.",
      "c. In Kreditinstituten jedweder Rechtsform, deren Bilanzsumme fünf Milliarden Euro übersteigt, ist ein Vergütungsausschuss einzurichten, bestehend aus der gesamten Geschäftsleitung und den Arbeitnehmervertretern.",
      "d. In Kreditinstituten jedweder Rechtsform, deren Bilanzsumme fünf Milliarden Euro übersteigt, ist vom Aufsichtsrat ein Vergütungsausschuss einzurichten, wobei dem Vergütungsausschuss ein Vergütungsexperte angehören muss oder hinzugezogen werden muss."
    ],
    "correct_indices": [
      3
    ]
  },
  {
    "question": "Welche Anforderungen stellt DORA an das Leitungsorgan von Finanzunternehmen in Bezug auf das IKT-Risikomanagement?",
    "options": [
      "a. Das Leitungsorgan muss einen externen Berater für IKT-Risiken bestellen, der monatlich Bericht erstattet.",
      "b. Das Leitungsorgan muss einen IKT-Risikomanagementrahmen definieren, genehmigen und überwachen, sowie regelmäßige Schulungen zu ICT-Risiken erhalten.",
      "c. Das Leitungsorgan muss aus mindestens drei IT-Experten bestehen, die jeweils mehr als 10 Jahre Erfahrung im Finanzsektor haben.",
      "d. Das Leitungsorgan muss vierteljährlich öffentliche Berichte über alle IKT-Vorfälle veröffentlichen und persönlich für jede Sicherheitslücke haften."
    ],
    "correct_indices": [
      1
    ]
  },
  {
    "question": "Welche der folgenden Antwortmöglichkeiten stellen Unterschiede zwischen Basel III und Basel IV dar?",
    "options": [
      "a. Basel III zielt auf die Selbstregulierung von Banken ab, im Sinne des „Prudent Person Prinzips“. Es stellt den Beginn einer Deregulierungsphase im Bankensektor dar.",
      "b. Durch die Anwendung von Basel IV werden die Prinzipien nach Basel III zur Gänze aufgehoben.",
      "c. Basel IV wurde innerhalb der EU durch die Eigenkapitalrichtlinie (CRD III) umgesetzt.",
      "d. Das Schwergewicht der Änderungen durch Basel IV bezieht sich auf Änderungen bei der Berechnung der RWA bzw. auf die Höhe der Eigenmittelerfordernisse."
    ],
    "correct_indices": [
      3
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
