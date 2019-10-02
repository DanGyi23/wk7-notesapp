function testSingleNoteCanBeInstantiated() {
  var note = new Note("Hello")
  var singlenote = new singleNoteView(note);
  assert.isTrue(singlenote !== undefined);
};

function testSingleNoteCanBeWrappedInHTML() {
  var note = new Note("Hello")
  var singlenote = new singleNoteView(note);
  assert.isTrue(singlenote._note.text == "Hello");
};

testSingleNoteCanBeInstantiated();
testSingleNoteCanBeWrappedInHTML();