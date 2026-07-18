const history = JSON.parse(localStorage.getItem("history")) || [];

const historyList = document.getElementById("historyList");

if (history.length === 0) {

    historyList.innerHTML = `
        <div class="money-box">
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
            <div class="history-card" onclick="openDetails(${index})">

               <div class="history-top">

    <h2>${item.month}</h2>

    <button class="delete-btn"
        onclick="deleteRecord(${index});event.stopPropagation();">
        🗑️
    </button>

</div>

<div class="history-amount">
    ${item.balance}
    <span>ريال</span>
</div>

            </div>
        `;

    });

}

function openDetails(index){

    localStorage.setItem("selectedHistory", index);

    window.location.href = "details.html";

}

function deleteRecord(index){

    if(confirm("هل أنت متأكد من حذف هذا السجل؟")){

        history.splice(index, 1);

        localStorage.setItem("history", JSON.stringify(history));

        location.reload();

    }

}
