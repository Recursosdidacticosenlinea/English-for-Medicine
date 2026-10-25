window.UNIT = {
  slug: "on-the-ward",
  title: "On the Ward",
  level: "A2",
  minutes: 55,
  subject: "Clinical Practice I",
  focus: ["present continuous for what is happening now", "present continuous vs. present simple", "vital signs and hospital vocabulary", "state verbs: feel, need, want"],
  speakers: { "Nurse Ana": "f", "Javier": "m", "Dr. Ruiz": "f", "Mr. Herrera": "m" },

  presentation: {
    scene: "🏥🛏️🩺📈",
    situation: "It's the first week of **Clinical Practice I**. Javier, a medical student, arrives at the internal medicine ward. Nurse Ana explains what is happening with the patients.",
    warmup: {
      prompt: "Who works in a hospital ward? Choose all that you know in English.",
      options: ["doctor", "nurse", "intern", "resident", "patient", "pharmacist", "orderly", "social worker", "pilot", "cleaner", "nutritionist", "physiotherapist"],
      response: "Great! In this unit you'll describe what is happening on the ward right now."
    },
    dialogueTitle: "The morning round",
    dialogue: [
      { who: "Nurse Ana", line: "Good morning, Javier. It's busy today. Dr. Ruiz *is examining* the patient in bed 4." },
      { who: "Javier", line: "And what *is* the patient in bed 2 *doing*?" },
      { who: "Nurse Ana", line: "He *'s sleeping*. He *usually wakes up* at nine. He *'s receiving* IV fluids." },
      { who: "Javier", line: "How *is* he *feeling*?" },
      { who: "Nurse Ana", line: "Better. His temperature *is going down*, but he *needs* more rest." },
      { who: "Javier", line: "Who *'s* that woman in bed 6?" },
      { who: "Nurse Ana", line: "That's Mrs. Díaz. She *'s waiting* for an X-ray. *Can* you take her blood pressure, please?" }
    ]
  },

  objectives: [
    "I can describe what is happening on a ward with the present continuous.",
    "I can contrast routines (present simple) and actions now (present continuous).",
    "I can name and report vital signs.",
    "I can give a short handover report about a patient."
  ],

  explanation: {
    vocabTitle: "On the ward",
    vocab: [
      { word: "ward", icon: "🏥" }, { word: "bed", icon: "🛏️" }, { word: "round", icon: "🔄" },
      { word: "handover", icon: "🤝" }, { word: "IV drip", icon: "💧" }, { word: "stretcher", icon: "🛌" },
      { word: "wheelchair", icon: "🦽" }, { word: "blood pressure", icon: "🩺" }, { word: "heart rate / pulse", icon: "💓" },
      { word: "temperature", icon: "🌡️" }, { word: "respiratory rate", icon: "🫁" }, { word: "oxygen saturation", icon: "📟" },
      { word: "chart", icon: "📋" }, { word: "discharge", icon: "🚪" }, { word: "admit", icon: "📥" }
    ],
    grammar: [
      {
        title: "Present continuous",
        head: ["", "Example"],
        rows: [
          ["Affirmative", "The doctor *is examining* the patient. They *'re taking* a blood sample."],
          ["Negative", "He *isn't eating* well. They *aren't sleeping*."],
          ["Question", "*Is* she *breathing* normally? — Yes, she *is*. / No, she *isn't*."],
          ["Wh- question", "What *is* the nurse *doing*? Why *is* he *crying*?"]
        ],
        note: "Spelling: *take → taking, run → running, lie → lying*."
      },
      {
        title: "Present simple vs. present continuous",
        head: ["Present simple (routine / always)", "Present continuous (now / temporary)"],
        rows: [
          ["The nurses *check* vital signs every four hours.", "Nurse Ana *is checking* the blood pressure now."],
          ["Mr. Herrera *usually walks* in the morning.", "Today he *is staying* in bed."],
          ["She *takes* metformin every day.", "This week she *is receiving* insulin."]
        ],
        note: "Time words: simple → *always, usually, every day*; continuous → *now, right now, at the moment, today, this week*."
      },
      {
        title: "State verbs",
        head: ["Verbs", "Example"],
        rows: [
          ["*need, want, like, know, understand, have (possession)*", "He *needs* oxygen. (not *is needing*)"],
          ["*feel* (both OK)", "*How do you feel?* / *How are you feeling?*"]
        ]
      }
    ],
    watchOut: [
      ["The doctor examining the patient.", "The doctor is examining the patient."],
      ["He is needing oxygen.", "He needs oxygen."],
      ["Nurses are checking vital signs every four hours.", "Nurses check vital signs every four hours."],
      ["She is lieing in bed.", "She is lying in bed."],
      ["What do you do now? (action at this moment)", "What are you doing now?"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Present simple or present continuous?",
      items: [
        "Look! The patient [[is vomiting|'s vomiting]] (vomit). Call the nurse!",
        "The doctors [[visit]] (visit) the ward every morning.",
        "Right now, the resident [[is writing|'s writing]] (write) the notes.",
        "He [[needs]] (need) a wheelchair."
      ]
    }
  },

  skills: {
    listening: {
      intro: "A nurse gives a handover report at the end of her shift. Listen and complete the information.",
      title: "Evening handover",
      script: [
        { who: "Nurse Ana", line: "OK, handover for beds 1 to 3." },
        { who: "Nurse Ana", line: "Bed 1: Mr. Herrera, 68, pneumonia. He's improving. His temperature is 37.2 and his oxygen saturation is 95%. He's receiving antibiotics every eight hours." },
        { who: "Nurse Ana", line: "Bed 2: Mrs. Díaz, 45, gallstones. She's waiting for surgery tomorrow morning, so she isn't eating anything after midnight." },
        { who: "Nurse Ana", line: "Bed 3: Mr. Luna, 52, diabetes. His blood sugar is high today: 280. Dr. Ruiz is changing his insulin dose right now." },
        { who: "Nurse Ana", line: "Normally he walks in the corridor in the afternoon, but today he's feeling dizzy, so he's staying in bed." },
        { who: "Dr. Ruiz", line: "Thanks, Ana. I'll check Mr. Luna in one hour." }
      ],
      activities: [
        {
          type: "match", title: "Who is it?",
          prompt: "Match each patient with the information.",
          pairs: [
            ["Mr. Herrera", "is receiving antibiotics for pneumonia"],
            ["Mrs. Díaz", "is waiting for surgery"],
            ["Mr. Luna", "has high blood sugar"],
            ["Dr. Ruiz", "is changing an insulin dose"],
            ["Saturation of bed 1", "95%"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. Are the sentences true or false?",
          items: [
            { s: "Mr. Herrera is getting worse.", a: false },
            { s: "Mrs. Díaz is having surgery today.", a: false },
            { s: "Mrs. Díaz can't eat after midnight.", a: true },
            { s: "Mr. Luna usually walks in the afternoon.", a: true },
            { s: "Mr. Luna is walking in the corridor now.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read Javier's message to his group after his first day on the ward.",
      title: "My first day on the ward",
      text: [
        { author: "Javier", body: "Hi, everyone! I'm writing from the hospital cafeteria. It's my first week of clinical practice and I'm **learning** a lot." },
        { author: "Javier", body: "Every day, the team **starts** the round at 7:30. The residents **present** the patients and the attending doctor **asks** a lot of questions. I usually **take** vital signs and **write** them on the charts." },
        { author: "Javier", body: "This week I**'m following** Dr. Ruiz. She **knows** every patient's name! Right now she**'s talking** to a family about a discharge." },
        { author: "Javier", body: "It's difficult, but I **like** it. My feet hurt and I **need** better shoes. 😅 See you on Friday!" }
      ],
      activities: [
        {
          type: "sort", title: "Routine or now?",
          prompt: "Sort the actions from the message.",
          bins: ["Routine (present simple)", "Now / temporary (present continuous)"],
          items: [
            { text: "starts the round at 7:30", bin: 0 }, { text: "usually take vital signs", bin: 0 }, { text: "asks a lot of questions", bin: 0 },
            { text: "I'm writing from the cafeteria", bin: 1 }, { text: "I'm following Dr. Ruiz this week", bin: 1 }, { text: "she's talking to a family", bin: 1 }
          ]
        },
        {
          type: "rewrite", title: "Ask Javier",
          prompt: "Write the question.",
          items: [
            { q: "He's writing from the cafeteria. → Where…?", a: ["Where is he writing from?", "Where's he writing from?", "Where are you writing from?"] },
            { q: "The round starts at 7:30. → What time…?", a: ["What time does the round start?"] },
            { q: "Dr. Ruiz is talking to a family. → Who…?", a: ["Who is Dr. Ruiz talking to?", "Who's Dr. Ruiz talking to?"] },
            { q: "He usually takes vital signs. → What… usually…?", a: ["What does he usually do?", "What do you usually do?"] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the structures first, then write a handover note.",
      activities: [
        {
          type: "tiles", title: "Build the sentences",
          items: [
            { a: "The nurse is taking his blood pressure." },
            { a: "She is waiting for an X-ray." },
            { a: "The doctors visit the ward every morning." },
            { a: "He needs more rest." },
            { a: "What is the resident doing?" }
          ]
        },
        {
          type: "gap", title: "Vital signs report",
          prompt: "Complete the report with the correct form.",
          items: [
            "Mrs. Díaz [[is resting|'s resting]] (rest) in bed 6 at the moment.",
            "Her blood pressure [[is]] (be) 120 over 80.",
            "She usually [[sleeps]] (sleep) well, but tonight she can't sleep.",
            "She [[wants]] (want) to talk to her family.",
            "The intern [[is calling|'s calling]] (call) her daughter now."
          ]
        },
        {
          type: "write", title: "Write a handover note",
          prompt: "Write a handover note about two patients (invented). For each one say: name, age, problem, vital signs, what is happening now, and what they need.",
          minWords: 70, maxWords: 120,
          model: "Handover, 7 p.m. Bed 4: Mrs. Ortiz, 75, heart failure. She is breathing better today. BP 130/85, HR 88, saturation 94%. She is receiving diuretics and she isn't eating much. She needs help to walk. Bed 5: Mr. Silva, 30, broken leg. He is waiting for surgery tomorrow. He is in pain: 6/10. He usually takes his painkiller at night, so he needs the next dose at 10 p.m.",
          bank: ["Bed …: Mr. / Mrs. …, (age), (problem).", "BP … / HR … / Sat …%", "He / She is receiving…", "He / She is waiting for…", "He / She needs…", "He / She usually…"],
          checklist: [
            "I described **two** patients.",
            "I used the **present continuous** for now.",
            "I used the **present simple** for routines and state verbs.",
            "I included **vital signs**."
          ]
        }
      ]
    },

    speaking: {
      intro: "Practice with a partner, or play both roles yourself. Then record your evidence.",
      activities: [
        {
          type: "voice", title: "Talk to the computer: Phone call from the ward",
          prompt: "Practice the conversation with the computer. Choose a role: the computer reads the other part, and you say your lines. Then change roles. Your words are checked with voice recognition.",
          cards: [
            { name: "Student A · Intern", tasks: ["Answer the phone and identify yourself.", "Say what is happening with the patient now.", "Report the vital signs.", "Say what the patient needs."] },
            { name: "Student B · Doctor on call", tasks: ["Ask *How is the patient in bed … doing?*", "Ask about vital signs.", "Ask *Is he / she eating / sleeping?*", "Give an instruction."] }
          ],
          language: ["Hello, this is … from the ward.", "How is … doing?", "He's / She's… right now.", "His blood pressure is…", "He needs…", "OK, please give him…"],
          model: [
            { who: "B", line: "Hi, it's Dr. Ruiz. How is the patient in bed 3 doing?" },
            { who: "A", line: "He's feeling dizzy, doctor. He's lying in bed now." },
            { who: "B", line: "What's his blood sugar?" },
            { who: "A", line: "It's 280. He isn't eating much today." },
            { who: "B", line: "OK. Check it again in one hour and call me." }
          ],
          seconds: 120,
          checklist: ["use present continuous for now?", "report vital signs?", "use state verbs correctly?", "ask and answer clearly?"]
        },
        {
          type: "speak", title: "What's happening?",
          prompt: "Find a photo of a hospital ward or emergency room. Record a one-minute description of what the people are doing.",
          language: ["In this picture…", "On the left / right,…", "A nurse is…", "The patient is…", "I think they're…", "It looks…"],
          seconds: 60,
          checklist: ["describe at least five actions?", "use the present continuous?", "use hospital vocabulary?", "use positions (left, right…)?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can describe actions happening now with the present continuous.", review: "Explanation: Present continuous; Speaking activity 2" },
    { can: "I can choose between the present simple and the present continuous.", review: "Explanation: Present simple vs. continuous; Reading activity 1" },
    { can: "I can use state verbs correctly.", review: "Explanation: State verbs" },
    { can: "I can name and report vital signs.", review: "Explanation: vocabulary; Writing activity 2" },
    { can: "I can understand a nurse's handover report.", review: "Listening activities 1 and 2" },
    { can: "I can write a short handover note.", review: "Writing activity 3" }
  ]
};
