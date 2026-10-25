window.UNIT = {
  slug: "a-day-at-med-school",
  title: "A Day at Med School",
  level: "A1",
  minutes: 50,
  subject: "Medical Psychology",
  focus: ["present simple: I / you / we / they", "daily routines and telling the time", "adverbs of frequency: always, usually, sometimes, never", "How often…?"],
  speakers: { "Camila": "f", "Rodrigo": "m", "Interviewer": "f", "Diego": "m" },

  presentation: {
    scene: "⏰📚☕😴",
    situation: "In **Medical Psychology**, students study stress and wellbeing. Today they talk about their own routines. Is the life of a medical student healthy?",
    warmup: {
      prompt: "What do you do every day? Choose all that are true for you.",
      options: ["I get up before 6", "I have breakfast", "I take the bus", "I study at night", "I drink a lot of coffee", "I exercise", "I sleep 8 hours", "I eat fast food", "I see my friends", "I feel stressed"],
      response: "Thanks for sharing! In this unit you'll talk about routines and healthy habits."
    },
    dialogueTitle: "In the cafeteria",
    dialogue: [
      { who: "Camila", line: "Rodrigo, you look tired! What time *do* you *get up*?" },
      { who: "Rodrigo", line: "I *always get up* at five. My first class *starts* at seven." },
      { who: "Camila", line: "Wow! *Do* you *have* breakfast?" },
      { who: "Rodrigo", line: "No, I *never have* breakfast. I *usually drink* coffee on the bus." },
      { who: "Camila", line: "*How often do* you *exercise*?" },
      { who: "Rodrigo", line: "I *sometimes* go running on Saturdays. And you?" },
      { who: "Camila", line: "I *go* to the gym three times a week. It *helps* with stress!" }
    ]
  },

  objectives: [
    "I can describe my daily routine with the present simple.",
    "I can tell the time and use *at, on, in* with times and days.",
    "I can use adverbs of frequency in the correct position.",
    "I can ask and answer *How often…?* questions about habits."
  ],

  explanation: {
    vocabTitle: "Routines and wellbeing",
    vocab: [
      { word: "get up", icon: "🛏️" }, { word: "have breakfast", icon: "🥣" }, { word: "take the bus", icon: "🚌" },
      { word: "go to class", icon: "🏫" }, { word: "have lunch", icon: "🍽️" }, { word: "study", icon: "📚" },
      { word: "go to the hospital", icon: "🏥" }, { word: "exercise", icon: "🏃" }, { word: "relax", icon: "🧘" },
      { word: "go to bed", icon: "🌙" }, { word: "sleep", icon: "😴" }, { word: "stress", icon: "😫" },
      { word: "tired", icon: "🥱" }, { word: "healthy", icon: "🥦" }, { word: "habit", icon: "🔁" }
    ],
    grammar: [
      {
        title: "Present simple (I / you / we / they)",
        head: ["", "Example"],
        rows: [
          ["Affirmative", "I *study* in the library. We *have* class at seven."],
          ["Negative", "I *don't sleep* eight hours. They *don't eat* breakfast."],
          ["Question", "*Do* you *exercise*? — Yes, I *do*. / No, I *don't*."],
          ["Wh- question", "What time *do* you *get up*? Where *do* you *study*?"]
        ],
        note: "Use the present simple for routines and habits."
      },
      {
        title: "Adverbs of frequency",
        head: ["Adverb", "%", "Example"],
        rows: [
          ["*always*", "100%", "I *always* have coffee in the morning."],
          ["*usually*", "80%", "We *usually* study at night."],
          ["*often*", "60%", "I *often* feel tired on Mondays."],
          ["*sometimes*", "40%", "I *sometimes* skip lunch."],
          ["*rarely*", "10%", "I *rarely* sleep eight hours."],
          ["*never*", "0%", "I *never* exercise."]
        ],
        note: "The adverb goes **before** the main verb (*I always study*) but **after** *be* (*I am always tired*)."
      },
      {
        title: "Time: at, on, in",
        head: ["Preposition", "Use", "Example"],
        rows: [
          ["*at*", "times", "*at* 7 o'clock, *at* 7:30, *at* night"],
          ["*on*", "days", "*on* Monday, *on* weekends"],
          ["*in*", "parts of the day", "*in* the morning, *in* the afternoon"]
        ],
        note: "*How often…?* — *every day, once a week, twice a week, three times a month*."
      }
    ],
    watchOut: [
      ["I study always at night.", "I always study at night."],
      ["I always am tired.", "I am always tired."],
      ["Do you exercises?", "Do you exercise?"],
      ["I don't never sleep.", "I never sleep."],
      ["in Monday", "on Monday"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete the sentences.",
      items: [
        "I get up [[at]] six o'clock.",
        "[[Do]] you have breakfast every day?",
        "We [[don't|do not]] have class on Sundays.",
        "My classes start [[in]] the morning."
      ]
    }
  },

  skills: {
    listening: {
      intro: "A psychology student interviews a medical intern about her routine. Listen and answer.",
      title: "The life of an intern",
      script: [
        { who: "Interviewer", line: "Thanks for the interview. What time do you start work?" },
        { who: "Camila", line: "I usually start at seven in the morning, but on Tuesdays and Fridays I work at night. Those are my on-call days." },
        { who: "Interviewer", line: "How many hours do you sleep?" },
        { who: "Camila", line: "On normal days I sleep about six hours. After a night shift I sleep in the afternoon." },
        { who: "Interviewer", line: "Do you eat well?" },
        { who: "Camila", line: "Not always. I often eat a sandwich in the hospital. I never have time for a big lunch." },
        { who: "Interviewer", line: "How do you relax?" },
        { who: "Camila", line: "I go swimming twice a week and I call my family every Sunday. That helps a lot." }
      ],
      activities: [
        {
          type: "match", title: "Camila's routine",
          prompt: "Match the questions with the answers.",
          pairs: [
            ["What time does she start?", "at seven in the morning"],
            ["When are her on-call days?", "on Tuesdays and Fridays"],
            ["How many hours does she sleep?", "about six hours"],
            ["How often does she swim?", "twice a week"],
            ["When does she call her family?", "every Sunday"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. Are the sentences true or false?",
          items: [
            { s: "She always works in the morning.", a: false },
            { s: "She often eats a sandwich in the hospital.", a: true },
            { s: "She usually has a big lunch.", a: false },
            { s: "She sleeps in the afternoon after a night shift.", a: true },
            { s: "She never exercises.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read a survey report from a Medical Psychology class.",
      title: "How healthy are medical students?",
      text: [
        { author: "The survey", body: "Our group asked 100 first-year medical students about their habits. Here are the results." },
        { author: "Sleep", body: "Most students sleep only five or six hours a night. Only 12% sleep eight hours. Many students study until midnight, and 40% always use their phone in bed." },
        { author: "Food", body: "Half of the students never have breakfast. They usually buy snacks or coffee at the university. Only 20% eat fruit every day." },
        { author: "Exercise and stress", body: "35% of students exercise twice a week or more. 60% often feel stressed during exam weeks. Students who exercise feel less stressed." },
        { author: "Recommendation", body: "Sleep seven or eight hours, have breakfast, and exercise three times a week. Your body and your brain need it!" }
      ],
      activities: [
        {
          type: "sort", title: "Healthy or not?",
          prompt: "Sort the habits from the report.",
          bins: ["😊 Healthy habit", "😟 Unhealthy habit"],
          items: [
            { text: "eat fruit every day", bin: 0 }, { text: "exercise three times a week", bin: 0 }, { text: "sleep eight hours", bin: 0 },
            { text: "never have breakfast", bin: 1 }, { text: "always use the phone in bed", bin: 1 }, { text: "study until midnight", bin: 1 }
          ]
        },
        {
          type: "gap", title: "The numbers",
          prompt: "Complete with numbers from the report.",
          items: [
            "Only [[12]]% of students sleep eight hours.",
            "[[50]]% of students never have breakfast.",
            "[[35]]% exercise twice a week or more.",
            "[[60]]% often feel stressed in exam weeks."
          ]
        }
      ]
    },

    writing: {
      intro: "Practice word order first, then describe your routine.",
      activities: [
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "I always get up at six." },
            { a: "We usually study in the library." },
            { a: "How often do you exercise?" },
            { a: "I am sometimes tired in class." },
            { a: "They never have breakfast." }
          ]
        },
        {
          type: "rewrite", title: "Add the adverb",
          prompt: "Rewrite the sentence with the adverb in the correct place.",
          items: [
            { q: "I study at night. (usually)", a: ["I usually study at night."] },
            { q: "I am stressed on Mondays. (often)", a: ["I am often stressed on Mondays.", "I'm often stressed on Mondays."] },
            { q: "We eat fast food. (rarely)", a: ["We rarely eat fast food."] },
            { q: "They go to the hospital on Saturdays. (always)", a: ["They always go to the hospital on Saturdays."] }
          ]
        },
        {
          type: "write", title: "My routine as a med student",
          prompt: "Describe a typical day in your life as a medical student. Say what time you do things, how often you exercise, sleep and eat well, and one habit you want to change.",
          minWords: 60, maxWords: 100,
          model: "I usually get up at 5:30 because my first class starts at seven. I always take the bus to the university. I have classes in the morning and I sometimes go to the hospital in the afternoon. I often have lunch at the cafeteria. In the evening I study for about three hours. I rarely exercise and I never sleep eight hours. I want to change this: I want to go running twice a week.",
          bank: ["I usually get up at…", "My first class starts at…", "In the morning / afternoon,…", "I always / often / never…", "… twice a week.", "I want to change…"],
          checklist: [
            "I used the **present simple** for my routine.",
            "I used at least **four** adverbs of frequency.",
            "I used **at, on, in** with times and days.",
            "I wrote one habit I want to **change**."
          ]
        }
      ]
    },

    speaking: {
      intro: "Practice with a partner, or play both roles yourself. Then record your evidence.",
      activities: [
        {
          type: "voice", title: "Talk to the computer: Wellbeing interview",
          prompt: "Practice the conversation with the computer. Choose a role: the computer reads the other part, and you say your lines. Then change roles. Your words are checked with voice recognition.",
          cards: [
            { name: "Student A · Interviewer", tasks: ["Ask what time B gets up and goes to bed.", "Ask *How often do you…?* (exercise, eat fruit).", "Ask *Do you feel stressed?*", "Give one recommendation."] },
            { name: "Student B · Med student", tasks: ["Answer with times.", "Use adverbs of frequency.", "Say how you relax.", "Say thank you."] }
          ],
          language: ["What time do you…?", "How often do you…?", "Do you…?", "I usually / sometimes / never…", "once / twice a week", "You should try to…"],
          model: [
            { who: "A", line: "What time do you go to bed?" },
            { who: "B", line: "I usually go to bed at midnight." },
            { who: "A", line: "How often do you exercise?" },
            { who: "B", line: "I rarely exercise. Maybe once a month." },
            { who: "A", line: "Do you feel stressed?" },
            { who: "B", line: "Yes, I often feel stressed before exams." }
          ],
          seconds: 120,
          checklist: ["ask *How often…?* questions?", "use adverbs in the right place?", "say times with *at*?", "speak about wellbeing?"]
        },
        {
          type: "speak", title: "A day in my life",
          prompt: "Record a one-minute video or audio: \"A day in my life as a medical student\". Describe your routine from morning to night.",
          language: ["Hi! This is my day.", "I get up at…", "Then I…", "In the afternoon…", "I usually / never…", "I go to bed at…"],
          seconds: 60,
          checklist: ["describe the whole day?", "use times?", "use at least three adverbs of frequency?", "speak clearly?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can describe my daily routine with the present simple.", review: "Explanation: Present simple; Writing activity 3" },
    { can: "I can tell the time and use *at, on, in*.", review: "Explanation: Time" },
    { can: "I can put adverbs of frequency in the correct position.", review: "Explanation: Adverbs of frequency; Writing activity 2" },
    { can: "I can ask *How often…?* questions.", review: "Speaking activity 1" },
    { can: "I can understand someone talk about their routine.", review: "Listening activities 1 and 2" },
    { can: "I can understand a short survey report with numbers.", review: "Reading activities 1 and 2" }
  ]
};
