// =========================
// ميزان V1
// =========================

let balance = Number(localStorage.getItem("balance")) || 0;

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

["fajr","dhuhr","asr","maghrib","isha"].forEach(id=>{

    document.getElementById(id).onclick=()=>{

        balance +=5;

        vibrate();

        updateBalance();

    }

});

// =========================
// الذنب +10
// =========================

document.getElementById("sin").onclick=()=>{

    balance +=10;

    vibrate();

    updateBalance();

};

// =========================
// نقص 5 ريال
// =========================

["witr","duha","zikr","quran","good"].forEach(id=>{

    document.getElementById(id).onclick=()=>{

        balance -=5;

        if(balance<0){

            balance=0;

        }

        vibrate();

        updateBalance();

    }

});

// =========================
// تم التصدق
// =========================

document.getElementById("donate").onclick=()=>{

    if(confirm("هل أنت متأكد أنك تصدقت بالمبلغ؟")){

        balance=0;

        updateBalance();

        alert("جزاك الله خيرًا 🌹");

    }

};
