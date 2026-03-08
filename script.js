const container = document.querySelector(".search-container");

const champions = [
    { name: "Ahri", file: "champions/ahri.html" },
    { name: "Akali", file: "champions/akali.html" },
    { name: "Yone", file: "champions/yone.html" },
    { name: "Evelynn", file: "champions/evelynn.html" },
    { name: "Mel", file: "champions/mel.html" },
    { name: "Pyke", file: "champions/pyke.html" },
    { name: "Seraphine", file: "champions/seraphine.html" },
    { name: "Caitlyn", file: "champions/caitlyn.html" },
    { name: "Vi", file: "champions/vi.html" },
    { name: "Diana", file: "champions/diana.html" },
    { name: "Aphelios", file: "champions/aphelios.html" },
    { name: "Xin Zhao", file: "champions/xin_zhao.html" },
    { name: "Sett", file: "champions/sett.html" },
    { name: "Gwen", file: "champions/gwen.html" },
    { name: "Kayle", file: "champions/kayle.html" },
    { name: "Lux", file: "champions/lux.html" },
    { name: "Briar", file: "champions/briar.html" },
    { name: "Mordekaiser", file: "champions/mordekaiser.html" },
    { name: "Yasuo", file: "champions/yasuo.html" },
    { name: "Nunu & Willump", file: "champions/nunu_and_willump.html" },
    { name: "Katarina", file: "champions/katarina.html" },
    { name: "Aurelion Sol", file: "champions/aurelion_sol.html" },
    { name: "Vel'Koz", file: "champions/velkoz.html" },
    { name: "Fizz", file: "champions/fizz.html" },
    { name: "Ambessa", file: "champions/ambessa.html" },
    { name: "Garen", file: "champions/garen.html" },
];

champions.sort((a, b) => a.name.localeCompare(b.name));

const input = document.getElementById("searchInput");
const results = document.getElementById("results");

// Funkcja wyświetlająca listę
function showList(filter = "") {
    results.innerHTML = "";

    champions
        .filter(champ =>
            champ.name.toLowerCase().startsWith(filter.toLowerCase())
        )
        .forEach(champ => {
            const li = document.createElement("li");
            li.textContent = champ.name;

            li.addEventListener("click", () => {
                window.location.href = champ.file;
            });

            results.appendChild(li);
        });
}

// Kliknięcie w input → pokaż wszystkich
input.addEventListener("focus", () => {
    showList();
});

//  Pisanie → filtruj
input.addEventListener("input", () => {
    showList(input.value);
});

// Klik poza wyszukiwarką → schowaj listę
document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-container")) {
        results.innerHTML = "";
    }
});

input.addEventListener("focus", () => {
    container.classList.add("active");
    showList();
});

document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-container")) {
        results.innerHTML = "";
        container.classList.remove("active");
    }

});
