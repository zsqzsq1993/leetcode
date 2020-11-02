/** 787
 * @param n number of cities
 * @param flights eg: [[0,1,100],[1,2,100],[0,2,500]]
 * @param src: number
 * @param dst: number
 * @param K: maximum K
 */
export default (n, flights, src, dst, K) => {
    const dp = (src, dst, k) => {
        const filteredFlights = flights.filter(item => item[1] === dst)

        return Math.min.apply(null, filteredFlights.map(item => {
            if (item[0] === src && k > -1) return item[2]

            else if (k === 0 && item[0] !== src) return Number.MAX_SAFE_INTEGER

            else return dp(src, item[0], k-1) + item[2]
        }))
    }

    const result = dp(src, dst, K)

    return result >= Number.MAX_SAFE_INTEGER ? -1 : result
}
