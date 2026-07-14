const settingsBox = document.getElementById("settingsBox");

const items = [
    { id: "fajr", name: "🕌 الفجر" },
    { id: "dhuhr", name: "🕌 الظهر" },
    { id: "asr", name: "🕌 العصر" },
    { id: "maghrib", name: "🕌 المغرب" },
    { id: "isha", name: "🕌 العشاء" },

    { id: "sin", name: "❌ الذنب" },

    { id: "witr", name: "🤲 الوتر" },
    { id: "duha", name: "☀️ الضحى" },
    { id: "zikr", name: "📿 الذكر" },
    { id: "quran", name: "📖 القرآن" },
    { id: "good", name: "❤️ عمل الخير" }
];

settingsBox.innerHTML = `

<div class="money-box">

    <h2>💰 قيمة الصلاة</h2>

    <div class="setting-row">

        <button id="prayerMinus">➖</button>

        <span id="prayerValue">5 ريال</span>

        <button id="prayerPlus">➕</button>

    </div>

</div>

`;

let values = JSON.parse(localStorage.getItem("values")) || {

    fajr: 5,
    dhuhr: 5,
    asr: 5,
    maghrib: 5,
    isha: 5,

    sin: 10,

    witr: 5,
    duha: 5,
    zikr: 5,
    quran: 5,
    good: 5

};

const prayerText = document.getElementById("prayerValue");

prayerText.textContent = values.fajr + " ريال";

document.getElementById("prayerPlus").onclick = () => {

    values.fajr++;
localStorage.setItem("values", JSON.stringify(values));

    prayerText.textContent = values.fajr + " ريال";

};

document.getElementById("prayerMinus").onclick = () => {

   if (values.fajr > 1) {

        values.fajr--;
localStorage.setItem("values", JSON.stringify(values));

        prayerText.textContent = values.fajr + " ريال";

    }

};