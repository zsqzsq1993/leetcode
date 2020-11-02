export default (prices) => {
    let profit = 0

    const length = prices.length

    for (let i = 0; i < length; i++) {
        for (let j = i; j < length - 1; j++) {
            if (prices[j + 1] >= prices[j]) {
                profit += (prices[j + 1] - prices[j])
                i = j
            } else {
                i = j
                break
            }
        }
    }

    return profit
}
