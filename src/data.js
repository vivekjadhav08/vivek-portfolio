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

// ─── WORK PROJECTS (Live client deliveries at Exchange Data Technology) ───

export const WORK_PROJECTS = [
  {
    name: 'Dainik Lalkar — News Platform',
    date: 'Jan – Mar 2025',
    category: 'Full Stack',
    tech: ['ASP.NET', 'C#', 'REST API', 'Blazor', 'JWT', 'OTP', 'Mobile API'],
    url: 'https://uat.dainiklalkar.com',
    color: '#60a5fa',
    emoji: '📰',
    points: [
      'Forget Password with OTP via Email & SMS — stored in DB with validations',
      'Advertise Controller — image upload & path management in DB',
      'Subscriber module with date validation & automated mail notifications',
      'Mobile APIs: Multiple device login, Login OTP, new Media API',
      'Blazor admin portal for content management',
      'Pagination on all listing pages, Excel export for user data',
    ],
    status: 'Completed',
  },
  {
    name: 'GramGeeta — Geo Tagging ZP Sangli',
    date: 'Apr 2025',
    category: 'Full Stack',
    tech: ['ASP.NET', 'JWT', 'Refresh Token', 'Role-Based Auth', 'Mobile API'],
    url: 'https://gramgeeta.xdtuat.com',
    color: '#34d399',
    emoji: '🗺️',
    points: [
      'JWT Token + Refresh Token authentication system',
      'Role-based login with dynamic menus per role',
      'Forget Password, Request / Verify / Resend OTP via Email',
      'All tables responsive for mobile, pagination throughout',
      'Government project — live on production server',
    ],
    status: 'Completed',
  },
  {
    name: 'Shubhlabh Investment Platform',
    date: 'Sep – Nov 2024',
    category: '.NET',
    tech: ['ASP.NET', 'C#', 'Role Auth', 'Task Management', 'LIC Forms'],
    url: 'http://shubhlabhinvestments.xdtuat.com',
    color: '#a78bfa',
    emoji: '💰',
    points: [
      'User Management — Admin / Employee roles, full CRUD',
      'Customer Entry with Documents, Bank, Policy & Demat info',
      'Task Assignment across LIC, SIP, Mutual Fund, Insurance sectors',
      'Activity Logs & Task Status Tracking (Pending / In Progress / Completed)',
      'Added Vehicle Insurance & New India Assurance forms',
      'LIC Form with new tabs, migrations & Inquiry functionality',
    ],
    status: 'Completed',
  },
  {
    name: 'Cricket Auction System (FNFC)',
    date: 'Apr – May 2025',
    category: 'Full Stack',
    tech: ['ASP.NET', 'SSL', 'Middleware', 'Excel Import', 'SixLabors.ImageSharp'],
    url: 'https://xdtcricketbidadmin.xdtuat.com',
    color: '#f97316',
    emoji: '🏏',
    points: [
      'New FNFC clone app — new port + SSL certificate setup',
      'League Admin middleware (show leagues & run auction)',
      'Hidden fields per league: Address, City, Address Proof',
      'Excel import for offered players with price display at registration',
      'Team PDF with league logo using SixLabors.ImageSharp',
      'Fixed "Yet to Bid" count and resolved 40+ auction settings bugs',
    ],
    status: 'Completed',
  },
  {
    name: 'XDTPL Server Manager (XSMS)',
    date: 'Aug 2024',
    category: '.NET',
    tech: ['ASP.NET', 'JWT', 'Hangfire', 'SSL Management', 'Role Auth'],
    url: 'https://xsms.xdtuat.com',
    color: '#fbbf24',
    emoji: '🖥️',
    points: [
      'JWT auth — User, Domain, Server & SSL management modules',
      'Hangfire background jobs — auto email 2 days before SSL/domain expiry',
      'Role-based menus, full CRUD for all records',
    ],
    status: 'Completed',
  },
  {
    name: 'Vaishanavee Science Academy',
    date: 'Mar 2025 – Present',
    category: 'Full Stack',
    tech: ['ASP.NET', 'WhatsApp API', 'ESSL Biometric', 'Fee Management'],
    url: null,
    color: '#f472b6',
    emoji: '🎓',
    points: [
      'WhatsApp Integration for student & parent notifications',
      'ESSL Biometric device integration for attendance',
      'Fee records module for CA / Non-CA students',
      'Exam module, Staff Reports & Attendance Reports',
    ],
    status: 'In Progress',
  },
]
