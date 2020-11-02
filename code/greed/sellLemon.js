//860

export default (bills) => {
    const PRICE = 5

    const hand = []

    while (bills.length) {
        const bill = bills.shift()

        console.log(bill, hand)

        if (bill > PRICE) {
            let change = bill - PRICE

            for (let index = 0; index < hand.length; index++) {
                if (hand[index] > change) continue
                change -= hand[index]
                hand.splice(index, 1)
                index--
            }

            if (change > 0) return false
        }

        hand.push(bill)

        hand.sort((a, b) => b - a)
    }

    return true
}
