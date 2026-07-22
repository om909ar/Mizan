// =========================
// ميزان V1
// =========================

let balance = Number(localStorage.getItem("balance")) || 0;

let history = JSON.parse(localStorage.getItem("history")) || [];

let actions = [];

let dailyClicks = JSON.parse(localStorage.getItem("dailyClicks")) || {};

let values = JSON.parse(localStorage.getItem("values")) || {

    fajr: 10,
    dhuhr: 5,
    asr: 5,
    maghrib: 5,
    isha: 5,
    jumuah: 30,
    sin: 10,

    witr: 5,
    duha: 5,
    zikr: 5,
    quran: 5,
    khf: 10

};

let stats = JSON.parse(localStorage.getItem("stats")) || {

    fajr:0,
    dhuhr:0,
    asr:0,
    maghrib:0,
    isha:0,
    jumuah:0,
    sin:0,

    witr:0,
    duha:0,
    zikr:0,
    quran:0,
    khf:0

};

const balanceText = document.getElementById("balanceNumber");

function updateBalance() {
    balanceText.textContent = balance;
    localStorage.setItem("balance", balance);
}

updateBalance();

function vibrate() {
    if (navigator.vibrate) {
        navigator.vibrate(30);
    }
}

// =========================
// زيادة 5 ريال
// =========================

["fajr","dhuhr","asr","maghrib","isha","jumuah"].forEach(id=>{

    document.getElementById(id).onclick=()=>{

const today = new Date().toDateString();

if (dailyClicks[id] === today) {
    alert("تم تسجيل هذه الصلاة اليوم");
    return;
}

dailyClicks[id] = today;
localStorage.setItem("dailyClicks", JSON.stringify(dailyClicks));

        balance += values[id];
        

        stats[id]++;

        localStorage.setItem("stats", JSON.stringify(stats));

actions.push({
    type: id,
    amount: values[id]
});

        vibrate();

        updateBalance();

    }

});
// =========================
// الذنب +10
// =========================

document.getElementById("sin").onclick = () => {

    balance += values.sin;

    stats.sin++;

    localStorage.setItem("stats", JSON.stringify(stats));

actions.push({
    type: "sin",
    amount: values.sin
});

    vibrate();

    updateBalance();

};
// =========================
// نقص 5 ريال
// =========================

["witr","duha","zikr","quran","khf"].forEach(id=>{

    document.getElementById(id).onclick=()=>{

        balance -= values[id];

        stats[id]++;

        localStorage.setItem("stats", JSON.stringify(stats));

        actions.push({
            type: id,
            amount: -values[id]
        });

        vibrate();

        updateBalance();

    }

});
// =========================
// تم التصدق
// =========================

document.getElementById("donate").onclick = () => {

    if (confirm("هل أنت متأكد أنك تصدقت بالمبلغ؟")) {

        const months = [
    "يناير",
    "فبراير",
    "مارس",
    "أبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر"
];

const now = new Date();

const month = `${months[now.getMonth()]} ${now.getFullYear()}`;

        const existingIndex = history.findIndex(item => item.month === month);

if (existingIndex !== -1) {

    history[existingIndex] = {
        month: month,
        balance: balance,
        stats: { ...stats }
    };

} else {

    history.push({
        month: month,
        balance: balance,
        stats: { ...stats }
    });

}

localStorage.setItem("history", JSON.stringify(history));
        balance = 0;
        localStorage.setItem("balance", balance);

        updateBalance();

        alert("جزاك الله خيرًا 🌹");

    }

};

document.getElementById("undoBtn").addEventListener("click", undoLastAction);

function undoLastAction() {

    if (actions.length === 0) {
        alert("لا توجد عملية للتراجع");
        return;
    }

    const last = actions.pop();

    balance -= last.amount;

    if (last.type === "sin") {

        stats.sin--;

    } else {

        stats[last.type]--;

    }

    if (stats.sin < 0) stats.sin = 0;

    Object.keys(stats).forEach(key => {
        if (stats[key] < 0) stats[key] = 0;
    });

    if (balance < 0) balance = 0;

    localStorage.setItem("stats", JSON.stringify(stats));

    updateBalance();

}

function updateDayBadge() {
    const badge = document.getElementById("dayBadge");
    if (!badge) return;

    const today = new Date();

    badge.textContent = `${today.getMonth() + 1}/${today.getDate()}`;

    const lastDay = new Date(
        today.getFullYear(),
        today.getMonth() + 1,
        0
    ).getDate();

    if (today.getDate() === lastDay) {
        badge.classList.add("last-day");
    } else {
        badge.classList.remove("last-day");
    }
}

updateDayBadge();