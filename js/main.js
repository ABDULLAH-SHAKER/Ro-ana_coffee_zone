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

