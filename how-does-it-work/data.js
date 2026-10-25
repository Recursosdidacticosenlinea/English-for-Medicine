window.UNIT = {
  slug: "how-does-it-work",
  title: "How Does It Work?",
  level: "A1",
  minutes: 55,
  subject: "Physiology",
  focus: ["present simple: he / she / it (-s, -es, -ies)", "does / doesn't", "organs and their functions", "verbs: pump, carry, filter, digest, breathe"],
  speakers: { "Dr. Ana": "f", "Nico": "m", "Mariana": "f", "Teacher": "f" },

  presentation: {
    scene: "🫀🫁🧠🩸",
    situation: "It's **Physiology** class. Dr. Ana asks the students to explain what each organ does.",
    warmup: {
      prompt: "Which organs do you know in English? Choose all that you know.",
      options: ["heart", "lungs", "liver", "kidneys", "stomach", "brain", "intestines", "pancreas", "skin", "bladder", "spleen", "thyroid"],
      response: "Very good! In this unit you'll explain how the body works in simple English."
    },
    dialogueTitle: "In the physiology class",
    dialogue: [
      { who: "Dr. Ana", line: "Nico, what *does* the heart *do*?" },
      { who: "Nico", line: "The heart *pumps* blood to the whole body." },
      { who: "Dr. Ana", line: "Right. And the blood? What *does* it *carry*?" },
      { who: "Nico", line: "It *carries* oxygen and nutrients to the cells." },
      { who: "Dr. Ana", line: "Mariana, *does* the liver *produce* insulin?" },
      { who: "Mariana", line: "No, it *doesn't*. The pancreas *produces* insulin. The liver *filters* the blood and *makes* bile." },
      { who: "Dr. Ana", line: "Excellent. Each organ *has* a job. Let's see how they work together." }
    ]
  },

  objectives: [
    "I can name the main organs of the body and their systems.",
    "I can use the present simple with *he / she / it* and spell *-s / -es / -ies*.",
    "I can ask and answer *What does… do? Does it…?*",
    "I can explain the function of an organ in simple sentences."
  ],

  explanation: {
    vocabTitle: "Organs and functions",
    vocab: [
      { word: "heart → pumps", icon: "🫀" }, { word: "lungs → breathe", icon: "🫁" }, { word: "brain → controls", icon: "🧠" },
      { word: "stomach → digests", icon: "🍔" }, { word: "liver → filters", icon: "🟤" }, { word: "kidneys → clean", icon: "🫘" },
      { word: "blood → carries", icon: "🩸" }, { word: "muscles → move", icon: "💪" }, { word: "skin → protects", icon: "🛡️" },
      { word: "pancreas → produces", icon: "🧪" }, { word: "oxygen", icon: "💨" }, { word: "nutrients", icon: "🥗" },
      { word: "waste", icon: "🗑️" }, { word: "urine", icon: "💧" }, { word: "system", icon: "⚙️" }
    ],
    grammar: [
      {
        title: "Present simple: he / she / it",
        head: ["", "Example"],
        rows: [
          ["Affirmative", "The heart *pumps* blood."],
          ["Negative", "The heart *doesn't digest* food."],
          ["Question", "*Does* the stomach *digest* food? — Yes, it *does*."],
          ["Wh- question", "What *does* the liver *do*? Where *does* digestion *start*?"]
        ],
        note: "Use the present simple for facts and things that are always true."
      },
      {
        title: "Spelling: -s, -es, -ies",
        head: ["Rule", "Examples"],
        rows: [
          ["most verbs: + *s*", "pump → *pumps*, control → *controls*, filter → *filters*"],
          ["-s, -sh, -ch, -x, -o: + *es*", "pass → *passes*, push → *pushes*, do → *does*, go → *goes*"],
          ["consonant + y: *-ies*", "carry → *carries*, supply → *supplies*"],
          ["irregular", "have → *has*"]
        ],
        note: "After *does / doesn't*, no *-s*: *Does it carry…?* (not *Does it carries…?*)."
      }
    ],
    watchOut: [
      ["The heart pump blood.", "The heart pumps blood."],
      ["The blood carrys oxygen.", "The blood carries oxygen."],
      ["The liver don't produce insulin.", "The liver doesn't produce insulin."],
      ["Does the stomach digests food?", "Does the stomach digest food?"],
      ["What do the brain do?", "What does the brain do?"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with the verb in the present simple.",
      items: [
        "The brain [[controls]] (control) the body.",
        "Blood [[carries]] (carry) oxygen.",
        "The stomach [[doesn't|does not]] (not / filter) blood.",
        "What [[does]] the pancreas produce?"
      ]
    }
  },

  skills: {
    listening: {
      intro: "A teacher explains the journey of food in the digestive system. Listen and answer.",
      title: "The journey of a sandwich",
      script: [
        { who: "Teacher", line: "Let's follow a sandwich through the digestive system." },
        { who: "Teacher", line: "Digestion starts in the mouth. The teeth cut the food and saliva makes it soft." },
        { who: "Teacher", line: "The food goes down the esophagus to the stomach. The stomach mixes the food with acid." },
        { who: "Teacher", line: "Then the food passes to the small intestine. The small intestine absorbs the nutrients. It's about six meters long!" },
        { who: "Teacher", line: "The liver produces bile, and the pancreas sends enzymes. They help the small intestine." },
        { who: "Teacher", line: "Finally, the large intestine absorbs water, and the body eliminates the waste." }
      ],
      activities: [
        {
          type: "match", title: "Who does what?",
          prompt: "Match the organ with its function in digestion.",
          pairs: [
            ["the mouth", "Digestion starts here."],
            ["the stomach", "It mixes food with acid."],
            ["the small intestine", "It absorbs nutrients."],
            ["the liver", "It produces bile."],
            ["the large intestine", "It absorbs water."]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. Are the sentences true or false?",
          items: [
            { s: "Digestion starts in the stomach.", a: false },
            { s: "Saliva makes the food soft.", a: true },
            { s: "The small intestine is about six meters long.", a: true },
            { s: "The pancreas produces bile.", a: false },
            { s: "The large intestine absorbs nutrients and fat.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read this page from a physiology fact book.",
      title: "Amazing organs",
      text: [
        { author: "The heart", body: "The heart is a muscle. It **beats** about 100,000 times a day and pumps about 7,000 liters of blood. It has four chambers: two atria and two ventricles." },
        { author: "The lungs", body: "We breathe about 20,000 times a day. The lungs take oxygen from the air and eliminate carbon dioxide. The right lung has three lobes; the left lung has only two, because the heart needs space." },
        { author: "The kidneys", body: "Each kidney filters about 90 liters of blood every day. The kidneys clean the blood and produce urine. A person can live with only one kidney." },
        { author: "The brain", body: "The brain weighs about 1.4 kilograms, but it uses 20% of the body's energy. It controls movement, thoughts, memory and emotions." }
      ],
      activities: [
        {
          type: "sort", title: "Which organ?",
          prompt: "Put each fact with the right organ.",
          bins: ["Heart", "Lungs", "Kidneys", "Brain"],
          items: [
            { text: "has four chambers", bin: 0 }, { text: "beats 100,000 times a day", bin: 0 },
            { text: "eliminate carbon dioxide", bin: 1 }, { text: "the left one has two lobes", bin: 1 },
            { text: "produce urine", bin: 2 }, { text: "filter 90 liters a day", bin: 2 },
            { text: "uses 20% of the energy", bin: 3 }, { text: "controls memory", bin: 3 }
          ]
        },
        {
          type: "rewrite", title: "Ask about the organs",
          prompt: "Write the question for each answer.",
          items: [
            { q: "It pumps blood. (What / the heart)", a: ["What does the heart do?"] },
            { q: "Yes, it does. It produces urine. (Does / the kidney)", a: ["Does the kidney produce urine?"] },
            { q: "About 1.4 kilograms. (How much / the brain / weigh)", a: ["How much does the brain weigh?"] },
            { q: "No, it doesn't. It has two lobes. (Does / the left lung / have three lobes)", a: ["Does the left lung have three lobes?"] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the sentences first, then write an organ profile.",
      activities: [
        {
          type: "tiles", title: "Build the sentences",
          items: [
            { a: "The heart pumps blood to the body." },
            { a: "What does the liver do?" },
            { a: "The stomach doesn't absorb nutrients." },
            { a: "Blood carries oxygen to the cells." },
            { a: "Does the pancreas produce insulin?" }
          ]
        },
        {
          type: "gap", title: "Complete the profile",
          prompt: "Complete with the correct form of the verb.",
          items: [
            "The skin [[covers]] (cover) the whole body.",
            "It [[protects]] (protect) us from bacteria.",
            "It [[doesn't|does not]] (not / pump) blood.",
            "It [[controls]] (control) body temperature with sweat.",
            "It [[has]] (have) three layers."
          ]
        },
        {
          type: "write", title: "Organ profile",
          prompt: "Write a profile of an organ for a physiology poster. Say where it is, what system it is part of, what it does and one amazing fact. Use *he / she / it* forms.",
          minWords: 50, maxWords: 90,
          model: "The liver. The liver is in the abdomen, on the right side, under the diaphragm. It is part of the digestive system. It is the biggest internal organ: it weighs about 1.5 kilograms. The liver filters the blood, stores vitamins and produces bile. It doesn't produce insulin. Amazing fact: the liver can grow again after an injury!",
          bank: ["The … is in the…", "It is part of the … system.", "It + verb-s", "It doesn't…", "Amazing fact:"],
          checklist: [
            "I said **where** the organ is.",
            "I used at least **four** verbs with *-s / -es / -ies*.",
            "I used **doesn't** once.",
            "I included an **amazing fact**."
          ]
        }
      ]
    },

    speaking: {
      intro: "Practice with a partner, or play both roles yourself. Then record your evidence.",
      activities: [
        {
          type: "voice", title: "Talk to the computer: Guess the organ",
          prompt: "Practice the conversation with the computer. Choose a role: the computer reads the other part, and you say your lines. Then change roles. Your words are checked with voice recognition.",
          cards: [
            { name: "Student A · Thinker", tasks: ["Choose an organ (don't say it!).", "Answer *Yes, it does / No, it doesn't*.", "Give a clue if B needs help.", "Say *Correct!* at the end."] },
            { name: "Student B · Guesser", tasks: ["Ask *Is it in the chest / abdomen / head?*", "Ask *Does it…?* questions.", "Ask maximum 8 questions.", "Guess the organ."] }
          ],
          language: ["Is it in the…?", "Does it pump / filter / produce…?", "Is it part of the … system?", "Yes, it does. / No, it doesn't.", "Is it the…?"],
          model: [
            { who: "B", line: "Is it in the abdomen?" },
            { who: "A", line: "Yes, it is." },
            { who: "B", line: "Does it digest food?" },
            { who: "A", line: "No, it doesn't." },
            { who: "B", line: "Does it produce urine?" },
            { who: "A", line: "Yes, it does!" },
            { who: "B", line: "Is it the kidney?" },
            { who: "A", line: "Correct!" }
          ],
          seconds: 120,
          checklist: ["ask questions with *Does it…?*", "answer with *does / doesn't*?", "use function verbs (pump, filter…)?", "guess the organ?"]
        },
        {
          type: "speak", title: "Explain it simply",
          prompt: "Record a one-minute explanation of how one system works (circulatory, respiratory or digestive). Imagine you are explaining it to a child.",
          language: ["Today I'm going to explain…", "First, the…", "Then, it goes to…", "The … pumps / carries / filters…", "That's how it works!"],
          seconds: 60,
          checklist: ["name at least three organs?", "use *-s* with he / she / it?", "use sequencers?", "explain in simple words?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can name the main organs and what they do.", review: "Explanation: vocabulary; Reading activity 1" },
    { can: "I can use the present simple with *he / she / it*.", review: "Explanation: Present simple; Writing activity 2" },
    { can: "I can spell verbs with *-s, -es, -ies*.", review: "Explanation: Spelling" },
    { can: "I can ask *What does… do? Does it…?*", review: "Reading activity 2; Speaking activity 1" },
    { can: "I can follow a simple explanation of a body system.", review: "Listening activities 1 and 2" },
    { can: "I can write a short profile of an organ.", review: "Writing activity 3" }
  ]
};
