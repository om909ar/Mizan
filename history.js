const history = JSON.parse(localStorage.getItem("history")) || [];

const historyList = document.getElementById("historyList");

if (history.length === 0) {

    historyList.innerHTML = `
        <div class="money-box" onclick="openDetails(${index})">
            <h2>لا توجد سجلات حتى الآن</h2>
            <p style="color:#9CA3AF;">
                سيتم حفظ كل شهر هنا بعد الضغط على
                <br>
                <strong>تم التصدق</strong>
            </p>
        </div>
    `;

} else {

   history.forEach((item, index) => {

        historyList.innerHTML += `
            <div class="money-box">

                <h2>${item.month}</h2>

                <h1>${item.balance} ريال</h1>

            </div>
        `;

    });

}

function openDetails(index){

    localStorage.setItem("selectedHistory", index);

    window.location.href = "details.html";

}
