window.UNIT = {
  slug: "meet-the-body",
  title: "Meet the Body",
  level: "A1",
  minutes: 50,
  subject: "Integral Anatomy",
  focus: ["parts of the body", "have / has", "this / that / these / those", "regular and irregular plurals"],
  speakers: { "Dr. Ruiz": "f", "Iván": "m", "Sofía": "f", "Teacher": "f", "Mateo": "m" },

  presentation: {
    scene: "🦴🫀🧠💪",
    situation: "It's the first day of **Integral Anatomy**. The students are in the lab with a model of the human body. Dr. Ruiz asks some questions.",
    warmup: {
      prompt: "Which of these words do you already know in English? Choose all that you know.",
      options: ["head", "arm", "leg", "hand", "foot", "heart", "bone", "skin", "eye", "ear", "chest", "back"],
      response: "Great start! In this unit you'll learn to name and describe the parts of the body in English."
    },
    dialogueTitle: "In the anatomy lab",
    dialogue: [
      { who: "Dr. Ruiz", line: "Good morning, everybody. *This is* our model. Iván, what's *this*?" },
      { who: "Iván", line: "*That's* the arm. And *these are* the fingers." },
      { who: "Dr. Ruiz", line: "Very good. How many fingers *does* a hand *have*?" },
      { who: "Iván", line: "A hand *has* five fingers: a thumb and four fingers." },
      { who: "Dr. Ruiz", line: "Correct. Sofía, what are *those*?" },
      { who: "Sofía", line: "*Those are* the *feet*. One *foot*, two *feet*!" },
      { who: "Dr. Ruiz", line: "Excellent. The human body *has* 206 bones. Let's start with the upper limb." }
    ]
  },

  objectives: [
    "I can name at least 20 parts of the body in English.",
    "I can use *have* and *has* to describe the body: *The hand has five fingers.*",
    "I can use *this, that, these* and *those* to point at body parts.",
    "I can use regular and irregular plurals: *bone → bones, foot → feet, tooth → teeth*."
  ],

  explanation: {
    vocabTitle: "Parts of the body",
    vocab: [
      { word: "head", icon: "🗣️" }, { word: "eye", icon: "👁️" }, { word: "ear", icon: "👂" },
      { word: "nose", icon: "👃" }, { word: "mouth", icon: "👄" }, { word: "tooth / teeth", icon: "🦷" },
      { word: "neck", icon: "🧣" }, { word: "chest", icon: "🫁" }, { word: "abdomen", icon: "🟫" },
      { word: "arm", icon: "💪" }, { word: "hand", icon: "✋" }, { word: "finger", icon: "☝️" },
      { word: "leg", icon: "🦵" }, { word: "foot / feet", icon: "🦶" }, { word: "bone", icon: "🦴" },
      { word: "heart", icon: "🫀" }, { word: "brain", icon: "🧠" }, { word: "skin", icon: "🖐️" }
    ],
    grammar: [
      {
        title: "Have / has",
        head: ["Subject", "Affirmative", "Negative / Question"],
        rows: [
          ["I / you / we / they", "We *have* two lungs.", "We *don't have* three kidneys. / *Do* we *have* two kidneys?"],
          ["he / she / it", "The hand *has* five fingers.", "The heart *doesn't have* bones. / *Does* the foot *have* 26 bones?"],
          ["Short answers", "Yes, we *do*. / No, we *don't*.", "Yes, it *does*. / No, it *doesn't*."]
        ],
        note: "After *doesn't* and *does* use **have**: *Does it have…?* (not *Does it has…?*)."
      },
      {
        title: "This, that, these, those",
        head: ["", "Near (here)", "Far (there)"],
        rows: [
          ["Singular", "*This* is the elbow.", "*That* is the knee."],
          ["Plural", "*These* are the ribs.", "*Those* are the toes."]
        ],
        note: "Questions: *What's this?* / *What are these?*"
      },
      {
        title: "Plurals",
        head: ["Rule", "Singular", "Plural"],
        rows: [
          ["+ s", "bone, arm, muscle", "bones, arms, muscles"],
          ["+ es (s, sh, ch, x)", "sinus, abscess", "sinuses, abscesses"],
          ["Irregular", "foot, tooth", "*feet, teeth*"],
          ["Latin words", "vertebra, phalanx", "*vertebrae, phalanges*"]
        ],
        note: "In medical English many words come from Latin or Greek: *vertebra / vertebrae*, *bronchus / bronchi*."
      }
    ],
    watchOut: [
      ["The hand have five fingers.", "The hand has five fingers."],
      ["Does it has bones?", "Does it have bones?"],
      ["This are the teeth.", "These are the teeth."],
      ["two foots", "two feet"],
      ["I have 32 tooths.", "I have 32 teeth."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete the sentences.",
      items: [
        "The foot [[has]] (have) 26 bones.",
        "We [[have]] (have) two lungs and one heart.",
        "Look! [[These]] are the ribs. (near, plural)",
        "An adult has 32 [[teeth]] (tooth)."
      ]
    }
  },

  skills: {
    listening: {
      intro: "A teacher describes the body in an anatomy class. Listen and answer.",
      title: "Numbers in the body",
      script: [
        { who: "Teacher", line: "Today let's talk about numbers in the human body." },
        { who: "Teacher", line: "An adult has 206 bones. A baby has more: about 270 bones. Some bones join together when we grow." },
        { who: "Teacher", line: "The hand has 27 bones, and the foot has 26 bones." },
        { who: "Mateo", line: "And how many teeth does an adult have?" },
        { who: "Teacher", line: "Thirty-two teeth, Mateo. A child has twenty." },
        { who: "Teacher", line: "We have two lungs, two kidneys, one liver and one heart." },
        { who: "Teacher", line: "The biggest organ of the body is the skin. And the smallest bone is in the ear!" }
      ],
      activities: [
        {
          type: "match", title: "How many?",
          prompt: "Match the part of the body with the number.",
          pairs: [
            ["bones in an adult", "206"],
            ["bones in a baby", "about 270"],
            ["bones in the hand", "27"],
            ["bones in the foot", "26"],
            ["teeth in an adult", "32"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. Are the sentences true or false?",
          items: [
            { s: "A baby has fewer bones than an adult.", a: false },
            { s: "We have two kidneys.", a: true },
            { s: "A child has 32 teeth.", a: false },
            { s: "The skin is the biggest organ.", a: true },
            { s: "The smallest bone is in the foot.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read this page from a student's anatomy notebook.",
      title: "My anatomy notes: the upper limb",
      text: [
        { author: "Introduction", body: "The upper limb has four parts: the **shoulder**, the **arm**, the **forearm** and the **hand**. It has 32 bones in total." },
        { author: "The arm", body: "The arm has one bone: the **humerus**. It goes from the shoulder to the elbow." },
        { author: "The forearm", body: "The forearm has two bones: the **radius** and the **ulna**. The radius is on the thumb side. The ulna is on the little finger side." },
        { author: "The hand", body: "The hand has three groups of bones: the **carpals** (8 bones in the wrist), the **metacarpals** (5 bones in the palm) and the **phalanges** (14 bones in the fingers). The thumb has two phalanges; the other fingers have three." }
      ],
      activities: [
        {
          type: "sort", title: "Where are they?",
          prompt: "Put each bone in the right part of the upper limb.",
          bins: ["Arm", "Forearm", "Hand"],
          items: [
            { text: "humerus", bin: 0 },
            { text: "radius", bin: 1 }, { text: "ulna", bin: 1 },
            { text: "carpals", bin: 2 }, { text: "metacarpals", bin: 2 }, { text: "phalanges", bin: 2 }
          ]
        },
        {
          type: "gap", title: "Complete the notes",
          prompt: "Write the number or the word from the text.",
          items: [
            "The upper limb has [[four|4]] parts.",
            "The forearm has [[two|2]] bones.",
            "The radius is on the [[thumb]] side.",
            "The wrist has [[eight|8]] carpal bones.",
            "The thumb has two [[phalanges]]."
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the sentences first, then describe a part of the body.",
      activities: [
        {
          type: "tiles", title: "Build the sentences",
          items: [
            { a: "The hand has five fingers." },
            { a: "These are the ribs." },
            { a: "Does the foot have 26 bones?" },
            { a: "We have two lungs." },
            { a: "That is the knee." }
          ]
        },
        {
          type: "rewrite", title: "Make it plural",
          prompt: "Rewrite the sentence in the plural.",
          items: [
            { q: "This is a bone.", a: ["These are bones."] },
            { q: "That is a foot.", a: ["Those are feet."] },
            { q: "This is a tooth.", a: ["These are teeth."] },
            { q: "That is a vertebra.", a: ["Those are vertebrae."] }
          ]
        },
        {
          type: "write", title: "Describe the lower limb",
          prompt: "Write a short description of the lower limb (hip, thigh, knee, leg, ankle, foot) for your anatomy notes. Say what parts and bones it has. Use *has*, *have* and numbers.",
          minWords: 40, maxWords: 80,
          model: "The lower limb has four parts: the hip, the thigh, the leg and the foot. The thigh has one bone: the femur. It is the longest bone in the body. The leg has two bones: the tibia and the fibula. The knee has a small bone: the patella. The foot has 26 bones. We have two lower limbs.",
          bank: ["The lower limb has…", "The thigh has…", "one bone:", "two bones:", "It is…", "We have…"],
          checklist: [
            "I used **has** for one part (*the thigh has…*).",
            "I named at least **four** parts of the lower limb.",
            "I used **numbers** to say how many bones.",
            "Plurals are correct (*bones, feet*)."
          ]
        }
      ]
    },

    speaking: {
      intro: "Practice with a partner, or play both roles yourself. Then record your evidence.",
      activities: [
        {
          type: "voice", title: "Talk to the computer: What's this?",
          prompt: "Practice the conversation with the computer. Choose a role: the computer reads the other part, and you say your lines. Then change roles. Your words are checked with voice recognition.",
          cards: [
            { name: "Student A · Teacher", tasks: ["Point and ask *What's this?*", "Point and ask *What are these?*", "Ask *How many… does it have?*", "Say *Very good!* or correct your partner."] },
            { name: "Student B · Student", tasks: ["Answer with *This is… / These are…*", "Use the correct plural.", "Answer the *How many* question.", "Ask one question to your partner."] }
          ],
          language: ["What's this?", "What are these / those?", "This is the…", "These are the…", "How many bones does it have?", "It has…"],
          model: [
            { who: "A", line: "What's this?" },
            { who: "B", line: "That's the elbow." },
            { who: "A", line: "Good. And what are these?" },
            { who: "B", line: "These are the toes." },
            { who: "A", line: "How many bones does the foot have?" },
            { who: "B", line: "It has 26 bones." }
          ],
          seconds: 90,
          checklist: ["use *this / these* correctly?", "use *has / have* correctly?", "say the plurals correctly?", "pronounce the body words clearly?"]
        },
        {
          type: "speak", title: "My anatomy model",
          prompt: "Record a one-minute presentation of a part of the body (the head, the upper limb or the lower limb). Point at a picture and name the parts.",
          language: ["Hello, my name is…", "Today I'm going to present…", "This is the…", "It has… bones.", "These are the…", "Thank you!"],
          seconds: 60,
          checklist: ["name at least six parts?", "use numbers?", "use *this / these*?", "speak clearly?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can name at least 20 parts of the body in English.", review: "Explanation: vocabulary" },
    { can: "I can use *has* and *have* to describe the body.", review: "Explanation: Have / has; Writing activity 1" },
    { can: "I can use *this, that, these* and *those*.", review: "Explanation: This, that, these, those" },
    { can: "I can use irregular plurals like *feet* and *teeth*.", review: "Explanation: Plurals; Writing activity 2" },
    { can: "I can understand numbers in a short anatomy talk.", review: "Listening activities 1 and 2" },
    { can: "I can describe the bones of a limb in a short text.", review: "Reading; Writing activity 3" }
  ]
};
