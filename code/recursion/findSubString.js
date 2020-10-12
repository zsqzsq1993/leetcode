// 30
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
            let match

            const reg = new RegExp(ranked.join(''), 'g')

            while ((match = reg.exec(s))) {
                result.push(match.index)
                reg.lastIndex--
            }
        }
    }

    rankAndCombine([], words)

    return [...new Set(result)]
}
