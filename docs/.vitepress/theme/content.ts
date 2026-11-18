export const profile = {
  name: 'Shree K',
  program: 'HCI Major & Minor in Industrial Design',
  about: [
    {
      title: 'Who I am & What I Stand For',
      text: 'In a world that is constantly racing to be as technologically advanced as possible, I find we are losing sight of who truly technology is for—people. I want to bring human needs and thinking back to design through empathetic, accessible, and intuitive user experiences.'
    },
    {
      title: 'What I Demonstrate',
      text: 'I am an aspiring accessibility and experience designer who has created a variety of products and projects for different audiences, with excitement and needs in mind, driven by my research and user-testing abilities—using AI technology, physical mediums like 3D printing, wiring, and welding, and digital systems of UI design and coding to bring ideas to life.'
    },
    {
      title: 'Future Opportunities & Goals',
      text: 'In future opportunities, I look for work that brings together my multidisciplinary nature to create accessible, empathetic, and intuitive digital user experiences—bringing together technology, design, and research for human-centered technological experiences.'
    }
  ]
}

export const projects = {
  individual: {
    title: 'Art Conservation & Restoration Experience',
    subtitle: 'Individual Project Case Study with AI/ Starter Assistance',
    cards: [
      { title: 'What It Is', text: 'The project is a game to simulate the art conservation process in a relaxing environment. Users will be given a damaged painting and need to logically use clues to create solutions to use on the correct parts of the painting—restoring the painting layer by layer.' },
      { title: 'Built So Far', text: 'So far, the first working demo, or "slice," is in progress. The game plans have been made, including its UI, the data flow, game logic, and standard gameplay loop, among others.' },
      { title: 'Learning', bullets: ['The process of spec-driven development.', 'How to construct data flows and game mechanic flows.', 'How to design gameplay loops and game logic.'] }
    ],
    links: [
      ['GitHub Repo', ['https://github.com/shreek3724/IS218CreativeGameSlice2']],
      ['Working First Slice Demo', ['https://shreek3724.github.io/IS218CreativeGameSlice2/']],
      ['Checks & Tests', [
        'https://github.com/shreek3724/IS218CreativeGameSlice2/actions/runs/44396434131/job/135127455493',
        'https://github.com/shreek3724/IS218CreativeGameSlice2/actions/runs/44396434131'
      ]]
    ] as const,
    status: 'Built out the first slice of the game. This covers a simulated sign in, gameplay loop, view saved results, and sign out. This will be expanded to build out the final game.'
  },
  group: {
    title: 'Bench & Bolt · Repair Inquiry Queue',
    subtitle: 'Group Project Case Study with AI/ Starter Assistance',
    cards: [
      { title: 'Summary', text: 'Building a customer queue intake for a business in need of a way to track their customers, orders and repairs easily and conveniently.' },
      { title: 'My Responsibilities', text: "Coordinator queue: decide what the coordinator sees · build queue page from Dhruvi's records · connect intake → queue · test submit-to-queue path (S2)" },
      { title: 'Teammate Responsibilities', text: "Ann (Anya): Intake form: decide what the coordinator enters and how errors show · build form + submission route using validate_inquiry · test a valid submission and a blank problem (S1) & Dhruvi: SQLite storage: define what's saved · save/retrieve, assign ID, set initial status · test retrieval after restart (S2)" }
    ],
    links: [
      { label: 'GitHub Repo', url: 'https://github.com/apink634/is218-bench-bolt' },
      { label: 'Working First Slice Demo', text: 'TBD - Will be added' },
      { label: 'Checks, Tests & Issues', url: 'https://github.com/apink634/is218-bench-bolt/actions/runs/44225587827' }
    ],
    status: 'Project responsibilities have been decided between team members, and research work has been completed, along with a record and a spec document. First working slice will be worked on.'
  }
}

export const contactLinks = [
  ['GitHub Profile', 'https://github.com/shreek3724'],
  ['LinkedIn', 'https://www.linkedin.com/in/shreejitha-kanduri-36054b28a/'],
  ['Portfolio Repository', 'https://github.com/shreek3724/IS218-Portfolio'],
  ['Contact Email', 'mailto:sk3724@njit.edu']
]

export const resume = {
  education: 'Bachelor of Science in Human-Computer Interaction | Minor in Industrial Design | GPA: 4.0',
  experience: [
    { title: 'UX/UI & Industrial Design Intern', organization: 'EV Buddy Inc.', dates: 'September 1, 2026 - Present & May 22, 2025 - May 7, 2026', bullets: ['Designing & developing UX/UI prototypes, cross-platform design systems, and branding kits. Collaborated with technical & marketing teams to design customer experiences, wireframes, and product flows for developed applications and the official website.', 'Designed one of the first official EVBuddy websites, currently updating throughout development, and the EVBuddy App, Charger 2.0 Product Line, and Vehicle-to-Vehicle web interfaces & flows, home systems, and more, currently in development.'] },
    { title: 'Digital & Client Experience Design Intern', organization: 'TIAA', dates: 'June 1, 2026 - August 7, 2026', bullets: ['Designed & prototyped a proactive, trust-building AI educational platform in multiple variations for clients & participants, managing stakeholder and user needs, research, and resources in an end-to-end process.', 'Won People’s Choice in the 2026 AI Hackathon, creating a user-friendly AI tool with a team to help new users navigate their site and portfolios during initial interactions, onboarding & encouraging retention.'] },
    { title: 'Undergraduate Sustainability Research Assistant', organization: 'NJIT', dates: 'September 2024 - January 13, 2026', bullets: ['Fall 2024 URI research in Electrocatalytic Membrane Technology to Transform Nitrate Pollution into Ammonium Salt Products.', 'Researching methods, concentration, and impacts of PFAS & Environmental Water Quality Efforts through chemical processes & USDA-related experiments, product development & studies.'] },
    { title: 'Product Design Intern', organization: 'Riogen.inc', dates: 'January 2023 - August 2024', bullets: ['Designing new products & interactions with OnShape CAD software & traditional mediums.', 'Researching catalyst product sciences and manufacturing with the guidance of experts.', 'Collaborating with others to create new products, presenting work & forming design reports.'] }
  ],
  certificates: [['UX Foundations: Interaction Design', 'Issued by: LinkedIn; (1/13/2025)'], ['C++ Essential Training', 'Issued by: LinkedIn; (1/23/2025)'], ['RCR Basic Course', 'Issued by: CITI; (2/4/2026)']],
  skills: {
    technical: ['Figma', 'Kiro', 'Figma Agent & Figma Make', 'HTML, CSS, & C++ Essentials', 'Basic JavaScript', 'Onshape CAD Software', 'Solidworks', 'UX Design', 'Digital/Graphic Design', 'AutoCad', 'Fusion360', 'AutoDesk & AutoCad', 'Webflow', 'Corel Painter & Draw', 'Canva', 'Ibis Paint X', 'Google & Microsoft Suite', 'Adobe Illustrator & InDesign', 'Adobe Creative Suite', 'Adobe Photoshop'],
    soft: ['Planning & Organization', 'Teamwork', 'Time Management', 'Willingness to Learn & Adaptability', 'Dependability', 'Leadership', 'Bilingual, Telugu & English', 'Event Management', 'Communication']
  },
  volunteer: [
    { title: 'Saavan - Public Relations, Marketing & Event Coordination Lead', dates: 'Fall 2025 - Present', bullets: ['Lead, manage & design Saavan’s social media and in-person marketing strategies, digital content, and planning performance, team building, collaborative, and marketing events.'] },
    { title: 'Knit & Crochet', dates: 'September 2024 - Present', bullets: ['Knit and crochet wearables and blankets that are donated to in-need and homeless communities around Newark.', 'Teach members & others how to knit and crochet to spread awareness and encourage further donations.'] },
    { title: 'Industrial Designers Society of America - Social Media & Public Relations Lead', dates: '2024 - 2025', bullets: ['Manage & Design IDSA’s social media and digital content for the NJIT chapter, both in person and online events.', 'Work with the board & members to plan & manage events to spread awareness & design education.'] },
    { title: 'Lyra Volunteer Mentor', dates: 'September 2024 - May 2025', bullets: ['Mentored students at East Side High School, New Jersey on numerous STEM careers and fields.'] },
    { title: 'Volunteer at the Sai Balaji Temple', dates: '2021 - 2025', bullets: ['Decorated sets for events and idols, set up furniture for events, organized events.', 'Sing at poojas and events, such as Ammavari Poojas, Openings, etc.', 'Managed crowd flow, arranged seating spaces.'] },
    { title: 'Red Cross Club', dates: '2020 - 2025', bullets: ['American Red Cross Adult and Pediatric First Aid/CPR/AED Certification - 2023', 'Volunteer to aid in managing Blood Drives, fundraising events, and other activities.'] }
  ],
  awards: ['TIAA AI Hackathon - People’s Choice Award - July 2026', 'Armand Berliner Mathematics Endowed Scholarship - 9/18/2025', 'Industrial Designers Society of America - 2024 - 2025: Social Media & Public Relations EBoard Lead', 'Saavan - Public Relations, Marketing & Event Coordination Lead - Fall 2025 - Present', 'Fall 2024 URI Seed Grant Winner', 'Girl Scout Gold Award - December 3rd, 2023: Awarded for 120+ hours of service towards a self-directed community sustainability project.', 'New Jersey Legislation Certificate signed by President of the Senate & Speaker of the General Assembly.', 'Organizational Leadership County-Level Award FBLA in Organizational Leadership Assessment', 'Vasavi Association’s “Vasavi’s Got Talent” Competition - 1st Place in Singing (April 17th, 2022)', 'Nata Idol Reality Show Second Round Contestant (October 18th, 2021)', 'Appointed as the Solo Pooja singer at the Sai Balaji Temple', 'National Honors Society Certified Member - As of May 31, 2023', 'Math Honors Society Certified Member - As of December 2, 2022', 'World Language Honors Society Certified Member - As of April 27, 2023', 'American Red Cross Adult and Pediatric First Aid/CPR/AED Certification - 2023']
}
