// 459

export default (str) => {
    return /^([a-zA-Z]+)\1+$/.test(str)
}
