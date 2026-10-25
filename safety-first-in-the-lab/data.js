window.UNIT = {
  slug: "safety-first-in-the-lab",
  title: "Safety First in the Lab",
  level: "A1",
  minutes: 50,
  subject: "Biochemistry Laboratory",
  focus: ["imperatives: wear, use, don't eat", "can / can't for rules and ability", "laboratory equipment", "sequencers: first, then, finally"],
  speakers: { "Dr. Pérez": "m", "Valeria": "f", "Daniel": "m", "Technician": "f" },

  presentation: {
    scene: "🥼🧪🧤🥽",
    situation: "It's the first **Biochemistry** lab session. Before the practice, Dr. Pérez explains the safety rules.",
    warmup: {
      prompt: "What do you need in a lab? Choose all that are true.",
      options: ["a lab coat", "gloves", "goggles", "sandals", "a mask", "food", "a notebook", "long hair down", "closed shoes", "a phone on the bench"],
      response: "Good! In this unit you'll learn to give and understand lab instructions and rules."
    },
    dialogueTitle: "Lab rules",
    dialogue: [
      { who: "Dr. Pérez", line: "Good morning. *Put on* your lab coat and gloves, please." },
      { who: "Valeria", line: "*Can* we use our phones in the lab?" },
      { who: "Dr. Pérez", line: "No, you *can't*. And *don't eat* or *drink* here." },
      { who: "Daniel", line: "*Can* I wear my glasses or do I need goggles?" },
      { who: "Dr. Pérez", line: "*Wear* goggles, Daniel. Glasses are not enough." },
      { who: "Valeria", line: "What do we do with the used pipette tips?" },
      { who: "Dr. Pérez", line: "*Throw* them in the red container. *Don't put* them in the normal bin. OK, let's start!" }
    ]
  },

  objectives: [
    "I can name common laboratory equipment.",
    "I can understand and give safety instructions with imperatives.",
    "I can use *can / can't* to talk about rules.",
    "I can write simple steps of a procedure with *first, then, after that, finally*."
  ],

  explanation: {
    vocabTitle: "Lab equipment",
    vocab: [
      { word: "lab coat", icon: "🥼" }, { word: "gloves", icon: "🧤" }, { word: "goggles", icon: "🥽" },
      { word: "test tube", icon: "🧪" }, { word: "flask", icon: "⚗️" }, { word: "beaker", icon: "🫙" },
      { word: "pipette", icon: "💉" }, { word: "microscope", icon: "🔬" }, { word: "scale", icon: "⚖️" },
      { word: "centrifuge", icon: "🌀" }, { word: "thermometer", icon: "🌡️" }, { word: "burner", icon: "🔥" },
      { word: "sample", icon: "🩸" }, { word: "biohazard bin", icon: "☣️" }, { word: "sink", icon: "🚰" }
    ],
    grammar: [
      {
        title: "Imperatives",
        head: ["", "Form", "Example"],
        rows: [
          ["Affirmative", "base verb", "*Wear* gloves. *Wash* your hands."],
          ["Negative", "*don't* + base verb", "*Don't touch* the burner. *Don't run*."],
          ["Polite", "*please*", "*Please close* the door."]
        ],
        note: "Imperatives are short and direct. We use them for instructions, rules and warnings."
      },
      {
        title: "Can / can't",
        head: ["", "Example"],
        rows: [
          ["Permission (+)", "You *can* use the computer after the practice."],
          ["Rule (−)", "You *can't* eat in the lab."],
          ["Question", "*Can* I take a photo? — Yes, you *can*. / No, you *can't*."],
          ["Ability", "I *can* use a microscope. I *can't* use the centrifuge."]
        ],
        note: "*Can* is the same for all persons: *he can*, not *he cans*. After *can*, use the base verb: *can use*, not *can to use*."
      },
      {
        title: "Sequencers",
        head: ["Order", "Example"],
        rows: [
          ["*First,*", "*First,* wash your hands."],
          ["*Then / Next,*", "*Then,* put on your gloves."],
          ["*After that,*", "*After that,* take the sample."],
          ["*Finally,*", "*Finally,* clean the bench."]
        ]
      }
    ],
    watchOut: [
      ["No eat in the lab.", "Don't eat in the lab."],
      ["You can to use the scale.", "You can use the scale."],
      ["She cans use the microscope.", "She can use the microscope."],
      ["Wears your goggles.", "Wear your goggles."],
      ["Not touch the burner!", "Don't touch the burner!"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete the lab rules.",
      items: [
        "[[Wear]] goggles. (wear)",
        "[[Don't|Do not]] drink in the lab.",
        "You [[can't|cannot|can not]] use your phone here.",
        "[[First]], wash your hands. Then, put on your gloves."
      ]
    }
  },

  skills: {
    listening: {
      intro: "A lab technician explains how to use the microscope. Listen and put the steps in order.",
      title: "How to use the microscope",
      script: [
        { who: "Technician", line: "OK, everybody. Let's use the microscope. First, turn on the light." },
        { who: "Technician", line: "Then, put the slide on the stage. Don't touch the center of the slide with your fingers." },
        { who: "Technician", line: "After that, start with the small lens — the 4x lens." },
        { who: "Technician", line: "Next, turn the big knob slowly to focus. Look through the eyepiece." },
        { who: "Technician", line: "Then change to the 10x or 40x lens and use the small knob." },
        { who: "Technician", line: "Finally, turn off the light and clean the lenses with lens paper. Don't use tissue paper!" }
      ],
      activities: [
        {
          type: "match", title: "Steps and actions",
          prompt: "Match the step with the action.",
          pairs: [
            ["Step 1", "Turn on the light."],
            ["Step 2", "Put the slide on the stage."],
            ["Step 3", "Start with the 4x lens."],
            ["Step 4", "Turn the big knob to focus."],
            ["Last step", "Clean the lenses with lens paper."]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. Are the sentences true or false?",
          items: [
            { s: "Start with the 40x lens.", a: false },
            { s: "Don't touch the center of the slide.", a: true },
            { s: "Turn the big knob quickly.", a: false },
            { s: "Clean the lenses with tissue paper.", a: false },
            { s: "Turn off the light at the end.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read the safety poster from the Biochemistry lab.",
      title: "Lab safety: the golden rules",
      text: [
        { author: "Before the practice", body: "Wear a lab coat, closed shoes and goggles. Tie back long hair. Read the procedure. You can't start without the teacher." },
        { author: "During the practice", body: "Don't eat, drink or use make-up. Don't smell or taste chemicals. Use a pipette — never use your mouth. Label all your test tubes." },
        { author: "Accidents", body: "Tell the teacher immediately. If a chemical touches your eyes, use the eye wash for 15 minutes. You can find the fire extinguisher next to the door." },
        { author: "After the practice", body: "Put sharp objects in the red container and biological waste in the biohazard bin. Clean your bench. Take off your gloves and wash your hands." }
      ],
      activities: [
        {
          type: "sort", title: "Do or don't?",
          prompt: "Is it a good practice or a bad practice in the lab?",
          bins: ["✅ Do", "❌ Don't"],
          items: [
            { text: "label the test tubes", bin: 0 }, { text: "tie back long hair", bin: 0 }, { text: "wash your hands", bin: 0 },
            { text: "taste chemicals", bin: 1 }, { text: "use your mouth with a pipette", bin: 1 }, { text: "drink water at the bench", bin: 1 }
          ]
        },
        {
          type: "gap", title: "Read and complete",
          prompt: "Complete with words from the poster.",
          items: [
            "Use the eye wash for [[15|fifteen]] minutes.",
            "The fire extinguisher is next to the [[door]].",
            "Put sharp objects in the [[red]] container.",
            "You [[can't|cannot]] start without the teacher."
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the rules first, then write a procedure.",
      activities: [
        {
          type: "tiles", title: "Build the rules",
          items: [
            { a: "Don't eat in the lab." },
            { a: "Wear your goggles, please." },
            { a: "Can I use the centrifuge?" },
            { a: "First, wash your hands." },
            { a: "You can't use your phone here." }
          ]
        },
        {
          type: "rewrite", title: "Make it a rule",
          prompt: "Rewrite as an imperative (affirmative or negative).",
          items: [
            { q: "You need to wear gloves.", a: ["Wear gloves.", "Wear gloves!", "Please wear gloves."] },
            { q: "It's not OK to run in the lab.", a: ["Don't run in the lab.", "Don't run.", "Do not run in the lab."] },
            { q: "You need to close the door.", a: ["Close the door.", "Please close the door."] },
            { q: "It's not OK to touch the burner.", a: ["Don't touch the burner.", "Do not touch the burner."] }
          ]
        },
        {
          type: "write", title: "Write a lab procedure",
          prompt: "Write the steps of a simple lab procedure (for example: wash your hands correctly, prepare a slide, or take a blood sample from a finger). Use imperatives and sequencers. Add one safety rule with *can't* or *don't*.",
          minWords: 40, maxWords: 80,
          model: "How to prepare a slide. First, wash your hands and put on gloves. Then, take a clean slide. Next, put one drop of water in the middle. After that, put the sample on the water and cover it with a cover slip. Finally, put the slide under the microscope. Don't touch the center of the slide with your fingers.",
          bank: ["First,", "Then,", "Next,", "After that,", "Finally,", "Don't…", "You can't…"],
          checklist: [
            "I used at least **five** imperatives.",
            "I used **sequencers** (first, then, finally).",
            "I included a **safety rule** with *don't* or *can't*.",
            "My verbs are in the **base form** (*wash*, not *washes*)."
          ]
        }
      ]
    },

    speaking: {
      intro: "Practice with a partner, or play both roles yourself. Then record your evidence.",
      activities: [
        {
          type: "voice", title: "Talk to the computer: Teacher and new student",
          prompt: "Practice the conversation with the computer. Choose a role: the computer reads the other part, and you say your lines. Then change roles. Your words are checked with voice recognition.",
          cards: [
            { name: "Student A · Lab teacher", tasks: ["Welcome the student.", "Give three safety instructions.", "Answer the *Can I…?* questions.", "Say one thing the student can't do."] },
            { name: "Student B · New student", tasks: ["Ask *Can I…?* three times.", "Ask where something is.", "Repeat the instruction to check.", "Say thank you."] }
          ],
          language: ["Welcome to the lab.", "Put on…", "Don't…", "Can I…?", "Yes, you can. / No, you can't.", "Where is the…?", "It's next to…"],
          model: [
            { who: "A", line: "Welcome to the lab! First, put on your lab coat." },
            { who: "B", line: "Can I leave my backpack on the bench?" },
            { who: "A", line: "No, you can't. Put it in the lockers, please." },
            { who: "B", line: "OK. Where is the biohazard bin?" },
            { who: "A", line: "It's next to the sink. Don't put gloves in the normal bin." }
          ],
          seconds: 120,
          checklist: ["use imperatives correctly?", "ask and answer with *can*?", "use *don't* for negative rules?", "name lab equipment?"]
        },
        {
          type: "speak", title: "Lab safety video",
          prompt: "Record a one-minute safety video for first-semester students. Show or mime the steps and explain the rules.",
          language: ["Hi! Welcome to the Biochemistry lab.", "Here are the rules.", "First,…", "Don't…", "You can't…", "Remember:…", "Safety first!"],
          seconds: 60,
          checklist: ["give at least five instructions?", "use sequencers?", "include *don't* and *can't*?", "speak clearly and slowly?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can name at least 12 pieces of lab equipment.", review: "Explanation: vocabulary" },
    { can: "I can give instructions with affirmative and negative imperatives.", review: "Explanation: Imperatives; Writing activity 2" },
    { can: "I can use *can / can't* for lab rules.", review: "Explanation: Can / can't" },
    { can: "I can understand the steps of a simple procedure.", review: "Listening activities 1 and 2" },
    { can: "I can understand a safety poster.", review: "Reading activities 1 and 2" },
    { can: "I can write a procedure with sequencers.", review: "Explanation: Sequencers; Writing activity 3" }
  ]
};
