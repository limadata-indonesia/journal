export const TRUSTED_BY = [
  "University of Melbourne", "Seoul National University", "Kyoto University", "NUS Singapore",
  "Universitas Indonesia", "Mahidol University", "Tsinghua University", "IIT Bombay",
  "University of Cape Town", "Cairo University", "Universiti Malaya", "Chulalongkorn University",
  "King Abdulaziz University", "University of São Paulo", "Nanyang Technological University",
  "Universitas Gadjah Mada", "Peking University", "University of Hong Kong",
  "National Research Council", "WHO Collaborating Centre",
];

export const STATS = [
  { value: 15000, suffix: "+", label: "Manuscripts Edited" },
  { value: 95, suffix: "%", label: "Client Satisfaction" },
  { value: 120, suffix: "+", label: "Subject Editors" },
  { value: 42, suffix: "", label: "Research Fields" },
  { value: 65, suffix: "+", label: "Countries" },
];

export const SERVICES = [
  { icon: "PenLine", title: "Academic Proofreading", description: "Grammar, spelling, and punctuation refined to journal standards." },
  { icon: "FlaskConical", title: "Scientific Editing", description: "Deep edits for structure, logic, and scientific argumentation." },
  { icon: "Globe2", title: "Native Editing", description: "Reviewed by native English-speaking subject editors." },
  { icon: "LayoutTemplate", title: "Journal Formatting", description: "Formatted precisely to your target journal's guidelines." },
  { icon: "MessageSquareReply", title: "Reviewer Response Editing", description: "Polished, persuasive responses to reviewer comments." },
  { icon: "Languages", title: "Translation", description: "Full manuscript translation with subject-matter accuracy." },
  { icon: "Rocket", title: "Publication Support", description: "End-to-end guidance from submission to acceptance." },
  { icon: "BarChart3", title: "Statistical Review", description: "Verification of statistical methods and reporting." },
];

export const WORKFLOW_STEPS = [
  { title: "Upload Manuscript", description: "Submit your draft securely in any format." },
  { title: "AI Analysis", description: "Instant scan for clarity, tone, and structure." },
  { title: "Editor Assignment", description: "Matched to a subject-matter expert editor." },
  { title: "Editing", description: "Thorough language and scientific refinement." },
  { title: "Quality Assurance", description: "A second editor reviews every change." },
  { title: "Final Delivery", description: "Polished manuscript, ready for submission." },
];

export const WHY_CHOOSE_US = [
  { icon: "GraduationCap", title: "Subject-matter experts", description: "PhD-level editors in your exact field." },
  { icon: "Globe2", title: "Native English editors", description: "Fluency and nuance that non-native editors miss." },
  { icon: "BookMarked", title: "Scopus reviewers", description: "Editors who have reviewed for Scopus-indexed journals." },
  { icon: "Award", title: "Former journal editors", description: "Editors who know what editors look for." },
  { icon: "Lock", title: "Confidential processing", description: "Your research stays yours, always." },
  { icon: "Zap", title: "Fast turnaround", description: "Delivery windows built around your deadlines." },
  { icon: "BadgeCheck", title: "ISO quality process", description: "A documented, repeatable quality standard." },
  { icon: "RefreshCw", title: "Unlimited revisions", description: "We refine until you're ready to submit." },
];

export const SUBJECT_AREAS = [
  "Medicine", "Engineering", "Business", "Computer Science", "Law", "Education",
  "Social Science", "Economics", "Chemistry", "Biology", "Physics", "Agriculture",
];

export const PUBLICATION_JOURNEY = [
  { title: "Research", helped: false },
  { title: "Writing", helped: false },
  { title: "Editing", helped: true },
  { title: "Journal Matching", helped: true },
  { title: "Submission", helped: true },
  { title: "Peer Review", helped: true },
  { title: "Acceptance", helped: false },
];

export const PRICING_TIERS = [
  {
    name: "Academic Editing",
    tagline: "For manuscripts ready for language refinement.",
    price: "Starting from",
    priceDetail: "Custom quote per manuscript",
    features: ["Grammar & clarity editing", "Academic tone review", "Turnaround from 3 days", "One round of revisions"],
  },
  {
    name: "Scientific Editing",
    tagline: "For manuscripts needing structural and scientific depth.",
    price: "Premium Consultation",
    priceDetail: "Scoped with a subject editor",
    features: ["Everything in Academic Editing", "Structure & argument review", "Subject-matter expert assigned", "Unlimited revisions"],
    highlighted: true,
  },
  {
    name: "Publication Concierge",
    tagline: "End-to-end support from draft to acceptance.",
    price: "Custom Packages",
    priceDetail: "For labs, institutions & enterprise",
    features: ["Everything in Scientific Editing", "Journal matching & formatting", "Reviewer response support", "Dedicated publication manager"],
  },
];

export const TESTIMONIALS = [
  {
    quote: "Publiora's editors understood the nuance of our methodology section better than I expected. Our manuscript was accepted on the first revision.",
    name: "Dr. Anisa Rahman",
    role: "Professor of Public Health",
    institution: "Universitas Gadjah Mada",
  },
  {
    quote: "As a non-native English speaker, getting feedback from a Scopus reviewer gave me real confidence before submission.",
    name: "Dr. Hiroshi Tanaka",
    role: "Senior Researcher",
    institution: "Kyoto University",
  },
  {
    quote: "The reviewer response editing service alone saved our paper. Precise, persuasive, and fast.",
    name: "Priya Menon, MD",
    role: "PhD Candidate, Clinical Medicine",
    institution: "NUS Singapore",
  },
];

export const FAQ_ITEMS = [
  {
    q: "How is Publiora different from a proofreading service?",
    a: "Proofreading only checks grammar. Publiora pairs subject-matter expert editors with a structured quality process covering language, scientific argumentation, journal formatting, and submission support — end to end.",
  },
  {
    q: "Who edits my manuscript?",
    a: "Every manuscript is matched to an editor with relevant subject-matter expertise, many of whom are former journal editors or active Scopus reviewers in your field.",
  },
  {
    q: "How long does editing take?",
    a: "Turnaround depends on manuscript length and service tier, typically starting from 3 business days for standard editing, with expedited options available.",
  },
  {
    q: "Is my research kept confidential?",
    a: "Yes. All manuscripts are processed under strict confidentiality agreements, and access is limited to your assigned editing team.",
  },
  {
    q: "Do you support all research fields?",
    a: "We cover 42 research fields across medicine, engineering, business, computer science, natural sciences, and more — each matched to a specialized editor.",
  },
];

export const ANALYZER_RESULT = {
  wordCount: "6,842 words",
  estimatedDelivery: "4 business days",
  recommendedEditor: "Dr. Farah Al-Sayed, PhD (Biomedical Engineering)",
  journalDifficulty: "High — Q1 Scopus-indexed target",
  publicationReadiness: 72,
  estimatedPrice: "Custom quote after editor review",
};

export const BEFORE_AFTER = {
  before:
    "This study is investigate the effect of temperature on the growth of bacteria in controlled environment, and result show that higher temperature is increasing the growth rate significantly compare to lower temperature groups.",
  after:
    "This study investigates the effect of temperature on bacterial growth under controlled conditions. Results indicate that higher temperatures significantly increase growth rate compared to lower-temperature groups.",
};

export const SAMPLE_MANUSCRIPT = [
  {
    id: "p1",
    original: "The result of this experiment shows that the proposed method are effective in reducing error rate on the dataset.",
    edited: "The results of this experiment demonstrate that the proposed method effectively reduces the error rate on the dataset.",
    comment: "Subject-verb agreement corrected; tightened phrasing for academic tone.",
  },
  {
    id: "p2",
    original: "In order to test the hypothesis, we was collect data from 240 participant over six month period.",
    edited: "To test the hypothesis, we collected data from 240 participants over a six-month period.",
    comment: "Corrected verb tense and pluralization; simplified opening clause.",
  },
  {
    id: "p3",
    original: "It can be concluded that the findings of this research is significant contribution to the field.",
    edited: "These findings represent a significant contribution to the field.",
    comment: "Removed passive hedging; corrected subject-verb agreement for conciseness.",
  },
];
