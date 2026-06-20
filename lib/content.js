// Central content source for the Bawsala Fellowship site.

export const APPLY_URL = "https://form.jotform.com/Bawsala/Fellowship-Registration-Form"; // Jotform application link
export const CONTACT_EMAIL = "info@bawsalafellowship.org";
export const SOCIAL = {
  instagram: "https://www.instagram.com/bawsalafellowship/",
  linkedin: "https://www.linkedin.com/company/bawsala-fellowship-program",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Objectives", href: "#objectives" },
  { label: "Journey", href: "#journey" },
  { label: "Program", href: "#program" },
  { label: "Mentors", href: "#mentors" },
  { label: "Apply", href: "#apply" },
  { label: "FAQ", href: "#faq" },
];

export const objectives = [
  {
    title: "Cultivate Self-Aware Leaders",
    desc: "Help fellows understand their identity, values, and leadership style before leading others.",
    icon: "compass",
  },
  {
    title: "Build Practical Capability",
    desc: "Equip participants with the decision-making, strategy, and execution skills to lead in complex environments.",
    icon: "spark",
  },
  {
    title: "Deepen National Understanding",
    desc: "Develop a clear grasp of Oman's institutions, sectors, and Vision 2040 priorities.",
    icon: "globe",
  },
  {
    title: "Connect Talent With Leaders",
    desc: "Bridge the gap between ambitious youth and Oman's most influential decision-makers.",
    icon: "network",
  },
  {
    title: "Turn Ideas Into Impact",
    desc: "Move fellows from insight to action through real-world challenges and capstone projects.",
    icon: "target",
  },
  {
    title: "Grow a Lasting Network",
    desc: "Build an alumni community committed to Oman's long-term development.",
    icon: "people",
  },
];

export const journey = [
  {
    title: "Leading with Identity",
    lead: "Understand yourself before leading others.",
    desc: "Explore your motivations, values, strengths, and areas for growth while gaining insight into how different people think, communicate, and make decisions.",
  },
  {
    title: "Leading with Perspective",
    lead: "Understand the wider system around you.",
    desc: "Develop a broader understanding of Oman's institutions, sectors, opportunities, and national priorities.",
  },
  {
    title: "Leading with Adaptive Thinking",
    lead: "Learn how leaders make decisions in complex environments.",
    desc: "Evaluate trade-offs, challenge assumptions, navigate uncertainty, and think strategically about the future.",
  },
  {
    title: "Leading with Adaptive Execution",
    lead: "Move from ideas to action.",
    desc: "Learn how change happens through institutions, stakeholders, influence, and practical execution.",
  },
  {
    title: "Reflection & Recalibration",
    lead: "Define your leadership direction.",
    desc: "Reflect on your growth, reassess your assumptions, and articulate the role you hope to play in Oman's future.",
  },
];

export const programComponents = [
  {
    title: "Executive Mentorship",
    desc: "One-on-one mentorship with senior leaders and experts from diverse sectors.",
    icon: "compass",
  },
  {
    title: "Leadership Workshops",
    desc: "Interactive sessions focused on leadership, strategy, communication, decision-making, and personal development.",
    icon: "spark",
  },
  {
    title: "Institutional Visits",
    desc: "Exclusive access to leading public and private sector institutions.",
    icon: "building",
  },
  {
    title: "Leadership Simulations",
    desc: "Practical exercises designed to challenge participants and develop adaptive leadership capabilities.",
    icon: "target",
  },
  {
    title: "Capstone Project",
    desc: "Apply your learning to a real-world challenge and develop practical recommendations.",
    icon: "flag",
  },
  {
    title: "Fellowship Community",
    desc: "Connect with a cohort of exceptional students from universities across Oman and abroad.",
    icon: "people",
  },
];

export const stats = [
  { value: 700, suffix: "+", label: "Applications" },
  { value: 20, suffix: "", label: "Selected Fellows" },
  { value: 28, suffix: "", label: "Executive Mentors" },
  { value: 60, suffix: "+", label: "Mentorship Hours" },
  { value: 67000, suffix: "+", label: "Social Media Reach" },
  { value: 4300, suffix: "+", label: "Community Members" },
];

export const mentorCategories = [
  "Government Ministers",
  "CEOs of leading national organizations",
  "Ambassadors & diplomats",
  "Entrepreneurs & founders",
  "Senior executives",
  "Public policy experts",
  "Vision 2040 contributors",
];

// `logo` points to a file in /public/partners/. If the image is missing, the
// component falls back to rendering `name` as a wordmark.
export const partners = [
  { name: "Royal Academy of Management", logo: "/partners/royal-academy-of-management.png" },
  { name: "Sultan Haitham City", logo: "/partners/sultan-haitham-city.png" },
  { name: "Omantel", logo: "/partners/omantel.png" },
  { name: "Muwasalat", logo: "/partners/muwasalat.png" },
  { name: "Invest in Oman", logo: "/partners/invest-in-oman.png" },
  { name: "Oman Commercial Arbitration Centre", logo: "/partners/oman-commercial-arbitration-centre.png" },
  { name: "Global Shapers Muscat Hub", logo: "/partners/global-shapers-muscat-hub.png" },
];

// Rendered after the lead-in "You should apply if you are:" — each item reads
// naturally without a leading verb.
export const eligibility = [
  "An Omani national",
  "Currently enrolled in university, or a graduate within the last 2 years",
  "Driven by clear leadership potential",
  "Committed to contributing to Oman's development",
  "Eager to learn, grow, and challenge yourself",
  "Looking to join a community of future leaders",
];

export const programInfo = [
  { label: "Dates", value: "9 – 20 August 2026", icon: "calendar" },
  { label: "Location", value: "Muscat, Sultanate of Oman", icon: "pin" },
  { label: "Format", value: "In-Person", icon: "building" },
  { label: "Program Hours", value: "8:00 AM – 5:00 PM", icon: "clock" },
  { label: "Language", value: "English", icon: "globe" },
  { label: "Duration", value: "12-day immersive experience", icon: "spark" },
];

export const faqs = [
  {
    q: "Do I need previous leadership experience?",
    a: "Applicants should be able to demonstrate leadership potential through meaningful contributions and involvement in their communities. This may include leading student societies or clubs, founding initiatives, projects, or businesses, organizing events or campaigns, volunteering and community service, representing students or youth groups, or taking initiative to create positive impact. We are less interested in titles and more interested in the actions, responsibility, and impact demonstrated by applicants.",
  },
  {
    q: "Who can apply?",
    a: "The Bawsala Fellowship is open to ambitious Omani university students and recent graduates who demonstrate leadership potential, initiative, and a commitment to contributing to Oman's future.",
  },
  {
    q: "Is there an age requirement?",
    a: "Yes. Applicants must be between 19 and 25 years old at the start of the Fellowship.",
  },
  {
    q: "I am currently employed. Can I apply?",
    a: "Yes. Applicants who have started full-time employment within the last 12 months may still apply. However, participants must be available for the full duration of the program and must arrange any required leave with their employer before the Fellowship begins.",
  },
  {
    q: "I have an internship during the summer. Can I apply?",
    a: "Yes. Applicants undertaking internships are welcome to apply provided they can attend all Fellowship activities and secure any necessary leave or flexibility from their host organization.",
  },
  {
    q: "Can students studying outside Oman apply?",
    a: "Absolutely. We strongly encourage applications from Omani students studying abroad, including undergraduate and postgraduate students.",
  },
  {
    q: "What is the selection process?",
    a: "The selection process may include a written application, online assessments, video submission, and interviews. The process is designed to identify applicants with strong leadership potential, motivation, and a commitment to creating positive impact.",
  },
  {
    q: "Who reviews the applications?",
    a: "Applications are reviewed by independent assessors and professionals from different sectors using a structured evaluation process. Selection decisions are not made solely by the Fellowship team.",
  },
  {
    q: "What qualities are you looking for?",
    a: "We look for applicants who demonstrate leadership potential, initiative and ownership, commitment to service, strong communication skills, curiosity and willingness to learn, teamwork and collaboration, and a commitment to contributing to Oman's development.",
  },
  {
    q: "Is attendance mandatory?",
    a: "Yes. Participants are expected to attend all core Fellowship activities. Due to the immersive nature of the program, full participation is required.",
  },
  {
    q: "Will I receive a certificate?",
    a: "Yes. Participants who successfully complete the Fellowship requirements will receive an official Certificate of Completion.",
  },
  {
    q: "What happens after the program ends?",
    a: "Participants become part of the Bawsala Alumni Network, gaining access to future opportunities, events, professional connections, and continued engagement with the community.",
  },
  {
    q: "Can I apply again if I am not selected?",
    a: "Yes. We encourage eligible applicants to apply again in future cohorts.",
  },
  {
    q: "How can I contact the team?",
    a: "For any questions not covered above, please contact us at info@bawsalafellowship.org.",
  },
];
