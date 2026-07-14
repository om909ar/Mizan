const settingsBox = document.getElementById("settingsBox");

settingsBox.innerHTML = `

<div class="money-box">

    <h2>⚙️ الإعدادات</h2>

    <button id="clearHistory" class="donate-btn">
        🗑️ حذف جميع السجلات
    </button>

    <br><br>

    <button id="resetApp" class="donate-btn">
        🔄 إعادة ضبط التطبيق
    </button>

</div>

<div class="money-box">

    <h2>عن التطبيق</h2>

    <p>الإصدار: 2.0</p>

    <p>المطور: عمر العولة</p>

</div>

`;