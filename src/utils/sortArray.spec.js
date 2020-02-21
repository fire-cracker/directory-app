import { arrayOfObjectsSorter, dataFequency, filterContacts } from './sortArray'
import contactsData from '../_mocks_/data.json'

describe('Test Utils Function', () => {
    const array = [
        { name: { first: 'Becky' } },
        { name: { first: 'Abbey' } },
        { name: { first: 'Deji' } },
        { name: { first: 'Eggina' } },
        { name: { first: 'Harlot' } },
        { name: { first: 'Carolina' } }
    ]

    test('arrayOfObjectsSorter Function should work as expected', () => {
        const sortedArray = [
            { name: { first: 'Abbey' } },
            { name: { first: 'Becky' } },
            { name: { first: 'Carolina' } },
            { name: { first: 'Deji' } },
            { name: { first: 'Eggina' } },
            { name: { first: 'Harlot' } }
        ]

        expect(array.sort(arrayOfObjectsSorter)).toEqual(sortedArray)
    })

    it('dataFequency should work as expected by returning the freqency of the elements in the array', () => {
        const array = { A: 3, B: 1 , D: 1, F: 1, H: 1, J: 1, R: 2 }
        expect(dataFequency(contactsData)).toEqual(array)
    })

    it('filterContacts should work as expected', () => {
        const filteredArray = [{ name: { first: 'Becky' } }]
        expect(filterContacts(array, 'B')).toEqual(filteredArray)
        expect(filterContacts()).toEqual([])
    })
})