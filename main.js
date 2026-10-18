import "./style.css";

// Kopieren-Buttons im Kontaktbereich
document.querySelectorAll('.copy').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var el = btn.parentElement.querySelector('[data-copy]');
    function ok() { btn.textContent = 'Kopiert'; setTimeout(function () { btn.textContent = 'Kopieren'; }, 1800); }
    function fallback() { var r = document.createRange(); r.selectNodeContents(el); var s = getSelection(); s.removeAllRanges(); s.addRange(r); btn.textContent = 'Markiert'; }
    try { navigator.clipboard.writeText(el.textContent.trim()).then(ok, fallback); } catch (e) { fallback(); }
  });
});
