// Fragen direkt als JavaScript-Array eingebettet für GitHub Pages Kompatibilität
const QUIZ_QUESTIONS = [
  {
    "question": "1. Welche Kennzahlen aus ihrem internen und externen Rechnungswesen verwenden Sie, um den Erfolg im Kundengeschäft zu messen und mit anderen Banken zu vergleichen?",
    "options": [
      "CET1-Ratio",
      "Ausleihungsquote",
      "MuM",
      "Kundengeschäftsvolumen (KGV)"
    ],
    "correct_indices": [
      1,
      2,
      3
    ]
  },
  {
    "question": "2. Auf welche Faktoren legt die Gesamtbanksteuerung laut betriebswirtschaftlicher Definition ein besonderes Augenmerk?",
    "options": [
      "Personal",
      "Liquidität",
      "Dichte des Filialnetzes",
      "Eigenkapital"
    ],
    "correct_indices": [
      1,
      3
    ]
  },
  {
    "question": "3. Entsprechend der Systematisierung der Risiken nach ICAAP sind zur Kategorie der Kreditrisiken die folgenden Teilrisiken zu erfassen:",
    "options": [
      "Migrations- und Ausfallsrisiko",
      "Beteiligungsrisiko",
      "Länder- und Transferrisiko",
      "Kreditkonzentrationsrisiko"
    ],
    "correct_indices": [
      0,
      1,
      2,
      3
    ]
  },
  {
    "question": "4. Im Rahmen der normativen Risikotragfähigkeitsperspektive:",
    "options": [
      "Kann die Risikotragfähigkeit trotz Unterschreiten des Kapitalerhaltungspuffers gegeben sein",
      "Wird ein gone-concern (Liquiditätsansatz) verfolgt, mit dem sichergestellt werden soll, dass die Gläubiger des Institutes geschützt werden",
      "Sollten Säule II Risikowerte dem Risikodeckungskapital gegenübergestellt werden",
      "Ist eine integrierte Kapitalplanung über mindestens 3 Jahre"
    ],
    "correct_indices": [
      0,
      3
    ]
  },
  {
    "question": "5. Welche Risikomaße werden im Zuge einer modernen Banksteuerung (u.a. auch nach CRR/Crd und BWG) verwendet bzw. erwartet?",
    "options": [
      "Risikogewichtete Aktiva (RWA)",
      "Regulatorische Eigenmittelquote",
      "Cost Income Ratio",
      "Erwarteter Verlust („expected loss“)"
    ],
    "correct_indices": [
      0,
      1,
      3
    ]
  },
  {
    "question": "6. Welche Positionen sind wesentliche Risikopuffer der Bank nach ICAAP?",
    "options": [
      "Stille Reserven",
      "Verkehrswert der Beteiligungen",
      "Eigenkapital",
      "Erwarteter Jahresgewinn"
    ],
    "correct_indices": [
      0,
      2,
      3
    ]
  },
  {
    "question": "7. Welche der folgenden Aussagen über den Value-at-Risk (VaR) sind korrekt?",
    "options": [
      "Die Wahl der Haltedauer des VaR sollte sich an der Fungibilität des zu bewertenden Assets orientieren",
      "Der VaR ist definiert als der geschätzte maximal erwartete Verlust, der unter üblichen Marktbedingungen innerhalb einer bestimmten Periode mit einer bestimmten Wahrscheinlichkeit eintreten kann",
      "Der VaR prognostiziert genau den Verlust, den ein Finanzinstitut innerhalb einer bestimmten Haltedauer erleiden kann.",
      "Ein VaR mit einer Haltedauer von 1 Tag und einem Konfidenzniveau von 99% garantiert, dass pro Jahr nur eine Wertänderung auftritt, die den gemessenen VaR übersteigt"
    ],
    "correct_indices": [
      0,
      1
    ]
  },
  {
    "question": "8. Welche Positionen in der GuV machen den Unterschied zwischen EGT und Betriebsergebnis im Jahresabschluss aus?",
    "options": [
      "Wertberichtigung zu Wertpapieren",
      "Außerordentliches Ergebnis",
      "Wertberichtigung zu Krediten",
      "Steuern"
    ],
    "correct_indices": [
      0,
      2
    ]
  },
  {
    "question": "9. In ihrer Bilanz finden sie folgende Positionen: „Forderungen an Kreditinstitute“ € 80 Mio., „Forderungen an Kunden“ € 320 Mio., Verbindlichkeiten ggü. Kreditinstituten“ € 20 Mio. und Verbindlichkeiten ggü. Kunden“ € 400 Mio. Wie hoch ist der Ausleihungsgrad ihrer Bank und wie interpretieren Sie diese Kennzahl?",
    "options": [
      "Der Ausleihungsgrad von 25% ist nicht zufriedenstellend für die Bank",
      "Mit einem Ausleihungsgrad von 80% ist die Bank solide aufgestellt",
      "Der Ausleihungsgrad ist die Kennzahl für die Beanspruchung der hereingenommenen Mittel durch die Kreditvergaben",
      "Der Ausleihungsgrad beträgt 125%, die Bank sollte versuchen diesen zu reduzieren"
    ],
    "correct_indices": [
      1,
      2
    ]
  },
  {
    "question": "10. Was ist/sind die Kernfunktionen der Gesamtbanksteuerung?",
    "options": [
      "Messung der Ertrags-/Risikorelation",
      "Basis für die strategische Banksteuerung",
      "Steuerung aller wesentlichen Aufgaben der Bank",
      "Messung der Profitabilität der Geschäfte in Relation zum eingegangenen Risiko"
    ],
    "correct_indices": [
      0,
      1,
      3
    ]
  },
  {
    "question": "11. Welche der folgenden Eigenkapitalinstrumente wurden zur Erfüllung der Mindesteigenmittel, nach CRR/CRD und BWG, neu entwickelt?",
    "options": [
      "Neue Vorzugs- Genossenschaftskapitalanteile",
      "Namensaktien mit ausschließlicher Verwendung für den Kapitalerhaltungspuffer",
      "Bedingte Pflichtwandelanleihen (Contingent Convertible Bonds, Coco Bonds)",
      "Mit Sicherheiten bedeckte Anleihen (Covered Bonds)"
    ],
    "correct_indices": [
      2
    ]
  },
  {
    "question": "12. Die Konzession für das Bankgeschäft wird von der FMA erteilt. Welche aufgelisteten Tätigkeiten darf die FMA im Zuge ihrer Aufsicht durchführen?",
    "options": [
      "Die FMA kann eine Konzession niemals widerrufen",
      "Die FMA kann eine Konzession widerrufen, wenn die aufsichtsrechtlichen Anforderungen der CRR nicht erfüllt werden",
      "Die FMA kann eine Konzession widerrufen, wenn sie 12 Monate lang nicht ausgeübt wurde",
      "Die FMA kann eine Konzession jederzeit auch ohne Angaben von Gründen widerrufen"
    ],
    "correct_indices": [
      1,
      2
    ]
  },
  {
    "question": "13. Welche der folgenden Aussagen sind zutreffend:",
    "options": [
      "Für die Berechnung der Liquidity Coverage Ratio (LCR) sind grundsätzlich die Komponenten High Quality Liquid Assets (HQLA) sowie Total Net Cash Outflows über einen zukünftigen Zeitraum von 30 Kalendertagen zu erfassen",
      "Die LCR soll die jederzeitige Einhaltung der Eigenmittelanforderungen sicherstellen",
      "Mit der CRR wurden zwei Liquiditätskennzahlen eingeführt: i. LCR, ii. NSFR",
      "Unter Liquidität werden jene Posten der Bilanz verstanden die unter dem Pkt. 2. Kassa aufgeführt sind"
    ],
    "correct_indices": [
      0,
      2
    ]
  },
  {
    "question": "14. Ein Organgeschäft ist gem. § 28 BWG jedes Rechtsgeschäfts eines Kreditinstituts mit uA folgenden physischen oder juristischen Personen:",
    "options": [
      "Geschäftsleiterinnen",
      "Die Ärztin des Aufsichtsratsvorsitzenden, die gleichzeitig seine Schwester ist",
      "Ehegatt:innen Lebensgefährt:innen, Kindern, Wahl- und Pflegekinder der GL",
      "Mitgliedern des Aufsichtsrates oder sonstigen nach der Satzung zuständigen Aufsichtsorganen"
    ],
    "correct_indices": [
      0,
      2,
      3
    ]
  },
  {
    "question": "15. Welche Rechtsakte wurden in der EU zur Umsetzung von BASEL III nötig?",
    "options": [
      "Die Novellen zu Eigenkapitalrichtlinie (CRD II, III, IV, V)",
      "Der Erlass zum Bankenhilfspaket der EU und Österreichs",
      "Der Eigenkapitalverordnung (CRR, CRRII)",
      "Nationale Umsetzungsschritte der Eigenkapitalrichtlinien (CRD II, III, IV und V)"
    ],
    "correct_indices": [
      0,
      2,
      3
    ]
  },
  {
    "question": "16. Ein österreichisches Kreditinstitut (nach BWG) benötigt eine Konzession für die gewerbliche Erbringung von Bankgeschäften. Welche der folgenden Geschäfte/Tätigkeiten gehören dazu?",
    "options": [
      "Depotgeschäft",
      "Ausgabe/Verwaltung von Zahlungsmittel",
      "Einlagengeschäft",
      "Inkassogeschäft"
    ],
    "correct_indices": [
      0,
      1,
      2
    ]
  },
  {
    "question": "17. Welche Institutionen gibt es innerhalb der EU zur Regulierung und Aufsicht von Finanzdienstleistungssektoren, die auch für österreichische Banken relevant sind?",
    "options": [
      "EZB",
      "EBA",
      "ESMA",
      "EBRD"
    ],
    "correct_indices": [
      0,
      1,
      2
    ]
  },
  {
    "question": "18. Ein Großkredit lt. Art. 392 CRR II ist ein Kredit:",
    "options": [
      "Dessen Wert 12,5% des Kernkapitals erreicht oder überschreitet",
      "Dessen Wert 10% des Kernkapitals erreicht oder überschreitet",
      "Dessen Wert 10% der anrechenbaren Eigenmittel überschreitet",
      "Dessen Wert € 350.000,-- überschreitet"
    ],
    "correct_indices": [
      1
    ]
  },
  {
    "question": "19. Sie wollen in ihrer Raiffeisenbank auf das Konzept der gelebten Werte im Management setzen. Mit welchen der folgenden Entscheidungen bzw. Maßnahmen werden Sie diesem selbst gesetzten Anspruch gerecht?",
    "options": [
      "Sie verpflichten sich in ihrer Raiffeisenbank zur Umsetzung von Nachhaltigkeitsmaßnahmen und erklären das auch in der Mitarbeiterbesprechung. So sollen die Firmenautos der Geschäftsleiter künftig ausschließlich E-Fahrzeuge sein, die großen Glasflächen im Foyer sollen beschattet werden, um Strom für die Klimatisierung zu sparen und die Mitarbeiterinnen werden ermutigt, Dokumente nur zu drucken, wenn es unbedingt notwendig ist.",
      "Sie bitten ihre Compliance Officerin, in der Führungskräftebesprechung eine aktuelle Präsentation zu halten und aktualisieren auf dieser Basis auch die entsprechenden Dienstanweisungen",
      "Sie finanzieren als Raiffeisenbank zwei elektrische Stiegenlifte im örtlichen Tagesheim für behinderte Menschen. In der Regionalzeitung wird ein Bericht mit Foto gebracht, auch bei der Generalversammlung berichten sie darüber.",
      "Sie verständigen sich im Management-Team darauf, dass Selbstverantwortung ein zentrales Prinzip in Ihrer Raiffeisenbank sein soll. Sie investieren in die Mitarbeiterentwicklung und forcieren Kompetenzentwicklung genauso wie Bewusstseinsbildung. Sie erweitern Pouvoirregelungen und kommunizieren ihre Motivation dazu auch explizit intern. In weiterer Folge betonen Sie auch in den Leistungsversprechen Ihren Kunden gegenüber Kompetenz der Beraterinnen und die Geschwindigkeit der Entscheidungen."
    ],
    "correct_indices": [
      3
    ]
  },
  {
    "question": "20. Sinnstiftende Führung ist ein sehr wertvolles Führungskonzept, um Mitarbeitende langfristig an ein Unternehmen zu binden. Bei diesem Führungsstil geht es eindeutig darum, folgende Parameter klar zu definieren und auch entsprechend in der Organisation als Führungskraft konsequent im Alltag umzusetzen.",
    "options": [
      "Raiffeisen-Marke positionieren und leben (z.B. Loyalität zu einer Mitarbeiterin, die erkrankt ist)",
      "Praktische Maßnahmen zur Stärkung der Unternehmenskultur (z.B. Weihnachtsfeier, Betriebsausflug)",
      "Purpose=Zweck vermitteln",
      "Wertehaltung klar definieren"
    ],
    "correct_indices": [
      2,
      3
    ]
  },
  {
    "question": "21. Welche der folgenden Aussagen über Altersteilzeit treffen zu?",
    "options": [
      "Der AMS-Lohnausgleich wird bis zur Höchstbeitragsgrundlage des ASVG geleistet",
      "Bei einer Blockzeitvereinbarung muss eine Ersatzarbeitskraft eingestellt werden.",
      "Der AMS-Lohnausgleich wird unbegrenzt geleistet",
      "Altersteilzeit benötigt die Zustimmung der Belegschaft"
    ],
    "correct_indices": [
      0,
      1
    ]
  },
  {
    "question": "22. Was ist bei der Beschäftigung von werdenden Müttern zu beachten?",
    "options": [
      "Eine schwere körperliche Arbeit oder Arbeit die für ihren Organismus während der Schwangerschaft oder für das werdende Kind schädlich sind (zb. Ständiges Stehen, Belästigung durch Rauch)",
      "Ab dem 6. Monat keine schwere körperliche Arbeit oder Arbeit, die für ihren Organismus während der Schwangerschaft oder für das werdende Kind schädlich sind (z.B. ständiges Stehen, Belästigung durch Rauch)",
      "Nachtarbeitsverbot von 20:00 – 06:00 Uhr",
      "Verbot von Mehrarbeit"
    ],
    "correct_indices": [
      0,
      2,
      3
    ]
  },
  {
    "question": "23. Welche der folgenden Begriffe kann man dem Thema Arbeitsrecht zuordnen?",
    "options": [
      "Fürsorgepflicht",
      "Günstigkeitsprinzip",
      "Mandatsbeschränkung",
      "Treuepflicht"
    ],
    "correct_indices": [
      0,
      1,
      3
    ]
  },
  {
    "question": "24. Wer schließt für den Raiffeisensektor auf Arbeitgeberseite den Kollektivvertrag ab?",
    "options": [
      "Die RBI",
      "Die RZB",
      "Der Österreichische Raiffeisenverband",
      "Die jeweilige RLB"
    ],
    "correct_indices": [
      2
    ]
  },
  {
    "question": "25. Ab welchem Zeitpunkt entsteht der Urlaubsanspruch?",
    "options": [
      "Der Anspruch auf Urlaub entsteht in den ersten drei Monaten des ersten Arbeitsjahres im Verhältnis zu der im Arbeitsjahr zurückgelegten Dienstzeit, nach 3 Monaten in voller Höhe",
      "Ab dem zweiten Arbeitsjahr entsteht der gesamte Urlaubsanspruch mit Beginn des Arbeitsjahres",
      "Ab dem zweiten Arbeitsjahr entsteht der gesamte Urlaubsanspruch nach Ablauf des ersten Quartals, vorher besteht er nur aliquot",
      "Der Anspruch auf Urlaub entsteht in den ersten 6 Monaten des ersten Arbeitsjahres im Verhältnis zu der im Jahr zurückgelegten Dienstzeit, nach 6 Monaten in voller Höhe"
    ],
    "correct_indices": [
      1,
      3
    ]
  },
  {
    "question": "26. “Culture eats strategy for breakfast“ ist eine berühmte Aussage des Management Gurus Peter Drucker. Mit einer Unternehmenskulturanalyse können Herausforderungen und Erfolgsfaktoren der bestehenden Kultur herausgearbeitet und Veränderungspotentiale aufgezeigt werden. Wenn sie eine Unternehmenskulturanalyse vornehmen, worauf sollten sie besonders achten?",
    "options": [
      "Binden Sie das gesamte Unternehmen in den Prozess ein",
      "Haben sie keine Scheu davor, Dinge zu behalten, die funktionieren",
      "Definieren sie Kulturziele und ausgewählte Kulturverantwortliche in allen wichtigen Unternehmensbereichen",
      "Führungskräfte und Entscheidungsträger müssen mit gutem Beispiel vorangehen"
    ],
    "correct_indices": [
      0,
      1,
      3
    ]
  },
  {
    "question": "27. Im Zuge des strategischen Managements gibt es Ziele zu definieren und Strategieoptionen zur Zielerreichung zu entwickeln, Strategien auszuwählen und umzusetzen. Welche strategischen Grundfragen sollte die Unternehmensstrategie beantworten?",
    "options": [
      "Wie hat sich das Unternehmen seit der Gründung entwickelt",
      "In welchen Geschäftsfeldern wollen wir tätig sein?",
      "Wie sieht die Vision des Unternehmens aus?",
      "Wie wollen wir den Wettbewerb in den Geschäftsfeldern bestreiten?"
    ],
    "correct_indices": [
      1,
      2,
      3
    ]
  },
  {
    "question": "28. In Ihrer Rolle als UnternehmenslenkerIn können Strategien unterschiedliche Eigenschaften erfüllen, die sowohl vorteil- als auch nachteilhaft ausgelegt werden können. Welche können das sein?",
    "options": [
      "Die Strategie sorgt für Beständigkeit & gibt Stabilität, reduziert dabei allerdings eventuell das Kreativitätsniveau",
      "Die Strategie beschreibt die Grundwerte und Einstellungen einer Organisation",
      "Die Strategie bündelt Aktivitäten und erleichtert Entscheidungen",
      "Die Strategie legt Vertriebs- und Marketingbudgets fest"
    ],
    "correct_indices": [
      0,
      2
    ]
  },
  {
    "question": "29. Im strategischen Management stehen Ihnen unterschiedliche Bausteine des Strategiesystems/Strategiehaus zur Verfügung, die jeweils eine Antwort auf unterschiedliche Fragestellungen geben sollen. Neben der Vision z.B. auch die Mission eines Unternehmens. Richtig erarbeitet und eingesetzt beantwortet die Mission welche Frage?",
    "options": [
      "Welchen Zweck erfüllt das Unternehmen für die Kunden, Mitarbeiter und Gesellschaft?",
      "Welchen Zweck hat das Unternehmen für die Eigentümer?",
      "Welchen Wachstumspfad hat das Unternehmen geplant?",
      "Welche sozialen Projekte sollen Mitarbeiter verfolgen?"
    ],
    "correct_indices": [
      0
    ]
  },
  {
    "question": "30. Der Blick auf das eigene Unternehmen kann mit Hilfe von unterschiedlichen Instrumenten, wie z.B. Unternehmenskulturanalyse, SWOT-Analyse oder Organigramm-Analyse durchgeführt werden. Wenn sie das Instrument der Organigramm-Analyse anwenden möchten, welche grundsätzlichen Nachteile von Organigrammen können bei einer solchen Analyse eventuell hinderlich sein?",
    "options": [
      "Organigramme bilden nur die Wunschstruktur ab, haben mit der Realität aber nichts zu tun",
      "Organigramme sind nur Momentaufnahmen, die keinen andauernden Bestand haben und zudem gepflegt werden müssen",
      "Organigramme sind nicht für den internationalen Vergleich geeignet",
      "Organigramme sind in hohem Maß vereinfachend, Kommunikationswege und Hierarchien sind oft losgelöst von Organisationseinheiten"
    ],
    "correct_indices": [
      1,
      3
    ]
  },
  {
    "question": "31. Als Entscheidungsträger:In gilt es im Vorfeld bzw. im Laufe eines Strategieentwicklungsprozess eine ausführliche Analysephase des Unternehmens und der Unternehmensumwelt durchzuführen. Welche Managementmodelle können Sie dafür z.B. heranziehen?",
    "options": [
      "Die Industriestrukturanalyse",
      "Die Balanced Scorecard",
      "Die Stakeholder-Analyse",
      "Die SWOT-Analyse"
    ],
    "correct_indices": [
      0,
      2,
      3
    ]
  },
  {
    "question": "32. Sich laufend verändernde externe und interne Einflüsse stellen eine Organisation vor laufende Herausforderungen und lösen Anpassungs- und Veränderungsprozesse aus. Das macht eine kontinuierliche Beschäftigung mit strategischem Management und regelmäßige Strategieentwicklungsprozesse unabdingbar. Wenn sie eine Strategie entwickeln, mit welchen groben Phasen sollten sie sich in diesem Strategieentwicklungsprozess beschäftigen, um die eigene Organisation erfolgreich weiterentwickeln bzw. neu aufstellen zu können?",
    "options": [
      "Strategieoptionen-Wahl und konsequente Strategieimplementierung",
      "Zielbildung",
      "Umweltanalyse",
      "Produktportfolio-Bereinigung"
    ],
    "correct_indices": [
      0,
      1,
      2
    ]
  },
  {
    "question": "33. Welche Ebenen gehören zum Strategiesystem eines Unternehmens?",
    "options": [
      "Standorte/Filialen",
      "Vision",
      "Einstellungen, Grundwerte",
      "Unternehmensziele"
    ],
    "correct_indices": [
      1,
      2,
      3
    ]
  },
  {
    "question": "34. Welche Phasen gehören zu einem Stakeholder Analyse-Prozess dazu?",
    "options": [
      "Ableiten von Chancen und Risiken",
      "Visualisieren des Stakeholder-Beziehungsgeflechts",
      "Identifizieren der Stakeholder",
      "Vertragsverhandlungen mit Stakeholdern"
    ],
    "correct_indices": [
      0,
      1,
      2
    ]
  },
  {
    "question": "35. Nach Edgar Schein ist die Unternehmenskultur „ein Muster gemeinsamer Grundprämissen, das die Gruppe bei der Bewältigung ihrer Probleme, externer Anpassung und interner Integration erlernt hat, das sich bewährt hat, und das somit bindend gilt; und das daher an neue Mitglieder als rational und emotional korrekter Ansatz für den Umgang mit Problemen weitergegeben wird. Auf welchen Ebenen spielt sich Unternehmenskultur ab?",
    "options": [
      "Auf der Ebene teils bewusster kollektiver Werte",
      "Auf der Ebene unbewusster Prägungen",
      "Auf der Ebene bewusster und sichtbarer Artefakte",
      "Auf der Ebene unbewusster Grundannahmen"
    ],
    "correct_indices": [
      0,
      2,
      3
    ]
  },
  {
    "question": "36. Welches Schlagwort aus der „Angstzwiebel“ ist Ihnen ein Begriff?",
    "options": [
      "Identität",
      "Autonomie",
      "Leistung",
      "Status"
    ],
    "correct_indices": [
      0,
      2
    ]
  },
  {
    "question": "37. Was ist am wichtigsten: Strategie, Struktur, oder Kultur?",
    "options": [
      "Die Kultur – ohne die richtigen Mitarbeiter mit der passenden Einstellung an der richtigen Stelle kommt man nicht voran.",
      "Die Strategie – ohne ein Ziel, kann nicht gesteuert werden",
      "Die Struktur – wenn die Rahmenbedingungen nicht stimmen, kann das Ziel nicht erreicht werden",
      "Alle drei sind gleich wichtig, greifen ineinander und hängen voneinander ab"
    ],
    "correct_indices": [
      3
    ]
  },
  {
    "question": "38. Welcher Aussage stimmen sie zu?",
    "options": [
      "Veränderungsabsichten können bereits Widerstände auslösen",
      "Die Mitarbeiter sollen so wenig wie möglich über anstehende Veränderungen informiert werden, damit keine Unruhe entsteht",
      "Systeme haben eine eigene Logik und Kultur, die man von außen oft nicht erkennen kann.",
      "Der Einsatz externer Berater als Sparringpartner kann sinnvoll sein"
    ],
    "correct_indices": [
      0,
      2,
      3
    ]
  },
  {
    "question": "39. Womit sollten sie sich auseinandersetzen, wenn Sie für Ihre Raiffeisenbank im Employer Branding aktiv werden möchten?",
    "options": [
      "Wie positioniere ich meine Bank als glaubwürdigen und attraktiven Arbeitgeber",
      "Was möchten die Bewerber:innen gerne von mir hören, unabhängig davon was ich bieten kann",
      "Welche laufenden Maßnahmen setze ich, unabhängig von der jeweiligen Personalsuche?",
      "Was sind die Alleinstellungsmerkmale von Raiffeisen am Markt?"
    ],
    "correct_indices": [
      0,
      2,
      3
    ]
  },
  {
    "question": "40. Zu den Personalkennzahlen können gezählt werden?",
    "options": [
      "Die Mitarbeiterfluktuation",
      "Die Mitarbeiterzufriedenheit",
      "Die Überstundenkosten",
      "Durchschnittliche Bewerbungen pro offene Position"
    ],
    "correct_indices": [
      0,
      1,
      2,
      3
    ]
  },
  {
    "question": "41. Wo kann ein Berufsbild eingesetzt werden?",
    "options": [
      "Es kann bei der Bildungsplanung eingesetzt werden",
      "Es kann nicht dazu eingesetzt werden, um Gehaltsbandbreiten sichtbar zu machen",
      "Es kann nicht bei der Personalplanung eingesetzt werden",
      "Es kann eingesetzt werden, um anhand der Kompetenzen und Aufgaben qualitatives Feedback zu geben"
    ],
    "correct_indices": [
      0,
      3
    ]
  },
  {
    "question": "42. Was kann die Beurteilung von Bewerberinnen negativ beeinflussen?",
    "options": [
      "Notizen auf einem Leitfaden erfassen",
      "Das genaue Studium der Bewerbungsunterlagen",
      "Optische Beeinflussung",
      "Der Halo- und/oder Horn Effekt"
    ],
    "correct_indices": [
      1,
      2,
      3
    ]
  },
  {
    "question": "43. Warum ist eine Personalstrategie wichtig und notwendig?",
    "options": [
      "Um frühzeitig zu erkennen, welche Kompetenzen und Fähigkeiten in Zukunft notwendig sind.",
      "Die Geschäftsstrategie lässt sich ohne die notwendigen Personalressourcen nicht umsetzen",
      "Um in Zukunft die notwendigen Personalressourcen zur Verfügung zu haben",
      "Wenn die Unternehmensstrategie gut ausformuliert ist, dann kann eine Personalstrategie entfallen"
    ],
    "correct_indices": [
      0,
      1,
      2
    ]
  },
  {
    "question": "44. Warum stellt das Ressourcenmanagement eine wesentliche Aufgabe einer Führungskraft dar und warum ist es so wichtig?",
    "options": [
      "Durch effektives Ressourcenmanagement benötigt es keine zusätzlichen SOLL-IST-Analysen mehr.",
      "Durch effektives Ressourcenmanagement wird eine Arbeitsüberlastung oder die Abhängigkeit von Ressourcen vermieden",
      "Die Ressourcenplanung dient nicht dazu, Einblick in die Bandbreite anderer Teams und deren Auslastung/Verfügbarkeit zu gewinnen",
      "Durch vorausschauende Planung des Ressourceneinsatzes können Fehler behoben werden, bevor sie passieren"
    ],
    "correct_indices": [
      1,
      3
    ]
  },
  {
    "question": "45. Sie möchten das Ressourcenmanagement innerhalb der Raiffeisenbank optimieren. Welche Möglichkeiten gibt es in diesem Bereich?",
    "options": [
      "Digitale Möglichkeiten werden genutzt",
      "Tätigkeiten in der Bank werden gebündelt",
      "Bildung von Personalunionen",
      "Ein Kompetenzzentrum für spezialisierte Beratung"
    ],
    "correct_indices": [
      0,
      1,
      2,
      3
    ]
  },
  {
    "question": "46. Sie beschäftigen sich mit dem mittelfristigen Ressourcenmanagement inkl. Konkreter Zuweisung von Ressourcen zu Tätigkeiten und Funktionen in der Bank. Dabei werden die Kapazitätsanforderungen mit einbezogen und in weiterer Folge auch an die Akquise von neuen Mitarbeiter:innen bzw. an Outsourcing gedacht. In welcher Dimension des Ressourcenmanagements befinden Sie sich?",
    "options": [
      "Taktische Dimension",
      "Methodische Dimension",
      "Operative Dimension",
      "Strategische Dimension"
    ],
    "correct_indices": [
      0
    ]
  },
  {
    "question": "47. Sie sind seit einigen Jahren Leiter:in der Marktfolge und haben sich eingehend mit der Prozessoptimierung in der Raiffeisenbank beschäftigt. Dafür haben Sie viel Zeit investiert. Was können Zielsetzungen für das Vorhaben sein?",
    "options": [
      "Die Wirtschaftlichkeit der Ablauforganisation soll gesteigert werden",
      "Die Mitarbeiter:innen sollen sich strikt an alle Ihre Prozess-Vorgaben halten ohne die Sinnhaftigkeit zu hinterfragen",
      "Die Durchlaufzeiten für Kundenanfragen sollen verkürzt werden",
      "Die Kapazitäten in ihrer Raiffeisenbank sollen optimal genützt werden"
    ],
    "correct_indices": [
      0,
      2,
      3
    ]
  },
  {
    "question": "48. Nennen Sie die Charakteristika des strategischen Prozessmanagements?",
    "options": [
      "Beschäftigt sich mit der Erstellung der Vision für die Bank",
      "Alle Teile des Unternehmens werden erfasst und beachtet",
      "Ist langfristig, zielorientiert und umfassend",
      "Ist langfristig, orientiert an Teilzielen und betrifft kleinere Teile des Unternehmens"
    ],
    "correct_indices": [
      1,
      2
    ]
  },
  {
    "question": "49. Der Produktkatalog ist Teil des Werteangebotes. Folgende Aussagen sind richtig:",
    "options": [
      "Der Produktkatalog soll möglichst straff und übersichtlich sein",
      "Der Produktkatalog soll auf die wesentlichen Produktfelder abbilden (Sparen, Konto, Finanzierung,…)",
      "Der Produktkatalog dient als Basis für die Kompetenzzuordnung",
      "Der Produktkatalog mit möglichst vielen Produkten um möglichst viele Kundenwünsche zu erfüllen"
    ],
    "correct_indices": [
      0,
      1
    ]
  },
  {
    "question": "50. Welche Vertriebs- und Servicekanäle kennen Sie?",
    "options": [
      "Kreditvermittler",
      "Bankstelle",
      "Telefon",
      "Raiffeisen Mobil"
    ],
    "correct_indices": [
      0,
      1,
      2
    ]
  },
  {
    "question": "51. Was ermöglichen die Mitarbeiter:innen im Vertrieb als Schlüsselressource?",
    "options": [
      "Sponsoring für Vereine",
      "Erträge für die Bank erzielen",
      "Arbeitsplätze in der Region schaffen",
      "Wertangebot für unsere Kunden schaffen"
    ],
    "correct_indices": [
      1,
      3
    ]
  },
  {
    "question": "52. Welche Aspekte sind für den Aufbau und Entwicklung der Kundenbeziehung relevant?",
    "options": [
      "Die Bank lukriert hohe Beteiligungserträge",
      "Funktionsfähiges digitales Angebot – schnell/bequem/einfach",
      "Empathiefähigkeit und Kompetenz der Mitarbeiter:innen",
      "Die Bank hat ihre Kosten im Griff"
    ],
    "correct_indices": [
      1,
      2
    ]
  },
  {
    "question": "53. Welche zentralen Anforderungen werden im Zusammenhang mit der Vertriebssteuerung an die Mitarbeiter:innen gestellt?",
    "options": [
      "Alle Ausbildungen mit Auszeichnung abschließen",
      "Perfektion betreffend Bartransaktionen",
      "Gleichwertiger Einsatz aller Kanäle",
      "Interesse an Menschen und Empathiefähigkeit"
    ],
    "correct_indices": [
      2,
      3
    ]
  },
  {
    "question": "54. Welche Vorhaben würden sie als Projekte durchführen?",
    "options": [
      "Die Schalterzeiten in einer der Bankstellen sollen neu geregelt werden. Um mehr Gelegenheit für persönliche Beratung zu bieten, sollen die Zeiten bis Ende des kommenden Monats um 20 % reduziert werden. Der Mittwochnachmittag wird besonders schlecht angenommen.",
      "Der Kundenbereich einer der Bankstellen wurde seit vielen Jahren nicht adaptiert und soll nun modernisiert werden. Erste Gespräche der GL mit Funktionär:innen, benachbarten Banken und Kund:innen legen viele unterschiedliche Stoßrichtungen offen.",
      "Die externe Revision hat sich angekündigt. Der Geschäftsleitung ist es besonders wichtig, dass in diesem Jahr alles glatt läuft. Es verbleiben noch wenige Wochen, um die notwendigen Vorbereitungen zu treffen.",
      "Die neue Geschäftsleiterin regt an die Kundensegmentierung der Bank zu überdenken. Ein Expert:innenteam soll in den kommenden Monaten die Ausgangslage analysieren und ein Zielszenario entwickeln."
    ],
    "correct_indices": [
      1,
      3
    ]
  },
  {
    "question": "55. Welche der folgenden Aussagen zum Thema Projektmanagement treffen zu?",
    "options": [
      "In der Phase der Projektplanung sollten möglichst Ressourcen eingespart werden, um diese danach für die Durchführungsphase zur Verfügung zu haben.",
      "Die Meetingagenda für Abstimmungen mit der Projektleitung ist immer flexibel zu gestalten, um auf neue Entwicklungen eingehen zu können.",
      "Für jedes Projekt muss es definierte Ziel(e) geben, das/die schriftlich festgehalten werden.",
      "Die Zieldefinition obliegt alleine dem:r Projektautraggeber:in"
    ],
    "correct_indices": [
      2
    ]
  },
  {
    "question": "56. Was sind die Schwächen einer Banksteuerung rein anhand von Volumens- und Stückzahlen?",
    "options": [
      "Vernachlässigung der Ertragskraft",
      "Lediglich Wachstum steht als Ziel im Vordergrund",
      "Außerachtlassen der regulatorischen Vorschriften",
      "Keine Berücksichtigung der Risikoentwicklung"
    ],
    "correct_indices": [
      0,1,3
    ]
  },
  {
    "question": "57. Welche der folgenden Ertragskomponenten finden Sie in den Betriebserträgen einer Bank lt. GuV?",
    "options": [
      "Netto-Provisionsertrag",
      "Erträge aus Beteiligungen",
      "Außerordentliches Ergebnis",
      "Netto-Zinsertrag"
    ],
    "correct_indices": [
      0,1,3
    ]
  },
  {
    "question": "58. Welche Position/en zählt/zählen zu den zentralen Zielsetzungen einer erfolgreichen Gesamtbanksteuerung?",
    "options": [
      "Liquidität",
      "Rendite",
      "Schlagzahl",
      "Risiko"
    ],
    "correct_indices": [
      0,
      1,
      3
    ]
  },
  {
    "question": "59. Auf welche Faktoren legt die Gesamtbanksteuerung laut betriebswirtschaftlicher Definition ein besonderes Augenmerk?",
    "options": [
      "Eigenkapital",
      "Liquidität",
      "Personal",
      "Dichte des Filialnetzes"
    ],
    "correct_indices": [
      0,
      1
    ]
  },
  {
    "question": "60. Welche der folgenden Aussagen über den Value-at-Risk (VaR) sind korrekt?",
    "options": [
      "Der VaR ist definiert als der geschätzte, maximal erwartete Verlust, der unter üblichen Marktbedingungen innerhalb einer bestimmten Periode mit einer bestimmten Wahrscheinlichkeit eintreten kann",
      "Der VaR prognostiziert genau den Verlust, den ein Finanzinstitut innerhalb einer bestimmten Haltedauer erleiden kann",
      "Die Wahl der Haltedauer des VaR sollte sich an der Fungibilität des zu bewertenden Assets orientieren",
      "Der VaR mit einer Haltedauer von 1 Tag und einem Konfidenzniveau von 99% garantiert, dass pro Jahr nur eine Wertänderung auftritt, die den gemessenen VaR übersteigt"
    ],
    "correct_indices": [
      0,
      2
    ]
  },
  {
    "question": "61. Eine prozessorientierte Standardstückkostenrechnung (DB-Rechnung) ermöglicht die Verrechnung der direkten Kosten, die unmittelbar mit dem jeweiligen Geschäft verbunden sind. Welche Prozesse werden Sie hier konkret definieren bzw. bewerten?",
    "options": [
      "Berechnung der Standardstückkosten: Zeit(schätzung) pro Person multipliziert mit dem anzuwendenden Stundensatz",
      "Stückkosteninformationen verknüpfen die Kalkulation des Einzelgeschäftes mit dem Produktivitätsergebnis",
      "Ermittlung des Standardressourcenverbrauchs wie Personal- und Sachkosten",
      "Der Produktkatalog und die Standardarbeitsabläufe müssen klar definiert sein"
    ],
    "correct_indices": [
      1,
      2,
      3
    ]
  },
  {
    "question": "62. Welche der folgenden Aussagen im Rahmen der statischen Zinselastizitätsbilanz sind korrekt?",
    "options": [
      "Es werden betragsmäßige Inkongruenzen zwischen den Festzinsaktiva und -passiva als Ursache des Zinsspannenrisikos angesehen",
      "Festzinspositionen werden mit einer Zinselastizität von 1 berücksichtigt",
      "Über Elastizitäten wird dem Umstand Rechnung getragen, dass sich die Entwicklung der Konditionen von Kundengeschäften eng an der Veränderung bestimmter Geld- und Kapitalmarktzinsen orientiert.",
      "Ein aktivischer Elastizitätsüberhang von 0,03 bedeutet, dass eine Erhöhung des Marktzinssatzes um 1%-Punkt zu einer Reduktion der Bruttozinsspanne um 0,03%-Punkte führt"
    ],
    "correct_indices": [
      0,
      2
    ]
  },
  {
    "question": "63. Welche der folgenden Kennzahlen haben bei der Ergebnisanalyse einer Bank aus der GuV alleine besondere Bedeutung?",
    "options": [
      "Ausleihungsquote",
      "Risikokosten (WB in % vom Betriebsergebnis)",
      "Eigenkapitalrendite",
      "Cost-Income-Ratio"
    ],
    "correct_indices": [
      1,
      3
    ]
  },
  {
    "question": "64. Was ist/sind die Kernfunktionen der Gesamtbanksteuerung?",
    "options": [
      "Basis für die strategische Banksteuerung",
      "Steuerung aller wesentlichen Aufgaben der Bank",
      "Messung der Profitabilität der Geschäfte in Relation zum eingegangenen Risiko",
      "Messung der Ertrags-/Risikorelation"
    ],
    "correct_indices": [
      0,
      2,
      3
    ]
  },
  {
    "question": "65. Nennen Sie die Kennzahl/en, welche bei der Berechnung sowohl Daten aus der Gewinn- und Verlustrechnung als auch aus der Bilanz benötigen?",
    "options": [
      "Zinsspanne in % der Bilanzsumme",
      "Eigenkapitalrendite (Return on Equity RoE)",
      "Ausleihungsquote",
      "Eigenkapitalquote"
    ],
    "correct_indices": [
      0,
      1
    ]
  },
  {
    "question": "66. Verstöße gegen das BWG und die CRR stehen unter einer Reihe von Strafsanktionen. Welche der folgenden Aktionen kann die FMA tätigen?",
    "options": [
      "Die FMA kann empfindliche Strafen gegen die Geschäftsleiter aussprechen",
      "Die FMA kann zwar keine Strafen gegen die Geschäftsleiter erheben, dafür aber strenge Strafen gegen das Kreditinstitut",
      "Die FMA kann bei schwerwiegenden Verstößen eine Konzession entziehen",
      "Die FMA kann bei Verstößen den Funktionären den Auftrag erteilen die Geschäftsleiter zu kündigen"
    ],
    "correct_indices": [
      0,
      2,
      3
    ]
  },
  {
    "question": "67. Ein Großkredit lt. Art. 392 CRR II ist ein Kredit:",
    "options": [
      "Dessen Wert 10% des Kernkapitals erreicht oder überschreitet",
      "Dessen Wert 12,5% des Kernkapitals erreicht oder überschreitet",
      "Dessen Wert 350.000 EUR überschreitet",
      "Dessen Wert 10% der anrechenbaren Eigenmittel überschreitet"
    ],
    "correct_indices": [
      0
    ]
  },
  {
    "question": "68. Ein Organgeschäft ist gemäß § 28 BWG jedes Rechtsgeschäft eines Kreditinstitutes mit uA folgenden physischen oder juristischen Personen:",
    "options": [
      "Ehegatt:innen, Lebensgefährt:innen, Kindern, Wahl- und Pflegekindern der Geschäftsleitung",
      "Mitgliedern des Aufsichtsrates oder sonstigen nach der Satzung zuständigen Aufsichtsorganen",
      "Geschäftsleiter:innen",
      "Die Ärztin des Aufsichtsratsvorsitzenden, die gleichzeitig seine Schwester ist"
    ],
    "correct_indices": [
      0,
      1,
      2
    ]
  },

    {
    "question": "69. Kapitalpuffer, die seit 01.01.2016 zu halten sind, setzen sich folgendermaßen zusammen:",
    "options": [
      "Die werden aus Kernkapital gebildet (AT1)",
      "Sie werden aus hartem Kernkapital gebildet (CET 1)",
      "Sie werden aus Ergänzungskapital gebildet (T2)",
      "Keiner der vorherigen Aussagen ist zutreffend"
    ],
    "correct_indices": [
1
    ]
  },

      {
    "question": "70. Laut den Sorgfaltspflichten der Geschäftsleitung müssen diese insbesondere die bankgeschäftlichen Risiken begrenzen. Welche der folgenden Punkte gehören dazu?",
    "options": [
      "Das Risiko einer übermäßigen Verschuldung",
      "Das Zinsänderungsrisiko",
      "Das Marktrisiko",
      "Das operationelle Risiko"
    ],
    "correct_indices": [
0,1,2,3
    ]
  },

        {
    "question": "71. Im Zuge der Niederlassungsfreiheit können Institute über Zweigstellen in anderen Mitgliedsstaaten tätig werden. Welche der folgenden Voraussetzungen müssen erfüllt sein, damit eine Zweigstelle eröffnet werden darf?",
    "options": [
      "Das Institut muss seinen Sitz in einem Mitgliedsstaat haben",
      "Die Aufsichtsbehörde des Zielstaates muss darüber informiert werden (Notifikation)",
      "Das Institut muss im Mitgliedsstaat des Sitzes zugelassen und von den dort zulässigen Aufsichtsbehörden überwacht werden",
      "Die Aufsichtsbehörde des Herkunftslandes muss informiert werden. (Notifikation)"
    ],
    "correct_indices": [
0,1,2,3
    ]
  },
  {
    "question": "72. Wer unterliegt den Fit & Proper Anforderungen gemäß EBA Leitlinien und FMA Rundschreiben?",
    "options": [
      "Inhaber von Schlüsselfunktionen",
      "Mitglieder der Geschäftsleitung",
      "Mitglieder des Aufsichtsrates",
      "Alle Mitglieder"
    ],
    "correct_indices": [
      0,
      1,
      2
    ]
  },

    {
    "question": "73. Welche der folgenden Kapitalpuffer wurden ab 01.01.2016 stufenweise in der EU eingeführt?",
    "options": [
      "Ein allgemeiner Kapitalerhaltungspuffer in der Höhe von 2,5%",
      "Ein Kapitalpuffer für global systemrelevante Banken (G-SIBs) von bis zu 3,5%",
      "Ein Tier 2-Kapitalpuffer im Ausmaß von 2%",
      "Kapitalpuffer für operationale Risiken",
    ],
    "correct_indices": [
      0,
      1
    ]
  },

  {
    "question": "74. Welche Maßstäbe sind in der Führungsarbeit zur Etablierung eines Wertekorsetts besonders hilfreich?",
    "options": [
      "Konsequenz",
      "Kommunikation",
      "Vernetztes Denken",
      "Klarheit",
    ],
    "correct_indices": [
      0,1,3
    ]
  },

    {
    "question": "75. Sie kommen nach der Generalversammlung an einen Tisch zu sitzen, an dem mit Interesse und Leidenschaft über „das größere Ganze von Raiffeisen“ diskutiert wird. Sie hören unterschiedliche Aussagen. Welche davon sind richtig?",
    "options": [
      "Der österreichische Raiffeisenverband ist mehr als ein Bankenverband. Er hat neben Kreditgenossenschaften auch die Interessen der Lagerhäuser sowie der Molkereien und anderer Genossenschaften nach dem System Raiffeisen zu vertreten",
      "Die Anzahl der Raiffeisenbanken pro Bundesland variiert je nach Bundesland-Größe. Die durchschnittlichen Bilanzsummen sind jedoch in jedem Bundesland nahezu gleich hoch.",
      "Die RBI ist eine Aktiengesellschaft, die vollständig im Eigentum der Raiffeisen Bankengruppe Österreich steht.",
      "Auch bei Raiffeisen ist die Anzahl der Bankstellen in den letzten Jahren gesunken. Dennoch aber betreibt die Raiffeisen Bankengruppe bei weitem die meisten Bankstellen in Österreich."
    ],
    "correct_indices": [
      0,
      3
    ]
  },

  {
    "question": "76. Was versteht man unter einem Kollektivvertrag?",
    "options": [
      "Vereinbarung zwischen kollektivvertragsfähigen Körperschaften",
      "Vereinbarung zwischen Dienstnehmer und Funktionären",
      "Vereinbarung zwischen Dienstgeber und Betriebsrat",
      "Vereinbarung zwischen Dienstnehmer und Dienstgeber"
    ],
    "correct_indices": [
      0
    ]
  },
  {
    "question": "77. Wie lange beträgt die Schutzfrist für werdende Mütter?",
    "options": [
      "Kommt es zu einer Verkürzung der 8-Wochenfrist vor der Entbindung, dann verlängert sich die Schutzfrist nach der Entbindung um die Anzahl der Tage längstens jedoch insgesamt 16 Wochen nach der Entbindung",
      "Kommt es zu einer Verkürzung der 8-Wochenfrist vor der Entbindung, dann verlängert sich die Schutzfrist nach der Entbindung um die Anzahl der Tage längstens jedoch insgesamt 12 Wochen nach der Entbindung",
      "8 Wochen vor dem voraussichtlichem Entbindungstermin und 8 Wochen nach der Geburt des Kindes",
      "Bei Frühgeburten, Mehrlingsgeburten oder Kaiserschnittentbindungen verlängert sich die Frist des Beschäftigungsverbotes nach der Entbindung auf 12 Wochen",
      "Seite 21 Arbeitsrecht"
    ],
    "correct_indices": [
      0,
      2,
      3
    ]
  },
  {
    "question": "78. Ab welchem Zeitpunkt entsteht der Urlaubsanspruch?",
    "options": [
      "Ab dem zweiten Arbeitsjahr entsteht der gesamte Urlaubsanspruch nach Ablauf des ersten Quartals, vorher besteht er nur aliquot",
      "Der Anspruch auf Urlaub entsteht in den ersten drei Monaten des ersten Arbeitsjahres im Verhältnis zu der im Arbeitsjahr zurückgelegten Dienstzeit, nach 3 Monaten in voller Höhe",
      "Der Anspruch auf Urlaub entsteht in den ersten 6 Monaten des ersten Arbeitsjahres im Verhältnis zu der im Jahr zurückgelegten Dienstzeit, nach 6 Monaten in voller Höhe",
      "Ab dem zweiten Arbeitsjahr entsteht der gesamte Urlaubsanspruch mit Beginn des Arbeitsjahres"
    ],
    "correct_indices": [
      2,
      3
    ]
  },
  {
    "question": "79. Welche der folgenden Aussagen bezüglich Bestimmungen eines Dienstvertrages ist/sind korrekt:",
    "options": [
      "Der Dienstnehmer ist nicht berechtigt, ohne vorhergehende schriftliche Zustimmung des Dienstgebers eine Nebenbeschäftigung auszuüben",
      "Der Dienstnehmer ist berechtigt jederzeit und ohne vorherige Zustimmung des Dienstgebers eine Nebenbeschäftigung auszuüben",
      "Der Dienstnehmer ist verpflichtet, alle ihm übertragenen Arbeiten gewissenhaft zu verrichten und diesbezügliche Bestimmungen und Weisungen genau zu beachten und seine volle Arbeitskraft uneingeschränkt zur Verfügung zu stellen",
      "Es herrscht ein Konkurrenzverbot"
    ],
    "correct_indices": [
      0,
      2,
      3
    ]
  },
  {
    "question": "80. Was ist bei der Beschäftigung von werdenden Müttern zu beachten?",
    "options": [
      "Nachtarbeitsverbot von 20:00 – 06:00 Uhr (gesetzliche Ausnahmen vorhanden)",
      "Ab dem 6. Monat keine schwere körperliche Arbeit oder Arbeit, die für ihren Organismus während der Schwangerschaft oder für das werdende Kind schädlich sind (z.B. ständiges Stehen, Belästigung durch Rauch)",
      "Verbot von Mehrarbeit",
      "Eine schwere körperliche Arbeit oder Arbeit die für ihren Organismus während der Schwangerschaft oder für das werdende Kind schädlich sind (zb. Ständiges Stehen, Belästigung durch Rauch)"
    ],
    "correct_indices": [
      0,
      2,
      3
    ]
  },
  {
    "question": "81. Die Welt die Unternehmen vor vermeintlich immer größeren Herausforderungen stellt, wird oft als VUCA bezeichnet. Welche Aspekte gehören zu VUCA dazu?",
    "options": [
      "Ambiguity (Mehrdeutigkeit)",
      "Uncertainty (Ungewissheit)",
      "Volatility (Volatilität)",
      "Complexity (Komplexität)"
    ],
    "correct_indices": [
      0,
      1,
      2,
      3
    ]
  },
  {
    "question": "82. Eine detailliert durchgeführte SWOT-Analyse kann ein wertvolles Managementinstrument sein, um den Status-Quo im und rund um das Unternehmen zu bewerten. Was gibt es bei einer solchen SWOT-Analyse zu beachten?",
    "options": [
      "Bei der unternehmensexternen Analyse wird vor allem die eigene Branche und der bestehen Markt genau unter die Lupe genommen.",
      "Es kommt zu einer Identifikation von unternehmensinternen Stärken und Schwächen und unternehmensexternen Chancen und Risiken",
      "Die Strategieplanung beruht auf der Kombination von Stärken und Chancen",
      "Jede Schwäche ist in eine Stärke umzuwandeln oder mit der Zeit zu eliminieren"
    ],
    "correct_indices": [
      0,
      1
    ]
  },
  {
    "question": "83. Im Zuge des strategischen Managements gibt es Ziele zu definieren und Strategieoptionen zu Zielerreichung zu entwickeln, Strategien auszuwählen und umzusetzen. Welche strategischen Grundfragen sollte die Unternehmensstrategie beantworten?",
    "options": [
      "Wie hat sich das Unternehmen seit der Gründung entwickelt",
      "Wie wollen wir den Wettbewerb in den Geschäftsfeldern bestreiten?",
      "Wie sieht die Vision des Unternehmens aus?",
      "In welchen Geschäftsfeldern wollen wir tätig sein?"
    ],
    "correct_indices": [
      1,
      2,
      3
    ]
  },
  {
    "question": "84. In Ihrer Rolle als UnternehmenslenkerIn können Strategien unterschiedliche Eigenschaften erfüllen, die sowohl vorteil- als auch nachteilhaft ausgelegt werden können. Welche können das sein?",
    "options": [
      "Die Strategie sorgt für Beständigkeit & gibt Stabilität, reduziert dabei allerdings eventuell das Kreativitätsniveau",
      "Die Strategie bündelt Aktivitäten und erleichtert Entscheidungen",
      "Die Strategie beschreibt die Grundwerte und Einstellungen einer Organisation",
      "Die Strategie legt Vertriebs- und Marketingbudgets fest"
    ],
    "correct_indices": [
      0,
      1
    ]
  },
  {
    "question": "85. Im strategischen Management stehen Ihnen unterschiedliche Bausteine des Strategiesystems/Strategiehaus zur Verfügung, die jeweils eine Antwort auf unterschiedliche Fragestellungen geben sollen. Neben der Vision z.B. auch die Mission eines Unternehmens. Richtig erarbeitet und eingesetzt beantwortet die Mission welche Frage?",
    "options": [
      "Welchen Zweck hat das Unternehmen für die Eigentümer?",
      "Welche sozialen Projekte sollen Mitarbeiter verfolgen?",
      "Welchen Zweck erfüllt das Unternehmen für die Kunden, Mitarbeiter und Gesellschaft?",
      "Welchen Wachstumspfad hat das Unternehmen geplant?"
    ],
    "correct_indices": [
      2
    ]
  },
  {
    "question": "86. Die ansteigende Komplexität im Unternehmenskontext führt dazu, dass besonders für Entscheidungsträger:innen das Thema Governance verstärkt in den Mittelpunkt des unternehmerischen Handelns rückt. Was verstehen Sie in diesem Zusammenhang als Kriterien von Governance?",
    "options": [
      "Governance sorgt dafür, dass das Unternehmen sich an anerkannte ethische Standards und Best Practices hält und im Rahmen der geltenden Gesetze und Formvorschriften arbeitet",
      "Governance umfasst alle vertraglichen Vereinbarungen mit Kundinnen und Lieferanten",
      "Governance orientiert sich an den ESG und sorgt für eine konforme Umsetzung im Unternehmen",
      "Governance ist die Gesamtheit der Regeln, Verfahren oder Gesetze, nach denen Unternehmen geführt werden."
    ],
    "correct_indices": [
      0,
      3
    ]
  },
  {
    "question": "87. Welche Phasen gehören zu einem Stakeholder Analyse-Prozess dazu?",
    "options": [
      "Identifizieren der Stakeholder",
      "Vertragsverhandlungen mit Stakeholdern",
      "Ableiten von Chancen und Risiken",
      "Visualisieren des Stakeholder-Beziehungsgeflechts"
    ],
    "correct_indices": [
      0,
      2,
      3
    ]
  },
  {
    "question": "88. “Culture eats strategy for breakfast“ ist eine berühmte Aussage des Management Gurus Peter Drucker. Mit einer Unternehmenskulturanalyse können Herausforderungen und Erfolgsfaktoren der bestehenden Kultur herausgearbeitet und Veränderungspotentiale aufgezeigt werden. Wenn sie eine Unternehmenskulturanalyse vornehmen, worauf sollten sie besonders achten?",
    "options": [
      "Definieren sie Kulturziele und ausgewählte Kulturverantwortliche in allen wichtigen Unternehmensbereichen",
      "Haben sie keine Scheu davor, Dinge zu behalten, die funktionieren",
      "Binden Sie das gesamte Unternehmen in den Prozess ein",
      "Führungskräfte und Entscheidungsträger müssen mit gutem Beispiel vorangehen"
    ],
    "correct_indices": [
      1,
      2,
      3
    ]
  },
  {
    "question": "89. Als Entscheidungsträger:In gilt es im Vorfeld bzw. im Laufe eines Strategieentwicklungsprozess eine ausführliche Analysephase des Unternehmens und der Unternehmensumwelt durchzuführen. Welche Managementmodelle können Sie dafür z.B. heranziehen?",
    "options": [
      "Die Balanced Scorecard",
      "Die Stakeholder-Analyse",
      "Die Industriestrukturanalyse",
      "Die SWOT-Analyse"
    ],
    "correct_indices": [
      1,
      2,
      3
    ]
  },
  {
    "question": "90. In welche Bereiche teilt sich die Analysephase in einem Strategieentwicklungsprozess auf?",
    "options": [
      "Umweltanalyse",
      "Unternehmensanalyse",
      "Kostenanalyse",
      "Ertragsanalyse"
    ],
    "correct_indices": [
      0,
      1
    ]
  },
  {
    "question": "91. Im Harvard Business Manager beschreibt John P. Kotter „Acht Kardinalfehler bei der Transformation“ Welche der folgenden Aussagen zählen zu diesen Kardinalfehlern?",
    "options": [
      "Entgegenstehende Hürden werden zu früh weggeräumt",
      "Siegesfeiern werden zu spät angesetzt",
      "Es wird zu wenig darauf gewartet, ein Gefühl der Dringlichkeit entstehen zu lassen",
      "Es wird versäumt eine Vision zu entwerfen"
    ],
    "correct_indices": [
      2,
      3
    ]
  },
  {
    "question": "92. Welche Aussage(n) trifft/treffen zu?",
    "options": [
      "Unternehmen, Teams, Vereine, Familien etc. sind keine „trivialenn Maschinen“, sondern komplexe soziale Systeme mit einer ganz spezifischen Eigenlogik",
      "Veränderungsabsicht kann als Störung eines funktionierenden Gleichgewichts beschrieben werden",
      "Die Dynamik von Veränderungen ist daher nicht linear und chaotisch, sie erfordert ein „nicht direktives“ Führungsverständnis",
      "Lebende Systeme halten sich mehr an öffentlich sichtbare Anweisungen und formelle Regeln als an informelle „heimliche“ Spielregeln"
    ],
    "correct_indices": [
      0,
      1,
      2
    ]
  },
  {
    "question": "93. Die Bereitschaft eines Unternehmens für tiefgreifende Veränderungen („Change Readiness“) hängt von einer Reihe von Faktoren ab. Welche der folgenden Bedingungen sollten gegeben sein, damit ein Veränderungsprozess gelingt?",
    "options": [
      "Der Einsatz externer Berater als Sparringpartner kann insbesondere in der Frühphase des Projekts sinnvoll sein",
      "Es sollte unbedingt ein klarer Kommunikationsplan vorliegen, der während des Prozesses ggf. auch adaptiert werden kann",
      "Bei Beginn des Changeprojekts ist den Mitarbeitern eine Beschäftigungsgarantie auf mindestens drei Jahre zu geben",
      "Um flexibel agieren zu können sollten die Projektmanagement-ressourcen für den Veränderungsprozess nicht geplant werden. Auch von Schätzungen ist abzuraten, da sie zu sehr binden."
    ],
    "correct_indices": [
      0,
      1
    ]
  },
  {
    "question": "94. Warum ist eine Personalstrategie wichtig und notwendig?",
    "options": [
      "Die Geschäftsstrategie lässt sich ohne die notwendigen Personalressourcen nicht umsetzen",
      "Wenn die Unternehmensstrategie gut ausformuliert ist, dann kann eine Personalstrategie entfallen",
      "Um in Zukunft die notwendigen Personalressourcen zur Verfügung zu haben",
      "Um frühzeitig zu erkennen, welche Kompetenzen und Fähigkeiten in Zukunft notwendig sind."
    ],
    "correct_indices": [
      0,
      2,
      3
    ]
  },

  {
    "question": "95. Wo kann ein Berufsbild eingesetzt werden?",
    "options": [
      "Bei der Personalplanung",
      "Es kann eingesetzt werden, um Gehaltbandbreiten je Berufsbild sichtbar zu machen",
      "Bei der Bildungsplanung",
      "Es kann eingesetzt werden, um anhand der Kompetenzen und Aufgaben qualitatives Feedback zu geben"
    ],
    "correct_indices": [
      0,
      2,
      3
    ]
  },

  {
    "question": "96. Welche Personalauswahlinstrumente sind zu empfehlen?",
    "options": [
      "Strukturiertes Interview",
      "Graphologische Gutachten",
      "Sternzeichen",
      "Assessment Center"
    ],
    "correct_indices": [
      0,
      1,
      3
    ]
  },

  {
    "question": "97. Was muss man bei der Formulierung einer Stellenausschreibung gesetzlich verpflichtend beachten?",
    "options": [
      "Standort der Stelle",
      "Geschlechterneutrale Formulierung",
      "Mindestgehaltsangabe",
      "Die Aufgaben der Stelle"
    ],
    "correct_indices": [
      1,2
    ]
  },

  {
    "question": "98. Was kann die Beurteilung von Bewerberinnen negativ beeinflussen?",
    "options": [
      "Optische Beeinflussung",
      "Der Halo- und/oder Horn Effekt",
      "Notizen auf einem Leitfaden erfassen",
      "Das genaue Studium der Bewerbungsunterlagen"
    ],
    "correct_indices": [
      0,
      1,
      3
    ]
  },
  {
    "question": "99. Andreas ist Kundenberater in der Raiffeisenbank. Er benötigt dringend den fertigen Kreditantrag, da in drei Tagen der Unterschriftentermin mit dem Kunden stattfindet. Leider haben ein paar Unterlagen gefehlt und somit hat sich der Freigabetermin mit der GL-Sitzung überschnitten und somit den ganzen Prozess verzögert. Wie reagieren sie als Marktfolge-Verantwortlicher?",
    "options": [
      "Der interne Prozess muss gut abgestimmt sein, sodass alle Schnittstellen gut funktionieren",
      "Der Kunde soll seinen Kreditantrag rechtzeitig unterschreiben, und es werden alle Hebel für die Einhaltung des vereinbarten Termines in Bewegung gesetzt",
      "Wichtige Unterlagen zur Bearbeitung des Kreditantrags haben gefehlt, der Unterschriftentermin mit dem Kunden muss etwas verschoben werden+",
      "Andreas kommt auf die „schwarze Liste“ in der Marktfolge. Künftige Kreditanträge von ihm werden speziell auf fehlende Unterlagen kontrolliert"
    ],
    "correct_indices": [
      0,
      2
    ]
  },
  {
    "question": "100. Nennen Sie die Charakteristika des operativen Prozessmanagements?",
    "options": [
      "Ist kurzfristiger, dabei eingegrenzt im Wirkungsbereich und auf Teilziele ausgelegt",
      "Alle Teile des Unternehmens werden erfasst und beachtet",
      "Beschäftigt sich mit der Implementierung von strategischen Prozessen",
      "Ist langfristig, zielorientiert und umfassend"
    ],
    "correct_indices": [
      0
    ]
  },
  {
    "question": "101. Warum stellt das Ressourcenmanagement eine wesentliche Aufgabe einer Führungskraft dar und warum ist es so wichtig?",
    "options": [
      "Durch effektives Ressourcenmanagement benötigt es keine zusätzlichen SOLL-IST-Analysen mehr.",
      "Die Ressourcenplanung dient nicht dazu, Einblick in die Bandbreite anderer Teams und deren Auslastung/Verfügbarkeit zu gewinnen",
      "Durch effektives Ressourcenmanagement wird eine Arbeitsüberlastung oder die Abhängigkeit von Ressourcen vermieden",
      "Durch vorausschauende Planung des Ressourceneinsatzes können Fehler behoben werden, bevor sie passieren"
    ],
    "correct_indices": [
      2,
      3
    ]
  },
  {
    "question": "102. Sie möchten das Ressourcenmanagement innerhalb der Raiffeisenbank optimieren. Welche Möglichkeiten gibt es in diesem Bereich?",
    "options": [
      "Digitale Möglichkeiten werden genutzt",
      "Tätigkeiten in der Bank werden gebündelt",
      "Bildung von Personalunionen",
      "Ein Kompetenzzentrum für spezialisierte Beratung"
    ],
    "correct_indices": [
      0,
      1,
      2,
      3
    ]
  },
  {
    "question": "103. Welche der angeführten Prozessebenen können Sie in der Raiffeisenbank finden?",
    "options": [
      "Ebene der Managementprozesse (Steuerungsprozesse)",
      "Ebene der Abwicklungsprozesse (Zahlungsverkehr,…)",
      "Ebene der Kernprozesse (Finanzierung, Veranlagung,…)",
      "Ebene der Unterstützungsprozesse (Compliance, Geldwäsche, Revision,…)"
    ],
    "correct_indices": [
      0,
      2,
      3
    ]
  },
  {
    "question": "104. In der Kundensegmentierung hat folgendes Bedürfnis Priorität bzw. ist das Fundament:",
    "options": [
      "Bedürfnis nach einem persönlichen Ansprechpartner",
      "Bedürfnis nach spezieller Beratung",
      "Ausgezeichnetes Serviceempfinden beim Kunden",
      "Convenience im Sinne von schnell, bequem, einfach"
    ],
    "correct_indices": [
      2,
      3
    ]
  },
  {
    "question": "105. Was ermöglichen die Mitarbeiter:innen im Vertrieb als Schlüsselressource?",
    "options": [
      "Sponsoring für Vereine",
      "Erträge für die Bank erzielen",
      "Arbeitsplätze in der Region schaffen",
      "Wertangebot für unsere Kunden schaffen"
    ],
    "correct_indices": [
      1,
      3
    ]
  },
  {
    "question": "106. Marianne möchte sich nicht festlegen, ob sie zur Kundenberatung in die Filiale kommt, sie ihr Sparbuch online abschließen möchte oder andere Vertriebskanäle in der Bank nutzt. Wie wird die optimale kundenzentrierte Betreuung bezeichnet?",
    "options": [
      "Multikanal",
      "Omnikanal",
      "Mehrkanal",
      "Einkanal"
    ],
    "correct_indices": [
      1
    ]
  },
  {
    "question": "107. Andreas ist Vertriebsleiter in der Raiffeisenbank. Er macht sich Gedanken zum Wertangebot. Welche Leitfragen wird er sich in diesem Zusammenhang stellen?",
    "options": [
      "Wie hoch ist die reine Gewinnabsicht der Bank",
      "Welche Kundenprobleme helfen wir zu lösen",
      "Wie viele Lehrlinge werden wir in der Bank einstellen",
      "Welchen Preis muss ein Produkt haben?",
    ],
    "correct_indices": [
      1,
      3
    ]
  },
  {
    "question": "108. Der Produktkatalog ist Teil des Werteangebotes. Folgende Aussagen sind richtig:",
    "options": [
      "Der Produktkatalog mit möglichst vielen Produkten um möglichst viele Kundenwünsche zu erfüllen",
      "Der Produktkatalog soll möglichst straff und übersichtlich sein",
      "Der Produktkatalog soll auf die wesentlichen Produktfelder abbilden (Sparen, Konto, Finanzierung,…)",
      "Der Produktkatalog dient als Basis für die Kompetenzzuordnung"
    ],
    "correct_indices": [
      1,
      2
    ]
  },
  {
    "question": "109. Welche Vorhaben würden sie als Projekte durchführen?",
    "options": [
      "Die Schalterzeiten in einer der Bankstellen sollen neu geregelt werden. Um mehr Gelegenheit für persönliche Beratung zu bieten, sollen die Zeiten bis Ende des kommenden Monats um 20 % reduziert werden. Der Mittwochnachmittag wird besonders schlecht angenommen.",
      "Der Kundenbereich einer der Bankstellen wurde seit vielen Jahren nicht adaptiert und soll nun modernisiert werden. Erste Gespräche der GL mit Funktionär:innen, benachbarten Banken und Kund:innen legen viele unterschiedliche Stoßrichtungen offen.",
      "Die externe Revision hat sich angekündigt. Der Geschäftsleitung ist es besonders wichtig, dass in diesem Jahr alles glatt läuft. Es verbleiben noch wenige Wochen, um die notwendigen Vorbereitungen zu treffen.",
      "Die neue Geschäftsleiterin regt an die Kundensegmentierung der Bank zu überdenken. Ein Expert:innenteam soll in den kommenden Monaten die Ausgangslage analysieren und ein Zielszenario entwickeln."
    ],
    "correct_indices": [
      1,
      3
    ]
  },
  {
    "question": "110. Welche der folgenden Aussagen zum Thema Projektmanagement treffen zu?",
    "options": [
      "In der Phase der Projektplanung sollten möglichst Ressourcen eingespart werden, um diese danach für die Durchführungsphase zur Verfügung zu haben.",
      "Die Meetingagenda für Abstimmungen mit der Projektleitung ist immer flexibel zu gestalten, um auf neue Entwicklungen eingehen zu können.",
      "Für jedes Projekt muss es definierte Ziel(e) geben, das/die schriftlich festgehalten werden.",
      "Die Zieldefinition obliegt alleine dem:r Projektautraggeber:in"
    ],
    "correct_indices": [
      2
    ]
  },
  {
    "question": "111. Zentrale Aufgabe des Vertriebsmanagement ist die Balance zwischen",
    "options": [
      "Kundenorientierung",
      "Kostendeckung",
      "Produktivität",
      "Planung Ziele"
    ],
    "correct_indices": [
      0,
      2
    ]
  },
  {
    "question": "113. Aus welchen wesentlichen Bestandteilen besteht die Vertriebssteuerung?",
    "options": [
      "Ressourcensteuerung",
      "Aktivitätensteuerung",
      "Kostenplanung",
      "Erfolgsbilanz"
    ],
    "correct_indices": [
      0,
      1
    ]
  },
  {
    "question": "114. Die Kundensegmentierung ist ein essenzieller Teil des Geschäftsmodells sie gibt Orientierung zu",
    "options": [
      "Einteilung nach Altersklassen",
      "Einteilung nach Branchen und Einkommensstruktur",
      "Einteilung der Kunden in Teilsegemente",
      "Einteilung nach Bedürfnissen in der Vertriebssteuerung"
    ],
    "correct_indices": [
      2,
      3
    ]
  }
];

class MultipleChoiceQuiz {
    constructor() {
        this.questions = QUIZ_QUESTIONS; // Verwende die eingebetteten Fragen
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.totalQuestions = 0;
        this.selectedAnswers = [];
        this.score = 0;
        
        this.initializeEventListeners();
        console.log(`${this.questions.length} Fragen geladen`);
    }

    initializeEventListeners() {
        // Start Quiz Button
        document.getElementById('start-quiz-btn').addEventListener('click', () => {
            this.startQuiz();
        });

        // Submit Answer Button
        document.getElementById('submit-answer-btn').addEventListener('click', () => {
            this.submitAnswer();
        });

        // Next Question Button
        document.getElementById('next-question-btn').addEventListener('click', () => {
            this.nextQuestion();
        });

        // Restart Quiz Button
        document.getElementById('restart-quiz-btn').addEventListener('click', () => {
            this.restartQuiz();
        });
    }

    startQuiz() {
        const questionCount = parseInt(document.getElementById('question-count').value);
        
        if (questionCount < 1 || questionCount > this.questions.length) {
            alert(`Bitte wählen Sie eine Zahl zwischen 1 und ${this.questions.length}`);
            return;
        }

        this.totalQuestions = questionCount;
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.score = 0;

        // Fragen zufällig auswählen
        this.selectedQuestions = this.shuffleArray([...this.questions]).slice(0, questionCount);

        document.getElementById('total-questions').textContent = questionCount;
        this.showScreen('quiz-screen');
        this.displayQuestion();
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    displayQuestion() {
        const question = this.selectedQuestions[this.currentQuestionIndex];
        
        // Update progress
        const progress = ((this.currentQuestionIndex + 1) / this.totalQuestions) * 100;
        document.getElementById('progress').style.width = `${progress}%`;
        document.getElementById('current-question').textContent = this.currentQuestionIndex + 1;

        // Display question
        document.getElementById('question-text').textContent = question.question;

        // Prepare options with shuffling
        const optionsWithIndices = question.options.map((option, index) => ({
            text: option,
            originalIndex: index
        }));

        // Shuffle the options randomly
        const shuffledOptions = this.shuffleArray([...optionsWithIndices]);

        // Create mapping from shuffled position to original index
        this.currentQuestionMapping = {};
        shuffledOptions.forEach((option, shuffledIndex) => {
            this.currentQuestionMapping[shuffledIndex] = option.originalIndex;
        });

        // Display shuffled options
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';

        shuffledOptions.forEach((option, index) => {
            const optionElement = document.createElement('label');
            optionElement.className = 'option';
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.name = 'option';
            checkbox.value = index; // This is now the shuffled index
            checkbox.addEventListener('change', () => this.updateSubmitButton());

            optionElement.appendChild(checkbox);
            optionElement.appendChild(document.createTextNode(option.text));
            optionsContainer.appendChild(optionElement);
        });

        // Reset UI state
        document.getElementById('submit-answer-btn').disabled = true;
        document.getElementById('answer-feedback').classList.add('hidden');
        this.selectedAnswers = [];
    }

    updateSubmitButton() {
        const checkboxes = document.querySelectorAll('input[name="option"]:checked');
        document.getElementById('submit-answer-btn').disabled = checkboxes.length === 0;
    }

    submitAnswer() {
        const checkboxes = document.querySelectorAll('input[name="option"]:checked');
        const shuffledSelectedAnswers = Array.from(checkboxes).map(cb => parseInt(cb.value));
        
        // Convert shuffled indices back to original indices
        this.selectedAnswers = shuffledSelectedAnswers.map(shuffledIndex => 
            this.currentQuestionMapping[shuffledIndex]
        );

        const question = this.selectedQuestions[this.currentQuestionIndex];
        const correctAnswers = question.correct_indices;

        // Check if answer is correct
        const isCorrect = this.arraysEqual(
            this.selectedAnswers.sort(),
            correctAnswers.sort()
        );

        if (isCorrect) {
            this.score++;
        }

        // Store user answer
        this.userAnswers.push({
            question: question,
            userAnswers: [...this.selectedAnswers],
            correctAnswers: [...correctAnswers],
            isCorrect: isCorrect,
            shuffledMapping: {...this.currentQuestionMapping}
        });

        this.showAnswerFeedback(isCorrect, correctAnswers, shuffledSelectedAnswers);
    }

    arraysEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) return false;
        return arr1.every((val, index) => val === arr2[index]);
    }

    showAnswerFeedback(isCorrect, correctAnswers, shuffledSelectedAnswers) {
        // Disable all options and show correct/incorrect styling
        const options = document.querySelectorAll('.option');
        const checkboxes = document.querySelectorAll('input[name="option"]');
        
        checkboxes.forEach(checkbox => {
            checkbox.disabled = true;
            const shuffledIndex = parseInt(checkbox.value);
            const originalIndex = this.currentQuestionMapping[shuffledIndex];
            const optionElement = checkbox.parentElement;
            
            if (correctAnswers.includes(originalIndex)) {
                optionElement.classList.add('correct');
            } else if (shuffledSelectedAnswers.includes(shuffledIndex)) {
                optionElement.classList.add('incorrect');
            }
            
            optionElement.classList.add('disabled');
        });

        // Show feedback
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
