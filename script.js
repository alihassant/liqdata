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
    generateLevelsTable(price);
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

function generateLevelsTable(price) {
    const levels = [33, 44, 48, 57, 66, 77, 88, 111, 125, 150, 166, 177, 186, 200, 225, 275, 288, 330, 440];

    const levelsTable = document.getElementById('levelsTable');
    levelsTable.innerHTML = `
        <table>
            <tr>
                <th>Level</th>
                <th>Added (+)</th>
                <th>Subtracted (-)</th>
                <th>Type</th>
            </tr>
            ${levels.map(level => `
                <tr>
                    <td>${level}</td>
                    <td>${(price + level).toFixed(2)}</td>
                    <td>${(price - level).toFixed(2)}</td>
                    <td>${getLevelType(level)}</td>
                </tr>
            `).join('')}
        </table>
    `;
}

function getLevelType(level) {
    if (level >= 111 && level <= 200) {
        return 'Scalp Levels';
    } else if (level === 225 || level === 275) {
        return 'Swing Levels';
    } else {
        return 'Regular Levels';
    }
}
