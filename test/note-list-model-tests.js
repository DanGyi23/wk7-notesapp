function testNoteListReturnsFullList() {
  var noteList = new NoteList();
  assert.isTrue(noteList.returnList() === noteList.list);
  console.log("testNoteListReturnsFullList passed")
};

function testNoteListAddsNote() {
  var noteList = new NoteList();
  noteList.addNote("Hello!");
  assert.isTrue(noteList.list[0].text === "Hello!");
  console.log("testNoteListAddsNote passed")
};

function testNoteListAddsMultipleNotes() {
  var noteList = new NoteList();
  noteList.addNote("Hello!");
  noteList.addNote("There!");
  assert.isTrue(noteList.list[0].text === "Hello!");
  assert.isTrue(noteList.list[1].text === "There!");
  console.log("testNoteListAddsMultipleNotes passed")
};

function testEachNoteHasUniqueID() {
  var noteList = new NoteList();
  noteList.addNote("Hello!");
  noteList.addNote("There!");
  assert.isTrue(noteList.list[0].id == 0);
  assert.isTrue(noteList.list[1].id == 1);
  console.log("testEachNoteHasUniqueID passed")
};

testNoteListReturnsFullList();
testNoteListAddsNote();
testNoteListAddsMultipleNotes();
testEachNoteHasUniqueID();