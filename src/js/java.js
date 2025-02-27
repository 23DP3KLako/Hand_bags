function showBagTip() {
    const tips = [
        "Izvēlies somu, kas atbilst tavam dzīvesstilam.",
        "Kvalitāte ir svarīgāka par kvantitāti.",
        "Laba somas krāsa ir tāda, kas pieskaņojas tavai garderobei.",
        "Investē klasiskos dizainos, kas nekad neiziet no modes."
    ];
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    document.getElementById("bagTip").innerText = randomTip;
}

function loadCatFact() {
    fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(data => {
            document.getElementById("catFact").innerText = data.fact;
        })
        .catch(error => {
            document.getElementById("catFact").innerText = "Neizdevās ielādēt faktu.";
        });
}

loadCatFact();