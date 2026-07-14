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

let prayerValue = 5;

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