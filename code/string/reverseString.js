// 557

export default (string) => {
    return string.split(/\s/g).map(item => {
        return item.split('').reverse().join('')
    }).join(' ')
}
