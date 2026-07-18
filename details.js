const history = JSON.parse(localStorage.getItem("history")) || [];

const index = localStorage.getItem("selectedHistory");

const item = history[index];


const detailsBox = document.getElementById("detailsBox");


detailsBox.innerHTML = `

<div class="summary-card">

    <div class="summary-month">
        ${item.month}
    </div>

    <div class="summary-title">
        💰 مبلغ التصدق
    </div>

    <div class="summary-balance">
        ${item.balance}
        <span>ريال</span>
    </div>

</div>

<div class="group-card">

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

</div>

<div class="group-card">

<h3 class="section-title">الأعمال الصالحة</h3>
        
<div class="stat-row">
    <span>🤲 الوتر</span>
    <span>${item.stats.witr}</span>
</div>

<div class="stat-row">
    <span>☀️ الضحى</span>
    <span>${item.stats.duha}</span>
</div>

<div class="stat-row">
    <span>📿 الذكر</span>
    <span>${item.stats.zikr}</span>
</div>

<div class="stat-row">
    <span>📖 القرآن</span>
    <span>${item.stats.quran}</span>
</div>

<div class="stat-row">
    <span>🤍 سورة الكهف</span>
    <span>${item.stats.khf}</span>
</div>

</div>

`;
