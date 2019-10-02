function testNoteControllerInstantiation() {
  var notecontroller = new noteController();
  assert.isTrue(notecontroller !== undefined);
  console.log("testNoteControllerInstantiation passed")
};

function testInnerHTMLProperty() {
  var notecontroller = new noteController();
  assert.isTrue(notecontroller._notelistview.returnListView() == "<ul></ul>");
  console.log("testInnerHTMLProperty passed")
};

testNoteControllerInstantiation();
testInnerHTMLProperty();