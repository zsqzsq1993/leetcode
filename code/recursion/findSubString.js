export default (s, words) => {
    const result = []

    const rankAndCombine = (ranked, rest) => {
        if (rest.length) {
            rest.forEach((item, idx) => {
                const rankedCopy = ranked.slice()

                const restCopy = rest.slice()

                rankedCopy.push(restCopy.splice(idx, 1)[0])

                rankAndCombine(rankedCopy, restCopy)
            })
        } else {
            const index = new RegExp(ranked.join('')).exec(s).index

            console.log(index)

            if (index > -1) {
                result.push(index)
            }
        }
    }

    rankAndCombine([], words)

    return result
}
