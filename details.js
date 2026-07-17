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

        <hr>

        <p>🕌 الفجر : ${item.stats.fajr}</p>
        <p>🕌 الظهر : ${item.stats.dhuhr}</p>
        <p>🕌 العصر : ${item.stats.asr}</p>
        <p>🕌 المغرب : ${item.stats.maghrib}</p>
        <p>🕌 العشاء : ${item.stats.isha}</p>
        <p>🕌 الجمعة : ${item.stats.jumuah}</p>


        <hr>

        <p>❌ الذنب : ${item.stats.sin}</p>

        <hr>

        <p>🤲 الوتر : ${item.stats.witr}</p>
        <p>☀️ الضحى : ${item.stats.duha}</p>
        <p>📿 الذكر : ${item.stats.zikr}</p>
        <p>📖 القرآن : ${item.stats.quran}</p>
        <p>❤️ عمل الخير : ${item.stats.good}</p>

    </div>
`;
