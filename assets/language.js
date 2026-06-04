(function () {
  const STORAGE_KEY = "uudis-language";
  const SOURCE_LANGUAGE = "tr";
  const ENGLISH = "en";
  const GOOGLE_SCRIPT_ID = "uudis-google-translate-script";
  const SWITCH_SELECTOR = "[data-language-switch]";
  const OPTION_SELECTOR = "[data-lang-option]";

  let translateRetries = 0;

  function readLanguage() {
    const params = new URLSearchParams(window.location.search);
    if (params.get("lang") === ENGLISH) return ENGLISH;
    return localStorage.getItem(STORAGE_KEY) === ENGLISH ? ENGLISH : SOURCE_LANGUAGE;
  }

  function writeLanguage(language) {
    localStorage.setItem(STORAGE_KEY, language);
  }

  function clearGoogleCookie() {
    const expired = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    document.cookie = expired;

    const host = window.location.hostname;
    if (host && host.includes(".")) {
      document.cookie = `${expired}; domain=.${host}`;
    }
  }

  function setGoogleCookie() {
    const value = `googtrans=/${SOURCE_LANGUAGE}/${ENGLISH}; path=/; max-age=31536000`;
    document.cookie = value;

    const host = window.location.hostname;
    if (host && host.includes(".")) {
      document.cookie = `${value}; domain=.${host}`;
    }
  }

  function injectStyle() {
    if (document.getElementById("uudis-language-style")) return;

    const style = document.createElement("style");
    style.id = "uudis-language-style";
    style.textContent = `
      .language-switch {
        display: inline-grid;
        grid-template-columns: repeat(2, minmax(40px, 1fr));
        gap: 4px;
        padding: 4px;
        border: 1px solid rgba(23, 35, 34, 0.14);
        border-radius: 999px;
        background: rgba(255, 253, 248, 0.82);
        box-shadow: 0 12px 28px rgba(26, 56, 52, 0.12);
        backdrop-filter: blur(12px);
      }

      .language-switch button {
        min-width: 40px;
        min-height: 34px;
        border: 0;
        border-radius: 999px;
        background: transparent;
        color: #526260;
        cursor: pointer;
        font: 800 0.78rem/1 "Avenir Next", "Gill Sans", "Trebuchet MS", sans-serif;
        letter-spacing: 0.02em;
      }

      .language-switch button.is-active {
        background: #0b3f48;
        color: #fffdf8;
      }

      .language-switch.is-floating {
        position: fixed;
        top: 14px;
        right: 14px;
        z-index: 2147483000;
      }

      #google_translate_element,
      .goog-te-banner-frame,
      .goog-te-balloon-frame,
      .goog-te-gadget {
        display: none !important;
      }

      body {
        top: 0 !important;
      }
    `;
    document.head.appendChild(style);
  }

  function ensureHiddenGoogleNode() {
    let node = document.getElementById("google_translate_element");
    if (!node) {
      node = document.createElement("div");
      node.id = "google_translate_element";
      node.setAttribute("aria-hidden", "true");
      document.body.appendChild(node);
    }
    return node;
  }

  function setActiveSwitch(language) {
    document.querySelectorAll(OPTION_SELECTOR).forEach((button) => {
      const active = button.dataset.langOption === language;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    document.documentElement.lang = language;
  }

  function ensureSwitch() {
    let switcher = document.querySelector(SWITCH_SELECTOR);
    if (!switcher) {
      switcher = document.createElement("div");
      switcher.className = "language-switch is-floating";
      switcher.dataset.languageSwitch = "";
      switcher.setAttribute("aria-label", "Language");
      switcher.setAttribute("translate", "no");
      switcher.innerHTML = `
        <button type="button" data-lang-option="tr">TR</button>
        <button type="button" data-lang-option="en">EN</button>
      `;
      document.body.appendChild(switcher);
    }

    switcher.querySelectorAll(OPTION_SELECTOR).forEach((button) => {
      if (button.dataset.languageBound) return;
      button.dataset.languageBound = "true";
      button.addEventListener("click", () => setLanguage(button.dataset.langOption, { userAction: true }));
    });
  }

  function stripLanguageParam() {
    const url = new URL(window.location.href);
    url.searchParams.delete("lang");
    return url.toString();
  }

  function addLanguageParam(path) {
    if (readLanguage() !== ENGLISH) return path;
    const hashIndex = path.indexOf("#");
    const base = hashIndex >= 0 ? path.slice(0, hashIndex) : path;
    const hash = hashIndex >= 0 ? path.slice(hashIndex) : "";
    const separator = base.includes("?") ? "&" : "?";
    return `${base}${separator}lang=en${hash}`;
  }

  function chooseWidgetLanguage() {
    const combo = document.querySelector(".goog-te-combo");
    if (!combo) {
      if (translateRetries < 30) {
        translateRetries += 1;
        window.setTimeout(chooseWidgetLanguage, 250);
      }
      return;
    }

    combo.value = ENGLISH;
    combo.dispatchEvent(new Event("change"));
  }

  function loadGoogleTranslate() {
    ensureHiddenGoogleNode();
    setGoogleCookie();

    window.googleTranslateElementInit = function () {
      if (!window.google || !window.google.translate) return;
      new window.google.translate.TranslateElement({
        pageLanguage: SOURCE_LANGUAGE,
        includedLanguages: `${SOURCE_LANGUAGE},${ENGLISH}`,
        autoDisplay: false
      }, "google_translate_element");
      translateRetries = 0;
      window.setTimeout(chooseWidgetLanguage, 200);
    };

    if (document.getElementById(GOOGLE_SCRIPT_ID)) {
      chooseWidgetLanguage();
      return;
    }

    const script = document.createElement("script");
    script.id = GOOGLE_SCRIPT_ID;
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }

  function translatePage() {
    if (readLanguage() !== ENGLISH) return;
    loadGoogleTranslate();
  }

  function setLanguage(language, options = {}) {
    const nextLanguage = language === ENGLISH ? ENGLISH : SOURCE_LANGUAGE;
    writeLanguage(nextLanguage);
    setActiveSwitch(nextLanguage);

    window.dispatchEvent(new CustomEvent("uudis:languagechange", {
      detail: { language: nextLanguage }
    }));

    if (nextLanguage === ENGLISH) {
      translatePage();
      return;
    }

    clearGoogleCookie();
    if (options.userAction) {
      window.location.href = stripLanguageParam();
    }
  }

  function init() {
    injectStyle();
    ensureSwitch();
    setActiveSwitch(readLanguage());

    if (readLanguage() === ENGLISH) {
      translatePage();
    } else {
      clearGoogleCookie();
    }
  }

  window.UUDISLanguage = {
    getLanguage: readLanguage,
    setLanguage,
    translatePage,
    withLanguage: addLanguageParam
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
