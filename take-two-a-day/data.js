window.UNIT = {
  slug: "take-two-a-day",
  title: "Take Two a Day",
  level: "A2",
  minutes: 55,
  subject: "Pharmacology",
  focus: ["should / shouldn't for advice", "dosage and frequency: twice a day, every 8 hours", "before / after / with meals", "forms of medicine and side effects"],
  speakers: { "Pharmacist": "f", "Mrs. Cruz": "f", "Dr. Ruiz": "f", "Kevin": "m" },

  presentation: {
    scene: "💊💉🧴⏱️",
    situation: "In **Pharmacology**, students learn how to explain a prescription. A pharmacist talks to Mrs. Cruz about her new medicine.",
    warmup: {
      prompt: "What do you do when you take a medicine? Choose all that are true for you.",
      options: ["I read the label", "I take it with water", "I stop when I feel better", "I take it at the same time every day", "I take it with coffee", "I ask the pharmacist", "I search on the internet", "I share medicine with my family"],
      response: "Thanks! Some of those are good habits, and some are not. Let's find out in this unit."
    },
    dialogueTitle: "At the pharmacy",
    dialogue: [
      { who: "Pharmacist", line: "Here's your amoxicillin, Mrs. Cruz. Take one capsule *every eight hours*." },
      { who: "Mrs. Cruz", line: "*Before* or *after* meals?" },
      { who: "Pharmacist", line: "You can take it *with* food. You *should* take it at the same times every day." },
      { who: "Mrs. Cruz", line: "For how long?" },
      { who: "Pharmacist", line: "*For seven days*. You *shouldn't* stop early, even if you feel better." },
      { who: "Mrs. Cruz", line: "Can I drink alcohol?" },
      { who: "Pharmacist", line: "It's better to avoid it. And if you get a rash, you *should* call your doctor immediately." }
    ]
  },

  objectives: [
    "I can name forms of medicine and routes of administration.",
    "I can explain dosage and frequency: *twice a day, every 8 hours, for 5 days*.",
    "I can give advice with *should / shouldn't*.",
    "I can understand and write simple prescription instructions."
  ],

  explanation: {
    vocabTitle: "Medicines",
    vocab: [
      { word: "tablet / pill", icon: "💊" }, { word: "capsule", icon: "💊" }, { word: "syrup", icon: "🧴" },
      { word: "drops", icon: "💧" }, { word: "cream / ointment", icon: "🧴" }, { word: "injection", icon: "💉" },
      { word: "inhaler", icon: "🌬️" }, { word: "prescription", icon: "📝" }, { word: "dose", icon: "🥄" },
      { word: "side effect", icon: "⚠️" }, { word: "painkiller", icon: "🤕" }, { word: "antibiotic", icon: "🦠" },
      { word: "swallow", icon: "😮" }, { word: "apply", icon: "👆" }, { word: "empty stomach", icon: "🍽️" }
    ],
    grammar: [
      {
        title: "Should / shouldn't",
        head: ["", "Example"],
        rows: [
          ["Affirmative", "You *should* drink a lot of water."],
          ["Negative", "You *shouldn't* take it with alcohol."],
          ["Question", "*Should* I take it before meals? — Yes, you *should*. / No, you *shouldn't*."],
          ["Wh- question", "When *should* I take it? How many *should* I take?"]
        ],
        note: "After *should*, use the base verb: *should take* (not *should to take*, not *should takes*)."
      },
      {
        title: "Dosage and frequency",
        head: ["Expression", "Meaning", "Example"],
        rows: [
          ["*once / twice / three times a day*", "1 / 2 / 3 times per day", "Take one tablet *twice a day*."],
          ["*every 6 / 8 / 12 hours*", "regular interval", "Take a capsule *every 8 hours*."],
          ["*for … days*", "duration", "Use the cream *for 10 days*."],
          ["*before / after / with meals*", "timing with food", "Take it *30 minutes before breakfast*."],
          ["*on an empty stomach*", "with no food", "Take it *on an empty stomach*."],
          ["*as needed*", "only when necessary", "Use the inhaler *as needed*."]
        ]
      },
      {
        title: "Routes",
        head: ["Verb", "Example"],
        rows: [
          ["*take / swallow*", "*Swallow* the tablet with water. Don't chew it."],
          ["*apply / rub*", "*Apply* a thin layer of cream."],
          ["*put in*", "*Put* two drops *in* each eye."],
          ["*inhale*", "*Inhale* two puffs."],
          ["*inject*", "The nurse *injects* the vaccine in the arm."]
        ]
      }
    ],
    watchOut: [
      ["You should to drink water.", "You should drink water."],
      ["Take it two times for day.", "Take it twice a day."],
      ["Take one each 8 hours.", "Take one every 8 hours."],
      ["You don't should stop.", "You shouldn't stop."],
      ["during seven days", "for seven days"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete the instructions.",
      items: [
        "Take one tablet [[twice]] a day (2 times).",
        "Take one capsule [[every]] eight hours.",
        "You [[shouldn't|should not]] drink alcohol with this medicine.",
        "Use the drops [[for]] five days."
      ]
    }
  },

  skills: {
    listening: {
      intro: "A doctor explains a prescription to a patient with bronchitis. Listen and complete the prescription.",
      title: "Your prescription",
      script: [
        { who: "Dr. Ruiz", line: "OK, Kevin. Here's your prescription. There are three medicines." },
        { who: "Dr. Ruiz", line: "First, the antibiotic: azithromycin. Take one tablet once a day for three days. Take it one hour before lunch." },
        { who: "Kevin", line: "Before lunch. OK." },
        { who: "Dr. Ruiz", line: "Second, paracetamol for the fever. Take one tablet every six hours, but only if you have a fever or pain. Don't take more than four tablets a day." },
        { who: "Kevin", line: "And the syrup?" },
        { who: "Dr. Ruiz", line: "The syrup is for the cough. Take ten milliliters three times a day, after meals. It can make you sleepy, so you shouldn't drive." },
        { who: "Kevin", line: "Should I stay at home?" },
        { who: "Dr. Ruiz", line: "Yes, you should rest for two or three days and drink a lot of water." }
      ],
      activities: [
        {
          type: "match", title: "Complete the prescription",
          prompt: "Match the medicine with the instructions.",
          pairs: [
            ["azithromycin", "once a day for three days"],
            ["paracetamol", "every six hours if needed"],
            ["cough syrup", "10 ml three times a day"],
            ["maximum paracetamol", "four tablets a day"],
            ["rest", "two or three days"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. Are the sentences true or false?",
          items: [
            { s: "Kevin should take the antibiotic after lunch.", a: false },
            { s: "He should take paracetamol every six hours, even without fever.", a: false },
            { s: "The syrup can make him sleepy.", a: true },
            { s: "He shouldn't drive after taking the syrup.", a: true },
            { s: "He should go to class tomorrow.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read this patient information leaflet.",
      title: "Patient leaflet: ibuprofen 400 mg tablets",
      text: [
        { author: "What is it for?", body: "Ibuprofen is an anti-inflammatory painkiller. It relieves headache, muscle pain, period pain and fever." },
        { author: "How to take it", body: "Adults: take one tablet every 6–8 hours **with food or milk**. Swallow the tablet with a glass of water. Do not take more than **three tablets in 24 hours**." },
        { author: "Who shouldn't take it", body: "You shouldn't take ibuprofen if you have a stomach ulcer, if you are allergic to aspirin, or in the last three months of pregnancy. Ask your doctor if you have asthma or kidney problems." },
        { author: "Side effects", body: "Common side effects are stomach pain, nausea and heartburn. Stop taking it and see a doctor if you have black stools, vomit blood or have difficulty breathing." }
      ],
      activities: [
        {
          type: "sort", title: "Should or shouldn't?",
          prompt: "According to the leaflet, sort the actions.",
          bins: ["✅ You should", "❌ You shouldn't"],
          items: [
            { text: "take it with food", bin: 0 }, { text: "swallow it with water", bin: 0 }, { text: "see a doctor if you vomit blood", bin: 0 },
            { text: "take four tablets in 24 hours", bin: 1 }, { text: "take it with a stomach ulcer", bin: 1 }, { text: "take it if you are allergic to aspirin", bin: 1 }
          ]
        },
        {
          type: "gap", title: "Read and complete",
          prompt: "Complete with information from the leaflet.",
          items: [
            "Take one tablet every [[6–8|6-8|six to eight]] hours.",
            "The maximum is [[three|3]] tablets in 24 hours.",
            "Take it with food or [[milk]].",
            "Heartburn is a common [[side effect]]."
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the instructions first, then write a prescription explanation.",
      activities: [
        {
          type: "tiles", title: "Build the instructions",
          items: [
            { a: "Take one tablet twice a day." },
            { a: "You should take it after meals." },
            { a: "You shouldn't drink alcohol." },
            { a: "Use the inhaler as needed." },
            { a: "Should I take it on an empty stomach?" }
          ]
        },
        {
          type: "rewrite", title: "From medical abbreviations to English",
          prompt: "Write the instruction in full English for the patient.",
          items: [
            { q: "1 tab q8h (every 8 hours)", a: ["Take one tablet every eight hours.", "Take one tablet every 8 hours.", "Take 1 tablet every 8 hours."] },
            { q: "1 cap bid (twice a day)", a: ["Take one capsule twice a day.", "Take 1 capsule twice a day."] },
            { q: "2 drops tid (three times a day)", a: ["Put two drops three times a day.", "Use two drops three times a day.", "Put 2 drops three times a day."] },
            { q: "1 tab od x 5 days (once a day for five days)", a: ["Take one tablet once a day for five days.", "Take 1 tablet once a day for 5 days.", "Take one tablet once a day for 5 days."] }
          ]
        },
        {
          type: "write", title: "Explain the treatment",
          prompt: "A patient has a urinary infection or the flu (you choose). Write a message for the patient explaining two medicines: dose, frequency, how long, with or without food, and two pieces of advice with *should / shouldn't*.",
          minWords: 70, maxWords: 120,
          model: "Dear Mrs. López, here are your instructions. 1. Nitrofurantoin 100 mg: take one capsule every 12 hours for five days. Take it with food. You shouldn't stop the treatment early. 2. Phenazopyridine: take one tablet three times a day after meals, only for two days. It can change the color of your urine to orange — that's normal. You should drink at least two liters of water a day, and you shouldn't drink coffee or alcohol. See you next week.",
          bank: ["Take one… every… hours.", "for … days", "before / after / with meals", "You should…", "You shouldn't…", "If you…, call your doctor."],
          checklist: [
            "I wrote **dose** and **frequency** for two medicines.",
            "I said **how long** with *for*.",
            "I used **should** and **shouldn't**.",
            "My instructions are **clear** for a patient."
          ]
        }
      ]
    },

    speaking: {
      intro: "Practice with a partner, or play both roles yourself. Then record your evidence.",
      activities: [
        {
          type: "voice", title: "Talk to the computer: At the pharmacy",
          prompt: "Practice the conversation with the computer. Choose a role: the computer reads the other part, and you say your lines. Then change roles. Your words are checked with voice recognition.",
          cards: [
            { name: "Student A · Pharmacist", tasks: ["Say the name and form of the medicine.", "Explain dose, frequency and duration.", "Give one *should* and one *shouldn't*.", "Mention a side effect."] },
            { name: "Student B · Patient", tasks: ["Ask *How often should I take it?*", "Ask *Before or after meals?*", "Ask about alcohol or driving.", "Repeat the instructions to check."] }
          ],
          language: ["Take… every… hours.", "… times a day", "for … days", "You should / shouldn't…", "How often should I…?", "Can I…?", "So, I take…"],
          model: [
            { who: "A", line: "This is omeprazole. Take one capsule once a day." },
            { who: "B", line: "Before or after breakfast?" },
            { who: "A", line: "Before breakfast, on an empty stomach." },
            { who: "B", line: "For how long?" },
            { who: "A", line: "For four weeks. You shouldn't drink a lot of coffee." },
            { who: "B", line: "OK. So, one capsule every morning before breakfast for four weeks." }
          ],
          seconds: 120,
          checklist: ["use frequency expressions?", "use *should / shouldn't*?", "check understanding?", "speak clearly?"]
        },
        {
          type: "speak", title: "Medicine safety tips",
          prompt: "Record a one-minute video with five tips for patients about taking medicines safely.",
          language: ["Here are five tips…", "First, you should…", "You shouldn't…", "Always…", "Never…", "Ask your doctor or pharmacist if…"],
          seconds: 60,
          checklist: ["give five tips?", "use *should / shouldn't*?", "use medicine vocabulary?", "speak clearly?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can name forms of medicine and routes.", review: "Explanation: vocabulary; Routes" },
    { can: "I can explain dose and frequency.", review: "Explanation: Dosage and frequency; Writing activity 2" },
    { can: "I can give advice with *should / shouldn't*.", review: "Explanation: Should / shouldn't" },
    { can: "I can understand a doctor explaining a prescription.", review: "Listening activities 1 and 2" },
    { can: "I can understand a patient information leaflet.", review: "Reading activities 1 and 2" },
    { can: "I can write clear treatment instructions for a patient.", review: "Writing activity 3" }
  ]
};
