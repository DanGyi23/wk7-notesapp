function testNoteListReturnsFullList() {
  var noteList = new NoteList();
  assert.isTrue(noteList.returnList() === noteList.list);
};

function testNoteListAddsNote() {
  var noteList = new NoteList();
  noteList.addNote("Hello!");
  assert.isTrue(noteList.list[0].text === "Hello!");
};

function testNoteListAddsMultipleNotes() {
  var noteList = new NoteList();
  noteList.addNote("Hello!");
  noteList.addNote("There!");
  assert.isTrue(noteList.list[0].text === "Hello!");
  assert.isTrue(noteList.list[1].text === "There!");

};

testNoteListReturnsFullList();
testNoteListAddsNote();
testNoteListAddsMultipleNotes();