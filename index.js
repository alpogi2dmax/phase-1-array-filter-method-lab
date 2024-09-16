// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(collection, name) {
    return collection.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(collection, letters) {
    return collection.filter(driver => driver.startsWith(letters));
}

function matchName(collection, name) {
    return collection.filter(driver => driver.name === name);
}