// ─── All portfolio content lives here.
// Edit this file to update your portfolio without touching any component.

export const ROLES = [
  'Salesforce Developer',
  '.NET Developer',
  'Software Developer',
  'Web Developer',
]

export const SKILLS = [
  { group: 'Salesforce',      color: 'sf',  tags: ['Salesforce Apex', 'LWC', 'Flows', 'Visualforce', 'SF Admin', 'AI Associate'] },
  { group: '.NET & Backend',  color: 'net', tags: ['C# / .NET', 'Blazor', 'REST APIs', 'JWT Auth', 'ASP.NET', 'Onion Arch'] },
  { group: 'Web & Other',     color: 'web', tags: ['HTML / CSS', 'JavaScript', 'React.js', 'Python', 'PHP', 'Bootstrap'] },
]

export const EDUCATION = [
  {
    period: '2021 – 2023',
    degree: 'Master of Computer Applications (MCA)',
    school: 'Sanjay Ghodawat University, Kolhapur',
    score:  'CGPA: 7.8',
  },
  {
    period: '2018 – 2021',
    degree: 'Bachelor of Computer Applications (BCA)',
    school: 'V.P. Institute of Management Studies & Research, Sangli',
    score:  '76%',
  },
]

export const INTERNSHIPS = [
  { period: 'Sep 2024 – Oct 2024', role: 'Salesforce Developer',       company: 'Neevas' },
  { period: 'Jan 2023 – Mar 2023', role: 'Software Development Intern', company: 'Virtue Byte, Pune' },
]

export const CERTIFICATIONS = [
  { emoji: '☁️', title: 'Salesforce Administration',         issuer: 'Seven Mentor Pvt Ltd, Pune', file: '/certificate/Salesforce_admin.pdf' },
  { emoji: '⚡', title: 'Salesforce Developer',              issuer: 'Seven Mentor Pvt Ltd, Pune', file: '/certificate/Salesforce_developer.pdf' },
  { emoji: '🧠', title: 'Salesforce Certified AI Associate', issuer: 'Salesforce',                  file: '/certificate/Salesforce_AIAssociate_Certificate.pdf' },
  { emoji: '📜', title: 'Complete JavaScript',               issuer: 'Udemy',                       file: '/certificate/JavaScript.pdf' },
  { emoji: '🐍', title: 'Python',                            issuer: 'Internshala',                 file: '/certificate/Python.pdf' },
  { emoji: '🤖', title: 'ChatGPT',                           issuer: 'Udemy',                       file: '/certificate/ChatGpt.pdf' },
]

export const PROJECTS = [
  {
    title:    'Airline Reservation',
    category: 'BCA',
    emoji:    '✈️',
    color:    '#38bdf8',
    stack:    'HTML, CSS, JS, Bootstrap, C#, SQL, ASP.NET',
    doc:      '/project_d/Flyway_Major.pdf',
    link:     null,
    img:      '/images/airline.png',
  },
  {
    title:    'Online Pizza Ordering System',
    category: 'BCA',
    emoji:    '🍕',
    color:    '#f97316',
    stack:    'HTML, CSS, JS, C#, SQL, ASP.NET',
    doc:      '/project_d/Pizza_Hut.pdf',
    link:     null,
    img:      '/images/pizza.png',
  },
  {
    title:    'Car Rental Website',
    category: 'MCA',
    emoji:    '🚗',
    color:    '#a78bfa',
    stack:    'HTML, CSS, JS, PHP, XAMPP Server, Bootstrap',
    doc:      '/project_d/Car_Rental_Website.pdf',
    link:     null,
    img:      '/images/car.png',
  },
  {
    title:    'Stop Watch App',
    category: 'MCA',
    emoji:    '⏱️',
    color:    '#34d399',
    stack:    'HTML, CSS, JS, Java, Android Studio',
    doc:      null,
    link:     null,
    img:      null,
  },
  {
    title:    'Text Utils',
    category: 'Personal',
    emoji:    '📝',
    color:    '#ec4899',
    stack:    'React.js, Bootstrap 5, JavaScript',
    doc:      null,
    link:     'https://vivekjadhav08.github.io/TextUtil-React/',
    img:      '/images/textutils.png',
  },
  {
    title:    'News Website',
    category: 'Personal',
    emoji:    '📰',
    color:    '#fbbf24',
    stack:    'React.js, Bootstrap 5, JavaScript',
    doc:      '/project_d/NewsApp.pdf',
    link:     null,
    img:      '/images/news.png',
  },
]

export const EXPERIENCE = [
  {
    role:    'Software Developer',
    company: 'Xchange Data Technologies',
    period:  'Nov 2024 – Present',
    current: true,
    bar:     'linear-gradient(180deg,#60a5fa,#a78bfa)',
    points: [
      'Developed and integrated REST APIs using .NET technologies',
      'Built APIs for mobile applications and web-based admin panels',
      'Implemented JWT Authentication and Forgot Password with email integration',
      'Developed responsive views using Blazor for mobile and web',
      'Followed Onion Architecture principles for clean backend code',
    ],
    projects: [
      {
        name: 'Lalkar News App — Sangli (2025)',
        desc: 'RESTful APIs for mobile · Blazor admin portal · Secure content management',
      },
      {
        name: 'Zilla Parishad Sangli — Govt. Project (2025)',
        desc: 'JWT auth + email services · Responsive web views · Onion Architecture · Mobile & web portal APIs',
      },
    ],
  },
  {
    role:    'Salesforce Developer',
    company: 'Neevas',
    period:  'Sep 2024 – Oct 2024',
    current: false,
    bar:     'linear-gradient(180deg,#a78bfa,#f472b6)',
    points:  ['Salesforce development internship — Apex, LWC, and Flow automation'],
    projects: [],
  },
  {
    role:    'Software Development Intern',
    company: 'Virtue Byte, Pune',
    period:  'Jan 2023 – Mar 2023',
    current: false,
    bar:     'linear-gradient(180deg,#34d399,#60a5fa)',
    points:  ['Full-stack web development internship'],
    projects: [],
  },
]

export const CONTACT = [
  { emoji: '✉️', type: 'Email',    value: 'vickyjadhav2897@gmail.com',          href: 'mailto:vickyjadhav2897@gmail.com' },
  { emoji: '💼', type: 'LinkedIn', value: 'linkedin.com/in/vivekjadhav2000',     href: 'https://www.linkedin.com/in/vivekjadhav2000/' },
  { emoji: '📞', type: 'Phone',    value: '+91 9613961001',                      href: 'tel:+919613961001' },
  { emoji: '💬', type: 'WhatsApp', value: 'Click to connect',                    href: 'https://wa.me/+919613961001' },
]
