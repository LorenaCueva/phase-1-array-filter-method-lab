const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

function findMatching(drivers, name){
    return drivers.filter(e => e.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, match){
    return drivers.filter(e => e.startsWith(match));
}

function matchName(drivers, name){
    return drivers.filter(e => e.name === name);
}

console.log(findMatching(drivers,'bobby'));
console.log(fuzzyMatch(drivers,'Sa'));
