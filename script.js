function calculateLiquidation() {
    const leverage = parseInt(document.getElementById('leverage').value);
    const position = document.getElementById('position').value;
    const entryPrice = parseFloat(document.getElementById('entryPrice').value);
    const quantity = parseFloat(document.getElementById('quantity').value);

    if (isNaN(leverage) || isNaN(entryPrice) || isNaN(quantity)) {
        alert("Please enter valid input values.");
        return;
    }

    const liquidationPrice = position === 'long' ? entryPrice - (entryPrice / leverage) : entryPrice + (entryPrice / leverage);

    const resultElement = document.getElementById('result');
    resultElement.textContent = `Liquidation Price: ${liquidationPrice.toFixed(2)}`;
}
  