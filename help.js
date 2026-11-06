// Abschnitte der Hilfeseite: Knopf für alle und Sprung zu einem zugeklappten Abschnitt.
(function () {
  var sections = Array.prototype.slice.call(document.querySelectorAll("details.section"));
  var button = document.getElementById("expand-all");

  function update() {
    var allOpen = sections.every(function (s) { return s.open; });
    button.textContent = allOpen ? button.dataset.close : button.dataset.open;
    button.setAttribute("aria-expanded", allOpen);
  }

  function showHash() {
    var target = location.hash && document.getElementById(location.hash.slice(1));
    if (target && target.tagName === "DETAILS") {
      target.open = true;
      target.scrollIntoView();
    }
  }

  button.hidden = false;
  button.addEventListener("click", function () {
    var open = !sections.every(function (s) { return s.open; });
    sections.forEach(function (s) { s.open = open; });
  });
  sections.forEach(function (s) { s.addEventListener("toggle", update); });
  window.addEventListener("hashchange", showHash);
  showHash();
  update();
})();
