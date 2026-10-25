window.UNIT = {
  slug: "bugs-and-germs",
  title: "Bugs and Germs",
  level: "A2",
  minutes: 55,
  subject: "Microbiology and Virology",
  focus: ["comparatives: smaller than, more dangerous than", "superlatives: the smallest, the most common", "(not) as … as", "bacteria, viruses, fungi and parasites"],
  speakers: { "Andrés": "m", "Ximena": "f", "Teacher": "f", "Dr. Ana": "f" },

  presentation: {
    scene: "🦠🧫🔬🧼",
    situation: "It's **Microbiology and Virology** class. Andrés and Ximena prepare a comparison chart for their exam. What's the difference between a bacterium and a virus?",
    warmup: {
      prompt: "Which of these are caused by a virus? Choose all you think.",
      options: ["the flu", "COVID-19", "tuberculosis", "the common cold", "measles", "a urinary infection", "chickenpox", "athlete's foot", "dengue", "strep throat"],
      response: "Interesting! In this unit you'll compare microorganisms and check your answers."
    },
    dialogueTitle: "Studying together",
    dialogue: [
      { who: "Ximena", line: "OK, bacteria or viruses: which are *smaller*?" },
      { who: "Andrés", line: "Viruses. They're *much smaller than* bacteria. You need an electron microscope to see them." },
      { who: "Ximena", line: "Right. And are viruses *more dangerous than* bacteria?" },
      { who: "Andrés", line: "Not always. Some bacteria are *as dangerous as* viruses. Think of tuberculosis." },
      { who: "Ximena", line: "And which treatment is *the most common* for bacteria?" },
      { who: "Andrés", line: "Antibiotics. But they don't work against viruses." },
      { who: "Ximena", line: "Got it. And *the best* prevention for both? Washing your hands!" }
    ]
  },

  objectives: [
    "I can name the main types of microorganisms and some diseases they cause.",
    "I can compare two microorganisms with comparatives.",
    "I can use superlatives to talk about extremes.",
    "I can use *(not) as … as* to say two things are (not) equal."
  ],

  explanation: {
    vocabTitle: "Microbiology",
    vocab: [
      { word: "bacterium / bacteria", icon: "🦠" }, { word: "virus", icon: "🧬" }, { word: "fungus / fungi", icon: "🍄" },
      { word: "parasite", icon: "🪱" }, { word: "infection", icon: "🤒" }, { word: "disease", icon: "🏥" },
      { word: "contagious", icon: "🤧" }, { word: "spread", icon: "↔️" }, { word: "antibiotic", icon: "💊" },
      { word: "antiviral", icon: "🧪" }, { word: "vaccine", icon: "💉" }, { word: "resistant", icon: "🛡️" },
      { word: "harmless", icon: "😇" }, { word: "harmful", icon: "☠️" }, { word: "culture (petri dish)", icon: "🧫" }
    ],
    grammar: [
      {
        title: "Comparatives",
        head: ["Adjective", "Rule", "Comparative"],
        rows: [
          ["small, fast", "+ *-er than*", "*smaller than*, *faster than*"],
          ["large, safe", "+ *-r than*", "*larger than*, *safer than*"],
          ["big, thin", "double consonant + *-er*", "*bigger than*, *thinner than*"],
          ["easy, tiny", "*-y → -ier*", "*easier than*, *tinier than*"],
          ["dangerous, common", "*more … than*", "*more dangerous than*, *more common than*"],
          ["good / bad", "irregular", "*better than* / *worse than*"]
        ],
        note: "To make it stronger: *much smaller than*, *a lot more common than*."
      },
      {
        title: "Superlatives",
        head: ["Adjective", "Superlative", "Example"],
        rows: [
          ["small", "*the smallest*", "Viruses are *the smallest* microorganisms."],
          ["big", "*the biggest*", "Tapeworms are some of *the biggest* parasites."],
          ["common", "*the most common*", "*The most common* infection is the common cold."],
          ["good / bad", "*the best / the worst*", "*The best* prevention is hand washing."]
        ]
      },
      {
        title: "(Not) as … as",
        head: ["Meaning", "Example"],
        rows: [
          ["equal", "Some bacteria are *as dangerous as* viruses."],
          ["not equal", "A fungal infection is *not as contagious as* the flu."]
        ]
      }
    ],
    watchOut: [
      ["Viruses are more small than bacteria.", "Viruses are smaller than bacteria."],
      ["Bacteria are bigger that viruses.", "Bacteria are bigger than viruses."],
      ["It's the most smallest.", "It's the smallest."],
      ["The flu is more worse than a cold.", "The flu is worse than a cold."],
      ["It's as contagious than measles.", "It's as contagious as measles."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with the comparative or superlative.",
      items: [
        "Bacteria are [[bigger]] (big) than viruses.",
        "Measles is [[more contagious]] (contagious) than the flu.",
        "Hand washing is [[the best]] (good) way to prevent infections.",
        "A cold is not as [[serious]] as pneumonia."
      ]
    }
  },

  skills: {
    listening: {
      intro: "A teacher compares four types of microorganisms. Listen and answer.",
      title: "Four types of germs",
      script: [
        { who: "Teacher", line: "Today we compare four types of germs: bacteria, viruses, fungi and parasites." },
        { who: "Teacher", line: "Viruses are the smallest. They are about a hundred times smaller than bacteria. They can't live outside a cell." },
        { who: "Teacher", line: "Bacteria are bigger, and many of them are harmless. In fact, there are about as many bacterial cells in your body as human cells!" },
        { who: "Teacher", line: "Fungi are bigger than bacteria. Most fungal infections, like athlete's foot, are not as serious as bacterial infections." },
        { who: "Teacher", line: "Parasites are the biggest. Some worms are longer than five meters!" },
        { who: "Teacher", line: "And the most important point: antibiotics only work against bacteria, not against viruses." }
      ],
      activities: [
        {
          type: "match", title: "Match the facts",
          prompt: "Match each germ with the information from the class.",
          pairs: [
            ["viruses", "the smallest; can't live outside a cell"],
            ["bacteria", "many are harmless"],
            ["fungi", "cause athlete's foot"],
            ["parasites", "the biggest; some are longer than five meters"],
            ["antibiotics", "only work against bacteria"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. Are the sentences true or false?",
          items: [
            { s: "Viruses are about ten times smaller than bacteria.", a: false },
            { s: "All bacteria are dangerous.", a: false },
            { s: "Fungi are bigger than bacteria.", a: true },
            { s: "Most fungal infections are more serious than bacterial infections.", a: false },
            { s: "Antibiotics don't work against viruses.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read this article from a student health magazine.",
      title: "Superbugs: the biggest threat?",
      text: [
        { author: "Introduction", body: "Antibiotics are one of the most important discoveries in the history of medicine. But today some bacteria are **stronger** than our medicines. We call them *superbugs*." },
        { author: "The problem", body: "When people take antibiotics for a cold or the flu, or stop the treatment too early, bacteria become **resistant**. Resistant infections are **more difficult** to treat and **more expensive** than normal infections." },
        { author: "The numbers", body: "The World Health Organization says antimicrobial resistance is one of the **biggest** threats to global health. Resistant infections cause more than one million deaths every year." },
        { author: "What can we do?", body: "Use antibiotics only when a doctor prescribes them. Finish the treatment. Get vaccinated: prevention is always **better** and **cheaper** than treatment. And, of course, wash your hands!" }
      ],
      activities: [
        {
          type: "sort", title: "Good or bad practice?",
          prompt: "Sort the actions from the article.",
          bins: ["✅ Prevents resistance", "❌ Causes resistance"],
          items: [
            { text: "finish the treatment", bin: 0 }, { text: "get vaccinated", bin: 0 }, { text: "use antibiotics only with a prescription", bin: 0 },
            { text: "take antibiotics for a cold", bin: 1 }, { text: "stop the treatment early", bin: 1 }, { text: "take antibiotics for the flu", bin: 1 }
          ]
        },
        {
          type: "rewrite", title: "Compare",
          prompt: "Rewrite the sentence with the word in brackets.",
          items: [
            { q: "Resistant infections are difficult to treat. Normal infections are easy. (more difficult)", a: ["Resistant infections are more difficult to treat than normal infections."] },
            { q: "Prevention is cheap. Treatment is expensive. (cheaper)", a: ["Prevention is cheaper than treatment."] },
            { q: "A cold is not serious. Pneumonia is serious. (not as … as)", a: ["A cold is not as serious as pneumonia.", "A cold isn't as serious as pneumonia."] },
            { q: "Resistance is a very big threat. (one of the biggest)", a: ["Resistance is one of the biggest threats.", "Antimicrobial resistance is one of the biggest threats."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice comparisons first, then write a comparison text.",
      activities: [
        {
          type: "tiles", title: "Build the comparisons",
          items: [
            { a: "Viruses are smaller than bacteria." },
            { a: "Measles is the most contagious disease." },
            { a: "A cold is not as serious as the flu." },
            { a: "Prevention is better than treatment." },
            { a: "Parasites are the biggest germs." }
          ]
        },
        {
          type: "gap", title: "Complete the chart",
          prompt: "Complete the comparisons.",
          items: [
            "Tuberculosis is [[more dangerous]] (dangerous) than a cold.",
            "The common cold is [[the most common]] (common) infection in the world.",
            "Chickenpox is [[worse]] (bad) for adults than for children.",
            "In the gut, bacteria are [[more common]] (common) than fungi.",
            "Viruses are [[the smallest]] (small) microorganisms."
          ]
        },
        {
          type: "write", title: "Bacteria vs. viruses",
          prompt: "Write a comparison of two germs or two infections (for example: bacteria vs. viruses, the flu vs. a cold, or dengue vs. COVID-19). Compare size, how they spread, how dangerous they are and the treatment.",
          minWords: 70, maxWords: 120,
          model: "The flu vs. the common cold. Both are viral infections, but the flu is more serious than a cold. The flu starts more quickly, and the fever is usually higher. A cold is not as tiring as the flu: with a cold you can usually go to class. Colds are more common than the flu; adults have two or three colds a year. Antibiotics don't work for either of them. The best prevention for the flu is the vaccine.",
          bank: ["Both are…", "… is more … than…", "… is not as … as…", "The best / the worst…", "… than…", "However,"],
          checklist: [
            "I used at least **three** comparatives.",
            "I used at least **one** superlative.",
            "I used **(not) as … as**.",
            "I wrote **than** (not *that*) after comparatives."
          ]
        }
      ]
    },

    speaking: {
      intro: "Practice with a partner, or play both roles yourself. Then record your evidence.",
      activities: [
        {
          type: "voice", title: "Talk to the computer: Which is worse?",
          prompt: "Practice the conversation with the computer. Choose a role: the computer reads the other part, and you say your lines. Then change roles. Your words are checked with voice recognition.",
          cards: [
            { name: "Student A", tasks: ["Choose a pair.", "Give your opinion with a comparative.", "Give a reason.", "Ask B's opinion."] },
            { name: "Student B", tasks: ["Agree or disagree.", "Use *not as … as*.", "Use a superlative.", "Choose the next pair."] }
          ],
          language: ["I think … is more … than…", "Really? I think…", "… is not as … as…", "In my opinion, the most … is…", "I agree / I disagree because…"],
          model: [
            { who: "A", line: "I think the flu is more dangerous than a cold." },
            { who: "B", line: "I agree. A cold is not as serious as the flu." },
            { who: "A", line: "And which is the most contagious?" },
            { who: "B", line: "Probably the cold. It spreads very easily." },
            { who: "A", line: "What about tuberculosis and pneumonia? Which is easier to treat?" },
            { who: "B", line: "Pneumonia is easier to treat. Tuberculosis needs a longer treatment." },
            { who: "A", line: "You're right. I think tuberculosis is the most serious of all." },
            { who: "B", line: "Maybe, but dengue is more common than tuberculosis in Mexico." }
          ],
          seconds: 120,
          checklist: ["use comparatives correctly?", "use *not as … as*?", "use superlatives?", "give reasons?"]
        },
        {
          type: "speak", title: "Germ fact sheet",
          prompt: "Record a one-minute presentation of a microorganism (e.g. E. coli, the influenza virus, Candida, Giardia). Compare it with other germs.",
          language: ["Today I'm presenting…", "It's a bacterium / virus / fungus / parasite.", "It's smaller / bigger than…", "It's one of the most…", "The best way to prevent it is…"],
          seconds: 60,
          checklist: ["say what type of germ it is?", "use two comparatives?", "use one superlative?", "give a prevention tip?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can name types of microorganisms and some diseases.", review: "Explanation: vocabulary; Listening activity 1" },
    { can: "I can form comparatives with *-er* and *more*.", review: "Explanation: Comparatives; Writing activity 2" },
    { can: "I can use superlatives.", review: "Explanation: Superlatives" },
    { can: "I can use *(not) as … as*.", review: "Explanation: (Not) as … as; Reading activity 2" },
    { can: "I can understand a short article about antibiotic resistance.", review: "Reading activity 1" },
    { can: "I can compare two infections in writing and speaking.", review: "Writing activity 3; Speaking activity 1" }
  ]
};
