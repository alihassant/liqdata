function calculateAllLiquidation() {
    const price = parseFloat(document.getElementById('price').value);
    const quantity = parseFloat(document.getElementById('quantity').value);

    if (isNaN(price) || isNaN(quantity)) {
        alert("Please enter valid input values.");
        return;
    }

    const leverages = [5, 10, 20, 50];
    const results = [];

    for (let i = 0; i < leverages.length; i++) {
        const leverage = leverages[i];
        const longLiquidation = price - (price / leverage);
        const shortLiquidation = price + (price / leverage);

        results.push({
            leverage: `${leverage}x`,
            long: longLiquidation.toFixed(2),
            short: shortLiquidation.toFixed(2)
        });
    }

    displayResults(results);
}

function displayResults(results) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <table>
            <tr>
                <th>Leverage</th>
                <th>Long Liquidation</th>
                <th>Short Liquidation</th>
            </tr>
            ${results.map(result => `
                <tr>
                    <td>${result.leverage}</td>
                    <td>${result.long}</td>
                    <td>${result.short}</td>
                </tr>
            `).join('')}
        </table>
    `;
}
