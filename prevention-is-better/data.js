window.UNIT = {
  slug: "prevention-is-better",
  title: "Prevention Is Better",
  level: "B1",
  minutes: 60,
  subject: "Public Health and Epidemiology",
  focus: ["first conditional: if + present, will", "unless, as soon as, when", "will / won't for predictions", "vocabulary of public health campaigns and epidemiology"],
  speakers: { "Daniela": "f", "Emilio": "m", "Dr. Ana": "f", "Presenter": "m", "Brigade leader": "f" },

  presentation: {
    scene: "📢🦟💉📊",
    situation: "The **Public Health** class is planning a dengue prevention campaign for a community in Puebla. Daniela and Emilio discuss their ideas.",
    warmup: {
      prompt: "Which of these are public health actions? Choose all that you think.",
      options: ["vaccination campaigns", "clean water", "removing standing water", "treating one patient in a private clinic", "taxes on soda", "health education in schools", "seatbelt laws", "food safety inspections", "plastic surgery"],
      response: "Good thinking! Public health protects whole populations. In this unit you'll plan a prevention campaign."
    },
    dialogueTitle: "Planning the campaign",
    dialogue: [
      { who: "Daniela", line: "*If* we *remove* the standing water, the mosquitoes *won't have* a place to breed." },
      { who: "Emilio", line: "True, but people *won't do* it *unless* they *understand* why." },
      { who: "Daniela", line: "So we need education first. *If* we *visit* the schools, the children *will tell* their parents." },
      { who: "Emilio", line: "Good idea. And *as soon as* the rainy season *starts*, the cases *will increase*." },
      { who: "Daniela", line: "Then we need to start now. *What will happen if* we *don't*?" },
      { who: "Emilio", line: "The clinics *will be* full in August. Let's prepare the posters this week." }
    ]
  },

  objectives: [
    "I can use the first conditional to explain the consequences of health actions.",
    "I can use *unless, when* and *as soon as* in future time clauses.",
    "I can understand basic epidemiology terms: incidence, outbreak, risk factor.",
    "I can design and present a short prevention campaign."
  ],

  explanation: {
    vocabTitle: "Public health and epidemiology",
    vocab: [
      { word: "prevention", icon: "🛡️" }, { word: "outbreak", icon: "💥" }, { word: "epidemic", icon: "📈" },
      { word: "pandemic", icon: "🌍" }, { word: "incidence", icon: "🆕" }, { word: "prevalence", icon: "👥" },
      { word: "risk factor", icon: "⚠️" }, { word: "vector (mosquito)", icon: "🦟" }, { word: "breed", icon: "🥚" },
      { word: "screening", icon: "🔍" }, { word: "vaccination coverage", icon: "💉" }, { word: "herd immunity", icon: "🐑" },
      { word: "campaign", icon: "📢" }, { word: "community", icon: "🏘️" }, { word: "spread", icon: "↔️" }
    ],
    grammar: [
      {
        title: "First conditional",
        head: ["If clause (present simple)", "Main clause (will / won't + verb)"],
        rows: [
          ["*If* we *vaccinate* 95% of children,", "measles *won't spread*."],
          ["*If* people *don't wash* their hands,", "infections *will increase*."],
          ["*What will happen*", "*if* coverage *falls*?"]
        ],
        note: "Use the first conditional for real or possible future situations. **Never** *will* in the *if* clause: *If it rains…* (not *If it will rain…*). You can also use *may / might / can* in the main clause."
      },
      {
        title: "Unless, when, as soon as",
        head: ["Word", "Meaning", "Example"],
        rows: [
          ["*unless*", "if … not", "Cases *will rise unless* we *act* now. (= if we don't act)"],
          ["*when*", "it is sure to happen", "*When* the rains *start*, mosquitoes *will breed*."],
          ["*as soon as*", "immediately when", "We*'ll start* the campaign *as soon as* the posters *arrive*."]
        ],
        note: "After *when, as soon as, unless, before, after* use the **present** for the future."
      },
      {
        title: "Talking about data",
        head: ["Expression", "Example"],
        rows: [
          ["*increase / rise / go up*", "Cases *increased* by 20%."],
          ["*decrease / fall / go down*", "Deaths *fell* after the campaign."],
          ["*per 100,000 inhabitants*", "The incidence was 45 cases *per 100,000 inhabitants*."]
        ]
      }
    ],
    watchOut: [
      ["If people will get vaccinated, the disease won't spread.", "If people get vaccinated, the disease won't spread."],
      ["Unless we don't act, cases will rise.", "Unless we act, cases will rise."],
      ["As soon as the rains will start…", "As soon as the rains start…"],
      ["If we don't do nothing…", "If we don't do anything…"],
      ["The cases will increment.", "The cases will increase."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with the correct form.",
      items: [
        "If we [[remove]] (remove) standing water, there [[will be|'ll be]] fewer mosquitoes.",
        "Cases will rise [[unless]] people use repellent.",
        "We'll call the families as soon as the results [[arrive]] (arrive).",
        "If coverage falls, measles [[will come|'ll come]] (come) back."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a radio interview with an epidemiologist about the dengue season.",
      title: "Ready for dengue season?",
      script: [
        { who: "Presenter", line: "Good morning. With us today is Dr. Ana Méndez, an epidemiologist. Doctor, why are we talking about dengue now?" },
        { who: "Dr. Ana", line: "Because the rainy season is starting. When it rains, water collects in tires, buckets and plant pots, and the Aedes mosquito breeds there." },
        { who: "Presenter", line: "Will this year be worse than last year?" },
        { who: "Dr. Ana", line: "It's difficult to say. Last year the incidence in our state was about 40 cases per 100,000 inhabitants. If temperatures stay high, we'll probably see more cases." },
        { who: "Presenter", line: "What can families do?" },
        { who: "Dr. Ana", line: "The most important thing is to clean the patio once a week. If there is no standing water, the mosquitoes won't breed. Also use repellent and mosquito nets." },
        { who: "Presenter", line: "And when should people see a doctor?" },
        { who: "Dr. Ana", line: "As soon as they have a high fever, strong pain behind the eyes or muscle pain. And please, don't take aspirin or ibuprofen unless a doctor tells you, because they increase the risk of bleeding." }
      ],
      activities: [
        {
          type: "match", title: "Causes and consequences",
          prompt: "Match the condition with the consequence the doctor mentions.",
          pairs: [
            ["When it rains,", "water collects in tires and buckets."],
            ["If temperatures stay high,", "we'll probably see more cases."],
            ["If there is no standing water,", "mosquitoes won't breed."],
            ["As soon as you have a high fever,", "see a doctor."],
            ["Don't take aspirin", "unless a doctor tells you."]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. Are the sentences true or false?",
          items: [
            { s: "The dry season is starting.", a: false },
            { s: "Last year's incidence was about 40 per 100,000.", a: true },
            { s: "Families should clean the patio once a month.", a: false },
            { s: "Pain behind the eyes is a warning symptom.", a: true },
            { s: "Ibuprofen is a good choice for dengue fever.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read this article from a public health newsletter.",
      title: "Why vaccination coverage matters",
      text: [
        { author: "The idea", body: "Vaccines protect the person who receives them, but they also protect the community. When enough people are immune, a virus can't find new hosts and stops spreading. This is called **herd immunity**." },
        { author: "The numbers", body: "For measles, one of the most contagious diseases, about **95%** of the population needs to be vaccinated. If coverage falls below that level, outbreaks will appear, especially in schools and crowded places." },
        { author: "The risk", body: "In recent years, several countries in the Americas have had measles outbreaks after coverage decreased. Babies, pregnant women and people with weak immune systems are at the highest risk, because many of them can't receive the vaccine." },
        { author: "What health workers can do", body: "Check vaccination records at every consultation. Explain the benefits clearly. If parents have doubts, listen first: people won't change their minds unless they feel respected." }
      ],
      activities: [
        {
          type: "sort", title: "Find the information",
          prompt: "Sort the ideas from the article.",
          bins: ["Fact", "Risk", "Recommendation"],
          items: [
            { text: "Measles needs about 95% coverage.", bin: 0 }, { text: "Vaccines also protect the community.", bin: 0 },
            { text: "Outbreaks appear when coverage falls.", bin: 1 }, { text: "Babies can't receive some vaccines.", bin: 1 },
            { text: "Check records at every consultation.", bin: 2 }, { text: "Listen to parents' doubts first.", bin: 2 }
          ]
        },
        {
          type: "rewrite", title: "Rewrite with the word given",
          prompt: "Rewrite the sentence using the word in brackets. Keep the same meaning.",
          items: [
            { q: "If people don't feel respected, they won't change their minds. (unless)", a: ["People won't change their minds unless they feel respected.", "Unless people feel respected, they won't change their minds."] },
            { q: "Coverage will fall. Then outbreaks will appear. (if)", a: ["If coverage falls, outbreaks will appear.", "Outbreaks will appear if coverage falls."] },
            { q: "The vaccines will arrive. We'll start immediately. (as soon as)", a: ["We'll start as soon as the vaccines arrive.", "As soon as the vaccines arrive, we'll start.", "We will start as soon as the vaccines arrive."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice conditionals first, then write a campaign leaflet.",
      activities: [
        {
          type: "tiles", title: "Build the sentences",
          items: [
            { a: "If we vaccinate the children, measles won't spread." },
            { a: "Cases will rise unless we act now." },
            { a: "What will happen if coverage falls?" },
            { a: "We'll start as soon as the posters arrive." },
            { a: "When it rains, mosquitoes will breed." }
          ]
        },
        {
          type: "gap", title: "Campaign slogans",
          prompt: "Complete the slogans with the correct form.",
          items: [
            "If you [[wash]] your hands, you [[will protect|'ll protect]] your family.",
            "No water, no mosquitoes: they [[won't|will not]] breed unless there [[is]] water.",
            "If you [[quit]] smoking today, your lungs [[will start|'ll start]] to recover.",
            "Get tested: if we [[detect]] diabetes early, we [[can|will]] control it."
          ]
        },
        {
          type: "write", title: "Prevention leaflet",
          prompt: "Write the text for a prevention leaflet for a community. Choose a problem (dengue, diabetes, HPV, hypertension, road accidents, vaping). Explain the problem with one data point, the consequences of acting / not acting (first conditional), and three practical actions.",
          minWords: 100, maxWords: 160,
          model: "Stop dengue before it starts! In our state, there were about 40 cases per 100,000 inhabitants last year, and the rainy season is coming. If we don't eliminate standing water, the Aedes mosquito will breed near our homes and cases will rise. But if every family spends ten minutes a week cleaning, we will stop it together. What can you do? 1. Empty buckets, tires and plant pots every week. 2. Use repellent and mosquito nets. 3. See a doctor as soon as you have a high fever, and don't take aspirin unless a doctor tells you. Prevention is better than cure!",
          bank: ["If we…, … will…", "unless…", "as soon as…", "In our community, …% of…", "What can you do?", "Prevention is better than cure!"],
          checklist: [
            "I included **one data point** (%, cases, numbers).",
            "I used at least **three** first conditional sentences.",
            "I used **unless** or **as soon as**.",
            "I gave **three practical** actions."
          ]
        }
      ]
    },

    speaking: {
      intro: "Practice with a partner, or play both roles yourself. Then record your evidence.",
      activities: [
        {
          type: "voice", title: "Talk to the computer: Health brigade: convince the neighbor",
          prompt: "Practice the conversation with the computer. Choose a role: the computer reads the other part, and you say your lines. Then change roles. Your words are checked with voice recognition.",
          cards: [
            { name: "Student A · Health brigade", tasks: ["Introduce yourself politely.", "Listen to the neighbor's doubts.", "Explain consequences with *if…, … will…*", "Offer one easy action."] },
            { name: "Student B · Neighbor", tasks: ["Give two reasons for not doing it.", "Ask *What will happen if I don't…?*", "Accept or reject with a reason.", "Use *unless* once."] }
          ],
          language: ["I understand your worry, but…", "If you…, you'll…", "What will happen if…?", "Unless we…", "It only takes…", "Would you like to…?"],
          model: [
            { who: "A", line: "Good morning! We're offering free blood pressure checks today." },
            { who: "B", line: "I feel fine. I don't need it." },
            { who: "A", line: "I understand. But high blood pressure often has no symptoms. If we detect it early, you'll avoid serious problems." },
            { who: "B", line: "And what will happen if it's high?" },
            { who: "A", line: "We'll give you a referral to the health center. It only takes two minutes." },
            { who: "B", line: "OK, I'll do it — unless it hurts!" }
          ],
          seconds: 150,
          checklist: ["use first conditional correctly?", "use *unless* or *as soon as*?", "listen and respond with empathy?", "use public health vocabulary?"]
        },
        {
          type: "speak", title: "Campaign pitch",
          prompt: "Record a 90-second pitch of your prevention campaign for the Public Health class: the problem, the data, the actions and the expected results.",
          language: ["Our campaign is about…", "According to…, …", "If we…, … will…", "Our main actions are…", "We expect that…", "Thank you."],
          seconds: 90,
          checklist: ["present a data point?", "use at least three conditionals?", "describe expected results with *will*?", "speak clearly and persuasively?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use the first conditional to explain consequences.", review: "Explanation: First conditional; Writing activity 2" },
    { can: "I can use *unless, when* and *as soon as* with the present.", review: "Explanation: Unless, when, as soon as; Reading activity 2" },
    { can: "I can understand basic epidemiology vocabulary.", review: "Explanation: vocabulary; Talking about data" },
    { can: "I can follow a radio interview about a public health problem.", review: "Listening activities 1 and 2" },
    { can: "I can write a prevention leaflet for a community.", review: "Writing activity 3" },
    { can: "I can persuade someone respectfully to take a health action.", review: "Speaking activity 1" }
  ]
};
