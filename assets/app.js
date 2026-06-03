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
    unit: "Bölüm 1",
    title: "Kalıtımın Temelleri ve Tarihçe",
    subtitle: "Genetik bilimine giriş, Mendel ve tarihsel kilometre taşları",
    path: "1.%20S%C4%B1n%C4%B1f/Medical%20Genetics/Genetik_Bolum1_Tarih_ve_Temeller.html",
    tags: ["tarihçe", "Mendel", "temeller"],
  },
  {
    id: "genetics-02",
    course: "Medical Genetics",
    grade: "1. Sınıf",
    unit: "Bölüm 2",
    title: "Terminoloji ve Mendel Yasaları",
    subtitle: "Genetik sözlüğü, Mendel prensipleri ve kalıtsal hastalık kategorileri",
    path: "1.%20S%C4%B1n%C4%B1f/Medical%20Genetics/Genetik_Bolum2_Terminoloji_ve_Mendel_Yasalari.html",
    tags: ["terminoloji", "Mendel", "kalıtım"],
  },
  {
    id: "genetics-03",
    course: "Medical Genetics",
    grade: "1. Sınıf",
    unit: "Bölüm 3",
    title: "HGP, Genetiğin Dalları ve Klinik Genetik",
    subtitle: "İnsan Genom Projesi, tıbbi genetik alanları ve danışma",
    path: "1.%20S%C4%B1n%C4%B1f/Medical%20Genetics/Genetik_Bolum3_HGP_Dallar_Klinik_Genetik.html",
    tags: ["HGP", "klinik genetik", "danışma"],
  },
  {
    id: "genetics-04",
    course: "Medical Genetics",
    grade: "1. Sınıf",
    unit: "Bölüm 4",
    title: "Kalıtımın Hücresel ve Moleküler Temeli",
    subtitle: "DNA, nükleik asitler, central dogma ve genom organizasyonu",
    path: "1.%20S%C4%B1n%C4%B1f/Medical%20Genetics/Genetik_Bolum4_Hucresel_Molekuler_Temel.html",
    tags: ["DNA", "central dogma", "moleküler"],
  },
  {
    id: "genetics-05",
    course: "Medical Genetics",
    grade: "1. Sınıf",
    unit: "Bölüm 5",
    title: "Kromozom Yapısı ve Paketlenmesi I",
    subtitle: "Kromatin, histonlar, nükleozom ve paketlenme düzeyleri",
    path: "1.%20S%C4%B1n%C4%B1f/Medical%20Genetics/Genetik_Bolum5_Kromozom_Paketlenmesi_1.html",
    tags: ["kromatin", "histon", "nükleozom"],
  },
  {
    id: "genetics-06",
    course: "Medical Genetics",
    grade: "1. Sınıf",
    unit: "Bölüm 6",
    title: "Kromozom Paketlenmesi II ve Anatomisi",
    subtitle: "Katlanma aşamaları, karyotip, kromatit ve kromatin tipleri",
    path: "1.%20S%C4%B1n%C4%B1f/Medical%20Genetics/Genetik_Bolum6_Kromozom_Anatomisi_FINAL.html",
    tags: ["kromozom", "karyotip", "kromatit"],
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
];

const STORAGE_KEY = "uudis-notlari-completed-v1";

const state = {
  filter: "all",
  query: "",
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

function loadCompleted() {
  try {
    return new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"));
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

function noteSearchText(note) {
  return normalizeText([
    note.course,
    note.grade,
    note.unit,
    note.title,
    note.subtitle,
    ...note.tags,
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

    return `
      <article class="note-card${completed ? " is-complete" : ""}" data-course="${escapeHtml(note.course)}">
        <div>
          <div class="note-kicker">
            <span class="course-dot">${escapeHtml(note.course)}</span>
            <span>${escapeHtml(note.unit)}</span>
          </div>
          <h3>${escapeHtml(note.title)}</h3>
          <p>${escapeHtml(note.subtitle)}</p>
          <div class="tag-list" aria-label="Konu etiketleri">${tags}</div>
        </div>
        <div></div>
        <div class="note-actions">
          <a class="open-note" href="${note.path}">
            <span>Notu aç</span>
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

  resultCount.textContent = `${visibleNotes.length} not gösteriliyor`;
  completedCount.textContent = state.completed.size.toString();
  emptyState.hidden = visibleNotes.length > 0;
  resetProgress.disabled = state.completed.size === 0;
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

document.querySelector("[data-stat='notes']").textContent = notes.length.toString();
render();
