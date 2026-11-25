/*DOM Cntent Loaded nachdem alle HTML geladen wurden führt er den rest aus der in den
* gescwungen Klammern ist document.querySelector suchen wir ein element mit einer ID die ID sollte toggletheme sein */
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector("#toggle-theme");
    /*wenns toggle nicht gibt dann macht er return und bricht ab*/
    if (!toggle) return;
    const saved = localStorage.getItem("theme") || "light";
    document.body.dataset.theme = saved;
    /*eventlistener er hört auf etwas was passiert, hier macht er das ob geklickt wird und was dann eingeschaltet ist und speichert das Theme wieder im local storage*/
    toggle.addEventListener("click", () => {
        const next = document.body.dataset.theme === "light" ? "dark" : "light";
        document.body.dataset.theme = next;
        localStorage.setItem("theme", next);
    });
});
