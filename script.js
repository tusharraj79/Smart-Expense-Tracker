let total = 0;

const expenses = [];

const ctx = document.getElementById('expenseChart').getContext('2d');

const expenseChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'Daily Expenses',
            data: [],
            borderWidth: 1
        }]
    },

    options: {
        responsive: true,

        plugins: {
            legend: {
                labels: {
                    color: 'white'
                }
            }
        },

        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: 'white'
                }
            },

            x: {
                ticks: {
                    color: 'white'
                }
            }
        }
    }
});

function addExpense() {

    const title = document.getElementById('title').value;
    const amount = document.getElementById('amount').value;
    const category = document.getElementById('category').value;

    if(title === '' || amount === '') {
        alert('Please fill all fields');
        return;
    }

    const table = document.getElementById('expense-list');

    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${title}</td>
        <td>₹${amount}</td>
        <td>${category}</td>
        <td>
            <button onclick="deleteExpense(this, ${amount})">
                Delete
            </button>
        </td>
    `;

    table.appendChild(row);

    total += parseInt(amount);

    document.getElementById('total').innerText = total;

    expenses.push({
        title,
        amount
    });

    updateChart();

    document.getElementById('title').value = '';
    document.getElementById('amount').value = '';
}

function updateChart() {

    expenseChart.data.labels = expenses.map(
        expense => expense.title
    );

    expenseChart.data.datasets[0].data = expenses.map(
        expense => expense.amount
    );

    expenseChart.update();
}

function deleteExpense(button, amount) {

    const row = button.parentElement.parentElement;

    row.remove();

    total -= amount;

    document.getElementById('total').innerText = total;
}
