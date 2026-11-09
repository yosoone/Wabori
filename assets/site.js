/* Wabori: the page's scripts, shared by the English and Japanese pages.
 * 1. Builds the portfolio grid from assets/works.js, with a full-size viewer.
 * 2. On the opening screen, lets the picture sink and the title fade as the page scrolls.
 */
(function () {
  var works = window.WABORI_WORKS || [];
  var list = document.getElementById("works");
  if (!list) return;
  /* The Japanese page (<html lang="ja">) uses the _ja wording from works.js */
  var ja = document.documentElement.lang === "ja";
  works = works.map(function (w) {
    return {
      title: (ja && w.title_ja) || w.title,
      place: (ja && w.place_ja) || w.place,
      alt: (ja && w.alt_ja) || w.alt,
      img: w.img
    };
  });
  works.forEach(function (w, i) {
    var li = document.createElement("li");
    var fig = document.createElement("figure");
    var btn = document.createElement("button");
    btn.type = "button"; btn.className = "zoom";
    btn.setAttribute("aria-label", ja ? w.title + "（" + w.place + "）を拡大表示" : "Open " + w.title + " (" + w.place + ") full size");
    btn.addEventListener("click", function () { open(i); });
    var img = document.createElement("img");
    img.className = "photo"; img.src = w.img; img.alt = w.alt; img.loading = "lazy";
    var cap = document.createElement("figcaption");
    var t = document.createElement("span"); t.className = "t"; t.textContent = w.title;
    var p = document.createElement("span"); p.className = "p"; p.textContent = w.place;
    btn.append(img); cap.append(t, p); fig.append(btn, cap); li.append(fig); list.append(li);
  });

  /* Lightbox */
  var lb = document.getElementById("lb");
  if (!lb || typeof lb.showModal !== "function") return;
  var lbImg = lb.querySelector(".lb-stage img");
  var lbT = lb.querySelector(".lb-cap .t");
  var lbP = lb.querySelector(".lb-cap .p");
  var lbN = lb.querySelector(".lb-count");
  var cur = 0;

  function show(i) {
    cur = (i + works.length) % works.length;
    var w = works[cur];
    lbImg.src = w.img; lbImg.alt = w.alt;
    lbT.textContent = w.title; lbP.textContent = w.place;
    lbN.textContent = (cur + 1) + " / " + works.length;
    [cur - 1, cur + 1].forEach(function (j) { new Image().src = works[(j + works.length) % works.length].img; });
  }
  function open(i) { if (!lbImg) return; show(i); document.documentElement.classList.add("lb-lock"); lb.showModal(); }
  lb.addEventListener("close", function () { document.documentElement.classList.remove("lb-lock"); });
  lb.querySelector(".lb-close").addEventListener("click", function () { lb.close(); });
  lb.querySelector(".lb-prev").addEventListener("click", function () { show(cur - 1); });
  lb.querySelector(".lb-next").addEventListener("click", function () { show(cur + 1); });
  lb.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") { e.preventDefault(); show(cur - 1); }
    if (e.key === "ArrowRight") { e.preventDefault(); show(cur + 1); }
  });
  /* A click on the dark ground (not the photo or a button) closes it */
  lb.addEventListener("click", function (e) {
    if (e.target === lb || e.target.classList.contains("lb-stage")) lb.close();
  });
  /* Swipe left or right on phones */
  var x0 = null;
  lb.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", function (e) {
    if (x0 === null) return;
    var dx = e.changedTouches[0].clientX - x0; x0 = null;
    if (Math.abs(dx) > 50) show(cur + (dx < 0 ? 1 : -1));
  });
})();

/* Opening screen: as the page scrolls, the phoenix sinks slowly and the title fades (skipped with reduced motion) */
(function () {
  var stage = document.querySelector(".stage");
  if (!stage || !window.matchMedia || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var ticking = false;
  function update() {
    ticking = false;
    var h = stage.offsetHeight || 1;
    var p = Math.min(Math.max(window.scrollY / h, 0), 1);
    stage.style.setProperty("--p", p.toFixed(3));
  }
  window.addEventListener("scroll", function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  update();
})();
