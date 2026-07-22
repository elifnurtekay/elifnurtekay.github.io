const portfolio = {
  contact: {
    email: "elifnurtekay29@gmail.com",
    emailJs: {
      publicKey: "UVyr1L194MX0rjwDC",
      serviceId: "portfolio",
      templateId: "template_0d1k5b3"
    }
  },

  highlights: [
    {
      value: "4",
      label: "academic publications"
    },
    {
      value: "Best Student Paper",
      label: "INFUS 2026"
    },
    {
      value: "2nd / 800 teams",
      label: "Turkcell competition"
    },
    {
      value: "1st Place",
      label: "AI & Data Science"
    }
  ],

  experience: [
    {
      period: "Aug 2024 – Present",
      role: "Research Assistant",
      organization: "ANLAM-NET Research LAB, Ankara University",
      bullets: [
        "Contribute to research on multimodal video and brand memorability prediction, including data preparation, model development, evaluation, and experimental analysis.",
        "Contribute to technical documentation, academic publications, and competition-related research and presentation processes."
      ]
    },
    {
      period: "Jul 2025 – Aug 2025",
      role: "Artificial Intelligence Applications Unit Intern",
      organization: "TÜBİTAK SAGE",
      bullets: [
        "Researched and fine-tuned super-resolution approaches for large-scale satellite imagery.",
        "Worked on patch-based image processing and stitching workflows to reconstruct high-resolution outputs from large satellite images."
      ]
    },
    {
      period: "Mar 2025 – Jun 2025",
      role: "Part-Time Student Employee",
      organization: "Ankara University Project Support Office",
      bullets: [
        "Maintained and updated institutional website pages and digital content."
      ]
    },
    {
      period: "Jul 2024 – Aug 2024",
      role: "Data Annotation Intern",
      organization: "SA Innovation",
      bullets: [
        "Labeled, cleaned, normalized, and organized speech and text data for sentiment-analysis studies.",
        "Prepared datasets for classification by reviewing annotation quality and correcting inconsistent records."
      ]
    }
  ],

  projects: [
    {
      id: "memovision",
      title: "MemoVision",
      subtitle: "Video and Brand Memorability Platform",

      categories: [
        "Artificial Intelligence",
        "Web Application",
        "Research"
      ],

      status: "Completed",
      year: "2025–2026",

      summary:
        "An AI-based platform developed to analyze video and brand memorability and present prediction results through a working web application.",

      overview:
        "MemoVision is an artificial intelligence platform focused on video and brand memorability analysis. It brings together applied research, experimental model development, and a working web application designed to present prediction results through an accessible user experience.",

      challenge:
        "Support the analysis and prediction of how memorable digital media content and its associated brand may be for viewers.",

      contribution:
        "Contributed to data preparation, model experimentation, evaluation, result analysis, technical documentation, academic publications, and the presentation of project outcomes in research and competition settings.",

      approach:
        "The project uses multimodal artificial intelligence methods to examine different forms of information in digital media. Detailed implementation, model configuration, and internal evaluation information are not publicly disclosed.",

      outputs: [
        "A working web-based platform for presenting video and brand memorability prediction results.",
        "Second place among 800 teams in Turkcell Yarının Teknoloji Liderleri Competition.",
        "Academic publications presented through IEEE UBMK, MediaEval 2025, and MediaEval 2026."
      ],

      technologies: [
        "Artificial Intelligence",
        "Multimodal Learning",
        "Web Application",
        "Model Evaluation"
      ],

      relatedPublications: [
        "ubmk-2025",
        "mediaeval-2025",
        "mediaeval-2026"
      ],

      relatedAwards: [
        "turkcell-2026"
      ],

      relatedPrograms: [
        "TÜBİTAK 2209-A",
        "Turkcell Yarının Teknoloji Liderleri"
      ],

      privacyStatus:
        "Working application · Selected technical details restricted",

      featured: true,

      image: null,
      imageAlt: "MemoVision project cover"
    },

    {
      id: "airfoil-rl",

      title:
        "Aerodynamic Shape Optimisation Using Reinforcement Learning",

      subtitle: "TUSAŞ LIFT UP Capstone Project",

      categories: [
        "Artificial Intelligence",
        "Research",
        "Web Application"
      ],

      status: "Completed",
      year: "2025–2026",

      summary:
        "A reinforcement-learning-based aerodynamic shape optimisation project combining surrogate modelling, aerodynamic validation, explainability, and a working web interface.",

      overview:
        "This capstone project focused on optimising airfoil geometries using reinforcement learning while considering aerodynamic performance and geometric constraints. The study combined model development, validation, explainability analysis, and a web-based interface for presenting results.",

      challenge:
        "Optimise airfoil geometry while respecting aerodynamic performance requirements and geometric constraints.",

      contribution:
        "Contributed to the development and evaluation of the reinforcement-learning optimisation framework, explainability analysis of trained policies, result analysis, technical documentation, and integration of project outputs into a working web interface.",

      approach:
        "The project used CST-based airfoil representation, reinforcement-learning algorithms, hybrid surrogate models, and aerodynamic validation tools. SHAP-based explainability methods were applied to analyse the decisions of trained policies.",

      outputs: [
        "First place in Ankara University’s Artificial Intelligence and Data Science category.",
        "Best Student Paper Award at INFUS 2026.",
        "A working web interface for presenting optimisation and explainability outputs.",
        "An academic publication presented at INFUS 2026."
      ],

      technologies: [
        "Python",
        "Reinforcement Learning",
        "PPO",
        "TD3",
        "SAC",
        "Surrogate Modelling",
        "SHAP",
        "Web Application"
      ],

      relatedPublications: [
        "infus-2026"
      ],

      relatedAwards: [
        "infus-2026",
        "ankara-2026"
      ],

      relatedPrograms: [
        "TUSAŞ LIFT UP"
      ],

      privacyStatus: "Completed academic capstone project",

      featured: true,

      image: "assets/img/projects/airfoil-rl.png",
      imageAlt: "Airfoil reinforcement learning project cover"
    },

    {
      id: "flowtrack",
      title: "FlowTrack",
      subtitle: "Project Management Platform",

      categories: [
        "Full-Stack",
        "Web Application"
      ],

      status: "Completed",
      year: "",

      summary:
        "A full-stack project management platform for task assignment, progress tracking, team coordination, and Gantt-based project planning.",

      overview:
        "FlowTrack is a full-stack project management platform developed to bring task assignment, team organisation, progress monitoring, and project scheduling into a unified web-based workflow.",

      challenge:
        "Help teams organise responsibilities, monitor project progress, and visualise schedules through an accessible management interface.",

      contribution:
        "Contributed to the development of task-management, progress-tracking, team-management, and Gantt-chart workflows across the Django backend and React frontend.",

      approach:
        "The platform uses Django for backend application logic, MongoDB for data storage, and React for the user interface. Gantt-chart visualisations support project scheduling and progress monitoring.",

      outputs: [
        "Task creation and assignment workflows.",
        "Project progress and team-management features.",
        "Gantt-based project schedule visualisation."
      ],

      technologies: [
        "Django",
        "MongoDB",
        "React",
        "Gantt"
      ],

      relatedPublications: [],
      relatedAwards: [],
      relatedPrograms: [],

      privacyStatus: "Academic full-stack project",

      featured: true,

      image: "assets/img/projects/flowtrack.png",
      imageAlt: "FlowTrack project management platform cover"
    },

    {
      id: "realtime",

      title: "Real-Time Messaging and Calling Application",

      subtitle: "Full-Stack Communication Application",

      categories: [
        "Full-Stack",
        "Web Application"
      ],

      status: "Completed",
      year: "",

      summary:
        "A full-stack web application supporting real-time messaging, voice calls, and video calls through browser-based communication technologies.",

      overview:
        "The application was developed to provide real-time text communication alongside browser-based voice and video calling within a single platform.",

      challenge:
        "Support real-time messaging and browser-based voice and video communication in one application.",

      contribution:
        "Developed real-time messaging and calling workflows, server-side communication logic, database integration, and browser-based media communication features.",

      approach:
        "WebSocket was used for real-time messaging and signalling, while WebRTC supported peer-to-peer voice and video communication. MySQL was used for persistent application data.",

      outputs: [
        "Real-time messaging.",
        "Voice calling.",
        "Video calling.",
        "Database-backed communication workflows."
      ],

      technologies: [
        "Node.js",
        "JavaScript",
        "WebSocket",
        "WebRTC",
        "MySQL"
      ],

      relatedPublications: [],
      relatedAwards: [],
      relatedPrograms: [],

      privacyStatus: "Academic full-stack project",

      featured: true,

      image: "assets/img/projects/rtc.png",
      imageAlt:
        "Real-time messaging and calling application interface",

      imageWidth: 1536,
      imageHeight: 864
    },

    {
      id: "teknofest-bap",

      title:
        "AI-Based Perception and Position Estimation for Autonomous Aerial Vehicles",

      subtitle:
        "TEKNOFEST Aviation AI Competition · Ankara University BAP",

      categories: [
        "Artificial Intelligence",
        "Computer Vision",
        "Research",
        "Ongoing"
      ],

      status: "Ongoing",
      year: "2026–Present",

      summary:
        "An ongoing computer vision project covering aerial object detection and tracking, camera-based position estimation, and reference object detection.",

      overview:
        "The project is being developed for the TEKNOFEST Aviation AI Competition with support from Ankara University BAP. It addresses three main tasks: UAV and helicopter detection and tracking, camera-based position estimation, and reference object detection.",

      challenge:
        "Build and validate reliable computer-vision workflows for the competition’s three official tasks.",

      contribution:
        "Contribute to model integration, inference and evaluation pipelines, performance analysis, output validation, and collaborative development using Git and GitHub.",

      approach:
        "The project uses Python-based computer vision and model-evaluation workflows. Detailed implementation choices are not disclosed while the competition and research work are ongoing.",

      outputs: [
        "UAV and helicopter object detection and tracking.",
        "Camera-based position estimation.",
        "Reference object detection.",
        "Ongoing competition and research development."
      ],

      technologies: [
        "Python",
        "Computer Vision",
        "Object Detection",
        "Object Tracking",
        "Position Estimation",
        "Git",
        "GitHub"
      ],

      relatedPublications: [],
      relatedAwards: [],

      relatedPrograms: [
        "TEKNOFEST Aviation AI Competition",
        "Ankara University BAP"
      ],

      privacyStatus:
        "Ongoing competition and research project",

      featured: false,

      image: null,
      imageAlt:
        "Autonomous aerial vehicles perception project cover"
    },

    {
      id: "schedulex",
      title: "ScheduleX",

      subtitle:
        "Constraint-Aware University Timetable Management System",

      categories: [
        "Full-Stack",
        "Web Application"
      ],

      status: "Completed",
      year: "2025",

      summary:
        "A full-stack web application developed to generate university course schedules while considering classroom capacity, instructor availability, accessibility requirements, course types, and scheduling conflicts.",

      overview:
        "ScheduleX is a full-stack scheduling application developed to support the creation of university course timetables. The system evaluates institutional and user-defined constraints while assigning courses to appropriate classrooms and time slots.",

      challenge:
        "Reduce timetable conflicts and improve classroom allocation while considering capacity, accessibility, laboratory requirements, course types, and instructor availability.",

      contribution:
        "Contributed to the design and development of a team-based university timetable management application.",

      approach:
        "The system evaluates possible classroom and time-slot combinations, filters assignments that violate defined constraints, scores valid alternatives, and stores the highest-scoring assignment.",

      outputs: [
        "Automatic course timetable generation.",
        "Constraint-aware classroom and time-slot assignment.",
        "Role-based management and scheduling interfaces.",
        "Conflict reporting for courses that could not be assigned."
      ],

      technologies: [
        "Django",
        "Django REST Framework",
        "MongoDB",
        "REST API"
      ],

      relatedPublications: [],
      relatedAwards: [],

      relatedPrograms: [
        "Ankara University Web Design and Programming Course"
      ],

      privacyStatus: "Academic team project",

      featured: false,

      image: "assets/img/projects/schedulex.png",
      imageAlt:
        "ScheduleX university timetable management system cover"
    },

    {
      id: "agendax",
      title: "AjandaX",

      subtitle:
        "Event and Appointment Management System",

      categories: [
        "Full-Stack",
        "Web Application"
      ],

      status: "Completed",
      year: "",

      summary:
        "A calendar-based web application for managing events, appointments, and reminders through an organised scheduling interface.",

      overview:
        "AjandaX was developed to help users organise events and appointments through calendar-based viewing, editing, and reminder-supported workflows.",

      challenge:
        "Make events, appointments, and time-management workflows accessible through a single calendar-oriented interface.",

      contribution:
        "Developed event creation and editing flows, appointment-management workflows, and calendar-based viewing features.",

      approach:
        "The application uses Django and MongoDB with HTML, CSS, Bootstrap, and JavaScript.",

      outputs: [
        "Event creation and editing.",
        "Appointment management.",
        "Calendar-based viewing.",
        "Reminder-supported scheduling."
      ],

      technologies: [
        "Django",
        "Python",
        "MongoDB",
        "JavaScript",
        "Bootstrap",
        "HTML",
        "CSS"
      ],

      relatedPublications: [],
      relatedAwards: [],
      relatedPrograms: [],

      privacyStatus: "Academic full-stack project",

      featured: false,

      image: "assets/img/projects/agendax.png",
      imageAlt:
        "AjandaX event and appointment management interface",

      imageWidth: 1536,
      imageHeight: 864
    },

    {
      id: "attendance",

      title: "Student Attendance Application",

      subtitle:
        "Web-Based Attendance Management System",

      categories: [
        "Full-Stack",
        "Web Application"
      ],

      status: "Completed",
      year: "",

      summary:
        "A Django-based web application developed to manage student attendance records through a simple digital workflow.",

      overview:
        "The application provides a web-based workflow for recording, reviewing, and managing student attendance information.",

      challenge:
        "Replace manual attendance-management steps with a clear and maintainable digital workflow.",

      contribution:
        "Developed the application workflow using Python, Django, and SQLite3.",

      approach:
        "The system uses Django for application logic and SQLite3 for persistent attendance records.",

      outputs: [
        "Web-based attendance recording.",
        "Attendance record review and management.",
        "Persistent storage through SQLite3."
      ],

      technologies: [
        "Python",
        "Django",
        "SQLite3",
        "HTML",
        "CSS"
      ],

      relatedPublications: [],
      relatedAwards: [],
      relatedPrograms: [],

      privacyStatus: "Academic full-stack project",

      featured: false,

      image: "assets/img/projects/attendance.png",
      imageAlt:
        "Student attendance application interface",

      imageWidth: 1536,
      imageHeight: 864
    },

    {
      id: "yazan-zeka",

      title:
        "Helicopter and UAV Object Detection and Visual Odometry",

      subtitle:
        "GMKA Yazan Zeka Mentorship Program",

      categories: [
        "Artificial Intelligence",
        "Computer Vision",
        "Research"
      ],

      status: "Completed",
      year: "",

      summary:
        "A computer vision project focused on helicopter and UAV detection together with visual-odometry studies for aerial imagery.",

      overview:
        "The project explored object detection, aerial-image analysis, and visual-odometry workflows within the GMKA Yazan Zeka Mentorship Program.",

      challenge:
        "Extract useful object and motion information from aerial imagery.",

      contribution:
        "Contributed to object-detection experiments, aerial-image analysis, visual-odometry studies, model evaluation, and result analysis.",

      approach:
        "The project used computer-vision experimentation for aerial object detection and visual-odometry analysis.",

      outputs: [
        "Helicopter and UAV object-detection studies.",
        "Visual-odometry experimentation.",
        "Model evaluation and result analysis."
      ],

      technologies: [
        "Python",
        "Computer Vision",
        "Object Detection",
        "Visual Odometry",
        "Image Processing"
      ],

      relatedPublications: [],
      relatedAwards: [],

      relatedPrograms: [
        "GMKA Yazan Zeka Mentorship Program"
      ],

      privacyStatus:
        "Mentorship programme project",

      featured: false,

      image: null,
      imageAlt:
        "Helicopter and UAV detection project cover"
    }
  ],

  publications: [
    {
      id: "infus-2026",

      title:
        "Reinforcement Learning-Based Airfoil Shape Optimization Using Hybrid Surrogate Models",

      authors: [
        "Elif Nur Tekay",
        "İrem Azra İşleyen",
        "Mücahit Karaduman",
        "Sadık Yetkin",
        "Rukiye Savran Kızıltepe"
      ],

      venue: "INFUS 2026",
      year: "2026",
      status: "Presented",

      award: "Best Student Paper Award",

      link: "",
      linkLabel: "",

      relatedProject: "airfoil-rl",

      note:
        "Conference paper produced from the completed TUSAŞ LIFT UP capstone project and presented at INFUS 2026."
    },

    {
      id: "mediaeval-2026",

      title:
        "A CLIP-Based Visual-Semantic Embedding Approach for Commercial Memorability Prediction",

      authors: [
        "Elif Nur Tekay",
        "İrem Azra İşleyen",
        "Rukiye Savran Kızıltepe",
        "Murat Karakuş"
      ],

      venue: "MediaEval 2026 Workshop Proceedings",
      year: "2026",
      status: "Published",

      award: "",

      link:
        "https://2026.multimediaeval.com/paper38.pdf",

      linkLabel: "View Paper",

      relatedProject: "memovision",

      note: ""
    },

    {
      id: "ubmk-2025",

      title:
        "Comparative Analysis of MLP and Vision Transformers for Video Memorability Classification",

      authors: [
        "Elif Nur Tekay",
        "İrem Azra İşleyen",
        "Barış Güngör",
        "Murat Karakuş",
        "Rukiye Savran Kızıltepe"
      ],

      venue: "IEEE UBMK 2025",
      year: "2025",
      status: "Published",

      award: "",

      link:
        "https://doi.org/10.1109/UBMK67458.2025.11207010",

      linkLabel: "View DOI",

      relatedProject: "memovision",

      note: ""
    },

    {
      id: "mediaeval-2025",

      title:
        "Multimodal Feature Fusion for Video and Brand Memorability",

      authors: [
        "Elif Nur Tekay",
        "İrem Azra İşleyen",
        "Murat Karakuş",
        "Rukiye Savran Kızıltepe"
      ],

      venue: "MediaEval 2025 Workshop Proceedings",
      year: "2025",
      status: "Published",

      award: "",

      link:
        "https://2025.multimediaeval.com/paper39.pdf",

      linkLabel: "View Paper",

      relatedProject: "memovision",

      note: ""
    }
  ],

  awards: [
    {
      id: "infus-2026",

      title: "Best Student Paper Award",

      organization: "INFUS 2026",

      year: "2026",

      related:
        "Reinforcement Learning-Based Airfoil Shape Optimization Using Hybrid Surrogate Models",

      relatedProject: "airfoil-rl"
    },

    {
      id: "ankara-2026",

      title:
        "First Place — Artificial Intelligence and Data Science Category",

      organization:
        "Ankara University Informatics Project Market and Career Days",

      year: "May 2026",

      related:
        "Aerodynamic Shape Optimisation Using Reinforcement Learning",

      relatedProject: "airfoil-rl"
    },

    {
      id: "turkcell-2026",

      title:
        "Second Place — Turkcell Yarının Teknoloji Liderleri",

      organization: "Turkcell",

      year: "2026",

      related:
        "MemoVision · Second place among 800 teams",

      relatedProject: "memovision"
    }
  ],

  skills: [
    {
      category: "Languages",

      items: [
        "Python",
        "Java",
        "C/C++",
        "JavaScript",
        "PHP",
        "SQL",
        "HTML",
        "CSS"
      ]
    },

    {
      category: "Frontend & Web",

      items: [
        "React",
        "Bootstrap",
        "Responsive Design"
      ]
    },

    {
      category: "Backend",

      items: [
        "Django",
        "Django REST Framework",
        "Node.js",
        "WebSocket",
        "WebRTC"
      ]
    },

    {
      category: "Databases",

      items: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "SQLite3"
      ]
    },

    {
      category: "AI & Data",

      items: [
        "Machine Learning",
        "Deep Learning",
        "Computer Vision",
        "Image Processing",
        "Multimodal Learning",
        "Reinforcement Learning",
        "Explainable AI",
        "GAN",
        "Super-Resolution"
      ]
    },

    {
      category: "Engineering Tools",

      items: [
        "Git",
        "GitHub",
        "Docker",
        "Postman",
        "Linux",
        "Google Colab",
        "Visual Studio",
        "VS Code"
      ]
    }
  ],

  certificates: [
    "Data Analysis School 2025–2026 — AI & Machine Learning Module",
    "Web Development with Django — BTK Academy",
    "C++ Programming — BTK Academy",
    "Java Programming — BTK Academy",
    "Deep Learning Bootcamp",
    "Machine Learning Bootcamps — Akbank and Aygaz",
    "Python Programming 401",
    "White Hat Hacker — Siber Vatan",
    "Introduction to Cybersecurity",
    "Introduction to Linux and Networks — Cisco"
  ]
};