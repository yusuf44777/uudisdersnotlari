const notes = [
  {
    id: "anatomy-01",
    course: "Anatomy",
    grade: "1. Sınıf",
    unit: "01",
    title: "Introduction to Locomotor System",
    subtitle: "Kas sistemi, myologia ve sinir sistemine giriş",
    path: "1.%20S%C4%B1n%C4%B1f/Anatomy/01_Lokomotor_Sistem_Calisma_Rehberi.html",
    tags: ["myologia", "sinir sistemi", "final"],
  },
  {
    id: "anatomy-02",
    course: "Anatomy",
    grade: "1. Sınıf",
    unit: "02",
    title: "Back Muscles & Upper Extremity",
    subtitle: "Sırt kasları, üst ekstremite ve brakiyal pleksus",
    path: "1.%20S%C4%B1n%C4%B1f/Anatomy/02_Sirt_Kaslari_Ust_Ekstremite_Calisma_Rehberi.html",
    tags: ["üst ekstremite", "aksilla", "pleksus"],
  },
  {
    id: "anatomy-03",
    course: "Anatomy",
    grade: "1. Sınıf",
    unit: "03",
    title: "Lower Extremity & Lumbosacral Plexus",
    subtitle: "Alt ekstremite, femoral üçgen, ayak ve lumbosakral pleksus",
    path: "1.%20S%C4%B1n%C4%B1f/Anatomy/03_Alt_Ekstremite_Lumbosakral_Pleksus_Calisma_Rehberi.html",
    tags: ["alt ekstremite", "femoral", "lumbosakral"],
  },
  {
    id: "anatomy-04",
    course: "Anatomy",
    grade: "1. Sınıf",
    unit: "04",
    title: "Abdominal & Thorax Muscles, Diaphragm",
    subtitle: "Karın ve toraks kasları, diyafram anatomisi",
    path: "1.%20S%C4%B1n%C4%B1f/Anatomy/04_Karin_Toraks_Kaslari_Diyafram_Calisma_Rehberi.html",
    tags: ["toraks", "karın", "diyafram"],
  },
  {
    id: "anatomy-05",
    course: "Anatomy",
    grade: "1. Sınıf",
    unit: "05",
    title: "Head & Face Muscles, Neck Triangles, Cervical Plexus",
    subtitle: "Baş-yüz kasları, çiğneme, boyun üçgenleri ve servikal pleksus",
    path: "1.%20S%C4%B1n%C4%B1f/Anatomy/05_Bas_Yuz_Boyun_Servikal_Pleksus_Calisma_Rehberi.html",
    tags: ["baş-yüz", "çiğneme", "servikal pleksus"],
  },
  {
    id: "genetics-01",
    course: "Medical Genetics",
    grade: "1. Sınıf",
    unit: "Ders 1",
    title: "Fundamentals of Inheritance and Chromosome Structure",
    subtitle: "Bölüm 1-6: genetiğe giriş, Mendel, HGP, moleküler temel ve kromozom paketlenmesi",
    path: "1.%20S%C4%B1n%C4%B1f/Medical%20Genetics/Genetik_Bolum1_Tarih_ve_Temeller.html",
    tags: ["tarihçe", "Mendel", "HGP", "DNA", "kromozom"],
    children: [
      {
        label: "Bölüm 1",
        title: "Kalıtımın Temelleri ve Tarihçe",
        path: "1.%20S%C4%B1n%C4%B1f/Medical%20Genetics/Genetik_Bolum1_Tarih_ve_Temeller.html",
      },
      {
        label: "Bölüm 2",
        title: "Terminoloji ve Mendel Yasaları",
        path: "1.%20S%C4%B1n%C4%B1f/Medical%20Genetics/Genetik_Bolum2_Terminoloji_ve_Mendel_Yasalari.html",
      },
      {
        label: "Bölüm 3",
        title: "HGP, Genetiğin Dalları ve Klinik Genetik",
        path: "1.%20S%C4%B1n%C4%B1f/Medical%20Genetics/Genetik_Bolum3_HGP_Dallar_Klinik_Genetik.html",
      },
      {
        label: "Bölüm 4",
        title: "Kalıtımın Hücresel ve Moleküler Temeli",
        path: "1.%20S%C4%B1n%C4%B1f/Medical%20Genetics/Genetik_Bolum4_Hucresel_Molekuler_Temel.html",
      },
      {
        label: "Bölüm 5",
        title: "Kromozom Yapısı ve Paketlenmesi I",
        path: "1.%20S%C4%B1n%C4%B1f/Medical%20Genetics/Genetik_Bolum5_Kromozom_Paketlenmesi_1.html",
      },
      {
        label: "Bölüm 6",
        title: "Kromozom Paketlenmesi II ve Anatomisi",
        path: "1.%20S%C4%B1n%C4%B1f/Medical%20Genetics/Genetik_Bolum6_Kromozom_Anatomisi_FINAL.html",
      },
    ],
  },
  {
    id: "genetics-07",
    course: "Medical Genetics",
    grade: "1. Sınıf",
    unit: "Ders 2",
    title: "Mendelian Inheritance",
    subtitle: "Soyağacı analizi, kalıtım paternleri ve Punnett square",
    path: "1.%20S%C4%B1n%C4%B1f/Medical%20Genetics/Ders2_Mendelian_Inheritance_Calisma_Rehberi.html",
    tags: ["pedigree", "Punnett", "kalıtım paterni"],
  },
  {
    id: "genetics-08",
    course: "Medical Genetics",
    grade: "1. Sınıf",
    unit: "Ders 3",
    title: "Non-Mendelian Inheritance",
    subtitle: "İmprinting, mosaicism, triplet repeat, mitochondrial ve multifactorial kalıtım",
    path: "1.%20S%C4%B1n%C4%B1f/Medical%20Genetics/Ders3_NonMendelian_Inheritance_Calisma_Rehberi.html",
    tags: ["imprinting", "mosaicism", "mitochondrial"],
  },
  {
    id: "genetics-09",
    course: "Medical Genetics",
    grade: "1. Sınıf",
    unit: "Ders 4",
    title: "Mutations and Mutagens",
    subtitle: "Mutajenler, DNA onarımı, gen mutasyonları ve kromozom anomalileri",
    path: "1.%20S%C4%B1n%C4%B1f/Medical%20Genetics/Ders4_Mutations_and_Mutagens_Calisma_Rehberi.html",
    tags: ["mutasyon", "mutajen", "DNA onarımı"],
  },
  {
    id: "genetics-10",
    course: "Medical Genetics",
    grade: "1. Sınıf",
    unit: "Ders 5",
    title: "Epigenetics & Nutrigenetics",
    subtitle: "Epigenom, DNA metilasyonu, histon modifikasyonu ve gen-diyet etkileşimi",
    path: "1.%20S%C4%B1n%C4%B1f/Medical%20Genetics/Ders5_Epigenetics_Nutrigenetics_Calisma_Rehberi.html",
    tags: ["epigenetik", "nutrigenetik", "metilasyon"],
  },
  {
    id: "genetics-11",
    course: "Medical Genetics",
    grade: "1. Sınıf",
    unit: "Ders 6",
    title: "Cancer Genetics",
    subtitle: "Tümör gelişimi, somatik mutasyonlar, onkogenler ve tümör baskılayıcı genler",
    path: "1.%20S%C4%B1n%C4%B1f/Medical%20Genetics/Ders6_Cancer_Genetics_Calisma_Rehberi.html",
    tags: ["kanser", "onkogen", "tümör baskılayıcı"],
  },
  {
    id: "biochemistry-01",
    course: "Biochemistry",
    grade: "1. Sınıf",
    unit: "Metabolizma",
    title: "Glikoliz (Glycolysis)",
    subtitle: "Glikolizin fazları, GLUT taşıyıcıları, enerji bilançosu, regülasyon ve klinik korelasyonlar",
    path: "1.%20S%C4%B1n%C4%B1f/Biochemistry/Glikoliz_Calisma_Rehberi.html",
    tags: ["glikoliz", "glukoz", "ATP"],
  },
  {
    id: "biochemistry-02",
    course: "Biochemistry",
    grade: "1. Sınıf",
    unit: "Hormonlar",
    title: "Hipotalamus & Hipofiz Hormonları",
    subtitle: "Hipotalamo-hipofizer aks, releasing/inhibiting hormonlar, GH, prolaktin, GnRH ve posterior hipofiz",
    path: "1.%20S%C4%B1n%C4%B1f/Biochemistry/Hipotalamus_Hipofiz_Hormonlari_Calisma_Rehberi.html",
    tags: ["hipotalamus", "hipofiz", "hormon"],
  },
  {
    id: "biochemistry-03",
    course: "Biochemistry",
    grade: "1. Sınıf",
    unit: "Metabolizma",
    title: "Krebs / Sitrik Asit Döngüsü (TCA)",
    subtitle: "TCA döngüsü, ara ürünler, enerji üretimi ve final için metabolik bağlantılar",
    path: "1.%20S%C4%B1n%C4%B1f/Biochemistry/TCA_Krebs_Dongusu_Calisma_Rehberi.html",
    tags: ["TCA", "Krebs", "sitrik asit"],
  },
];

const STORAGE_KEY = "uudis-notlari-completed-v1";

const state = {
  filter: "all",
  query: "",
  language: window.UUDISLanguage?.getLanguage?.() || "tr",
  completed: loadCompleted(),
};

const grid = document.querySelector("#noteGrid");
const searchInput = document.querySelector("#searchInput");
const resultCount = document.querySelector("#resultCount");
const completedCount = document.querySelector("#completedCount");
const emptyState = document.querySelector("#emptyState");
const resetProgress = document.querySelector("#resetProgress");
const filterTabs = [...document.querySelectorAll(".filter-tab")];
const courseJumps = [...document.querySelectorAll("[data-course-jump]")];
const totalHtmlNotes = notes.reduce((total, note) => total + (note.children ? note.children.length : 1), 0);

function loadCompleted() {
  try {
    const validIds = new Set(notes.map((note) => note.id));
    const savedIds = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return new Set(savedIds.filter((id) => validIds.has(id)));
  } catch {
    return new Set();
  }
}

function saveCompleted() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...state.completed]));
}

function normalizeText(value) {
  return value
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replaceAll("ı", "i")
    .replaceAll("ğ", "g")
    .replaceAll("ü", "u")
    .replaceAll("ş", "s")
    .replaceAll("ö", "o")
    .replaceAll("ç", "c");
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function icon(name) {
  const icons = {
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6"/></svg>',
    check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>',
  };

  return icons[name] || "";
}

function localizePath(path) {
  return window.UUDISLanguage?.withLanguage
    ? window.UUDISLanguage.withLanguage(path)
    : path;
}

function noteSearchText(note) {
  const childText = note.children
    ? note.children.flatMap((child) => [child.label, child.title])
    : [];

  return normalizeText([
    note.course,
    note.grade,
    note.unit,
    note.title,
    note.subtitle,
    ...note.tags,
    ...childText,
  ].join(" "));
}

function getVisibleNotes() {
  const query = normalizeText(state.query.trim());

  return notes.filter((note) => {
    const matchesFilter = state.filter === "all" || note.course === state.filter;
    const matchesQuery = !query || noteSearchText(note).includes(query);
    return matchesFilter && matchesQuery;
  });
}

function render() {
  const visibleNotes = getVisibleNotes();

  grid.innerHTML = visibleNotes.map((note) => {
    const completed = state.completed.has(note.id);
    const tags = note.tags
      .map((tag) => `<span>${escapeHtml(tag)}</span>`)
      .join("");
    const children = note.children
      ? `
        <div class="chapter-list" aria-label="Ders içindeki bölümler">
          ${note.children.map((child) => `
            <a href="${localizePath(child.path)}">
              <strong>${escapeHtml(child.label)}</strong>
              <span>${escapeHtml(child.title)}</span>
            </a>
          `).join("")}
        </div>
      `
      : "";

    return `
      <article class="note-card${note.children ? " is-grouped" : ""}${completed ? " is-complete" : ""}" data-course="${escapeHtml(note.course)}">
        <div>
          <div class="note-kicker">
            <span class="course-dot">${escapeHtml(note.course)}</span>
            <span>${escapeHtml(note.unit)}</span>
          </div>
          <h3>${escapeHtml(note.title)}</h3>
          <p>${escapeHtml(note.subtitle)}</p>
          <div class="tag-list" aria-label="Konu etiketleri">${tags}</div>
          ${children}
        </div>
        <div></div>
        <div class="note-actions">
          <a class="open-note" href="${localizePath(note.path)}">
            <span>${note.children ? "Ders 1'e başla" : "Notu aç"}</span>
            ${icon("arrow")}
          </a>
          <button class="complete-toggle" type="button" data-complete="${note.id}" aria-pressed="${completed}" title="${completed ? "Tamamlandı işaretini kaldır" : "Tamamlandı olarak işaretle"}">
            ${icon("check")}
            <span>${completed ? "Tamamlandı" : "Tamamlandı olarak işaretle"}</span>
          </button>
        </div>
      </article>
    `;
  }).join("");

  resultCount.textContent = `${visibleNotes.length} kayıt gösteriliyor`;
  completedCount.textContent = state.completed.size.toString();
  emptyState.hidden = visibleNotes.length > 0;
  emptyState.textContent = state.query.trim()
    ? "Bu aramada not bulunamadı."
    : `${state.filter} klasöründe henüz HTML not yok.`;
  resetProgress.disabled = state.completed.size === 0;

  if (state.language === "en") {
    window.UUDISLanguage?.translatePage?.();
  }
}

function setFilter(filter) {
  state.filter = filter;
  filterTabs.forEach((tab) => {
    const active = tab.dataset.filter === filter;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-pressed", String(active));
  });
  render();
}

filterTabs.forEach((tab) => {
  tab.setAttribute("aria-pressed", String(tab.classList.contains("is-active")));
  tab.addEventListener("click", () => setFilter(tab.dataset.filter));
});

courseJumps.forEach((link) => {
  link.addEventListener("click", () => {
    setFilter(link.dataset.courseJump);
  });
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  render();
});

window.addEventListener("uudis:languagechange", (event) => {
  state.language = event.detail.language;
  render();
});

grid.addEventListener("click", (event) => {
  const toggle = event.target.closest("[data-complete]");
  if (!toggle) return;

  const id = toggle.dataset.complete;
  if (state.completed.has(id)) {
    state.completed.delete(id);
  } else {
    state.completed.add(id);
  }

  saveCompleted();
  render();
});

resetProgress.addEventListener("click", () => {
  if (state.completed.size === 0) return;
  state.completed.clear();
  saveCompleted();
  render();
});

document.querySelector("[data-stat='notes']").textContent = totalHtmlNotes.toString();
render();
