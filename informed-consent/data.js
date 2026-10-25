window.UNIT = {
  slug: "informed-consent",
  title: "Informed Consent",
  level: "B1",
  minutes: 60,
  subject: "Bioethics and Human Rights",
  focus: ["must / mustn't, have to / don't have to", "should / shouldn't for recommendations", "patients' rights and ethical principles", "explaining a procedure to a patient"],
  speakers: { "Dr. Pérez": "m", "Mrs. Salas": "f", "Professor": "f", "Fernanda": "f", "Marcos": "m" },

  presentation: {
    scene: "⚖️📝🤝🏥",
    situation: "In **Bioethics and Human Rights**, students analyze how doctors obtain informed consent. Dr. Pérez explains a surgery to Mrs. Salas.",
    warmup: {
      prompt: "What does a patient have the right to? Choose all that you think.",
      options: ["clear information", "confidentiality", "refuse a treatment", "a second opinion", "choose the hospital food", "respectful treatment", "see their medical record", "free surgery in any hospital", "say no to students in the room"],
      response: "Good! In this unit you'll talk about patients' rights and doctors' obligations."
    },
    dialogueTitle: "Before the surgery",
    dialogue: [
      { who: "Dr. Pérez", line: "Mrs. Salas, before the surgery I *have to* explain the procedure, the risks and the alternatives." },
      { who: "Mrs. Salas", line: "*Do* I *have to* sign today?" },
      { who: "Dr. Pérez", line: "No, you *don't have to* decide today. You can ask questions and talk to your family." },
      { who: "Mrs. Salas", line: "And can I change my mind later?" },
      { who: "Dr. Pérez", line: "Yes. You *can* withdraw your consent at any time before the surgery." },
      { who: "Mrs. Salas", line: "What *must* I do the day before?" },
      { who: "Dr. Pérez", line: "You *mustn't* eat anything after midnight. And you *should* bring a family member with you." }
    ]
  },

  objectives: [
    "I can explain obligations with *must* and *have to*, and prohibition with *mustn't*.",
    "I can distinguish *mustn't* (prohibited) from *don't have to* (not necessary).",
    "I can name the four principles of bioethics and some patients' rights.",
    "I can explain a procedure and obtain informed consent in simple English."
  ],

  explanation: {
    vocabTitle: "Bioethics vocabulary",
    vocab: [
      { word: "informed consent", icon: "📝" }, { word: "autonomy", icon: "🧭" }, { word: "beneficence", icon: "💚" },
      { word: "non-maleficence", icon: "🚫" }, { word: "justice", icon: "⚖️" }, { word: "confidentiality", icon: "🔒" },
      { word: "right", icon: "✅" }, { word: "duty / obligation", icon: "📌" }, { word: "risk", icon: "⚠️" },
      { word: "benefit", icon: "➕" }, { word: "alternative", icon: "🔀" }, { word: "refuse", icon: "✋" },
      { word: "withdraw", icon: "↩️" }, { word: "legal guardian", icon: "👪" }, { word: "capacity", icon: "🧠" }
    ],
    grammar: [
      {
        title: "Obligation and prohibition",
        head: ["Form", "Meaning", "Example"],
        rows: [
          ["*must*", "strong obligation (rule, or the speaker's opinion)", "Doctors *must* respect confidentiality."],
          ["*have to / has to*", "obligation (external rule)", "The surgeon *has to* explain the risks."],
          ["*mustn't*", "prohibition: it's not allowed", "You *mustn't* share a patient's data on social media."],
          ["*don't have to*", "not necessary (but you can)", "Patients *don't have to* accept every treatment."],
          ["*should / shouldn't*", "advice, recommendation", "You *should* use simple words, not jargon."]
        ],
        note: "Past obligation: *had to* (*must* has no past). Questions: *Do I have to…?* is more common than *Must I…?*"
      },
      {
        title: "Mustn't vs. don't have to",
        head: ["Mustn't (prohibited)", "Don't have to (not necessary)"],
        rows: [
          ["You *mustn't* lie to the patient.", "You *don't have to* use technical words."],
          ["Students *mustn't* examine a patient without permission.", "The patient *doesn't have to* sign today."]
        ]
      }
    ],
    watchOut: [
      ["The doctor musts explain the risks.", "The doctor must explain the risks."],
      ["You must to sign here.", "You must sign here."],
      ["She has to signed the form.", "She has to sign the form."],
      ["You mustn't sign today. (meaning: it isn't necessary)", "You don't have to sign today."],
      ["Yesterday I must stay late.", "Yesterday I had to stay late."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *must, mustn't, has to* or *don't have to*.",
      items: [
        "Doctors [[mustn't|must not]] share patients' data without permission.",
        "The patient [[doesn't have to|does not have to]] decide today; there's no rush.",
        "The surgeon [[has to|must]] explain the risks before the operation.",
        "You [[don't have to|do not have to]] be a lawyer to understand your rights."
      ]
    }
  },

  skills: {
    listening: {
      intro: "A bioethics professor talks about the four principles. Listen and match.",
      title: "The four principles",
      script: [
        { who: "Professor", line: "Today let's review the four principles of biomedical ethics." },
        { who: "Professor", line: "First, autonomy. Patients have the right to make decisions about their own bodies. That's why we must obtain informed consent." },
        { who: "Professor", line: "Second, beneficence. We have to act in the best interest of the patient." },
        { who: "Professor", line: "Third, non-maleficence: first, do no harm. We mustn't expose patients to unnecessary risks." },
        { who: "Professor", line: "Fourth, justice. Resources must be distributed fairly. Doctors mustn't discriminate because of money, gender, ethnicity or religion." },
        { who: "Fernanda", line: "Professor, does a doctor have to accept every request from a patient?" },
        { who: "Professor", line: "Good question, Fernanda. No, a doctor doesn't have to give a treatment that is harmful or useless. Respecting autonomy doesn't mean doing everything the patient wants." }
      ],
      activities: [
        {
          type: "match", title: "Principles",
          prompt: "Match each principle with its meaning.",
          pairs: [
            ["autonomy", "patients decide about their own bodies"],
            ["beneficence", "act in the patient's best interest"],
            ["non-maleficence", "first, do no harm"],
            ["justice", "distribute resources fairly"],
            ["informed consent", "a practical way to respect autonomy"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. Are the sentences true or false?",
          items: [
            { s: "Doctors must obtain informed consent.", a: true },
            { s: "Non-maleficence means doing everything the patient wants.", a: false },
            { s: "Doctors mustn't discriminate because of religion.", a: true },
            { s: "A doctor has to give any treatment a patient asks for.", a: false },
            { s: "There are five principles of biomedical ethics.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read this section of a hospital's patient rights charter.",
      title: "Your rights as a patient",
      text: [
        { author: "Information", body: "You have the right to receive clear, complete and truthful information about your diagnosis, treatment, risks and alternatives. Your doctor must use language you can understand." },
        { author: "Consent", body: "Before any surgery, invasive procedure or research study, the hospital has to obtain your written consent. You don't have to sign if you don't agree, and you can withdraw your consent at any time." },
        { author: "Confidentiality", body: "Staff mustn't share your information with anyone without your permission, except in situations established by law. This includes photos and social media." },
        { author: "Respect", body: "You have the right to be treated with dignity, without discrimination. You can request a second opinion, and you don't have to accept the presence of students during your examination." },
        { author: "Minors and capacity", body: "If the patient is a minor or doesn't have the capacity to decide, a parent or legal guardian has to sign. But doctors should still explain the procedure to the patient in simple words." }
      ],
      activities: [
        {
          type: "sort", title: "Obligation, prohibition or choice?",
          prompt: "Sort the sentences from the charter.",
          bins: ["Obligation (must / has to)", "Prohibition (mustn't)", "Choice (don't have to / can)"],
          items: [
            { text: "Doctors use language you understand.", bin: 0 }, { text: "The hospital obtains written consent.", bin: 0 },
            { text: "Staff share your photos on social media.", bin: 1 }, { text: "Staff share your data without permission.", bin: 1 },
            { text: "You sign if you don't agree.", bin: 2 }, { text: "You accept students in the room.", bin: 2 }
          ]
        },
        {
          type: "rewrite", title: "Rewrite the rights",
          prompt: "Rewrite with the modal in brackets.",
          items: [
            { q: "It's not necessary for the patient to accept students. (doesn't have to)", a: ["The patient doesn't have to accept students.", "The patient does not have to accept students."] },
            { q: "It's prohibited to share data without permission. (mustn't)", a: ["Staff mustn't share data without permission.", "You mustn't share data without permission.", "Doctors mustn't share data without permission."] },
            { q: "It's necessary for a guardian to sign for a minor. (has to)", a: ["A guardian has to sign for a minor.", "A legal guardian has to sign for a minor.", "The guardian has to sign for a minor."] },
            { q: "It's a good idea to explain the procedure to children too. (should)", a: ["Doctors should explain the procedure to children too.", "You should explain the procedure to children too.", "Doctors should explain the procedure to children."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the modals first, then write an ethics case analysis.",
      activities: [
        {
          type: "tiles", title: "Build the sentences",
          items: [
            { a: "Doctors must respect confidentiality." },
            { a: "You don't have to sign today." },
            { a: "Students mustn't take photos of patients." },
            { a: "Do I have to stay in hospital?" },
            { a: "You should use simple words." }
          ]
        },
        {
          type: "gap", title: "Hospital rules for students",
          prompt: "Complete the rules for students in Clinical Practice.",
          items: [
            "You [[must|have to]] introduce yourself as a student to every patient.",
            "You [[mustn't|must not]] post photos of patients on Instagram.",
            "You [[don't have to|do not have to]] know all the answers; you can ask your tutor.",
            "You [[should]] wash your hands before and after every patient.",
            "Last year, a student [[had to]] repeat the course for breaking confidentiality."
          ]
        },
        {
          type: "write", title: "Ethics case analysis",
          prompt: "Read the case and write your analysis: *A 17-year-old patient needs an appendectomy. Her parents are traveling and can't be contacted. She is in pain and asks the team to operate.* What must / mustn't the team do? What do they have to consider? What should they do? Mention at least two ethical principles.",
          minWords: 100, maxWords: 160,
          model: "In this case, the team has to act quickly because appendicitis can become dangerous. Following the principle of beneficence, they must protect the patient's life. However, she is a minor, so normally a parent or legal guardian has to sign the consent. The team should continue trying to contact the parents and document every attempt. In an emergency, the law usually allows doctors to operate without parental consent. They mustn't ignore the patient's opinion: respecting her autonomy, they should explain the procedure, the risks and the alternatives in simple words. They don't have to wait for the parents if her life is in danger.",
          bank: ["The team has to…", "They must…", "They mustn't…", "They don't have to…", "They should…", "Following the principle of…", "However,"],
          checklist: [
            "I used **must / have to** for obligations.",
            "I used **mustn't** and **don't have to** with the correct meaning.",
            "I mentioned at least **two** ethical principles.",
            "I gave a clear **recommendation** with *should*."
          ]
        }
      ]
    },

    speaking: {
      intro: "Practice with a partner, or play both roles yourself. Then record your evidence.",
      activities: [
        {
          type: "voice", title: "Talk to the computer: Obtaining consent",
          prompt: "Practice the conversation with the computer. Choose a role: the computer reads the other part, and you say your lines. Then change roles. Your words are checked with voice recognition.",
          cards: [
            { name: "Student A · Doctor", tasks: ["Explain the procedure in simple words.", "Explain one benefit and two risks.", "Mention one alternative.", "Say what the patient must / mustn't do before."] },
            { name: "Student B · Patient", tasks: ["Ask *Do I have to…?*", "Ask about the risks.", "Ask *What happens if I say no?*", "Decide: sign, ask for time, or refuse."] }
          ],
          language: ["I'd like to explain…", "The main benefit is…", "There are some risks, for example…", "Another option is…", "You must / mustn't… before.", "You don't have to decide now.", "Do I have to…?"],
          model: [
            { who: "A", line: "Mrs. Salas, we recommend an endoscopy. We use a thin camera to look inside your stomach." },
            { who: "B", line: "Does it hurt? Do I have to be awake?" },
            { who: "A", line: "You don't have to be awake; we can give you sedation. The risks are small: a sore throat or, rarely, bleeding." },
            { who: "B", line: "What do I have to do before?" },
            { who: "A", line: "You mustn't eat for eight hours before the procedure." },
            { who: "B", line: "OK. Can I think about it until tomorrow?" },
            { who: "A", line: "Of course. You don't have to decide today." }
          ],
          seconds: 150,
          checklist: ["explain benefits, risks and alternatives?", "use *mustn't* and *don't have to* correctly?", "respect the patient's autonomy?", "avoid technical jargon?"]
        },
        {
          type: "speak", title: "Ethics opinion",
          prompt: "Record a 90-second opinion: *Should medical students be allowed to examine patients without asking for permission in a teaching hospital?* Use modals and ethical principles.",
          language: ["In my opinion,…", "Students must / mustn't…", "Patients don't have to…", "According to the principle of…", "On the other hand,…", "To sum up,…"],
          seconds: 90,
          checklist: ["give a clear opinion?", "use at least four different modals?", "mention an ethical principle?", "conclude clearly?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use *must* and *have to* for obligations.", review: "Explanation: Obligation and prohibition" },
    { can: "I can distinguish *mustn't* and *don't have to*.", review: "Explanation: Mustn't vs. don't have to; Quick check" },
    { can: "I can name the four principles of bioethics.", review: "Listening activity 1" },
    { can: "I can understand a patients' rights charter.", review: "Reading activities 1 and 2" },
    { can: "I can write a short ethics case analysis.", review: "Writing activity 3" },
    { can: "I can explain a procedure and obtain consent.", review: "Speaking activity 1" }
  ]
};
