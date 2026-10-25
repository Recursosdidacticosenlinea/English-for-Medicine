window.UNIT = {
  slug: "what-the-study-found",
  title: "What the Study Found",
  level: "B1",
  minutes: 60,
  subject: "Research Methodology and Biostatistics",
  focus: ["passive voice: present and past", "by + agent", "structure of a research abstract (IMRaD)", "describing results: increase, decrease, significant"],
  speakers: { "Mónica": "f", "Hugo": "m", "Professor": "m", "Researcher": "f" },

  presentation: {
    scene: "📊🔬📄🧮",
    situation: "In **Research Methodology**, students read articles in English. Mónica and Hugo try to understand the abstract of a clinical study.",
    warmup: {
      prompt: "Have you ever read a scientific article in English? Choose all that are true.",
      options: ["Yes, for a class", "I use Google Translate", "I only read the abstract", "I understand the tables", "I search on PubMed", "The methods are difficult", "I read the conclusion first", "Never"],
      response: "That's normal! In this unit you'll learn the language of research articles."
    },
    dialogueTitle: "Reading an abstract",
    dialogue: [
      { who: "Hugo", line: "OK, the methods. \"A total of 400 patients *were recruited* from three hospitals.\"" },
      { who: "Mónica", line: "So, the researchers recruited them. Why do they write it like that?" },
      { who: "Hugo", line: "Because the action is more important than who did it. That's the *passive voice*." },
      { who: "Mónica", line: "I see. \"Patients *were randomly assigned* to two groups.\" And here: \"Blood pressure *is measured* every month.\"" },
      { who: "Hugo", line: "Right. And the results: \"Blood pressure *was reduced* significantly in the intervention group.\"" },
      { who: "Mónica", line: "So, the treatment worked! It's easier than I thought." }
    ]
  },

  objectives: [
    "I can form the passive voice in the present and past simple.",
    "I can decide when to use the passive in scientific writing.",
    "I can identify the parts of a research abstract (IMRaD).",
    "I can describe the methods and results of a simple study."
  ],

  explanation: {
    vocabTitle: "Research vocabulary",
    vocab: [
      { word: "study", icon: "📄" }, { word: "sample", icon: "👥" }, { word: "participants", icon: "🙋" },
      { word: "recruit", icon: "📣" }, { word: "randomize", icon: "🎲" }, { word: "control group", icon: "⚖️" },
      { word: "questionnaire / survey", icon: "📋" }, { word: "data", icon: "💾" }, { word: "variable", icon: "🔣" },
      { word: "mean / average", icon: "➗" }, { word: "significant", icon: "⭐" }, { word: "p-value", icon: "🅿️" },
      { word: "findings", icon: "🔍" }, { word: "bias", icon: "↗️" }, { word: "cross-sectional", icon: "✂️" }
    ],
    grammar: [
      {
        title: "Passive voice: be + past participle",
        head: ["Tense", "Active", "Passive"],
        rows: [
          ["Present simple", "Nurses *measure* blood pressure every month.", "Blood pressure *is measured* every month."],
          ["Present simple (plural)", "We *exclude* pregnant women.", "Pregnant women *are excluded*."],
          ["Past simple", "Researchers *recruited* 400 patients.", "400 patients *were recruited*."],
          ["Past simple (singular)", "The committee *approved* the study.", "The study *was approved* by the ethics committee."],
          ["Negative / question", "—", "The data *weren't published*. *Was* the sample *randomized*?"]
        ],
        note: "Use the passive when the **action or result** is more important than the person who did it. Add *by + agent* only if it's important: *…was approved by the ethics committee*."
      },
      {
        title: "Abstract structure: IMRaD",
        head: ["Section", "Typical tense", "Example"],
        rows: [
          ["*Introduction / Objective*", "present / past", "Hypertension *is* a major risk factor… The aim *was* to evaluate…"],
          ["*Methods*", "past passive", "Participants *were selected*… Data *were analyzed* with SPSS."],
          ["*Results*", "past simple", "Mean BP *decreased* by 12 mmHg (p < 0.01)."],
          ["*Discussion / Conclusion*", "present", "These findings *suggest* that…"]
        ]
      }
    ],
    watchOut: [
      ["The patients were recruit in 2023.", "The patients were recruited in 2023."],
      ["The data was analyze.", "The data were analyzed. (also: The data was analyzed.)"],
      ["The questionnaire applied to 200 students.", "The questionnaire was applied to 200 students."],
      ["The results were very significants.", "The results were very significant."],
      ["The study is approved by the committee in 2022.", "The study was approved by the committee in 2022."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with the passive form.",
      items: [
        "The participants [[were selected]] (select) randomly last year.",
        "Glucose [[is measured]] (measure) every three months.",
        "The study [[was approved]] (approve) by the ethics committee.",
        "Smokers [[are excluded]] (exclude) from this type of study."
      ]
    }
  },

  skills: {
    listening: {
      intro: "A researcher explains her study at a student congress. Listen and complete the information.",
      title: "Sleep and exam results",
      script: [
        { who: "Researcher", line: "Good afternoon. Our study looked at sleep and academic performance in medical students." },
        { who: "Researcher", line: "It was a cross-sectional study. It was carried out at our faculty in 2024." },
        { who: "Researcher", line: "A total of 312 students were invited, and 280 answered. A sleep questionnaire was applied online, and their exam grades were obtained from the school records, with their permission." },
        { who: "Researcher", line: "The data were analyzed with a statistical program. A p-value of less than 0.05 was considered significant." },
        { who: "Researcher", line: "The results: students who slept less than six hours had lower grades — on average, 0.8 points lower. This difference was statistically significant." },
        { who: "Researcher", line: "Of course, there are limitations. The sleep data were reported by the students themselves, so there may be some bias." }
      ],
      activities: [
        {
          type: "match", title: "Study details",
          prompt: "Match each element with the information.",
          pairs: [
            ["design", "cross-sectional"],
            ["year", "2024"],
            ["students who answered", "280"],
            ["significance level", "p < 0.05"],
            ["limitation", "self-reported sleep data"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. Are the sentences true or false?",
          items: [
            { s: "The questionnaire was applied on paper.", a: false },
            { s: "Grades were obtained from school records.", a: true },
            { s: "Students who slept less had lower grades.", a: true },
            { s: "The difference was not significant.", a: false },
            { s: "The study has no limitations.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read this simplified abstract of a clinical trial.",
      title: "Effect of a walking program on blood pressure in adults with hypertension",
      text: [
        { author: "Objective", body: "Hypertension **is considered** one of the main causes of cardiovascular disease. The aim of this study was to evaluate the effect of a 12-week walking program on blood pressure." },
        { author: "Methods", body: "A randomized controlled trial **was conducted** in four primary care clinics. A total of 160 adults with hypertension **were recruited** and **randomly assigned** to an intervention group (walking 30 minutes, five days a week) or a control group (usual care). Blood pressure **was measured** at the beginning and after 12 weeks." },
        { author: "Results", body: "150 participants completed the study. Systolic blood pressure decreased by a mean of 9 mmHg in the intervention group and 2 mmHg in the control group (p = 0.003). No serious adverse events **were reported**." },
        { author: "Conclusion", body: "A simple walking program significantly reduces blood pressure in adults with hypertension. It **should be recommended** in primary care." }
      ],
      activities: [
        {
          type: "sort", title: "Which section?",
          prompt: "Put each sentence in the right section of the abstract.",
          bins: ["Objective", "Methods", "Results", "Conclusion"],
          items: [
            { text: "The aim was to evaluate…", bin: 0 },
            { text: "160 adults were recruited.", bin: 1 }, { text: "Participants were randomly assigned.", bin: 1 },
            { text: "Systolic BP decreased by 9 mmHg.", bin: 2 }, { text: "No serious adverse events were reported.", bin: 2 },
            { text: "It should be recommended in primary care.", bin: 3 }
          ]
        },
        {
          type: "rewrite", title: "Active to passive",
          prompt: "Rewrite in the passive. Don't include the agent.",
          items: [
            { q: "The researchers conducted the trial in four clinics.", a: ["The trial was conducted in four clinics."] },
            { q: "Nurses measured blood pressure after 12 weeks.", a: ["Blood pressure was measured after 12 weeks."] },
            { q: "They assigned the participants to two groups.", a: ["The participants were assigned to two groups.", "Participants were assigned to two groups."] },
            { q: "Doctors recommend walking in primary care.", a: ["Walking is recommended in primary care."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the passive first, then write a mini-abstract.",
      activities: [
        {
          type: "tiles", title: "Build the sentences",
          items: [
            { a: "The participants were selected randomly." },
            { a: "The data were analyzed with SPSS." },
            { a: "Blood pressure is measured every month." },
            { a: "The study was approved by the ethics committee." },
            { a: "No adverse events were reported." }
          ]
        },
        {
          type: "gap", title: "Complete the methods",
          prompt: "Complete the methods section with the past passive.",
          items: [
            "This study [[was carried out|was conducted]] (carry out) at a university hospital in Puebla.",
            "A questionnaire [[was sent]] (send) to 500 nurses by email.",
            "Incomplete questionnaires [[were excluded]] (exclude).",
            "Informed consent [[was obtained]] (obtain) from all participants.",
            "The results [[were compared]] (compare) with a previous study."
          ]
        },
        {
          type: "write", title: "Write a mini-abstract",
          prompt: "Imagine a simple study at your faculty (for example: coffee consumption and anxiety, screen time and sleep, breakfast and attention in class). Write a mini-abstract with four sections: Objective, Methods, Results and Conclusion. Use the passive in the methods.",
          minWords: 100, maxWords: 160,
          model: "Objective: To describe the relationship between energy drinks and anxiety in medical students. Methods: A cross-sectional study was carried out in 2025. A total of 200 first-year students were invited and an online questionnaire was applied. Anxiety was measured with the GAD-7 scale. Students with a diagnosis of an anxiety disorder were excluded. The data were analyzed with SPSS. Results: 180 students answered. Students who consumed energy drinks three or more times a week had higher anxiety scores (mean 9.1 vs. 6.2, p = 0.01). Conclusion: Frequent energy drink consumption is associated with anxiety. Prevention programs should be developed.",
          bank: ["Objective: To…", "Methods: A … study was carried out…", "… were invited / selected / excluded.", "… was measured with…", "The data were analyzed…", "Results:", "Conclusion: … is associated with…"],
          checklist: [
            "I included the **four sections**.",
            "I used at least **four** passive sentences in the methods.",
            "I included **numbers** in the results.",
            "My conclusion uses the **present**."
          ]
        }
      ]
    },

    speaking: {
      intro: "Practice with a partner, or play both roles yourself. Then record your evidence.",
      activities: [
        {
          type: "voice", title: "Talk to the computer: Journal club",
          prompt: "Practice the conversation with the computer. Choose a role: the computer reads the other part, and you say your lines. Then change roles. Your words are checked with voice recognition.",
          cards: [
            { name: "Student A · Presenter", tasks: ["Say the objective.", "Explain how the study was done (passive).", "Give the main result with numbers.", "Say the conclusion."] },
            { name: "Student B · Critic", tasks: ["Ask *How were the participants selected?*", "Ask *How was … measured?*", "Ask about limitations.", "Give your opinion: is it useful?"] }
          ],
          language: ["The study was about…", "… were recruited / assigned…", "… was measured…", "The main finding was…", "How were … selected?", "One limitation is…", "I think it's useful because…"],
          model: [
            { who: "A", line: "This study was about walking and blood pressure. 160 adults were recruited in four clinics." },
            { who: "B", line: "How were they assigned to the groups?" },
            { who: "A", line: "They were randomly assigned. Blood pressure was measured after 12 weeks." },
            { who: "B", line: "And what was found?" },
            { who: "A", line: "Systolic pressure decreased by 9 mmHg in the walking group." },
            { who: "B", line: "One limitation is that it was only 12 weeks long." }
          ],
          seconds: 150,
          checklist: ["use the passive to explain methods?", "give results with numbers?", "ask critical questions?", "mention a limitation?"]
        },
        {
          type: "speak", title: "Poster presentation",
          prompt: "Record a 90-second presentation of your mini-abstract, as if you were at a student research congress.",
          language: ["Good afternoon. Our study is about…", "The aim was to…", "It was carried out…", "… participants were…", "We found that…", "In conclusion,…", "Thank you. Any questions?"],
          seconds: 90,
          checklist: ["follow IMRaD order?", "use the passive in the methods?", "use the past simple for results?", "speak at a clear, steady pace?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can form the passive in the present and past simple.", review: "Explanation: Passive voice; Writing activity 2" },
    { can: "I can transform active sentences into the passive.", review: "Reading activity 2" },
    { can: "I can identify the parts of an abstract.", review: "Explanation: IMRaD; Reading activity 1" },
    { can: "I can understand a short research presentation.", review: "Listening activities 1 and 2" },
    { can: "I can write a mini-abstract.", review: "Writing activity 3" },
    { can: "I can present and discuss a study with a colleague.", review: "Speaking activities 1 and 2" }
  ]
};
