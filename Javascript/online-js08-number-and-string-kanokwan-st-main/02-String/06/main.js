function extractCurrencyValue(string, rate) {
    return `THB${Number(string.slice(1)) * rate}`;
}

extractCurrencyValue('$120', 30); // THB3600