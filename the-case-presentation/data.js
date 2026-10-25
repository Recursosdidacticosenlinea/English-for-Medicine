window.UNIT = {
  slug: "the-case-presentation",
  title: "The Case Presentation",
  level: "B1",
  minutes: 60,
  subject: "Internal Medicine",
  focus: ["present perfect with for / since", "present perfect vs. past simple", "How long have you had…?", "structure of a case presentation"],
  speakers: { "Dr. Ruiz": "f", "Leo": "m", "Mrs. Vega": "f", "Lin": "f", "Tomás": "m" },

  presentation: {
    scene: "📋🩺🗣️👩‍⚕️",
    situation: "It's the morning round in **Internal Medicine**. Leo, an intern, presents a new patient to Dr. Ruiz and the team.",
    warmup: {
      prompt: "What information goes in a case presentation? Choose all that you think.",
      options: ["age and sex", "main complaint", "history of the present illness", "past medical history", "medications", "the patient's favorite food", "physical examination", "lab results", "assessment and plan", "the patient's salary"],
      response: "Correct choices! In this unit you'll learn to present a patient clearly in English."
    },
    dialogueTitle: "On the morning round",
    dialogue: [
      { who: "Leo", line: "This is Mrs. Vega, a 58-year-old woman who *has had* a cough *for three weeks*." },
      { who: "Dr. Ruiz", line: "*Has* she *had* a fever?" },
      { who: "Leo", line: "Yes. She *'s had* night sweats *since* last Monday, and she *has lost* five kilos this month." },
      { who: "Dr. Ruiz", line: "*Has* she ever *smoked*?" },
      { who: "Leo", line: "She *smoked* for twenty years but she *stopped* in 2015. She *has had* type 2 diabetes *since* 2010." },
      { who: "Dr. Ruiz", line: "*Have* we *done* a chest X-ray?" },
      { who: "Leo", line: "Yes, we *did* it last night. It shows an opacity in the right upper lobe. We *haven't received* the sputum results *yet*." }
    ]
  },

  objectives: [
    "I can use the present perfect with *for* and *since* to describe duration of symptoms and conditions.",
    "I can choose between the present perfect and the past simple in a clinical history.",
    "I can ask *How long have you…? Have you ever…?*",
    "I can give a short, structured case presentation."
  ],

  explanation: {
    vocabTitle: "Case presentation language",
    vocab: [
      { word: "chief complaint", icon: "🎯" }, { word: "onset", icon: "▶️" }, { word: "past medical history", icon: "📚" },
      { word: "comorbidity", icon: "➕" }, { word: "weight loss", icon: "⚖️" }, { word: "night sweats", icon: "🌙" },
      { word: "shortness of breath", icon: "💨" }, { word: "physical exam", icon: "🩺" }, { word: "findings", icon: "🔍" },
      { word: "differential diagnosis", icon: "🤔" }, { word: "workup", icon: "🧪" }, { word: "chest X-ray", icon: "🩻" },
      { word: "admitted", icon: "📥" }, { word: "worsen", icon: "📉" }, { word: "improve", icon: "📈" }
    ],
    grammar: [
      {
        title: "Present perfect: have / has + past participle",
        head: ["", "Example"],
        rows: [
          ["Affirmative", "She *has had* a cough for three weeks. I *'ve seen* this before."],
          ["Negative", "He *hasn't eaten* since yesterday. We *haven't received* the results."],
          ["Question", "*Have* you *had* chest pain? *Has* he *ever smoked*?"],
          ["Duration", "*How long have* you *had* diabetes? — *Since* 2010. / *For* 15 years."]
        ],
        note: "Use the present perfect for situations that **started in the past and continue now**, experiences (*ever / never*) and recent results (*just, already, yet*)."
      },
      {
        title: "For vs. since",
        head: ["for + period", "since + starting point"],
        rows: [
          ["*for* three weeks", "*since* last Monday"],
          ["*for* two days", "*since* 2010"],
          ["*for* a long time", "*since* she was 30"]
        ]
      },
      {
        title: "Present perfect vs. past simple",
        head: ["Present perfect (connected to now)", "Past simple (finished time)"],
        rows: [
          ["She *has had* diabetes since 2010. (still has it)", "She *had* surgery *in 2018*."],
          ["He *has lost* 5 kg this month.", "He *lost* 5 kg *last year*."],
          ["*Have* you ever *been* in hospital?", "*When were* you in hospital? — *In May*."]
        ],
        note: "With finished time words (*yesterday, last week, in 2018, ago*) use the **past simple**."
      }
    ],
    watchOut: [
      ["She has a cough since three weeks.", "She has had a cough for three weeks."],
      ["How long do you have diabetes?", "How long have you had diabetes?"],
      ["He has had surgery in 2018.", "He had surgery in 2018."],
      ["I'm here since Monday.", "I've been here since Monday."],
      ["We didn't receive the results yet.", "We haven't received the results yet."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *for, since*, the present perfect or the past simple.",
      items: [
        "He has had hypertension [[since]] 2012.",
        "She has had a headache [[for]] four days.",
        "How long [[have]] you had this pain?",
        "He [[broke]] (break) his leg in 2019."
      ]
    }
  },

  skills: {
    listening: {
      intro: "A medical student presents a patient to the attending physician. Listen and complete the case.",
      title: "A patient with chest pain",
      script: [
        { who: "Lin", line: "Good morning. This is Mr. Tomás Ríos, a 62-year-old man who came to the emergency room last night with chest pain." },
        { who: "Lin", line: "The pain started yesterday at about 8 p.m. while he was climbing stairs. It's a pressure in the center of the chest that goes to the left arm." },
        { who: "Lin", line: "He has had hypertension for ten years and he has smoked a pack a day since he was twenty." },
        { who: "Dr. Ruiz", line: "Has he ever had a similar pain?" },
        { who: "Lin", line: "Yes, he had two short episodes last month, but he didn't see a doctor." },
        { who: "Lin", line: "On examination, his blood pressure was 160 over 95. The ECG showed changes in the inferior leads, and troponin is elevated." },
        { who: "Lin", line: "We've started aspirin and we have called cardiology. We haven't done the echocardiogram yet." },
        { who: "Dr. Ruiz", line: "Good presentation, Lin. What's your main diagnosis?" },
        { who: "Lin", line: "An acute myocardial infarction." }
      ],
      activities: [
        {
          type: "match", title: "Complete the case",
          prompt: "Match each part of the presentation with the information.",
          pairs: [
            ["Patient", "62-year-old man"],
            ["Onset", "yesterday at 8 p.m., climbing stairs"],
            ["Comorbidity", "hypertension for ten years"],
            ["Previous episodes", "two short episodes last month"],
            ["Pending", "the echocardiogram"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. Are the sentences true or false?",
          items: [
            { s: "The pain goes to the right arm.", a: false },
            { s: "He has smoked since he was twenty.", a: true },
            { s: "He saw a doctor last month.", a: false },
            { s: "They have already started aspirin.", a: true },
            { s: "They have already done the echocardiogram.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read this case summary written by an intern.",
      title: "Case summary: bed 12",
      text: [
        { author: "Identification", body: "Mrs. Rosa Vega, 58, housewife from Tehuacán." },
        { author: "Chief complaint", body: "Cough and weight loss." },
        { author: "History of present illness", body: "The patient **has had** a productive cough for three weeks. She **has had** fever and night sweats since last Monday and **has lost** five kilos this month. Two weeks ago she **went** to a private doctor, who **gave** her amoxicillin, but she **didn't improve**." },
        { author: "Past history", body: "Type 2 diabetes since 2010, poorly controlled. She **smoked** for twenty years and **stopped** in 2015. Her husband **had** tuberculosis three years ago." },
        { author: "Plan", body: "We **have requested** three sputum samples and an HIV test. We **haven't started** treatment yet. She **has been** in respiratory isolation since admission." }
      ],
      activities: [
        {
          type: "sort", title: "Still true or finished?",
          prompt: "Is the situation continuing now, or finished in the past?",
          bins: ["Continues now (present perfect)", "Finished (past simple)"],
          items: [
            { text: "cough for three weeks", bin: 0 }, { text: "diabetes since 2010", bin: 0 }, { text: "in isolation since admission", bin: 0 },
            { text: "went to a private doctor", bin: 1 }, { text: "smoked for twenty years", bin: 1 }, { text: "husband had TB", bin: 1 }
          ]
        },
        {
          type: "rewrite", title: "Ask the patient",
          prompt: "Write the question the intern asked.",
          items: [
            { q: "For three weeks. (How long / cough)", a: ["How long have you had a cough?", "How long have you had the cough?", "How long have you had this cough?"] },
            { q: "Since 2010. (How long / diabetes)", a: ["How long have you had diabetes?"] },
            { q: "Yes, I smoked for twenty years. (ever / smoke)", a: ["Have you ever smoked?"] },
            { q: "Two weeks ago. (When / go to a doctor)", a: ["When did you go to a doctor?", "When did you go to the doctor?"] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the structures first, then write a case summary.",
      activities: [
        {
          type: "tiles", title: "Build the sentences",
          items: [
            { a: "How long have you had this pain?" },
            { a: "She has had asthma since she was a child." },
            { a: "Have you ever been in hospital?" },
            { a: "We haven't received the results yet." },
            { a: "He had surgery two years ago." }
          ]
        },
        {
          type: "gap", title: "Present perfect or past simple?",
          prompt: "Complete with the correct form of the verb.",
          items: [
            "The patient [[has had|'s had]] (have) epilepsy since childhood.",
            "He [[had]] (have) a seizure last night at 11 p.m.",
            "He [[has taken|'s taken]] (take) valproic acid for ten years.",
            "Last week he [[forgot]] (forget) his medication for three days.",
            "We [[have requested|'ve requested]] (request) an EEG, but we haven't got the results yet."
          ]
        },
        {
          type: "write", title: "Write a case summary",
          prompt: "Write a case summary of a patient (invented or adapted, no real names). Include identification, chief complaint, history of present illness, past history, examination findings and plan. Use the present perfect and the past simple correctly.",
          minWords: 100, maxWords: 160,
          model: "Mr. J. M., 45, bus driver. Chief complaint: thirst and frequent urination. He has felt very thirsty for two months and has lost six kilos since January. He has also had blurred vision for two weeks. Last month he went to a pharmacy and they measured his glucose: 320 mg/dL. He has never seen a doctor about it. His mother had type 2 diabetes. On examination: BMI 31, BP 140/90. Plan: we have requested HbA1c and a lipid profile; we haven't started insulin yet. He needs education about diet and exercise.",
          bank: ["… a …-year-old…", "Chief complaint:", "He / She has had … for / since…", "Last … he / she…", "He / She has never…", "On examination:", "Plan: we have requested…", "… yet."],
          checklist: [
            "I followed the **structure** of a case presentation.",
            "I used the **present perfect** with *for* and *since*.",
            "I used the **past simple** with finished time.",
            "I used **yet / already / never** at least once."
          ]
        }
      ]
    },

    speaking: {
      intro: "Practice with a partner, or play both roles yourself. Then record your evidence.",
      activities: [
        {
          type: "voice", title: "Talk to the computer: Taking the history",
          prompt: "Practice the conversation with the computer. Choose a role: the computer reads the other part, and you say your lines. Then change roles. Your words are checked with voice recognition.",
          cards: [
            { name: "Student A · Intern", tasks: ["Ask *How long have you had…?*", "Ask *Have you ever…?* (hospital, surgery, smoked).", "Ask *When did you…?* for a finished event.", "Summarize the case in two sentences."] },
            { name: "Student B · Patient", tasks: ["Choose a chronic problem.", "Answer with *for / since*.", "Mention one past event with a date.", "Say one thing you haven't done yet."] }
          ],
          language: ["How long have you had…?", "Have you ever…?", "When did you…?", "I've had it for / since…", "I had… in…", "I haven't… yet."],
          model: [
            { who: "A", line: "How long have you had asthma?" },
            { who: "B", line: "I've had it since I was a child." },
            { who: "A", line: "Have you ever been in hospital because of it?" },
            { who: "B", line: "Yes, I was in hospital in 2021 for three days." },
            { who: "A", line: "Have you used your inhaler today?" },
            { who: "B", line: "No, I haven't used it yet." }
          ],
          seconds: 150,
          checklist: ["use *for / since* correctly?", "ask *Have you ever…?*", "use the past simple with dates?", "summarize clearly?"]
        },
        {
          type: "speak", title: "My case presentation",
          prompt: "Record a 90-second case presentation of your patient, like on the morning round: ID, chief complaint, history, findings, plan.",
          language: ["This is…, a …-year-old…", "who has had … for…", "He / She has a history of…", "On examination,…", "We have started… / We haven't… yet.", "Our main diagnosis is…"],
          seconds: 90,
          checklist: ["follow the case structure?", "use present perfect and past simple correctly?", "speak in a clear, professional way?", "finish with diagnosis and plan?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use the present perfect with *for* and *since*.", review: "Explanation: Present perfect; For vs. since" },
    { can: "I can choose the present perfect or the past simple.", review: "Explanation: Present perfect vs. past simple; Writing activity 2" },
    { can: "I can ask *How long have you…? Have you ever…?*", review: "Reading activity 2; Speaking activity 1" },
    { can: "I can follow a colleague's case presentation.", review: "Listening activities 1 and 2" },
    { can: "I can write a structured case summary.", review: "Reading; Writing activity 3" },
    { can: "I can give a short case presentation on a round.", review: "Speaking activity 2" }
  ]
};
