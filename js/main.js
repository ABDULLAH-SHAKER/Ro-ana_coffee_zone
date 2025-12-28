function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });
}

const savedLang = localStorage.getItem("lang") || "ar";
setLanguage(savedLang);

function filterMenu(category) {
  const cards = document.querySelectorAll(".card");
  const buttons = document.querySelectorAll(".categories button");

  buttons.forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");

  cards.forEach(card => {
    if (category === "all" || card.dataset.category === category) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// INTRO SPLASH CONTROL
window.addEventListener("load", () => {
  document.body.classList.add("loading");

  setTimeout(() => {
    document.getElementById("intro").classList.add("hide");
    document.body.classList.remove("loading");
  }, 2200);
});

function scrollToCategory(id) {
  const target = document.getElementById(id);
  if (!target) return;

  const headerOffset = 120; 
  const elementPosition = target.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });

  filterMenu(id);
}

function goToCategory(category) {
  filterMenu(category);

  const anchor = document.getElementById(category + "-anchor");
  if (!anchor) return;

  const offset = 130; 
  const top =
    anchor.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top,
    behavior: "smooth",
  });
}


