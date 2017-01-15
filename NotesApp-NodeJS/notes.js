console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('notes-data.json'));
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  // console.log('Adding note ', title, body);
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  var duplicateNotes = notes.filter((note) => note.title === title);
  if (duplicateNotes.length === 0 ) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  // console.log('Reading note', title);

};

var removeNote = (title) => {
  // console.log('Removing note', title);
  var notes = fetchNotes();
  var new_NotesArr = notes.filter((note) => note.title !== title);
  saveNotes(new_NotesArr);
  return notes.length !== new_NotesArr.length;
};

module.exports = {
  addNote, // ES6 notation
  // addNote : addNote ; same as above
  getAll,
  getNote,
  removeNote
};

// module.exports.addNote = () => {
//     console.log('addNote');
//     return 'New note';
// };



// module.exports.add = (a,b) => {
//     return (a+b);
// };
//
// console.log(module);
