function testNoteControllerInstantiation() {
  var notecontroller = new noteController();
  assert.isTrue(notecontroller !== undefined);
};

function testInnerHTMLProperty() {
  var notecontroller = new noteController();
  assert.isTrue(notecontroller._notelistview.returnListView() == "<ul></ul>");
};

testNoteControllerInstantiation();
testInnerHTMLProperty();