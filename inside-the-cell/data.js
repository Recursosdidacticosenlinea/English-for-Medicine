window.UNIT = {
  slug: "inside-the-cell",
  title: "Inside the Cell",
  level: "A1",
  minutes: 50,
  subject: "Cell Biology",
  focus: ["there is / there are", "prepositions of place: in, inside, around, between, next to", "parts of the cell", "a / an / some / many"],
  speakers: { "Lucía": "f", "Omar": "m", "Teacher": "f", "Guide": "m" },

  presentation: {
    scene: "🔬🧫🧬🦠",
    situation: "It's the **Cell Biology** lab. Lucía and Omar look at a cell under the microscope. What can they see?",
    warmup: {
      prompt: "What can you see under a microscope? Choose all that you think are true.",
      options: ["cells", "bacteria", "blood cells", "the nucleus", "DNA molecules", "hair", "a virus (with a normal microscope)", "skin cells", "plant cells", "salt crystals"],
      response: "Good ideas! In this unit you'll learn to describe what there is inside a cell."
    },
    dialogueTitle: "At the microscope",
    dialogue: [
      { who: "Lucía", line: "Omar, look! *There's* a big round thing *in* the middle." },
      { who: "Omar", line: "That's the nucleus. *There's* DNA *inside* the nucleus." },
      { who: "Lucía", line: "*Are there* any mitochondria?" },
      { who: "Omar", line: "Yes, *there are* many small mitochondria *around* the nucleus." },
      { who: "Lucía", line: "And what's this line *around* the cell?" },
      { who: "Omar", line: "That's the cell membrane. *There isn't* a cell wall — it's an animal cell." },
      { who: "Lucía", line: "Cool! Let's draw it for the lab report." }
    ]
  },

  objectives: [
    "I can name the main parts of an animal cell.",
    "I can use *there is / there are* to describe what is in a cell.",
    "I can use prepositions of place to say where things are.",
    "I can describe a simple diagram and label it."
  ],

  explanation: {
    vocabTitle: "Parts of the cell and the lab",
    vocab: [
      { word: "cell", icon: "🟢" }, { word: "nucleus", icon: "⚪" }, { word: "membrane", icon: "⭕" },
      { word: "cytoplasm", icon: "💧" }, { word: "mitochondria", icon: "🔋" }, { word: "ribosome", icon: "🔹" },
      { word: "DNA", icon: "🧬" }, { word: "chromosome", icon: "✖️" }, { word: "microscope", icon: "🔬" },
      { word: "slide", icon: "🪟" }, { word: "round", icon: "🔵" }, { word: "oval", icon: "🥚" },
      { word: "small / tiny", icon: "🤏" }, { word: "large", icon: "🐘" }, { word: "label", icon: "🏷️" }
    ],
    grammar: [
      {
        title: "There is / there are",
        head: ["", "Singular", "Plural"],
        rows: [
          ["Affirmative", "*There's* a nucleus in the cell.", "*There are* many ribosomes."],
          ["Negative", "*There isn't* a cell wall.", "*There aren't* any chloroplasts."],
          ["Question", "*Is there* a nucleus?", "*Are there* any mitochondria?"],
          ["Short answer", "Yes, *there is*. / No, *there isn't*.", "Yes, *there are*. / No, *there aren't*."]
        ],
        note: "Use *any* in negatives and questions with plurals: *Are there any…? There aren't any…*"
      },
      {
        title: "Prepositions of place",
        head: ["Preposition", "Example"],
        rows: [
          ["*in / inside*", "There is DNA *inside* the nucleus."],
          ["*in the middle of*", "The nucleus is *in the middle of* the cell."],
          ["*around*", "The membrane is *around* the cell."],
          ["*between*", "The cytoplasm is *between* the nucleus and the membrane."],
          ["*next to / near*", "There's a ribosome *next to* the mitochondrion."]
        ],
        note: "One *mitochondrion*, two *mitochondria*. One *nucleus*, two *nuclei*."
      }
    ],
    watchOut: [
      ["There are a nucleus.", "There is a nucleus."],
      ["There is many ribosomes.", "There are many ribosomes."],
      ["Have a membrane around the cell.", "There is a membrane around the cell."],
      ["Are there some mitochondria?", "Are there any mitochondria?"],
      ["The DNA is in inside the nucleus.", "The DNA is inside the nucleus."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *is, are, isn't, aren't* or a preposition.",
      items: [
        "There [[is|'s]] a nucleus in the middle of the cell.",
        "There [[are]] many mitochondria in a muscle cell.",
        "There [[isn't|is not]] a cell wall in an animal cell.",
        "The membrane is [[around]] the cell."
      ]
    }
  },

  skills: {
    listening: {
      intro: "A guide at a science museum describes a giant model of a cell. Listen and answer.",
      title: "The giant cell",
      script: [
        { who: "Guide", line: "Welcome to the giant cell! Today we are inside a human cell." },
        { who: "Guide", line: "Around us there is a thin membrane. It controls what goes in and out." },
        { who: "Guide", line: "Inside the membrane there is cytoplasm. It's like a gel." },
        { who: "Guide", line: "In the middle of the cell there is a big round nucleus. Inside the nucleus there are 46 chromosomes." },
        { who: "Guide", line: "Look at these oval structures. They are mitochondria. There are hundreds of mitochondria in a muscle cell. They make energy." },
        { who: "Guide", line: "There aren't any chloroplasts here. Chloroplasts are only in plant cells." }
      ],
      activities: [
        {
          type: "match", title: "What does it do?",
          prompt: "Match the part with the information.",
          pairs: [
            ["membrane", "controls what goes in and out"],
            ["cytoplasm", "is like a gel"],
            ["nucleus", "has 46 chromosomes"],
            ["mitochondria", "make energy"],
            ["chloroplasts", "are only in plant cells"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. Are the sentences true or false?",
          items: [
            { s: "The membrane is thick.", a: false },
            { s: "The nucleus is in the middle of the cell.", a: true },
            { s: "There are 23 chromosomes in the nucleus.", a: false },
            { s: "There are many mitochondria in a muscle cell.", a: true },
            { s: "There are chloroplasts in a human cell.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read the description of three cells from a lab report.",
      title: "Three cells under the microscope",
      text: [
        { author: "Red blood cell", body: "A red blood cell is small and round. It is red because there is **hemoglobin** inside. There isn't a nucleus in a mature red blood cell. There are millions of red blood cells in one drop of blood." },
        { author: "Neuron", body: "A neuron is a nerve cell. There is a cell body with a nucleus, and there are many short branches called **dendrites**. There is one long part called the **axon**." },
        { author: "Plant cell", body: "A plant cell is rectangular. There is a cell **wall** around the membrane, and there are green **chloroplasts** in the cytoplasm. There is a big **vacuole** in the middle." }
      ],
      activities: [
        {
          type: "sort", title: "Which cell is it?",
          prompt: "Put each description with the right cell.",
          bins: ["Red blood cell", "Neuron", "Plant cell"],
          items: [
            { text: "There's hemoglobin inside.", bin: 0 }, { text: "There isn't a nucleus.", bin: 0 },
            { text: "There are many dendrites.", bin: 1 }, { text: "There is a long axon.", bin: 1 },
            { text: "There is a cell wall.", bin: 2 }, { text: "There are chloroplasts.", bin: 2 }
          ]
        },
        {
          type: "rewrite", title: "Ask about the cells",
          prompt: "Write the question with *Is there…?* or *Are there any…?*",
          items: [
            { q: "a nucleus / in a red blood cell", a: ["Is there a nucleus in a red blood cell?"] },
            { q: "dendrites / in a neuron", a: ["Are there any dendrites in a neuron?", "Are there dendrites in a neuron?"] },
            { q: "a cell wall / in a plant cell", a: ["Is there a cell wall in a plant cell?"] },
            { q: "chloroplasts / in a neuron", a: ["Are there any chloroplasts in a neuron?", "Are there chloroplasts in a neuron?"] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the sentences first, then describe a cell.",
      activities: [
        {
          type: "tiles", title: "Build the sentences",
          items: [
            { a: "There is a nucleus in the middle." },
            { a: "There are many ribosomes in the cytoplasm." },
            { a: "Is there a cell wall?" },
            { a: "The membrane is around the cell." },
            { a: "There aren't any chloroplasts." }
          ]
        },
        {
          type: "gap", title: "Complete the lab report",
          prompt: "Complete with *there is, there are* or a preposition.",
          items: [
            "This is a skin cell. [[There is|There's]] a membrane around it.",
            "[[There is|There's]] a nucleus in the middle [[of]] the cell.",
            "[[There are]] some mitochondria near the nucleus.",
            "The cytoplasm is [[between]] the nucleus and the membrane."
          ]
        },
        {
          type: "write", title: "Describe a cell",
          prompt: "Choose a cell (a muscle cell, a sperm cell, a white blood cell, a bacterium…). Look at a picture and describe it for a lab report: its shape, its size and what there is inside.",
          minWords: 40, maxWords: 80,
          model: "This is a white blood cell. It is round and a little bigger than a red blood cell. There is a big nucleus in the middle of the cell. The nucleus has three or four parts. There is a membrane around the cell. There are small granules in the cytoplasm. White blood cells fight infections.",
          bank: ["This is a…", "It is round / oval / long.", "There is…", "There are…", "in the middle of", "around", "next to"],
          checklist: [
            "I described the **shape** and **size**.",
            "I used **there is** and **there are**.",
            "I used at least **two prepositions** of place.",
            "I named at least **three** parts of the cell."
          ]
        }
      ]
    },

    speaking: {
      intro: "Practice with a partner, or play both roles yourself. Then record your evidence.",
      activities: [
        {
          type: "voice", title: "Talk to the computer: Describe the cell",
          prompt: "Practice the conversation with the computer. Choose a role: the computer reads the other part, and you say your lines. Then change roles. Your words are checked with voice recognition.",
          cards: [
            { name: "Student A · Describer", tasks: ["Say what type of cell it is.", "Describe the shape.", "Say what there is inside and where.", "Answer B's questions."] },
            { name: "Student B · Drawer", tasks: ["Listen to the description.", "Ask *Is there…? Are there any…?*", "Ask *Where is…?*", "Draw the cell after the conversation."] }
          ],
          language: ["It's a… cell.", "It's round / oval.", "There's a… in the middle.", "There are some…", "Is there a…?", "Where is the…?", "It's next to / around…"],
          model: [
            { who: "A", line: "It's a plant cell. It's rectangular." },
            { who: "B", line: "Is there a nucleus?" },
            { who: "A", line: "Yes, there is. It's next to the wall, on the left." },
            { who: "B", line: "Are there any chloroplasts?" },
            { who: "A", line: "Yes, there are many small green chloroplasts." }
          ],
          seconds: 120,
          checklist: ["use *there is / there are*?", "ask questions with *any*?", "use prepositions of place?", "draw a similar cell?"]
        },
        {
          type: "speak", title: "My cell model",
          prompt: "Record a one-minute presentation of a cell model or diagram (you can make one with paper or play dough!). Say what there is and where.",
          language: ["This is my model of a…", "There is… in the middle.", "Around the… there is…", "There are many…", "This part is important because…"],
          seconds: 60,
          checklist: ["name at least four parts?", "use *there is / there are*?", "say where things are?", "speak clearly?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can name the main parts of an animal cell.", review: "Explanation: vocabulary; Listening activity 1" },
    { can: "I can use *there is / there are* in affirmative and negative sentences.", review: "Explanation: There is / there are" },
    { can: "I can ask *Is there…? / Are there any…?*", review: "Reading activity 2" },
    { can: "I can use prepositions of place to say where things are.", review: "Explanation: Prepositions; Writing activity 2" },
    { can: "I can understand a short description of different cells.", review: "Reading activity 1" },
    { can: "I can describe a cell so my partner can draw it.", review: "Speaking activity 1" }
  ]
};
