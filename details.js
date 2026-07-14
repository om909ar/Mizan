const history = JSON.parse(localStorage.getItem("history")) || [];

const index = localStorage.getItem("selectedHistory");

const item = history[index];

const monthTitle = document.getElementById("monthTitle");

const detailsBox = document.getElementById("detailsBox");

monthTitle.textContent = item.month;

detailsBox.innerHTML = `
    <div class="money-box">

        <h2>مبلغ التصدق</h2>

        <h1>${item.balance} ريال</h1>

    </div>
`;
