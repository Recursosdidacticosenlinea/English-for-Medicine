window.UNIT = {
  slug: "code-red-in-the-er",
  title: "Code Red in the ER",
  level: "B1",
  minutes: 60,
  subject: "Emergency Medicine",
  focus: ["past continuous", "past continuous vs. past simple: when / while", "emergency vocabulary and the ABCDE approach", "reporting an incident"],
  speakers: { "Paramedic": "m", "Dr. Ruiz": "f", "Iris": "f", "Witness": "f", "Óscar": "m" },

  presentation: {
    scene: "🚑🚨🩻⏱️",
    situation: "It's Saturday night in the **Emergency Room**. Iris, an intern doing her rotation (IRP), receives a patient from the ambulance.",
    warmup: {
      prompt: "What are common emergencies on a Saturday night? Choose all that you think.",
      options: ["car accidents", "falls", "heart attacks", "alcohol intoxication", "fights / wounds", "asthma attacks", "allergic reactions", "burns", "a cold", "seizures"],
      response: "Busy night! In this unit you'll report what happened in an emergency."
    },
    dialogueTitle: "Ambulance arrival",
    dialogue: [
      { who: "Paramedic", line: "Male, 24 years old. He *was riding* his motorcycle when a car *hit* him." },
      { who: "Iris", line: "*Was* he *wearing* a helmet?" },
      { who: "Paramedic", line: "Yes, he was. He *was talking* when we *arrived*, but he *lost* consciousness for a minute in the ambulance." },
      { who: "Iris", line: "OK. What *were* his vital signs?" },
      { who: "Paramedic", line: "*While* we *were driving* here, his blood pressure *dropped* to 90 over 60. Heart rate 120." },
      { who: "Dr. Ruiz", line: "Let's start the ABCDE. Iris, check the airway. Óscar, get two IV lines in." }
    ]
  },

  objectives: [
    "I can use the past continuous to describe background actions.",
    "I can combine the past continuous and past simple with *when* and *while*.",
    "I can use emergency vocabulary and the ABCDE approach.",
    "I can report an incident orally and in writing."
  ],

  explanation: {
    vocabTitle: "Emergency vocabulary",
    vocab: [
      { word: "ambulance", icon: "🚑" }, { word: "paramedic", icon: "🧑‍⚕️" }, { word: "triage", icon: "🏷️" },
      { word: "unconscious", icon: "😶" }, { word: "bleeding", icon: "🩸" }, { word: "wound", icon: "🩹" },
      { word: "fracture", icon: "🦴" }, { word: "burn", icon: "🔥" }, { word: "seizure", icon: "⚡" },
      { word: "airway", icon: "🌬️" }, { word: "breathing", icon: "🫁" }, { word: "circulation", icon: "🫀" },
      { word: "CPR", icon: "🙌" }, { word: "defibrillator", icon: "⚡" }, { word: "stretcher", icon: "🛏️" }
    ],
    grammar: [
      {
        title: "Past continuous: was / were + -ing",
        head: ["", "Example"],
        rows: [
          ["Affirmative", "He *was driving* home. They *were playing* football."],
          ["Negative", "She *wasn't wearing* a seatbelt. They *weren't breathing* normally."],
          ["Question", "What *were* you *doing* at 10 p.m.? *Was* he *bleeding*?"]
        ],
        note: "Use the past continuous for an action **in progress** at a moment in the past, or as the **background** of a story."
      },
      {
        title: "Past continuous + past simple",
        head: ["Pattern", "Example"],
        rows: [
          ["long action + *when* + short action", "He *was crossing* the street *when* a bus *hit* him."],
          ["*while* + long action, short action", "*While* she *was cooking*, she *burned* her hand."],
          ["two long actions (*while*)", "*While* the nurse *was preparing* the drugs, the doctor *was intubating*."],
          ["sequence (only past simple)", "He *fell*, *hit* his head and *lost* consciousness."]
        ],
        note: "*When* usually goes with the short action (past simple); *while* usually goes with the long action (past continuous)."
      },
      {
        title: "ABCDE approach",
        head: ["Letter", "Check"],
        rows: [
          ["*A* – Airway", "Is the airway open? Can the patient talk?"],
          ["*B* – Breathing", "Respiratory rate, oxygen saturation, chest movement."],
          ["*C* – Circulation", "Pulse, blood pressure, bleeding, capillary refill."],
          ["*D* – Disability", "Level of consciousness, pupils, glucose."],
          ["*E* – Exposure", "Remove clothes, look for injuries, keep warm."]
        ]
      }
    ],
    watchOut: [
      ["He was fall from the ladder.", "He fell from the ladder."],
      ["When I was arriving, he was unconscious.", "When I arrived, he was unconscious."],
      ["She cooking when she burned her hand.", "She was cooking when she burned her hand."],
      ["They was waiting for the ambulance.", "They were waiting for the ambulance."],
      ["While he crossed the street, a car was hitting him.", "While he was crossing the street, a car hit him."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Past continuous or past simple?",
      items: [
        "She [[was running|was jogging]] (run) in the park when she fell.",
        "While they [[were playing]] (play) football, he broke his ankle.",
        "The patient [[stopped]] (stop) breathing while we were taking his blood pressure.",
        "What [[were]] you doing when the pain started?"
      ]
    }
  },

  skills: {
    listening: {
      intro: "A witness tells an emergency doctor what happened. Listen and answer.",
      title: "What happened?",
      script: [
        { who: "Dr. Ruiz", line: "You were with the patient, right? Can you tell me what happened?" },
        { who: "Witness", line: "Yes. We were having dinner at a restaurant. My husband was eating shrimp and he was laughing with our friends." },
        { who: "Witness", line: "Suddenly he started to cough and he said his throat was itching. His lips were swelling, and he was having difficulty breathing." },
        { who: "Dr. Ruiz", line: "Does he have any allergies?" },
        { who: "Witness", line: "He's allergic to some seafood, but he didn't know there was shrimp in the sauce." },
        { who: "Dr. Ruiz", line: "Did anybody give him any medicine?" },
        { who: "Witness", line: "Yes. While we were waiting for the ambulance, a woman at the next table gave him an injection with her own epinephrine pen. She was a nurse." },
        { who: "Dr. Ruiz", line: "That probably saved his life. Thank you. We're going to give him more treatment now." }
      ],
      activities: [
        {
          type: "match", title: "Background and events",
          prompt: "Match the background action with what happened.",
          pairs: [
            ["They were having dinner", "when he started to cough."],
            ["He was eating shrimp", "but he didn't know about the sauce."],
            ["His lips were swelling", "and he couldn't breathe well."],
            ["While they were waiting for the ambulance,", "a nurse gave him an injection."],
            ["The epinephrine pen", "probably saved his life."]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. Are the sentences true or false?",
          items: [
            { s: "The couple was eating at home.", a: false },
            { s: "The patient was laughing before the reaction.", a: true },
            { s: "He knew there was shrimp in the sauce.", a: false },
            { s: "A doctor at the next table helped him.", a: false },
            { s: "The diagnosis is probably anaphylaxis (a severe allergic reaction).", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read this incident report from the Emergency Department.",
      title: "Incident report: cardiac arrest in the waiting room",
      text: [
        { author: "Date and place", body: "Saturday, 23:40. Emergency Department waiting room." },
        { author: "Description", body: "A 56-year-old man **was waiting** for triage with his daughter. While he **was filling in** the registration form, he **complained** of chest pain and **collapsed** on the floor. He **wasn't breathing** and had no pulse." },
        { author: "Actions", body: "The security guard **called** the resuscitation team. While the intern **was starting** chest compressions, a nurse **brought** the defibrillator. The monitor **showed** ventricular fibrillation. The patient **received** two shocks and, after four minutes of CPR, he **recovered** a pulse." },
        { author: "Outcome", body: "He **was transferred** to the cardiology unit at 00:15. He was conscious and stable." },
        { author: "Recommendation", body: "Patients with chest pain must be triaged within 10 minutes of arrival. The waiting time that night was too long because two ambulances were arriving at the same time." }
      ],
      activities: [
        {
          type: "sort", title: "Background or event?",
          prompt: "Sort the actions from the report.",
          bins: ["Background (past continuous)", "Event (past simple)"],
          items: [
            { text: "was waiting for triage", bin: 0 }, { text: "was filling in the form", bin: 0 }, { text: "was starting compressions", bin: 0 },
            { text: "collapsed on the floor", bin: 1 }, { text: "brought the defibrillator", bin: 1 }, { text: "recovered a pulse", bin: 1 }
          ]
        },
        {
          type: "rewrite", title: "Combine the sentences",
          prompt: "Join the two sentences with the word in brackets.",
          items: [
            { q: "He was filling in the form. He collapsed. (when)", a: ["He was filling in the form when he collapsed."] },
            { q: "The intern was starting CPR. A nurse brought the defibrillator. (while)", a: ["While the intern was starting CPR, a nurse brought the defibrillator.", "A nurse brought the defibrillator while the intern was starting CPR."] },
            { q: "Two ambulances were arriving. The man was waiting. (while)", a: ["While two ambulances were arriving, the man was waiting.", "The man was waiting while two ambulances were arriving."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the structures first, then write an incident report.",
      activities: [
        {
          type: "tiles", title: "Build the sentences",
          items: [
            { a: "He was riding his bike when a car hit him." },
            { a: "While she was cooking, she burned her hand." },
            { a: "What were you doing when the pain started?" },
            { a: "The patient wasn't breathing when we arrived." },
            { a: "They were waiting for the ambulance." }
          ]
        },
        {
          type: "gap", title: "The paramedic's notes",
          prompt: "Complete with the past continuous or the past simple.",
          items: [
            "The patient [[was working|was painting]] (work) on a ladder when he [[fell]] (fall).",
            "When we [[arrived]] (arrive), he was lying on the floor.",
            "He [[was bleeding]] (bleed) from a wound on his head.",
            "While we [[were putting|were placing]] (put) on the cervical collar, he [[opened]] (open) his eyes.",
            "His wife [[called]] (call) 911 at 3:15 p.m."
          ]
        },
        {
          type: "write", title: "Incident report",
          prompt: "Write an incident report about an emergency (invented): a sports injury, a burn, a fall, an asthma attack or a seizure. Say where and when it happened, what the person was doing, what happened, what people did (first aid, ABCDE) and the outcome.",
          minWords: 100, maxWords: 160,
          model: "Incident report. Date: 12 March, 18:30, university sports field. A 20-year-old student was playing basketball with his friends when he suddenly fell to the floor and started to shake. The seizure lasted about two minutes. While he was shaking, his friends moved the chairs away and put a jacket under his head. Nobody put anything in his mouth. When the seizure stopped, a medical student checked his airway and breathing and put him in the recovery position. The ambulance arrived at 18:45. While the paramedics were checking his glucose, he woke up. He was confused but stable. He was transferred to the hospital for evaluation.",
          bank: ["Date / time / place:", "… was …-ing when…", "While … was …-ing,…", "When the ambulance arrived,…", "checked the airway / breathing", "Outcome:", "He / She was transferred to…"],
          checklist: [
            "I included **date, time and place**.",
            "I used the **past continuous** for background actions.",
            "I used **when** and **while** correctly.",
            "I described the **actions** and the **outcome**."
          ]
        }
      ]
    },

    speaking: {
      intro: "Practice with a partner, or play both roles yourself. Then record your evidence.",
      activities: [
        {
          type: "voice", title: "Talk to the computer: Paramedic handover",
          prompt: "Practice the conversation with the computer. Choose a role: the computer reads the other part, and you say your lines. Then change roles. Your words are checked with voice recognition.",
          cards: [
            { name: "Student A · Paramedic", tasks: ["Give age and sex.", "Say what the patient was doing when it happened.", "Report vital signs and treatment on the way.", "Say what changed while you were driving."] },
            { name: "Student B · ER doctor", tasks: ["Ask *What happened?*", "Ask *What was he / she doing when…?*", "Ask about consciousness.", "Give ABCDE instructions to the team."] }
          ],
          language: ["This is a …-year-old…", "He / She was …-ing when…", "While we were…,…", "Vital signs:…", "What was he doing when…?", "Check the airway.", "Get IV access."],
          model: [
            { who: "A", line: "This is a 35-year-old woman. She was running in the park when she felt chest tightness." },
            { who: "B", line: "Was she conscious when you arrived?" },
            { who: "A", line: "Yes, she was. But while we were driving here, her saturation dropped to 88%." },
            { who: "B", line: "Does she have a history of asthma?" },
            { who: "A", line: "Yes. She used her inhaler twice, but it didn't help." },
            { who: "B", line: "OK. Oxygen now, and let's start a nebulizer. Check her breathing." }
          ],
          seconds: 150,
          checklist: ["use past continuous for background?", "use *when / while* correctly?", "report vital signs?", "use the ABCDE approach?"]
        },
        {
          type: "speak", title: "The night I remember",
          prompt: "Record a 90-second story about a real or invented emergency (as a witness, patient or student). What were people doing? What happened? How did it end?",
          language: ["It was a … night.", "I was …-ing when…", "While … was …-ing,…", "Suddenly,…", "Fortunately / Unfortunately,…", "In the end,…"],
          seconds: 90,
          checklist: ["set the scene with the past continuous?", "use the past simple for events?", "use *suddenly, while, when*?", "tell the story in a clear order?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can form the past continuous.", review: "Explanation: Past continuous" },
    { can: "I can combine the past continuous and past simple with *when / while*.", review: "Explanation: Past continuous + past simple; Reading activity 2" },
    { can: "I can explain the ABCDE approach.", review: "Explanation: ABCDE approach" },
    { can: "I can understand a witness describing an emergency.", review: "Listening activities 1 and 2" },
    { can: "I can write a clear incident report.", review: "Reading; Writing activity 3" },
    { can: "I can give a paramedic handover.", review: "Speaking activity 1" }
  ]
};
