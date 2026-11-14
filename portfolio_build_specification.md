# IS218 First Slice Portfolio — Build Specification

## Initial Context & Key Information

- Follow the steps in order; I will connect each step to an issue to track the progress. Follow the information & context to complete steps.
- Render all shared content from a single data/Markdown source, and have the NavBar **"Toggle Styles"** button switch a global CSS class or reactive theme state (e.g., `style-1` vs. `style-2`) rather than duplicating pages. **Do not duplicate content.**
- Ensure code is easy to update, human readable, and concise for consistent updating ease and tracking.
- Keep my writing verbatim for sections I need to write about (most have `""` around them), while fixing any typos or grammatical errors.
- Use Montserrat (with a rounded, professional sans-serif fallback) for all section labels and headings in every presentation option.
- The homepage is the **"About Me"** page.

---

## Steps

- **Step 1:** Initial setup instructions described in "Step 1" below.
- **Step 2:** Build out structure of Presentation Option 1; do not fill in the wordy content and information yet.
- **Step 3:** Build Presentation Option 1 fully.
- **Step 4:** Build out structure of Presentation Option 2; do not fill in the wordy content and information yet.
- **Step 5:** Build Presentation Option 2 fully.

### Step 1 Setup & Architecture Details
- There will be two lightweight presentation options that can be toggled between via a **"Toggle Styles"** button in the NavBar at the top. Users should be able to toggle back and forth between the two options.
- Default upon first opening the site should be **Presentation Option 1**.
- Switch seamlessly between Option 1's 3 pages and Option 2's single scrolling page at the matching section.
- Build the site using **VitePress**, hosted on **GitHub Pages via GitHub Actions**.
- Get the VitePress site up and running with the homepage for Presentation Style 1.
- In `README.md`, add a link to the project record: `https://github.com/shreek3724/IS218-003-Review-1-Plan-Portfolio/blob/main/project_record.md` and add a link to the portfolio site being built.
- Start by creating a homepage for Presentation Style 1, which switches to Presentation Style 2 upon clicking the **Toggle Styles** button.

---

## Integrity Checks & Testing (`checks_and_tests.md`)

Ensure you can complete these checks for the integrity of the site. Log check results per check, with a description of each check, in an MD file called `checks_and_tests.md`. Run these checks at the end of the steps to ensure everything works as needed. **Include the exact date on every check logged.**

- **Option Switch & Content Parity Check:** Switching between Option 1 and Option 2 keeps the exact same intro, case studies, résumé, and links intact without broken layout states. Page runs properly and loads content.
- **Mobile / Narrow Viewport Check:** Both presentation options remain readable with no horizontal overflow or overlapping controls on a phone-width screen.
- **Keyboard Navigation & Link Check:** Tabbing through controls, option toggles, and external links works cleanly, and all links (GitHub, LinkedIn, creative app, group repo, résumé) resolve properly.
- **Attribution & Limits Check:** Both case studies describe your personal work, group teammates' work, AI/starter assistance, and honest limits / planned work.
- **Inspectable Evidence Check:** Every linked case study opens properly to a working page. This does not apply to any items unlinked or marked as `"TBD - Will be added"` or of that nature.
- **Professional Materials Check:** Your résumé draft (listing only verified coursework/builds, not implied jobs), GitHub profile, LinkedIn profile, and contact route are easy to locate and open without 404s.

---

## SHARED INFO & CONTEXT: Overall Site Style

### Direction A — Approachable Creative Minimalist
- **Visual Concept:** A clean, uncluttered layout with ample whitespace, crisp modern typography, and a warm, inviting color palette (e.g., soft off-white canvas with vibrant amber, butter-yellow, and indigo accents).
- **Visual Reference / Adapted Idea:** Inspired by modern creative software landing pages (such as Figma and OpenArt web UIs). Adapts clean card containers and playful micro-interactions to make technical prototypes easy and fun to explore. Example reference website link: `https://www.lamagadan.studio/`
- **Tradeoff / Rationale:** Keeps the UI lightweight and scannable for busy reviewers while presenting an energetic, friendly personality suited for creative AI product roles. It delivers a minimalist, easy-to-navigate design that remains approachable and friendly through vibrant accent colors, allowing reviewers to quickly access items without visual overload, expressing user-centered design thinking.

---

## SHARED INFO & CONTEXT: Shared Content and Ideas to Maintain (For Both Presentation Options)

### Short Introduction & "About Me"
- **Short introduction goal:** 2–3 sentences covering what interests you, what you can demonstrate right now, and the opportunity you want next.
- **Section Title:** `"About Me"`
- **Who I am & What I Stand For:**
  > "In a world that is constantly racing to be as technologically advanced as possible, I find we are losing sight of who truly technology is for- people. I want to bring human needs and thinking back to design, through empathetic, accessible and intuitive user experiences."
- **What I Demonstrate:**
  > "I am an aspiring accessibility and experience designer who has created a variety of products, and projects for different audiences, with excitement and needs in mind, driven by my research and user-testing abilities- using AI technology, physical mediums like 3D printing, wiring and welding, and digital systems of UI design, and coding to bring ideas to life."
- **Future Opportunities & Goals:**
  > "In future opportunities, I look for work that brings together my multidisciplinary nature to create accessible, empathetic and intuitive digital user experiences- bringing together technology, design, and research for human-centered technological experiences."
- **Action:** Insert links to Contact & Resume Page/Section.

### Individual Project Case Study (Current State)
- **Section Title:** `"Art Conservation & Restoration Experience"`
- **Section Sub-Title:** `"Individual Project Case Study with AI/ Starter Assistance"`
- **What It Is:**
  > "The project is a game to simulate the art conservation process in a relaxing environment. Users will be given a damaged painting, and need to logically use clues to create solutions to use on the correct parts of the painting- restoring the painting layer by layer."
- **Built So Far:**
  > "So far, the first working demo, or "slice" is in progress. The game plans have been made, including its UI, the data flow, game logic and standard gameplay loop amongst others."
- **Learning (in bullet points):**
  - "The process of spec-driven development."
  - "How to construct data flows and game mechanic flows."
  - "How to design gameplay loops and game logic."
- **Links & Evidence:**
  - **GitHub Repo:** `"TBD - Will be added"`
  - **Working First Slice Demo:** `"TBD - Will be added"`
  - **Checks & Tests:** `"TBD - Will be added"`
- **Honest Status:**
  > "Currently working on building the SPEC for the first slice, and planning the game development, implementation and logic for the first slice. Steps after this have not begun yet. The final game integration is still unfinished, the final game logic is still unfinished, and the game repo has not been created yet."

### Group Project Case Study (Current State)
- **Section Title:** `"To Be Decided"`
- **Section Sub-Title:** `"Group Project Case Study with AI/ Starter Assistance"`
- **Summary:**
  > "TBD - Will be added. The project has not begun yet, as group member divisions are yet to be made, and the project is yet to be discussed in class with the professor. Progress, including what is to be built, and the plan will be added."
- **My Responsibilities:** `"TBD - Will be added"`
- **Teammate Responsibilities:** `"TBD - Will be added"`
- **Links & Evidence:**
  - **GitHub Repo:** `"TBD - Will be added"`
  - **Working First Slice Demo:** `"TBD - Will be added"`
  - **Checks, Tests & Issues:** `"TBD - Will be added"`
- **Honest Status:**
  > "The project has not begun yet, as group member divisions are yet to be made, and the project is yet to be discussed in class with the professor. Progress, including what is to be built, and the plan will be added."

### Résumé Draft
- **Note (not to be added to website):** Your current résumé text (and/or link to a draft PDF) using only real coursework and implemented skills. Note if any sections are still in draft form.
- **Context for website:** PDF will be uploaded for your use; keep all information the same. Ask me to upload it when you need it to add to the site.

### Your Owned Links & Contact Route
- **GitHub Profile:** `https://github.com/shreek3724`
- **LinkedIn:** `https://www.linkedin.com/in/shreejitha-kanduri-36054b28a/`
- **Portfolio Repository:** `https://github.com/shreek3724/IS218-Portfolio`
- **Contact Email:** `sk3724@njit.edu`

---

## Presentation Option 1 (Default — Multi-Page View)

- **Default Behavior:** Open to Option 1 as the default; toggle to Presentation Option 2 upon clicking **Toggle Styles**.
- **Colors & Typography:**
  - **Page Background:** Warm white.
  - **Section Labels:** Indigo, bold Montserrat font (or similar rounded professional sans-serif fallback if unavailable).
  - **Section Text:** Indigo, normal font weight, Calibri (or similar sans-serif fallback if unavailable).
  - **Cards & Accents:** Inside of cards is butter yellow; any lines and borders are warm orange.
- **NavBar:**
  - **Left side:** `"PortfolioHome"` — upon click leads back to Option 1's home page (`About Me`).
  - **Right-aligned buttons:** `"About Me"`, `"Projects"`, `"Contact & Resume"`, `"Toggle Styles"`.

### 1. `"About Me"` Page (Homepage)
- Include my name and major info as the first section label centered at the top of the page, above `"About Me"`:
  - **Shree K**
  - **HCI Major & Minor in Industrial Design**
- Have a section label called `"About Me"`.
- **3 cards side by side (next to each other):**
  1. `"Who I am & What I Stand For"`
  2. `"What I Demonstrate"`
  3. `"Future Opportunities & Goals"`
  - Each card follows the site styles above (butter yellow interior, rounded corners, warm orange clear border) and pulls content from the Shared Content section.
- Below all the cards, have a rectangular rounded-corner button that links to the **Contact & Resume** page, labeled `"Contact & Resume"`.

### 2. `"Projects"` Page
- Have a section label called `"Projects"`.
- **2 pill-shaped buttons** side by side under the main `"Projects"` label that jump/link to the individual and group project sections on this page, styled in indigo with white text in bold Calibri font:
  1. `"Art Restoration Game"`
  2. `"Customer Project"`

#### Art Restoration Game Section
- **Section Title:** `"Art Conservation & Restoration Experience"`
- **Section Sub-Title:** `"Individual Project Case Study with AI/ Starter Assistance"`
- **3 cards side by side (next to each other):** `"What It Is"`, `"Built So Far"`, `"Learning"`
  - Each card follows the site styles above (butter yellow interior, rounded corners, warm orange clear border) and pulls content from the Shared Content section.
- **Subsection under the cards:** `"Check it Out"`
  - Place this info inside a large rectangular card/section under the subsection title:
    - **GitHub Repo:** `"TBD - Will be added"`
    - **Working First Slice Demo:** `"TBD - Will be added"`
    - **Checks & Tests:** `"TBD - Will be added"`
  - **Subsection inside/under this:** `"Honest Status"` (pull content from the Shared Content section).

#### Customer Project Section
- **Section Title:** `"To Be Decided"`
- **Section Sub-Title:** `"Group Project Case Study with AI/ Starter Assistance"`
- **3 cards side by side (next to each other):** `"Summary"`, `"My Responsibilities"`, `"Teammate Responsibilities"`
  - Each card follows the site styles above (butter yellow interior, rounded corners, warm orange clear border) and pulls content from the Shared Content section.
- **Subsection under the cards:** `"Check it Out"`
  - Place this info inside a large rectangular card/section under the subsection title:
    - **GitHub Repo:** `"TBD - Will be added"`
    - **Working First Slice Demo:** `"TBD - Will be added"`
    - **Checks, Tests & Issues:** `"TBD - Will be added"`
  - **Subsection inside/under this:** `"Honest Status"` (pull content from the Shared Content section).

### 3. `"Contact & Resume"` Page
- **Section label:** `"Resume"`
  - Insert my résumé information in a rectangular card/section under the section label to help it stand out and group the information, formatted with the same pattern as my résumé.
- **Section label:** `"Contact & Links"`
  - Insert bullet points with these labels that link to the URLs/email next to them:
    - **GitHub Profile:** `https://github.com/shreek3724`
    - **LinkedIn:** `https://www.linkedin.com/in/shreejitha-kanduri-36054b28a/`
    - **Portfolio Repository:** `https://github.com/shreek3724/IS218-Portfolio`
    - **Contact Email:** `sk3724@njit.edu`

---

## Presentation Option 2 (Alternate — Single Scrollable Page)

- **Behavior:** This presentation option is not a new website; it is the toggled alternative version of Option 1 using the exact same shared information and context. It renders as **one long scrollable page** with all information, and clicking NavBar buttons scrolls smoothly to the corresponding section of the page.
- **Accessibility navigation:** Include a left-side navigation that links to the About Me, Projects, and Contact & Resume sections in the same way as the top NavBar.
- **NavBar:**
  - **Left side:** `"PortfolioHome"` (leads back to the top/home section of Option 2) alongside buttons `"About Me"`, `"Projects"`, `"Contact & Resume"`, and `"Toggle Styles"`.
- **Colors & Typography:**
  - **Page Background:** Light pastel butter yellow.
  - **Section Labels:** Indigo, bold Montserrat font (or similar rounded professional sans-serif fallback if unavailable).
  - **Section Text:** Indigo, normal font weight, Calibri (or similar sans-serif fallback if unavailable).
  - **Cards & Accents:** Inside of cards is white; any lines and borders are warm orange.

### 1. First Section & Homepage: `"About Me"`
- Include my name and major info as the first section label centered at the top of the page, above `"About Me"`:
  - **Shree K**
  - **HCI Major & Minor in Industrial Design**
- Have a section label called `"About Me"`.
- **3 items/subsections stacked vertically (one under each other so all 3 are visible at the same time):**
  1. `"Who I am & What I Stand For"`
  2. `"What I Demonstrate"`
  3. `"Future Opportunities & Goals"`
  - Have each subsection label, and then the corresponding content inside a rectangular card (white interior, rounded corners, warm orange border) directly under its subsection label, pulling from the Shared Content section.

### 2. Second Section: `"Projects"`
- Split this section into two halves side by side on desktop (stacking cleanly on mobile): the **left half** for the Individual Project and the **right half** for the Group Project.

#### Left Side: Art Restoration Game Section
- **Section Title:** `"Art Conservation & Restoration Experience"`
- **Section Sub-Title:** `"Individual Project Case Study with AI/ Starter Assistance"`
- **3 cards stacked vertically (below each other so all 3 are visible at the same time):** `"What It Is"`, `"Built So Far"`, `"Learning"`
  - Each card follows Option 2's styles (white interior, rounded corners, warm orange clear border) and pulls content from the Shared Content section.
- **Subsection under the cards:** `"Check it Out"`
  - Place this info inside a large rectangular card/section under the subsection title:
    - **GitHub Repo:** `"TBD - Will be added"`
    - **Working First Slice Demo:** `"TBD - Will be added"`
    - **Checks & Tests:** `"TBD - Will be added"`
  - **Subsection inside/under this:** `"Honest Status"` (pull content from the Shared Content section).

#### Right Side: Customer Project Section
- **Section Title:** `"To Be Decided"`
- **Section Sub-Title:** `"Group Project Case Study with AI/ Starter Assistance"`
- **3 cards stacked vertically (below each other so all 3 are visible at the same time):** `"Summary"`, `"My Responsibilities"`, `"Teammate Responsibilities"`
  - Each card follows Option 2's styles (white interior, rounded corners, warm orange clear border) and pulls content from the Shared Content section.
- **Subsection under the cards:** `"Check it Out"`
  - Place this info inside a large rectangular card/section under the subsection title:
    - **GitHub Repo:** `"TBD - Will be added"`
    - **Working First Slice Demo:** `"TBD - Will be added"`
    - **Checks, Tests & Issues:** `"TBD - Will be added"`
  - **Subsection inside/under this:** `"Honest Status"` (pull content from the Shared Content section).

### 3. Third Section: `"Contact & Resume"`
- **Section label:** `"Resume"`
  - Insert my résumé information in a rectangular card/section under the section label to help it stand out and group the information, formatted with the same pattern as my résumé.
- **Section label:** `"Contact & Links"`
  - Insert cards with these labels that link to the URLs/email next to them:
    - **GitHub Profile:** `https://github.com/shreek3724`
    - **LinkedIn:** `https://www.linkedin.com/in/shreejitha-kanduri-36054b28a/`
    - **Portfolio Repository:** `https://github.com/shreek3724/IS218-Portfolio`
    - **Contact Email:** `sk3724@njit.edu`
