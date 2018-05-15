export default function(amount, options = { currency: "$", significant_figures: 0 }) {
    return `${options.currency}${parseFloat(amount).toFixed(options.significant_figures).replace(/./g, function(c, i, a) {
        return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;
    })}`;
}