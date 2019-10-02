function testNoteControllerInstantiation() {
  var notelist = new NoteList();
  var notecontroller = new noteController(notelist);
  assert.isTrue(notecontroller !== undefined);
  console.log("testNoteControllerInstantiation passed")
};

function testInnerHTMLProperty() {
  var notelist = new NoteList();
  var notecontroller = new noteController(notelist);
  assert.isTrue(notecontroller._notelistview.returnListView() == "<ul></ul>");
  console.log("testInnerHTMLProperty passed")
};

testNoteControllerInstantiation();
testInnerHTMLProperty();