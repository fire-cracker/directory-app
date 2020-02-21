export const arrayOfObjectsSorter = (a,b) => {
    let comparism = 0;
    const nameA = a.name.first
    const nameB = b.name.first

    if (nameA > nameB) {
        comparism = 1
    } else if (nameA < nameB) {
        comparism = -1
    }
    return comparism
}

export const filterContacts = (contacts, alphabet) => {
    let filteredContacts = [];
    if (contacts) {
        filteredContacts = contacts.filter((element) => (element.name.first.charAt(0).toLowerCase() === alphabet.toLowerCase()));
    } else {
        return filteredContacts;
    }
   return filteredContacts.sort(arrayOfObjectsSorter)
}

export const dataFequency = (contacts) => {
    return contacts.reduce((a, b) => {
         if (a[b.name.first.charAt(0)] != null) {
             a[b.name.first.charAt(0)] += 1
         } else {
             a[b.name.first.charAt(0)] = 1
         }
         return a
     }, {})
 }