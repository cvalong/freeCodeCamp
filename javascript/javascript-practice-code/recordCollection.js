/*You start with an updateRecords function that takes an object literal, records, containing the musical album collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function.

Your function must always return the entire record collection object.
If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
If value is an empty string, delete the given prop property from the album.
*/
// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name'],
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette'],
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: [],
  },
  5439: {
    albumTitle: 'ABBA Gold',
  },
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  let propUpdate = 'tracks';
  if (value === '') {
    delete records[id][prop];
  } else if (prop === propUpdate) {
    if (!records[id].hasOwnProperty(propUpdate)) {
      records[id][propUpdate] = [value];
    } else {
      records[id][propUpdate].push(value);
    }
  } else {
    records[id][prop] = value;
  }
  return records;
}

//updateRecords(recordCollection, 5439, 'artist', 'ABBA');
updateRecords(recordCollection, 2468, 'tracks', 'Free');
