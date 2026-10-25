window.UNIT = {
  slug: "a-healthy-plate",
  title: "A Healthy Plate",
  level: "A2",
  minutes: 55,
  subject: "Medical Nutrition",
  focus: ["countable and uncountable nouns", "some / any / a lot of", "How much…? / How many…?", "too much / too many / not enough"],
  speakers: { "Nutritionist": "f", "Mr. Ramírez": "m", "Paulina": "f", "Beto": "m" },

  presentation: {
    scene: "🥗🍎🍞🥛",
    situation: "In **Medical Nutrition**, students learn to ask patients about their diet. A nutritionist talks to Mr. Ramírez, a patient with high blood sugar.",
    warmup: {
      prompt: "What did you eat yesterday? Choose all that are true.",
      options: ["fruit", "vegetables", "tortillas", "bread", "meat", "beans", "soda", "water", "sweets", "fast food", "milk", "coffee"],
      response: "Thanks! In this unit you'll learn to talk about food and diet with patients."
    },
    dialogueTitle: "A nutrition consultation",
    dialogue: [
      { who: "Nutritionist", line: "Mr. Ramírez, what do you usually have for breakfast?" },
      { who: "Mr. Ramírez", line: "I usually have *some* bread and coffee with *a lot of* sugar." },
      { who: "Nutritionist", line: "*How many* spoons of sugar do you use?" },
      { who: "Mr. Ramírez", line: "Three. And I drink *some* soda at lunch." },
      { who: "Nutritionist", line: "*How much* soda do you drink a day?" },
      { who: "Mr. Ramírez", line: "About one liter. I don't eat *any* vegetables, I'm afraid." },
      { who: "Nutritionist", line: "OK. You have *too much* sugar and *not enough* fiber. Let's make a plan together." }
    ]
  },

  objectives: [
    "I can name food groups and common foods.",
    "I can use countable and uncountable nouns with *some, any, a lot of*.",
    "I can ask *How much…? / How many…?* about a patient's diet.",
    "I can give simple diet advice with *too much, too many, not enough*."
  ],

  explanation: {
    vocabTitle: "Food and nutrition",
    vocab: [
      { word: "vegetables", icon: "🥦" }, { word: "fruit", icon: "🍎" }, { word: "beans (legumes)", icon: "🫘" },
      { word: "rice", icon: "🍚" }, { word: "bread", icon: "🍞" }, { word: "meat", icon: "🥩" },
      { word: "fish", icon: "🐟" }, { word: "eggs", icon: "🥚" }, { word: "milk", icon: "🥛" },
      { word: "water", icon: "💧" }, { word: "sugar", icon: "🍬" }, { word: "salt", icon: "🧂" },
      { word: "fat", icon: "🧈" }, { word: "fiber", icon: "🌾" }, { word: "protein", icon: "🍗" }
    ],
    grammar: [
      {
        title: "Countable and uncountable nouns",
        head: ["", "Countable", "Uncountable"],
        rows: [
          ["Examples", "an apple, two eggs, three tortillas", "water, sugar, rice, bread, meat, salt"],
          ["Plural?", "Yes: *apples, eggs*", "No: *water* (not *waters*)"],
          ["a / an", "*an* apple, *a* banana", "No *a / an*: *some* rice"],
          ["Quantity", "*a lot of* eggs", "*a lot of* sugar, *a glass of* water, *a slice of* bread"]
        ],
        note: "To count uncountable things, use containers: *a glass of milk, a cup of coffee, a piece of bread, a spoon of sugar, a can of soda*."
      },
      {
        title: "Some / any / a lot of",
        head: ["", "Example"],
        rows: [
          ["Affirmative: *some*", "I eat *some* fruit every day. There are *some* eggs."],
          ["Negative: *any*", "I don't eat *any* vegetables. I don't drink *any* milk."],
          ["Question: *any*", "Do you eat *any* fish?"],
          ["Large quantity: *a lot of*", "He drinks *a lot of* soda. She eats *a lot of* tortillas."]
        ],
        note: "Offers and requests use *some* in questions: *Would you like some water?*"
      },
      {
        title: "How much / how many; too much / too many / not enough",
        head: ["", "Countable", "Uncountable"],
        rows: [
          ["Question", "*How many* tortillas do you eat?", "*How much* water do you drink?"],
          ["Excess", "You eat *too many* sweets.", "You drink *too much* soda."],
          ["Not sufficient", "You don't eat *enough* vegetables.", "You don't drink *enough* water."]
        ]
      }
    ],
    watchOut: [
      ["How many water do you drink?", "How much water do you drink?"],
      ["I don't eat some vegetables.", "I don't eat any vegetables."],
      ["He eats too much sweets.", "He eats too many sweets."],
      ["I drink three waters a day.", "I drink three glasses of water a day."],
      ["You eat enough not fruit.", "You don't eat enough fruit."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *much, many, some* or *any*.",
      items: [
        "How [[much]] milk do you drink?",
        "How [[many]] eggs do you eat a week?",
        "I don't eat [[any]] fish.",
        "I usually have [[some]] fruit for breakfast."
      ]
    }
  },

  skills: {
    listening: {
      intro: "A medical student asks a patient about his diet with a 24-hour food recall. Listen and answer.",
      title: "What did you eat yesterday?",
      script: [
        { who: "Paulina", line: "Beto, I need to ask about everything you ate yesterday. What did you have for breakfast?" },
        { who: "Beto", line: "Two tamales and a big cup of atole." },
        { who: "Paulina", line: "And did you eat anything in the morning?" },
        { who: "Beto", line: "Yes, a bag of chips and a can of soda." },
        { who: "Paulina", line: "What about lunch?" },
        { who: "Beto", line: "Rice, some chicken and six tortillas. I didn't have any vegetables." },
        { who: "Paulina", line: "How much water did you drink?" },
        { who: "Beto", line: "Not much. Maybe one glass. But I had two more cans of soda." },
        { who: "Paulina", line: "And for dinner?" },
        { who: "Beto", line: "Some sweet bread and coffee with milk." }
      ],
      activities: [
        {
          type: "match", title: "Beto's day",
          prompt: "Match each meal with what Beto ate.",
          pairs: [
            ["breakfast", "two tamales and atole"],
            ["morning snack", "chips and a can of soda"],
            ["lunch", "rice, chicken and six tortillas"],
            ["dinner", "sweet bread and coffee with milk"],
            ["water", "only one glass"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. Are the sentences true or false?",
          items: [
            { s: "Beto ate some vegetables at lunch.", a: false },
            { s: "He drank three cans of soda in total.", a: true },
            { s: "He drank a lot of water.", a: false },
            { s: "He had chicken for lunch.", a: true },
            { s: "He had fruit for dinner.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read this leaflet from the university health center.",
      title: "The healthy plate",
      text: [
        { author: "Half of your plate", body: "Fill half of your plate with **vegetables and fruit**. They have a lot of vitamins, minerals and fiber. Eat at least five portions a day." },
        { author: "A quarter of your plate", body: "**Cereals**: choose whole grains, like brown rice, oats or whole-wheat tortillas. They give you energy." },
        { author: "The other quarter", body: "**Protein**: beans, lentils, fish, chicken or eggs. Eat legumes several times a week and not too much red or processed meat." },
        { author: "Drinks and extras", body: "Drink plenty of plain water. Don't drink too many sugary drinks: one can of soda has about 35 grams of sugar — that's about 7 teaspoons! Use only a little salt and oil." }
      ],
      activities: [
        {
          type: "sort", title: "Countable or uncountable?",
          prompt: "Sort these words from the leaflet.",
          bins: ["Countable", "Uncountable"],
          items: [
            { text: "vegetable", bin: 0 }, { text: "egg", bin: 0 }, { text: "portion", bin: 0 }, { text: "teaspoon", bin: 0 },
            { text: "water", bin: 1 }, { text: "rice", bin: 1 }, { text: "sugar", bin: 1 }, { text: "salt", bin: 1 }
          ]
        },
        {
          type: "gap", title: "Read and complete",
          prompt: "Complete with information from the leaflet.",
          items: [
            "Half of the plate is vegetables and [[fruit]].",
            "Eat at least [[five|5]] portions of fruit and vegetables a day.",
            "A can of soda has about [[35|thirty-five]] grams of sugar.",
            "Use only a [[little]] salt and oil."
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the questions first, then write diet advice.",
      activities: [
        {
          type: "tiles", title: "Diet questions",
          items: [
            { a: "How much water do you drink?" },
            { a: "How many tortillas do you eat?" },
            { a: "Do you eat any vegetables?" },
            { a: "You drink too much soda." },
            { a: "You don't eat enough fiber." }
          ]
        },
        {
          type: "rewrite", title: "Give advice",
          prompt: "Rewrite with *too much, too many* or *not enough*.",
          items: [
            { q: "He eats 10 tortillas a day. (too many)", a: ["He eats too many tortillas."] },
            { q: "She drinks 2 liters of soda a day. (too much)", a: ["She drinks too much soda."] },
            { q: "He drinks only one glass of water. (enough)", a: ["He doesn't drink enough water.", "He does not drink enough water."] },
            { q: "She eats 15 sweets a day. (too many)", a: ["She eats too many sweets."] }
          ]
        },
        {
          type: "write", title: "Diet report and advice",
          prompt: "Write a short report about Beto's diet (from the listening) or about your own diet yesterday. Say what is good, what is too much and what is not enough. Give three pieces of advice.",
          minWords: 70, maxWords: 120,
          model: "Beto's diet. Beto eats a lot of carbohydrates: tamales, rice, tortillas and sweet bread. He drinks too much soda — three cans a day, about 105 grams of sugar! He doesn't drink enough water, and he doesn't eat any fruit or vegetables. The good news is that he eats some protein, like chicken. My advice: drink water, not soda; eat some vegetables at every meal; and have fruit as a snack instead of chips.",
          bank: ["He / She eats a lot of…", "He / She doesn't eat any…", "too much / too many…", "not enough…", "The good news is…", "My advice:"],
          checklist: [
            "I used **some, any** and **a lot of**.",
            "I used **too much / too many** correctly.",
            "I used **not enough**.",
            "I gave **three** pieces of advice."
          ]
        }
      ]
    },

    speaking: {
      intro: "Practice with a partner, or play both roles yourself. Then record your evidence.",
      activities: [
        {
          type: "voice", title: "Talk to the computer: 24-hour food recall",
          prompt: "Practice the conversation with the computer. Choose a role: the computer reads the other part, and you say your lines. Then change roles. Your words are checked with voice recognition.",
          cards: [
            { name: "Student A · Medical student", tasks: ["Ask about breakfast, lunch, dinner and snacks.", "Ask *How much…? / How many…?*", "Ask about water and soda.", "Give two recommendations."] },
            { name: "Student B · Patient", tasks: ["Say what you ate (real or invented).", "Use containers: a glass of, a cup of…", "Use *some* and *any*.", "Ask one question about your diet."] }
          ],
          language: ["What did you have for…?", "How much / How many…?", "Did you eat any…?", "I had some…", "I didn't have any…", "You eat too much / too many…", "Try to eat more…"],
          model: [
            { who: "A", line: "What did you have for breakfast yesterday?" },
            { who: "B", line: "Some eggs and two tortillas, and a cup of coffee." },
            { who: "A", line: "How much sugar do you put in your coffee?" },
            { who: "B", line: "Two spoons." },
            { who: "A", line: "Did you eat any fruit?" },
            { who: "B", line: "No, I didn't have any fruit." }
          ],
          seconds: 150,
          checklist: ["use *how much / how many* correctly?", "use *some / any*?", "use containers?", "give advice?"]
        },
        {
          type: "speak", title: "My healthy plate",
          prompt: "Record a one-minute video showing a healthy meal (a photo or a real plate). Explain what there is and why it's healthy.",
          language: ["This is my healthy plate.", "There are some…", "There is a lot of…", "There isn't any…", "It's healthy because…"],
          seconds: 60,
          checklist: ["name the food groups?", "use countable / uncountable correctly?", "explain why it is healthy?", "speak clearly?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can name food groups and common foods.", review: "Explanation: vocabulary; Reading" },
    { can: "I can tell countable and uncountable nouns apart.", review: "Explanation: Countable and uncountable; Reading activity 1" },
    { can: "I can use *some, any* and *a lot of*.", review: "Explanation: Some / any / a lot of" },
    { can: "I can ask *How much…? / How many…?*", review: "Writing activity 1; Speaking activity 1" },
    { can: "I can understand a patient describe what they ate.", review: "Listening activities 1 and 2" },
    { can: "I can give diet advice with *too much, too many, not enough*.", review: "Writing activities 2 and 3" }
  ]
};
