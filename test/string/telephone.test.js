import telephone from "../../code/array/telephone"

const input = '23'

const output = ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]

test('telephone', () => {
    expect(telephone(input)).toEqual(output)
    expect(telephone('234')).toEqual([
        'adg', 'adh', 'adi',
        'aeg', 'aeh', 'aei',
        'afg', 'afh', 'afi',
        'bdg', 'bdh', 'bdi',
        'beg', 'beh', 'bei',
        'bfg', 'bfh', 'bfi',
        'cdg', 'cdh', 'cdi',
        'ceg', 'ceh', 'cei',
        'cfg', 'cfh', 'cfi'
    ])
})
