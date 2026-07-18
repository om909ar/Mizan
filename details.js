const history = JSON.parse(localStorage.getItem("history")) || [];

const index = localStorage.getItem("selectedHistory");

const item = history[index];

const monthTitle = document.getElementById("monthTitle");

const detailsBox = document.getElementById("detailsBox");

monthTitle.textContent = item.month;

detailsBox.innerHTML = `
    <div class="money-box">

        <h2>💰 مبلغ التصدق</h2>
        <h1>${item.balance} ريال</h1>

        <div class="section-space"></div>

        <div class="stat-row">
    <span>🕌 الفجر</span>
    <span>${item.stats.fajr}</span>
</div>
        <div class="stat-row">

    <span>🕌 الظهر</span>

    <span>${item.stats.dhuhr}</span>

</div>

<div class="stat-row">

    <span>🕌 العصر</span>

    <span>${item.stats.asr}</span>

</div>

<div class="stat-row">

    <span>🕌 المغرب</span>

    <span>${item.stats.maghrib}</span>

</div>

<div class="stat-row">

    <span>🕌 العشاء</span>

    <span>${item.stats.isha}</span>

</div>

<div class="stat-row">

    <span>🕌 الجمعة</span>

    <span>${item.stats.jumuah}</span>

</div>

<div class="stat-row">

    <span>❌ الذنب</span>

    <span>${item.stats.sin}</span>

</div>


        <div class="section-space"></div>

        <p>❌ الذنب : ${item.stats.sin}</p>

        <div class="section-space"></div>

        <p>🤲 الوتر : ${item.stats.witr}</p>
        <p>☀️ الضحى : ${item.stats.duha}</p>
        <p>📿 الذكر : ${item.stats.zikr}</p>
        <p>📖 القرآن : ${item.stats.quran}</p>
        <p>🤍 سورة الكهف : ${item.stats.khf}</p>

    </div>
`;
