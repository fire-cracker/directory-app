/**
 * A sort compare function to sort an array
 * of objects by some specific key.
 *
 * @method arrayOfObjectsSorter
 * @param a - first element for comparism
 * @param b - second element for comparism
 * @return {Array} sorted Array
 */

export const arrayOfObjectsSorter = (a, b) => {
  let comparism = 0;
  const nameA = a.name.first;
  const nameB = b.name.first;

  if (nameA > nameB) {
    comparism = 1;
  } else if (nameA < nameB) {
    comparism = -1;
  }
  return comparism;
};

/**
 * A filter function to filter for elements
 * which meets the conditions set and sorts the result
 *
 * @method filterContacts
 * @param {Array} contacts - an array of objects
 * @param {String} alphabet - used as the rule for filtering
 * @return {Array} An array of filtered and sorted elements
 */

export const filterContacts = (contacts, alphabet) => {
  let filteredContacts = [];
  if (contacts) {
    filteredContacts = contacts.filter(
      element =>
        element.name.first.charAt(0).toLowerCase() === alphabet.toLowerCase()
    );
  } else {
    return filteredContacts;
  }
  return filteredContacts.sort(arrayOfObjectsSorter);
};

/**
 * A reduce function which returns the number
 * of occurence of an element in the array.
 *
 * @method dataFequency
 * @param {Array} contacts - an array of objects
 * @return {Array} an array of objects
 */

export const dataFequency = contacts => {
  return contacts.reduce((a, b) => {
    if (a[b.name.first.charAt(0)] != null) {
      a[b.name.first.charAt(0)] += 1;
    } else {
      a[b.name.first.charAt(0)] = 1;
    }
    return a;
  }, {});
};
