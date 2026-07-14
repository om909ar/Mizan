const settingsBox = document.getElementById("settingsBox");

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

document.getElementById("prayerPlus").onclick = () => {

    prayerValue++;

    prayerText.textContent = prayerValue + " ريال";

};

document.getElementById("prayerMinus").onclick = () => {

    if (prayerValue > 1) {

        prayerValue--;

        prayerText.textContent = prayerValue + " ريال";

    }

};