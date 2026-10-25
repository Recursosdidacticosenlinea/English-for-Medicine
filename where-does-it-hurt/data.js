window.UNIT = {
  slug: "where-does-it-hurt",
  title: "Where Does It Hurt?",
  level: "A2",
  minutes: 55,
  subject: "Clinical Propaedeutics",
  focus: ["past simple: regular and irregular", "questions for the clinical history", "symptoms and pain descriptions", "ago, for, last…"],
  speakers: { "Dr. Pérez": "m", "Mrs. García": "f", "Student": "m", "Mr. Torres": "m", "Renata": "f" },

  presentation: {
    scene: "🩺🤒📋🗣️",
    situation: "In **Clinical Propaedeutics**, students learn to take a clinical history. Today a patient comes to the clinic with a pain. The student must ask the right questions.",
    warmup: {
      prompt: "Which questions does a doctor ask in a first consultation? Choose all you think are important.",
      options: ["What's your name?", "What's the problem?", "When did it start?", "Where does it hurt?", "What's your favorite color?", "Do you take any medicine?", "Are you allergic to anything?", "Do you smoke?", "How much money do you have?", "Did you have surgery before?"],
      response: "Good choices! In this unit you'll practice the questions for a clinical history in English."
    },
    dialogueTitle: "In the consulting room",
    dialogue: [
      { who: "Dr. Pérez", line: "Good morning, Mrs. García. What *brought* you here today?" },
      { who: "Mrs. García", line: "I *had* a terrible headache yesterday, doctor." },
      { who: "Dr. Pérez", line: "I'm sorry. When *did* it *start*?" },
      { who: "Mrs. García", line: "It *started* three days *ago*, in the morning." },
      { who: "Dr. Pérez", line: "Where *does* it *hurt* exactly?" },
      { who: "Mrs. García", line: "Here, on the right side. I also *felt* sick and I *didn't sleep* well." },
      { who: "Dr. Pérez", line: "*Did* you *take* any medicine?" },
      { who: "Mrs. García", line: "Yes, I *took* paracetamol, but it *didn't help*." }
    ]
  },

  objectives: [
    "I can name common symptoms and describe pain.",
    "I can use the past simple to talk about the start and history of a problem.",
    "I can ask the main questions of a clinical history.",
    "I can take notes and write a short summary of a consultation."
  ],

  explanation: {
    vocabTitle: "Symptoms and pain",
    vocab: [
      { word: "headache", icon: "🤕" }, { word: "stomachache", icon: "🤢" }, { word: "sore throat", icon: "🗣️" },
      { word: "fever", icon: "🤒" }, { word: "cough", icon: "😷" }, { word: "dizzy", icon: "😵‍💫" },
      { word: "feel sick (nausea)", icon: "🤮" }, { word: "vomit", icon: "🪣" }, { word: "rash", icon: "🔴" },
      { word: "swollen", icon: "🎈" }, { word: "sharp pain", icon: "🔪" }, { word: "dull pain", icon: "🔨" },
      { word: "burning pain", icon: "🔥" }, { word: "allergy", icon: "🌼" }, { word: "short of breath", icon: "💨" }
    ],
    grammar: [
      {
        title: "Past simple",
        head: ["", "Example"],
        rows: [
          ["Affirmative (regular)", "The pain *started* on Monday. I *vomited* twice."],
          ["Affirmative (irregular)", "I *had* a fever. I *felt* dizzy. I *took* an aspirin."],
          ["Negative", "I *didn't sleep* well. The medicine *didn't help*."],
          ["Question", "*Did* you *take* anything? — Yes, I *did*. / No, I *didn't*."]
        ],
        note: "Useful irregular verbs: *have → had, feel → felt, take → took, go → went, eat → ate, begin → began, hurt → hurt*."
      },
      {
        title: "The clinical history: key questions",
        head: ["Topic", "Question"],
        rows: [
          ["Main complaint", "*What brought you here today?* / *What's the problem?*"],
          ["Onset", "*When did it start?* / *How did it start?*"],
          ["Location", "*Where does it hurt?* / *Does it go anywhere else?*"],
          ["Character", "*What is the pain like? Is it sharp or dull?*"],
          ["Severity", "*On a scale of 1 to 10, how bad is it?*"],
          ["History", "*Did you have this problem before? Do you take any medication? Are you allergic to anything?*"]
        ],
        note: "Past simple for the history (*When did it start?*), present simple for now (*Where does it hurt?*)."
      },
      {
        title: "Time expressions",
        head: ["Expression", "Example"],
        rows: [
          ["*… ago*", "It started *two days ago*."],
          ["*last …*", "I had a fever *last night* / *last week*."],
          ["*for …*", "The pain lasted *for three hours*."],
          ["*yesterday / on …*", "I vomited *yesterday* / *on Tuesday*."]
        ]
      }
    ],
    watchOut: [
      ["When it started?", "When did it start?"],
      ["Did you took any medicine?", "Did you take any medicine?"],
      ["It started before two days.", "It started two days ago."],
      ["I have a fever yesterday.", "I had a fever yesterday."],
      ["I feeled dizzy.", "I felt dizzy."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete the patient's answers in the past simple.",
      items: [
        "The pain [[started]] (start) last night.",
        "I [[felt]] (feel) dizzy in the morning.",
        "I [[didn't|did not]] (not / eat) anything yesterday.",
        "When [[did]] the fever start? — Two days [[ago]]."
      ]
    }
  },

  skills: {
    listening: {
      intro: "A medical student takes the history of a patient with abdominal pain. Listen and complete the notes.",
      title: "Abdominal pain",
      script: [
        { who: "Renata", line: "Good afternoon, Mr. Torres. I'm Renata, a medical student. What's the problem today?" },
        { who: "Mr. Torres", line: "I have a pain in my stomach. Well, here, on the lower right side." },
        { who: "Renata", line: "When did it start?" },
        { who: "Mr. Torres", line: "Yesterday afternoon. First it was around my belly button, and then it moved to the right." },
        { who: "Renata", line: "What is the pain like?" },
        { who: "Mr. Torres", line: "It's sharp. On a scale of 1 to 10, it's an 8. It's worse when I walk." },
        { who: "Renata", line: "Did you have a fever or vomit?" },
        { who: "Mr. Torres", line: "I vomited once last night, and I felt hot. I didn't eat anything today." },
        { who: "Renata", line: "Are you allergic to any medicine?" },
        { who: "Mr. Torres", line: "Yes, to penicillin." }
      ],
      activities: [
        {
          type: "match", title: "Complete the history",
          prompt: "Match each part of the history with the patient's information.",
          pairs: [
            ["Location", "lower right side of the abdomen"],
            ["Onset", "yesterday afternoon"],
            ["Character", "sharp, worse when he walks"],
            ["Severity", "8 out of 10"],
            ["Allergies", "penicillin"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. Are the sentences true or false?",
          items: [
            { s: "The pain started around the belly button.", a: true },
            { s: "The pain is dull.", a: false },
            { s: "He vomited three times.", a: false },
            { s: "He didn't eat anything today.", a: true },
            { s: "He doesn't have any allergies.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read the clinical notes that a student wrote after a consultation.",
      title: "Clinical history: patient 014",
      text: [
        { author: "Patient", body: "Female, 24 years old, university student." },
        { author: "Main complaint", body: "Sore throat and fever." },
        { author: "History of the present illness", body: "The symptoms **began** four days ago. First she had a sore throat, and the next day she **developed** a fever of 38.5 °C. She **felt** very tired and **didn't go** to class. She **took** ibuprofen twice a day, and the fever **went down** a little. She **didn't have** a cough." },
        { author: "Past history", body: "She had her appendix removed in 2019. No chronic diseases. She doesn't smoke. No allergies." },
        { author: "Examination", body: "Red throat, swollen glands in the neck. Temperature: 38.2 °C." }
      ],
      activities: [
        {
          type: "sort", title: "Past or present?",
          prompt: "Is the information about the history (past) or the examination today (present)?",
          bins: ["History (past)", "Examination today"],
          items: [
            { text: "began four days ago", bin: 0 }, { text: "took ibuprofen", bin: 0 }, { text: "had her appendix removed", bin: 0 },
            { text: "red throat", bin: 1 }, { text: "swollen glands", bin: 1 }, { text: "38.2 °C", bin: 1 }
          ]
        },
        {
          type: "rewrite", title: "Ask the patient",
          prompt: "Write the question the student asked for each answer.",
          items: [
            { q: "Four days ago. → When…?", a: ["When did the symptoms begin?", "When did it start?", "When did the symptoms start?", "When did it begin?"] },
            { q: "Yes, I took ibuprofen. → Did…?", a: ["Did you take any medicine?", "Did you take anything?", "Did you take any medication?"] },
            { q: "No, I didn't have a cough. → Did…?", a: ["Did you have a cough?"] },
            { q: "No, I'm not allergic to anything. → Are…?", a: ["Are you allergic to anything?", "Are you allergic to any medicine?"] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the questions first, then write a clinical note.",
      activities: [
        {
          type: "tiles", title: "History questions",
          items: [
            { a: "When did the pain start?" },
            { a: "Where does it hurt?" },
            { a: "Did you take any medicine?" },
            { a: "Are you allergic to anything?" },
            { a: "What is the pain like?" }
          ]
        },
        {
          type: "gap", title: "From the patient to the notes",
          prompt: "The patient said these things. Complete the notes in the past simple, third person.",
          items: [
            "\"I fell off my bike.\" → The patient [[fell]] off his bike.",
            "\"I hurt my wrist.\" → He [[hurt]] his wrist.",
            "\"I didn't lose consciousness.\" → He [[didn't|did not]] lose consciousness.",
            "\"I put ice on it.\" → He [[put]] ice on it.",
            "\"It became swollen.\" → It [[became]] swollen."
          ]
        },
        {
          type: "write", title: "Write a clinical note",
          prompt: "Invent a patient (or use a role-play with a classmate) and write a short history of the present illness: main complaint, when and how it started, characteristics, what the patient did, and allergies or medication.",
          minWords: 70, maxWords: 120,
          model: "Patient: Male, 30 years old, taxi driver. Main complaint: back pain. The pain started five days ago when he lifted a heavy box. It is a dull pain in the lower back, 6 out of 10. It is worse in the morning. He didn't have a fever. He took naproxen and put heat on his back, and the pain improved a little. He didn't have this problem before. He doesn't take any regular medication. No allergies.",
          bank: ["Patient:", "Main complaint:", "The pain started … ago when…", "It is a sharp / dull pain in…", "He / She took…", "He / She didn't…", "No allergies."],
          checklist: [
            "I included the **main complaint**.",
            "I said **when** it started with *ago* or *last*.",
            "I used at least **five** verbs in the past simple.",
            "I described the **pain** (where, what it's like, how bad)."
          ]
        }
      ]
    },

    speaking: {
      intro: "Practice with a partner, or play both roles yourself. Then record your evidence.",
      activities: [
        {
          type: "voice", title: "Talk to the computer: The first consultation",
          prompt: "Practice the conversation with the computer. Choose a role: the computer reads the other part, and you say your lines. Then change roles. Your words are checked with voice recognition.",
          cards: [
            { name: "Student A · Medical student", tasks: ["Greet and introduce yourself.", "Ask about the main complaint and onset.", "Ask about location, character and severity (1–10).", "Ask about medication and allergies, then summarize."] },
            { name: "Student B · Patient", tasks: ["Choose a problem: migraine, ankle injury, sore throat or stomach pain.", "Say when and how it started (past simple).", "Describe the pain.", "Say what you did and what you took."] }
          ],
          language: ["What brought you here today?", "When did it start?", "Where does it hurt?", "What is the pain like?", "On a scale of 1 to 10…", "Did you take anything?", "So, to summarize,…"],
          model: [
            { who: "A", line: "Hello, I'm Renata, a medical student. What brought you here today?" },
            { who: "B", line: "I twisted my ankle playing football." },
            { who: "A", line: "Oh no. When did it happen?" },
            { who: "B", line: "Last Saturday. It became very swollen." },
            { who: "A", line: "On a scale of 1 to 10, how bad is the pain?" },
            { who: "B", line: "About a 6. It's worse when I walk." }
          ],
          seconds: 150,
          checklist: ["ask about onset with *When did…?*", "ask the patient to rate the pain?", "use past simple correctly?", "summarize at the end?"]
        },
        {
          type: "speak", title: "Case summary",
          prompt: "Record a one-minute summary of your patient for your teacher, like in a hospital round.",
          language: ["This is Mr. / Mrs. …, a … -year-old…", "He / She came because…", "It started … ago.", "He / She took…", "He / She is allergic to…"],
          seconds: 60,
          checklist: ["give age and main complaint?", "use the past simple?", "include time expressions?", "speak clearly and in order?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can name common symptoms and describe pain.", review: "Explanation: vocabulary" },
    { can: "I can use regular and irregular verbs in the past simple.", review: "Explanation: Past simple; Writing activity 2" },
    { can: "I can ask the main questions of a clinical history.", review: "Explanation: key questions; Writing activity 1" },
    { can: "I can use *ago, last, for* to talk about time.", review: "Explanation: Time expressions" },
    { can: "I can understand a patient's answers in a consultation.", review: "Listening activities 1 and 2" },
    { can: "I can write a short history of the present illness.", review: "Reading; Writing activity 3" }
  ]
};
