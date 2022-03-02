// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  let propUpdate = "tracks";
  if (value == "") {
    delete records[id][prop];
  } else if (prop != propUpdate) {
    records[id][prop] = value;
  } else {
    if (!(records.hasOwnProperty(propUpdate))) {
      records[id][propUpdate] = [value];
    }
    else {
      records[id][propUpdate].push(value);
      console.log(records[id][propUpdate]);
    }
  }
  return records;
}

//updateRecords(recordCollection, 5439, 'artist', 'ABBA');
updateRecords(recordCollection, 2468, "tracks", "Free");