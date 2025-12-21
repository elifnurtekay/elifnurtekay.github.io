const projects = [
  // CV'deki projeler + portföyde artırılabilir (daha fazla proje ekleyebilmen için yapı geniş)
  {
    title: "FlowTrack – Project Management Platform",
    description:
      "Django + MongoDB backend, React frontend ile görev atama, ilerleme takibi, ekip yönetimi ve Gantt chart görselleştirmeleri sunan proje yönetim yazılımı.",
    tags: ["Django", "MongoDB", "React", "Gantt", "Web"],
    category: "Web",
    thumb: "assets/img/projects/flowtrack.jpg",
    links: [
      // { label: "GitHub", url: "https://github.com/..." }
    ],
  },
  {
    title: "Video & Brand Memorability (TÜBİTAK 2209-A)",
    description:
      "VideoMem ve Memento10K üzerinde görsel/zamansal/metinsel özelliklerle CLIP tabanlı yaklaşımlar; C3D, ResNet50, EfficientNetB3, YOLOv7 vb. yöntemlerin karşılaştırmalı analizi.",
    tags: ["CLIP", "VideoMem", "Memento10K", "Deep Learning", "CV"],
    category: "Research",
    thumb: "assets/img/projects/mem.jpg",
  },
  {
    title: "Helicopter & UAV Detection + Visual Odometry (Yazan Zeka)",
    description:
      "Görüntü tabanlı nesne tespiti/takibi ve optik akış destekli görsel odometri: UAV/helikopter nesnelerinin sahne içi konum ve hareket bilgilerinin gerçek zamanlı çıkarılması.",
    tags: ["YOLO", "Tracking", "Optical Flow", "VO", "CV"],
    category: "CV",
    thumb: "assets/img/projects/uav.jpg",
  },
  {
    title: "Aerodynamic Shape Optimization Using Reinforcement Learning (TUSAŞ Lift-UP)",
    description:
      "NeuralFoil + XFOIL ve derin öğrenme tabanlı aerodinamik analizler ile RL tabanlı airfoil şekil optimizasyonu; yüksek CL/CD ve uygun kalınlık dağılımı hedefi.",
    tags: ["Reinforcement Learning", "XFOIL", "NeuralFoil", "Optimization"],
    category: "Research",
    thumb: "assets/img/projects/airfoil.jpg",
  },
  {
    title: "AjandaX – Event & Appointment Management",
    description:
      "Web tabanlı ajanda: Django + MongoDB backend; HTML/CSS/Bootstrap/JS frontend; takvim görünümü ve hatırlatıcılarla zaman yönetimi.",
    tags: ["Django", "MongoDB", "JavaScript", "Bootstrap"],
    category: "Web",
    thumb: "assets/img/projects/agendax.png",
  },
  {
    title: "Student Attendance Web App",
    description:
      "Python Django framework ve sqlite3 veri tabanı ile geliştirilen web tabanlı yoklama alma sistemi.",
    tags: ["Django", "SQLite", "Web"],
    category: "Web",
    thumb: "assets/img/projects/attendance.png",
  },
  {
    title: "Real-Time Messaging & Calling (WebSocket + WebRTC)",
    description:
      "Node.js, WebSocket ve WebRTC ile gerçek zamanlı mesajlaşma ve sesli/görüntülü arama; MySQL tabanlı altyapı.",
    tags: ["Node.js", "WebSocket", "WebRTC", "MySQL"],
    category: "Web",
    thumb: "assets/img/projects/rtc.png",
  },
  {
    title: "Melbourne Housing Price Prediction (Data Science)",
    description:
      "EDA → model seçimi → değerlendirme adımlarıyla Melbourne Housing Market verisi üzerinden konut fiyat tahmin modeli.",
    tags: ["Data Analysis", "ML", "EDA"],
    category: "Data",
    thumb: "assets/img/projects/melbourne.jpg",
  },

  // Portföyde “CV’den daha fazla proje” için örnek ekstra kartlar (istersen gerçek projelerinle değiştir)
  {
    title: "Satellite Super-Resolution (Internship @ TÜBİTAK SAGE)",
    description:
      "Büyük ölçekli uydu görüntülerinde detay artırımı: model araştırması, fine-tuning, patch stitching ve en iyi modelin optimizasyonu.",
    tags: ["Super-Resolution", "CV", "Fine-tuning"],
    category: "CV",
    thumb: "assets/img/projects/mem.jpg",
  },
  {
    title: "Sentiment Data Labeling Pipeline (Internship @ SA İNOVASYON)",
    description:
      "Ham veri temizleme/normalize, doğru etiketlerle sınıflandırma ve AI eğitim/test setleri hazırlama.",
    tags: ["NLP", "Data Cleaning", "Labeling"],
    category: "Data",
    thumb: "assets/img/projects/melbourne.jpg",
  },
];

const categories = ["All", ...new Set(projects.map(p => p.category))];

let state = {
  query: "",
  category: "All",
};

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function renderFilters() {
  const wrap = document.getElementById("projectFilters");
  wrap.innerHTML = "";

  categories.forEach(cat => {
    const btn = el("button", "filterbtn", cat);
    btn.type = "button";
    if (cat === state.category) btn.classList.add("is-active");
    btn.addEventListener("click", () => {
      state.category = cat;
      renderFilters();
      renderProjects();
    });
    wrap.appendChild(btn);
  });
}

function matches(project) {
  const q = state.query.trim().toLowerCase();
  const inCategory = state.category === "All" || project.category === state.category;

  if (!q) return inCategory;

  const hay = [
    project.title,
    project.description,
    ...(project.tags || []),
    project.category,
  ].join(" ").toLowerCase();

  return inCategory && hay.includes(q);
}

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = "";

  const visible = projects.filter(matches);

  visible.forEach(p => {
    const card = el("article", "card project");

    const img = document.createElement("img");
    img.className = "project__thumb";
    img.src = p.thumb || "";
    img.alt = `${p.title} thumbnail`;

    const body = el("div", "project__body");
    const title = el("h3", "project__title", p.title);
    const desc = el("p", "project__desc", p.description);

    const badges = el("div", "badges");
    (p.tags || []).slice(0, 6).forEach(t => badges.appendChild(el("span", "badge", t)));

    body.appendChild(title);
    body.appendChild(desc);
    body.appendChild(badges);

    card.appendChild(img);
    card.appendChild(body);

    grid.appendChild(card);
  });

  if (visible.length === 0) {
    const empty = el("div", "muted", "No projects match your search.");
    grid.appendChild(empty);
  }
}

function setupSearch() {
  const input = document.getElementById("projectSearch");
  input.addEventListener("input", (e) => {
    state.query = e.target.value;
    renderProjects();
  });
}

function setupContactForm() {
  const form = document.getElementById("contactForm");
  const hint = document.getElementById("formHint");

  const PUBLIC_KEY = "UVyr1L194MX0rjwDC";
  const SERVICE_ID = "portfolio";          
  const TEMPLATE_ID = "template_0d1k5b3";

  emailjs.init(PUBLIC_KEY);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const from_name = data.get("name").trim();
    const reply_to = data.get("email").trim();
    const message = data.get("message").trim();

    if (!from_name || !reply_to || !message) {
      hint.textContent = "Lütfen tüm alanları doldurun.";
      return;
    }

    hint.textContent = "Gönderiliyor...";

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: from_name,
        reply_to: reply_to,
        message: message,
      });

      hint.textContent = "Mesaj başarıyla gönderildi.";
      form.reset();
      setTimeout(() => (hint.textContent = ""), 3000);
    } catch (error) {
      console.error("EmailJS error:", error);
      hint.textContent = "Gönderim sırasında hata oluştu.";
    }
  });
}

setupContactForm();

function setupMobileMenu() {
  const ham = document.getElementById("hamburger");
  const mobile = document.getElementById("mobileMenu");

  ham.addEventListener("click", () => {
    const expanded = ham.getAttribute("aria-expanded") === "true";
    ham.setAttribute("aria-expanded", String(!expanded));
    mobile.setAttribute("aria-hidden", String(expanded));
    mobile.classList.toggle("is-open", !expanded);
  });

  document.querySelectorAll(".mobile__link").forEach(a => {
    a.addEventListener("click", () => {
      ham.setAttribute("aria-expanded", "false");
      mobile.setAttribute("aria-hidden", "true");
      mobile.classList.remove("is-open");
    });
  });
}

function init() {
  document.getElementById("year").textContent = String(new Date().getFullYear());
  renderFilters();
  renderProjects();
  setupSearch();
  setupContactForm();
  setupMobileMenu();
}

init();
