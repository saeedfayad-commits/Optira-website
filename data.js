/* ==========================================================================
   OPTIRA — Career Profile Data
   --------------------------------------------------------------------------
   Single source of truth for all 12 career profile pages.
   Each career.html wrapper page just loads this file + career.js and
   renders itself based on a data-slug attribute — no duplicated markup.

   SCHEMA (per career):
   {
     slug            'high-school-teacher'
     cluster         'Education & Community'
     clusterIcon     '📘'
     title           'High School Teacher'
     subtitle        one-line description (matches careers.html card desc)
     aiLevel         'low' | 'med' | 'high'
     aiLabel         'Low' | 'Medium' | 'High'
     aiSummary       1-2 sentence explanation shown in the AI Impact box
     salaryRange     '$70k – $102k'
     studyYears      '4 years'
     jobStability    'Very High' | 'High' | 'Medium' | 'Variable'
     lifestyle       'Medium' | 'High' | 'Low' | 'Variable'   (flexibility)
     overview        paragraph string
     dayToDay        [ 'bullet', 'bullet', ... ]               "What they actually do"
     dayInLife       [ { time, title, desc }, ... ]
     pros            [ 'string', ... ]
     cons            [ 'string', ... ]
     studyPathway    {
                        main: { text, cost },
                        alternatives: [ 'string', ... ]
                      }
     skills          [ { name, level: 'Essential'|'Important'|'Helpful' }, ... ]
     questions       [ 'string', ... ]
     salaryExpect    { starting: '$72,000', longterm: '$99,000' }
     personality     [ 'tag', ... ]
     bestSuited      'string'
     related         [ 'slug1', 'slug2' ]   -- picked manually for relevance
   }
   ========================================================================== */

window.CAREERS = {

  "high-school-teacher": {
    slug: "high-school-teacher",
    cluster: "Education & Community",
    clusterIcon: "📘",
    title: "High School Teacher",
    subtitle: "Teach a specialist subject to teenagers aged 12–18, helping them build skills for university and beyond.",
    aiLevel: "low",
    aiLabel: "Low",
    aiSummary: "Like primary teaching, the human element — mentoring, motivation, and relationship-building with teenagers — is irreplaceable. AI may help with marking and resources, but the teaching role remains secure.",
    salaryRange: "$70k – $102k",
    studyYears: "4 years",
    jobStability: "Very High",
    lifestyle: "Medium",

    overview: "High school teachers specialise in a subject they're passionate about — Maths, English, Science, Drama, PE, or more — and teach it to students aged 12–18. You become a mentor as much as an educator, and the impact you have on teenagers can last a lifetime.",

    dayToDay: [
      "Design and deliver lessons in your specialist subject area",
      "Assess student work and write detailed reports",
      "Prepare students for exams and high-stakes assessments",
      "Provide pastoral care and act as a form teacher/homeroom teacher",
      "Run extracurricular activities, excursions, or subject competitions",
      "Work with parents, support staff, and leadership teams"
    ],

    dayInLife: [
      { time: "8:00am", title: "Preparation", desc: "Review lesson materials, check if any students need extra support today." },
      { time: "8:45am", title: "Period 1 — Year 10 Maths", desc: "Introduce quadratic equations with an interactive activity and group work." },
      { time: "10:15am", title: "Recess", desc: "Grab a coffee, catch up with colleagues, respond to one parent email." },
      { time: "10:30am", title: "Period 2 — Year 12 extension", desc: "Intense exam preparation with your advanced class. High stakes, high energy." },
      { time: "12:20pm", title: "Lunch", desc: "Supervise or attend a maths club, then eat quickly and plan for the afternoon." },
      { time: "1:00pm", title: "Year 9 lesson", desc: "A more challenging group — you use differentiated activities to keep everyone engaged." },
      { time: "2:45pm", title: "Faculty meeting", desc: "Discuss curriculum planning and upcoming assessment tasks with colleagues." },
      { time: "4:00pm", title: "Marking & planning", desc: "Work through student submissions and plan tomorrow's lessons before heading home." }
    ],

    pros: [
      "Deep satisfaction from watching students grow and succeed",
      "School holidays are generous (12+ weeks per year)",
      "Specialist knowledge means you're always learning too",
      "Strong job security nationwide",
      "Opportunities to lead departments, mentor graduate teachers",
      "Meaningful community contribution"
    ],
    cons: [
      "Heavy workload outside school hours (marking, reports, planning)",
      "Managing disengaged or difficult teenagers can be draining",
      "Bureaucracy and reporting can feel overwhelming",
      "Salary plateaus faster than some other graduate careers",
      "Emotionally taxing — some students carry significant personal challenges"
    ],

    studyPathway: {
      main: {
        text: "Bachelor of Education (Secondary) — 4 years, or Bachelor's degree + Master of Teaching — 5–6 years",
        cost: "$18,000–$50,000 total (HECS-HELP available)"
      },
      alternatives: [
        "Study a specialist subject first (e.g. Science, Maths), then complete a Master of Teaching",
        "Transition from industry into teaching via alternate pathways",
        "Casual/relief teaching while completing teacher registration"
      ]
    },

    skills: [
      { name: "Subject knowledge", level: "Essential" },
      { name: "Communication", level: "Essential" },
      { name: "Classroom management", level: "Essential" },
      { name: "Assessment & feedback", level: "Essential" },
      { name: "Mentoring teenagers", level: "Important" },
      { name: "Digital tools", level: "Important" },
      { name: "Curriculum design", level: "Helpful" }
    ],

    questions: [
      "Which subject am I genuinely passionate enough to teach every day?",
      "Do I connect well with teenagers?",
      "Can I handle the workload outside classroom hours?",
      "Am I interested in pastoral care as well as academic teaching?",
      "Would I consider specialising further (e.g. STEM, special needs)?"
    ],

    salaryExpect: { starting: "$72,000", longterm: "$99,000" },

    personality: ["Passionate", "Patient", "Organised", "Resilient", "Mentoring-oriented", "Subject enthusiast"],

    bestSuited: "People passionate about a subject who want to inspire teenagers and contribute to their future",

    related: ["primary-school-teacher", "psychologist"]
  },

  "nurse": {
    slug: "nurse",
    cluster: "Health & Care",
    clusterIcon: "🩺",
    title: "Nurse",
    subtitle: "Provide direct patient care, coordinate treatments, and support recovery across hospitals, clinics, and community settings.",
    aiLevel: "low",
    aiLabel: "Low",
    aiSummary: "Hands-on clinical care, emotional support, and split-second judgement calls at the bedside can't be automated. AI is increasingly used for administrative tasks, documentation, and diagnostic support tools — freeing nurses up for more direct patient time rather than replacing them.",
    salaryRange: "$65k – $105k",
    studyYears: "3 years",
    jobStability: "Very High",
    lifestyle: "Variable",

    overview: "Nurses are the backbone of the healthcare system — delivering hands-on care, monitoring patients, administering treatment, and acting as the main point of contact between patients and the rest of the medical team. You could work in a hospital ward, an emergency department, a GP clinic, aged care, mental health, or out in the community.",

    dayToDay: [
      "Assess patients and monitor vital signs throughout a shift",
      "Administer medications and treatments as prescribed",
      "Support doctors during procedures and coordinate patient care plans",
      "Educate patients and families about conditions and recovery",
      "Maintain accurate clinical documentation",
      "Respond quickly to emergencies or sudden changes in patient condition"
    ],

    dayInLife: [
      { time: "6:45am", title: "Handover", desc: "Arrive for an early shift, get a handover briefing from the night team on each patient." },
      { time: "7:15am", title: "Morning rounds", desc: "Check vitals, administer morning medications, and update care charts for eight patients." },
      { time: "9:30am", title: "Doctor's rounds", desc: "Join the ward round, flag any concerns, update treatment plans." },
      { time: "11:00am", title: "Procedures & support", desc: "Assist with a dressing change and support a patient being discharged home." },
      { time: "1:00pm", title: "Lunch break", desc: "A short break — patient care doesn't fully stop, so you stay close to the ward." },
      { time: "1:45pm", title: "New admission", desc: "A new patient arrives from ED — you complete the intake assessment and settle them in." },
      { time: "3:30pm", title: "Family communication", desc: "Update a worried family member on their relative's condition and next steps." },
      { time: "7:00pm", title: "Evening handover", desc: "Brief the night shift nurse on every patient before finishing a 12-hour shift." }
    ],

    pros: [
      "Extremely secure, in-demand career across Australia",
      "Deeply meaningful — you make a tangible difference every shift",
      "Wide variety of specialisations (ED, paediatrics, mental health, midwifery, ICU)",
      "Portable qualification — work anywhere in Australia or overseas",
      "Shift work can suit those who prefer non-traditional hours",
      "Strong career progression into clinical nurse specialist or nurse practitioner roles"
    ],
    cons: [
      "Physically and emotionally demanding work",
      "Shift work including nights, weekends, and public holidays",
      "Short-staffing can mean high-pressure, high-ratio shifts",
      "Exposure to distressing situations and patient loss",
      "Salary growth can be slower than other degree-qualified careers unless you specialise"
    ],

    studyPathway: {
      main: {
        text: "Bachelor of Nursing — 3 years, followed by AHPRA registration as a Registered Nurse",
        cost: "$15,000–$35,000 total (HECS-HELP available)"
      },
      alternatives: [
        "Diploma of Nursing (18 months–2 years) to become an Enrolled Nurse first, then bridge to Registered Nurse",
        "Graduate-entry Master of Nursing for those with an unrelated bachelor's degree",
        "Postgraduate specialisation (e.g. critical care, midwifery, mental health) after registration"
      ]
    },

    skills: [
      { name: "Clinical skills", level: "Essential" },
      { name: "Empathy & bedside manner", level: "Essential" },
      { name: "Calm under pressure", level: "Essential" },
      { name: "Attention to detail", level: "Essential" },
      { name: "Communication", level: "Important" },
      { name: "Physical stamina", level: "Important" },
      { name: "Teamwork", level: "Helpful" }
    ],

    questions: [
      "Can I handle shift work, including nights and weekends?",
      "Am I comfortable with confronting or distressing situations?",
      "Do I want to specialise (e.g. paediatrics, ICU, mental health) down the track?",
      "How do I cope with physically demanding, on-your-feet work?",
      "Would I consider enrolled nursing first as a stepping stone?"
    ],

    salaryExpect: { starting: "$68,000", longterm: "$98,000" },

    personality: ["Compassionate", "Resilient", "Detail-oriented", "Calm under pressure", "Team player", "Adaptable"],

    bestSuited: "People who want hands-on, meaningful work caring for others and can handle the physical and emotional demands of clinical settings",

    related: ["psychologist", "high-school-teacher"]
  },

  "software-developer": {
    slug: "software-developer",
    cluster: "Technology & Data",
    clusterIcon: "💻",
    title: "Software Developer",
    subtitle: "Design and build software applications, websites, and digital products that power the modern world.",
    aiLevel: "high",
    aiLabel: "High",
    aiSummary: "AI coding assistants are already changing how developers write code — automating boilerplate, suggesting fixes, and speeding up routine tasks. The role is shifting toward higher-level system design, review, and problem-solving rather than disappearing, but junior/repetitive coding work is most exposed.",
    salaryRange: "$75k – $160k",
    studyYears: "3 years",
    jobStability: "High",
    lifestyle: "High",

    overview: "Software developers design, build, and maintain the applications, websites, and systems that businesses and everyday people rely on. It's a broad field — you might build mobile apps, backend systems, games, or the infrastructure behind large platforms — with strong demand across almost every industry in Australia.",

    dayToDay: [
      "Write, test, and debug code in one or more programming languages",
      "Collaborate with designers and product managers on new features",
      "Review other developers' code and give feedback",
      "Fix bugs and improve performance of existing systems",
      "Attend stand-ups and planning meetings within an agile team",
      "Keep learning new frameworks, tools, and languages as the field evolves"
    ],

    dayInLife: [
      { time: "8:30am", title: "Stand-up", desc: "Quick team sync — what you did yesterday, what's next, and any blockers." },
      { time: "9:00am", title: "Deep work block", desc: "Build a new feature, referencing the design spec and existing codebase." },
      { time: "11:00am", title: "Code review", desc: "Review a teammate's pull request, suggest improvements before it's merged." },
      { time: "12:00pm", title: "Lunch", desc: "Step away from the screen — a habit most experienced developers protect fiercely." },
      { time: "1:00pm", title: "Debugging session", desc: "Track down a tricky bug reported by QA, using logs and a debugger." },
      { time: "3:00pm", title: "Planning meeting", desc: "Discuss the next sprint's priorities with the product manager and designers." },
      { time: "4:00pm", title: "Testing & documentation", desc: "Write tests for the feature you built earlier and document how it works." },
      { time: "5:00pm", title: "Wrap up", desc: "Push your code, update your task board, and note anything for tomorrow." }
    ],

    pros: [
      "Strong salaries with fast progression for skilled developers",
      "High demand across nearly every industry, not just tech companies",
      "Remote and flexible work is common and widely accepted",
      "Constant intellectual challenge — always something new to learn",
      "Many pathways in — bootcamps, self-teaching, or a degree",
      "Global mobility — skills transfer easily overseas"
    ],
    cons: [
      "Field changes fast — constant need to keep learning",
      "AI tools are reshaping entry-level work, making early career harder to break into",
      "Can involve long hours and tight deadlines, especially in startups",
      "Sedentary, screen-heavy work with real risk of burnout",
      "Highly competitive at the graduate level"
    ],

    studyPathway: {
      main: {
        text: "Bachelor of Computer Science / Software Engineering — 3–4 years",
        cost: "$20,000–$45,000 total (HECS-HELP available)"
      },
      alternatives: [
        "Coding bootcamp (3–6 months) combined with a strong self-built portfolio",
        "Self-taught path via free/paid online courses, open-source contributions, and personal projects",
        "TAFE Diploma of Information Technology as a faster, lower-cost entry point"
      ]
    },

    skills: [
      { name: "Programming languages", level: "Essential" },
      { name: "Problem-solving", level: "Essential" },
      { name: "Logical thinking", level: "Essential" },
      { name: "Debugging", level: "Important" },
      { name: "Communication", level: "Important" },
      { name: "Version control (Git)", level: "Important" },
      { name: "Continuous learning mindset", level: "Helpful" }
    ],

    questions: [
      "Do I enjoy solving logic puzzles and debugging problems?",
      "Am I comfortable with a field that changes every couple of years?",
      "Would a bootcamp, self-teaching, or a degree suit me better?",
      "Do I want to specialise (e.g. frontend, backend, mobile, data) over time?",
      "How will I build a portfolio to stand out against other graduates?"
    ],

    salaryExpect: { starting: "$78,000", longterm: "$145,000" },

    personality: ["Analytical", "Curious", "Persistent", "Detail-oriented", "Self-directed", "Creative problem-solver"],

    bestSuited: "People who enjoy logical problem-solving, don't mind constant change, and are motivated to keep learning independently",

    related: ["marketing-manager", "accountant"]
  },

  "lawyer": {
    slug: "lawyer",
    cluster: "Law & Public Service",
    clusterIcon: "⚖",
    title: "Lawyer",
    subtitle: "Represent clients, navigate the law, and advocate for justice — in court, in negotiation, or in corporate deals.",
    aiLevel: "med",
    aiLabel: "Medium",
    aiSummary: "AI tools already speed up legal research, document review, and contract drafting, and this will keep growing. But judgement, courtroom advocacy, negotiation, and client relationships stay firmly human — the role is shifting rather than disappearing, especially at the junior research-heavy end.",
    salaryRange: "$70k – $220k",
    studyYears: "5 years",
    jobStability: "High",
    lifestyle: "Low",

    overview: "Lawyers advise, represent, and advocate for clients across everything from criminal defence and family law to corporate deals and property settlements. It's an intellectually demanding career built on research, argument, and precision — with pathways ranging from courtroom litigation to behind-the-scenes corporate advisory work.",

    dayToDay: [
      "Research case law, legislation, and precedent for active matters",
      "Draft contracts, submissions, letters of advice, or court documents",
      "Meet with clients to understand their situation and explain options",
      "Negotiate on behalf of clients, or represent them in court/tribunal",
      "Liaise with barristers, opposing counsel, and other parties",
      "Track billable hours and manage a caseload of multiple matters"
    ],

    dayInLife: [
      { time: "8:00am", title: "Emails & priorities", desc: "Clear overnight emails, review court deadlines and priorities for the day." },
      { time: "9:00am", title: "Client meeting", desc: "Meet a client to discuss a property dispute, explain their options plainly." },
      { time: "10:30am", title: "Research", desc: "Research precedent cases to strengthen an argument for an upcoming matter." },
      { time: "12:00pm", title: "Lunch", desc: "A working lunch — reviewing a contract while eating at your desk is common." },
      { time: "1:00pm", title: "Drafting", desc: "Draft a detailed letter of advice and a set of contract amendments." },
      { time: "3:00pm", title: "Negotiation call", desc: "Negotiate settlement terms with opposing counsel over the phone." },
      { time: "4:30pm", title: "Court prep", desc: "Prepare documents and a brief for a barrister ahead of tomorrow's hearing." },
      { time: "6:30pm", title: "Wrap up", desc: "Log billable hours and finalise anything urgent before heading home." }
    ],

    pros: [
      "High earning potential, especially in corporate and commercial law",
      "Intellectually stimulating — constant analysis and argument",
      "Wide variety of specialisations to find your niche",
      "Strong prestige and transferable analytical skills",
      "Meaningful work — genuinely helping people through difficult situations",
      "Clear structured progression path (graduate → associate → senior associate → partner)"
    ],
    cons: [
      "Long hours are common, especially early career and in commercial firms",
      "Highly competitive to break into top firms and clerkships",
      "High-pressure, deadline-driven environment",
      "5+ years of study and Practical Legal Training before admission",
      "Emotionally demanding areas (family, criminal law) can take a toll"
    ],

    studyPathway: {
      main: {
        text: "Bachelor of Laws (LLB) — 4–5 years, or a Juris Doctor (JD) after another degree — 3 years, plus Practical Legal Training (PLT) and admission to the relevant State Supreme Court",
        cost: "$40,000–$100,000+ total (HECS-HELP available for most LLB programs)"
      },
      alternatives: [
        "Combined degree (e.g. Law/Commerce, Law/Arts) — 5 years, broadens career options",
        "Juris Doctor (JD) as a graduate-entry pathway if you studied something else first",
        "Paralegal or law clerk roles while studying, to build experience and contacts"
      ]
    },

    skills: [
      { name: "Legal research", level: "Essential" },
      { name: "Written communication", level: "Essential" },
      { name: "Critical analysis", level: "Essential" },
      { name: "Negotiation", level: "Important" },
      { name: "Public speaking / advocacy", level: "Important" },
      { name: "Attention to detail", level: "Important" },
      { name: "Resilience under pressure", level: "Helpful" }
    ],

    questions: [
      "Am I drawn to a specific area — commercial, criminal, family, property?",
      "Can I handle long hours, especially in the first few years?",
      "Do I want courtroom advocacy or behind-the-scenes advisory work?",
      "How competitive am I willing to be for clerkships and graduate positions?",
      "Would a combined degree suit me better than a straight LLB?"
    ],

    salaryExpect: { starting: "$75,000", longterm: "$190,000" },

    personality: ["Analytical", "Articulate", "Persuasive", "Detail-oriented", "Resilient", "Ethically driven"],

    bestSuited: "People who enjoy rigorous analysis and argument, communicate persuasively, and can handle a demanding, deadline-driven environment",

    related: ["police-officer", "accountant"]
  }

  /* -------------------------------------------------------------------
     Remaining 8 careers (primary-school-teacher, accountant, carpenter,
     psychologist, real-estate-agent, electrician, marketing-manager,
     police-officer) will be added here in the same shape.
     ------------------------------------------------------------------- */
};
