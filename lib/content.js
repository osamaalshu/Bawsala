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

export const graduationVideo = {
  src: "/videos/cohort-2025-graduation.mov",
  eyebrow: "Cohort 2025",
  title: "Celebrating Our First Graduating Class",
  subtitle: "A look back at the graduation ceremony and the journey of Bawsala's inaugural cohort.",
};

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

export const mentors = [
  { name: "H.E. Dr. Khamis Al Jabri", position: "Chairman of Oman Vision 2040 Implementation Follow-up Unit", photo: "/mentors/khamis-al-jabri.png" },
  { name: "H.E. Dr. Khalfan Al Shueili", position: "Minister of Housing and Urban Planning", photo: "/mentors/khalfan-al-shueili.png" },
  { name: "H.E. Dr. Saud Al Habsi", position: "Minister of Agricultural, Fisheries and Water Resources", photo: "/mentors/saud-al-habsi.png" },
  { name: "HH Sayyida Basma Al Said", position: "Founder of Whispers of Serenity Clinic and Clinical Psychology Specialist", photo: "/mentors/basma-al-said.png" },
  { name: "H.E. Dr. Hilal Al Sabti", position: "Minister of Health", photo: "/mentors/hilal-al-sabti.png" },
  { name: "H.E. Eng. Naif Al Abri", position: "Chairman of the Civil Aviation Authority", photo: "/mentors/naif-al-abri.png" },
  { name: "H.E. Dr. Ali Al-Lawati", position: "President of the Royal Academy of Management", photo: "/mentors/ali-al-lawati.png" },
  { name: "H.E. Eng. Said Al Maawali", position: "Minister of Transport, Communications and Information Technology", photo: "/mentors/said-al-maawali.png" },
  { name: "H.E. Dr. Said Al Saqri", position: "Minister of Economy", photo: "/mentors/said-al-saqri.png" },
  { name: "H.E. Ibtisam Al Farouji", position: "Undersecretary of the Ministry of Commerce, Industry and Investment Promotion for Investment Promotion", photo: "/mentors/ibtisam-al-farouji.png" },
  { name: "H.E. Maitha Al Mahrouqi", position: "Omani Ambassador to Germany", photo: "/mentors/maitha-al-mahrouqi.png" },
  { name: "H.E. Ambassador Dr Mohammed Al Hassan", position: "Special Representative for Iraq and Head of the United Nations Assistance Mission for Iraq (UNAMI)", photo: "/mentors/mohammed-al-hassan.png" },
  { name: "Dr. Liane Saunders", position: "British Ambassador to the Sultanate of Oman", photo: "/mentors/liane-saunders.png" },
  { name: "Eng. Ya'arub Al Ya'arubi", position: "Senior Advisor to the Executive Director at the World Bank Group", photo: "/mentors/yaarub-al-yaarubi.png" },
  { name: "Dr. Ali Al Bimani", position: "Vice-Chancellor of the National University of Science and Technology", photo: "/mentors/ali-al-bimani.png" },
  { name: "Dr. Amer Al Rawas", position: "CEO of Tasneea Oil and Gas Technology Group", photo: "/mentors/amer-al-rawas.png" },
  { name: "Eng. Abdulrahman Al Hatmi", position: "Group CEO of Asyad", photo: "/mentors/abdulrahman-al-hatmi.png" },
  { name: "Areej Mohsin Darwish", position: "Chairperson of ACERE – MHD LLC", photo: "/mentors/areej-mohsin-darwish.png" },
  { name: "Eng. Musab Al Mahrouqi", position: "Businessman and Investor", photo: "/mentors/musab-al-mahrouqi.png" },
  { name: "Qais Al Zakwani", position: "CEO of Nama Water Services", photo: "/mentors/qais-al-zakwani.png" },
  { name: "Said Al Shanfari", position: "CEO of the Oman Convention and Exhibition Centre", photo: "/mentors/said-al-shanfari.png" },
  { name: "Nasser Al Sheibani", position: "CEO of Al Mouj Muscat", photo: "/mentors/nasser-al-sheibani.png" },
  { name: "Adel Taqi", position: "CEO of Omniyat Group, Dubai – United Arab Emirates", photo: "/mentors/adel-taqi.png" },
  { name: "Asma Al Zadjali", position: "Head of Group Banking Operations, Oman Arab Bank", photo: "/mentors/asma-al-zadjali.png" },
  { name: "Eng. Kalat Al Bulooshi", position: "CEO of Oman Investment Authority and Chairman of Khazaen Economic City", photo: "/mentors/kalat-al-bulooshi.png" },
  { name: "Eng. Maqbool Al Wahaibi", position: "CEO of Oman Data Park", photo: "/mentors/maqbool-al-wahaibi.png" },
  { name: "Saud Al Riyami", position: "CEO of Ooredoo Oman", photo: "/mentors/saud-al-riyami.png" },
  { name: "Sheikh Aimen Al Hosni", position: "Chairman, ONEIC", photo: "/mentors/aimen-al-hosni.png" },
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
